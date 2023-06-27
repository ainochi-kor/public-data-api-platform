import {
  GetEventInformationParam,
  GetEventInformationDataResponse,
  GetKeywardSearchDataResponse,
  GetlocationBasedListDataResponse,
  GetlocationBasedListParam,
  GetKeywardSearchParam,
  GetSearchAccommodationParam,
  GetSearchAccommodationResponse,
  GetSearchDetailCommonParam,
  GetSearchDetailCommonResponse,
  GetSearchDetailIntroParam,
  GetSearchDetailInfoParam,
  GetSearchDetailInfoResponse,
  GetSearchDetailIntroResponse,
  GetSearchDetailImageParam,
  GetSearchDetailImageResponse,
  GetAreaBasedSyncListParam,
  GetAreaBasedSyncListResponse,
} from "@/types/traval.type";
import axios, { AxiosError, AxiosInstance } from "axios";
import qs from "qs";

export const axiosServer = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1",
  paramsSerializer: {
    serialize: (params) => {
      const serializedParams = qs.stringify(params, { arrayFormat: "repeat" });
      return serializedParams.replace(/%25/g, "%");
    },
  },
});

export default class TravalServices {
  private axios;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getlocationBasedList(params: GetlocationBasedListParam): Promise<{
    response: GetlocationBasedListDataResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/locationBasedList1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  getKeywordSearch(params: GetKeywardSearchParam): Promise<{
    response: GetKeywardSearchDataResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/searchKeyword1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  getEventInformation(params: GetEventInformationParam): Promise<{
    response: GetEventInformationDataResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/searchFestival1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  searchStay(params: GetSearchAccommodationParam): Promise<{
    response: GetSearchAccommodationResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/searchStay1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  getSearchDetailCommon(params: GetSearchDetailCommonParam): Promise<{
    response: GetSearchDetailCommonResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/detailCommon1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  getSearchDetailIntro(params: GetSearchDetailIntroParam): Promise<{
    response: GetSearchDetailIntroResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/detailIntro1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  getSearchDetailInfo(params: GetSearchDetailInfoParam): Promise<{
    response: GetSearchDetailInfoResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/detailInfo1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  getSearchDetailImage(params: GetSearchDetailImageParam): Promise<{
    response: GetSearchDetailImageResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/detailImage1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  getAreaBasedSyncList(params: GetAreaBasedSyncListParam): Promise<{
    response: GetAreaBasedSyncListResponse;
  }> {
    return new Promise(async (resolve, reject) => {
      this.axios
        .get("/areaBasedSyncList1", { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }
}
