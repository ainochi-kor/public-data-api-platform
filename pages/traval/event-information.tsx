import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { EventInformationParam } from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useMemo } from "react";

const EventInformation: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);

  const param: EventInformationParam = useMemo(() => {
    return {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      listYN: "Y",
      arrange: "A",
      eventStartDate: dayjs().format("YYYYMMDD"),
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, []);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getKeywordSearch"],
    queryFn: () => oddsServices.getEventInformation(param),
    enabled: true, // 자동 실행 Off, refetch를 통한 수동 실행.
  });

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="py-4">
      <header className="px-8 pb-4">
        <h1 className="text-3xl">(오늘 기준) 행사 정보 조회</h1>
        <div className="flex items-center space-x-2 py-4 ">
          <Button
            onClick={() => {
              refetch();
            }}
          >
            검색하기
          </Button>
        </div>
      </header>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body.items.item.map((data) => {
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