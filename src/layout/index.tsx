import React from "react";
import NavBar from "../components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen"> 
      <NavBar />
      <div className="pt-16">{children}</div> 
    </div>
  );
};

export default Layout;
