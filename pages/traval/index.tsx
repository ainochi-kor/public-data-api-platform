import Button from "@/components/Button";
import { NextPage } from "next";
import { useRouter } from "next/router";

const TravelHome: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-2 py-4">
      <Button onClick={() => router.push("/traval/location")}>
        위치기반 관광정보조회
      </Button>
      <Button onClick={() => router.push("/traval/keywordSearch")}>
        키워드 검색 조회
      </Button>
    </div>
  );
};

export default TravelHome;
