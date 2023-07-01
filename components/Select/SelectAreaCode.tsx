import { AREA_CODE } from "@/constants/common";
import { AreaCode } from "@/types/traval.type";
import { useMemo, useState } from "react";
import { UseFormRegister } from "react-hook-form";

const SelectAreaCode: React.FC<{
  register: UseFormRegister<any>;
}> = ({ register }) => {
  const [areaCode, setAreaCode] = useState<AreaCode>("");
  const findSigunguCode = useMemo(
    () => AREA_CODE.find((data) => data.value === areaCode),
    [areaCode]
  );

  return (
    <>
      <label>지역</label>
      <select
        className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
        {...register("areaCode")}
        onChange={(e) => setAreaCode(e.target.value as AreaCode)}
      >
        {AREA_CODE.map((data) => (
          <option key={data.label} value={data.value}>
            {data.label}
          </option>
        ))}
      </select>
      <label>시군구</label>
      <select
        className={`h-12 w-full rounded px-4 text-black outline-none border border-gray-300 `}
        {...register("sigunguCode")}
      >
        {findSigunguCode?.sigungu?.map((data) => (
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

export default SelectAreaCode;
