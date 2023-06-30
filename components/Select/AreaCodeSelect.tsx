import { AREA_CODE } from "@/constants/common";
import { AreaCode } from "@/types/traval.type";
import { FieldValues, UseFormRegister } from "react-hook-form";

const AreaCodeSelect: React.FC<{
  register: UseFormRegister<any>;
}> = ({ register }) => (
  <select
    className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
    {...register("areaCode")}
  >
    {AREA_CODE.map((data) => (
      <option key={data.label} value={data.value}>
        {data.label}
      </option>
    ))}
  </select>
);

export default AreaCodeSelect;
