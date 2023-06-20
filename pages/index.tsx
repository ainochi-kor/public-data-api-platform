import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetlocationBasedListParam } from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const oddsServices = new TravalServices(axiosServer);
  const [coordinates, setCoordinates] = useState<{
    x: string | null;
    y: string | null;
  }>({
    x: null,
    y: null,
  });

  const param: GetlocationBasedListParam = useMemo(() => {
    return {
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      mapX: coordinates.x ?? null,
      mapY: coordinates.y ?? null,
      radius: "1000",
      listYN: "Y",
      arrange: "A",
      contentTypeId: "15",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    };
  }, [coordinates]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["getlocationBasedListData"],
    queryFn: () => oddsServices.getlocationBasedList(param),
  });

  useEffect(() => {
    console.log(data?.response?.body.items);
  }, [data]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          setCoordinates({ x: `${longitude}`, y: `${latitude}` });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (isLoading) {
    <div>isLoading</div>;
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div className="z-10 w-full max-w-5xl ">
      <h1 className="text-3xl">위치기반 관광정보조회</h1>
      <div className="items-center justify-between font-mono text-sm lg:flex">
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
}
