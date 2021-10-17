import axios, { AxiosResponse } from 'axios'
import { API_URL } from 'core/consts'

axios.defaults.baseURL = API_URL

const responseBody = <T>(response: AxiosResponse<T>) => response.data

export const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: T) =>
		axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: T) => axios.put<T>(url, body).then(responseBody),
	delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}
