import { useRecoilState } from "recoil";
import { pageListState, pageState } from "recoil/pageState";
import styled from "styled-components";

export default function RightPanel() {
  const [pageList, setPageList] = useRecoilState(pageListState);
  const [page, setPage] = useRecoilState(pageState);
  const plusPage = () => {
    setPageList([...pageList, pageList.length + 1]);
  };

  return (
    <Container>
      <div>페이지 리스트</div>
      {pageList.map((pageNumber) => (
        <div key={pageNumber} onClick={() => setPage(pageNumber)}>
          - {pageNumber}page
        </div>
      ))}
      <div onClick={() => plusPage()}>페이지 추가하기</div>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid lightgray;
  height: 99vh;
  display: flex;
  flex-direction: column;
  color: #292929;
  background-color: #fbfbfa;
  gap: 10px;
  padding: 10px;
`;
