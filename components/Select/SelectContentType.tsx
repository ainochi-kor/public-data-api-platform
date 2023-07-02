import { CONTENT_TYPE } from "@/constants/contentType";
import { UseFormRegister } from "react-hook-form";

const SelectContentType: React.FC<{
  register: UseFormRegister<any>;
  useAll?: boolean;
}> = ({ register, useAll = true }) => (
  <>
    <label>컨텐츠</label>
    <select
      className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
      {...register("contentTypeId")}
    >
      {CONTENT_TYPE.filter((content) =>
        useAll ? true : content.value !== ""
      ).map((data) => (
        <option key={data.label} value={data.value}>
          {data.label}
        </option>
      ))}
    </select>
  </>
);

export default SelectContentType;
