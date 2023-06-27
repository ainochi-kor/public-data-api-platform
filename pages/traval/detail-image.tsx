import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import {
  GetEventInformationParam,
  GetSearchDetailCommonParam,
  GetSearchDetailImageParam,
  GetSearchDetailIntroParam,
} from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useMemo } from "react";

const DetailInfo: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);

  const param: GetSearchDetailImageParam = useMemo(() => {
    return {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      contentId: "126508",
      imageYN: "Y",
      subImageYN: "Y",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, []);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getSearchDetailImage"],
    queryFn: () => oddsServices.getSearchDetailImage(param),
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
        <h1 className="text-3xl">이미지 정보 조회</h1>
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
          관광정보에 매핑되는 서브이미지목록 및 이미지 자작권 공공누리유형을
          조회하는 기능
        </p>
      </header>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body.items.item.map((data, idx) => {
          return (
            <div key={`getSearchDetailInfo-${idx}`} className="border py-2">
              <Image
                src={data.originimgurl}
                width={300}
                height={300}
                alt={data.imgname}
              />
              <Image
                src={data.smallimageurl}
                width={300}
                height={300}
                alt={data.imgname}
              />
              {Object.keys(data).map((key) => {
                return (
                  <p key={key} className="truncate">
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
