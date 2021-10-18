import react, { useState } from "react";
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Tooltip } from 'antd';

const App = () => {
  const [count, setcount] = useState(0);
  const pluscount = () => {
    setcount(count + 1);
  };
  const minuscount = () => {
    if (count > 0) {
      setcount(count - 1);
    } else {
      alert("zero limit reached");
      setcount(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{count}</h1>
          <div className="btn_div">
          <Tooltip title="Rise"><Button onClick={pluscount}><PlusOutlined /></Button></Tooltip>{" "}
            <Button onClick={minuscount}><MinusOutlined /></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
