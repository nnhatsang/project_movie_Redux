import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const ShoeDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState({});
  //   const navigate = useNavigate();
  console.log(detail);
  //   const location = useLocation();
  //   console.log(location);
  //   console.log(params);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?=${params.id}`,
    })
      .then((res) => setDetail(res.data.content))
      .catch((err) => console.log(err));
    //   useEffect thứ 2 giúp mounting updating là trong cặp dấu ngoặc vuông truyền 
    // vào dữ liệu sẽ thay đổi mà ta muốn kiểm tra khi thay đổi sẽ chạy lại useEffect
  }, [params]);

  return (
    <>
      <div className="py-10 container">
        <h1>Chi tiết giày</h1>
        <div className="flex">
          <div className="w-4/12">
            <img src={detail.image} alt="" />
          </div>
          <div className="w-8/12">
            <h2 className="font-bold text-3xl">{detail.name}</h2>
            <p className="text-2xl mt-4">Giá tiền: {detail.price}.00$</p>
          </div>
        </div>
        <h3>Sản phẩm liên quan</h3>
        <div className="grid grid-cols-4 gap-10">
          {detail.relatedProducts?.map((c) => (
            <div className="p-5 border border-green-950 rounded-lg" key={c.id}>
              <img src={c.image} alt="" className="w-100" />
              <div className="">
                <h4 className="font-bold text-2xl">{c.name}</h4>
                <p className="my-3 text-xl text-right">{c.price}.00$</p>
              </div>
              <button
                className="py-2 px-5 bg-green-700 rounded-lg text-white hover:bg-slate-500 duration-300"
                type="button"
                // onClick={() => {
                //   navigate(`/detail/${c.id}`);
                // }}
              >
                {/* Xem chi tiết */}
                <Link to={`/detail/${c.id}`}>Xem chi tiết</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoeDetail;
