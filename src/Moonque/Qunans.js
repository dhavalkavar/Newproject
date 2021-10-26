import react, { useState } from "react";
import { questions } from "./Api";
import "./Qunans.css";
import Plusminus from "./Plusminus";

const Qunans = () => {
  const [data, setdata] = useState(questions);
  return (
    <>
    <div className="s_div">
    <div className="m_div">
    <h1 className="header">Moon Questions</h1>
    <div className="c_div">
      {data.map((curEle) => {
          const {id} = curEle
        return <Plusminus key = {id} {...curEle} />;
      })}
      </div>
      </div>
      </div>
    </>
  );
};

export default Qunans;
