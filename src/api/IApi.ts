export interface IApi {
  get<Res>(url: string, token?: string): Promise<Res>;
  post<Res, Payload>(url: string, payload: Payload, token?: string): Promise<Res>;
  put<Res, Payload>(url: string, payload: Payload, token?: string): Promise<Res>;
}

export interface IApiRes {
  message: string;
}
