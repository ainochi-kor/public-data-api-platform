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

export interface GetKeywardSearchParam extends CommonParam {
  listYN?: ListYN;
  arrange?: Arrange;
  keyword: string;
  contentTypeId?: ContentTypeId;
  areaCode?: string;
  sigunguCode?: string;
  cat1?: string;
  cat2?: string;
  cat3?: string;
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

//* 행사정보조회
export interface GetEventInformationParam extends CommonParam {
  listYN?: ListYN;
  arrange?: Arrange;
  eventStartDate: string;
  eventEndDate?: string;
  areaCode?: string;
  sigunguCode?: string;
  modifiedtime?: string;
}

export interface GetEventInformationDataResponse {
  header: ResponseHeader;
  body: GetEventInformationBody;
}

export interface GetEventInformationBody extends ListDataBody {
  items: GetEventInformationItems;
}

export interface GetEventInformationItems {
  item: GetListDataItem[];
}

//* 숙박 정보 조회
export interface GetSearchAccommodationParam extends CommonParam {
  listYN: ListYN;
  arrange: Arrange;
  areaCode?: string;
  sigunguCode?: string;
  modifiedtime?: string;
}

export interface GetSearchAccommodationResponse {
  header: ResponseHeader;
  body: GetSearchAccommodationBody;
}

export interface GetSearchAccommodationBody extends ListDataBody {
  items: GetSearchAccommodationItems;
}

export interface GetSearchAccommodationItems {
  item: GetSearchAccommodationItem[];
}

export interface GetSearchAccommodationItem extends GetListDataItem {
  benikia: string;
  goodstay: string;
  hanok: string;
}

//* 공통정보조회

export interface GetSearchDetailCommonParam extends CommonParam {
  contentId: string;
  contentTypeId?: ContentTypeId;
  defaultYN?: string;
  firstImageYN?: ListYN;
  areacodeYN?: ListYN;
  catcodeYN?: ListYN;
  addrinfoYN?: ListYN;
  mapinfoYN?: ListYN;
  overviewYN?: ListYN;
}

export interface GetSearchDetailCommonResponse {
  header: ResponseHeader;
  body: GetSearchDetailCommonBody;
}

export interface GetSearchDetailCommonBody extends ListDataBody {
  items: GetSearchDetailCommonItems;
}

export interface GetSearchDetailCommonItems {
  item: GetSearchAccommodationItem[];
}

export interface GetSearchAccommodationItem {
  contentid: string;
  contenttypeid: ContentTypeId;
  title: string;
  createdtime: string;
  modifiedtime: string;
  tel: string;
  telname: string;
  homepage: string;
  booktour: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  areacode: string;
  sigungucode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  addr1: string;
  addr2: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  overview: string;
}

//* 공통 정보 조회

export interface GetSearchDetailIntroParam extends CommonParam {
  contentId: string;
  contentTypeId: ContentTypeId;
}

export interface GetSearchDetailIntroResponse {
  header: ResponseHeader;
  body: GetSearchDetailIntroBody;
}

export interface GetSearchDetailIntroBody extends ListDataBody {
  items: GetSearchDetailIntroItems;
}

export interface GetSearchDetailIntroItems {
  item: GetSearchDetailIntroItem[];
}

export interface GetSearchDetailIntroItem {
  contentid: string;
  contenttypeid: string;
  heritage1: string;
  heritage2: string;
  heritage3: string;
  infocenter: string;
  opendate: string;
  restdate: string;
  expguide: string;
  expagerange: string;
  accomcount: string;
  useseason: string;
  usetime: string;
  parking: string;
  chkbabycarriage: string;
  chkpet: string;
  chkcreditcard: string;
}

//* 반복 정보 조회
export interface GetSearchDetailInfoParam extends CommonParam {
  contentId: string;
  contentTypeId: ContentTypeId;
}

export interface GetSearchDetailInfoResponse {
  header: ResponseHeader;
  body: GetSearchDetailInfoBody;
}

export interface GetSearchDetailInfoBody extends ListDataBody {
  items: GetSearchDetailInfoItems;
}

export interface GetSearchDetailInfoItems {
  item: GetSearchDetailInfoItem[];
}

export interface GetSearchDetailInfoItem {
  contentid: string;
  contenttypeid: string;
  serialnum: string;
  infoname: string;
  infotext: string;
  fldgubun: string;
}

//* 이미지 정보 조회
export interface GetSearchDetailImageParam extends CommonParam {
  contentId: string;
  imageYN: ListYN;
  subImageYN: ListYN;
}

export interface GetSearchDetailImageResponse {
  header: ResponseHeader;
  body: GetSearchDetailImageBody;
}

export interface GetSearchDetailImageBody extends ListDataBody {
  items: GetSearchDetailImageItems;
}

export interface GetSearchDetailImageItems {
  item: GetSearchDetailImageItem[];
}

export interface GetSearchDetailImageItem {
  contentid: string;
  originimgurl: string;
  imgname: string;
  smallimageurl: string;
  cpyrhtDivCd: string;
  serialnum: string;
}

//* 관광정보 동기화 목록 조회
export interface GetAreaBasedSyncListParam extends CommonParam {
  showflag: "1" | "0"; // 컨텐츠표출여부(1=표출, 0=비표출)
  modifiedtime: string;
  listYN: ListYN;
  arrange: Arrange;
  contentTypeId: ContentTypeId;
  areaCode: string;
  sigunguCode: string;
  cat1: string;
  cat2: string;
  cat3: string;
}

export interface GetAreaBasedSyncListResponse {
  header: ResponseHeader;
  body: GetAreaBasedSyncListBody;
}

export interface GetAreaBasedSyncListBody extends ListDataBody {
  items: GetAreaBasedSyncListItems;
}

export interface GetAreaBasedSyncListItems {
  item: GetAreaBasedSyncListItem[];
}

export interface GetAreaBasedSyncListItem {
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
  zipcode: string;
  showflag: string;
}

//* 지역 코드 조회
export interface GetAreaCodeParam extends CommonParam {
  areaCode?: string;
}

export interface GetAreaCodeResponse {
  header: ResponseHeader;
  body: GetAreaCodeBody;
}

export interface GetAreaCodeBody extends ListDataBody {
  items: GetAreaCodeItems;
}

export interface GetAreaCodeItems {
  item: GetAreaCodeItem[];
}

export interface GetAreaCodeItem {
  rnum: number;
  code: string;
  name: string;
}
