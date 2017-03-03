var dataFetch = require('../../../src/lib/dataFetch')
/***資料來源設定檔***/
const SOURCE_CONFIG = {
    HOME_PATH :  'http://clazromapi.s104.com.tw',//AC API domain
    HEADERS : {'Accept' : 'application/json' ,'Content-Type' : 'application/json' }, //API request header
    TIMEOUT : "10000" //API timeout 時間(微秒)
};
/**
建立教室
**/
var createClassroom = (dataModel) => {
    return dataFetch.restful(SOURCE_CONFIG.HOME_PATH+'/api/createClassroom',
    dataFetch.METHOD.POST,
    SOURCE_CONFIG.HEADERS,
    dataModel,
    SOURCE_CONFIG.TIMEOUT)
};

module.exports =  {
    createClassroom : createClassroom
};