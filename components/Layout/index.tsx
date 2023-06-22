import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Header from "../Header";
const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center   ${inter.className}`}
    >
      <Header />
      <div className="flex justify-center p-24 w-full h-full">{children}</div>
    </main>
  );
};

export default Layout;
