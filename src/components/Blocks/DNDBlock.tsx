import styled from "styled-components";
import { useRef } from "react";
import useDND from "utills/useDND";
import { Block } from "../../types/blockType";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import { useRecoilState } from "recoil";
import { blockDataState } from "store/blockState";

interface TextBlockStyleProps {
  isDrag: boolean;
  top: number;
  left: number;
  border: string;
}

export default function DNDBlock(props: { blockId: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { blockId } = props;
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);
  const block: Block | undefined = blockDatas.get(blockId);
  const {
    dragStart,
    dragEnd,

    isDrag,
    top,
    left,
    isEntered,
    border,
    onDragEnterHandle,
    onDragMoveHandle,
    onDragLeaveHandle,
  } = useDND(ref);

  if (!block) {
    return <div></div>;
  }

  return (
    <Container
      draggable
      onDragStart={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        dragStart(e)
      }
      onDragOver={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDrag) return;
        onDragMoveHandle(e);
      }}
      onDragEnd={() => dragEnd()}
      onDragEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDrag) return;
        onDragEnterHandle(e);
      }}
      onDragLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDrag) return;

        onDragLeaveHandle();
      }}
      id={`block-${blockId}`}
      ref={ref}
      isDrag={isDrag}
      top={top}
      left={left}
      isEntered={isEntered}
      border={border}
    >
      <>
        {
          {
            text: <TextBlock data={block.data} />,
            image: <ImageBlock data={block.data} />,
            node: <div />,
          }[block.type]
        }
      </>
    </Container>
  );
}

const Container = styled.div.attrs((props: TextBlockStyleProps) => ({
  style: {
    // position: props.isDrag ? "absolute" : null,
    top: props.isDrag && props.top.toString() + "px",
    left: props.isDrag && props.left.toString() + "px",
    borderLeft: props.border === "left" ? "green 3px solid" : "",
    borderRight: props.border === "right" ? "green 3px solid" : "",
    borderBottom: props.border === "bottom" ? "green 3px solid" : "",
    borderTop: props.border === "top" ? "green 3px solid" : "",
  },
}))<TextBlockStyleProps>`
  height: fit-content;
  min-height: 10px;
  /* border: 3px solid green; */
  /* padding: 10px; */
`;
