import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {children}
    </main>
  );
};

export default Layout;
