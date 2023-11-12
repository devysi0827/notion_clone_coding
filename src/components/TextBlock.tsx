import { useRef } from "react";
import styled from "styled-components";
import useDND from "utills/useDND";

interface TextBlockStyleProps {
  isDrag: boolean;
  top: number;
  left: number;
}

export default function TextBlock(props: { data: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { dragStart, dragMove, dragEnd, isDrag, top, left } = useDND(ref);

  return (
    <Container
      onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        dragStart(e)
      }
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        dragMove(e)
      }
      onMouseUp={() => dragEnd()}
      ref={ref}
      isDrag={isDrag}
      top={top}
      left={left}
    >
      {props.data}
    </Container>
  );
}

const Container = styled.div.attrs((props: TextBlockStyleProps) => ({
  style: {
    position: props.isDrag ? "absolute" : null,
    top: props.top.toString() + "px",
    left: props.left.toString() + "px",
  },
}))<TextBlockStyleProps>`
  height: fit-content;
  min-height: 10px;
`;
