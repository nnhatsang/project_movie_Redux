import React from "react";

// const DemoProps = (props) => {
const DemoProps = ({number,setNumber}) => {
//   console.log(props);
//   let { number, setNumber } = props;
  return (
    <div>
      DemoProps
      <h1>Giá trị: {number}</h1>
      <button
        className="py-2 px-5 bg-green-600 rounded-lg text-white"
        onClick={() => setNumber(number + 10)}
      >
        Tăng 10
      </button>
    </div>
  );
};

export default DemoProps;
