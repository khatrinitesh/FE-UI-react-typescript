/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function EmotionSection() {
  return (
    <div>
      <EmotionStyled />
      <EmotionReact />
    </div>
  );
}

const cardStyle = css`
  padding: 24px;
  border-radius: 16px;
  background: #0f172a;
  color: white;
  text-align: center;
`;

function EmotionReact() {
  return (
    <div css={cardStyle}>
      <h1>Emotion React</h1>

      <p>Styled using @emotion/react.</p>
    </div>
  );
}

const Card = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: #0f172a;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: 700;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  border: 0;
  border-radius: 8px;
  background: #eb17b8;
  color: white;
  cursor: pointer;

  &:hover {
    background: #c9149e;
  }
`;
function EmotionStyled() {
  return (
    <Card>
      <Title>Emotion Styled</Title>
      <p>This component uses @emotion/styled.</p>
      <Button>Click Me</Button>
    </Card>
  );
}
