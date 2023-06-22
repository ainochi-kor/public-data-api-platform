import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import {
  GetlocationBasedListParam,
  KeywardSearchParam,
} from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const KeywordSearch: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const param: KeywardSearchParam = useMemo(() => {
    return {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      listYN: "Y",
      arrange: "A",
      contentTypeId: "15",
      keyword,
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, [keyword]);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getKeywordSearch"],
    queryFn: () => oddsServices.getKeywordSearch(param),
    enabled: false, // 자동 실행 Off, refetch를 통한 수동 실행.
  });

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl">키워드 검색 조회</h1>
      <div className="flex items-center space-x-2 py-4 ">
        <input
          className="px-2 h-10 bg-gray-100 rounded-lg"
          type="text"
          placeholder="강원"
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <Button
          onClick={() => {
            refetch();
          }}
        >
          검색하기
        </Button>
      </div>

      <div className="flex justify-between font-mono text-sm flex-wrap">
        {data?.response?.body.items.item.map((data) => {
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
                  <p key={key}>
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

export default KeywordSearch;
