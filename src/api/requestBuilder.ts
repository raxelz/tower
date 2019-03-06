import axios, {
    AxiosError,
    AxiosPromise,
    AxiosRequestConfig,
} from 'axios';
import { authUrl } from './config';

export type HTTPMethod =
    'get'
    | 'post'
    | 'delete'
    | 'put'
    | 'patch';

export interface JsonBody {
    // tslint:disable-next-line:no-any
    [key: string]: any;
}

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}

export interface ApiVariety {
    barong: string;
}

const api: ApiVariety = {
    barong: authUrl(),
};

const buildRequest = (request: Request) => {
    const { body, method, url } = request;

    const contentType = body instanceof FormData
        ? 'multipart/form-data'
        : 'application/json';

    const headers = {
        'content-type': contentType,
    };

    const apiUrl = api.barong;

    const requestConfig: AxiosRequestConfig = {
        baseURL: apiUrl,
        data: body,
        headers,
        method,
        url,
    };

    return requestConfig;
};

export const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    data: {
        errors: ['Server error'],
    },
};

export const formatError = (responseError: AxiosError) => {
    const response = responseError.response || defaultResponse;
    const errors = response.data && response.data.errors;
    return {
        code: response.status,
        message: errors,
    };
};

export const makeRequest = (request: Request) => {
    const requestConfig = buildRequest(request);

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest
            .then(resolve)
            .catch((error: AxiosError) => {
                reject(formatError(error));
            });
    });
};
