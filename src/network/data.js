import {request, requestA} from "./network";
export function getData() {
  return request({
    url: '/data'
  })
}
export function getLatest() {
  return requestA({
    url: '/newsdata'
  })
}