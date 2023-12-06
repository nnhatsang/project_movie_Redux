import React from "react";
import HeaderDemo from "../../components/HeaderDemo/HeaderDemo";
import FooterDemo from "../../components/FooterDemo/FooterDemo";
import { Outlet } from "react-router-dom";

const TemplateDemo = () => {
  // Phía trên Header
  // Giữa content
  // Dưới Footer
  return (
    <>
      <HeaderDemo />
      <Outlet />
      <FooterDemo />
    </>
  );
};

export default TemplateDemo;
