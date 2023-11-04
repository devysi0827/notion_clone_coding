import BlockTree from "components/BlockTree";
import RightPanel from "components/RightPanel";
import { useRecoilState } from "recoil";
import { pageState } from "recoil/pageState";
import styled from "styled-components";

export default function Home() {
  const [page, setPage] = useRecoilState(pageState);

  return (
    <Container>
      <RightPanel />
      <div className="main">
        {page === 0 ? (
          <p className="heading"> page를 만들어보세요</p>
        ) : (
          <>
            <p className="heading">{page}번 페이지</p>
            <BlockTree />
          </>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  .main {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .heading {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;
