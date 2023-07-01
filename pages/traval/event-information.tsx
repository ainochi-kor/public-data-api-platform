import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import SelectAreaCode from "@/components/Select/SelectAreaCode";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { AreaCode, GetEventInformationParam } from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface EventRegister {
  eventStartDate: string;
  eventEndDate: string;
  areaCode: AreaCode;
  sigunguCode: string;
}

const EventInformation: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<EventRegister>();
  const onSubmit: SubmitHandler<EventRegister> = (data) => {
    console.log(data);

    const param: GetEventInformationParam = {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      listYN: "Y",
      arrange: "A",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
      ...data,
    };

    mutate(param);
  };

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetEventInformationParam) => oddsServices.getEventInformation(param)
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="py-4">
      <form className="px-8 pb-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl">행사 정보 조회</h1>
        <p>행사정보목록을 조회한다. 컨텐츠 타입이 ‘행사’일 경우에만 유효하다</p>
        <InputLayout>
          <input
            className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
            placeholder="행사시작일(형식 :YYYYMMDD)"
            defaultValue={"20230101"}
            {...register("eventStartDate")}
          />
          <input
            className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
            placeholder="행사종료일(형식 :YYYYMMDD)"
            {...register("eventEndDate")}
          />
          <SelectAreaCode register={register} />
        </InputLayout>
        <div className="flex items-center space-x-2 py-4 ">
          <Button type="submit">검색하기</Button>
        </div>
      </form>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item?.map((data) => {
          return (
            <div key={data.title} className="border py-2">
              {data.title}
              <Image
                src={data.firstimage}
                width={300}
                height={300}
                alt={data.title}
              />
              {Object.keys(data).map((key) => {
                return (
                  <p key={key} className="truncate ">
                    {key}: {data[key as keyof typeof data]}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventInformation;
