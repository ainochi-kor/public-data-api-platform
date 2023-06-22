import { PropsWithChildren } from "react";

interface ButtonProps
  extends React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>,
    PropsWithChildren {}

const Button: ButtonProps = ({ children, ...props }) => {
  return (
    <button
      className={`${
        props.disabled
          ? "bg-gray-200 text-gray-500"
          : "bg-blue-200 text-blue-600"
      } px-3 py-2 rounded-lg ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
