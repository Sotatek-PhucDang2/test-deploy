import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL || "";

interface ApiResponse<T> {
  id: number;
  jsonrpc: string;
  result: T;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined" && !navigator.onLine) {
      const action = config.headers?.["action"];
      if (action) toast.error(`There was a network error`);
      throw new Error("Network Error");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

const apiClient = {
  post: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T> | undefined> => {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(
      url,
      data,
      config,
    );
    return response.data;
  },

  get: async <T>(
    url: string,
    params?: Record<string, string | number | boolean>,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T> | undefined> => {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(
      url,
      { ...config, params },
    );
    return response.data;
  },

  put: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T> | undefined> => {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.put(
      url,
      data,
      config,
    );
    return response.data;
  },

  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T> | undefined> => {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.delete(
      url,
      config,
    );
    return response.data;
  },
};

export default apiClient;
