import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 1500
})

const responseBody = (response: AxiosResponse) => response.data

const request = {
  get: (url: string, params: Record<string, unknown>) => instance.get(url, { params: params }).then(responseBody),
  post: (url: string, body: Record<string, unknown>) => instance.post(url, body).then(responseBody),
  put: (url: string, body: Record<string, unknown>) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody)
}

export default request