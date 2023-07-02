import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import SelectContentType from "@/components/Select/SelectContentType";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { ContentTypeId, GetKeywardSearchParam } from "@/types/traval.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const KeywordSearch: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<{
    keyword: string;
    contentTypeId: ContentTypeId;
  }>();

  const onSubmit: SubmitHandler<{
    keyword: string;
    contentTypeId: ContentTypeId;
  }> = (data) => {
    console.log(data);

    const param: GetKeywardSearchParam = {
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
    (param: GetKeywardSearchParam) => oddsServices.getKeywordSearch(param)
  );

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="py-4">
      <form className="px-8 pb-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl">키워드 검색 조회</h1>
        <p>키워드로 검색을하며 전체별 타입정보별 목록을 조회한다</p>
        <InputLayout>
          <SelectContentType register={register} useAll={true} />
        </InputLayout>
        <div className="flex w-full items-center space-x-2 py-4 ">
          <input
            className="px-2 h-10 bg-gray-100 rounded-lg w-full"
            type="text"
            placeholder="강원"
            {...register("keyword", { required: true })}
          />
          <Button type="submit" className="whitespace-nowrap">
            검색하기
          </Button>
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
      </div>{" "}
    </div>
  );
};

export default KeywordSearch;
