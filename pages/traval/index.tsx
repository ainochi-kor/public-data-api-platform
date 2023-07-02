import Button from "@/components/Button";
import { NextPage } from "next";
import { useRouter } from "next/router";

const travalPath = "/traval";

const mainItemPaths = [
  {
    label: "위치기반 관광정보조회",
    path: `${travalPath}/location`,
  },
  {
    label: "키워드 검색 조회",
    path: `${travalPath}/keyword-search`,
  },
  {
    label: "행사 정보 조회",
    path: `${travalPath}/event-information`,
  },
  {
    label: "숙박 정보 조회",
    path: `${travalPath}/stay-information`,
  },
  {
    label: "관광정보 동기화 목록 조회",
    path: `${travalPath}/area-based-sync-list`,
  },
  {
    label: "지역기반 관광정보 조회",
    path: `${travalPath}/area-based-list`,
  },
];

const subItemPaths = [
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
    label: "반려동물 동반 여행 정보",
    path: `${travalPath}/detail-pet-tour`,
  },
];

const codeItemPaths = [
  {
    label: "서비스 분류 코드 조회",
    path: `${travalPath}/category-code`,
  },
  {
    label: "지역 코드 조회",
    path: `${travalPath}/area-code`,
  },
];

const TravelHome: NextPage = () => {
  const router = useRouter();
  return (
    <div className="p-4">
      <h1 className="text-3xl">메인 메뉴</h1>
      <p>메인으로 사용할만한 메뉴</p>
      <div className="grid grid-cols-2 gap-2 py-4">
        {mainItemPaths.map((data) => {
          return (
            <Button key={data.label} onClick={() => router.push(data.path)}>
              {data.label}
            </Button>
          );
        })}
      </div>
      <h1 className="text-3xl">서브 메뉴</h1>
      <p>
        메인으로 사용할만한 메뉴에서 받은 <b>콘텐츠 ID</b>를 이용하여 활용
      </p>
      <div className="grid grid-cols-2 gap-2 py-4">
        {subItemPaths.map((data) => {
          return (
            <Button key={data.label} onClick={() => router.push(data.path)}>
              {data.label}
            </Button>
          );
        })}
      </div>
      <h1 className="text-3xl">코드 조회</h1>
      <p>지역, 시군구, 카테고리에 사용되는 코드들을 볼 수 있습니다</p>
      <div className="grid grid-cols-2 gap-2 py-4">
        {codeItemPaths.map((data) => {
          return (
            <Button key={data.label} onClick={() => router.push(data.path)}>
              {data.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TravelHome;
