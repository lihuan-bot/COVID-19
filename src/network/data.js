import {request} from "./network";
export function getData() {
  return request({
    url: '/data'
  })
}
export function getLatest() {
  return request({
    url: '/newsdata'
  })
}
export function getSerise() {
  return request({
    url: '/serise'
  })
}
export class TotalNum {
  constructor(total){
    this.confirmedIncr = total.confirmedIncr
    this.confirmedNum  = total.confirmedNum
    this.curesNum = total.curesNum
    this.deathsNum = total.deathsNum
    this.name = total.name
    this.updateDate = total.updateDate
    this.updateTime = total.updateTime
  }
}