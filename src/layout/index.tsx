import React from "react";
import NavBar from "../components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen"> {/* Garantir que o layout ocupe toda a altura da tela */}
      <NavBar />
      <div className="pt-16">{children}</div> {/* Adicionar padding-top para não sobrepor a NavBar */}
    </div>
  );
};

export default Layout;
