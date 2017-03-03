"use strict";
var fetch = require('isomorphic-fetch');
const TIMEOUT = 5000;//5秒
const METHOD = {
   GET: 'GET' , POST: 'POST' , DELETE: 'DELETE' , PUT: 'PUT'
}


/*把所有的Restful api包成Promise*/
function restful(path, method, headers, param, timeout, agent){

   var headerInfo = {
       credentials: 'include'
       ,method: method
       ,timeout: (typeof(timeout)!= 'undefined') ? timeout : TIMEOUT
       ,headers: headers
   };
   if (agent) {
       if(process.env.NODE_ENV != "development"){
           headerInfo.agent = agent
       }
   }
   if( [METHOD.POST, METHOD.PUT, METHOD.DELETE].indexOf(method) > -1){
        headerInfo['body'] = JSON.stringify(param);
   }

   return new Promise((resolve, reject) => {
         fetch(path, headerInfo).then( response =>{
               if (response.status >= 400) {
                  let message = 'Connection Error :'+
                  "\n API:"+response.url+
                  "\n status code:"+response.status+
                  "\n headerInfo:"+JSON.stringify(headerInfo)+
                  "\n response"+ JSON.stringify(response);
                  reject(new Error(message));
               }
               let contentType = response.headers.get('Content-Type');
               if(contentType.indexOf("application/json") > -1) {
                 resolve(response.json());
               }else{
                 resolve(response.text());
               }
         }).catch( err =>{
             let errInfo = {err:err, path:path, headerInfo: headerInfo};
             reject(new Error(JSON.stringify(errInfo)));
         });
   });
};


module.exports =  {
    restful : restful,
    METHOD : METHOD
};
