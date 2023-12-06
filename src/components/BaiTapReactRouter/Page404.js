import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1>Không tìm thấy đường dẫn</h1>
      <button className="ms-3 px-5 py-3 bg-green-700 rounded-lg text-white">
        <Link to={"/"}>Về lại trang chủ</Link>
      </button>
    </div>
  );
};

export default Page404;
