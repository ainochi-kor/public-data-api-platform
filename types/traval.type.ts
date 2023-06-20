export interface GetlocationBasedListParam {
  numOfRows?: number;
  pageNo?: number;
  MobileOS: "IOS" | "AND" | "WIN" | "ETC";
  MobileApp: string;
  _type?: "json" | "XML";
  listYN?: "Y" | "N";
  arrange?: "A" | "C" | "D" | "O" | "Q" | "R";
  mapX: string | null;
  mapY: string | null;
  radius: string;
  contentTypeId?: "12" | "14" | "15" | "25" | "28" | "32" | "38" | "39";
  modifiedtime?: string;
  serviceKey: string;
}

export interface GetlocationBasedListData {
  response: GetlocationBasedListDataResponse;
}

export interface GetlocationBasedListDataResponse {
  header: GetlocationBasedListDataHeader;
  body: GetlocationBasedListDataBody;
}

export interface GetlocationBasedListDataHeader {
  resultCode: string;
  resultMsg: string;
}

export interface GetlocationBasedListDataBody {
  items: GetlocationBasedListDataItems;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface GetlocationBasedListDataItems {
  item: GetlocationBasedListDataItem[];
}

export interface GetlocationBasedListDataItem {
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
  dist: string;
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
