import { useRecoilState } from "recoil";
import { useAddBlock } from "recoil/blockState";
import { pageListState, pageState } from "recoil/pageState";
import PageServices from "services/pageServices";
import styled from "styled-components";

export default function RightPanel() {
  const [pageList, setPageList] = useRecoilState(pageListState);
  const [page, setPage] = useRecoilState(pageState);
  const { addTextBlock, addImageBlock } = useAddBlock();

  const plusPage = () => {
    PageServices.createPages(page + 1)
      .then((res) => console.log("page생성됨"))
      .then(() => setPageList([...pageList, pageList.length + 1]));
  };

  return (
    <Container>
      <div className="pageMenu">
        <div className="bold">페이지 리스트</div>
        {pageList.map((pageNumber) => (
          <div key={pageNumber} onClick={() => setPage(pageNumber)}>
            - {pageNumber}page
          </div>
        ))}
        <div onClick={() => plusPage()}>페이지 추가하기</div>
      </div>
      <hr />
      {page !== 0 && (
        <div className="toolMenu">
          <div className="bold">블록 도구모음</div>
          <div onClick={addTextBlock}>+ 텍스트 블록 추가</div>
          <div onClick={() => addImageBlock()}>+ 이미지 블록 추가</div>
        </div>
      )}
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
  padding: 20px;

  .bold {
    font-size: 18px;
    font-weight: 700;
  }

  .pageMenu {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .toolMenu {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
