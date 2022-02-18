import { axiosInstance } from './instance'

export const endpoints = {
  getProducts: () => axiosInstance.get('products'),
}
