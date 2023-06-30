import Button from "@/components/Button";
import SelectContentType from "@/components/Select/SelectContentType";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { ContentTypeId, GetSearchDetailCommonParam } from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface CommomFormRegister {
  contentId: string;
  contentTypeId: ContentTypeId;
}

const DetailCommon: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<CommomFormRegister>({
    defaultValues: {
      contentTypeId: "",
      contentId: "126508",
    },
  });

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetSearchDetailCommonParam) =>
      oddsServices.getSearchDetailCommon(param)
  );

  const onSubmit: SubmitHandler<CommomFormRegister> = (data) => {
    console.log(data);

    const param: GetSearchDetailCommonParam = {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      defaultYN: "Y",
      firstImageYN: "Y",
      areacodeYN: "Y",
      catcodeYN: "Y",
      addrinfoYN: "Y",
      mapinfoYN: "Y",
      overviewYN: "Y",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
      ...data,
    };

    mutate(param);
  };

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="py-4">
      <form className="px-8 pb-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl">공통 정보 조회</h1>
        <p>
          타입별공통 정보기본정보, 약도이미지, 대표이미지, 분류정보, 지역정보,
          주소정보, 좌표정보, 개요정보, 길안내정보, 이미지정보,
          연계관광정보목록을 조회하는 기능
        </p>
        <div className="space-y-1">
          <SelectContentType register={register} />
          <input
            className={`h-12 bg-input w-full rounded px-4 text-black outline-none border border-gray-300`}
            placeholder="콘텐츠 ID"
            {...register("contentId")}
            required
          />
        </div>
        <div className="flex items-center space-x-2 py-4 ">
          <Button type="submit">검색하기</Button>
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
      </div>
    </div>
  );
};

export default DetailCommon;
