import React from "react";
import NavBar from "../components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
  onSearch: (query: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearch }) => {
  return (
    <div className="min-h-screen">
      <NavBar onSearch={onSearch} />
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default Layout;
