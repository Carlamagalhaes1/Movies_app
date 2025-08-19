import React from "react";
import NavBar from "../components/NavBar";
type LayoutProps = {
  children: React.ReactNode;
  onSearch?: (value: string) => void; // agora não é mais obrigatório
};

const Layout: React.FC<LayoutProps> = ({ children, onSearch }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <NavBar onSearch={onSearch}  />
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default Layout;
