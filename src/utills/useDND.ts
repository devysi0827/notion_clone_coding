import { useState } from "react";

function useDND(ref: React.MutableRefObject<HTMLDivElement | null>) {
  const [isDrag, setIsDrag] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const [shiftY, setShiftY] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDrag || !ref || !ref.current) return;
    setIsDrag(true);
    setShiftX(e.clientX - ref.current.getBoundingClientRect().left);
    setShiftY(e.clientY - ref.current.getBoundingClientRect().top);

    // 비동기로 인하여 원값 그대로 사용
    setLeft(e.clientX - (e.clientX - ref.current.getBoundingClientRect().left));
    setTop(e.clientY - (e.clientY - ref.current.getBoundingClientRect().top));
  };

  // 전체로 올려야함
  const dragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("isDiffernent", isDrag);
    if (!isDrag) return;
    setLeft(e.clientX - shiftX);
    setTop(e.clientY - shiftY);
  };

  const dragEnd = () => {
    if (!isDrag) return;
    setIsDrag(false);
  };

  return {
    dragStart,
    dragMove,
    dragEnd,
    isDrag,
    top,
    left,
  };
}

export default useDND;
