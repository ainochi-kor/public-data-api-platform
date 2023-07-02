import Button from "@/components/Button";
import InputLayout from "@/components/Layout/InputLayout";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetSearchDetailImageParam } from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

const DetailImage: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<{
    contentId: string;
  }>();

  const onSubmit: SubmitHandler<{
    contentId: string;
  }> = (data) => {
    const param: GetSearchDetailImageParam = {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      imageYN: "Y",
      subImageYN: "Y",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
      ...data,
    };

    mutate(param);
  };

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetSearchDetailImageParam) =>
      oddsServices.getSearchDetailImage(param)
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
        <h1 className="text-3xl">이미지 정보 조회</h1>
        <p>
          관광정보에 매핑되는 서브이미지목록 및 이미지 자작권 공공누리유형을
          조회하는 기능
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
        </InputLayout>
        <div className="flex items-center space-x-2 py-4 ">
          <Button type="submit">검색하기</Button>
        </div>
      </form>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body?.items?.item?.map((data, idx) => {
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

export default DetailImage;
