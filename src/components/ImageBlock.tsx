import styled from "styled-components";

export default function ImageBlock(props: { data: string }) {
  return (
    <Container>
      <img src={props.data} alt="err" />
    </Container>
  );
}

const Container = styled.div`
  height: fit-content;
  min-height: 10px;
`;
