interface CommonParam {
  numOfRows?: number; // 한페이지결과수
  pageNo?: number; // 페이지번호
  MobileOS: "IOS" | "AND" | "WIN" | "ETC"; // OS 구분 : IOS (아이폰), AND (안드로이드), WIN (윈도우폰), ETC(기타)
  MobileApp: string; // 서비스명(어플명)
  _type?: "json" | "XML"; // 응답메세지 형식 : REST방식의 URL호출 시 json값 추가(디폴트 응답메세지 형식은XML)
  serviceKey: string; // 인증키(서비스키)
}

type ListYN = "Y" | "N"; // 	목록구분(Y=목록, N=개수)
type Arrange = "A" | "C" | "D" | "O" | "Q" | "R"; // 정렬구분 (A=제목순, C=수정일순, D=생성일순) 대표이미지가반드시있는정렬(O=제목순, Q=수정일순, R=생성일순)
type ContentTypeId = "12" | "14" | "15" | "25" | "28" | "32" | "38" | "39"; // 관광타입(12:관광지, 14:문화시설, 15:축제공연행사, 25:여행코스, 28:레포츠, 32:숙박, 38:쇼핑, 39:음식점) ID

export interface GetlocationBasedListParam extends CommonParam {
  listYN?: ListYN;
  arrange?: Arrange;
  mapX: string | null; // GPS X좌표(WGS84 경도좌표)
  mapY: string | null; // 	GPS Y좌표(WGS84 위도좌표)
  radius: string; // 거리반경(단위:m) , Max값 20000m=20Km
  contentTypeId?: ContentTypeId;
  modifiedtime?: string; // 수정일(형식 :YYYYMMDD)
}

export interface ResponseHeader {
  resultCode: string;
  resultMsg: string;
}

export interface ListDataBody {
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface GetListDataItem {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  createdtime: string;
  dist?: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
}

//* 위치기반 관광정보조회

export interface GetlocationBasedListDataResponse {
  header: ResponseHeader;
  body: GetlocationBasedListDataBody;
}

export interface GetlocationBasedListDataBody extends ListDataBody {
  items: GetlocationBasedListDataItems;
}

export interface GetlocationBasedListDataItems {
  item: GetListDataItem[];
}

//* 키워드 검색 조회

export interface KeywardSearchParam extends CommonParam {
  listYN?: ListYN;
  arrange?: Arrange;
  keyword: string;
  contentTypeId?: ContentTypeId;
}

export interface GetKeywardSearchDataResponse {
  header: ResponseHeader;
  body: GetKeywardSearchBody;
}

export interface GetKeywardSearchBody extends ListDataBody {
  items: GetKeywardSearchDataItems;
}

export interface GetKeywardSearchDataItems {
  item: GetListDataItem[];
}
