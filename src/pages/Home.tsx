import RightPanel from "components/RightPanel";
import { useRecoilState } from "recoil";
import { pageState } from "recoil/pageState";
import styled from "styled-components";
import { useEffect } from "react";
import BlockServices from "services/blockServices";
import { blockDataState } from "recoil/blockState";
import BlockTree from "components/BlockTree";

export default function Home() {
  const [page, setPage] = useRecoilState(pageState);
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);

  useEffect(() => {
    BlockServices.getBlocks(page).then((res) =>
      setBlockDatas(res.data.data.blocks)
    );
  }, [page, setBlockDatas]);

  return (
    <Container>
      <RightPanel />
      <div className="main">
        {/* 삼단논법을 쓰면 코드가 더러워지는 거 같아서 굉장히 고민입니다. 여기를 뭐로 쓰면 깔끔해질까요? */}
        {page === 0 ? (
          <p className="heading"> page를 만들어보세요</p>
        ) : (
          <>
            <p className="heading">{page}번 페이지</p>
            {blockDatas && <BlockTree blockId={0} />}
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
  .blockPage {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }
  .blockLine {
    display: flex;
    align-items: center;
    border: 1px solid blue;
  }
  .blockInlineList {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
  }
`;
