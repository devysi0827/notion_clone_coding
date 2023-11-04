import { useRecoilState, useRecoilValue } from "recoil";
import { arraySelector, introMessageState } from "recoil/recoilState";

export default function RecoilTest() {
  const [message, setMessage] = useRecoilState(introMessageState);
  // const [myArr, setArr] = useRecoilState(arraySelector);
  const myObj = useRecoilValue(arraySelector);
  const myArr = Object.values(myObj);
  console.log(myArr);
  return (
    <>
      <div onClick={() => setMessage("hello sell")}>changeMessage</div>
      {message}
      <div>
        {myArr.map(
          (num) => (
            <div>{num}</div>
          )
          // <li>{num[1]}</li>
        )}
      </div>
    </>
  );
}
