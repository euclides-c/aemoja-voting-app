import { PageHeader, Button, Descriptions } from "antd";
import { ReactChild } from "react";
import { useHistory } from "react-router-dom";
import AppConfig from "../config.json";

const Header = () => {
  const history = useHistory();

  const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label="Recenseamento Eleitoral">
        {AppConfig.recenseamento}
      </Descriptions.Item>
      <Descriptions.Item label="Data Da Eleição">
        {AppConfig.eleicao}
      </Descriptions.Item>

      <Descriptions.Item label="Divulgação dos Resultados">
        {AppConfig.resultado}
      </Descriptions.Item>

      <Descriptions.Item label="Tomada de Posse">
        {AppConfig.posse}
      </Descriptions.Item>
    </Descriptions>
  );

  const extraContent = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        justifyContent: "flex-end",
      }}
    ></div>
  );

  const Content = ({
    children,
    extra,
  }: {
    children: ReactChild;
    extra: any;
  }) => (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );

  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="Plataforma Eleitoral da AEMOJA"
        extra={[
          <Button
            key="Registration"
            onClick={() => history.push("/Registration")}
          >
            Recensear
          </Button>,
          <Button key="vote" onClick={() => history.push("/Vote")}>
            Votar
          </Button>,
          <Button
            key="Results"
            onClick={() => history.push("/Results")}
            type="primary"
          >
            Resultados
          </Button>,
        ]}
      >
        <Content extra={extraContent}>{renderContent()}</Content>
      </PageHeader>
    </>
  );
};

export default Header;
