import Button from "@/components/Button";
import { NextPage } from "next";
import { useRouter } from "next/router";

const travalPath = "/traval";
const pathList = [
  {
    label: "위치기반 관광정보조회",
    path: `${travalPath}/location`,
  },
  {
    label: "키워드 검색 조회",
    path: `${travalPath}/keywordSearch`,
  },
  {
    label: "행사 정보 조회",
    path: `${travalPath}/event-information`,
  },
  {
    label: "숙박 정보 조회",
    path: `${travalPath}/search-accommodation`,
  },
  {
    label: "공통 정보 조회",
    path: `${travalPath}/detail-common`,
  },
  {
    label: "소개 정보 조회",
    path: `${travalPath}/detail-intro`,
  },
  {
    label: "반복 정보 조회",
    path: `${travalPath}/detail-info`,
  },
  {
    label: "이미지 정보 조회",
    path: `${travalPath}/detail-image`,
  },
  {
    label: "관광정보 동기화 목록 조회",
    path: `${travalPath}/area-based-sync-list`,
  },
  {
    label: "지역 코드 조회",
    path: `${travalPath}/area-code`,
  },
  {
    label: "반려동물 동반 여행 정보",
    path: `${travalPath}/detail-pet-tour`,
  },
  {
    label: "서비스 분류 코드 조회",
    path: `${travalPath}/category-code`,
  },
];

const TravelHome: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-2 py-4">
      {pathList.map((data) => {
        return (
          <Button key={data.label} onClick={() => router.push(data.path)}>
            {data.label}
          </Button>
        );
      })}
    </div>
  );
};

export default TravelHome;
