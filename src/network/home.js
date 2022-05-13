import { request } from './index'

export function getMultiData() {
    return request({
      url: '/home/multidata'
    })
  }
getMultiData
export function getHomeData(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}