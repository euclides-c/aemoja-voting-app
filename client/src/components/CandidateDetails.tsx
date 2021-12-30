import { Image, Descriptions } from "antd";

// give props to this card

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
      <Image
        width={200}
        src="https://aemoja-bucket.s3.ap-northeast-1.amazonaws.com/d10a75321acd9710a033ff8e43f472a4"
      />
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
