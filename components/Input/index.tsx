import { FieldValues, UseFormRegister } from "react-hook-form";

type P<T extends FieldValues> = {
  register: UseFormRegister<T>;
  required: boolean;
};
const Input: React.FC<P<FieldValues>> = ({ register, required, ...props }) => {
  return (
    <input
      className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
      {...props}
    />
  );
};

export default Input;
