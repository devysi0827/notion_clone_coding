import styled from "styled-components";

export default function TextBlock(props: { data: string }) {
  return <Container>{props.data}</Container>;
}

const Container = styled.div`
  height: fit-content;
  min-height: 10px;
`;
