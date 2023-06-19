export interface GetlocationBasedListParam {
  numOfRows?: number;
  pageNo?: number;
  MobileOS: "IOS" | "AND" | "WIN" | "ETC";
  MobileApp: string;
  _type?: "json" | "XML";
  listYN?: "Y" | "N";
  arrange?: "A" | "C" | "D" | "O" | "Q" | "R";
  mapX: string;
  mapY: string;
  radius: string;
  contentTypeId?: "12" | "14" | "15" | "25" | "28" | "32" | "38" | "39";
  modifiedtime?: string;
  serviceKey: string;
}
