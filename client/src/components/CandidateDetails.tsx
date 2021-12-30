import { Descriptions } from "antd";

interface Props {
  name: string;
  universidade: string;
  bolsa: string;
  chegada: number;
  bio: string;
}
const CandidateDetails: React.FC<Props> = ({
  name,
  universidade,
  bolsa,
  chegada,
  bio,
}) => {
  return (
    <div>
      <Descriptions title="User Info" bordered={true} column={1}>
        <Descriptions.Item label="Name">{name}</Descriptions.Item>
        <Descriptions.Item label="Universidade">
          {universidade}
        </Descriptions.Item>
        <Descriptions.Item label="Bolsa">{bolsa}</Descriptions.Item>
        <Descriptions.Item label="Ano de Chegada">{chegada}</Descriptions.Item>
        <Descriptions.Item label="Bio">{bio} </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default CandidateDetails;
