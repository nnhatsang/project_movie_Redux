import React, { useEffect, useState } from "react";
import ListGiay from "./ListGiay";
import axios from "axios";

const BaiTapReactRoute = () => {
  const [listGiay, setListGiay] = useState([]);
  // được sử dụng trong 3 trạng thái chính của 1 component: mounting, updating, unmounting
  useEffect(() => {
    axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product",
    })
      .then((res) => setListGiay(res.data.content))
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <div>
      <h2>Bài tập Shoes Store</h2>
      <ListGiay listGiay={listGiay} />
    </div>
  );
};

export default BaiTapReactRoute;
