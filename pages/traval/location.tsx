import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import SelectContentType from "@/components/Select/SelectContentType";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { ContentTypeId, GetlocationBasedListParam } from "@/types/traval.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LocationBase: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<{
    contentTypeId: ContentTypeId;
  }>();
  const [coordinates, setCoordinates] = useState<{
    x: string | null;
    y: string | null;
  }>({
    x: null,
    y: null,
  });

  const onSubmit: SubmitHandler<{ contentTypeId: ContentTypeId }> = (data) => {
    console.log(data);

    const param: GetlocationBasedListParam = {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      mapX: coordinates.x ?? null,
      mapY: coordinates.y ?? null,
      radius: "1000",
      listYN: "Y",
      arrange: "A",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
      ...data,
    };

    mutate(param);
  };

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetlocationBasedListParam) =>
      oddsServices.getlocationBasedList(param)
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          setCoordinates({ x: `${longitude}`, y: `${latitude}` });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="py-4">
      <form className="px-8 pb-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl">위치기반 관광정보조회 </h1>
        <p>
          위치기반 관광정보파라미터 타입에 따라서 제목순,수정일순,등록일순
          정렬검색목록을 조회하는 기능
        </p>
        <p>위치를 받지 못하면 버튼이 비활성화 됩니다.</p>
        <InputLayout>
          <SelectContentType register={register} />
        </InputLayout>
        <div className="flex items-center space-x-2 py-4 ">
          <Button
            type="submit"
            disabled={coordinates.x === null || coordinates.y === null}
          >
            검색하기
          </Button>
        </div>
      </form>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item?.map((data) => {
          return (
            <div key={data.title} className="border p-2">
              {data.title}
              <Image
                src={data.firstimage}
                width={400}
                height={400}
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

export default LocationBase;
