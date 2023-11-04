import { useNavigate } from "react-router-dom";
import { introMessageState, introSelector } from "recoil/recoilState";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Home() {
  const navigate = useNavigate();
  const introMessage = useRecoilValue(introMessageState);
  const [choiceMessage, setChoiceMessage] = useRecoilState(introSelector);

  return (
    <div>
      <button onClick={() => setChoiceMessage("change")}>click</button>
      <p>{introMessage}</p>
      <p>{choiceMessage}</p>
      <div onClick={() => navigate("/query")}>query</div>
      <div onClick={() => navigate("/recoil")}>recoil</div>
    </div>
  );
}
