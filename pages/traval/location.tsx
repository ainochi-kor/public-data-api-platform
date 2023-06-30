import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetlocationBasedListParam } from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const LocationBase: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const [coordinates, setCoordinates] = useState<{
    x: string | null;
    y: string | null;
  }>({
    x: null,
    y: null,
  });

  const param: GetlocationBasedListParam = useMemo(() => {
    return {
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
      contentTypeId: "15",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, [coordinates]);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getlocationBasedListData"],
    queryFn: () => oddsServices.getlocationBasedList(param),
    enabled: false, // 자동 실행 Off, refetch를 통한 수동 실행.
  });

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

  useEffect(() => {
    if (coordinates.x && coordinates.y) {
      refetch();
    }
  }, [coordinates]);

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="py-4">
      <header className="px-8 pb-4 space-y-4">
        <h1 className="text-3xl">위치기반 관광정보조회 </h1>
        <p>
          위치기반 관광정보파라미터 타입에 따라서 제목순,수정일순,등록일순
          정렬검색목록을 조회하는 기능
        </p>
        <Button
          onClick={() => {
            refetch();
          }}
        >
          다시 불러오기
        </Button>
      </header>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item??.map((data) => {
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
