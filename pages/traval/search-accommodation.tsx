import Button from "@/components/Button";
import AreaCodeSelect from "@/components/Select/AreaCodeSelect";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { AreaCode, GetSearchAccommodationParam } from "@/types/traval.type";
import { useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

const SearchAccommodation: NextPage = () => {
  const oddsServices = new TravalServices(axiosServer);
  const { register, handleSubmit } = useForm<{ areaCode: AreaCode }>();
  const onSubmit: SubmitHandler<{ areaCode: AreaCode }> = (data) => {
    console.log(data);

    const param: GetSearchAccommodationParam = {
      numOfRows: 10,
      pageNo: 1,
      MobileOS: "ETC",
      MobileApp: "AppTest",
      _type: "json",
      listYN: "Y",
      arrange: "A",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
      ...data,
    };

    mutate(param);
  };

  const { isLoading, error, data, mutate } = useMutation(
    (param: GetSearchAccommodationParam) => oddsServices.searchStay(param)
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
        <h1 className="text-3xl">숙박 정보 조회</h1>
        <p>
          숙박정보 검색목록을 조회한다. 컨텐츠 타입이 ‘숙박’일 경우에만
          유효하다.
        </p>
        <AreaCodeSelect register={register} />
        <div className="flex items-center space-x-2 py-4 ">
          <Button type="submit">검색하기</Button>
        </div>
      </form>
      <div className="font-mono text-sm w-screen px-8">
        {data?.response?.body.items.item.map((data) => {
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

export default SearchAccommodation;
