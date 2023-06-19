import TravalServices, { axiosServer } from "@/services/traval-kor";

export default function Home() {
  const oddsServices = new TravalServices(axiosServer);

  const handleGetLocationBasedList = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "process.env.NEXT_APP_KOREA_TRAVAL_KEY!",
      process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!
    );
    const result = await oddsServices.getlocationBasedList({
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      mapX: "126.981611",
      mapY: "37.568477",
      radius: "1000",
      listYN: "Y",
      arrange: "A",
      contentTypeId: "15",
      serviceKey: process.env.NEXT_PUBLIC_KOREA_TRAVAL_KEY!,
    });
    console.log("result", result);
  };

  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <form onSubmit={handleGetLocationBasedList}>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
