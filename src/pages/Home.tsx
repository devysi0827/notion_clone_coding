import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div>패널</div>
      <div>page</div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
