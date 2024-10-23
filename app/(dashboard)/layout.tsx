import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <Navbar />
      <main className=" flex flex-1">
        <Sidebar />
        <div className="w-full h-full">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
