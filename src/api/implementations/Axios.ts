import axios, { AxiosInstance } from 'axios';

import { IApi } from '../IApi';

class Axios implements IApi {
  private readonly baseUrl: string;
  private readonly server: AxiosInstance;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
    this.server = axios.create({
      baseURL: this.baseUrl,
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000,
    });
  }

  public async get<Res>(url: string, token?: string): Promise<Res> {
    const { data } = await this.server.get(url, { headers: { authorization: token } });

    return data;
  }

  public async post<Res, Payload>(url: string, payload: Payload, token?: string): Promise<Res> {
    const { data } = await this.server.post(url, payload, { headers: { authorization: token } });

    return data;
  }

  public async put<Res, Payload>(url: string, payload: Payload, token?: string): Promise<Res> {
    const { data } = await this.server.put(url, payload, { headers: { authorization: token } });

    return data;
  }
}

const api = new Axios();

export { api };
