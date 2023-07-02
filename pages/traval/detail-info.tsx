import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import SelectContentType from "@/components/Select/SelectContentType";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { ContentTypeId, GetSearchDetailIntroParam } from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

const DetailInfo: NextPage = () => {
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

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetSearchDetailIntroParam) =>
      oddsServices.getSearchDetailInfo(param)
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
        <h1 className="text-3xl">반복 정보 조회</h1>
        <p>
          추가 관광정보 상세내역을 조회한다. 상세반복정보를 안내URL의
          국문관광정보 상세 매뉴얼 문서를 참고하시기 바랍니다.
        </p>
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
      </form>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item?.map((data, idx) => {
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
