var category = {
  "101000" : { id:"101000", seq:1, level:1, isUse:true, parent:"0",tags:["101000_Finance","101000_Entrepreneurship","101000_Management","101000_Sales","101000_Project_Management","101000_Human_Resources","101000_Product_Marrketing","101000_E_Commerce","101000_Customer_Service","101000_Office_Applications"], description:"財務金融、創業、管理、業務銷售、專案管理、人力資源、產品行銷、電子商務、顧客服務、辦公室應用"},
  "102000" : { id:"102000", seq:2, level:1, isUse:true, parent:"0",tags:["102000_Career_Development","102000_Degree_Training","102000_Personal_Finance","102000_Productivity","102000_Leadership","102000_Personal_Brand_Building","102000_Motivation","102000_Creativity","102000_Self_Esteem","102000_Stress_Management"], description:"職涯發展、學位進修、投資理財、提升效率、領導能力、個人品牌、自我激勵、創意、建立自信、壓力管理"},
  "103000" : { id:"103000", seq:3, level:1, isUse:true, parent:"0",tags:["103000_English","103000_Spanish","103000_German","103000_French","103000_Japanese","103000_Portuguese","103000_Chinese","103000_Russian","103000_Arabic","103000_Italian"], description:"English、西班牙文、德文、法文、日文、葡萄牙文、漢語、俄文、阿拉伯文、意大利語"},
  "104000" : { id:"104000", seq:4, level:1, isUse:true, parent:"0",tags:["104000_Painting","104000_Dance","104000_History","104000_Music","104000_Philosophy","104000_Art_History","104000_Architecture","104000_Decoration_Art","104000_Visual_Arts","104000_Performing_Arts"], description:"繪畫、舞蹈、歷史、音樂、哲學、美術史、建築、裝飾藝術、視覺藝術、表演藝術"},
  "105000" : { id:"105000", seq:5, level:1, isUse:true, parent:"0",tags:["105000_Ceramic_Art","105000_Carpentry","105000_Knitting_Crochet","105000_Handmade_soap","105000_Cake_Decorating","105000_Metalcraft","105000_Paper_Art","105000_Floral_Design","105000_Wool_Felt","105000_Dyeing_Printing"], description:"陶藝、木工、編織、手工皂、蛋糕裝飾、金屬工藝、紙藝、花藝設計、羊毛氈、彩繪印染"},
  "106000" : { id:"106000", seq:6, level:1, isUse:true, parent:"0",tags:["106000_Web_Design","106000_Graphic_Design","106000_Design_Tools","106000_User_Experience","106000_Game_Design","106000_Design_Thinking","106000_3D_Animation","106000_Architectural_Design","106000_Interior_Design"], description:"網頁設計、平面設計、設計工具、使用者體驗、遊戲設計、設計思維、3D 與動畫、建築設計、室內設計"},
  "107000" : { id:"107000", seq:7, level:1, isUse:true, parent:"0",tags:["107000_Photography_Fundamentals","107000_Photography_Tools","107000_Landscape","107000_Mobile_Photography","107000_Portraits","107000_Black_White","107000_Commercial_Photography","107000_Travel_Photography","107000_Wedding_Photography","107000_Wildlife_Photography","107000_Video_Design"], description:"攝影基礎入門、攝影設備、風景攝影、手機攝影、人像攝影、黑白攝影、商業攝影、旅遊攝影、婚紗攝影、動物攝影、影片設計"},
  "108000" : { id:"108000", seq:8, level:1, isUse:true, parent:"0",tags:["108000_Web_Development","108000_Mobile_Apps","108000_Firmware_Engineering","108000_Game_Development","108000_Databases","108000_Software_Testing","108000_Software_Engineering","108000_ECommerce","108000_Development_Tools"], description:"網頁開發、行動應用、韌體工程、遊戲開發、資料庫、軟體測試、軟體工程、電子商業、開發工具"},
  "109000" : { id:"109000", seq:9, level:1, isUse:true, parent:"0",tags:["109000_Beauty_Makeup","109000_Travel","109000_Gaming","109000_Home_Improvement","109000_Pet_Care_Training","109000_Movie","109000_Chess","109000_Gardening","109000_Reading","109000_Fashion"], description:"美妝美髮、旅遊、遊戲益智、居家裝飾、寵物照護和訓練、電影、棋藝、園藝、閱讀、時尚"},
  "110000" : { id:"110000", seq:10, level:1, isUse:true, parent:"0",tags:["110000_Food_Beverage","110000_Baking","110000_Recipe_Design","110000_Dessert","110000_Bartending","110000_French_cuisine","110000_Chinese_cuisine","110000_Global_cuisine"], description:"料理與飲品、烘焙、食譜設計、甜點、調酒、法國菜、中式料理、异国料理"},
  "111000" : { id:"111000", seq:11, level:1, isUse:true, parent:"0",tags:["111000_Fitness","111000_General_Health","111000_Sports","111000_Nutrition","111000_Yoga","111000_Mental_Health","111000_Dieting","111000_Safety_First_Aid","111000_Meditation"], description:"健身、一般健康科學、運動、營養學、瑜伽、心理健康、飲食控制、安全與急救、冥想"},
  "112000" : { id:"112000", seq:12, level:1, isUse:true, parent:"0",tags:["112000_Grad_Entry_Exam","112000_International_High_School","112000_College_Entry_Exam","112000_Test_Taking_Skills","112000_TOEFL","112000_PMP"], description:"研究所入學考試、國際高中、大學入學考試、應試技巧、TOEFL、PMP"},
  "113000" : { id:"113000", seq:13, level:1, isUse:true, parent:"0",tags:["113000_Kids_Talent","113000_Parent_child_Relations","113000_Child_care","113000_Instructional_Design","113000_Educational_Development","113000_Teachin_Tools"], description:"幼兒才藝、親子關係、兒童發展照護、教案設計、教育發展、教學工具"},
  "114000" : { id:"114000", seq:14, level:1, isUse:true, parent:"0",tags:["114000_Cloud_Computing","114000_IT_Certification","114000_Big_Data","114000_Network_Security","114000_Hardware","114000_Operating_Systems","114000_Physics","114000_Astronomy"], description:"雲端運算、網路安全、大數據、通訊工程認證、硬體、作業系統、物理、天文學"},
}

var getTagsById = (id) => {
  if(category.hasOwnProperty(id)) {
    return category[id].tags
  }else{
    return []
  }
}


module.exports =  {
 getTagsById:getTagsById
};