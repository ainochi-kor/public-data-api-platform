import { GetlocationBasedListParam } from "@/types/traval.type";
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

  getlocationBasedList(params: GetlocationBasedListParam): Promise<any> {
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
}
