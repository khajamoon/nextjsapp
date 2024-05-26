import { makeRequest } from './requestBuilder'

export const API = {
  get: (url:string, body:any, headers:any, bodyparams:any) =>
    makeRequest({
      method: 'get',
      url,
      body,
      headers,
      bodyparams,

    }),
  getfile: (url:string, body:any, headers:any, bodyparams:any, responseType:any) =>
    makeRequest({
      method: 'get',
      url,
      body,
      headers,
      bodyparams,
      responseType
    }),


  post: (url:string, body:any, headers:any, bodyparams:any) =>
    makeRequest({
      method: 'post',
      url,
      body,
      headers,
      bodyparams,
    }),
  postFile: (url:string, body:any, headers:any, bodyparams:any, responseType:any) =>
    makeRequest({
      method: 'post',
      url,
      body,
      headers,
      bodyparams,
      responseType
    }),
  patch: (url:any, body:any) =>
    makeRequest({
      method: 'patch',
      body,
      url
    }),

  put: (url:any, body:any) =>
    makeRequest({
      method: 'put',
      body,
      url
    }),

  delete: (url:any) =>
    makeRequest({
      method: 'delete',
      url
    })


}