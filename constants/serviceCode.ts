const ITME_ALL = {
  code: "",
  name: "전체",
  rnum: 0,
};

export const SERVICE_CODE_A0101 = [
  {
    code: "A01010100",
    name: "국립공원",
    rnum: 1,
  },
  {
    code: "A01010200",
    name: "도립공원",
    rnum: 2,
  },
  {
    code: "A01010300",
    name: "군립공원",
    rnum: 3,
  },
  {
    code: "A01010400",
    name: "산",
    rnum: 4,
  },
  {
    code: "A01010500",
    name: "자연생태관광지",
    rnum: 5,
  },
  {
    code: "A01010600",
    name: "자연휴양림",
    rnum: 6,
  },
  {
    code: "A01010700",
    name: "수목원",
    rnum: 7,
  },
  {
    code: "A01010800",
    name: "폭포",
    rnum: 8,
  },
  {
    code: "A01010900",
    name: "계곡",
    rnum: 9,
  },
  {
    code: "A01011000",
    name: "약수터",
    rnum: 10,
  },
];

const SERVICE_CODE_A0102 = [
  {
    code: "A01020100",
    name: "희귀동.식물",
    rnum: 1,
  },
  {
    code: "A01020200",
    name: "기암괴석",
    rnum: 2,
  },
];

export const SERVICE_CODE_A01 = [
  {
    ...ITME_ALL,
    items: [ITME_ALL],
  },
  {
    code: "A0101",
    name: "자연관광지",
    rnum: 1,
    items: [ITME_ALL, ...SERVICE_CODE_A0101],
  },
  {
    code: "A0102",
    name: "관광자원",
    rnum: 2,
    items: [ITME_ALL, ...SERVICE_CODE_A0102],
  },
];

export const SERVICE_CODE_A0201 = [
  {
    code: "A02010100",
    name: "고궁",
    rnum: 1,
  },
  {
    code: "A02010200",
    name: "성",
    rnum: 2,
  },
  {
    code: "A02010300",
    name: "문",
    rnum: 3,
  },
  {
    code: "A02010400",
    name: "고택",
    rnum: 4,
  },
  {
    code: "A02010500",
    name: "생가",
    rnum: 5,
  },
  {
    code: "A02010600",
    name: "민속마을",
    rnum: 6,
  },
  {
    code: "A02010700",
    name: "유적지/사적지",
    rnum: 7,
  },
  {
    code: "A02010800",
    name: "사찰",
    rnum: 8,
  },
  {
    code: "A02010900",
    name: "종교성지",
    rnum: 9,
  },
  {
    code: "A02011000",
    name: "안보관광",
    rnum: 10,
  },
];

export const SERVICE_CODE_A0202 = [
  {
    code: "A02020200",
    name: "관광단지",
    rnum: 1,
  },
  {
    code: "A02020300",
    name: "온천/욕장/스파",
    rnum: 2,
  },
  {
    code: "A02020400",
    name: "이색찜질방",
    rnum: 3,
  },
  {
    code: "A02020500",
    name: "헬스투어",
    rnum: 4,
  },
  {
    code: "A02020600",
    name: "테마공원",
    rnum: 5,
  },
  {
    code: "A02020700",
    name: "공원",
    rnum: 6,
  },
  {
    code: "A02020800",
    name: "유람선/잠수함관광",
    rnum: 7,
  },
];

export const SERVICE_CODE_A0203 = [
  {
    code: "A02030100",
    name: "농.산.어촌 체험",
    rnum: 1,
  },
  {
    code: "A02030200",
    name: "전통체험",
    rnum: 2,
  },
  {
    code: "A02030300",
    name: "산사체험",
    rnum: 3,
  },
  {
    code: "A02030400",
    name: "이색체험",
    rnum: 4,
  },
  {
    code: "A02030600",
    name: "이색거리",
    rnum: 5,
  },
];

export const SERVICE_CODE_A0204 = [
  {
    code: "A02040400",
    name: "발전소",
    rnum: 1,
  },
  {
    code: "A02040600",
    name: "식음료",
    rnum: 2,
  },
  {
    code: "A02040800",
    name: "기타",
    rnum: 3,
  },
  {
    code: "A02040900",
    name: "전자-반도체",
    rnum: 4,
  },
  {
    code: "A02041000",
    name: "자동차",
    rnum: 5,
  },
];

export const SERVICE_CODE_A0205 = [
  {
    code: "A02050100",
    name: "다리/대교",
    rnum: 1,
  },
  {
    code: "A02050200",
    name: "기념탑/기념비/전망대",
    rnum: 2,
  },
  {
    code: "A02050300",
    name: "분수",
    rnum: 3,
  },
  {
    code: "A02050400",
    name: "동상",
    rnum: 4,
  },
  {
    code: "A02050500",
    name: "터널",
    rnum: 5,
  },
  {
    code: "A02050600",
    name: "유명건물",
    rnum: 6,
  },
];

export const SERVICE_CODE_A02 = [
  {
    ...ITME_ALL,
    items: [ITME_ALL],
  },
  {
    code: "A0201",
    name: "역사관광지",
    rnum: 1,
    items: [ITME_ALL, ...SERVICE_CODE_A0201],
  },
  {
    code: "A0202",
    name: "휴양관광지",
    rnum: 2,
    items: [ITME_ALL, ...SERVICE_CODE_A0202],
  },
  {
    code: "A0203",
    name: "체험관광지",
    rnum: 3,
    items: [ITME_ALL, ...SERVICE_CODE_A0203],
  },
  {
    code: "A0204",
    name: "산업관광지",
    rnum: 4,
    items: [ITME_ALL, ...SERVICE_CODE_A0204],
  },
  {
    code: "A0205",
    name: "건축/조형물",
    rnum: 5,
    items: [ITME_ALL, ...SERVICE_CODE_A0205],
  },
];

const SERVICE_CODE_ALL = {
  ...ITME_ALL,
  items: [{ ...ITME_ALL, items: [ITME_ALL] }],
};

export const SERVICE_CODE = [
  SERVICE_CODE_ALL,
  {
    code: "A01",
    name: "자연",
    rnum: 1,
    items: SERVICE_CODE_A01,
  },
  {
    code: "A02",
    name: "인문(문화/예술/역사)",
    rnum: 2,
    items: SERVICE_CODE_A02,
  },
];
