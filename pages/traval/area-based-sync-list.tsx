import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetAreaBasedSyncListParam } from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useMemo } from "react";

const AreaBasedSyncList: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);

  const param: GetAreaBasedSyncListParam = useMemo(() => {
    return {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      showflag: "1",
      modifiedtime: "",
      listYN: "Y",
      arrange: "A",
      contentTypeId: "12",
      areaCode: "",
      sigunguCode: "",
      cat1: "",
      cat2: "",
      cat3: "",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, []);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getAreaBasedSyncList"],
    queryFn: () => oddsServices.getAreaBasedSyncList(param),
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
        <h1 className="text-3xl">관광정보 동기화 목록 조회</h1>
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
          지역기반 관광정보파라미터 타입에 따라서 제목순,수정일순,등록일순
          정렬검색목록을 조회하는 기능
        </p>
      </header>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body.items.item.map((data) => {
          return (
            <div key={data.title} className="border py-2">
              <Image
                src={data.firstimage}
                width={300}
                height={300}
                alt={data.title}
              />
              <Image
                src={data.firstimage2}
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

export default AreaBasedSyncList;
