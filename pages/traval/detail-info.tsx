import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import {
  GetEventInformationParam,
  GetSearchDetailCommonParam,
  GetSearchDetailIntroParam,
} from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useMemo } from "react";

const DetailInfo: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);

  const param: GetSearchDetailIntroParam = useMemo(() => {
    return {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      contentId: "126508",
      contentTypeId: "12",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, []);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getSearchDetailInfo"],
    queryFn: () => oddsServices.getSearchDetailInfo(param),
    enabled: true,
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
        <h1 className="text-3xl">반복 정보 조회</h1>
        <div className="flex items-center space-x-2 py-4 ">
          <Button
            onClick={() => {
              refetch();
            }}
          >
            검색하기
          </Button>
        </div>
        <p>
          반복정보조회 추가 관광정보 상세내역을 조회한다. 상세반복정보를
          안내URL의 국문관광정보 상세 매뉴얼 문서를 참고하시기 바랍니다.
        </p>
      </header>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body.items.item.map((data, idx) => {
          return (
            <div key={`getSearchDetailInfo-${idx}`} className="border py-2">
              {Object.keys(data).map((key) => {
                return (
                  <p key={key} className="">
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

export default DetailInfo;
