import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import SelectAreaCode from "@/components/Select/SelectAreaCode";
import SelectCategory from "@/components/Select/SelectCategory";
import SelectContentType from "@/components/Select/SelectContentType";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import {
  AreaParam,
  CategoryParam,
  ContentTypeId,
  GetAreaBasedSyncListParam,
} from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

export interface AreaBasedSyncListParam extends AreaParam, CategoryParam {
  contentTypeId: ContentTypeId;
}

const AreaBasedSyncList: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<AreaBasedSyncListParam>();

  const onSubmit: SubmitHandler<AreaBasedSyncListParam> = (data) => {
    console.log(data);

    const param: GetAreaBasedSyncListParam = {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      showflag: "1",
      modifiedtime: "",
      listYN: "Y",
      arrange: "A",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
      ...data,
    };

    mutate(param);
  };

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetAreaBasedSyncListParam) =>
      oddsServices.getAreaBasedSyncList(param)
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
        <h1 className="text-3xl">관광정보 동기화 목록 조회</h1>
        <p>
          지역기반 관광정보파라미터 타입에 따라서 제목순,수정일순,등록일순
          정렬검색목록을 조회하는 기능
        </p>
        <InputLayout>
          <SelectContentType register={register} />
          <SelectAreaCode register={register} />
          <SelectCategory register={register} />
        </InputLayout>
        <div className="flex items-center space-x-2 py-4 ">
          <Button type="submit">검색하기</Button>
        </div>
      </form>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item?.map((data) => {
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
