import Button from "@/components/Button";
import { NextPage } from "next";
import { useRouter } from "next/router";

//Todo: 나중에 label, path 로된 객체 배열로 묶어서 관리하면 이쁠 것 같아요.

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
      <Button onClick={() => router.push("/traval/detail-image")}>
        이미지 정보 조회
      </Button>
      <Button onClick={() => router.push("/traval/area-based-sync-list")}>
        관광정보 동기화 목록 조회
      </Button>
      <Button onClick={() => router.push("/traval/area-code")}>
        지역 코드 조회
      </Button>
    </div>
  );
};

export default TravelHome;
