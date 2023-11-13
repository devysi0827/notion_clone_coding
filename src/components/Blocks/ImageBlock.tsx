import styled from "styled-components";

export default function ImageBlock(props: { data: string }) {
  return (
    <Container draggable={false}>
      <img
        className="sell"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        src={props.data}
        alt="err"
      />
    </Container>
  );
}

const Container = styled.div`
  height: fit-content;
  min-height: 10px;
  .sell {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    /* user-drag: none; */
    user-select: none;
  }
  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    /* user-drag: none; */
    user-select: none;
  }
`;
