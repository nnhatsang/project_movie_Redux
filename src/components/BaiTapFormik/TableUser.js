import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/slice/userSlice";

const TableUser = ({ setValues }) => {
  const { arrUser } = useSelector((state) => {
    console.log(state.userSlice);
    return state.userSlice;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Họ Tên
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Người dung
              </th>
              <th scope="col" className="px-6 py-3">
                Số điện thoại
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr> */}
            {arrUser.map((item, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.ID}
                </th>
                <td className="px-6 py-4">{item.hoTen}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.maLoaiNguoiDung}</td>
                <td className="px-6 py-4">{item.soDienThoai}</td>
                <td className="px-6 py-4 space-x-3">
                  <button
                    className="p-3 text-white rounded-md bg-red-600"
                    onClick={() => {
                      dispatch(removeUser(item.ID));
                    }}
                  >
                    Xoá
                  </button>
                  <button
                    className="p-3 text-white rounded-md bg-yellow-600"
                    onClick={() => {
                      document.getElementById("ID").disabled = true;;
                      setValues(item);
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableUser;
