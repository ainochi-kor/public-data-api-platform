import { PropsWithChildren } from "react";

const InputLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="space-y-1 pt-5">{children}</div>
);

export default InputLayout;
