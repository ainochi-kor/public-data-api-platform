import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetSearchDetailIntroParam } from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useMemo } from "react";

const DetailIntro: NextPage = () => {
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
    queryKey: ["getSearchDetailIntro"],
    queryFn: () => oddsServices.getSearchDetailIntro(param),
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
        <h1 className="text-3xl">소개 정보 조회</h1>
        <div className="flex items-center space-x-2 py-4 ">
          <Button
            onClick={() => {
              refetch();
            }}
          >
            검색하기
          </Button>
        </div>
        <p>상세소개 쉬는날, 개장기간 등 내역을 조회하는 기능</p>
      </header>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item?.map((data) => {
          return (
            <div key={data.infocenter} className="border py-2">
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

export default DetailIntro;
