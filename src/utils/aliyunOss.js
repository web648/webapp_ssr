import OSS from 'ali-oss'
import { ajaxHttp } from '@/api/api'

export function getOssToken() { // 获取上传密钥
  return new Promise((resolve) => {
    ajaxHttp.$get('/ossToken').then(res => {
      if (res.code === 1) {
        console.log(res.data)
        resolve(res.data)
      } else {
        resolve(res)
      }
    })
  })
}

export function aliyunOss(conf) {
  return new OSS(conf)
}

/**
 *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
 *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
 *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
 *  [region] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
 */
export function client(data) { // data后端提供数据
  return new OSS({
    region: data.region,
    accessKeyId: data.accessKeyId,
    accessKeySecret: data.accessKeySecret,
    bucket: data.bucket
  })
}

/**
 * 生成随机文件名称
 * 规则八位随机字符，加下划线连接时间戳
 */
export const getFileNameUUID = () => {
  function rx() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return `${+new Date()}_${rx()}${rx()}`
}
