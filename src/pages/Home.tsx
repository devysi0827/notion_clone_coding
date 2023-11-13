import RightPanel from "components/RightPanel/RightPanel";
import { useRecoilState } from "recoil";
import { pageState } from "recoil/pageState";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import BlockServices from "services/blockServices";
import { blockDataState } from "recoil/blockState";
import BlockTree from "components/BlockTree/BlockTree";
import useDND from "utills/useDND";
import { Block } from "types/blockType";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useRecoilState(pageState);
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);
  const { dragMove } = useDND(ref);

  useEffect(() => {
    BlockServices.getBlocks(page).then((res) => {
      const map = blockDatas;
      res.data.data.blocks.map((block: Block) => map.set(block.blockId, block));
      setBlockDatas(map);
    });
  }, [page, setBlockDatas, blockDatas]);

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
            <div
              className="page"
              onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                dragMove(e)
              }
              ref={ref}
            >
              {blockDatas && <BlockTree blockId={0} />}
            </div>
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
  .page {
    user-select: none;
  }
  .page-block {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }
  .line-block {
    display: flex;
    align-items: center;
    border: 1px solid blue;
  }
  .list-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
  }
`;
