import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import {
  Form,
  Input,
  Button,
  Select,
  Switch,
  DatePicker,
  Space,
  Result,
} from "antd";
import { SwitchChangeEventHandler } from "antd/lib/switch";

import Avatar from "./UploadAvatar";
import API from "../Api";

// import styled from 'styled-components';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} é um campo obrigatório!",
  types: {
    email: "${label} o e-mail é inválido!",
    number: "${label} não é um número válido!",
  },
  number: {
    range: "${label} deve estar entre ${min} e ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

interface Voter {
  name: string;
  email: string;
  universidade: string;
  bolsa?: string;
  chegada: number;
  candidato: boolean;
  foto?: string;
  bio: string;
}
const RegistrationForm = () => {
  const history = useHistory();
  const { Option } = Select;
  const [isCandidate, setIsCandidate] = useState<boolean>(false);
  const [isLink, setLink] = useState<string>(" ");
  const [chegada, setChegada] = useState<string>(" ");

  const [form] = Form.useForm();

  const onFinish = (values: Voter) => {
    const payload = {
      name: values.name,
      email: values.email,
      universidade: values.universidade,
      bolsa: values.bolsa,
      chegada: chegada,
      candidato: isCandidate,
      foto: isLink,
      bio: values.bio,
    };

    console.log(payload);
    API.post("/voters", payload)
      .then((response) => {
        if (response.status === 201) {
          form.resetFields();
          history.push({
            pathname: "/notification",
            state: {
              status: "success",
              title: "Successo",
              subTitle: "Registou-se com sucesso",
            },
          });
        }
      })
      .catch((error) => {
        form.resetFields();
        history.push({
          pathname: "/notification",
          state: {
            status: "error",
            title: "Ocorreu um erro",
            subTitle: "Ocorreu um erro durante o registo",
          },
        });
      });
  };

  const handleCanditate: SwitchChangeEventHandler | undefined = () =>
    setIsCandidate(!isCandidate);

  useEffect(() => {
    if (isCandidate) {
      API.get("/voters/slink")
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            setLink(response.data.split("?")[0]);
          }
        })
        .catch((error) => {
          console.log("There was an error fetching the S3Bucket link");
        });
    } else {
      setLink(" ");
    }
  }, [isCandidate]);

  const onChangeDate = (date: moment.Moment | null, dateString: string) =>
    setChegada(dateString);

  const date = new Date();

  return date.getMonth() === 11 && date.getDate() > 14 ? (
    <>
      <Form
        {...layout}
        name="Voter-registration"
        form={form}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            {
              required: true,
              type: "string",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="universidade"
          label="Universidade"
          rules={[
            {
              type: "string",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="bolsa"
          label="Bolsa"
          rules={[
            {
              type: "string",
              required: false,
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selecione O Provedor da Bolsa"
            optionFilterProp="children"
            // onChange={onChange}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="MEXT">MEXT</Option>
            <Option value="ABE INTIATIVE">ABE INITIATIVE</Option>
            <Option value="JICA">JICA</Option>
            <Option value="OUTRA">OUTRA</Option>
            <Option value="Nenhuma">NENHUMA</Option>
          </Select>
        </Form.Item>
        <Form.Item name="chegada" label="Ano De Chegada Ao Japão">
          <Space>
            <DatePicker onChange={onChangeDate} picker="year" />
          </Space>
        </Form.Item>
        <Form.Item
          name="candidato"
          label="É Candidato?"
          valuePropName="checked"
          rules={[
            {
              type: "boolean",
              required: false,
            },
          ]}
        >
          <Switch onChange={handleCanditate} />
        </Form.Item>

        {/* the below should be rerender everytime the isCandidate is toggled */}

        {isCandidate ? (
          <>
            <Form.Item name="foto" label="Carregar Foto">
              <Avatar SignedURL={isLink} />
            </Form.Item>
            <Form.Item
              name="bio"
              label="Bio"
              rules={[
                {
                  type: "string",
                  required: true,
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </>
        ) : null}

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  ) : (
    <Result
      status="403"
      title="403"
      subTitle="O Periodo de Recenseamento Expirou."
    />
  );
};

export default RegistrationForm;
