"use strict";
var assert = require('assert');
var fs = require('fs');
var should = require('chai').should();
//var expect = require('chai').expect;
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
var request = require('supertest');
var express = require('express');
var app = express();
var nock = require("nock");
var http_mocks = require('node-mocks-http');
var proxyquire =  require('proxyquire');
var sinon = require("sinon");


//===========mocha and assert=============

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    it('should return 0 when the value is in array first position', function() {
      assert.equal(0, [1,2,3].indexOf(1));
    });
  });
  describe('#push()', function() {
   var fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
   fruitsArray.push("Kiwi");
   it('should return 5 when the array size is add one element', function() {
      assert.equal(5, fruitsArray.length);
    });

  });  
});

//---------*asynchronous

describe('asynchronous test', function() {
  it('reads some file', function(done) {
    fs.readFile('./test/testTxt.txt', function(err, data) {
      if (err) throw err;
      assert.equal(data.toString(),'abctest');
      done();
    });
  });
}); 

//===========chai===============



describe('chai should case', function() {
  var testStr = "123", testObj = { something: [ 'abc', 'kfc', 'egg' ] };
  
  it('should be pass any condition', function() {
      testStr.should.be.a('string');
      testStr.should.equal('123');
      testStr.should.have.length(3);
      testObj.should.have.property('something').with.length(3);
  });

  }); 


   
describe('chai expect case', function() {
  var testStr = "123", testObj = { something: [ 'abc', 'kfc', 'egg' ] };

  it('should be pass any condition', function() {
      expect(testStr+"abc").to.be.a('string');
      expect(testStr+"abc").to.equal('123abc');
      expect(testStr+"abc").to.have.length(6);
      expect(testObj.something).to.have.length(3);
  }); 

}); 
//==========chai-as-promised===========


function getAuthor(idObj){
    return new Promise(function(resolve, reject){
        resolve(idObj);
    });
}

describe('chai-as-promised', function() {
  it('should be return id', function() {
      return expect(getAuthor({id:'kidd123'}).then(obj => obj.id)).to.eventually.deep.equal('kidd123');
  });
});

//===========supertest============


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi123' });
});

describe('supertest case', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
      // .end(function(err, res) {
      //       if (err) return done(err);
      //        expect(res.body).to.deep.equal({ name: 'tobi123' });
      //       done();
      //   });
      done();
  });
});

//---------test clazzrooms's code-----------------------
var checkClzrmCat = require('../src/api/checkClzrmCat');

checkClzrmCat(app)

var result = { tags:
   [ { id: '101000_Finance'},
     { id: '101000_Entrepreneurship'},
     { id: '101000_Management'},
     { id: '101000_Sales'},
     { id: '101000_Project_Management'},
     { id: '101000_Human_Resources'},
     { id: '101000_Product_Marrketing'},
     { id: '101000_E_Commerce'},
     { id: '101000_Customer_Service'},
     { id: '101000_Office_Applications'} ] }

describe('clazzrooms Api test with supertest', function() {
  describe('checkClzrmCat()', function() {
    it('respond should be equal to result', function(done) {
      request(app)
        .get('/api/checkClzrmCat/101000')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
              if (err) return done(err);
               expect(res.body).to.deep.equal(result);
              done();
          });
    });
  });
});

//===============Nock=========================
var clazzroomData = require('../src/dataManager/clazzroomData')
const SOURCE_CONFIG = {
    HOME_PATH :  'http://clazromapi.s104.com.tw',//AC API domain
    HEADERS : {'Accept' : 'application/json' ,'Content-Type' : 'application/json' }, //API request header
    TIMEOUT : "10000" //API timeout 時間(微秒)
};
describe("Nock case", () => {
	describe("clazzroom Data API test", () => {
		beforeEach(() => {
			nock.disableNetConnect()
			nock.enableNetConnect(SOURCE_CONFIG.HOME_PATH)  
		})

		afterEach(() => {
			nock.cleanAll()
			nock.enableNetConnect();
		})

		it("createClassroom should be success ", function(){

			nock(SOURCE_CONFIG.HOME_PATH).post('/api/createClassroom',{
				title: '大家一起玩攝影',
				category:100,
				tag: '攝影',
				privacy: 'public',
				needVerify: 0,
				creatorPid: 230402,
				roomPhotoUrl: '/upload/photo/168234473601950980.jpg'
				}).reply(200,{data: {roomId: '168234473601950980'}})

			var dataModel = {title:'大家一起玩攝影', category:100, tag:'攝影', 
															 privacy:'public', needVerify:0, creatorPid:230402, 
															 roomPhotoUrl:'/upload/photo/168234473601950980.jpg'};

			return expect(clazzroomData.createClassroom(dataModel).then(obj => obj.data)).to.eventually.deep.equal({roomId: '168234473601950980'});
		})

	});
});
//=======node-mocks-http========================
var error500 = require('../src/error/error500');


describe("Error Handler", function() {

  let response = http_mocks.createResponse()
  let request  = http_mocks.createRequest({
      method: 'POST',
      url: '/test500',
  })

  let error = {stack:"test500error"};

  it("error statusCode should be 500", function() {

      error500(error,request, response);

      expect(response.statusCode).to.equal(500);

  });

  it("error message should be response", function() {

      expect(JSON.parse(response._getData())).to.deep.equal({code:"500", detail:"Internal Server Error"});

  });

});

//=============proxyquire===========


// var categoryServiceStub = {};

// var result = { tags:
//    [ { id: '101000_Finance'},
//      { id: '101000_Entrepreneurship'},
//      { id: '101000_Management'},
//      { id: '101000_Sales'},
//      { id: '101000_Project_Management'}] }

// describe('clazzrooms Api test with proxyquire', function() {
//   describe('checkClzrmCat()', function() {
// 	  before(function () {
//     		categoryServiceStub = sinon.stub();
//     		categoryServiceStub.getTagsById = function (catCode) { 
//           return ['101000_Finance','101000_Entrepreneurship','101000_Management','101000_Sales','101000_Project_Management']
//         };
//     		var checkClzrmCat = proxyquire('../src/api/checkClzrmCat',{'../../../src/service/categoryService': categoryServiceStub });
//     		checkClzrmCat(app)
// 	  });

// 	  it('respond should be equal to result', function(done) {
//   		request(app)
//   		  .get('/api/checkClzrmCat/101000')
//   		  .expect(200)
//   		  .end(function(err, res) {
//   				if (err) return done(err);
//   				 expect(res.body).to.deep.equal(result);
//   				 done();
//   		  });
		  
// 	  });	  
//  });
// });

//==========sinon=========

function myFunction(condition, callback){
  if(condition){
    callback();
  }
}

describe('sinon case', function() {
  describe('about spy', function() {
    it('should call the callback function 3 times', function() {
      var callback = sinon.spy();

      myFunction(true, callback);
      myFunction(true, callback);
      myFunction(true, callback);

      expect(callback.callCount).to.equal(3);
    });
  });



  function myFuncGet(app,callback){
    app.get('/user', function(req, res) {
      res.status(200).json({ name: 'tobi123' });
      callback(res);
    });

  }


  describe('about stub', function() {
    it('should call the app.get in function', function() {
	    var expectedUrl = '/user';
      var get = sinon.stub(app, 'get');
      var callback = sinon.spy();
      myFuncGet(app, callback);
	    sinon.assert.calledWith(get, expectedUrl);
    });
  });
});

//==========jsdom==========

function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}
describe('jsdom case', function() {

  before(function(){
    var jsdom = require('jsdom')
    var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
    var win = doc.defaultView
    global.document = doc
    global.window = win
    propagateToGlobal(win)
  });

  it('window userAgent should be Node.js', function() {
    expect(window.navigator.userAgent.includes("Node.js")).to.equal(true)
  }); 

});


//======react-addons-test-utils=========


// var TestUtils = require('react-addons-test-utils') 
// var expect = require('chai').expect;
// var React = require('react');
// var ClzrmCat = require('../src/client/component/ClzrmCat');

// describe('ClzrmCat-com', () => {
  

// let state = {
//             selectedValue: '',
//             selectedName: '',
//             isShowItemList: false,
//             error: '',
//         }
//  let itemList = ['app','http','aws','god','test']

//     it('should render correctly', () => {
//         let renderer = TestUtils.createRenderer()
//         renderer.render(<ClzrmCat itemList = {itemList} state = {state} />)
//         let output = renderer.getRenderOutput()
//         expect(output.type).to.equal('div');
//         expect(output.props.children[0].type).to.equal('label')
//         expect(output.props.children[1].type).to.equal('dl')
//         let selectedTagList_div = output.props.children[1]
//         let userTagList_div = output.props.children[3]
//         let catTagsList = output.props.children[4]
//         // expect(TestUtils.isElement(selectedTagList_div.props.children[1], 'span')).to.equal(true)
//         // expect(TestUtils.isElement(userTagList_div.children[4], 'li')).to.equal(true)
//         // expect(TestUtils.isElement(catTagsList.children[1], 'a')).to.equal(true)


//     })

// })



