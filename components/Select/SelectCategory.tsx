import { SERVICE_CODE } from "@/constants/serviceCode";
import { useMemo, useState } from "react";
import { UseFormRegister } from "react-hook-form";

const SelectCategory: React.FC<{
  register: UseFormRegister<any>;
}> = ({ register }) => {
  const [cat1, setCat1] = useState<string>("");
  const [cat2, setCat2] = useState<string>("");

  const findMiddleCode = useMemo(
    () => SERVICE_CODE.find((data) => data.code === cat1),
    [cat1]
  );
  const findSmallCode = useMemo(
    () => findMiddleCode?.items.find((data) => data.code === cat2),
    [findMiddleCode, cat2]
  );

  return (
    <>
      <label>대분류</label>
      <select
        className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
        {...register("cat1")}
        onChange={(e) => setCat1(e.target.value)}
      >
        {SERVICE_CODE.map((data) => (
          <option key={data.name} value={data.code}>
            {data.name}
          </option>
        ))}
      </select>
      <label>중분류</label>
      <select
        className={`h-12 w-full rounded px-4 text-black outline-none border border-gray-300 `}
        {...register("cat2")}
        onChange={(e) => setCat2(e.target.value)}
      >
        {findMiddleCode?.items?.map((data) => (
          <option key={data.name} value={data.code}>
            {data.name}
          </option>
        )) ?? (
          <option key={"sigungu-all"} value={""}>
            전체
          </option>
        )}
      </select>
      <label>소분류</label>
      <select
        className={`h-12 w-full rounded px-4 text-black outline-none border border-gray-300 `}
        {...register("cat3")}
      >
        {findSmallCode?.items?.map((data) => (
          <option key={data.name} value={data.code}>
            {data.name}
          </option>
        )) ?? (
          <option key={"sigungu-all"} value={""}>
            전체
          </option>
        )}
      </select>
    </>
  );
};

export default SelectCategory;
