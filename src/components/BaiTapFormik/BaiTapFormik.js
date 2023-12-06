import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import TableUser from "./TableUser";
import { useDispatch } from "react-redux";
import { getValueUser } from "../../redux/slice/userSlice";

const BaiTapFormik = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    // initialValues sẽ là object lưu trữ giá trị người dung
    // lưu ý khi sử dụng formik các thẻ input đầu vào cần có các thuộct tính name trùng với id và gọi initialvalue từ trường name trong input
    initialValues: {
      ID: "",
      hoTen: "",
      email: "",
      maLoaiNguoiDung: "",
      matKhau: "",
      soDienThoai: "",
    },
    // hàm ónubmit lfa nó sẽ chạy khi người dùng kích hoạt sự kiện onSubmit và pass qua hết các dữ liệu đầu vào validation
    // tham số value là đại điện dũ liệu người dùng sau khi nhập xong
    onSubmit: (values, { resetForm }) => {
      // console.log(value);
      dispatch(getValueUser(values));
      resetForm();
    },
    validationSchema: Yup.object({
      // nơi chứa các thuộc tính inittailvalue

      ID: Yup.string().required("Vui lòng Nhập ID"),
      hoTen: Yup.string().required("Vui lòng nhập họ tên"),
      email: Yup.string()
        .required("Không bỏ trống email")
        .email("Cần nhập đúng định dạng"),
      soDienThoai: Yup.string()
        .required("không bỏ trống trường này")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "Cần nhập đúng định dạng số điện thoại"
        ),
      matKhau: Yup.string()
        .required("Cần yêu cầu nhập mật khẩu")
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
          "Mật khẩu yêu cầu số và các ký tự đặc biệt"
        ),
      // .min(6, "Cần tối thiểu 6 ký tự")
      // .max(10, "Không quá 10 ký tự"),
      maLoaiNguoiDung: Yup.string().required("Vui lòng chọn người dùng"),
    }),
  });
  // handleChange là 1 func giúp lấy dữ liệu người dùng khi người dùng nhập
  // handleBlur là 1 func giúp kiểm tra việc người dùng thoát khỏi input
  // handleSubmit là 1 fumc giúp chạy submit và retrun các kết quả
  // errors là các thông báo lỗi khi họ nhập dữ liệu
  // touched giúp kiểm tra người dùng có tương tác input hay chưa
  // values giúp lưu trữ liệu người dùng
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    formik;
  // console.log(errors)
  // console.log(touched);
  console.log("huhu");

  return (
    <>
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="mb-5 font-bold text-2xl">
          Bài tập dùng formik và yup xử lí form nhập dữ liệu
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="id"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Id
                </label>
                <input
                  type="text"
                  name="ID"
                  id="ID"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Vui lòng nhập id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ID}
                />
                {errors.ID && touched.ID ? (
                  <p className="text-red-500">{errors.ID}</p>
                ) : (
                  <p className="hidden"></p>
                )}
              </div>
              <div>
                <label
                  htmlFor="hoTen"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Họ tên
                </label>
                <input
                  type="text"
                  name="hoTen"
                  id="hoTen"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Vui lòng nhập họ tên"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hoTen}
                />
                {errors.hoTen && touched.hoTen ? (
                  <p className="text-red-500">{errors.hoTen}</p>
                ) : (
                  <p className="hidden"></p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Vui lòng nhập email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500">{errors.email}</p>
                ) : (
                  <p className="hidden"></p>
                )}
              </div>
              <div>
                <label
                  for="maLoaiNguoiDung"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Mã loại người dùng
                </label>
                <select
                  id="maLoaiNguoiDung"
                  name="maLoaiNguoiDung"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.maLoaiNguoiDung}
                >
                  <option value="" selected>
                    Chọn
                  </option>
                  <option value="nhân viên">Nhân viên</option>
                  <option value="trưởng phòng">Trưởng phòng</option>
                  <option value="giám đốc">Giám đốc</option>
                </select>
                {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (
                  <p className="text-red-500">{errors.maLoaiNguoiDung}</p>
                ) : (
                  <p className="hidden"></p>
                )}
              </div>
              <div>
                <label
                  htmlFor="matKhau"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name="matKhau"
                  id="matKhau"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Vui lòng nhập mật khẩu"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.matKhau}
                />
                {errors.matKhau && touched.matKhau ? (
                  <p className="text-red-500">{errors.matKhau}</p>
                ) : (
                  <p className="hidden"></p>
                )}
              </div>
              <div>
                <label
                  htmlFor="soDienThoai"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="soDienThoai"
                  id="soDienThoai"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Vui lòng nhập số điện thoại"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.soDienThoai}
                />
                {errors.soDienThoai && touched.soDienThoai ? (
                  <p className="text-red-500">{errors.soDienThoai}</p>
                ) : (
                  <p className="hidden"></p>
                )}
              </div>
            </div>
            <button
              className="bg-black py-2 px-4 rounded-md text-white mt-5"
              type="submit"
            >
              Thêm người dùng
            </button>
          </form>
        </div>
      </div>
      <div className="contianer max-w-7xl mx-auto py-10">
        {/* <TableUser /> */}
      </div>
    </>
  );
};

export default BaiTapFormik;
