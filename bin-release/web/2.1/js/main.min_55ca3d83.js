function randInt(){return globalRandom["int"]()}function rand01(){return globalRandom.f01()}function randF(t,e){return globalRandom.f(t,e)}function randI(t,e){return globalRandom.i(t,e)}function randBool(t){return void 0===t&&(t=.5),globalRandom.bool(t)}var __reflect=this&&this.__reflect||function(t,e,o){t.__class__=e,o?o.push(e):o=[e],t.__types__=t.__types__?o.concat(t.__types__):o},__extends=this&&this.__extends||function(t,e){function o(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);o.prototype=e.prototype,t.prototype=new o},__awaiter=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))(function(n,r){function s(t){try{l(i.next(t))}catch(e){r(e)}}function a(t){try{l(i["throw"](t))}catch(e){r(e)}}function l(t){t.done?n(t.value):new o(function(e){e(t.value)}).then(s,a)}l((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function o(t){return function(e){return i([t,e])}}function i(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(s=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[0,s.value]),o[0]){case 0:case 1:s=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){l.label=o[1];break}if(6===o[0]&&l.label<s[1]){l.label=s[1],s=o;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(o);break}s[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(t,l)}catch(i){o=[6,i],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var n,r,s,a,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),"throw":o(1),"return":o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},GameObject=function(){function t(){this.display=null,t.objects.push(this)}return Object.defineProperty(t.prototype,"X",{get:function(){return this.display.x},set:function(t){this.display.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"Y",{get:function(){return this.display.y},set:function(t){this.display.y=t},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.deleteFlag=!0},t.prototype.onDestroy=function(){},t.initial=function(e){t.baseDisplay=e,t.gameDisplay=new egret.DisplayObjectContainer,t.baseDisplay.addChild(t.gameDisplay)},t.process=function(){t.objects.forEach(function(t){return t.update()}),t.objects=t.objects.filter(function(t){return t.deleteFlag&&t._delete(),!t.deleteFlag}),t.transit&&(t.dispose(),t.transit(),t.transit=null)},t.dispose=function(){t.objects=t.objects.filter(function(t){return t.destroy(),t._delete(),!1})},t.prototype._delete=function(){this.onDestroy(),this.display&&(this.display.parent.removeChild(this.display),this.display=null)},t.objects=[],t}();__reflect(GameObject.prototype,"GameObject");var Timer=function(t){function e(){var e=t.call(this)||this;return e.timer=0,e}return __extends(e,t),e.prototype.onDestroy=function(){},e.prototype.update=function(){null==GameOver.I&&(this.timer+=1/60,Score.I.setPoint(this.timer))},e}(GameObject);__reflect(Timer.prototype,"Timer");var EffectFrame=function(t){function e(e,o,i,n,r,s,a,l,h,c){void 0===a&&(a=.25),void 0===l&&(l=1/8),void 0===h&&(h=0),void 0===c&&(c=0);var u=t.call(this)||this;return u.w=0,u.h=0,u.vx=0,u.vy=0,u.vr=.8,u.rate=0,u.delta=.05,u.dw=i,u.dh=n,u.wr=a,u.hr=l,u.c=r,u.maxA=s,u.vx=h,u.vy=c,u.vr*=randF(.8,1.2),u.delta*=randF(.8,1.2),u.setShape(e+h,o+c,u.w,u.h,r,u.maxA),u}return __extends(e,t),e.prototype.setShape=function(t,e,o,i,n,r){var s=this.display;null==this.display?(this.display=s=new egret.Shape,GameObject.gameDisplay.addChild(this.display)):s.graphics.clear(),s.x=t,s.y=e,s.graphics.lineStyle(10,n,r),s.graphics.drawRect(-.5*o,-.5*i,o,i)},e.prototype.update=function(){this.X+=this.vx,this.Y+=this.vy,this.vx*=this.vr,this.vy*=this.vr,this.rate+=this.delta,this.rate<.7?(this.w+=(this.dw-this.w)*this.wr,this.h+=(this.dh-this.h)*this.hr):(this.w+=(0-this.w)*this.hr,this.h+=(0-this.h)*this.wr);var t=this.maxA;return this.setShape(this.X,this.Y,this.w,this.h,this.c,t),this.rate>=1?void this.destroy():void 0},e}(GameObject);__reflect(EffectFrame.prototype,"EffectFrame");var EffectSquare=function(t){function e(e,o,i,n,r,s,a,l,h,c){void 0===a&&(a=.25),void 0===l&&(l=1/8),void 0===h&&(h=0),void 0===c&&(c=0);var u=t.call(this)||this;return u.w=0,u.h=0,u.vx=0,u.vy=0,u.vr=.8,u.rate=0,u.delta=.05,u.dw=i,u.dh=n,u.wr=a,u.hr=l,u.c=r,u.maxA=s,u.vx=h,u.vy=c,u.vr*=randF(.8,1.2),u.delta*=randF(.8,1.2),u.setShape(e+h,o+c,u.w,u.h,r,u.maxA),u}return __extends(e,t),e.prototype.setShape=function(t,e,o,i,n,r){var s=this.display;null==this.display?(this.display=s=new egret.Shape,GameObject.gameDisplay.addChild(this.display)):s.graphics.clear(),s.x=t,s.y=e,s.graphics.beginFill(n,r),s.graphics.drawRect(-.5*o,-.5*i,o,i),s.graphics.endFill()},e.prototype.update=function(){this.X+=this.vx,this.Y+=this.vy,this.vx*=this.vr,this.vy*=this.vr,this.rate+=this.delta,this.rate<.7?(this.w+=(this.dw-this.w)*this.wr,this.h+=(this.dh-this.h)*this.hr):(this.w+=(0-this.w)*this.hr,this.h+=(0-this.h)*this.wr);var t=this.maxA;return this.setShape(this.X,this.Y,this.w,this.h,this.c,t),this.rate>=1?void this.destroy():void 0},e}(GameObject);__reflect(EffectSquare.prototype,"EffectSquare");var BlockLine=function(t){function e(){var e=t.call(this)||this,o=new egret.Shape;e.display=o,GameObject.gameDisplay.addChild(o),o.graphics.lineStyle(8,FontColor);3*Util.w(BoxWpw),3*Util.h(BoxHph);return e.setRectLine(o,1,1),e.setRectLine(o,4,1),e.setRectLine(o,7,1),e.setRectLine(o,1,4),e.setRectLine(o,4,4),e.setRectLine(o,7,4),e.setRectLine(o,1,7),e.setRectLine(o,4,7),e.setRectLine(o,7,7),e}return __extends(e,t),e.prototype.setRectLine=function(t,e,o){var i=Util.w(BoxCenterXpw+(e-4)*BoxWpw),n=Util.h(BoxCenterYph+(o-4)*BoxHph),r=3*Util.w(BoxWpw),s=3*Util.h(BoxHph);t.graphics.drawRect(i-.5*r,n-.5*s,r,s)},e.prototype.onDestroy=function(){},e.prototype.update=function(){},e}(GameObject);__reflect(BlockLine.prototype,"BlockLine");var Box=function(t){function e(e,o,i,n,r,s,a,l,h){void 0===h&&(h=0);var c=t.call(this)||this;return c.text=null,c.onTap=null,c.thisObject=null,c.keyId=0,c.press=!1,c.touch=!1,c.x=0,c.y=0,c.lineRgb=0,c.rgb=ColorCellNone,c.alpha=1,c.xr=o,c.yr=i,c.wr=n,c.hr=r,c.fontSize=36,c.fontRgb=ColorFontNone,c.setDisplay(c.lineRgb,c.rgb,c.alpha,o,i,n,r),null!=e&&(c.text=Util.newTextField(e,c.fontSize,c.fontRgb,c.xr,c.yr,s,!1),GameObject.baseDisplay.addChild(c.text)),c.onTap=a,c.thisObject=l,c.keyId=h,c.onTap&&c.display.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){return c.onTap(c)},c.thisObject),c.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN,c.touchBegin,c),c.display.addEventListener(egret.TouchEvent.TOUCH_MOVE,c.touchMove,c),c.display.addEventListener(egret.TouchEvent.TOUCH_END,c.touchEnd,c),c}return __extends(e,t),e.prototype.onDestroy=function(){var t=this;this.onTap&&this.display.removeEventListener(egret.TouchEvent.TOUCH_TAP,function(e){return t.onTap(t)},this.thisObject),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this),this.text&&GameObject.baseDisplay.removeChild(this.text)},e.prototype.setDisplay=function(t,e,o,i,n,r,s){var a=this.display;null==a?(this.display=a=new egret.Shape,GameObject.gameDisplay.addChild(a)):a.graphics.clear(),a.graphics.beginFill(e,o);var l=r*Util.width,h=s*Util.height;a.graphics.drawRect(-.5*l,-.5*h,l,h),a.graphics.endFill(),a.touchEnabled=!0,a.x=i*Util.width,a.y=n*Util.height,this.display=a},e.prototype.setColor=function(t){this.rgb=t,this.setDisplay(this.lineRgb,this.rgb,this.alpha,this.xr,this.yr,this.wr,this.hr)},e.prototype.setText=function(t){var e=this.text;this.text.text=t,this.text.size=this.fontSize,e.x=Util.width*this.xr-.5*e.width,e.y=Util.height*this.yr-.5*e.height},e.prototype.setTextColor=function(t){this.text&&(this.text.textColor=t)},e.prototype.setNote=function(t){var e="";e+=0!=(2&t)?"1":"  ",e+=0!=(4&t)?"2":"  ",e+=0!=(8&t)?"3":"  ",e+="\n",e+=0!=(16&t)?"4":"  ",e+=0!=(32&t)?"5":"  ",e+=0!=(64&t)?"6":"  ",e+="\n",e+=0!=(128&t)?"7":"  ",e+=0!=(256&t)?"8":"  ",e+=0!=(512&t)?"9":"  ";var o=this.text;this.text.text=e,this.text.size=.5*this.fontSize,o.x=Util.width*this.xr-.5*o.width,o.y=Util.height*this.yr-.5*o.height},e.prototype.setOutline=function(t){this.lineRgb=t,this.setDisplay(this.lineRgb,this.rgb,this.alpha,this.xr,this.yr,this.wr,this.hr)},e.prototype.update=function(){var t=this.touch?.95:1;this.display.scaleX=this.display.scaleY=this.display.scaleX+.25*(t-this.display.scaleX),this.press=!1},e.prototype.touchBegin=function(t){this.x=t.stageX,this.y=t.stageY,this.press=!0,this.touch=!0},e.prototype.touchMove=function(t){this.x=t.stageX,this.y=t.stageY,this.touch=!0},e.prototype.touchEnd=function(t){this.touch=!1},e}(GameObject);__reflect(Box.prototype,"Box");var SaveKeyClearTime="HyperSudokuClearTime",BackColor=16777215,FontColor=9478336,ColorCellNone=13622501,ColorFontNone=6067097,ColorCellFixed=10730444,ColorFontFixed=ColorFontNone,ColorCellEnter=ColorCellNone,ColorFontEnter=2111592,ColorCellPick=16776960,ColorFontPick=2111592,ColorCellPickEnter=ColorCellNone,ColorFontPickEnter=2111592,ColorCellPickFixed=10730444,ColorFontPickFixed=ColorFontNone,ColorCellEqual=ColorCellNone,ColorFontEqual=ColorCellPick,ColorCellEqualFixed=10730444,ColorFontEqualFixed=ColorCellPick,ColorCellGuide=14868943,ColorFontGuide=ColorFontEnter,ColorFontGuideFixed=6075289,KeyColor=9478336,KeyColor2=15066597,KeyLineColor=FontColor,KeyFontColor=BackColor,EffectColor=6075289,BoxCount=9,BoxSizeInW=10,BoxSizeInH=18,BoxWpw=1/BoxSizeInW,BoxHph=1/BoxSizeInH,KeyInW=8,KeyInH=15,KeyWpw=1/KeyInW,KeyHph=1/KeyInH,BoxCenterXpw=.5,BoxCenterYph=.32,KeyCenterXpw=.5,KeyCenterYph=.69,Game=function(t){function e(){var o=t.call(this)||this;o.texts=[],o.localTouchBegan=!1,o.press=!1,o.touch=!1,o.tapX=0,o.tapY=0,o.boxes=[],o.keys=[],o.initialNumbs=[],o.numbs=[],o.notes=[],o.currentBoxID=-1,o.touchedBoxID=-1,o.touchedKeyID=-1,o.cursoleBlick=0,o.full3x3=!1,e.I=o,o.texts[0]=Util.newTextField("問題"+(e.initialGame+1),Util.width/20,FontColor,.5,.03,!0,!0),o.texts.forEach(function(t){t&&GameObject.baseDisplay.addChild(t)});for(var i=0;BoxCount>i;i++)for(var n=0;BoxCount>n;n++){var r=i+n*BoxCount,s=e.initialData[r],a=parseInt(s);o.initialNumbs[r]=a,o.numbs[r]=a,o.notes[r]=0,0==a&&(s="");var l=BoxCenterXpw+(i-4)*BoxWpw,h=BoxCenterYph+(n-4)*BoxHph,c=.1*BoxWpw,u=.1*BoxHph;2>=i&&(l-=c),i>=6&&(l+=c),2>=n&&(h-=u),n>=6&&(h+=u);var p=0!=a;o.boxes[r]=new Box(s,l,h,.95*BoxWpw,.95*BoxHph,!0,function(t){return o.onBox(t)},o,r),0==p?(o.boxes[r].setColor(ColorCellNone),o.boxes[r].setTextColor(ColorFontNone)):(o.boxes[r].setColor(ColorCellFixed),o.boxes[r].setTextColor(ColorFontFixed))}for(var i=0;3>i;i++)for(var n=0;3>n;n++){var r=1+i+3*n,s=r.toFixed(),l=KeyCenterXpw+(i-1)*KeyWpw,h=KeyCenterYph+(n-1)*KeyHph;o.keys[r]=new Button(s,42,KeyFontColor,l,h,.9*KeyWpw,.9*KeyHph,KeyColor,1,KeyLineColor,!0,function(t){return o.onKey(t)},o,r)}return o.delKey=new Button("×",42,KeyFontColor,.8,KeyCenterYph-KeyHph,.9*KeyWpw,.9*KeyHph,KeyColor,1,KeyLineColor,!0,function(t){return o.onDelKey(t)},o),o.delKey=new Button("<",30,KeyFontColor,.05,.03,.7*KeyWpw,.7*KeyHph,KeyColor,1,KeyLineColor,!0,function(t){return o.onBackKey(t)},o),o}return __extends(e,t),e.prototype.onBox=function(t){this.touchedBoxID=t.keyId},e.prototype.onKey=function(t){this.touchedKeyID=t.keyId},e.prototype.onDelKey=function(t){this.currentBoxID>=0&&0==this.initialNumbs[this.currentBoxID]&&(this.numbs[this.currentBoxID]=0,this.notes[this.currentBoxID]=0,this.boxes[this.currentBoxID].setText(""),this.setBoxNumber(this.currentBoxID,0))},e.prototype.onBackKey=function(t){GameObject.transit=SceneSelect.loadScene},e.prototype.onDestroy=function(){e.I=null,this.texts.forEach(function(t){t&&t.parent.removeChild(t)}),this.texts=null},e.prototype.update=function(){if(null==GameOver.I){if(this.touchedBoxID>=0&&this.touchedBoxID!=this.currentBoxID){this.currentBoxID>=0&&(0==this.initialNumbs[this.currentBoxID]?(this.boxes[this.currentBoxID].setColor(ColorCellPick),this.boxes[this.currentBoxID].setTextColor(ColorFontPick)):(this.boxes[this.currentBoxID].setColor(ColorCellPickFixed),this.boxes[this.currentBoxID].setTextColor(ColorFontPickFixed))),this.currentBoxID=this.touchedBoxID,this.setKeyColor();var t=this.currentBoxID%BoxCount,e=Math.floor(this.currentBoxID/BoxCount);this.setGuideBoxColor(t,e),this.setEqualTextColor(t,e,this.numbs[this.currentBoxID]),this.cursoleBlick=0;var o=this.boxes[this.currentBoxID];o.setColor(ColorCellPick),o.setTextColor(ColorFontPick),this.effectChooseBox(o.X,o.Y)}if(this.currentBoxID>=0){this.cursoleBlick+=1/60;var o=this.boxes[this.currentBoxID],i=Math.abs(Math.cos(this.cursoleBlick*Math.PI)),n=0==this.initialNumbs[this.currentBoxID]?ColorCellNone:ColorCellFixed,r=Util.colorLerp(ColorCellPick,n,i);o.setColor(r)}if(this.touchedKeyID>=0&&this.currentBoxID>=0)if(0==this.numbs[this.currentBoxID])if(0!=this.notes[this.currentBoxID])if(this.notes[this.currentBoxID]^=1<<this.touchedKeyID,0!=this.notes[this.currentBoxID]){if(this.boxes[this.currentBoxID].setNote(this.notes[this.currentBoxID]),0!=(this.notes[this.currentBoxID]&1<<this.touchedKeyID)){var t=this.currentBoxID%BoxCount,e=Math.floor(this.currentBoxID/BoxCount);if(this.setGuideBoxColor(t,e),this.setEqualTextColor(t,e,this.touchedKeyID),this.checkNumber(t,e,this.touchedKeyID)){var o=this.boxes[this.currentBoxID];this.effectRightNumber(o.X,o.Y)}}}else this.setBoxNumber(this.currentBoxID,this.touchedKeyID);else this.checkSameNumberOn3x3(this.currentBoxID,this.touchedKeyID)?this.effectDisabledKey(this.touchedKeyID):this.setBoxNumber(this.currentBoxID,this.touchedKeyID);else this.numbs[this.currentBoxID]==this.touchedKeyID?(this.setBoxNumber(this.currentBoxID,0),this.notes[this.currentBoxID]^=1<<this.touchedKeyID,this.boxes[this.currentBoxID].setNote(this.notes[this.currentBoxID])):this.effectDisabledKey(this.touchedKeyID);this.touchedBoxID=-1,this.touchedKeyID=-1}},e.prototype.setKeyColor=function(){if(!(this.currentBoxID<0)){this.full3x3=!0;for(var t=this.currentBoxID%BoxCount,e=Math.floor(this.currentBoxID/BoxCount),o=3*Math.floor(t/3),i=3*Math.floor(e/3),n=0;3>n;n++)for(var r=0;3>r;r++){var s=o+n,a=i+r;if(0==this.numbs[s+a*BoxCount]){this.full3x3=!1;break}}for(var l=this.full3x3?KeyColor2:KeyColor,n=1;9>=n;n++)this.keys[n].setColor(l)}},e.prototype.setBoxNumber=function(t,o){this.numbs[t]=o,this.boxes[t].setText(o>0?o.toFixed():"");var i=this.boxes[t],n=t%BoxCount,r=Math.floor(t/BoxCount);this.setGuideBoxColor(n,r),this.setEqualTextColor(n,r,o),this.checkNumber(n,r,o)?(i.setTextColor(ColorFontEnter),this.effectRightNumber(i.X,i.Y)):i.setTextColor(ColorFontEnter),this.checkClear()&&(new GameOver,Util.getSaveDataNumber(SaveKeyClearTime+e.initialGame,999)>Score.I.point&&Util.setSaveDataNumber(SaveKeyClearTime+e.initialGame,Score.I.point))},e.prototype.checkSameNumberOn3x3=function(t,e){for(var o=t%BoxCount,i=Math.floor(t/BoxCount),n=3*Math.floor(o/3),r=3*Math.floor(i/3),s=0;3>s;s++)for(var a=0;3>a;a++){var l=n+s,h=r+a;if((l!=o||h!=i)&&this.numbs[l+h*BoxCount]==e)return!0}return!1},e.prototype.effectChooseBox=function(t,e){new EffectSquare(Util.w(randF(.2,.8)),e,Util.w(1.4),Util.h(BoxHph),EffectColor,.5,1/3,1/9),new EffectSquare(t,Util.h(BoxCenterXpw+randF(-.2,.2)),Util.w(BoxWpw),Util.h(1.4),EffectColor,.5,1/6,.5)},e.prototype.effectRightNumber=function(t,e){for(var o=0;0>o;o++){var i=Util.w(BoxWpw)*randF(.25,1.5),n=20,r=randF(-n,+n),s=randF(-n,+n);new EffectFrame(t+5*r,e+5*s,i,i,EffectColor,.5,.5,1/6,r,s).delta*=randF(.5,1),new EffectFrame(t+5*s,e+5*r,i,i,EffectColor,.5,1/6,.5,r,s).delta*=randF(.5,1)}new EffectFrame(Util.w(.5),e,Util.w(1.5),Util.h(.5*BoxHph),EffectColor,.5,1/3,1/9),new EffectFrame(t,Util.h(BoxCenterXpw),Util.w(.5*BoxWpw),Util.h(1.5),EffectColor,.5,1/6,.5),new EffectChainer(0,t,e,+Util.w(BoxWpw),0,5),new EffectChainer(0,t,e,-Util.w(BoxWpw),0,5),new EffectChainer(0,t,e,0,+Util.h(BoxHph),5),new EffectChainer(0,t,e,0,-Util.h(BoxHph),5)},e.prototype.effectDisabledKey=function(t){var e=this.keys[t],o=e.X,i=e.Y,n=1.3*Util.w(KeyWpw);new EffectFrame(o,i,n,n,EffectColor,.7,.5,.5,0,0).delta=1/12;var r=this.boxes[this.currentBoxID];o=r.X,i=r.Y,new EffectFrame(o,i,n,n,EffectColor,.7,.5,.5,0,0).delta=1/12},e.prototype.setGuideBoxColor=function(t,e){for(var o=(3*Math.floor(t/3),3*Math.floor(e/3),0);BoxCount>o;o++)for(var i=0;BoxCount>i;i++){var n=o+i*BoxCount,r=this.boxes[n],s=!1;if(s||o==t||i==e)this.initialNumbs[n]>0?(r.setColor(ColorCellGuide),r.setTextColor(ColorFontGuideFixed)):(r.setColor(ColorCellGuide),r.setTextColor(ColorFontGuide));else if(this.initialNumbs[n]>0)r.setColor(ColorCellFixed),r.setTextColor(ColorFontFixed);else{var a=this.numbs[n];0==a?(r.setColor(ColorCellNone),r.setTextColor(ColorFontNone)):(r.setColor(ColorCellEnter),r.setTextColor(ColorFontEnter))}}},e.prototype.setEqualTextColor=function(t,e,o){for(var i=0;BoxCount>i;i++)for(var n=0;BoxCount>n;n++){var r=i+n*BoxCount;this.numbs[r]==o&&this.boxes[r].setTextColor(ColorFontEqual)}var s=t+e*BoxCount;0==this.initialNumbs[s]&&this.boxes[s].setTextColor(ColorFontEnter)},e.prototype.checkNumber=function(t,e,o){for(var i=0;BoxCount>i;i++)if(i!=t&&this.numbs[i+e*BoxCount]==o)return!1;for(var n=0;BoxCount>n;n++)if(n!=e&&this.numbs[t+n*BoxCount]==o)return!1;for(var r=3*Math.floor(t/3),s=3*Math.floor(e/3),i=0;3>i;i++)for(var n=0;3>n;n++){var a=r+i,l=s+n;if(a!=t&&l!=e&&this.numbs[a+l*BoxCount]==o)return!1}return!0},e.prototype.checkClear=function(){for(var t=0;t<this.numbs.length;t++)if(0==this.numbs[t])return!1;for(var t=0;BoxCount>t;t++)for(var e=0;BoxCount>e;e++){var o=t+e*BoxCount;if(0==this.initialNumbs[o]&&0==this.checkNumber(t,e,this.numbs[o]))return!1}return!0},e.initialData="008000010041700293293540070036900000007000800000005740080072961614009520070000300",e}(GameObject);__reflect(Game.prototype,"Game");var ScenePlay=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.loadScene=function(){new Game,new Score,new Timer},e.prototype.update=function(){},e}(GameObject);__reflect(ScenePlay.prototype,"ScenePlay");var GamesCountW=9,GamesCountH=11,SceneSelect=function(t){function e(){var o=t.call(this)||this;o.texts=[],o.games=[],o.backButton=null,o.texts[0]=Util.newTextField("問題選択",Util.width/20,FontColor,.5,.05,!0,!0),o.texts.forEach(function(t){t&&GameObject.baseDisplay.addChild(t)});for(var i=0;GamesCountW>i;i++)for(var n=0;GamesCountH>n;n++){var r=i+n*GamesCountW;if(r>=e.sudokuList.length)break;var s=.5+(i-4)*BoxWpw,a=.5+(n-4)*BoxHph,l=Util.getSaveDataNumber(SaveKeyClearTime+r,0)>0?ColorCellFixed:ColorCellNone;o.games[r]=new Button(""+(r+1),Util.width/20,BackColor,s,a,.85*BoxWpw,.85*BoxHph,l,1,-1,!0,function(t){return o.onTapGames(t)},o,r)}return o.backButton=new Button("<",Util.width/20,BackColor,.1,.1,BoxWpw,BoxHph,FontColor,1,-1,!0,o.onTapBack,o),o}return __extends(e,t),e.loadScene=function(){new e},e.prototype.onDestroy=function(){this.texts.forEach(function(t){t&&t.parent.removeChild(t)}),this.texts=null},e.prototype.update=function(){},e.prototype.onTapGames=function(t){Game.initialGame=t.keyId,Game.initialData=e.sudokuList[t.keyId],GameObject.transit=ScenePlay.loadScene},e.prototype.onTapBack=function(){GameObject.transit=SceneTitle.loadScene},e.sudokuList=["005284100062000980701000203300805004500407001200106008804000607073000850009718400","923067104000000006504130207800000600201040803009000002705029301300000000402810765","003800400056010070100023058001204007034000560600507800320670004060080130008005700","015800043800035200900060700500027900092500036030600070027100089300042100600080400","008000010041700293293540070036900000007000800000005740080072961614009520070000300","030000600150208703078900521010300807000009000080051030590803160023105040060400000","000010000590302047708409306300000005054000890060020030800571004241030758000040000","342179600000400000001650000060305000195000406200000715024893000008060000016724800","193280000500300002700090003230009008906000215000701030000950604000806020082100709","802157409004000200307000605005000300601905804000346000750020063000090000003768100","056000270280000034100000008004803900038507460027000380000000000045000890001395700","004000500061805940570060032600000003705000804800030005980000056023456780000000000","451000326070010050000562000000030000123406789000070000000647000060020030587000264","000000000135704896200568007700000005943000261008000700009000300002000600006951400","000000800012009430345601290078000100000000000004000560026403958031700640009000000","000000000052703680090805010087602130000000000029304870070506040038907250000000000","200050006050239040007000200020010030010702050070040010002000100060384020300020004","752900000800300000100600000900100000374809650006003020001708590000006080000091034","002060500700802004004010300200608007010070020300401006003040100100706005005080700","040900256600002001000000907900027040000608000070150002409000000800200004213005090","013506780000000000084000250200107005100258006400309001076000190000090000000075000","076000180800702009200060004030508040008000600090216030040000020003000900000309000","080060070200908004009020100006010500002000400000372000068000910020040080500080002","001249700050000030700030008200001003300407009407000801100000005070000080009683100","860090000570081000000074200000027410000030000023456780090000060001248900000000000","100000000000009230003807490006508920000000000035702800058106700064200000000000006","030000020900000006004952100005000200006517300007000400008243500009000600020009700","100070008200040009050602030008000600000803000400050007500030006090401080006000200","204000605030000070005080900020905080901000307000403000010040090008000700040508060","150096000700520000009300000047000003360000048800000250000009100000073006000450029","008100000006070000009000500007000230004000109362000800891000400000031900000045700","000000000007906200010000040000000000120345067600000008730000019041000650009402800","153400000642000000000015230000026400000000000014730000087500000000001679000009580","000000000000708000608000504060090080059000420200040007700501002090020070004070600","000004015000030078009100000004206007050000020100805400000008600530070000820300000","100050008050704090009020300000405000460000051008060400001000800000030000040109060","080700900060900300001008040004003070000000000010400800020300600007004080005006010","060807030400000002005000900900000005070603080800000006008000400500000008030508070","001000000020001860300008004400806000000705001503000046650204000000300000004009000","040000250700500008600039000007000080005090700080000400000750009500008006029000070","002400008010070000050000290001008004000305000300200900074000050000060070200001600","000003050200600100800700000500300870600205003089006004000009007001002005020400000","000000000087100065060700038058900000000010000000002410270006040410005670000000000","005300000029000000860000000100004000000097230204800097070000001003700060000052800","080090000040001700300500008004200060809000107070003800600007003001800070000050080","100002009005800000009600740600000490000010000028000003074005800000007200500300006","004600000070010300300800040406000005010000090900000702020003009008090060000007100","000000000000907000013080740080405070095030120000000000900704001030050080002000600","043000000500200000600100350700003004000508000800900007026007005000001008000000940","000000000002800500060320010043010000005402100000090720010067040007005300000000000","000030000700208004000605000064000180200000005300000009012304560000050000000816000","450000000760040000000900062028003500000010000001500890690008000000060084000000031","200040000080002100003700050006000030400090006010000400070008200005300070000010008","003000600020907030800050002070000060009020800040000070300010004090605020005000100","006010000070605000010003000050002000003060005000700018800000960500300200090407000","000000000000843900000725300091570000042390000065000080087000430000009600000000000","027000000900400180000005002001800009030000060700001300600900000053004007000000840","006002004003007000400900800500400092070030000010008600002000058000760000000001400","000078000000300200005000010030010560200000700104500039340020000000050000009400300","000004800000000039024680000002468000000000000000135700000013570690000000005700000","900000120000500030087600045090006000000400050120008760030009000045000003000000000","054000060000100007000082001009004050005000100060900300600470000300008000090000280","005701800200000003000000000900030004040507090300060005000000000400000006007802100","078490000100006000400007000082910000004600890009054002006000008000200040000069700","000070000000301000002000400040008060070060020090402050016000890050000030009183500","000000000001000000002900050003070080004010060085000030546000890730002640000008300","000007800000084300000612000003190000071500000856000000360000002000000014000000530","000064200003100050010000000090023600400500010307000000601092700020000030050000000","012340000400006900000000080000000060005700002060030009090010006008200001000000070","830000000600005200000490080005000070007060900020000100010073000002900007000000054","060010080090020070004008003007004009600500300500600800080030010020040090000000000","120009500034056020000700080000000060000000040500000300048027000001380000000500000","000100000056000780000002000000200005081000640400003000000600000068000390000004000","000000000079350000060070000090060000035840000000003258000006004000002003000009675","000000000000243000001000500070080030010500920040006050090000040006172800000000000","000016000008500400020000037000000083004030100350000000910000020007008600000450000","003700000040000000900085600600020800010000070002090003001360004000000020000002500","000000000004867900050000030020010050000305000007090000800100200300000700076248000","405000607000010000302080504000020000007305800020000030030809020000000000000706000","000000000042900000100000000200000000306400820400605003098001004000007005000000310","005670000040008003000000098000000086000345000270000000590000000600400020000027900"],e}(GameObject);__reflect(SceneSelect.prototype,"SceneSelect");var SceneTitle=function(t){function e(){var e=t.call(this)||this;return e.texts=[],e.startButton=null,e.settingsButton=null,e.texts[0]=Util.newTextField("HYPER SUDOKU",Util.width/11,FontColor,.5,.25,!0,!0),e.startButton=new Button("スタート",Util.width/16,BackColor,.5,.7,.7,.12,FontColor,1,-1,!0,e.onTapStart,e),e.texts.forEach(function(t){t&&GameObject.baseDisplay.addChild(t)}),e}return __extends(e,t),e.loadScene=function(){new e},e.prototype.onDestroy=function(){this.texts.forEach(function(t){t&&t.parent.removeChild(t)}),this.texts=null},e.prototype.inputData=function(t){Game.initialData=t},e.prototype.update=function(){},e.prototype.onTapStart=function(){GameObject.transit=SceneSelect.loadScene},e}(GameObject);__reflect(SceneTitle.prototype,"SceneTitle");var EffectChainer=function(t){function e(e,o,i,n,r,s){var a=t.call(this)||this;switch(a.ticks=0,a.type=e,a.x=o,a.y=i,a.vx=n,a.vy=r,a.count=s,e){case 0:a.inter=3}return a}return __extends(e,t),e.prototype.update=function(){if(this.ticks++,this.ticks%this.inter==0){switch(this.type){case 0:this.create0()}--this.count<=0&&this.destroy()}},e.prototype.create0=function(){this.x+=this.vx,this.y+=this.vy;var t=Util.w(BoxWpw)*randF(.25,1),e=5,o=randF(-e,+e),i=randF(-e,+e);new EffectFrame(this.x+5*o,this.y+5*i,t,t,EffectColor,.5,.5,1/6,o,i).delta*=randF(.5,1)},e}(GameObject);__reflect(EffectChainer.prototype,"EffectChainer");var Button=function(t){function e(e,o,i,n,r,s,a,l,h,c,u,p,d,f){void 0===f&&(f=0);var x=t.call(this)||this;return x.text=null,x.onTap=null,x.thisObject=null,x.keyId=0,x.press=!1,x.touch=!1,x.x=0,x.y=0,x.lineRgb=c,x.rgb=l,x.alpha=h,x.xr=n,x.yr=r,x.wr=s,x.hr=a,x.fontSize=o,x.fontRgb=i,x.setDisplay(c,l,h,n,r,s,a),e&&x.setText(e,!0),x.onTap=p,x.thisObject=d,x.keyId=f,x.onTap&&x.display.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){return x.onTap(x)},x.thisObject),x.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN,x.touchBegin,x),x.display.addEventListener(egret.TouchEvent.TOUCH_MOVE,x.touchMove,x),x.display.addEventListener(egret.TouchEvent.TOUCH_END,x.touchEnd,x),x}return __extends(e,t),e.prototype.onDestroy=function(){var t=this;this.onTap&&this.display.removeEventListener(egret.TouchEvent.TOUCH_TAP,function(e){return t.onTap(t)},this.thisObject),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this),this.text&&GameObject.baseDisplay.removeChild(this.text)},e.prototype.setDisplay=function(t,e,o,i,n,r,s){var a=this.display;null==a?(this.display=a=new egret.Shape,GameObject.baseDisplay.addChild(a)):a.graphics.clear(),t>=0?a.graphics.lineStyle(2,t):a.graphics.lineStyle(0),a.graphics.beginFill(e,o);var l=r*Util.width,h=s*Util.height;a.graphics.drawRoundRect(-.5*l,-.5*h,l,h,.2*h),a.graphics.endFill(),a.touchEnabled=!0,a.x=i*Util.width,a.y=n*Util.height,this.display=a},e.prototype.setColor=function(t){this.setDisplay(this.lineRgb,t,this.alpha,this.xr,this.yr,this.wr,this.hr)},e.prototype.setText=function(t,e){if(null==this.text)this.text=Util.newTextField(t,this.fontSize,this.fontRgb,this.xr,this.yr,e,!1),GameObject.baseDisplay.addChild(this.text);else{var o=this.text;this.text.text=t,o.x=Util.width*this.xr-.5*o.width,o.y=Util.height*this.yr-.5*o.height}},e.prototype.setTextColor=function(t){this.text&&(this.text.textColor=t)},e.prototype.update=function(){var t=this.touch?1.1:1;this.display.scaleX=this.display.scaleY=this.display.scaleX+.25*(t-this.display.scaleX),this.press=!1},e.prototype.touchBegin=function(t){this.x=t.stageX,this.y=t.stageY,this.press=!0,this.touch=!0},e.prototype.touchMove=function(t){this.x=t.stageX,this.y=t.stageY,this.touch=!0},e.prototype.touchEnd=function(t){this.touch=!1},e}(GameObject);__reflect(Button.prototype,"Button");var Camera2D=function(){function t(){}return t.initial=function(){t.x=0,t.y=0,t.localX=0,t.localY=0,t.scale=1,t.rotation=0},t.process=function(){GameObject.gameDisplay.anchorOffsetX=t.x,GameObject.gameDisplay.anchorOffsetY=t.y,GameObject.gameDisplay.x=this.localX,GameObject.gameDisplay.y=this.localY,GameObject.gameDisplay.scaleX=GameObject.gameDisplay.scaleY=t.scale,GameObject.gameDisplay.rotation=t.rotation},t}();__reflect(Camera2D.prototype,"Camera2D");var Main=function(t){function e(){var e=t.call(this)||this;return e.once(egret.Event.ADDED_TO_STAGE,e.addToStage,e),e}return __extends(e,t),e.prototype.addToStage=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return Util.initial(this),GameObject.initial(this.stage),Camera2D.initial(),SceneTitle.loadScene(),egret.startTick(this.tickLoop,this),[2]})})},e.prototype.tickLoop=function(t){return GameObject.process(),Camera2D.process(),!1},e}(eui.UILayer);__reflect(Main.prototype,"Main");var InputField=function(t){function e(e,o,i,n,r,s,a,l,h,c){var u=t.call(this)||this;u.text=null,u.onChange=null;var p=new egret.Shape;GameObject.baseDisplay.addChild(p),p.graphics.beginFill(l,h);var d=s*Util.width,f=a*Util.height;return p.graphics.drawRoundRect(-.5*d,-.5*f,d,f,.4*f),p.graphics.endFill(),p.touchEnabled=!0,p.x=n*Util.width,p.y=r*Util.height,u.display=p,u.text=new egret.TextField,u.text.type=egret.TextFieldType.INPUT,u.text.maxChars=e,u.text.size=o,u.text.textColor=i,u.text.width=d,u.text.height=f,u.text.x=Util.width*n-.5*u.text.width+.5*o,u.text.y=Util.height*r-.5*o,GameObject.baseDisplay.addChild(u.text),u.onChange=c,u.onChange&&u.text.addEventListener(egret.Event.CHANGE,function(){return u.onChange(u.text.text)
},u),u}return __extends(e,t),e.prototype.onDestroy=function(){GameObject.baseDisplay.removeChild(this.text)},e.prototype.update=function(){},e}(GameObject);__reflect(InputField.prototype,"InputField");var Random=function(){function t(e){void 0===e&&(e=Math.floor(Math.random()*t.max)),this.x=123456789,this.y=362436069,this.z=521288629,this.w=e}return t.prototype["int"]=function(){return this.next()&t.max},t.prototype.f01=function(){return this["int"]()/(t.max+1)},t.prototype.f=function(t,e){return t+this.f01()*(e-t)},t.prototype.i=function(t,e){return Math.floor(this.f(t,e))},t.prototype.bool=function(t){return void 0===t&&(t=.5),this.f01()<t},t.prototype.next=function(){var t;return t=this.x^this.x<<11,this.x=this.y,this.y=this.z,this.z=this.w,this.w=this.w^this.w>>>19^(t^t>>>8)},t.max=1073741823,t}();__reflect(Random.prototype,"Random");var globalRandom=new Random,Rect=function(t){function e(e,o,i,n,r,s,a){void 0===s&&(s=!1),void 0===a&&(a=!1);var l=t.call(this)||this,h=new egret.Shape;l.display=h;var c=s?GameObject.gameDisplay:GameObject.baseDisplay;return a?c.addChild(l.display):c.addChildAt(l.display,1),h.graphics.beginFill(r,1),h.graphics.drawRect(e,o,i,n),h.graphics.endFill(),l}return __extends(e,t),e.prototype.update=function(){},e}(GameObject);__reflect(Rect.prototype,"Rect");var Util=function(){function t(){}return t.w=function(e){return e*t.width},t.h=function(e){return e*t.height},t.initial=function(t){this.width=t.stage.stageWidth,this.height=t.stage.stageHeight},t["break"]=function(t,e){t&&console.log(e)},t.clamp=function(t,e,o){return e>t&&(t=e),t>o&&(t=o),t},t.clamp01=function(e){return t.clamp(e,0,1)},t.lerp=function(t,e,o){return t+(e-t)*o},t.deltaAngle=function(t){var e=(t+Math.PI)/(2*Math.PI);return e=65536*e&65535,e=e/65536*Math.PI*2-Math.PI},t.color=function(t,e,o){return 65536*Math.floor(255*t)+256*Math.floor(255*e)+Math.floor(255*o)},t.colorLerp=function(t,e,o){var i=1-o,n=((16711680&t)*i+(16711680&e)*o&16711680)+((65280&t)*i+(65280&e)*o&65280)+((255&t)*i+(255&e)*o&255);return n},t.newTextField=function(e,o,i,n,r,s,a){var l=new egret.TextField;return l.text=e,l.bold=s,l.size=o,l.textColor=i,a?(l.x=(t.width-l.width)*n,l.y=(t.height-l.height)*r):(l.x=t.width*n-.5*l.width,l.y=t.height*r-.5*l.height),l},t.newShadowText=function(t,e,o){void 0===o&&(o=1.5);var i=new egret.TextField;return i.text=t.text,i.bold=t.bold,i.size=t.size,i.textColor=e,i.x=t.x+o,i.y=t.y+o,i.alpha=.5,i},t.newBitmap=function(t,e,o,i){var n=new egret.Bitmap;return n.texture=RES.getRes(t),GameObject.baseDisplay.addChild(n),n.x=e,n.y=o,n.anchorOffsetX=.5*n.width,n.anchorOffsetY=.5*n.height,n.scaleX=n.scaleY=i,n},t.getSaveDataNumber=function(t,e){var o=egret.localStorage.getItem(t),i=e;return null!=o&&(i=parseInt(o)),i},t.setSaveDataNumber=function(t,e){egret.localStorage.setItem(t,""+e)},t.getSaveDataString=function(t,e){var o=egret.localStorage.getItem(t);return null==o&&(o=e),o},t.setSaveDataString=function(t,e){egret.localStorage.setItem(t,e)},t}();__reflect(Util.prototype,"Util");var GameOver=function(t){function e(){var o=t.call(this)||this;return o.texts=[],o.buttonOK=null,o.step=0,o.fadeInFrame=64,e.I=o,o.buttonOK=new Button("クリア",Util.width/16,BackColor,.5,.3,1.4,.2,FontColor,1,-1,!0,o.onTapRetry,o),egret.Tween.get(o.buttonOK.text,{loop:!1}).to({alpha:0},0).to({alpha:1},1e3),egret.Tween.get(o.buttonOK.display,{loop:!1}).to({alpha:0},0).to({alpha:1},1e3),o}return __extends(e,t),e.prototype.onDestroy=function(){this.texts.forEach(function(t){GameObject.baseDisplay.removeChild(t)}),this.texts=null,e.I=null},e.prototype.update=function(){},e.prototype.onTapRetry=function(){GameObject.transit=SceneSelect.loadScene},e.I=null,e}(GameObject);__reflect(GameOver.prototype,"GameOver");var Score=function(t){function e(){var o=t.call(this)||this;return o.point=0,o.bestScore=0,o.text=null,e.I=o,o.point=0,o.text=Util.newTextField("TIME:0",Util.width/28,FontColor,.9,.02,!0,!0),GameObject.baseDisplay.addChild(o.text),o.bestScore=Util.getSaveDataNumber(SaveKeyClearTime+Game.initialGame,999),o}return __extends(e,t),e.prototype.onDestroy=function(){this.text.parent.removeChild(this.text),this.text=null,e.I=null},e.prototype.update=function(){},e.prototype.addPoint=function(t){void 0===t&&(t=1),this.setPoint(this.point+t)},e.prototype.setPoint=function(t){var e=this.point.toFixed(),o=t.toFixed();e!=o&&(this.point=t,this.text.text="TIME:"+o)},e.I=null,e}(GameObject);__reflect(Score.prototype,"Score");var StartMessage=function(t){function e(){var o=t.call(this)||this;return o.rectFilter=null,o.texts=[],o.button=null,e.I=o,o.rectFilter=new Rect(0,Util.h(.325),Util.width,Util.h(.3),0,!1,!0),o.rectFilter.display.alpha=.4,o.texts[0]=Util.newTextField("空いているマスをタップで選択",Util.width/20,FontColor,.5,.4,!0,!1),o.texts[1]=Util.newTextField("下の１〜９の数字キーで入力しよう",Util.width/20,FontColor,.5,.5,!0,!1),o.texts.forEach(function(t){GameObject.baseDisplay.addChild(t)}),o.button=new Button(null,0,0,.5,.5,1,1,0,0,-1,!0,o.onTap,o),o}return __extends(e,t),e.prototype.onDestroy=function(){this.rectFilter.destroy(),this.rectFilter=null,this.texts.forEach(function(t){t.parent.removeChild(t)}),this.texts=null,this.button.destroy(),e.I=null},e.prototype.update=function(){},e.prototype.onTap=function(){e.I&&e.I.destroy()},e.I=null,e}(GameObject);__reflect(StartMessage.prototype,"StartMessage");