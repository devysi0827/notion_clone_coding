import { useRecoilState } from "recoil";
import { pageState } from "recoil/pageState";
import styled from "styled-components";
import BlockTree from "./BlockTree";

export default function BlockContainer() {
  const [page, setPage] = useRecoilState(pageState);
  return (
    <Container>
      {page === 0 ? (
        <p className="heading"> page를 만들어보세요</p>
      ) : (
        <>
          <p className="heading">{page}번 페이지</p>
          <BlockTree />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  .heading {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;
