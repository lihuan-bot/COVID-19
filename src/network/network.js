import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL :'http://47.103.221.217:8009/api',
    timeout: 5000
  })
  // instance.interceptors.request.use(config => {
  //   return config
  // },err=>{

  // })
  instance.interceptors.response.use(res => {
    return res.data
    
  },err => {

  } )
  return instance(config)
}
