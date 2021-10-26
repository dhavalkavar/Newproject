import react, { useState } from "react";
import { Tooltip } from 'antd';

const Plusminus = ({ question, answer }) => {
  const [show, setshow] = useState(false);
  const getanswer = () => {
    setshow(!show);
  };
  console.log(show,"show")
  return (
    <>
      <div className="cpm">
        <p onClick={getanswer}>{show ? <Tooltip title="Hide answer">"➖"</Tooltip> :<Tooltip title="Show answer"> "➕"</Tooltip>}</p> <h3>{question}</h3>
      </div>
      <div className="ans">
      {show && <p>{answer} </p>}
      </div>
    </>
  );
};

export default Plusminus;
