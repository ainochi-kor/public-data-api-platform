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
      <Button onClick={() => router.push("/traval/event-information")}>
        행사 정보 조회
      </Button>
      <Button onClick={() => router.push("/traval/search-accommodation")}>
        숙박 정보 조회
      </Button>
      <Button onClick={() => router.push("/traval/detail-common")}>
        공통 정보 조회
      </Button>
      <Button onClick={() => router.push("/traval/detail-intro")}>
        소개 정보 조회
      </Button>
      <Button onClick={() => router.push("/traval/detail-info")}>
        반복 정보 조회
      </Button>
    </div>
  );
};

export default TravelHome;
