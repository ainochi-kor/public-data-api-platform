import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import SelectContentType from "@/components/Select/SelectContentType";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { ContentTypeId, GetSearchDetailIntroParam } from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const DetailIntro: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<{
    contentId: string;
    contentTypeId: ContentTypeId;
  }>();

  const onSubmit: SubmitHandler<{
    contentId: string;
    contentTypeId: ContentTypeId;
  }> = (data) => {
    const param: GetSearchDetailIntroParam = {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
      ...data,
    };

    mutate(param);
  };

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

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetSearchDetailIntroParam) =>
      oddsServices.getSearchDetailIntro(param)
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
        <h1 className="text-3xl">소개 정보 조회</h1>
        <InputLayout>
          <label htmlFor="contentId">콘텐츠 ID</label>
          <input
            type="text"
            placeholder="콘텐츠 ID"
            defaultValue={"126508"}
            className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
            {...register("contentId", { required: true })}
          />
          <SelectContentType register={register} useAll={false} />
        </InputLayout>
        <div className="flex items-center space-x-2 py-4 ">
          <Button type="submit">검색하기</Button>
        </div>
        <p>상세소개 쉬는날, 개장기간 등 내역을 조회하는 기능</p>
      </form>
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
