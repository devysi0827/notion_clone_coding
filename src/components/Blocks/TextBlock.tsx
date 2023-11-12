import { useRef } from "react";

export default function TextBlock(props: { data: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  return <div ref={ref}>{props.data}</div>;
}
