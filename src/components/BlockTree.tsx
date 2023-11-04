import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { blockDataState } from "recoil/blockState";
import { pageState } from "recoil/pageState";
import BlockServices from "services/blockServices";
import styled from "styled-components";
import Tree from "./Tree";

export default function BlockTree() {
  const [page, setPage] = useRecoilState(pageState);
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);

  useEffect(() => {
    BlockServices.getBlocks(page).then((res) =>
      setBlockDatas(res.data.data.blocks)
    );
  }, [page, setBlockDatas]);

  return (
    <Container>
      <Tree blockId={0} />
    </Container>
  );
}

const Container = styled.div`
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
    /* justify-content: center; */
  }
`;
