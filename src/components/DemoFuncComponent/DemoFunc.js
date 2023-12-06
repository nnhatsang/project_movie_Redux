import React, { useState } from "react";
import DemoProps from "./DemoProps";
// outlet giup
import { Outlet } from "react-router-dom";
// rafce
// func rfc vẫn còn dính con trỏ this

const DemoFunc = () => {
  // demo state trong fnc compnennt
  // tạo 1 state giúp lưu trữ giá trị số
  const [number, setNumber] = useState(10);
  const [sinhVien, setSinhVien] = useState({
    hoTen: "Dong",
    tuoi: 26,
    lop: "BCS09",
  });
  return (
    <div className="container mx-auto">
      <div className="">
        <h3>Thông tin sinh viên</h3>
        <p>HoTen: {sinhVien.hoTen}</p>
        <p>Lop: {sinhVien.lop}</p>
        <p>tuoi: {sinhVien.tuoi}</p>
        <button
          className="py-2 px-5 bg-green-600 rounded-lg text-white"
          onClick={() => {
            setSinhVien({ ...sinhVien, hoTen: "jsdhfjdh" });
          }}
        >
          Đổi tên Sinh viên
        </button>
      </div>
      <DemoProps number={number} setNumber={setNumber} />
      <Outlet />
    </div>
  );
};

export default DemoFunc;
