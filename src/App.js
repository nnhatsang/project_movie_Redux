import { Route, Routes } from "react-router-dom";
import DemoFunc from "./components/DemoFuncComponent/DemoFunc";
import ReactRouter from "./components/DemoFuncComponent/ReactRouter";
import ListGiay from "./components/BaiTapReactRouter/ListGiay";
import TemplateDemo from "./Template/DemoTemplateRouter/TemplateDemo";
import BaiTapReactRoute from "./components/BaiTapReactRouter/BaiTapReactRoute";
import DemoUngDung from "./components/DemoFuncComponent/DemoUngDung";
import ShoeDetail from "./components/BaiTapReactRouter/ShoeDetail";
import Page404 from "./components/BaiTapReactRouter/Page404";
import BaiTapFormik from "./components/BaiTapFormik/BaiTapFormik";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/home" element={<DemoFunc/>}/> */}
        {/* <Route path="/" element={<DemoFunc />}>
          <Route path="/hoi_dap" element={<ReactRouter />} />
        </Route> */}
        <Route path="/" element={<TemplateDemo />}>
          {/* Khi người dùng truy cập đúng path cha sẽ hiển thị component của con lên luôn */}
          <Route index element={<BaiTapReactRoute />} />
          <Route path="ung_dung" element={<DemoUngDung />} />
          <Route path="detail/:id" element={<ShoeDetail />} />
          <Route path="cum_rap" element={<BaiTapFormik />} />
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
