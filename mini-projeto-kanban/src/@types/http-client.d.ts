type HttpClientRequest<T = unknown> = {
    url: string;
    method?: Method | string;
    data?: T;
    headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders;
    params?: never;
}

type HttpClientResponse<T = unknown> = {
    status: number
    data: T
}