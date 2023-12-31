import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetAreaCodeParam } from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useMemo } from "react";

const AreaCode: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);

  const param: GetAreaCodeParam = useMemo(() => {
    return {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      areaCode: "",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, []);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getAreaCode"],
    queryFn: () => oddsServices.getAreaCode(param),
    enabled: true,
  });

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  console.log(data);

  return (
    <div className="py-4">
      <header className="px-8 pb-4">
        <h1 className="text-3xl">지역 코드 조회</h1>
        <div className="flex items-center space-x-2 py-4 ">
          <Button
            onClick={() => {
              refetch();
            }}
          >
            검색하기
          </Button>
        </div>
        <p>지역코드목록을 지역,시군구,읍면동 코드목록을 조회하는 기능</p>
      </header>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item?.map((data, idx) => {
          return (
            <div key={`getSearchDetailInfo-${idx}`} className="border py-2">
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

export default AreaCode;
