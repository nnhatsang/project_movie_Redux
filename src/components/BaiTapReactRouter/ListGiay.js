import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ListGiay = ({ listGiay }) => {
  // console.log(listGiay);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="grid grid-cols-4 gap-10">
        {listGiay.map((c) => (
          <div className="p-5 border border-green-950 rounded-lg" key={c.id}>
            <img src={c.image} alt="" className="w-100" />
            <div className="">
              <h4 className="font-bold text-2xl">{c.name}</h4>
              <p className="my-3 text-xl text-right">{c.price}.00$</p>
            </div>
            <button
              className="py-2 px-5 bg-green-700 rounded-lg text-white hover:bg-slate-500 duration-300"
              type="button"
              onClick={() => {
                navigate(`/detail/${c.id}`);
              }}
            >
              Xem chi tiết
              {/* <Link to={`/detail/${c.id}`}>Xem chi tiết</Link> */}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListGiay;
