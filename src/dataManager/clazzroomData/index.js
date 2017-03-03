var dataFetch = require('../../../src/lib/dataFetch')
/***��ƨӷ��]�w��***/
const SOURCE_CONFIG = {
    HOME_PATH :  'http://clazromapi.s104.com.tw',//AC API domain
    HEADERS : {'Accept' : 'application/json' ,'Content-Type' : 'application/json' }, //API request header
    TIMEOUT : "10000" //API timeout �ɶ�(�L��)
};
/**
�إ߱Ы�
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