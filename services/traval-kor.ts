import {
  EventInformationParam,
  GetEventInformationDataResponse,
  GetKeywardSearchDataResponse,
  GetlocationBasedListDataResponse,
  GetlocationBasedListParam,
  KeywardSearchParam,
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

  getKeywordSearch(params: KeywardSearchParam): Promise<{
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

  getEventInformation(params: EventInformationParam): Promise<{
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
}
