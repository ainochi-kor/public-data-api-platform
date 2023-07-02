import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetDetailPetTourParam } from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

const DetailPetTour: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<{ contentId: string }>();

  const onSubmit: SubmitHandler<{ contentId: string }> = (data) => {
    const param: GetDetailPetTourParam = {
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
    (param: GetDetailPetTourParam) => oddsServices.getDetailPetTour(param)
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
        <h1 className="text-3xl">반려동물 동반 여행 조회</h1>
        <p>타입별 반려동물 동반 여행 정보를 조회하는 기능입니다.</p>
        <InputLayout>
          <input
            className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
            placeholder="콘텐츠ID(옵션,미기입시 전체목록조회)"
            {...register("contentId")}
          />
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

export default DetailPetTour;
