webpackJsonp(["home.module"],{

/***/ "../../../../../views/app/components/baby-room/baby-room.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"imgBox\">\n\n  </div>\n  <div class=\"babyRoom\">\n    <div class=\"nav\">\n      <ul>\n        <li *ngFor=\"let item of navList\" >\n          <a (click)=\"getList($event,item);\" #navStyle>\n            <span>{{item.babyNavName}}</span>\n            <span class=\"span\">20</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n     <!-- 内容 -->\n    <div class=\"babyRoomContent\">\n      <!-- 容器 -->\n\n      <div #container id=\"container\"> \n        <!-- 承载单个图片 -->\n        <div class=\"box\" *ngFor=\"let item of viewList\" #boxList >\n          <!-- 设置图片边框效果 -->\n          <div class=\"box_img\">\n            <!-- 加载图片 -->\n            <img [src]=\"item.url[0]\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <!-- <ul>\n        <li *ngFor=\"let v of viewList\" style=\"padding:10px 10px 10px 10px;text-align:center;\">\n          <P>{{v.title}}</P>\n        </li>\n      </ul>  -->\n\n\n    </div>\n    \n\n    <div class=\"addBtn\">\n      <span>点我点我！</span>\n        <svg class=\"icon\" aria-hidden=\"true\" (click)=\"hideAddClick()\">\n            <use xlink:href=\"#wang-meiguoduichang\"></use>\n        </svg>\n    </div>\n\n    <!-- 内容 -->\n    <div class=\"babyRoomAddNewWord\" #addNewWordDiv [@display]=\"currentDisplay\">\n      <div class=\"addNewWord\">\n          <svg class=\"icon hideIcon\" aria-hidden=\"true\" (click)=\"hideAddClick()\">\n              <use xlink:href=\"#wang-quxiao2\"></use>\n          </svg>\n        <!-- 头部 -->\n        <p class=\"addHeader\">来添一笔</p>\n        <!-- 标题 -->\n        <div class=\"addTitle\">\n          <span>标题</span>\n          <input placeholder=\"请填写标题\" type=\"text\" name=\"title\" [(ngModel)]=\"addSet.title\"/>\n        </div>\n        <!-- 标签 -->\n        <div class=\"addLabel\">\n          <span class=\"labelSpan\">选择标签</span>\n          <p>\n            <span class=\"span\" #addLabel *ngFor=\"let item of navList\" (click)=\"addClickLabel($event,item);\">\n              <a>{{item.babyNavName}}</a>\n            </span>\n            <span class=\"error\" #errorText [@errorText]=\"errorTextIndex\">\n              <svg class=\"icon errorIcon\" aria-hidden=\"true\">\n                <use xlink:href=\"#wang-cuowu1\"></use>\n              </svg>\n              <span>选择一个标签吧~</span>\n            </span>\n          </p>\n        </div>\n        <!-- 新增内容 -->\n        <div class=\"addContent\">\n          <span>内容</span>\n          <textarea name=\"content\" type='text' placeholder=\"想写什么些什么...\" [(ngModel)]=\"addSet.content\"></textarea>\n        </div>\n\n        <div class=\"upData\" [@display]=\"imgListDisplay\">\n          <div class=\"addImgListBox\">\n            <ul>\n              <li *ngFor=\"let img of imgList; let i = index\">\n                <span>\n                  <svg class=\"icon hideImg\" aria-hidden=\"true\" (click)=\"delImg(i)\">\n                    <use xlink:href=\"#wang-chacha\"></use>\n                  </svg>\n                </span>\n                <img [src]=\"img.base\">\n              </li>\n              <li style=\"border:1px dashed #ccc;\" *ngIf=\"addImgShow\">\n                <svg class=\"icon\" aria-hidden=\"true\">\n                  <use xlink:href=\"#wang-weibiaoti-zhuanhuan\"></use>\n                </svg>\n                <input type=\"file\" #newImg (change)=\"FileUploader(newImg, $event)\"/>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"addPics\">\n          <span (click)=\"uploadFile();\"> 提交 </span>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../views/app/components/baby-room/baby-room.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0; }\n\nsection {\n  padding-top: 240px;\n  position: relative;\n  overflow-y: auto; }\n  section .imgBox {\n    margin-top: -240px;\n    height: 240px;\n    background: #FAFAFA url(" + escape(__webpack_require__("../../../../../views/assets/images/babyRoom/ekg-2753759_960_720.png")) + ") no-repeat;\n    background-size: cover; }\n  section .babyRoom {\n    height: auto;\n    background: #DEE3E7; }\n    section .babyRoom .nav {\n      width: 100%;\n      background: #FAFAFA;\n      padding: 10px 6%;\n      border-bottom: 1px solid #c4cdd4; }\n      section .babyRoom .nav ul li {\n        float: left;\n        list-style: none;\n        margin: 2px 10px;\n        font-size: 12px;\n        cursor: pointer; }\n        section .babyRoom .nav ul li a {\n          position: relative;\n          display: inline-block;\n          max-width: 100%;\n          height: 24px;\n          margin: 0 10px 5px 0;\n          line-height: 24px;\n          padding: 0 8px 0 18px;\n          border-radius: 0 4px 4px 0;\n          background: #eee;\n          font-size: 12px;\n          color: #333;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          -webkit-box-sizing: border-box;\n          transition: all 0.6s; }\n        section .babyRoom .nav ul li a .span {\n          display: inline-block;\n          opacity: .3;\n          padding: 0 0 0 5px; }\n        section .babyRoom .nav ul li a:hover {\n          background: #0366E1;\n          color: #fff; }\n        section .babyRoom .nav ul li a:before {\n          position: absolute;\n          content: \"\";\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 0;\n          border-width: 12px 12px 12px 0;\n          border-color: #fff transparent;\n          border-style: solid; }\n        section .babyRoom .nav ul li a:after {\n          position: absolute;\n          content: \"\";\n          width: 4px;\n          height: 4px;\n          top: 10px;\n          left: 8px;\n          border-radius: 100%;\n          background: #fff; }\n    section .babyRoom .babyRoomContent {\n      width: 100%;\n      height: auto;\n      padding-left: 20px;\n      padding-right: 20px;\n      margin: 0 auto;\n      background: #ccc; }\n      section .babyRoom .babyRoomContent #container {\n        position: relative;\n        margin: 0 auto;\n        height: auto; }\n        section .babyRoom .babyRoomContent #container .box {\n          padding: 5px;\n          float: left; }\n          section .babyRoom .babyRoomContent #container .box .box_img {\n            padding: 5px;\n            border: 1px solid #ccc;\n            box-shadow: 0 0 5px #ccc;\n            border-radius: 5px;\n            background: yellow; }\n            section .babyRoom .babyRoomContent #container .box .box_img img {\n              width: 238px;\n              height: auto; }\n    section .babyRoom .addBtn {\n      text-align: center;\n      position: fixed;\n      bottom: 4%;\n      right: 2%;\n      font-size: 80px;\n      cursor: pointer;\n      z-index: 1999;\n      transition: all 0.4s; }\n      section .babyRoom .addBtn span {\n        display: none;\n        position: fixed;\n        bottom: 18%;\n        right: 2%;\n        font-size: 12px;\n        padding: 4px 8px;\n        border-radius: 4px;\n        background: #333;\n        color: #fff; }\n    section .babyRoom .addBtn:hover .icon {\n      -webkit-animation: myfirst 2s ease;\n              animation: myfirst 2s ease; }\n    section .babyRoom .addBtn:hover span {\n      display: block;\n      -webkit-animation: myfirst 2s ease;\n              animation: myfirst 2s ease; }\n    section .babyRoom .babyRoomAddNewWord {\n      position: fixed;\n      bottom: 0;\n      z-index: 2000;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.6);\n      padding: 20px; }\n      section .babyRoom .babyRoomAddNewWord .addNewWord {\n        width: 100%;\n        height: 100%;\n        background: #fff;\n        overflow-x: hidden;\n        overflow-y: auto; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .hideIcon {\n          float: right;\n          margin-right: 20px;\n          margin-top: 14px;\n          font-size: 30px;\n          color: #999696;\n          cursor: pointer;\n          transition: all 0.6s; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .hideIcon:hover {\n          transform: rotate(180deg);\n          -webkit-transform: rotate(180deg);\n          -moz-transform: rotate(180deg);\n          -o-transform: rotate(180deg);\n          -ms-transform: rotate(180deg); }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .addHeader {\n          padding: 16px;\n          font-size: 18px;\n          font-weight: 600;\n          text-align: center;\n          color: #333; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .addTitle {\n          padding: 10px 10px 10px 30%; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .addTitle span {\n            display: inline-block;\n            text-align: right;\n            width: 30%;\n            margin-left: -30%;\n            margin-right: 6%;\n            font-size: 14px;\n            color: #333; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .addTitle input {\n            width: 40%;\n            height: 30px;\n            font-size: 14px;\n            padding-left: 10px;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            transition: all 1s; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .addTitle input:focus {\n            width: 70%; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .addLabel {\n          padding: 10px 10px 10px 30%;\n          width: 100%;\n          height: auto; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .addLabel .labelSpan {\n            display: inline-block;\n            text-align: right;\n            width: 30%;\n            line-height: 30px;\n            margin: auto 6% auto -30%;\n            font-size: 14px;\n            color: #333; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .addLabel p {\n            display: inline-block;\n            width: 90%;\n            height: 30px;\n            line-height: 30px;\n            text-align: left;\n            font-size: 14px; }\n            section .babyRoom .babyRoomAddNewWord .addNewWord .addLabel p .span {\n              display: inline-block;\n              padding: 0 10px;\n              font-size: 12px;\n              border: 1px solid #ccc;\n              border-radius: 6px;\n              margin-right: 10px;\n              cursor: pointer;\n              transition: all 0.6s; }\n            section .babyRoom .babyRoomAddNewWord .addNewWord .addLabel p .error {\n              margin-left: 10px;\n              height: 30px;\n              color: red;\n              position: absolute;\n              z-index: 100; }\n              section .babyRoom .babyRoomAddNewWord .addNewWord .addLabel p .error span {\n                display: inline-block; }\n              section .babyRoom .babyRoomAddNewWord .addNewWord .addLabel p .error .errorIcon {\n                margin: 0;\n                font-size: 20px;\n                display: inline-block; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .addContent {\n          padding: 20px 10px 0 30%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .addContent span {\n            display: inline-block;\n            text-align: right;\n            width: 30%;\n            line-height: 30px;\n            margin: auto 6% auto -30%;\n            font-size: 14px;\n            color: #333; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .addContent textarea {\n            display: inline-block;\n            font-size: 12px;\n            padding: 10px;\n            width: 50%;\n            height: 140px;\n            resize: none;\n            transition: all 1s; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox {\n          width: 580px;\n          height: auto;\n          overflow-x: hidden;\n          overflow-y: auto;\n          padding: 10px;\n          margin: 10px auto;\n          color: #000;\n          border: 1px solid #ddd; }\n          section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox ul li {\n            margin: 5px;\n            float: left;\n            width: 160px;\n            height: 160px;\n            padding: 6px;\n            background: #fff;\n            position: relative;\n            border: 1px solid #ccc; }\n            section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox ul li span {\n              position: absolute;\n              display: inline-block;\n              top: 0;\n              right: 24px;\n              z-index: 100;\n              width: auto;\n              height: auto;\n              background: #fff; }\n              section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox ul li span .hideImg {\n                cursor: pointer;\n                font-size: 24px;\n                color: #fff;\n                transition: all 0.5s; }\n              section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox ul li span .hideImg:hover {\n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.6); }\n            section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox ul li img {\n              width: auto;\n              height: auto;\n              max-width: 100%;\n              max-height: 100%; }\n            section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox ul li input {\n              position: absolute;\n              z-index: 100;\n              width: 100%;\n              height: 100%;\n              opacity: 0; }\n            section .babyRoom .babyRoomAddNewWord .addNewWord .upData .addImgListBox ul li .icon {\n              position: absolute;\n              z-index: 99;\n              font-size: 146px;\n              margin: 0; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .addPics {\n          background: #4A6EBC;\n          color: white;\n          overflow: hidden;\n          z-index: 100;\n          float: right;\n          font-weight: 400;\n          line-height: 45px;\n          margin-right: 2.5em;\n          cursor: pointer;\n          overflow: hidden;\n          padding: 0 40px;\n          position: relative;\n          text-align: center;\n          width: auto;\n          bottom: 16%; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .addPics:after {\n          content: \"\";\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 500%;\n          height: 1000%;\n          background: #4A6EBC;\n          z-index: -1;\n          -webkit-transform-origin: 0% 0%;\n                  transform-origin: 0% 0%;\n          -webkit-transform: translateX(calc(20% - 25px)) translateY(10%) rotate(-45deg);\n                  transform: translateX(calc(20% - 25px)) translateY(10%) rotate(-45deg);\n          transition: -webkit-transform .3s;\n          transition: transform .3s;\n          transition: transform .3s, -webkit-transform .3s; }\n        section .babyRoom .babyRoomAddNewWord .addNewWord .addPics:hover::after {\n          -webkit-transform: translateY(10%) translateX(-25px) rotate(-45deg);\n                  transform: translateY(10%) translateX(-25px) rotate(-45deg); }\n\n@-webkit-keyframes myfirst {\n  0% {\n    transition: all 0.8s;\n    -webkit-transform: translate(10px, 0px);\n            transform: translate(10px, 0px); }\n  25% {\n    transition: all 0.6s;\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px); }\n  50% {\n    transition: all 0.4s;\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px); }\n  75% {\n    transition: all 0.2s;\n    -webkit-transform: translate(10px, 0px);\n            transform: translate(10px, 0px); }\n  100% {\n    transition: all 0.1s;\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px); } }\n\n@keyframes myfirst {\n  0% {\n    transition: all 0.8s;\n    -webkit-transform: translate(10px, 0px);\n            transform: translate(10px, 0px); }\n  25% {\n    transition: all 0.6s;\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px); }\n  50% {\n    transition: all 0.4s;\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px); }\n  75% {\n    transition: all 0.2s;\n    -webkit-transform: translate(10px, 0px);\n            transform: translate(10px, 0px); }\n  100% {\n    transition: all 0.1s;\n    -webkit-transform: translate(-10px, 0px);\n            transform: translate(-10px, 0px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../views/app/components/baby-room/baby-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BabyRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BabyRoomComponent = (function () {
    function BabyRoomComponent(http, ele, renderer, cdr) {
        this.http = http;
        this.ele = ele;
        this.renderer = renderer;
        this.cdr = cdr;
        this.file = [];
        this.form = new FormData();
        // 瀑布流数组定义数组
        this.pullList = [];
        this.currentDisplay = 'none';
        this.imgListDisplay = 'none';
        this.errorTextIndex = 'hide';
        this.addImgShow = true;
        this.file = [];
        this.imgList = [];
        this.upDateURL = [];
        this.addSet = {
            title: '',
            content: '',
            label: '',
            url: this.upDateURL
        };
        // 请求页面数据
    }
    BabyRoomComponent.prototype.ngOnInit = function () {
        this.getBabyRoomNav();
    };
    // 刚进页面拿到导航栏信息
    BabyRoomComponent.prototype.getBabyRoomNav = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        this.http.post("http://localhost:4400/babyRoom/getNav", body, options)
            .subscribe(function (res) {
            // var len = res.json().length;
            _this.navList = res.json().data;
            _this.viewList = res.json().message;
            console.log(_this.viewList);
            _this.cdr.markForCheck();
            _this.cdr.detectChanges();
            // this.pullListFunction();
        });
    };
    // 获得图片数组
    // pullListFunction() : void{
    //   let parent = this.containerDiv;
    //   let content = this.boxDiv.toArray();
    //   this.get_width(parent, content)
    // }
    // 获取图片宽度
    // get_width(parent, content) : void{
    //   let img_width = content[1].nativeElement.offsetWidth;
    //   let win_width = document.documentElement.clientWidth;
    //   let num_width = Math.floor(win_width / img_width);
    //   parent.nativeElement.style.cssText = "width:" + img_width* num_width + "px;margin:0 auto";
    //   // this.min_image_locatin(num_width, content)
    //   // console.log(num_width)
    // }
    // min_image_locatin
    // min_image_locatin(dec_width, content):void{
    //   let box_height_array = [],min_height,min_index;
    //   for(let i=0;i<content.length;i++){
    //     if(i < dec_width){
    //       box_height_array[i] = content[i].nativeElement.offsetHeight;
    //     }else{
    //       // min_height = Math.min.apply(null, box_height_array);  //获取第一排图片中高度最小的图片
    //       //函数获取高度最小的图片位置
    //       // for (let h in box_height_array) {
    //       //   console.log(box_height_array)
    //       //   if (box_height_array[h] === min_height) { //循环所有数组的高度 让它等于最小图片的高度 返回i值
    //       //     min_index = h;
    //       //   }
    //       // } 
    //     }
    //   }
    // }
    // 上传文件
    BabyRoomComponent.prototype.FileUploader = function (img, event) {
        var _this = this;
        var reader = new FileReader;
        reader.readAsDataURL(img.files[0]);
        var base, size, type, name;
        reader.onload = function (value) {
            size = img.files[0].name;
            type = img.files[0].type;
            name = img.files[0].name;
            console.log(img.files[0]);
            base = this.result;
        };
        setTimeout(function () {
            _this.file = {
                'size': size,
                'type': type,
                'name': name,
                'url': base
            };
            _this.imgList.push({
                base: base
            });
            _this.addImgBtn();
            _this.upDateImg(_this.file); //调用上传图片事件
        }, 500);
    };
    // 新增文章点击标签改变样式
    BabyRoomComponent.prototype.addClickLabel = function (event, item) {
        this.addSet.label = item.babyNavName;
        this.errorTextIndex = 'hide';
        this.todoNames.forEach(function (e) {
            e.nativeElement.style.background = '#fff';
            e.nativeElement.style.border = '1px solid #ccc';
            e.nativeElement.style.color = '#333';
            if (e.nativeElement.innerText === item.babyNavName) {
                console.log(e);
                e.nativeElement.style.background = '#84CFE1';
                e.nativeElement.style.border = '1px solid #fff';
                e.nativeElement.style.color = '#fff';
            }
        });
        //图片
        if (item.babyNavName === "图片") {
            this.imgListDisplay = 'block';
            this.tabNav();
        }
        else if (item.babyNavName === "电影") {
            this.imgListDisplay = 'block';
            this.tabNav();
        }
        else if (item.babyNavName === "文章") {
            this.imgListDisplay = 'block';
            this.tabNav();
        }
        else if (item.babyNavName === "其他") {
            this.imgListDisplay = 'block';
            this.tabNav();
        }
        else if (item.babyNavName === "视频") {
            this.imgListDisplay = 'none';
            this.tabNav();
        }
        else if (item.babyNavName === "音乐") {
            this.imgListDisplay = 'none';
            this.tabNav();
        }
    };
    BabyRoomComponent.prototype.tabNav = function () {
        var len = this.upDateURL.length;
        if (len === 0) {
            this.addSet = {
                title: '',
                content: '',
                label: '',
                url: this.upDateURL
            };
        }
        else {
            var text = '取消';
            var key = '';
            for (var i = 0; i < len; i++) {
                this.delImgHttp(this.upDateURL[i], text, key);
            }
        }
    };
    // 数据序列化
    BabyRoomComponent.prototype.toQueryString = function (obj) {
        var result = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                result = result.concat(queryValues);
            }
            else {
                result.push(this.toQueryPair(key, values));
            }
        }
        return result.join('&');
    };
    BabyRoomComponent.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    // 上传图片获取图片链接
    BabyRoomComponent.prototype.upDateImg = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            _this.http.post("http://localhost:4400/upDataFile/upDateImg", _this.toQueryString(file), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data), function (error) { reject(error); };
                _this.upDateURL.push(data.imageUrl);
                console.log(_this.upDateURL);
            });
        });
    };
    // 定义上传事件upDataFile,新增各类消息
    BabyRoomComponent.prototype.uploadFile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        if (this.addSet.label === "") {
            this.errorTextIndex = 'show';
            return false;
        }
        var setData = JSON.stringify(this.addSet);
        body.set('data', setData);
        console.log(body);
        this.http.post('http://localhost:4400/upDataFile/upDataFile', body, options)
            .subscribe(function (res) {
            _this.viewList = res.json().data;
            _this.imgList = [];
            _this.upDateURL = [];
            _this.addSet = {
                title: '',
                content: '',
                label: '',
                url: _this.upDateURL
            };
            _this.currentDisplay = 'none';
            console.log(_this.viewList);
        });
    };
    // 新增时点击删除图片
    BabyRoomComponent.prototype.delImg = function (key) {
        var text = '删除单个';
        var url = this.upDateURL[key];
        this.delImgHttp(url, text, key);
    };
    // 判断添加图片按钮是否存在
    BabyRoomComponent.prototype.addImgBtn = function () {
        if (this.imgList.length >= 6) {
            this.addImgShow = false;
        }
        else {
            this.addImgShow = true;
        }
    };
    // 标签储存接口测试
    BabyRoomComponent.prototype.goAjax = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.set('name', "音乐");
        this.http.post("http://localhost:4400/babyRoom/addNavList", body, options)
            .subscribe(function (res) {
            _this.data = res.json();
            console.log(_this.data);
        });
    };
    // 点击导航栏获取信息
    //组件中获取DOM
    BabyRoomComponent.prototype.getList = function (event, item) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        // 改变样式
        this.navStyle.forEach(function (e) {
            e.nativeElement.style.background = '#eee';
            e.nativeElement.style.color = '#333';
            if (e.nativeElement.children[0].innerText === item.babyNavName) {
                console.log(e);
                e.nativeElement.style.background = '#0366E1';
                e.nativeElement.style.color = '#fff';
            }
        });
        body.set('name', item.babyNavName);
        this.http.post('http://localhost:4400/babyRoom/getList', body, options)
            .subscribe(function (res) {
            _this.viewList = res.json();
            console.log(res.json());
        });
        // console.log(item)
    };
    // 取消添加按钮
    BabyRoomComponent.prototype.hideAddClick = function () {
        console.log(this.currentDisplay);
        if (this.currentDisplay === 'none') {
            this.currentDisplay = 'block';
        }
        else if (this.currentDisplay === 'block') {
            this.currentDisplay = 'none';
            this.errorTextIndex = 'hide';
            var len = this.upDateURL.length;
            if (len === 0) {
                this.addSet = {
                    title: '',
                    content: '',
                    label: '',
                    url: this.upDateURL
                };
            }
            else {
                var text = '取消';
                var key = '';
                for (var i = 0; i < len; i++) {
                    this.delImgHttp(this.upDateURL[i], text, key);
                }
            }
        }
    };
    // 调用删除图片接口
    BabyRoomComponent.prototype.delImgHttp = function (url, text, key) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var delImg = url;
        body.set('url', delImg);
        this.http.post("http://localhost:4400/upDataFile/delImg", body, options)
            .subscribe(function (res) {
            if (text === "删除单个") {
                var lala = res.json();
                _this.imgList.splice(key, 1);
                _this.upDateURL.splice(key, 1);
                _this.addImgBtn();
            }
            else if (text === "取消") {
                _this.imgList = [];
                _this.upDateURL = [];
                _this.addSet = {
                    title: '',
                    content: '',
                    label: '',
                    url: _this.upDateURL
                };
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('addLabel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], BabyRoomComponent.prototype, "todoNames", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('navStyle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], BabyRoomComponent.prototype, "navStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BabyRoomComponent.prototype, "containerDiv", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('boxList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], BabyRoomComponent.prototype, "boxDiv", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addNewWordDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BabyRoomComponent.prototype, "addNewWordDivEle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errorText'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BabyRoomComponent.prototype, "errorTextEle", void 0);
    BabyRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-baby-room',
            template: __webpack_require__("../../../../../views/app/components/baby-room/baby-room.component.html"),
            styles: [__webpack_require__("../../../../../views/app/components/baby-room/baby-room.component.scss")],
            providers: [],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('display', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'block',
                        'opacity': '1'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('none', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'none',
                        'opacity': '0'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('block => none', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1200ms cubic-bezier(0.4, 0, 0.2, 1)')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('none => block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1200ms cubic-bezier(0.4, 0, 0.2, 1)'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('errorText', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('show', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'inline-block',
                        'opacity': '1'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hide', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'none',
                        'opacity': '0'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1200ms cubic-bezier(0.4, 0, 0.2, 1)')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1200ms cubic-bezier(0.4, 0, 0.2, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], BabyRoomComponent);
    return BabyRoomComponent;
}());



/***/ }),

/***/ "../../../../../views/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  聊天室\n</section>"

/***/ }),

/***/ "../../../../../views/app/components/chatroom/chatroom.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../views/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatroomComponent = (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__("../../../../../views/app/components/chatroom/chatroom.component.html"),
            styles: [__webpack_require__("../../../../../views/app/components/chatroom/chatroom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "../../../../../views/app/components/demo-room/demo-room.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div style=\"width:400px;height:400px;border:1px solid #ccc;padding:10px;margin-top:10px;\">\n    <img style=\"width: auto;height:auto;max-width:100%;max-height:100%;\" [src]=\"src\"/>\n  </div>\n  <div>\n    <span>{{viewList}}</span>\n  </div>\n\n  <input type=\"text\" #input [ngModel]='src' (ngModelChange)=\"change(input)\" style=\"width:800px;height:30px;padding-left:10px;margin-top:10px;\" placeholder=\"请输入URL地址\">\n  <button (click)=\"click();\">提交</button>\n\n\n  <div style=\"width:400px;height:400px;border:1px solid #ccc;padding:10px;margin-top:10px;\">\n      <img style=\"width: auto;height:auto;max-width:100%;max-height:100%;\" [src]=\"src2\"/>\n    </div>\n    <input type=\"file\" #newImg (change)=\"FileUploader(newImg, $event)\" style=\"width:800px;height:30px;padding-left:10px;margin-top:10px;\" placeholder=\"请输入URL地址\">\n    <!-- <button (click)=\"click();\">提交</button> -->\n</section>\n"

/***/ }),

/***/ "../../../../../views/app/components/demo-room/demo-room.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../views/app/components/demo-room/demo-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoRoomComponent = (function () {
    function DemoRoomComponent(http) {
        this.http = http;
        this.Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        this.src = '';
        this.src2 = '';
        this.list = [];
        var objExp = new RegExp(this.Expression);
        this.form = new FormData();
        if (objExp.test(this.src)) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    DemoRoomComponent.prototype.ngOnInit = function () {
    };
    DemoRoomComponent.prototype.change = function (input) {
        this.src = input.value;
        console.log(input.value);
    };
    DemoRoomComponent.prototype.click = function () {
        var _this = this;
        console.log(this.src);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        this.list.push(this.src);
        var index = {
            format: 'url',
            images: this.list
        };
        var lala = JSON.stringify(index);
        body.set('name', lala);
        console.log(lala);
        console.log(typeof lala);
        this.http.post("http://192.168.123.22:10000/api/img1", index)
            .subscribe(function (res) {
            _this.viewList = res.json();
            console.log(res);
            console.log(_this.viewList);
        });
    };
    // 上传文件
    DemoRoomComponent.prototype.FileUploader = function (img, event) {
        var _this = this;
        var reader = new FileReader;
        reader.readAsDataURL(img.files[0]);
        var base, size, type, name;
        reader.onload = function (value) {
            size = img.files[0].name;
            type = img.files[0].type;
            name = img.files[0].name;
            console.log(img.files[0]);
            base = this.result;
        };
        setTimeout(function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'formdata' });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            _this.src2 = base;
            _this.form = new FormData();
            _this.form.append('image', img.files);
            _this.http.get("http://192.168.123.22:10000/api/img2", _this.form).
                map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.viewList = res.json();
                console.log(_this.viewList);
            });
        }, 500);
    };
    DemoRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo-room',
            template: __webpack_require__("../../../../../views/app/components/demo-room/demo-room.component.html"),
            styles: [__webpack_require__("../../../../../views/app/components/demo-room/demo-room.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DemoRoomComponent);
    return DemoRoomComponent;
}());



/***/ }),

/***/ "../../../../../views/app/components/home-index/home-index.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"swiper-container swiper-container-H\">\n        <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide swiper-slide-H\">\n                <div class=\"swiper-container swiper-container-W\">\n                    <div class=\"swiper-wrapper\">\n                      <div class=\"swiper-slide swiper-slide-W\">\n                        <figure>\n                          <img src=\"../../../assets/images/banner/myBanner-1.jpg\"/>\n                          <figcaption>\n                            <p>\n                              标题\n                            </p>\n                          </figcaption>\n                        </figure>\n                      </div>\n                      <div class=\"swiper-slide swiper-slide-W\">\n                          <figure>\n                              <img src=\"../../../assets/images/banner/pexels-photo-1.jpg\"/>\n                              <figcaption>\n                                <p>第一张</p>\n                              </figcaption>\n                            </figure>\n                      </div>\n                    </div>\n                    <!-- Add Pagination -->\n                    <div class=\"swiper-pagination swiper-pagination-W\"></div>\n                    <!-- Add Arrows -->\n                    <div class=\"swiper-button-next\"></div>\n                    <div class=\"swiper-button-prev\"></div>\n                  </div>\n            </div>\n            <div class=\"swiper-slide swiper-slide-H swiper-slide-2\">\n              <video autoplay loop>\n                <!-- <source src=\"../../../assets/images/MP4/A7Q0yVfBh3bC1514200220.mp4\"> -->\n                <source src=\"../../../assets/images/MP4/3.mp4\">\n              </video>\n              <div class=\"contentSvg\">\n                  <p class=\"svg\">\n                      <svg width=\"379\" height=\"126\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <defs>\n                         <filter id=\"svg_5_blur\">\n                          <feGaussianBlur stdDeviation=\"0\"/>\n                         </filter>\n                        </defs>\n                        <g>\n                         <title>background</title>\n                         <rect x=\"-1\" y=\"-1\" width=\"381\" height=\"128\" id=\"canvas_background\" fill=\"none\"/>\n                         <g id=\"canvasGrid\" display=\"none\">\n                          <rect id=\"svg_1\" width=\"100%\" height=\"100%\" x=\"0\" y=\"0\" stroke-width=\"0\" fill=\"url(#gridpattern)\"/>\n                         </g>\n                        </g>\n                        <g>\n                         <title>Layer 1</title>\n                         <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\" opacity=\"0.5\" d=\"m112.00038,182.85674\" id=\"svg_3\"/>\n                         <text fill=\"#000000\" stroke-width=\"0\" stroke-opacity=\"null\" fill-opacity=\"null\" x=\"84.136887\" y=\"99\" id=\"svg_4\" font-size=\"24\" font-family=\"Helvetica, Arial, sans-serif\" text-anchor=\"start\" xml:space=\"preserve\" font-weight=\"bold\" transform=\"matrix(2.833715677261353,0,0,3.3841624259948726,-220.21978307515383,-367.9087255299091) \" stroke=\"#000\">WHO AM I</text>\n                         <text fill=\"#ffffff\" x=\"34.276665\" y=\"111.874252\" id=\"svg_5\" font-size=\"24\" font-family=\"Helvetica, Arial, sans-serif\" text-anchor=\"start\" xml:space=\"preserve\" transform=\"matrix(2.644888162612915,0,0,2.5999633693130995,-52.73922671377659,-206.01982694024906) \" stroke=\"#999999\" filter=\"url(#svg_5_blur)\" font-weight=\"normal\">WHO AM I</text>\n                        </g>\n                       </svg>\n                  </p>\n                  <div class=\"contentText\">\n                    <div class=\"col-md-4 box_1\">\n                      <div class=\"img\"></div>\n                      <p> 小汪，常用名汪耀华。</p>\n                      <p> 1994年，诞生于地球-中国-安徽。</p>\n                      <p>90后，天蝎女，性格温和，软萌，偶尔汉子起来也是很可以的。ヽ(￣▽￣)ﾉ</p>\n                    </div>\n                    <div class=\"col-md-4 box_2\">\n                      <div class=\"img\"></div>\n                      <p>前端开发小白一枚。</p>\n                      <p>初来乍到，看见什么都觉得很好玩，各种功能要怎么实现，戴上耳机，能在电脑前坐很久很久。。。</p>\n                      <p>初级技能，HTML(5)，CSS(3)，AngularJs，Angular2，NODE，MONGODB。</p>\n                    </div>\n                    <div class=\"col-md-4 box_3\">\n                      <div class=\"img\"></div>\n                      <p>对未来。。</p>\n                      <p>想去很多很多地方，</p>\n                      <p>想养一只喵星人或者汪星人，跟我一起敲代码、看电视、晒太阳。。</p>\n                    </div>\n                  </div>\n              </div>\n            </div>\n            <div class=\"swiper-slide swiper-slide-H swiper-slide-3\">\n              <div class=\"imgDiv\">\n                <div class=\"startImg\">\n                    <img class=\"img1\" src=\"../../../assets/images/homeIndex/1 143.JPG\">\n                    <img class=\"img2\" src=\"../../../assets/images/homeIndex/1 139.JPG\">\n                </div>\n                \n              </div>\n            </div>\n            <div class=\"swiper-slide swiper-slide-H swiper-slide-4\">\n                <!-- Height 4 -->\n              <div class=\"echarts\" echarts [options]='echartOption'></div>\n            </div>\n            <div class=\"swiper-slide swiper-slide-H\">Height 5</div>\n            <div class=\"swiper-slide swiper-slide-H swiper-slide-6\">\n              <div class=\"background\">\n                <div class=\"content\">\n                  <div class=\"timeBox\">\n                    <div class=\"headerText\">\n                        <svg width=\"246.00000000000003\" height=\"49.99999999999999\" xmlns=\"http://www.w3.org/2000/svg\">\n                          <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\n                          <defs>\n                           <filter id=\"svg_1_blur\">\n                            <feGaussianBlur stdDeviation=\"1.9\" in=\"SourceGraphic\"/>\n                           </filter>\n                           <filter id=\"svg_2_blur\">\n                            <feGaussianBlur stdDeviation=\"0\" in=\"SourceGraphic\"/>\n                           </filter>\n                          </defs>\n                          <g>\n                           <title>background</title>\n                           <rect fill=\"none\" id=\"canvas_background\" height=\"52\" width=\"248\" y=\"-1\" x=\"-1\"/>\n                           <g display=\"none\" overflow=\"visible\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\" id=\"canvasGrid\">\n                            <rect fill=\"url(#gridpattern)\" stroke-width=\"0\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\"/>\n                           </g>\n                          </g>\n                          <g>\n                           <title>Layer 1</title>\n                           <text filter=\"url(#svg_1_blur)\" font-weight=\"bold\" stroke=\"#b2b2b2\" transform=\"matrix(0.9429299235343933,0,0,1,6.876944214105606,0) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"'Trebuchet MS', Gadget, sans-serif\" font-size=\"44\" id=\"svg_1\" y=\"40.646023\" x=\"18.380167\" stroke-width=\"2\" fill=\"none\">RUN  TIME</text>\n                           <text filter=\"url(#svg_2_blur)\" font-weight=\"bold\" stroke=\"#b2b2b2\" transform=\"matrix(0.9429299235343933,0,0,1,6.876944214105606,0) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"'Trebuchet MS', Gadget, sans-serif\" font-size=\"44\" id=\"svg_2\" y=\"40.646023\" x=\"14.301265\" stroke-width=\"2\" fill=\"none\">RUN  TIME</text>\n                          </g>\n                         </svg>\n                    </div>\n                    <div class=\"timeShow\">\n                      <span class=\"leftLine span\"></span>\n                      <p class=\"time\">\n                          <input [(ngModel)]=\"dayDiff\" #ctrl=\"ngModel\" required style=\"display:none\">\n                        <!-- <input class=\"num\" [(ngModel)]=\"dayDiff\" name=\"dayDiff\"/>天 -->\n                        <!-- <span *ngFor=\"let num of index\" [(ngModel)]=\"index\">\n                          <span class=\"num\">{{num.value}}</span>\n                          <span>{{num.name}}</span>\n                        </span> -->\n                        <span>{{dayDiff}}</span>天\n                        <span class=\"num\">{{hours}}</span>小时\n                        <span class=\"num\">{{minutes}}</span>分钟\n                        <span class=\"num\">{{seconds}}</span>秒\n                      </p>\n                      <span class=\"rightLine span\"></span>\n                      <div class=\"bottom col-md-12\">\n                        <p>开始于&nbsp;2018-3-20 15:20:00</p>\n                      </div>\n                    </div>\n                    \n                  </div>\n                </div>\n              </div>\n              <div class='footer clearfix'>\n                <div class=\"left\">Contact me</div>\n                <div class=\"right\">\n                  <ul>\n                    <li>\n                      <span>Github</span>\n                      <a href=\"https://github.com/Hi-Wang\" target=\"view_window\">\n                        <svg class=\"icon\" aria-hidden=\"true\">\n                          <use xlink:href=\"#wang-github\"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li>\n                      <span #WeChat>WeChat</span>\n                      <a (click)=\"QQWeChatClick(WeChat);\">\n                        <svg class=\"icon\" aria-hidden=\"true\">\n                          <use xlink:href=\"#wang-weixin\"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li>\n                      <span #QQ>QQ</span>\n                      <a (click)=\"QQWeChatClick(QQ);\">\n                        <svg class=\"icon\" aria-hidden=\"true\">\n                          <use xlink:href=\"#wang-qq1\"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li>\n                      <span>微博</span>\n                      <a href=\"https://weibo.com/u/3820543963?refer_flag=1001030101_&is_hot=1\" target=\"view_window\">\n                        <svg class=\"icon\" aria-hidden=\"true\">\n                          <use xlink:href=\"#wang-weibo\"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li>\n                      <span #yun>网易云</span>\n                      <a (click)=\"QQWeChatClick(yun);\">\n                        <svg class=\"icon\" aria-hidden=\"true\">\n                          <use xlink:href=\"#wang-551488821353490553221\"></use>\n                        </svg>\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n        </div>\n        <!-- Add Pagination -->\n    </div>\n</section>\n\n<!-- QQWeChat -->\n<div class=\"full\"  [@display]=\"fullDisplay\">\n  <span #hide style=\"display:none;\">取消</span>\n  <div class=\"fullImgDiv\">\n      <div class=\"iconDiv\" (click)=\"QQWeChatClick(hide);\">\n          <svg class=\"icon\" aria-hidden=\"true\">\n            <use xlink:href=\"#wang-quxiao\"></use>\n          </svg>\n        </div>\n    <img [src]=\"fullSrc\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../views/app/components/home-index/home-index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.clearfix {\n  *zoom: 1; }\n\n.clearfix:after {\n  content: '';\n  display: table;\n  clear: both; }\n\n.swiper-container {\n  width: 100%;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  overflow: hidden;\n  /* Center slide text vertically */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.swiper-container-W {\n  width: 100%;\n  height: 100%; }\n\n.swiper-slide-W {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.swiper-slide-2 video {\n  position: absolute;\n  width: auto;\n  height: auto;\n  max-width: 100%; }\n\n.swiper-slide-2 .contentSvg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1000;\n  background: rgba(236, 236, 235, 0.85); }\n  .swiper-slide-2 .contentSvg .svg {\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    -webkit-transform: translate3d(0, 50%, 0);\n    transform: translate3d(0, 50%, 0); }\n  .swiper-slide-2 .contentSvg .contentText {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    padding-top: 15%;\n    text-align: center; }\n  .swiper-slide-2 .contentSvg .contentText .img {\n    margin: 0 auto;\n    width: 120px;\n    height: 120px;\n    border-radius: 100px;\n    border: 10px solid #fff;\n    box-shadow: 0 0 2px #333; }\n  .swiper-slide-2 .contentSvg .contentText .box_1 {\n    margin: 0;\n    padding: 0;\n    height: 60%; }\n    .swiper-slide-2 .contentSvg .contentText .box_1 .img {\n      background: url(\"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzVmMGQzZTAtZDNjYi00MjQ1LTgyODUtMDVlN2JjMzk5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0M0FBNENDQ0U3ODExRTU5ODFEQjY2MTYxODM5M0Q2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM5OTA2ODIyQ0U3ODExRTU5ODFEQjY2MTYxODM5M0Q2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1ZjBkM2UwLWQzY2ItNDI0NS04Mjg1LTA1ZTdiYzM5OTIzZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjNWYwZDNlMC1kM2NiLTQyNDUtODI4NS0wNWU3YmMzOTkyM2UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwv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\");\n      background-size: cover;\n      margin-bottom: 20px; }\n  .swiper-slide-2 .contentSvg .contentText .box_1:hover .img {\n    background: url(\"data:image/gif;base64,R0lGODlh8ADwAPePANHR0dbW1tLS0nBwcMLCwqOjo+Dg4IWFhczMzPLy8m9vb8nJyfHx8fb29oqKinp6emdnZ/7+/v39/fv7+9ra2mtra+Pj49vb2+zs7Onp6WhoaK6uroaGhu/v7/r6+ubm5ra2tpOTk/z8/O7u7pWVld/f34uLi25ubtnZ2Wpqavf39/X19d3d3c3Nzaenp7Gxsbi4uMrKynh4eLm5uevr69zc3MHBwejo6G1tbaqqqru7u9fX13l5eb6+vqCgoJubm4+Pj3Z2dnd3d4mJiWxsbMfHx3Nzc/T09NTU1MjIyLOzs5iYmHV1dfj4+JKSkuTk5HFxcdDQ0Pn5+YCAgM/Pz+Li4qGhoYODg6SkpHt7e6KionJycqampsXFxa+vr4GBgZGRkZqamufn57W1tWlpacPDw9PT04eHh+Xl5X19fXR0dMvLy6WlpampqcTExI2Njb+/v5eXl+rq6sbGxrS0tH5+foiIiPDw8PPz83x8fM7OztjY2KysrKioqJmZmYyMjISEhN7e3r29vY6OjrCwsMDAwJ6enqurq39/f4KCgtXV1ZaWlu3t7WZmZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNWYwZDNlMC1kM2NiLTQyNDUtODI4NS0wNWU3YmMzOTkyM2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEYwNjEzMDZDRTc5MTFFNTk4MURCNjYxNjE4MzkzRDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEYwNjEzMDVDRTc5MTFFNTk4MURCNjYxNjE4MzkzRDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M2RhOGJiYTgtNjc5Yy00YTVhLTgyZDUtZDVjODBhNzNjNWZhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM1ZjBkM2UwLWQzY2ItNDI0NS04Mjg1LTA1ZTdiYzM5OTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUUAI8ALAAAAADwAPAAAAj/AB0JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqFOrXs26tevXsGPLnk27tu3buHPr3s27N9sLVnhoaES8uPHjyJMrX868ufPn0ItrkEECQYS8CZZE3869u/fvzTmg/7lL4wH48+jTqy9+4kLdBmnWy59Pn7mRDnR9GD/xwkyA/wAGKOCABBZo4IEIJqjgggH2YF5xTsz1AQTFPYABXCqcYVwgchEi3RNyjYBDcYfIBUhxhtDFRnGJyAVFcUnQtUZxA8hlnAB0CWCcjcXhOJeOxfFInI9yAUmckI0QGZeRjSCpJFxMOhlSBDXA4IMfPoBwwXVJRRnXjR9JUMaDx/FAgARIeQkXmB3dwEFzB4hxlJpvsbnRHgM8d8IORtHplp0ZoUDEcUH84MIPQhyXAp9E+dkWoBdloIBxD7TApSMRUJGFcQp80OiOX/aokQhXGAdGAwepEIJxX0wwlKNsQf9aEQjGAeEqQhM4YRwdEPVwwK/ABivssMQSa4VDsK4l60R3VFAcD6gq1EAexVWAn0Mb1HecA8iCuqaoGLlQHAQoNEQBhcRx8VC22hbHbUPJqrVsRCuMSNwSD4VR7RHYtutut0GGOiRGPYxrwUMTFqeDQyUQ4PDDEEcs8cQTRwHwkQInidEQxZkQERDFcRBUvGnN+xAD6DYCR0RJjDsCUCSjZbJDMYzLQEQNkAEjzN7WCW5FXIQ8EcfEacFzwN8ObJEDxbUxUQ5C/xTzWTM3lCdxbkxURHE4NNSBAWCHLfbYZJdd9g0XN5nxkxE1YRwFE7Fg3AoMsevvuwxNbVbVC93/YFwGE2FgnKcL2d0u3gvpXRbfClkw90QNGFdC3f4Sh7hCipPFeEIXGBdtRBMY517hlTdyeUKZj7U5QgYYx69EkRfHgtQ9//nzRGIYR8NEIxgHok+pi7X6QR0YV8VEaBj3MvC1P3q7RBIMR1wLE5lRHBloMo+0z0pXtClxSkykQ3FpHI1x0hpbREJx+Er0Q3EkmK82+mxHRCtxUGQPURDFwRBRBgUIoAAHSMACGlCAM0iblCxSA9FFpArGmR1EOlef0yEkeGEZ3kEkYITi5CAiXijOFkQQEQrSx4IHwSBYNHgQcRFnAE14yASYUBwsSMSE80GhQVT4FRYKxAMlaEEZ/1xInIU5xAbGwQIBFoCEazEEgAeMohQRqMC1SQQFJHBWcozggYZIQAbLmQIMPncTHnpleCPQVXO80JAZOGcLMciJGbuyOhao4TkasJhCdpAC6PBBfzSZI1c2V4JBHecED0jkA6TXiArEESFUsFcjNKDIBzAhZcVhQxmbF6vnIUQFPDDOAMYgh4LcjzgpsMGlBBIBAmiROGMoiAcAYILjLMAmgtwK46AWMicSJAJxOM4VikADFdCgCwc4DgkAOZAIwCBlQpBCTXKpFb7h4ZV1IGNBJgCG6ABBmgk5ZSMS6JBVgUeHBaFmVviGxOLATSEi0MJzfHCrhETADsX5wkPM+f8ddBJEnVjhm76IcwaH6AGMypHBGhyCAOMkoJzn8edAAHoVvk2hOOFziAe68IZXpsAEBOiiQ1ZgnHI1hJ/ekahAKGoVvvGPOHOQiAgyYIAM1BMiJygO9RpCU7P5VGxogxcnleVJg0yKOLdMyVEbkVSZsLQqfFtqU08i1UAOVV5FLUhVlVqcqcLkqVSJaldVslWnXrVkWSVIWak61pmAdSpiRSpZ28oQJFDsrhHTY97OKrO0DmStJgFsQlDaHZU64q1SiWsj+oCAxjr2sZCNrGQnG1lDMhWi56wi/Riy1NI5x6uDjahmuZc+hbzIs895JEPaUKzWCutYQt2e7bqXkFr/otY5vzOrbJ1HW4R8YAgDCK5wh0vc4hr3uMgNrhB6ME2+Us2vakFsVHwYFulChbpgse5TsPsV7TqFu17xblPA2xXxMoW8XDHvUtC7FfUqhb1acW9S4JsV+SKFvlix71Gu1ohC0MUNxVGAXN5QHEAw0y1/6Jhc4GAcK5AQLkowDjkx1MHiIEIQDMqwhjfM4Q4LqAiD2M9D5QIARt72xChuhA3qQgBMpvjF7fqgXZCAUBjbWD4KIEBeJlCEONDwxkDmDgTU8AcdvM43SE6ykpfM5CY7+clQjrKUp0zlKlv5yljOspa3zOUue/nLYA6zmMdM5jKb+cxoTrOa18zmNrv5OM1wjrOc50znOtv5znjOs573zOc++/nPgA60oAdN6EIb+tCITrSiF83oRjv60ZCOtKQnTelKYzkgACH5BAUUAI8ALDoASwB+AFkAAAj/AB8JFHjEQgAACBMqXMiwocOHECNKnEhxYYASHQZqfDTBQMWPIEOKHBmRgoqNUnaQXMmypcuEZo4MFKHypc2bOB8q8iCwikIzNxIIHUq0qNGjSJMqXcq0qdOiNGoiDPRIhcIdUjZq3cq1q9evYMOKHStQwgWFK8QoPEm2rdu3cOMK9GAm4QcKCavI3cu3r9wnCVEgSZjRr+HDiDd2SDg4IYPEkCPvZeDwseTLmMNSbmg5s+fPAzcz7Ay69GXRC0mbXo0YtULVrGPzde1Ytu2+tBHCvs17bG4Au3sL9/o7+PDjG4sjX95VOfPnGp1D10qDgvXr2LNr377dgljp0zV+/8i5sMb3yuG1jief0Lxm9OnFs29/nnN8jSsw6N/Pv7////8Zlxx89x0HXoG9HYjgbQouKFuDDrIGIXQeNGDhhRhmqOGGGzZR32gLrjefe2BN+JyI7JH4lYnMoUieisQReJ+LOcHYnIwRPohjjhLuyKNpLP6IWZBCSkZkkZAdyVwTFjTp5JNQRimlk3J8mBqPR7xo5WtYavmefTlmWeOWteXI5JRopkklmboh2SOYbpamZJx+zUnnbD7eGZmdesbFZ3olrGQjV3+GFyhJg25V6HSHjpSoVotC16hIjw4IZ5xNcKhphh5+CWKfmUUKKpvAjTpknqbWiWqqeF7qZgIAxrHan4DRrZrjpCFVWqurSOIKkq6h2Rqhrx8BK5CozKHB3bLZeefplawmKWy0byFLLaTTXkuWtdoGy2u3fmYLbonijhvjt+a2xS2463bbrrbvXotaYwBgkO5ejDDGQkIURHBvXDW0h4FCFvj7b1s3KCSHBPQCgAINT0Us8cQUV1zUCPvCNMEjv83n8ccS2SvQwCCXbLJDaGyUwEEntwwyEiJvFMEIBrDs8s0uKVIDDRsPFBAAIfkEBRQAjwAsOgBLAH4AWQAACP8AHwkU6KigwYMIEypcyLChw4cQIz4cSFGixYsYM2qUSPHRxo8gQ4pUOHCkyZMoIxJMybJlSo8JO8qcSbOmzZs4c+rcudIhz59AgwodWrIh0aNIkxI1qrSp06cdmUKdSnWo1KpYs968qrWrV5gLv4rtynWsWadlz6o9mnatW6Bt38rNGXeuXZp17+otGnavX7wM/wqOGnjwTJcHdeb1i9ig4sKGCTd+3DdyxcaOKJO0fHkyXcic9S4ObXY0abGmT3tNrVor67mYM3+uHDq25pinbc/eTFo3ztdyfW8F3dot8OJTjyN/qnx50+bOk0KPzpZ47pa3ES53mT0xcu67cRetB//bem/s4bVTPzt9vdD27uGaj48VPv2d9u+n904/ZHfH9/m3H4D9gfRfQfoJWB5t7ik4HIP6VZVfhDZNSCFgEF7I3HwaKmUhbAYOiGCAIS7IW3wOVsjhdiU+eGKDLaqYYYcerkjjUjbe+F6OOso3Y49W8QgkfkIOKaJsRiL1oY5L3tgkjU92GKWGU17oU5LVVUlibFx2aRFYXobpJV9ilomYZGamedJharbpYEAAIfkEBRQAjwAsgABgACUABQAACDAAexwYSLCgwYMIEVrZ0Kihw4cQI0qU6IDhxIsYKVrMyBGjgxIEQoocSbKkSZNRAgIAIfkEBRQAjwAsgABqACUABQAACCkAOxgYSLCgwYMIEd7Y0Kihw4cQI0qU6IDhxIsYKVrMyBFjxY4gJzoICAAh+QQFFACPACyEAHUAIQAFAAAIKgAzFBhIsKDBgwgJzrjQqKHDhxAjSnTogOHEixgpWszIMaIDgQlDilQYEAAh+QQFFACPACyNAIAAGAAFAAAIJABDNBpIsKDBg40cCETI8KDChhAJPowI0UEGAxgzatzI0cCNgAAh+QQFFACPACyNAIoAGAAFAAAIKwCREBhIsKDBgwSihGjEsKHDhxAbOVgYsSLEiRYzNnTQ5oDHjyBDijxgJSAAIfkEBQUAjwAsOgACAH4AWQAACP8AHQkUeMEKDw2NEipcyLChw4cQI0qcSLGiQg0ySCCIMLBjgiUWQ4ocSbKkRA5oOjqi8cCky5cwYyo8cWFggzQyc+rcGdFIB4E+Fp54YSaA0aNIkypdyrSp06dQo0pF2qOlQieOPkBQ+ACDyq9gw4odS7as2bNoBao4szAQoYtP0sqdS7eu3YEjcCg8BEihobuAAwu+y0ZhIigKkwxezLjx1zUKBywU4LiyZcACHlK+zLmz2cwON3seTXog6IaiS6vmfJph6tWwG7eeHLu2bM22cwuerfC17t9peSf0Dbw4WeGNiBtf/hW5cubQHTmPTl3l9OrYr2Onrn079O7el4P/D198PPnf5s/nTq++Nvv2sN/DVy1/Pun69j3jz88aN3/b+/1XWYAC3hZagbERiOBgCi4YWIMO3gVhhHVNSOFcFl4YnH8a9ndghx6iBmKIro14WYYmjoViimGtyGJzHL7IYIwyPkhjjRLeiGOFOu6IYY8+bvhhkHa5uKOROCJZo5IyMvmikyxCmaKUJlI5opUgYtmhlhpyeaGXFIIZoZgOkrmgmQiiWaCaArL5n5v8wZlfa5IlVAiRd7mhkAJvKASIBHjW9YdCJsCxkBUiBCqXEgvNoIIRCyEiyFSUVmrppZgmVcQgQiXgCAAI8STqqDnZMBABW5Gq6qoh5aASEjKwGirrrAwpQABYExQRBxO09soTBGr8ocMRHQUEACH5BAUFAI8ALDoAAgB+AHAAAAj/AB8JFOiooMGDCBMqXMiwocOHECM+HEhRosWLGDNqlEjx0caPIEOKVDhwpMmTKCMSTMmyZUqPCTvKnEmzps2bOHPq3LnSIc+fQIMKHVqyIdGjSJMSNaq0qdOnHZlCnUp1qNSqWLPevKq1q1eYC7+K7cp1rFmnZc+qPZp2rVugbd/KzRl3rl2ade/qLRp2r1+8DP8Kjhp4sOG8ht82vGCFh4ZGkCNLnky5suXLmDNr3sw5sgYZJBBEUJhgSefTqFOrXp2ZAxqENB6wnk27tu3IJy4YbJDm0e3fwINbfmSkQ0EfAiGfeGEmgPPn0KNLn069uvXr2LNrh95DdiOBThx9/4CQ/AGGxHtVnPkuMBChgRqeoPc7AsfAQ4AGGpr/l83ARFAMlAR/fq0x0AAEJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUey94gAPTKZnJICOMKjk75BWZCOjlAZmUBRuuTllxA5OdmSYJZpJkJiTtblmWx+yWRla6YUQQ0w+OCHDyBcMFqbLQlgWZwmSVDGAzPxQIAEfKbkJ5xN/tkoo1M6GimkOy5KGZU6Wqrmo5dyuumknYL6aaWSkkpppqWiemqOmg4QWSE9unYRmQJvRAaIBDz+EZkJcEhmhQg6KiHZDCoYIRkigmwHnQ0UUaHsc1RQ1AN2P2Q1xXVFDCLZCQk8AsBjtVHEmribZZUaswIRAEG4A43brnDwSpZDR0jIQBu5quEbb3AKEDDTBEXEwcRq+qJW8L6zQaDGHzocQVFAACH5BAUFAI8ALDoAGQB+AHgAAAj/AB8JFOiooMGDCBMqXMiwocOHECM+HEhRosWLGDNqlEjx0caPIEOKVDhwpMmTKCMSTMmyZUqPCTvKnEmzps2bOHPq3LnSIc+fQIMKHVqyIdGjSJMSNaq0qdOnHZlCnUp1qNSqWLPevKq1q1eYC7+K7cp1rFmnZc+qPZp2rVugbd/KzRl3rl2ade/qLRp2r1+8DP8Kjhp4sOG8ht8iTrx2MeOzjh+PjSz5K+XKZAtjtnt5M9bOnqk2vGCFh4ZGqFOrXs26tevXsGPLnk07tQYZJBBEUJhgSe3fwIMLHx6bAxqENB4QX868ufPUJy4YbJDm0fPr2LO7fmSkQ0EfAlGf/3hhJoD58+jTq1/Pvr379/Djy0ffQ3kjgU4cfYAQ/gGG0GupcMZ9AgVCyEAaPAGgWyPgMNAhgAxkyIJvsTFQIlAMlASFbq0x0AAchijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSSTDbp5JNQRinllFQmReAjAjSZZXhXCuAIk1ta12VBSjoSZmoCebmRBRStkFEDFJXw0AZZORDRlqth+dEFFDWQ0QQUSecQnVjZCRGeq6mpkQEUHfEmRSy4lFKWrSmakRgU0ZDRCBQ9ISlKArhmKUYdUFRFRmhQNMKnJ4VaqZaiwrr6Kpix0jrrkq6yFqaSuSYqq66/+morsMMKi2utx97KK7LLKptkr6rt+iyz0zqLJLSpSXsttdtaeyS2qGn7LbfjpjZAaoU06UZqCryRGiASMPlHaibAoZoVIiiphGozqGCEaogI0p6DAi3ywsEIJ6zwwgw3vHAKA20g3xlETfFeEYOodkICjwBwGm12/UZUcDYMRAAEIM+lnXM5dISEDLOFvDJxChAw0wRFxMHEzDz3DBsEavyhwxEUBQQAIfkEBWQAjwAsOgA4AH4AbAAACP8AHwkU6KigwYMIEypcyLChw4cQIz4cSFGixYsYM2qUSPHRxo8gQ4pUOHCkyZMoIxJMybJlSo8JO8qcSbOmzZs4c+rcudIhz59AgwodWrIh0aNIkxI1qrSp06cdmUKdSnWo1KpYs968qrWrV5gLv4rtynWsWadlz6o9mnatW6Bt38rNGXeuXZp17+otuvCCFR4aGgkeTLiw4cOIEytezLix48EaZJBAEEFhgiWPM2vezLnzYg5oENJ44Lm06dOoB5+4YLBBmkepY8uejfiRkQ4FfQgUfOKFmQDAgwsfTry48ePIkytfzlx4D9KNBDpx9AHC7gcY9mrvqOJMdIGBCA3/1PBku/mBI3AMPARooKHz8B+xGZgIysAk8c+vGTggv///AAYo4IAEFmjggQgmqOCCDDbo4IMQRijhhBRWaOGFGGao4YYcdujhhyCGKOKIJJZo4okopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPbo449ABikkgN89IkCNR+5WpACO0JgkbEsWJKMjTw4mEJMOKTBQHwh06eWXYIYp5phhEjHQAhGFQJQDESVZmJEPaTkXmhCpORSbELlZGJYN2TdXDBG1ccCghBZq6KEHWNEmlHs+ZIJdT7iUkQCI8cnQB0MMoOmmnHbq6aeghqqpED1IOmmlSKLqpKozUnrYkzK6emoYrDHKumeqr+I6q663rpqrr7sC28gAgxVSoxuDKfDGYIBIQOMfg5kAB2FWiCCjEoTNoIIRhCEiSHPghivuuOQOV8QghJ2QwCMABEbbu/DGZsNABEAQ7734apZDR0jIkO+/ABemAAEzTVBEHEwErDBtEKjxhw5HUBQQADs=\");\n    background-size: cover;\n    margin-bottom: 20px; }\n  .swiper-slide-2 .contentSvg .contentText .box_2 {\n    margin: 0;\n    padding: 0;\n    height: 60%; }\n    .swiper-slide-2 .contentSvg .contentText .box_2 .img {\n      background: url(\"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NTU5MWM1NDUtMjQ4NS00N2QxLWI3NjAtNmE3N2MyN2VkMmU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyOTZCQUYxQ0U3ODExRTU5ODFEQjY2MTYxODM5M0Q2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyOTZCQUYwQ0U3ODExRTU5ODFEQjY2MTYxODM5M0Q2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4ZDRjMGQzLThjYTgtNDY0OS04YTExLTBmNjNjMTE4Mjc3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NTkxYzU0NS0yNDg1LTQ3ZDEtYjc2MC02YTc3YzI3ZWQyZTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwv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\");\n      background-size: cover;\n      margin-bottom: 20px; }\n  .swiper-slide-2 .contentSvg .contentText .box_2:hover .img {\n    background: url(" + escape(__webpack_require__("../../../../../views/assets/images/homeIndex/work-27dedf7593.gif")) + ");\n    background-size: cover;\n    margin-bottom: 20px; }\n  .swiper-slide-2 .contentSvg .contentText .box_3 {\n    margin: 0;\n    padding: 0;\n    height: 60%; }\n    .swiper-slide-2 .contentSvg .contentText .box_3 .img {\n      background: url(\"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yjc4NGY0MGEtNmQxZi00YjM0LWE5YzctNzc5ODgzMzlhNTgxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM5OTA2ODFCQ0U3ODExRTU5ODFEQjY2MTYxODM5M0Q2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM5OTA2ODFBQ0U3ODExRTU5ODFEQjY2MTYxODM5M0Q2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBjNWJmZTQwLWUxMzAtNDRjYi1hYzcxLTA0NjExMzcyNDdiMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiNzg0ZjQwYS02ZDFmLTRiMzQtYTljNy03Nzk4ODMzOWE1ODEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwv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\");\n      background-size: cover;\n      margin-bottom: 20px; }\n  .swiper-slide-2 .contentSvg .contentText .box_3:hover .img {\n    background: url(" + escape(__webpack_require__("../../../../../views/assets/images/homeIndex/dream-ac86f7bf01.gif")) + ");\n    background-size: cover;\n    margin-bottom: 20px; }\n  .swiper-slide-2 .contentSvg .contentText p {\n    line-height: 25px;\n    text-align: left;\n    display: block;\n    font-size: 16px;\n    font-family: 'Fira Mono', monospace;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    margin: 6px 20px;\n    padding: 0 50px; }\n\n.swiper-slide-3 {\n  background: #DFF2F8;\n  color: #333;\n  overflow: hidden; }\n  .swiper-slide-3 .imgDiv {\n    position: fixed;\n    right: 0;\n    height: 100%;\n    width: 660px;\n    background: url(" + escape(__webpack_require__("../../../../../views/assets/images/homeIndex/banner_ecards_valentines.png")) + ") no-repeat right bottom; }\n    .swiper-slide-3 .imgDiv .startImg {\n      position: absolute;\n      right: 23%;\n      top: 16%;\n      width: 350px;\n      height: 450px; }\n      .swiper-slide-3 .imgDiv .startImg img {\n        position: absolute;\n        top: 0;\n        right: 4%;\n        height: auto;\n        width: auto;\n        display: block;\n        max-width: 100%;\n        max-height: 100%; }\n      .swiper-slide-3 .imgDiv .startImg .img1 {\n        opacity: 1;\n        transition: all 0.8s; }\n      .swiper-slide-3 .imgDiv .startImg .img2 {\n        opacity: 0;\n        transition: all 0.8s; }\n    .swiper-slide-3 .imgDiv .startImg:hover .img1 {\n      opacity: 0; }\n    .swiper-slide-3 .imgDiv .startImg:hover .img2 {\n      opacity: 1; }\n\n.swiper-slide-4 {\n  position: relative;\n  background: #4A6EBC; }\n  .swiper-slide-4 .echarts {\n    position: absolute;\n    bottom: 0;\n    height: 600px;\n    width: 80%; }\n\n.swiper-slide-6 {\n  position: relative;\n  background: url(" + escape(__webpack_require__("../../../../../views/assets/images/homeIndex/background.jpg")) + ") center center no-repeat;\n  background-size: cover; }\n  .swiper-slide-6 .background {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.8) url(" + escape(__webpack_require__("../../../../../views/assets/images/homeIndex/background-point.fw.png")) + ") center center no-repeat;\n    z-index: 100; }\n    .swiper-slide-6 .background .content {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      margin-bottom: 40px; }\n      .swiper-slide-6 .background .content .timeBox {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 900px;\n        height: 400px;\n        margin-top: -220px;\n        margin-left: -450px;\n        padding-top: 50px; }\n        .swiper-slide-6 .background .content .timeBox .headerText {\n          margin-top: -50px;\n          height: 50px;\n          line-height: 50px;\n          font-size: 2rem; }\n        .swiper-slide-6 .background .content .timeBox .timeShow {\n          height: 100%; }\n          .swiper-slide-6 .background .content .timeBox .timeShow .time {\n            display: inline-block;\n            margin: 0;\n            padding-top: 150px;\n            text-align: center;\n            color: #fff; }\n            .swiper-slide-6 .background .content .timeBox .timeShow .time span {\n              color: #fff;\n              font-size: 1.8rem;\n              font-weight: 600;\n              margin-left: 10px;\n              margin-right: 10px; }\n          .swiper-slide-6 .background .content .timeBox .timeShow .span {\n            display: inline-block;\n            width: 220px;\n            height: 160px;\n            border-bottom: 2px solid #ccc; }\n          .swiper-slide-6 .background .content .timeBox .timeShow .leftLine {\n            float: left; }\n          .swiper-slide-6 .background .content .timeBox .timeShow .rightLine {\n            float: right; }\n          .swiper-slide-6 .background .content .timeBox .timeShow .bottom {\n            font-size: 12px;\n            font-weight: 100;\n            height: 40px;\n            line-height: 40px;\n            margin-top: 10px;\n            color: #ccc; }\n            .swiper-slide-6 .background .content .timeBox .timeShow .bottom p {\n              height: auto;\n              padding: 0 16px;\n              display: inline-block;\n              background: rgba(0, 0, 0, 0.2); }\n  .swiper-slide-6 .footer {\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    font-size: 12px;\n    position: absolute;\n    bottom: 0;\n    z-index: 101;\n    background: #fff;\n    border-top: 1px solid #ddd;\n    padding: 10px 10px 20px 10px;\n    margin: 0 10px 0 10px; }\n    .swiper-slide-6 .footer .left {\n      float: left;\n      padding-left: 10%;\n      font-size: 16px;\n      font-weight: 600; }\n    .swiper-slide-6 .footer .right {\n      float: right;\n      padding-right: 10%; }\n      .swiper-slide-6 .footer .right ul li {\n        height: 40px;\n        width: 40px;\n        float: left;\n        list-style: none;\n        padding: 0 10px;\n        margin: 0 10px;\n        cursor: pointer;\n        position: relative;\n        top: 10px; }\n        .swiper-slide-6 .footer .right ul li span {\n          position: absolute;\n          top: -110%;\n          min-width: 40px;\n          display: none;\n          padding: 0 6px;\n          border-radius: 4px;\n          background: #333;\n          color: #fff; }\n        .swiper-slide-6 .footer .right ul li a {\n          margin: 0 15px; }\n        .swiper-slide-6 .footer .right ul li .icon {\n          position: absolute;\n          font-size: 20px; }\n      .swiper-slide-6 .footer .right ul li:hover {\n        -webkit-animation: myfirst 2s ease;\n                animation: myfirst 2s ease; }\n      .swiper-slide-6 .footer .right ul li:hover a > .icon {\n        color: red; }\n      .swiper-slide-6 .footer .right ul li:hover span {\n        display: block; }\n\n.full {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6); }\n  .full .fullImgDiv {\n    width: 320px;\n    height: 420px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -160px;\n    margin-top: -210px;\n    background: #fff;\n    padding: 20px;\n    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4), 0px 2px 40px rgba(0, 0, 0, 0.1) inset;\n    /*内阴影*/ }\n    .full .fullImgDiv .iconDiv {\n      position: absolute;\n      top: -8px;\n      right: -40px;\n      z-index: 10001;\n      font-size: 30px; }\n      .full .fullImgDiv .iconDiv .icon {\n        cursor: pointer;\n        transition: all 0.6s; }\n    .full .fullImgDiv .iconDiv:hover .icon {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n    .full .fullImgDiv img {\n      width: auto;\n      height: auto;\n      max-width: 100%; }\n  .full .fullImgDiv::before, .full .fullImgDiv::after {\n    content: \"\";\n    position: absolute;\n    z-index: -1; }\n  .full .fullImgDiv::before, .full .fullImgDiv::after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    bottom: 15px;\n    left: 10px;\n    width: 50%;\n    height: 20%; }\n  .full .fullImgDiv::before, .full .fullImgDiv::after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    bottom: 15px;\n    left: 10px;\n    width: 50%;\n    height: 20%;\n    box-shadow: 0 20px 12px rgba(0, 0, 0, 0.6);\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg); }\n  .full .fullImgDiv::after {\n    right: 10px;\n    left: auto;\n    -webkit-transform: rotate(3deg);\n            transform: rotate(3deg); }\n\nfigure {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  text-align: center;\n  cursor: pointer; }\n\nfigure img {\n  margin: 0 auto;\n  position: relative;\n  display: block;\n  max-width: 100%;\n  width: auto;\n  height: auto; }\n\nfigure figcaption::before, figure figcaption::after {\n  pointer-events: none; }\n\nfigure figcaption, figure figcaption > p {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  -webkit-transform: translate3d(50px, 50px, 0);\n  transform: translate3d(50px, 50px, 0);\n  transition: opacity 0.35s, -webkit-transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s;\n  transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s; }\n\nfigure figcaption > p {\n  z-index: 1000;\n  white-space: nowrap;\n  font-size: 2rem;\n  opacity: 1; }\n\n@-webkit-keyframes myfirst {\n  0% {\n    transition: all 0.8s;\n    -webkit-transform: translate(0px, 10px);\n            transform: translate(0px, 10px); }\n  25% {\n    transition: all 0.6s;\n    -webkit-transform: translate(0px, -10px);\n            transform: translate(0px, -10px); }\n  50% {\n    transition: all 0.4s;\n    -webkit-transform: translate(0px, -10px);\n            transform: translate(0px, -10px); }\n  75% {\n    transition: all 0.2s;\n    -webkit-transform: translate(0px, 10px);\n            transform: translate(0px, 10px); }\n  100% {\n    transition: all 0.1s;\n    -webkit-transform: translate(0px, -10px);\n            transform: translate(0px, -10px); } }\n\n@keyframes myfirst {\n  0% {\n    transition: all 0.8s;\n    -webkit-transform: translate(0px, 10px);\n            transform: translate(0px, 10px); }\n  25% {\n    transition: all 0.6s;\n    -webkit-transform: translate(0px, -10px);\n            transform: translate(0px, -10px); }\n  50% {\n    transition: all 0.4s;\n    -webkit-transform: translate(0px, -10px);\n            transform: translate(0px, -10px); }\n  75% {\n    transition: all 0.2s;\n    -webkit-transform: translate(0px, 10px);\n            transform: translate(0px, 10px); }\n  100% {\n    transition: all 0.1s;\n    -webkit-transform: translate(0px, -10px);\n            transform: translate(0px, -10px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../views/app/components/home-index/home-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeIndexComponent = (function () {
    function HomeIndexComponent(cdr) {
        this.cdr = cdr;
        // 时间差数据结束
        this.index = [];
        this.res = [];
        this.geoCoordMap = {
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028],
            '六安': [116.5232, 31.7348],
            '芜湖': [118.4331, 31.3524],
            '淮北': [116.8280, 33.9914],
            '开封': [114.3072, 34.7972],
            '香港': [114.1604, 22.2780],
            '澳门': [113.5440, 22.2016]
        };
        // 灰机
        this.planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        // 散点
        this.value = [
            // {name:'六安',value:[116.5232,31.7348]},
            // {name:'芜湖',value:[118.4331,31.3524]},
            { name: '淮北', value: [116.8280, 33.9914] },
            { name: '徐州', value: [117.5208, 34.3268] },
            { name: '开封', value: [114.3072, 34.7972] },
            { name: '杭州', value: [119.5313, 29.8773] },
            { name: '上海', value: [121.4648, 31.2891] },
            { name: '广州', value: [113.5107, 23.2196] },
            { name: '深圳', value: [114.5435, 22.5439] },
            { name: '珠海', value: [113.7305, 22.1155] },
            { name: '香港', value: [114.1604, 22.2780] },
            { name: '澳门', value: [113.5440, 22.2016] }
        ];
        // 去过的
        this.data = [
            // {fromName: '合肥',toName: '六安',coords: [[117.29,32.0581] ,[116.5232,31.7348]]},
            // {fromName: '合肥',toName: '芜湖',coords: [[117.29,32.0581] ,[118.4331,31.3524]]},
            { fromName: '合肥', toName: '淮北', coords: [[117.29, 32.0581], [116.8280, 33.9914]] },
            { fromName: '合肥', toName: '徐州', coords: [[117.29, 32.0581], [117.5208, 34.3268]] },
            { fromName: '合肥', toName: '开封', coords: [[117.29, 32.0581], [114.3072, 34.7972]] },
            { fromName: '合肥', toName: '杭州', coords: [[117.29, 32.0581], [119.5313, 29.8773]] },
            { fromName: '合肥', toName: '上海', coords: [[117.29, 32.0581], [121.4648, 31.2891]] },
            { fromName: '合肥', toName: '广州', coords: [[117.29, 32.0581], [113.5107, 23.2196]] },
            { fromName: '合肥', toName: '深圳', coords: [[117.29, 32.0581], [114.5435, 22.5439]] },
            { fromName: '合肥', toName: '珠海', coords: [[117.29, 32.0581], [113.7305, 22.1155]] },
            { fromName: '合肥', toName: '香港', coords: [[117.29, 32.0581], [114.1604, 22.2780]] },
            { fromName: '合肥', toName: '澳门', coords: [[117.29, 32.0581], [113.5440, 22.2016]] }
        ];
        this.fullDisplay = "none";
        this.fullSrc = '';
        this.dayDiff = '0';
        this.hours = '0';
        this.minutes = '0';
        this.seconds = '0';
        // echarts
        // this.series = 
        this.echartOption = {
            backgroundColor: '#4A6EBC',
            title: {
                text: '我的足迹',
                // subtext: '地图',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontFamily: 'Courier New',
                    fontSize: 28,
                    verticalAlign: 'middle',
                    letterSpacing: 4
                },
                padding: [60, 0, 0, 0]
            },
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                show: true,
                zoom: 1.1,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                silent: false,
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#4084D6',
                        borderColor: '#C6EEF7'
                    },
                    emphasis: {
                        areaColor: '#69B9F0'
                    }
                }
            },
            series: [
                {
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: "#a6c84c",
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: this.data
                }, {
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: this.planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: "#69B9F0",
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        },
                        emphasis: {
                            color: "yellow"
                        }
                    },
                    data: this.data
                }, {
                    name: '足迹',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{b}',
                            offset: [-10, 0]
                        }
                    },
                    symbolSize: 12,
                    itemStyle: {
                        normal: {
                            color: "#F1F2ED",
                            shadowBlur: 10,
                            shadowColor: '#F1F2ED'
                        },
                        emphasis: {
                            color: "#FCE802",
                            shadowBlur: 10,
                            shadowColor: '#FCE802'
                        }
                    },
                    data: this.value
                }, {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 3,
                    symbol: 'circle',
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbolSize: 15
                    },
                    data: [{ name: '合肥', value: [117.29, 32.0581] }]
                }
            ]
        };
    }
    HomeIndexComponent.prototype.ngOnChanges = function () {
    };
    HomeIndexComponent.prototype.ngOnInit = function () {
        this.swiper();
        this.swiper_1();
        // this.timeDiff();
    };
    HomeIndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // 时间差
        this.timer = setInterval(function () {
            _this.oldTime = "2018/3/18 15:07:00";
            _this.dateBegin = new Date(_this.oldTime);
            _this.dateEnd = new Date();
            var dateDiff = _this.dateEnd.getTime() - _this.dateBegin.getTime(); //时间差毫秒数
            _this.dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //时间差天数
            var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数之后的毫秒数
            _this.hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
            var leave2 = leave1 % (3600 * 1000); //计算小时数之后的毫秒数
            _this.minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
            var leave3 = leave2 % (60 * 1000); //计算分数后的毫秒数
            _this.seconds = Math.round(leave3 / 1000);
            if (_this.hours < 10) {
                _this.hours = '0' + _this.hours;
            }
            if (_this.minutes < 10) {
                _this.minutes = '0' + _this.minutes;
            }
            if (_this.seconds < 10) {
                _this.seconds = '0' + _this.seconds;
            }
        }, 1000);
    };
    HomeIndexComponent.prototype.swiper = function () {
        var swiper = new Swiper('.swiper-container-H', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: true
            // pagination: {
            //   el: '.swiper-pagination-H',
            //   clickable: false,
            // }
        });
    };
    HomeIndexComponent.prototype.swiper_1 = function () {
        var swiper2 = new Swiper('.swiper-container-W', {
            spaceBetween: 0,
            touchRatio: 2,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination-W',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    };
    //  关于弹框
    // 取消添加按钮
    HomeIndexComponent.prototype.QQWeChatClick = function (item) {
        console.log(item.innerText);
        if (item.innerText === "QQ") {
            this.fullSrc = "../../../assets/images/homeIndex/QQ.jpg";
        }
        else if (item.innerText === 'WeChat') {
            this.fullSrc = "../../../assets/images/homeIndex/WeChat.jpg";
        }
        else if (item.innerText === "网易云") {
            this.fullSrc = "../../../assets/images/homeIndex/yun.jpg";
        }
        else if (item.innerText === '取消') {
            // this.fullSrc = ""
        }
        // console.log(this.fullDisplay)
        if (this.fullDisplay === 'none') {
            this.fullDisplay = 'block';
        }
        else if (this.fullDisplay === 'block') {
            this.fullDisplay = 'none';
        }
    };
    HomeIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-index',
            template: __webpack_require__("../../../../../views/app/components/home-index/home-index.component.html"),
            styles: [__webpack_require__("../../../../../views/app/components/home-index/home-index.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('display', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'block',
                        'opacity': '1'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('none', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'none',
                        'opacity': '0'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('block => none', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1200ms cubic-bezier(0.4, 0, 0.2, 1)')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('none => block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1200ms cubic-bezier(0.4, 0, 0.2, 1)'))
                ])
            ]
            // changeDetection:ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], HomeIndexComponent);
    return HomeIndexComponent;
}());



/***/ }),

/***/ "../../../../../views/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <header>     \n    <div class=\"col-md-2\">\n      <img src=\"../../../assets/images/logo.fw.png\">\n    </div>\n    <div class=\"col-md-5 nav\">\n      <ul>\n        <li *ngFor=\"let item of navList\" [routerLink]='item.url'>\n          <div class=\"set_4_button1 raised hoverable\">\n            <div class=\"anim\"></div>\n            <span>{{item.name}}</span>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-md-5 right\">\n      <!-- <ul>\n        <li>1111\n          <i></i>\n        </li>\n        <li>222</li>\n        <li>333</li>\n      </ul> -->\n    </div>\n    <a href=\"https://github.com/Hi-Wang/node-index\" class=\"github-corner\" aria-label=\"View Source Code on Github\">\n      <svg width=\"55\" height=\"55\" viewBox=\"0 0 250 250\" style=\"fill:#BA68C8; color:#fff; position: fixed; top: 0; border: 0; right: 0; transform: scale(1, 1);\" aria-hidden=\"true\">\n        <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\n        <path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\n        <path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path>\n      </svg>\n    </a>\n  </header>\n\n  <!--router-->\n  <router-outlet class=\"section\"></router-outlet>\n\n\n</div>\n\n<!--<!doctype html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta charset=\"utf-8\">-->\n  <!--<title>Hi</title>-->\n  <!--<base href=\"/\">-->\n\n  <!--&lt;!&ndash;<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">&ndash;&gt;-->\n\n  <!--&lt;!&ndash;<link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />&ndash;&gt;-->\n  <!--&lt;!&ndash;<meta name=\"keywords\" content=\"Velvety Sign In Form Responsive Widget,Login form widgets, Sign up Web forms , Login signup Responsive web form,Flat Pricing table,Flat Drop downs,Registration Forms,News letter Forms,Elements\" />&ndash;&gt;-->\n  <!--&lt;!&ndash;<link rel=\"stylesheet\" href=\"../../../assets/css/flexslider.css\" type=\"text/css\" media=\"screen\" /> &lt;!&ndash; Flexslider-CSS &ndash;&gt;&ndash;&gt;-->\n  <!--&lt;!&ndash;<link href=\"../../../assets/css/font-awesome.css\" rel=\"stylesheet\">&lt;!&ndash; Font-awesome-CSS &ndash;&gt;&ndash;&gt;-->\n  <!--&lt;!&ndash;<link href=\"../../../assets/css/style.css\" rel='stylesheet' type='text/css'/>&lt;!&ndash; Stylesheet-CSS &ndash;&gt;&ndash;&gt;-->\n  <!--&lt;!&ndash;<link href=\"//fonts.googleapis.com/css?family=Righteous\" rel=\"stylesheet\">&ndash;&gt;-->\n  <!--&lt;!&ndash;<link href=\"//fonts.googleapis.com/css?family=Josefin+Sans:100,300,400,600,700\" rel=\"stylesheet\">&ndash;&gt;-->\n\n  <!--&lt;!&ndash;<script type=\"application/x-javascript\"> addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>&ndash;&gt;-->\n  <!--<script src=\"https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js\"></script>-->\n  <!--&lt;!&ndash;<script src=\"https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js\"></script>&ndash;&gt;-->\n  <!--&lt;!&ndash;<script src=\"https://cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\"></script>&ndash;&gt;-->\n\n<!--</head>-->\n<!--<body>-->\n\n<!--<div class=\"all\">-->\n  <!--<nav class=\"clearfix\">-->\n    <!--<div class='logo'>-->\n      <!--<span class=\"imgSpan\">-->\n        <!--<img src=\"../../assets/images/logo.fw.png\">-->\n      <!--</span>-->\n      <!--<span class=\"textSpan\">Hi, 小汪</span>-->\n\n    <!--</div>-->\n    <!--<ul class=\"clearfix\">-->\n      <!--<li [routerLink]=\"['home']\" routerLinkActive='active'><a>首页</a></li>-->\n      <!--<li [routerLink]=\"['about']\"><a>关于我</a></li>-->\n      <!--<li [routerLink]=\"['contact']\"><a>作品展示</a></li>-->\n      <!--<li [routerLink]=\"['http']\"><a>HTTP</a></li>-->\n      <!--<li [routerLink]=\"['callme']\"><a>给我留言</a></li>-->\n      <!--<li [routerLink]=\"['contacts']\"><a>重定向</a></li>-->\n    <!--</ul>-->\n  <!--</nav>-->\n\n  <!--<div>-->\n    <!--&lt;!&ndash;<router-outlet></router-outlet>&ndash;&gt;-->\n  <!--</div>-->\n\n<!--</div>-->\n\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../views/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, nav, ul, nav, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nol, ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n  font-size: 62.5%; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.app {\n  background: #ccc;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\nsection {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #fff; }\n\n.section {\n  padding-top: 55px; }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden; }\n\n::-webkit-scrollbar {\n  width: 0.1rem;\n  height: 0.1rem; }\n\n::-webkit-scrollbar-track {\n  background: #eee;\n  border: thin solid lightgray;\n  box-shadow: 2rem 0 2rem #f6f6f6 inset;\n  -moz-box-shadow: 2rem 0 2rem #f6f6f6 inset;\n  -webkit-box-shadow: 2rem 0 2rem #f6f6f6 inset;\n  -o-box-shadow: 2rem 0 2rem #f6f6f6 inset; }\n\n::-webkit-scrollbar-thumb {\n  background: #1E8BC3; }\n\nheader {\n  width: 100%;\n  height: 55px;\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 1;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  padding: 4px 0; }\n\n.github-corner:hover {\n  width: 70px;\n  height: 70px; }\n\nheader .col-md-2 {\n  text-align: center;\n  line-height: 55px; }\n\nheader .nav {\n  position: relative;\n  top: 0; }\n  header .nav ul li {\n    float: left;\n    font-size: 14px;\n    font-family: helvetica neue \",arial,sans-serif\";\n    margin: 0 10px;\n    text-align: center;\n    cursor: pointer; }\n    header .nav ul li a {\n      text-decoration: none;\n      color: #333; }\n\nheader .right {\n  padding-left: 20px;\n  padding-right: 6%;\n  line-height: 45px;\n  border-left: 1px solid #ccc; }\n  header .right ul li {\n    list-style: none;\n    font-size: 12px;\n    float: right;\n    padding: 0 10px;\n    margin: 0 10px;\n    display: line-block;\n    cursor: pointer;\n    background: red; }\n\n.set_4_button1 {\n  position: relative;\n  font-weight: 400;\n  text-align: center;\n  width: auto;\n  float: left;\n  padding: 0 16px;\n  line-height: 48px;\n  overflow: hidden;\n  position: relative;\n  z-index: 0;\n  cursor: pointer;\n  color: #333; }\n\n.set_4_button1.raised {\n  transition: all 0.1s; }\n\n.anim {\n  -webkit-transform: translateY(-50%) translateX(-50%);\n  transform: translateY(-50%) translateX(-50%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  border: none; }\n\n.anim:before {\n  position: relative;\n  content: '';\n  display: block;\n  margin-top: 100%; }\n\n.anim:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 50%; }\n\n.clickable .toggle:checked + .anim {\n  -webkit-animation: anim-in 0.75s;\n  animation: anim-in 0.75s; }\n\n.clickable .toggle:checked + .anim:after {\n  -webkit-animation: anim-in-pseudo 0.75s;\n  animation: anim-in-pseudo 0.75s; }\n\n.clickable .toggle:not(:checked) + .anim {\n  -webkit-animation: anim-out 0.75s;\n  animation: anim-out 0.75s; }\n\n.clickable .toggle:not(:checked) + .anim:after {\n  -webkit-animation: anim-out-pseudo 0.75s;\n  animation: anim-out-pseudo 0.75s; }\n\n.hoverable:hover > .anim {\n  -webkit-animation: anim-out 0.75s;\n  animation: anim-out 0.75s; }\n\n.hoverable:hover > .anim:after {\n  -webkit-animation: anim-out-pseudo 0.75s;\n  animation: anim-out-pseudo 0.75s; }\n\n@-webkit-keyframes anim-in {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n@keyframes anim-in {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n@-webkit-keyframes anim-in-pseudo {\n  0% {\n    background: rgba(0, 0, 0, 0.25); }\n  100% {\n    background: transparent; } }\n\n@keyframes anim-in-pseudo {\n  0% {\n    background: rgba(0, 0, 0, 0.25); }\n  100% {\n    background: transparent; } }\n\n@-webkit-keyframes anim-out {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n@keyframes anim-out {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n@-webkit-keyframes anim-out-pseudo {\n  0% {\n    background: rgba(0, 0, 0, 0.25); }\n  100% {\n    background: transparent; } }\n\n@keyframes anim-out-pseudo {\n  0% {\n    background: rgba(0, 0, 0, 0.25); }\n  100% {\n    background: transparent; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../views/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.navList = [
            { 'name': '首页', 'url': '' },
            { 'name': '书影音', 'url': 'share' },
            { 'name': '实验室', 'url': 'demoRoom' },
            { 'name': '聊天室', 'url': 'chatRoom' },
            { 'name': '留言', 'url': 'messageRoom' },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../views/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../views/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../views/app/components/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_routes__ = __webpack_require__("../../../../../views/app/components/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("../../../../../views/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chatroom_chatroom_component__ = __webpack_require__("../../../../../views/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_index_home_index_component__ = __webpack_require__("../../../../../views/app/components/home-index/home-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__baby_room_baby_room_component__ = __webpack_require__("../../../../../views/app/components/baby-room/baby-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_room_demo_room_component__ = __webpack_require__("../../../../../views/app/components/demo-room/demo-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__message_room_message_room_component__ = __webpack_require__("../../../../../views/app/components/message-room/message-room.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__home_routes__["a" /* HomeRoutes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chatroom_chatroom_component__["a" /* ChatroomComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_index_home_index_component__["a" /* HomeIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_10__baby_room_baby_room_component__["a" /* BabyRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_11__demo_room_demo_room_component__["a" /* DemoRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_12__message_room_message_room_component__["a" /* MessageRoomComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../views/app/components/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../views/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatroom_chatroom_component__ = __webpack_require__("../../../../../views/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index_home_index_component__ = __webpack_require__("../../../../../views/app/components/home-index/home-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baby_room_baby_room_component__ = __webpack_require__("../../../../../views/app/components/baby-room/baby-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_room_demo_room_component__ = __webpack_require__("../../../../../views/app/components/demo-room/demo-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_room_message_room_component__ = __webpack_require__("../../../../../views/app/components/message-room/message-room.component.ts");






var HomeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__home_index_home_index_component__["a" /* HomeIndexComponent */]
            },
            {
                path: 'chatRoom',
                component: __WEBPACK_IMPORTED_MODULE_1__chatroom_chatroom_component__["a" /* ChatroomComponent */]
            },
            {
                path: 'share',
                component: __WEBPACK_IMPORTED_MODULE_3__baby_room_baby_room_component__["a" /* BabyRoomComponent */]
            },
            {
                path: 'demoRoom',
                component: __WEBPACK_IMPORTED_MODULE_4__demo_room_demo_room_component__["a" /* DemoRoomComponent */]
            },
            {
                path: 'messageRoom',
                component: __WEBPACK_IMPORTED_MODULE_5__message_room_message_room_component__["a" /* MessageRoomComponent */]
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../views/app/components/message-room/message-room.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContent\">\n  <figure #messageBG class=\"messageBG\"></figure>\n  <div class=\"content\">\n    <div class=\"addMessage\">\n      <div class=\"message\">\n        <h3>Hi，你好 ~</h3>\n        <div class=\"text\">\n          <div class=\"left\">\n            <div class=\"img\">\n              <img src=\"../../../assets/images/touxiang.png\" alt=\"\">\n            </div>\n            <p (click)='alertShowHide()'>雁过留名</p>\n          </div>\n          <div class=\"right\">\n            <div class=\"div\">\n              <textarea placeholder=\"嗨，很高兴认识你~\"></textarea>\n            </div>\n            <div class=\"expression\">\n              <div class=\"biaoqing col-md-6\"></div>\n              <div class=\"send col-md-6\">\n                <span>发送</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"allMessage\">\n      index\n    </div>\n  </div>\n</div>\n<div class=\"fullDiv\" #fullDiv [@alert]=\"fullDisplay\" (mousewheel)=\"mousewheel($event)\">\n  <div class=\"full\" (click)='alertShowHide()'></div>\n  <div class=\"alert\" #alert>\n    qqq\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../views/app/components/message-room/message-room.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.messageContent .messageBG {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  overflow: hidden;\n  background-image: url(" + escape(__webpack_require__("../../../../../views/assets/images/banner/11781.jpg")) + ");\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: center;\n  background-size: 100%;\n  transition: all 0.6s; }\n\n.messageContent .addMessage {\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4); }\n  .messageContent .addMessage .message {\n    width: 800px;\n    height: auto;\n    padding: 50px 10px 10px 10px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -110px;\n    margin-left: -400px;\n    text-align: center; }\n    .messageContent .addMessage .message h3 {\n      font-size: 32px;\n      font-family: \"Arial\",\"Microsoft YaHei\",\"\\9ED1\\4F53\",\"\\5B8B\\4F53\",sans-serif;\n      font-weight: 600;\n      margin-top: -40px;\n      color: #fff;\n      height: 40px;\n      line-height: 40px; }\n    .messageContent .addMessage .message .text {\n      margin-top: 40px;\n      width: 100%;\n      height: auto;\n      background: rgba(255, 255, 255, 0.8);\n      padding-left: 140px;\n      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5); }\n      .messageContent .addMessage .message .text .left {\n        position: relative;\n        width: 140px;\n        height: 140px;\n        margin-left: -140px;\n        float: left; }\n        .messageContent .addMessage .message .text .left p {\n          margin-top: 20px;\n          cursor: pointer;\n          color: #333;\n          transition: all 0.3s;\n          font-size: 14px; }\n        .messageContent .addMessage .message .text .left p:hover {\n          color: #4A6EBC; }\n        .messageContent .addMessage .message .text .left .img {\n          border-radius: 100%;\n          width: 80px;\n          height: 80px;\n          background: #fff;\n          margin: 20px auto 0 auto; }\n          .messageContent .addMessage .message .text .left .img img {\n            width: auto;\n            height: auto;\n            max-width: 100%;\n            max-height: 100%; }\n      .messageContent .addMessage .message .text .right {\n        width: 100%;\n        height: auto;\n        padding: 20px 20px 0 10px; }\n        .messageContent .addMessage .message .text .right .div {\n          display: block;\n          width: 100%;\n          height: 100px;\n          border: 1px solid #ddd;\n          position: relative;\n          background: #fff; }\n        .messageContent .addMessage .message .text .right .div::before {\n          content: \"\";\n          position: absolute;\n          display: block;\n          width: 14px;\n          height: 14px;\n          top: 14px;\n          left: -8px;\n          border: 1px solid #ddd;\n          border-width: 0 0 1px 1px;\n          background-color: #fff;\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n        .messageContent .addMessage .message .text .right textarea {\n          width: 100%;\n          height: 100%;\n          resize: none;\n          outline: none;\n          padding: 10px;\n          border: none;\n          font-size: 12px;\n          color: #ccc; }\n        .messageContent .addMessage .message .text .right .expression {\n          padding: 10px 0;\n          height: 44px; }\n          .messageContent .addMessage .message .text .right .expression .send {\n            text-align: right;\n            height: auto;\n            padding-bottom: 10px; }\n            .messageContent .addMessage .message .text .right .expression .send span {\n              font-size: 14px;\n              display: inline-block;\n              padding: 4px 10px;\n              background: #4A6EBC;\n              cursor: pointer;\n              color: #fff;\n              transition: all 0.4s; }\n            .messageContent .addMessage .message .text .right .expression .send span:hover {\n              color: red; }\n\n.messageContent .allMessage {\n  position: absolute;\n  top: 100%;\n  z-index: 100;\n  width: 100%;\n  min-height: 100%;\n  background: #fff; }\n\n.full {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1000; }\n\n.alert {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1001;\n  width: 200px;\n  height: 300px;\n  background: #fff;\n  transition: all 0.3s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../views/app/components/message-room/message-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageRoomComponent = (function () {
    function MessageRoomComponent(ele) {
        this.ele = ele;
        this.fullDisplay = 'none';
        // setTimeout(() => {
        //   this.changeBG()
        // },100)
    }
    MessageRoomComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setInterval(function () {
            _this.changeBG();
        }, 8000);
    };
    MessageRoomComponent.prototype.changeBG = function () {
        var imgArr = ['14254.jpg', '5510.jpg', '11781.jpg', '14529.jpg', '11212.jpg', '14414.jpg', '14248.jpg', 'apic2278.jpg'];
        this.currentImg = Math.floor(Math.random() * 8);
        this.messageBG.nativeElement.style.backgroundImage = "url(../../../assets/images/banner/" + imgArr[this.currentImg] + ")";
        console.log(this.messageBG.nativeElement.style.backgroundImage);
    };
    MessageRoomComponent.prototype.ngOnInit = function () {
    };
    // 弹框显示影藏
    MessageRoomComponent.prototype.alertShowHide = function () {
        if (this.fullDisplay === 'none') {
            this.fullDisplay = 'block';
            var screenWidth = document.documentElement.clientWidth;
            var screenHeight = document.documentElement.clientHeight;
            var top_1 = (screenHeight - 300) / 2;
            var left = (screenWidth - 200) / 2;
            this.alert.nativeElement.style.top = top_1 + 'px';
            this.alert.nativeElement.style.left = left + 'px';
        }
        else if (this.fullDisplay === 'block') {
            this.fullDisplay = 'none';
        }
    };
    // 鼠标滚动事件
    MessageRoomComponent.prototype.mousewheel = function (e) {
        console.log(e);
        var screenWidth = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop;
        var top = (screenHeight - 300) / 2 + scrollTop;
        var left = (screenWidth - 200) / 2;
        this.alert.nativeElement.style.top = top + 'px';
        this.alert.nativeElement.style.left = left + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('messageBG'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MessageRoomComponent.prototype, "messageBG", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alert'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MessageRoomComponent.prototype, "alert", void 0);
    MessageRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-room',
            template: __webpack_require__("../../../../../views/app/components/message-room/message-room.component.html"),
            styles: [__webpack_require__("../../../../../views/app/components/message-room/message-room.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('alert', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'block',
                        'opacity': '1'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('none', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        'display': 'none',
                        'opacity': '0'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('block => none', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('600ms cubic-bezier(0.4, 0, 0.2, 1)')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('none => block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('600ms cubic-bezier(0.4, 0, 0.2, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MessageRoomComponent);
    return MessageRoomComponent;
}());



/***/ }),

/***/ "../../../../../views/assets/images/babyRoom/ekg-2753759_960_720.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ekg-2753759_960_720.b6bba2a0e69f1065fc9d.png";

/***/ }),

/***/ "../../../../../views/assets/images/banner/11781.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11781.3ec4ab16edfbd2e7569d.jpg";

/***/ }),

/***/ "../../../../../views/assets/images/homeIndex/background-point.fw.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-point.fw.850a194b6d2a3e8ace6f.png";

/***/ }),

/***/ "../../../../../views/assets/images/homeIndex/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.bbb0b9d50f5536b5b195.jpg";

/***/ }),

/***/ "../../../../../views/assets/images/homeIndex/banner_ecards_valentines.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner_ecards_valentines.2954cb587455a17a9648.png";

/***/ }),

/***/ "../../../../../views/assets/images/homeIndex/dream-ac86f7bf01.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dream-ac86f7bf01.ac86f7bf012170ce5cf5.gif";

/***/ }),

/***/ "../../../../../views/assets/images/homeIndex/work-27dedf7593.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "work-27dedf7593.27dedf759391839672de.gif";

/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map 


/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map