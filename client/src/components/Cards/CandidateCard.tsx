import React from "react";
import { Image, Card } from "antd";

interface Props {
  name: string;
  foto: string;
}

// The Drower Component to show candidate details should appear hear
const handleOnClick = (e: any) => {
  e.preventDefault();
};

const CandidateCard: React.FC<Props> = ({ name, foto }) => {
  return (
    <>
      <Card title={name} bordered={false} onClick={handleOnClick}>
        <Image width={256} src={foto} />
      </Card>
    </>
  );
};

export default CandidateCard;
