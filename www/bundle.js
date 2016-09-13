/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(2);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	var _mongo = __webpack_require__(7);
	
	var _app = __webpack_require__(8);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _profile = __webpack_require__(11);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _register = __webpack_require__(53);
	
	var _register2 = _interopRequireDefault(_register);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// Ionic Starter App
	angular.module('starter', ['ionic', _profile2.default.name, _register2.default.name]).run(function ($ionicPlatform) {
	  $ionicPlatform.ready(function () {
	    if (window.cordova && window.cordova.plugins.Keyboard) {
	      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	      // for form inputs)
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	
	      // Don't remove this line unless you know what you are doing. It stops the viewport
	      // from snapping when text inputs are focused. Ionic handles this internally for
	      // a much nicer keyboard experience.
	      cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if (window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	  });
	}).config(function ($ionicConfigProvider) {
	  $ionicConfigProvider.tabs.position("bottom");
	}).config(_app2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {(function(){var exports,_;(function(){exports={}}).call(this);(function(){(function(){var root=this;var previousUnderscore=root._;var breaker={};var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;var push=ArrayProto.push,slice=ArrayProto.slice,concat=ArrayProto.concat,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;var nativeForEach=ArrayProto.forEach,nativeMap=ArrayProto.map,nativeReduce=ArrayProto.reduce,nativeReduceRight=ArrayProto.reduceRight,nativeFilter=ArrayProto.filter,nativeEvery=ArrayProto.every,nativeSome=ArrayProto.some,nativeIndexOf=ArrayProto.indexOf,nativeLastIndexOf=ArrayProto.lastIndexOf,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind;var _=function(obj){if(obj instanceof _)return obj;if(!(this instanceof _))return new _(obj);this._wrapped=obj};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=_}exports._=_}else{root._=_}_.VERSION="1.5.2";var _isArguments=function(obj){return toString.call(obj)==="[object Arguments]"};if(!_isArguments(arguments)){_isArguments=function(obj){return!!(obj&&hasOwnProperty.call(obj,"callee")&&typeof obj.callee==="function")}}var looksLikeArray=function(obj){return obj.length===+obj.length&&(_isArguments(obj)||obj.constructor!==Object)};var each=_.each=_.forEach=function(obj,iterator,context){if(obj==null)return;if(nativeForEach&&obj.forEach===nativeForEach){obj.forEach(iterator,context)}else if(looksLikeArray(obj)){for(var i=0,length=obj.length;i<length;i++){if(iterator.call(context,obj[i],i,obj)===breaker)return}}else{var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){if(iterator.call(context,obj[keys[i]],keys[i],obj)===breaker)return}}};_.map=_.collect=function(obj,iterator,context){var results=[];if(obj==null)return results;if(nativeMap&&obj.map===nativeMap)return obj.map(iterator,context);each(obj,function(value,index,list){results.push(iterator.call(context,value,index,list))});return results};var reduceError="Reduce of empty array with no initial value";_.reduce=_.foldl=_.inject=function(obj,iterator,memo,context){var initial=arguments.length>2;if(obj==null)obj=[];if(nativeReduce&&obj.reduce===nativeReduce){if(context)iterator=_.bind(iterator,context);return initial?obj.reduce(iterator,memo):obj.reduce(iterator)}each(obj,function(value,index,list){if(!initial){memo=value;initial=true}else{memo=iterator.call(context,memo,value,index,list)}});if(!initial)throw new TypeError(reduceError);return memo};_.reduceRight=_.foldr=function(obj,iterator,memo,context){var initial=arguments.length>2;if(obj==null)obj=[];if(nativeReduceRight&&obj.reduceRight===nativeReduceRight){if(context)iterator=_.bind(iterator,context);return initial?obj.reduceRight(iterator,memo):obj.reduceRight(iterator)}var length=obj.length;if(!looksLikeArray(obj)){var keys=_.keys(obj);length=keys.length}each(obj,function(value,index,list){index=keys?keys[--length]:--length;if(!initial){memo=obj[index];initial=true}else{memo=iterator.call(context,memo,obj[index],index,list)}});if(!initial)throw new TypeError(reduceError);return memo};_.find=_.detect=function(obj,iterator,context){var result;any(obj,function(value,index,list){if(iterator.call(context,value,index,list)){result=value;return true}});return result};_.filter=_.select=function(obj,iterator,context){var results=[];if(obj==null)return results;if(nativeFilter&&obj.filter===nativeFilter)return obj.filter(iterator,context);each(obj,function(value,index,list){if(iterator.call(context,value,index,list))results.push(value)});return results};_.reject=function(obj,iterator,context){return _.filter(obj,function(value,index,list){return!iterator.call(context,value,index,list)},context)};_.every=_.all=function(obj,iterator,context){iterator||(iterator=_.identity);var result=true;if(obj==null)return result;if(nativeEvery&&obj.every===nativeEvery)return obj.every(iterator,context);each(obj,function(value,index,list){if(!(result=result&&iterator.call(context,value,index,list)))return breaker});return!!result};var any=_.some=_.any=function(obj,iterator,context){iterator||(iterator=_.identity);var result=false;if(obj==null)return result;if(nativeSome&&obj.some===nativeSome)return obj.some(iterator,context);each(obj,function(value,index,list){if(result||(result=iterator.call(context,value,index,list)))return breaker});return!!result};_.contains=_.include=function(obj,target){if(obj==null)return false;if(nativeIndexOf&&obj.indexOf===nativeIndexOf)return obj.indexOf(target)!=-1;return any(obj,function(value){return value===target})};_.invoke=function(obj,method){var args=slice.call(arguments,2);var isFunc=_.isFunction(method);return _.map(obj,function(value){return(isFunc?method:value[method]).apply(value,args)})};_.pluck=function(obj,key){return _.map(obj,function(value){return value[key]})};_.where=function(obj,attrs,first){if(_.isEmpty(attrs))return first?void 0:[];return _[first?"find":"filter"](obj,function(value){for(var key in attrs){if(attrs[key]!==value[key])return false}return true})};_.findWhere=function(obj,attrs){return _.where(obj,attrs,true)};_.max=function(obj,iterator,context){if(!iterator&&_.isArray(obj)&&obj[0]===+obj[0]&&obj.length<65535){return Math.max.apply(Math,obj)}if(!iterator&&_.isEmpty(obj))return-Infinity;var result={computed:-Infinity,value:-Infinity};each(obj,function(value,index,list){var computed=iterator?iterator.call(context,value,index,list):value;computed>result.computed&&(result={value:value,computed:computed})});return result.value};_.min=function(obj,iterator,context){if(!iterator&&_.isArray(obj)&&obj[0]===+obj[0]&&obj.length<65535){return Math.min.apply(Math,obj)}if(!iterator&&_.isEmpty(obj))return Infinity;var result={computed:Infinity,value:Infinity};each(obj,function(value,index,list){var computed=iterator?iterator.call(context,value,index,list):value;computed<result.computed&&(result={value:value,computed:computed})});return result.value};_.shuffle=function(obj){var rand;var index=0;var shuffled=[];each(obj,function(value){rand=_.random(index++);shuffled[index-1]=shuffled[rand];shuffled[rand]=value});return shuffled};_.sample=function(obj,n,guard){if(arguments.length<2||guard){return obj[_.random(obj.length-1)]}return _.shuffle(obj).slice(0,Math.max(0,n))};var lookupIterator=function(value){return _.isFunction(value)?value:function(obj){return obj[value]}};_.sortBy=function(obj,value,context){var iterator=lookupIterator(value);return _.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iterator.call(context,value,index,list)}}).sort(function(left,right){var a=left.criteria;var b=right.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1}return left.index-right.index}),"value")};var group=function(behavior){return function(obj,value,context){var result={};var iterator=value==null?_.identity:lookupIterator(value);each(obj,function(value,index){var key=iterator.call(context,value,index,obj);behavior(result,key,value)});return result}};_.groupBy=group(function(result,key,value){(_.has(result,key)?result[key]:result[key]=[]).push(value)});_.indexBy=group(function(result,key,value){result[key]=value});_.countBy=group(function(result,key){_.has(result,key)?result[key]++:result[key]=1});_.sortedIndex=function(array,obj,iterator,context){iterator=iterator==null?_.identity:lookupIterator(iterator);var value=iterator.call(context,obj);var low=0,high=array.length;while(low<high){var mid=low+high>>>1;iterator.call(context,array[mid])<value?low=mid+1:high=mid}return low};_.toArray=function(obj){if(!obj)return[];if(_.isArray(obj))return slice.call(obj);if(looksLikeArray(obj))return _.map(obj,_.identity);return _.values(obj)};_.size=function(obj){if(obj==null)return 0;return looksLikeArray(obj)?obj.length:_.keys(obj).length};_.first=_.head=_.take=function(array,n,guard){if(array==null)return void 0;return n==null||guard?array[0]:slice.call(array,0,n)};_.initial=function(array,n,guard){return slice.call(array,0,array.length-(n==null||guard?1:n))};_.last=function(array,n,guard){if(array==null)return void 0;if(n==null||guard){return array[array.length-1]}else{return slice.call(array,Math.max(array.length-n,0))}};_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,n==null||guard?1:n)};_.compact=function(array){return _.filter(array,_.identity)};var flatten=function(input,shallow,output){if(shallow&&_.every(input,_.isArray)){return concat.apply(output,input)}each(input,function(value){if(_.isArray(value)||_.isArguments(value)){shallow?push.apply(output,value):flatten(value,shallow,output)}else{output.push(value)}});return output};_.flatten=function(array,shallow){return flatten(array,shallow,[])};_.without=function(array){return _.difference(array,slice.call(arguments,1))};_.uniq=_.unique=function(array,isSorted,iterator,context){if(_.isFunction(isSorted)){context=iterator;iterator=isSorted;isSorted=false}var initial=iterator?_.map(array,iterator,context):array;var results=[];var seen=[];each(initial,function(value,index){if(isSorted?!index||seen[seen.length-1]!==value:!_.contains(seen,value)){seen.push(value);results.push(array[index])}});return results};_.union=function(){return _.uniq(_.flatten(arguments,true))};_.intersection=function(array){var rest=slice.call(arguments,1);return _.filter(_.uniq(array),function(item){return _.every(rest,function(other){return _.indexOf(other,item)>=0})})};_.difference=function(array){var rest=concat.apply(ArrayProto,slice.call(arguments,1));return _.filter(array,function(value){return!_.contains(rest,value)})};_.zip=function(){var length=_.max(_.pluck(arguments,"length").concat(0));var results=new Array(length);for(var i=0;i<length;i++){results[i]=_.pluck(arguments,""+i)}return results};_.object=function(list,values){if(list==null)return{};var result={};for(var i=0,length=list.length;i<length;i++){if(values){result[list[i]]=values[i]}else{result[list[i][0]]=list[i][1]}}return result};_.indexOf=function(array,item,isSorted){if(array==null)return-1;var i=0,length=array.length;if(isSorted){if(typeof isSorted=="number"){i=isSorted<0?Math.max(0,length+isSorted):isSorted}else{i=_.sortedIndex(array,item);return array[i]===item?i:-1}}if(nativeIndexOf&&array.indexOf===nativeIndexOf)return array.indexOf(item,isSorted);for(;i<length;i++)if(array[i]===item)return i;return-1};_.lastIndexOf=function(array,item,from){if(array==null)return-1;var hasIndex=from!=null;if(nativeLastIndexOf&&array.lastIndexOf===nativeLastIndexOf){return hasIndex?array.lastIndexOf(item,from):array.lastIndexOf(item)}var i=hasIndex?from:array.length;while(i--)if(array[i]===item)return i;return-1};_.range=function(start,stop,step){if(arguments.length<=1){stop=start||0;start=0}step=arguments[2]||1;var length=Math.max(Math.ceil((stop-start)/step),0);var idx=0;var range=new Array(length);while(idx<length){range[idx++]=start;start+=step}return range};var ctor=function(){};_.bind=function(func,context){var args,bound;if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError;args=slice.call(arguments,2);return bound=function(){if(!(this instanceof bound))return func.apply(context,args.concat(slice.call(arguments)));ctor.prototype=func.prototype;var self=new ctor;ctor.prototype=null;var result=func.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result)return result;return self}};_.partial=function(func){var args=slice.call(arguments,1);return function(){return func.apply(this,args.concat(slice.call(arguments)))}};_.bindAll=function(obj){var funcs=slice.call(arguments,1);if(funcs.length===0)throw new Error("bindAll must be passed function names");each(funcs,function(f){obj[f]=_.bind(obj[f],obj)});return obj};_.memoize=function(func,hasher){var memo={};hasher||(hasher=_.identity);return function(){var key=hasher.apply(this,arguments);return _.has(memo,key)?memo[key]:memo[key]=func.apply(this,arguments)}};_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args)},wait)};_.defer=function(func){return _.delay.apply(_,[func,1].concat(slice.call(arguments,1)))};_.throttle=function(func,wait,options){var context,args,result;var timeout=null;var previous=0;options||(options={});var later=function(){previous=options.leading===false?0:new Date;timeout=null;result=func.apply(context,args)};return function(){var now=new Date;if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args)}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining)}return result}};_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result;return function(){context=this;args=arguments;timestamp=new Date;var later=function(){var last=new Date-timestamp;if(last<wait){timeout=setTimeout(later,wait-last)}else{timeout=null;if(!immediate)result=func.apply(context,args)}};var callNow=immediate&&!timeout;if(!timeout){timeout=setTimeout(later,wait)}if(callNow)result=func.apply(context,args);return result}};_.once=function(func){var ran=false,memo;return function(){if(ran)return memo;ran=true;memo=func.apply(this,arguments);func=null;return memo}};_.wrap=function(func,wrapper){return function(){var args=[func];push.apply(args,arguments);return wrapper.apply(this,args)}};_.compose=function(){var funcs=arguments;return function(){var args=arguments;for(var i=funcs.length-1;i>=0;i--){args=[funcs[i].apply(this,args)]}return args[0]}};_.after=function(times,func){return function(){if(--times<1){return func.apply(this,arguments)}}};_.keys=nativeKeys||function(obj){if(obj!==Object(obj))throw new TypeError("Invalid object");var keys=[];for(var key in obj)if(_.has(obj,key))keys.push(key);return keys};_.values=function(obj){var keys=_.keys(obj);var length=keys.length;var values=new Array(length);for(var i=0;i<length;i++){values[i]=obj[keys[i]]}return values};_.pairs=function(obj){var keys=_.keys(obj);var length=keys.length;var pairs=new Array(length);for(var i=0;i<length;i++){pairs[i]=[keys[i],obj[keys[i]]]}return pairs};_.invert=function(obj){var result={};var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){result[obj[keys[i]]]=keys[i]}return result};_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key)}return names.sort()};_.extend=function(obj){each(slice.call(arguments,1),function(source){if(source){for(var prop in source){obj[prop]=source[prop]}}});return obj};_.pick=function(obj){var copy={};var keys=concat.apply(ArrayProto,slice.call(arguments,1));each(keys,function(key){if(key in obj)copy[key]=obj[key]});return copy};_.omit=function(obj){var copy={};var keys=concat.apply(ArrayProto,slice.call(arguments,1));for(var key in obj){if(!_.contains(keys,key))copy[key]=obj[key]}return copy};_.defaults=function(obj){each(slice.call(arguments,1),function(source){if(source){for(var prop in source){if(obj[prop]===void 0)obj[prop]=source[prop]}}});return obj};_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj)};_.tap=function(obj,interceptor){interceptor(obj);return obj};var eq=function(a,b,aStack,bStack){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return a===b;if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;var className=toString.call(a);if(className!=toString.call(b))return false;switch(className){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:a==0?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if(typeof a!="object"||typeof b!="object")return false;var length=aStack.length;while(length--){if(aStack[length]==a)return bStack[length]==b}var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)){return false}aStack.push(a);bStack.push(b);var size=0,result=true;if(className=="[object Array]"){size=a.length;result=size==b.length;if(result){while(size--){if(!(result=eq(a[size],b[size],aStack,bStack)))break}}}else{for(var key in a){if(_.has(a,key)){size++;if(!(result=_.has(b,key)&&eq(a[key],b[key],aStack,bStack)))break}}if(result){for(key in b){if(_.has(b,key)&&!size--)break}result=!size}}aStack.pop();bStack.pop();return result};_.isEqual=function(a,b){return eq(a,b,[],[])};_.isEmpty=function(obj){if(obj==null)return true;if(_.isArray(obj)||_.isString(obj))return obj.length===0;for(var key in obj)if(_.has(obj,key))return false;return true};_.isElement=function(obj){return!!(obj&&obj.nodeType===1)};_.isArray=nativeIsArray||function(obj){return toString.call(obj)=="[object Array]"};_.isObject=function(obj){return obj===Object(obj)};each(["Arguments","Function","String","Number","Date","RegExp"],function(name){_["is"+name]=function(obj){return toString.call(obj)=="[object "+name+"]"}});if(!_.isArguments(arguments)){_.isArguments=function(obj){return!!(obj&&_.has(obj,"callee"))}}if(true){_.isFunction=function(obj){return typeof obj==="function"}}_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj))};_.isNaN=function(obj){return _.isNumber(obj)&&obj!=+obj};_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)=="[object Boolean]"};_.isNull=function(obj){return obj===null};_.isUndefined=function(obj){return obj===void 0};_.has=function(obj,key){return hasOwnProperty.call(obj,key)};_.noConflict=function(){root._=previousUnderscore;return this};_.identity=function(value){return value};_.times=function(n,iterator,context){var accum=Array(Math.max(0,n));for(var i=0;i<n;i++)accum[i]=iterator.call(context,i);return accum};_.random=function(min,max){if(max==null){max=min;min=0}return min+Math.floor(Math.random()*(max-min+1))};var entityMap={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};entityMap.unescape=_.invert(entityMap.escape);var entityRegexes={escape:new RegExp("["+_.keys(entityMap.escape).join("")+"]","g"),unescape:new RegExp("("+_.keys(entityMap.unescape).join("|")+")","g")};_.each(["escape","unescape"],function(method){_[method]=function(string){if(string==null)return"";return(""+string).replace(entityRegexes[method],function(match){return entityMap[method][match]})}});_.result=function(object,property){if(object==null)return void 0;var value=object[property];return _.isFunction(value)?value.call(object):value};_.mixin=function(obj){each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];push.apply(args,arguments);return result.call(this,func.apply(_,args))}})};var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+"";return prefix?prefix+id:id};_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var noMatch=/(.)^/;var escapes={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};var escaper=/\\|'|\r|\n|\t|\u2028|\u2029/g;_.template=function(text,data,settings){var render;settings=_.defaults({},settings,_.templateSettings);var matcher=new RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join("|")+"|$","g");var index=0;var source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escaper,function(match){return"\\"+escapes[match]});if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'"}if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'"}if(evaluate){source+="';\n"+evaluate+"\n__p+='"}index=offset+match.length;return match});source+="';\n";if(!settings.variable)source="with(obj||{}){\n"+source+"}\n";source="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+source+"return __p;\n";try{render=new Function(settings.variable||"obj","_",source)}catch(e){e.source=source;throw e}if(data)return render(data,_);var template=function(data){return render.call(this,data,_)};template.source="function("+(settings.variable||"obj")+"){\n"+source+"}";return template};_.chain=function(obj){return _(obj).chain()};var result=function(obj){return this._chain?_(obj).chain():obj};_.mixin(_);each(["pop","push","reverse","shift","sort","splice","unshift"],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;method.apply(obj,arguments);if((name=="shift"||name=="splice")&&obj.length===0)delete obj[0];return result.call(this,obj)}});each(["concat","join","slice"],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result.call(this,method.apply(this._wrapped,arguments))}});_.extend(_.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this)}).call(this);(function(){_=exports._}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.underscore={},{_:_})})();(function(){var _=Package["underscore"]._;var config=this.__meteor_runtime_config__||{};__meteor_runtime_config__=_.defaults({},config,{meteorEnv:{},DDP_DEFAULT_CONNECTION_URL:"http://localhost:3000"})}).call(this);(function(){var _=Package.underscore._;var global,meteorEnv,Meteor;(function(){global=this}).call(this);(function(){meteorEnv=__meteor_runtime_config__.meteorEnv;Meteor={isProduction:meteorEnv.NODE_ENV==="production",isDevelopment:meteorEnv.NODE_ENV!=="production",isClient:true,isServer:false,isCordova:false};if(typeof __meteor_runtime_config__==="object"&&__meteor_runtime_config__.PUBLIC_SETTINGS){Meteor.settings={public:__meteor_runtime_config__.PUBLIC_SETTINGS}}}).call(this);(function(){if(Meteor.isServer)var Future=Npm.require("fibers/future");if(typeof __meteor_runtime_config__==="object"&&__meteor_runtime_config__.meteorRelease){Meteor.release=__meteor_runtime_config__.meteorRelease}_.extend(Meteor,{_get:function(obj){for(var i=1;i<arguments.length;i++){if(!(arguments[i]in obj))return undefined;obj=obj[arguments[i]]}return obj},_ensure:function(obj){for(var i=1;i<arguments.length;i++){var key=arguments[i];if(!(key in obj))obj[key]={};obj=obj[key]}return obj},_delete:function(obj){var stack=[obj];var leaf=true;for(var i=1;i<arguments.length-1;i++){var key=arguments[i];if(!(key in obj)){leaf=false;break}obj=obj[key];if(typeof obj!=="object")break;stack.push(obj)}for(var i=stack.length-1;i>=0;i--){var key=arguments[i+1];if(leaf)leaf=false;else for(var other in stack[i][key])return;delete stack[i][key]}},wrapAsync:function(fn,context){return function(){var self=context||this;var newArgs=_.toArray(arguments);var callback;for(var i=newArgs.length-1;i>=0;--i){var arg=newArgs[i];var type=typeof arg;if(type!=="undefined"){if(type==="function"){callback=arg}break}}if(!callback){if(Meteor.isClient){callback=logErr}else{var fut=new Future;callback=fut.resolver()}++i}newArgs[i]=Meteor.bindEnvironment(callback);var result=fn.apply(self,newArgs);return fut?fut.wait():result}},_inherits:function(Child,Parent){for(var key in Parent){if(_.has(Parent,key))Child[key]=Parent[key]}var Middle=function(){this.constructor=Child};Middle.prototype=Parent.prototype;Child.prototype=new Middle;Child.__super__=Parent.prototype;return Child}});var warnedAboutWrapAsync=false;Meteor._wrapAsync=function(fn,context){if(!warnedAboutWrapAsync){Meteor._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync");warnedAboutWrapAsync=true}return Meteor.wrapAsync.apply(Meteor,arguments)};function logErr(err){if(err){return Meteor._debug("Exception in callback of async function",err.stack?err.stack:err)}}}).call(this);(function(){"use strict";var global=this;function useSetImmediate(){if(!global.setImmediate)return null;else{var setImmediate=function(fn){global.setImmediate(fn)};setImmediate.implementation="setImmediate";return setImmediate}}function usePostMessage(){if(!global.postMessage||global.importScripts){return null}var postMessageIsAsynchronous=true;var oldOnMessage=global.onmessage;global.onmessage=function(){postMessageIsAsynchronous=false};global.postMessage("","*");global.onmessage=oldOnMessage;if(!postMessageIsAsynchronous)return null;var funcIndex=0;var funcs={};var MESSAGE_PREFIX="Meteor._setImmediate."+Math.random()+".";function isStringAndStartsWith(string,putativeStart){return typeof string==="string"&&string.substring(0,putativeStart.length)===putativeStart}function onGlobalMessage(event){if(event.source===global&&isStringAndStartsWith(event.data,MESSAGE_PREFIX)){var index=event.data.substring(MESSAGE_PREFIX.length);try{if(funcs[index])funcs[index]()}finally{delete funcs[index]}}}if(global.addEventListener){global.addEventListener("message",onGlobalMessage,false)}else{global.attachEvent("onmessage",onGlobalMessage)}var setImmediate=function(fn){++funcIndex;funcs[funcIndex]=fn;global.postMessage(MESSAGE_PREFIX+funcIndex,"*")};setImmediate.implementation="postMessage";return setImmediate}function useTimeout(){var setImmediate=function(fn){global.setTimeout(fn,0)};setImmediate.implementation="setTimeout";return setImmediate}Meteor._setImmediate=useSetImmediate()||usePostMessage()||useTimeout()}).call(this);(function(){var withoutInvocation=function(f){if(Package.ddp){var _CurrentInvocation=Package.ddp.DDP._CurrentInvocation;if(_CurrentInvocation.get()&&_CurrentInvocation.get().isSimulation)throw new Error("Can't set timers inside simulations");return function(){_CurrentInvocation.withValue(null,f)}}else return f};var bindAndCatch=function(context,f){return Meteor.bindEnvironment(withoutInvocation(f),context)};_.extend(Meteor,{setTimeout:function(f,duration){return setTimeout(bindAndCatch("setTimeout callback",f),duration)},setInterval:function(f,duration){return setInterval(bindAndCatch("setInterval callback",f),duration)},clearInterval:function(x){return clearInterval(x)},clearTimeout:function(x){return clearTimeout(x)},defer:function(f){Meteor._setImmediate(bindAndCatch("defer callback",f))}})}).call(this);(function(){Meteor.makeErrorType=function(name,constructor){var errorClass=function(){if(Error.captureStackTrace){Error.captureStackTrace(this,errorClass)}else{this.stack=(new Error).stack}constructor.apply(this,arguments);this.errorType=name};Meteor._inherits(errorClass,Error);return errorClass};Meteor.Error=Meteor.makeErrorType("Meteor.Error",function(error,reason,details){var self=this;self.error=error;self.reason=reason;self.details=details;if(self.reason)self.message=self.reason+" ["+self.error+"]";else self.message="["+self.error+"]"});Meteor.Error.prototype.clone=function(){var self=this;return new Meteor.Error(self.error,self.reason,self.details)}}).call(this);(function(){Meteor._noYieldsAllowed=function(f){return f()};Meteor._SynchronousQueue=function(){var self=this;self._tasks=[];self._running=false;self._runTimeout=null};_.extend(Meteor._SynchronousQueue.prototype,{runTask:function(task){var self=this;if(!self.safeToRunTask())throw new Error("Could not synchronously run a task from a running task");self._tasks.push(task);var tasks=self._tasks;self._tasks=[];self._running=true;if(self._runTimeout){clearTimeout(self._runTimeout);self._runTimeout=null}try{while(!_.isEmpty(tasks)){var t=tasks.shift();try{t()}catch(e){if(_.isEmpty(tasks)){throw e}else{Meteor._debug("Exception in queued task: "+(e.stack||e))}}}}finally{self._running=false}},queueTask:function(task){var self=this;self._tasks.push(task);if(!self._runTimeout){self._runTimeout=setTimeout(_.bind(self.flush,self),0)}},flush:function(){var self=this;self.runTask(function(){})},drain:function(){var self=this;if(!self.safeToRunTask())return;while(!_.isEmpty(self._tasks)){self.flush()}},safeToRunTask:function(){var self=this;return!self._running}})}).call(this);(function(){var callbackQueue=[];var isLoadingCompleted=false;var isReady=false;var readyHoldsCount=0;var holdReady=function(){readyHoldsCount++};var releaseReadyHold=function(){readyHoldsCount--;maybeReady()};var maybeReady=function(){if(isReady||!isLoadingCompleted||readyHoldsCount>0)return;isReady=true;while(callbackQueue.length)callbackQueue.shift()();if(Meteor.isCordova){WebAppLocalServer.startupDidComplete()}};var loadingCompleted=function(){if(!isLoadingCompleted){isLoadingCompleted=true;maybeReady()}};if(Meteor.isCordova){holdReady();document.addEventListener("deviceready",releaseReadyHold,false)}if(document.readyState==="complete"||document.readyState==="loaded"){window.setTimeout(loadingCompleted)}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",loadingCompleted,false);window.addEventListener("load",loadingCompleted,false)}else{document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){loadingCompleted()}});window.attachEvent("load",loadingCompleted)}}Meteor.startup=function(callback){var doScroll=!document.addEventListener&&document.documentElement.doScroll;if(!doScroll||window!==top){if(isReady)callback();else callbackQueue.push(callback)}else{try{doScroll("left")}catch(error){setTimeout(function(){Meteor.startup(callback)},50);return}callback()}}}).call(this);(function(){var suppress=0;Meteor._debug=function(){if(suppress){suppress--;return}if(typeof console!=="undefined"&&typeof console.log!=="undefined"){if(arguments.length==0){console.log("")}else{if(typeof console.log.apply==="function"){var allArgumentsOfTypeString=true;for(var i=0;i<arguments.length;i++)if(typeof arguments[i]!=="string")allArgumentsOfTypeString=false;if(allArgumentsOfTypeString)console.log.apply(console,[Array.prototype.join.call(arguments," ")]);else console.log.apply(console,arguments)}else if(typeof Function.prototype.bind==="function"){var log=Function.prototype.bind.call(console.log,console);log.apply(console,arguments)}else{Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}}}};Meteor._suppress_log=function(count){suppress+=count};Meteor._suppressed_log_expected=function(){return suppress!==0}}).call(this);(function(){Meteor._escapeRegExp=function(string){return String(string).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}).call(this);(function(){var TEST_METADATA_STR;if(Meteor.isClient){TEST_METADATA_STR=meteorEnv.TEST_METADATA}else{TEST_METADATA_STR=process.env.TEST_METADATA}var TEST_METADATA=JSON.parse(TEST_METADATA_STR||"{}");var testDriverPackageName=TEST_METADATA.driverPackage;Meteor.isTest=!!TEST_METADATA.isTest;Meteor.isAppTest=!!TEST_METADATA.isAppTest;Meteor.isPackageTest=!!testDriverPackageName&&!Meteor.isTest&&!Meteor.isAppTest;if(typeof testDriverPackageName==="string"){Meteor.startup(function(){var testDriverPackage=Package[testDriverPackageName];if(!testDriverPackage){throw new Error("Can't find test driver package: "+testDriverPackageName)}if(Meteor.isClient){if(typeof testDriverPackage.runTests!=="function"){throw new Error("Test driver package "+testDriverPackageName+" missing `runTests` export")}testDriverPackage.runTests()}else{if(typeof testDriverPackage.start==="function"){testDriverPackage.start()}}})}}).call(this);(function(){var nextSlot=0;var currentValues=[];Meteor.EnvironmentVariable=function(){this.slot=nextSlot++};_.extend(Meteor.EnvironmentVariable.prototype,{get:function(){return currentValues[this.slot]},getOrNullIfOutsideFiber:function(){return this.get()},withValue:function(value,func){var saved=currentValues[this.slot];try{currentValues[this.slot]=value;var ret=func()}finally{currentValues[this.slot]=saved}return ret}});Meteor.bindEnvironment=function(func,onException,_this){var boundValues=_.clone(currentValues);if(!onException||typeof onException==="string"){var description=onException||"callback of async function";
	onException=function(error){Meteor._debug("Exception in "+description+":",error&&error.stack||error)}}return function(){var savedValues=currentValues;try{currentValues=boundValues;var ret=func.apply(_this,_.toArray(arguments))}catch(e){onException(e)}finally{currentValues=savedValues}return ret}};Meteor._nodeCodeMustBeInFiber=function(){}}).call(this);(function(){Meteor.absoluteUrl=function(path,options){if(!options&&typeof path==="object"){options=path;path=undefined}options=_.extend({},Meteor.absoluteUrl.defaultOptions,options||{});var url=options.rootUrl;if(!url)throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment");if(!/^http[s]?:\/\//i.test(url))url="http://"+url;if(!/\/$/.test(url))url+="/";if(path)url+=path;if(options.secure&&/^http:/.test(url)&&!/http:\/\/localhost[:\/]/.test(url)&&!/http:\/\/127\.0\.0\.1[:\/]/.test(url))url=url.replace(/^http:/,"https:");if(options.replaceLocalhost)url=url.replace(/^http:\/\/localhost([:\/].*)/,"http://127.0.0.1$1");return url};Meteor.absoluteUrl.defaultOptions={};if(typeof __meteor_runtime_config__==="object"&&__meteor_runtime_config__.ROOT_URL)Meteor.absoluteUrl.defaultOptions.rootUrl=__meteor_runtime_config__.ROOT_URL;Meteor._relativeToSiteRootUrl=function(link){if(typeof __meteor_runtime_config__==="object"&&link.substr(0,1)==="/")link=(__meteor_runtime_config__.ROOT_URL_PATH_PREFIX||"")+link;return link}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.meteor={},{Meteor:Meteor,global:global,meteorEnv:meteorEnv})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var makeInstaller,meteorInstall;makeInstaller=function(options){options=options||{};var defaultExtensions=options.extensions||[".js",".json"];var onInstall=options.onInstall;var override=options.override;var fallback=options.fallback;var hasOwn={}.hasOwnProperty;var root=new File("/",new File("/.."));var rootRequire=makeRequire(root);function install(tree,options){if(isObject(tree)){fileMergeContents(root,tree,options);if(isFunction(onInstall)){onInstall(rootRequire)}}return rootRequire}function Module(id){this.id=id;this.children=[]}Module.prototype.resolve=function(id){return this.require.resolve(id)};install.Module=Module;function getOwn(obj,key){return hasOwn.call(obj,key)&&obj[key]}function isObject(value){return value&&typeof value==="object"}function isFunction(value){return typeof value==="function"}function isString(value){return typeof value==="string"}function makeRequire(file){function require(id){var result=fileResolve(file,id);if(result){return fileEvaluate(result,file.m)}var error=new Error("Cannot find module '"+id+"'");if(isFunction(fallback)){return fallback(id,file.m.id,error)}throw error}require.resolve=function(id){var f=fileResolve(file,id);if(f)return f.m.id;var error=new Error("Cannot find module '"+id+"'");if(fallback&&isFunction(fallback.resolve)){return fallback.resolve(id,file.m.id,error)}throw error};return require}function File(name,parent){var file=this;file.p=parent=parent||null;file.m=new Module(name)}function fileEvaluate(file,parentModule){var contents=file&&file.c;var module=file.m;if(!hasOwn.call(module,"exports")){if(parentModule){module.parent=parentModule;var children=parentModule.children;if(Array.isArray(children)){children.push(module)}}if(!isFunction(module.useNode)||!module.useNode()){contents(module.require=module.require||makeRequire(file),module.exports={},module,file.m.id,file.p.m.id)}module.loaded=true}if(isFunction(module.runModuleSetters)){module.runModuleSetters()}return module.exports}function fileIsDirectory(file){return file&&isObject(file.c)}function fileMergeContents(file,contents,options){if(Array.isArray(contents)){var deps=[];contents.forEach(function(item){if(isString(item)){deps.push(item)}else if(isFunction(item)){contents=item}});if(isFunction(contents)){contents.d=deps}else{contents=null}}else if(isFunction(contents)){contents.d=contents.d||[]}else if(!isString(contents)&&!isObject(contents)){contents=null}if(contents){file.c=file.c||(isObject(contents)?{}:contents);if(isObject(contents)&&fileIsDirectory(file)){Object.keys(contents).forEach(function(key){if(key===".."){child=file.p}else{var child=getOwn(file.c,key);if(!child){child=file.c[key]=new File(file.m.id.replace(/\/*$/,"/")+key,file);child.o=options}}fileMergeContents(child,contents[key],options)})}}}function fileGetExtensions(file){return file.o&&file.o.extensions||defaultExtensions}function fileAppendIdPart(file,part,extensions){while(file&&!fileIsDirectory(file)){file=file.p}if(!file||!part||part==="."){return file}if(part===".."){return file.p}var exactChild=getOwn(file.c,part);if(extensions&&(!exactChild||fileIsDirectory(exactChild))){for(var e=0;e<extensions.length;++e){var child=getOwn(file.c,part+extensions[e]);if(child){return child}}}return exactChild}function fileAppendId(file,id,extensions){var parts=id.split("/");parts.every(function(part,i){return file=i<parts.length-1?fileAppendIdPart(file,part):fileAppendIdPart(file,part,extensions)});return file}function fileResolve(file,id,seenDirFiles){var extensions=fileGetExtensions(file);file=id.charAt(0)==="/"?fileAppendId(root,id,extensions):id.charAt(0)==="."?fileAppendId(file,id,extensions):nodeModulesLookup(file,id,extensions);while(fileIsDirectory(file)){seenDirFiles=seenDirFiles||[];if(seenDirFiles.indexOf(file)<0){seenDirFiles.push(file);var pkgJsonFile=fileAppendIdPart(file,"package.json");var main=pkgJsonFile&&fileEvaluate(pkgJsonFile).main;if(isString(main)){file=fileAppendId(file,main,extensions)||fileResolve(file,main,seenDirFiles);if(file){continue}}}file=fileAppendIdPart(file,"index.js")}if(file&&isString(file.c)){file=fileResolve(file,file.c,seenDirFiles)}return file}function nodeModulesLookup(file,id,extensions){if(isFunction(override)){id=override(id,file.m.id)}if(isString(id)){for(var resolved;file&&!resolved;file=file.p){resolved=fileIsDirectory(file)&&fileAppendId(file,"node_modules/"+id,extensions)}return resolved}}return install};if(true){exports.makeInstaller=makeInstaller}(function(){var options={};var hasOwn=options.hasOwnProperty;var topLevelIdPattern=/^[^.\/]/;options.fallback=function(id,parentId,error){if(topLevelIdPattern.test(id)){if(typeof Npm==="object"&&typeof Npm.require==="function"){return Npm.require(id)}}throw error};options.fallback.resolve=function(id,parentId,error){if(Meteor.isServer&&topLevelIdPattern.test(id)){return id}throw error};meteorInstall=makeInstaller(options);var Mp=meteorInstall.Module.prototype;if(Meteor.isServer){Mp.useNode=function(){if(typeof npmRequire!=="function"){return false}var parts=this.id.split("/");var start=0;if(parts[start]==="")++start;if(parts[start]==="node_modules"&&parts[start+1]==="meteor"){start+=2}if(parts.indexOf("node_modules",start)<0){return false}try{npmRequire.resolve(this.id)}catch(e){return false}this.exports=npmRequire(this.id);return true}}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["modules-runtime"]={},{meteorInstall:meteorInstall})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var meteorInstall=Package["modules-runtime"].meteorInstall;var Buffer,process;var require=meteorInstall({node_modules:{meteor:{modules:{"client.js":["./install-packages.js","./stubs.js","./buffer.js","./process.js","reify/lib/runtime","./css",function(require,exports,module){require("./install-packages.js");require("./stubs.js");require("./buffer.js");require("./process.js");require("reify/lib/runtime").enable(module.constructor);exports.addStyles=require("./css").addStyles}],"buffer.js":["buffer",function(require){try{Buffer=global.Buffer||require("buffer").Buffer}catch(noBuffer){}}],"css.js":function(require,exports){var doc=document;var head=doc.getElementsByTagName("head").item(0);exports.addStyles=function(css){var style=doc.createElement("style");style.setAttribute("type","text/css");var internetExplorerSheetObject=style.sheet||style.styleSheet;if(internetExplorerSheetObject){internetExplorerSheetObject.cssText=css}else{style.appendChild(doc.createTextNode(css))}return head.appendChild(style)}},"install-packages.js":function(require,exports,module){function install(name,mainModule){var meteorDir={};if(mainModule){meteorDir[name+".js"]=[mainModule,function(require,e,module){module.exports=require(mainModule)}]}else{meteorDir[name+".js"]=function(r,e,module){module.exports=Package[name]}}meteorInstall({node_modules:{meteor:meteorDir}})}install("underscore");install("meteor");install("modules-runtime");install("modules","meteor/modules/client.js");install("base64");install("ejson");install("check","meteor/check/match.js");install("promise","meteor/promise/client.js");install("ecmascript-runtime","meteor/ecmascript-runtime/runtime.js");install("babel-compiler");install("ecmascript");install("babel-runtime");install("random");install("tracker");install("retry");install("id-map");install("ddp-common");install("diff-sequence");install("mongo-id");install("ddp-client");install("ddp");install("ordered-dict");install("geojson-utils","meteor/geojson-utils/main.js");install("minimongo");install("ddp-server");install("allow-deny");install("mongo")},"process.js":["process",function(require,exports,module){try{process=global.process||require("process")}catch(noProcess){process={}}if(Meteor.isServer){meteorInstall({node_modules:{"process.js":function(r,e,module){module.exports=process}}})}else{process.platform="browser";process.nextTick=process.nextTick||Meteor._setImmediate}if(typeof process.env!=="object"){process.env={}}_.extend(process.env,meteorEnv)}],"stubs.js":["meteor-node-stubs",function(require){try{require("meteor-node-stubs")}catch(noStubs){}}],node_modules:{reify:{lib:{"runtime.js":["./entry.js","./utils.js",function(require,exports,module){var Entry=require("./entry.js").Entry;var utils=require("./utils.js");exports.enable=function(Module){var Mp=Module.prototype;if(typeof Mp.import==="function"&&typeof Mp.export==="function"){return Module}Mp.resolve=Mp.resolve||function resolve(id){throw new Error("Module.prototype.resolve not implemented")};Mp.runModuleSetters=function runModuleSetters(valueToPassThrough){var entry=Entry.get(this.id);if(entry){entry.runModuleSetters(this)}return valueToPassThrough};function setESModule(module){var exports=module.exports;if(exports&&typeof exports==="object"){exports.__esModule=true}}Mp.import=function(id,setters){var module=this;setESModule(module);var absoluteId=module.resolve(id);if(setters&&typeof setters==="object"){var entry=Entry.getOrCreate(absoluteId);entry.addSetters(module,setters)}var countBefore=entry&&entry.runCount;var exports=typeof module.require==="function"?module.require(absoluteId):require(absoluteId);if(entry&&entry.runCount===countBefore){entry.runModuleSetters({id:absoluteId,exports:exports,getExportByName:Mp.getExportByName})}};Mp.export=function(getters){var module=this;setESModule(module);if(utils.isPlainObject(getters)){Entry.getOrCreate(module.id).addGetters(getters)}if(module.loaded){module.runModuleSetters()}};Mp.getExportByName=function(name){var exports=this.exports;if(name==="*"){return exports}if(name==="default"&&!(exports&&typeof exports==="object"&&exports.__esModule&&"default"in exports)){return exports}return exports&&exports[name]};return Module}}],"entry.js":["./utils.js",function(require,exports,module){var hasOwn=Object.prototype.hasOwnProperty;var entryMap=Object.create(null);var utils=require("./utils.js");function Entry(id){this.id=id;this.runCount=0;this.setters=Object.create(null);this.getters=Object.create(null)}var Ep=Entry.prototype;Entry.get=function(id){return entryMap[id]||null};Entry.getOrCreate=function(id){return entryMap[id]=entryMap[id]||new Entry(id)};Ep.addSetters=function(parent,setters){var entry=this;Object.keys(setters).forEach(function(name){var setter=setters[name];if(typeof setter==="function"&&name!=="__esModule"){setter.parent=parent;(entry.setters[name]=entry.setters[name]||[]).push(setter)}})};Ep.addGetters=function(getters){var entry=this;Object.keys(getters).forEach(function(name){var getter=getters[name];if(typeof getter==="function"&&name!=="__esModule"){entry.getters[name]=getter}})};function runModuleSetters(module){var entry=entryMap[module.id];if(entry){entry.runModuleSetters(module)}}function runModuleGetters(module){var entry=entryMap[module.id];return entry?entry.runModuleGetters(module):0}Ep.runModuleGetters=function(module){var entry=this;var changeCount=0;Object.keys(entry.getters).forEach(function(name){if(entry.runGetter(module,name)){++changeCount}});return changeCount};Ep.runGetter=function(module,name){if(!hasOwn.call(this.getters,name)){return false}var getter=this.getters[name];try{var value=getter.call(module)}catch(e){}var exports=module.exports;if(!hasOwn.call(exports,name)||exports[name]!==value){exports[name]=value;return true}return false};Ep.runModuleSetters=function(module){var entry=this;var names=Object.keys(entry.setters);entry.runModuleGetters(module);function forEachSetter(callback,context){names.forEach(function(name){entry.setters[name].forEach(function(setter){var value=module.getExportByName(name);if(name==="*"){Object.keys(value).forEach(function(name){call(setter,value[name],name)})}else{call(setter,value,name)}})});function call(setter,value,name){if(name==="__esModule"){return}setter.last=setter.last||Object.create(null);if(!hasOwn.call(setter.last,name)||setter.last[name]!==value){return callback.apply(context,arguments)}}}var settersToCall=[];var relevantParents;var parentSnapshots;forEachSetter(function(setter,value,name){var parent=setter.parent;parentSnapshots=parentSnapshots||Object.create(null);if(!hasOwn.call(parentSnapshots,parent.id)){relevantParents=relevantParents||Object.create(null);relevantParents[parent.id]=parent;if(utils.isPlainObject(parent.exports)){parentSnapshots[parent.id]=utils.assign({},parent.exports)}else{parentSnapshots[parent.id]=parent.exports}}settersToCall.push(setter,value,name)});for(var i=0;i<settersToCall.length;i+=3){var setter=settersToCall[i];var value=settersToCall[i+1];var name=settersToCall[i+2];setter.call(module,setter.last[name]=value,name)}++entry.runCount;if(!relevantParents){return}Object.keys(relevantParents).forEach(function(id){var parent=relevantParents[id];if(runModuleGetters(parent)>0){return runModuleSetters(parent)}var exports=parent.exports;var snapshot=parentSnapshots[parent.id];if(utils.shallowObjEqual(exports,snapshot)){return}runModuleSetters(parent)})};exports.Entry=Entry}],"utils.js":function(require,exports){var hasOwn=Object.prototype.hasOwnProperty;var objToStr=Object.prototype.toString;var objStr=objToStr.call({});function isPlainObject(value){return objToStr.call(value)===objStr}exports.isPlainObject=isPlainObject;exports.assign=Object.assign||function(obj){var argc=arguments.length;for(var i=1;i<argc;++i){var arg=arguments[i];if(arg&&typeof arg==="object"){var keys=Object.keys(arg);for(var k=0;k<keys.length;++k){var key=keys[k];obj[key]=arg[key]}}}return obj};exports.shallowObjEqual=function(a,b){if(a===b){return true}if(!isPlainObject(a)||!isPlainObject(b)){return false}var aKeys=Object.keys(a);var bKeys=Object.keys(b);if(aKeys.length!==bKeys.length){return false}return aKeys.every(function(key){return hasOwn.call(b,key)&&a[key]===b[key]})}}}}}}}}},{extensions:[".js",".json"]});var exports=require("./node_modules/meteor/modules/client.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.modules=exports,{meteorInstall:meteorInstall,Buffer:Buffer,process:process})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var Promise;var require=meteorInstall({node_modules:{meteor:{promise:{"client.js":["meteor-promise","./common.js",function(require,exports){require("meteor-promise").makeCompatible(exports.Promise=require("./common.js").Promise)}],"common.js":["promise/lib/es6-extensions",function(require,exports){var global=this;if(typeof global.Promise==="function"){exports.Promise=global.Promise}else{exports.Promise=require("promise/lib/es6-extensions")}exports.Promise.prototype.done=function(onFulfilled,onRejected){var self=this;if(arguments.length>0){self=this.then.apply(this,arguments)}self.then(null,function(err){Meteor._setImmediate(function(){throw err})})}}],node_modules:{"meteor-promise":{"package.json":function(require,exports){exports.name="meteor-promise";exports.version="0.7.2";exports.main="promise_client.js"},"promise_client.js":function(require,exports){exports.makeCompatible=function(Promise){var es6PromiseThen=Promise.prototype.then;Promise.prototype.then=function(onResolved,onRejected){if(typeof Meteor==="object"&&typeof Meteor.bindEnvironment==="function"){return es6PromiseThen.call(this,onResolved&&Meteor.bindEnvironment(onResolved,raise),onRejected&&Meteor.bindEnvironment(onRejected,raise))}return es6PromiseThen.call(this,onResolved,onRejected)}};function raise(exception){throw exception}}},promise:{lib:{"es6-extensions.js":["./core.js",function(require,exports,module){"use strict";var Promise=require("./core.js");module.exports=Promise;var TRUE=valuePromise(true);var FALSE=valuePromise(false);var NULL=valuePromise(null);var UNDEFINED=valuePromise(undefined);var ZERO=valuePromise(0);var EMPTYSTRING=valuePromise("");function valuePromise(value){var p=new Promise(Promise._61);p._81=1;p._65=value;return p}Promise.resolve=function(value){if(value instanceof Promise)return value;if(value===null)return NULL;if(value===undefined)return UNDEFINED;if(value===true)return TRUE;if(value===false)return FALSE;if(value===0)return ZERO;if(value==="")return EMPTYSTRING;if(typeof value==="object"||typeof value==="function"){try{var then=value.then;if(typeof then==="function"){return new Promise(then.bind(value))}}catch(ex){return new Promise(function(resolve,reject){reject(ex)})}}return valuePromise(value)};Promise.all=function(arr){var args=Array.prototype.slice.call(arr);return new Promise(function(resolve,reject){if(args.length===0)return resolve([]);var remaining=args.length;function res(i,val){if(val&&(typeof val==="object"||typeof val==="function")){if(val instanceof Promise&&val.then===Promise.prototype.then){while(val._81===3){val=val._65}if(val._81===1)return res(i,val._65);if(val._81===2)reject(val._65);val.then(function(val){res(i,val)},reject);return}else{var then=val.then;if(typeof then==="function"){var p=new Promise(then.bind(val));p.then(function(val){res(i,val)},reject);return}}}args[i]=val;if(--remaining===0){resolve(args)}}for(var i=0;i<args.length;i++){res(i,args[i])}})};Promise.reject=function(value){return new Promise(function(resolve,reject){reject(value)})};Promise.race=function(values){return new Promise(function(resolve,reject){values.forEach(function(value){Promise.resolve(value).then(resolve,reject)})})};Promise.prototype["catch"]=function(onRejected){return this.then(null,onRejected)}}],"core.js":["asap/raw",function(require,exports,module){"use strict";var asap=require("asap/raw");function noop(){}var LAST_ERROR=null;var IS_ERROR={};function getThen(obj){try{return obj.then}catch(ex){LAST_ERROR=ex;return IS_ERROR}}function tryCallOne(fn,a){try{return fn(a)}catch(ex){LAST_ERROR=ex;return IS_ERROR}}function tryCallTwo(fn,a,b){try{fn(a,b)}catch(ex){LAST_ERROR=ex;return IS_ERROR}}module.exports=Promise;function Promise(fn){if(typeof this!=="object"){throw new TypeError("Promises must be constructed via new")}if(typeof fn!=="function"){throw new TypeError("not a function")}this._45=0;this._81=0;this._65=null;this._54=null;if(fn===noop)return;doResolve(fn,this)}Promise._10=null;Promise._97=null;Promise._61=noop;Promise.prototype.then=function(onFulfilled,onRejected){if(this.constructor!==Promise){return safeThen(this,onFulfilled,onRejected)}var res=new Promise(noop);handle(this,new Handler(onFulfilled,onRejected,res));return res};function safeThen(self,onFulfilled,onRejected){return new self.constructor(function(resolve,reject){var res=new Promise(noop);res.then(resolve,reject);handle(self,new Handler(onFulfilled,onRejected,res))})}function handle(self,deferred){while(self._81===3){self=self._65}if(Promise._10){Promise._10(self)}if(self._81===0){if(self._45===0){self._45=1;self._54=deferred;return}if(self._45===1){self._45=2;self._54=[self._54,deferred];return}self._54.push(deferred);return}handleResolved(self,deferred)}function handleResolved(self,deferred){asap(function(){var cb=self._81===1?deferred.onFulfilled:deferred.onRejected;if(cb===null){if(self._81===1){resolve(deferred.promise,self._65)}else{reject(deferred.promise,self._65)}return}var ret=tryCallOne(cb,self._65);if(ret===IS_ERROR){reject(deferred.promise,LAST_ERROR)}else{resolve(deferred.promise,ret)}})}function resolve(self,newValue){if(newValue===self){return reject(self,new TypeError("A promise cannot be resolved with itself."))}if(newValue&&(typeof newValue==="object"||typeof newValue==="function")){var then=getThen(newValue);if(then===IS_ERROR){return reject(self,LAST_ERROR)}if(then===self.then&&newValue instanceof Promise){self._81=3;self._65=newValue;finale(self);return}else if(typeof then==="function"){doResolve(then.bind(newValue),self);return}}self._81=1;self._65=newValue;finale(self)}function reject(self,newValue){self._81=2;self._65=newValue;if(Promise._97){Promise._97(self,newValue)}finale(self)}function finale(self){if(self._45===1){handle(self,self._54);self._54=null}if(self._45===2){for(var i=0;i<self._54.length;i++){handle(self,self._54[i])}self._54=null}}function Handler(onFulfilled,onRejected,promise){this.onFulfilled=typeof onFulfilled==="function"?onFulfilled:null;this.onRejected=typeof onRejected==="function"?onRejected:null;this.promise=promise}function doResolve(fn,promise){var done=false;var res=tryCallTwo(fn,function(value){if(done)return;done=true;resolve(promise,value)},function(reason){if(done)return;done=true;reject(promise,reason)});if(!done&&res===IS_ERROR){done=true;reject(promise,LAST_ERROR)}}}]},node_modules:{asap:{"raw.js":["domain",function(require,exports,module){"use strict";var domain;var hasSetImmediate=typeof setImmediate==="function";module.exports=rawAsap;function rawAsap(task){if(!queue.length){requestFlush();flushing=true}queue[queue.length]=task}var queue=[];var flushing=false;var index=0;var capacity=1024;function flush(){while(index<queue.length){var currentIndex=index;index=index+1;queue[currentIndex].call();if(index>capacity){for(var scan=0,newLength=queue.length-index;scan<newLength;scan++){queue[scan]=queue[scan+index]}queue.length-=index;index=0}}queue.length=0;index=0;flushing=false}rawAsap.requestFlush=requestFlush;function requestFlush(){var parentDomain=process.domain;if(parentDomain){if(!domain){domain=require("domain")}domain.active=process.domain=null}if(flushing&&hasSetImmediate){setImmediate(flush)}else{process.nextTick(flush)}if(parentDomain){domain.active=process.domain=parentDomain}}}]}}}}}}}},{extensions:[".js",".json"]});var exports=require("./node_modules/meteor/promise/client.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.promise=exports,{Promise:Promise})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var Promise=Package.promise.Promise;var meteorBabelHelpers;var require=meteorInstall({node_modules:{meteor:{"babel-runtime":{"babel-runtime.js":["meteor-babel-helpers","regenerator-runtime",function(require,exports,module){var hasOwn=Object.prototype.hasOwnProperty;var S=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=S.iterator||"@@iterator";meteorBabelHelpers=require("meteor-babel-helpers");var BabelRuntime={taggedTemplateLiteralLoose:function(strings,raw){strings.raw=raw;return strings},classCallCheck:function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}},inherits:function(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}if(superClass){if(Object.create){subClass.prototype=Object.create(superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}})}else{var F=function(){this.constructor=subClass};F.prototype=superClass.prototype;subClass.prototype=new F}Object.getOwnPropertyNames(superClass).forEach(function(k){var descriptor=Object.getOwnPropertyDescriptor(superClass,k);if(descriptor&&typeof descriptor==="object"){if(Object.getOwnPropertyDescriptor(subClass,k)){return}Object.defineProperty(subClass,k,descriptor)}})}},createClass:function(){var hasDefineProperty=false;try{Object.defineProperty({},"x",{});hasDefineProperty=true}catch(e){}function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(!hasDefineProperty){throw new Error("Your browser does not support this type of class property.  "+"For example, Internet Explorer 8 does not support getters and "+"setters.")}if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}(),typeof:function(obj){return obj&&obj.constructor===Symbol?"symbol":typeof obj},possibleConstructorReturn:function(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}var callType=typeof call;if(call&&callType==="function"||callType==="object"){return call}return self},interopRequireDefault:function(obj){return obj&&obj.__esModule?obj:{default:obj}},interopRequireWildcard:function(obj){if(obj&&obj.__esModule){return obj}var newObj={};if(obj!=null){for(var key in obj){if(hasOwn.call(obj,key)){newObj[key]=obj[key]}}}newObj["default"]=obj;return newObj},interopExportWildcard:function(obj,defaults){var newObj=defaults({},obj);delete newObj["default"];return newObj},defaults:function(obj,defaults){Object.getOwnPropertyNames(defaults).forEach(function(key){var desc=Object.getOwnPropertyDescriptor(defaults,key);if(desc&&desc.configurable&&typeof obj[key]==="undefined"){Object.defineProperty(obj,key,desc)}});return obj},extends:Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(hasOwn.call(source,key)){target[key]=source[key]}}}return target},objectWithoutProperties:function(obj,keys){var target={};outer:for(var i in obj){if(!hasOwn.call(obj,i))continue;for(var j=0;j<keys.length;j++){if(keys[j]===i)continue outer}target[i]=obj[i]}return target},objectDestructuringEmpty:function(obj){if(obj==null)throw new TypeError("Cannot destructure undefined")},bind:Function.prototype.bind||function(){var isCallable=function(value){return typeof value==="function"};var $Object=Object;var to_string=Object.prototype.toString;var array_slice=Array.prototype.slice;var array_concat=Array.prototype.concat;var array_push=Array.prototype.push;var max=Math.max;var Empty=function Empty(){};return function bind(that){var target=this;if(!isCallable(target)){throw new TypeError("Function.prototype.bind called on incompatible "+target)}var args=array_slice.call(arguments,1);var bound;var binder=function(){if(this instanceof bound){var result=target.apply(this,array_concat.call(args,array_slice.call(arguments)));if($Object(result)===result){return result}return this}else{return target.apply(that,array_concat.call(args,array_slice.call(arguments)))}};var boundLength=max(0,target.length-args.length);var boundArgs=[];for(var i=0;i<boundLength;i++){array_push.call(boundArgs,"$"+i)}bound=Function("binder","return function ("+boundArgs.join(",")+"){ return binder.apply(this, arguments); }")(binder);if(target.prototype){Empty.prototype=target.prototype;bound.prototype=new Empty;Empty.prototype=null}return bound}}(),toConsumableArray:function(arr){if(Array.isArray(arr)){for(var i=arr.length-1,arr2=Array(i+1);i>=0;--i){arr2[i]=arr[i]}return arr2}return Array.from(arr)},toArray:function(arr){return Array.isArray(arr)?arr:Array.from(arr)},slicedToArray:function(iterable,limit){if(Array.isArray(iterable)){return iterable}if(iterable){var it=iterable[iteratorSymbol]();var result=[];var info;if(typeof limit!=="number"){limit=Infinity}while(result.length<limit&&!(info=it.next()).done){result.push(info.value)}return result}throw new TypeError("Invalid attempt to destructure non-iterable instance")},slice:Array.prototype.slice};Object.keys(BabelRuntime).forEach(function(helperName){var helpers={};helpers[helperName+".js"]=function(require,exports,module){module.exports=BabelRuntime[helperName]};meteorInstall({node_modules:{"babel-runtime":{helpers:helpers}}})});meteorInstall({node_modules:{"babel-runtime":{"regenerator.js":function(r,e,module){var runtime=require("regenerator-runtime");if(typeof Promise==="function"&&typeof Promise.asyncApply==="function"){var realAsync=runtime.async;runtime.async=function(){return Promise.asyncApply(realAsync,runtime,arguments)}}module.exports=runtime}}}})}],node_modules:{"meteor-babel-helpers":{"package.json":function(require,exports){exports.name="meteor-babel-helpers";exports.version="0.0.3";exports.main="index.js"},"index.js":function(require,exports,module){function canDefineNonEnumerableProperties(){var testObj={};var testPropName="t";try{Object.defineProperty(testObj,testPropName,{enumerable:false,value:testObj});for(var k in testObj){if(k===testPropName){return false}}}catch(e){return false}return testObj[testPropName]===testObj}function sanitizeEasy(value){return value}function sanitizeHard(obj){if(Array.isArray(obj)){var newObj={};var keys=Object.keys(obj);var keyCount=keys.length;for(var i=0;i<keyCount;++i){var key=keys[i];newObj[key]=obj[key]}return newObj}return obj}meteorBabelHelpers=module.exports={sanitizeForInObject:canDefineNonEnumerableProperties()?sanitizeEasy:sanitizeHard,_sanitizeForInObjectHard:sanitizeHard}}},"regenerator-runtime":{"package.json":function(require,exports,module){exports.name="regenerator-runtime";exports.version="0.9.5";exports.main="runtime-module.js"},"runtime-module.js":["./runtime",function(require,exports,module){var g=typeof global==="object"?global:typeof window==="object"?window:typeof self==="object"?self:this;var hadRuntime=g.regeneratorRuntime&&Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime")>=0;var oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=undefined;module.exports=require("./runtime");if(hadRuntime){g.regeneratorRuntime=oldRuntime}else{try{delete g.regeneratorRuntime}catch(e){g.regeneratorRuntime=undefined}}}],"runtime.js":function(require,exports,module){!function(global){"use strict";var hasOwn=Object.prototype.hasOwnProperty;var undefined;var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var inModule=typeof module==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports=runtime}return}runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){
	var generator=Object.create((outerFn||Generator).prototype);var context=new Context(tryLocsList||[]);generator._invoke=makeInvokeMethod(innerFn,self,context);return generator}runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg)}})}runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype)}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction"}}genFun.prototype=Object.create(Gp);return genFun};runtime.awrap=function(arg){return new AwaitArgument(arg)};function AwaitArgument(arg){this.arg=arg}function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg)}else{var result=record.arg;var value=result.value;if(value instanceof AwaitArgument){return Promise.resolve(value.arg).then(function(value){invoke("next",value,resolve,reject)},function(err){invoke("throw",err,resolve,reject)})}return Promise.resolve(value).then(function(unwrapped){result.value=unwrapped;resolve(result)},reject)}}if(typeof process==="object"&&process.domain){invoke=process.domain.bind(invoke)}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject)})}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}this._invoke=enqueue}defineIteratorMethods(AsyncIterator.prototype);runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next()})};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running")}if(state===GenStateCompleted){if(method==="throw"){throw arg}return doneResult()}while(true){var delegate=context.delegate;if(delegate){if(method==="return"||method==="throw"&&delegate.iterator[method]===undefined){context.delegate=null;var returnMethod=delegate.iterator["return"];if(returnMethod){var record=tryCatch(returnMethod,delegate.iterator,arg);if(record.type==="throw"){method="throw";arg=record.arg;continue}}if(method==="return"){continue}}var record=tryCatch(delegate.iterator[method],delegate.iterator,arg);if(record.type==="throw"){context.delegate=null;method="throw";arg=record.arg;continue}method="next";arg=undefined;var info=record.arg;if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc}else{state=GenStateSuspendedYield;return info}context.delegate=null}if(method==="next"){context.sent=context._sent=arg}else if(method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw arg}if(context.dispatchException(arg)){method="next";arg=undefined}}else if(method==="return"){context.abrupt("return",arg)}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;var info={value:record.arg,done:context.done};if(record.arg===ContinueSentinel){if(context.delegate&&method==="next"){arg=undefined}}else{return info}}else if(record.type==="throw"){state=GenStateCompleted;method="throw";arg=record.arg}}}}defineIteratorMethods(Gp);Gp[iteratorSymbol]=function(){return this};Gp[toStringTagSymbol]="Generator";Gp.toString=function(){return"[object Generator]"};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1]}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3]}this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true)}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key)}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next}}next.done=true;return next}};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable)}if(typeof iterable.next==="function"){return iterable}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next}}next.value=undefined;next.done=true;return next};return next.next=next}}return{next:doneResult}}runtime.values=values;function doneResult(){return{value:undefined,done:true}}Context.prototype={constructor:Context,reset:function(skipTempReset){this.prev=0;this.next=0;this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined}}}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg}return this.rval},dispatchException:function(exception){if(this.done){throw exception}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;return!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end")}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){finallyEntry=null}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.next=finallyEntry.finallyLoc}else{this.complete(record)}return ContinueSentinel},complete:function(record,afterLoc){if(record.type==="throw"){throw record.arg}if(record.type==="break"||record.type==="continue"){this.next=record.arg}else if(record.type==="return"){this.rval=record.arg;this.next="end"}else if(record.type==="normal"&&afterLoc){this.next=afterLoc}},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel}}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};return ContinueSentinel}}}(typeof global==="object"?global:typeof window==="object"?window:typeof self==="object"?self:this)}}}}}}},{extensions:[".js",".json"]});require("./node_modules/meteor/babel-runtime/babel-runtime.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["babel-runtime"]={},{meteorBabelHelpers:meteorBabelHelpers})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var Promise=Package.promise.Promise;var Symbol,Map,Set,__g,__e;var require=meteorInstall({node_modules:{meteor:{"ecmascript-runtime":{"runtime.js":["meteor-ecmascript-runtime",function(require,exports,module){module.exports=require("meteor-ecmascript-runtime")}],node_modules:{"meteor-ecmascript-runtime":{"package.json":function(require,exports){exports.name="meteor-ecmascript-runtime";exports.version="0.2.6";exports.main="server.js"},"server.js":["core-js/es6/object","core-js/es6/array","core-js/es6/string","core-js/es6/function","core-js/es6/symbol","core-js/es6/map","core-js/es6/set",function(require,exports){require("core-js/es6/object");require("core-js/es6/array");require("core-js/es6/string");require("core-js/es6/function");Symbol=exports.Symbol=require("core-js/es6/symbol");Map=exports.Map=require("core-js/es6/map");Set=exports.Set=require("core-js/es6/set")}],node_modules:{"core-js":{es6:{"object.js":["../modules/es6.symbol","../modules/es6.object.assign","../modules/es6.object.is","../modules/es6.object.set-prototype-of","../modules/es6.object.to-string","../modules/es6.object.freeze","../modules/es6.object.seal","../modules/es6.object.prevent-extensions","../modules/es6.object.is-frozen","../modules/es6.object.is-sealed","../modules/es6.object.is-extensible","../modules/es6.object.get-own-property-descriptor","../modules/es6.object.get-prototype-of","../modules/es6.object.keys","../modules/es6.object.get-own-property-names","../modules/$.core",function(require,exports,module){require("../modules/es6.symbol");require("../modules/es6.object.assign");require("../modules/es6.object.is");require("../modules/es6.object.set-prototype-of");require("../modules/es6.object.to-string");require("../modules/es6.object.freeze");require("../modules/es6.object.seal");require("../modules/es6.object.prevent-extensions");require("../modules/es6.object.is-frozen");require("../modules/es6.object.is-sealed");require("../modules/es6.object.is-extensible");require("../modules/es6.object.get-own-property-descriptor");require("../modules/es6.object.get-prototype-of");require("../modules/es6.object.keys");require("../modules/es6.object.get-own-property-names");module.exports=require("../modules/$.core").Object}],"array.js":["../modules/es6.string.iterator","../modules/es6.array.from","../modules/es6.array.of","../modules/es6.array.species","../modules/es6.array.iterator","../modules/es6.array.copy-within","../modules/es6.array.fill","../modules/es6.array.find","../modules/es6.array.find-index","../modules/$.core",function(require,exports,module){require("../modules/es6.string.iterator");require("../modules/es6.array.from");require("../modules/es6.array.of");require("../modules/es6.array.species");require("../modules/es6.array.iterator");require("../modules/es6.array.copy-within");require("../modules/es6.array.fill");require("../modules/es6.array.find");require("../modules/es6.array.find-index");module.exports=require("../modules/$.core").Array}],"string.js":["../modules/es6.string.from-code-point","../modules/es6.string.raw","../modules/es6.string.trim","../modules/es6.string.iterator","../modules/es6.string.code-point-at","../modules/es6.string.ends-with","../modules/es6.string.includes","../modules/es6.string.repeat","../modules/es6.string.starts-with","../modules/es6.regexp.match","../modules/es6.regexp.replace","../modules/es6.regexp.search","../modules/es6.regexp.split","../modules/$.core",function(require,exports,module){require("../modules/es6.string.from-code-point");require("../modules/es6.string.raw");require("../modules/es6.string.trim");require("../modules/es6.string.iterator");require("../modules/es6.string.code-point-at");require("../modules/es6.string.ends-with");require("../modules/es6.string.includes");require("../modules/es6.string.repeat");require("../modules/es6.string.starts-with");require("../modules/es6.regexp.match");require("../modules/es6.regexp.replace");require("../modules/es6.regexp.search");require("../modules/es6.regexp.split");module.exports=require("../modules/$.core").String}],"function.js":["../modules/es6.function.name","../modules/es6.function.has-instance","../modules/$.core",function(require,exports,module){require("../modules/es6.function.name");require("../modules/es6.function.has-instance");module.exports=require("../modules/$.core").Function}],"symbol.js":["../modules/es6.symbol","../modules/$.core",function(require,exports,module){require("../modules/es6.symbol");module.exports=require("../modules/$.core").Symbol}],"map.js":["../modules/es6.object.to-string","../modules/es6.string.iterator","../modules/web.dom.iterable","../modules/es6.map","../modules/$.core",function(require,exports,module){require("../modules/es6.object.to-string");require("../modules/es6.string.iterator");require("../modules/web.dom.iterable");require("../modules/es6.map");module.exports=require("../modules/$.core").Map}],"set.js":["../modules/es6.object.to-string","../modules/es6.string.iterator","../modules/web.dom.iterable","../modules/es6.set","../modules/$.core",function(require,exports,module){require("../modules/es6.object.to-string");require("../modules/es6.string.iterator");require("../modules/web.dom.iterable");require("../modules/es6.set");module.exports=require("../modules/$.core").Set}]},modules:{"es6.symbol.js":["./$","./$.global","./$.has","./$.support-desc","./$.def","./$.redef","./$.fails","./$.shared","./$.tag","./$.uid","./$.wks","./$.keyof","./$.get-names","./$.enum-keys","./$.is-array","./$.is-object","./$.an-object","./$.to-iobject","./$.property-desc","./$.library",function(require){"use strict";var $=require("./$"),global=require("./$.global"),has=require("./$.has"),SUPPORT_DESC=require("./$.support-desc"),$def=require("./$.def"),$redef=require("./$.redef"),$fails=require("./$.fails"),shared=require("./$.shared"),setTag=require("./$.tag"),uid=require("./$.uid"),wks=require("./$.wks"),keyOf=require("./$.keyof"),$names=require("./$.get-names"),enumKeys=require("./$.enum-keys"),isArray=require("./$.is-array"),isObject=require("./$.is-object"),anObject=require("./$.an-object"),toIObject=require("./$.to-iobject"),createDesc=require("./$.property-desc"),getDesc=$.getDesc,setDesc=$.setDesc,_create=$.create,getNames=$names.get,$Symbol=global.Symbol,$JSON=global.JSON,_stringify=$JSON&&$JSON.stringify,setter=false,HIDDEN=wks("_hidden"),isEnum=$.isEnum,SymbolRegistry=shared("symbol-registry"),AllSymbols=shared("symbols"),useNative=typeof $Symbol=="function",ObjectProto=Object.prototype;var setSymbolDesc=SUPPORT_DESC&&$fails(function(){return _create(setDesc({},"a",{get:function(){return setDesc(this,"a",{value:7}).a}})).a!=7})?function(it,key,D){var protoDesc=getDesc(ObjectProto,key);if(protoDesc)delete ObjectProto[key];setDesc(it,key,D);if(protoDesc&&it!==ObjectProto)setDesc(ObjectProto,key,protoDesc)}:setDesc;var wrap=function(tag){var sym=AllSymbols[tag]=_create($Symbol.prototype);sym._k=tag;SUPPORT_DESC&&setter&&setSymbolDesc(ObjectProto,tag,{configurable:true,set:function(value){if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;setSymbolDesc(this,tag,createDesc(1,value))}});return sym};var isSymbol=function(it){return typeof it=="symbol"};var $defineProperty=function defineProperty(it,key,D){if(D&&has(AllSymbols,key)){if(!D.enumerable){if(!has(it,HIDDEN))setDesc(it,HIDDEN,createDesc(1,{}));it[HIDDEN][key]=true}else{if(has(it,HIDDEN)&&it[HIDDEN][key])it[HIDDEN][key]=false;D=_create(D,{enumerable:createDesc(0,false)})}return setSymbolDesc(it,key,D)}return setDesc(it,key,D)};var $defineProperties=function defineProperties(it,P){anObject(it);var keys=enumKeys(P=toIObject(P)),i=0,l=keys.length,key;while(l>i)$defineProperty(it,key=keys[i++],P[key]);return it};var $create=function create(it,P){return P===undefined?_create(it):$defineProperties(_create(it),P)};var $propertyIsEnumerable=function propertyIsEnumerable(key){var E=isEnum.call(this,key);return E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:true};var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(it,key){var D=getDesc(it=toIObject(it),key);if(D&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key]))D.enumerable=true;return D};var $getOwnPropertyNames=function getOwnPropertyNames(it){var names=getNames(toIObject(it)),result=[],i=0,key;while(names.length>i)if(!has(AllSymbols,key=names[i++])&&key!=HIDDEN)result.push(key);return result};var $getOwnPropertySymbols=function getOwnPropertySymbols(it){var names=getNames(toIObject(it)),result=[],i=0,key;while(names.length>i)if(has(AllSymbols,key=names[i++]))result.push(AllSymbols[key]);return result};var $stringify=function stringify(it){var args=[it],i=1,replacer,$replacer;while(arguments.length>i)args.push(arguments[i++]);replacer=args[1];if(typeof replacer=="function")$replacer=replacer;if($replacer||!isArray(replacer))replacer=function(key,value){if($replacer)value=$replacer.call(this,key,value);if(!isSymbol(value))return value};args[1]=replacer;return _stringify.apply($JSON,args)};var buggyJSON=$fails(function(){var S=$Symbol();return _stringify([S])!="[null]"||_stringify({a:S})!="{}"||_stringify(Object(S))!="{}"});if(!useNative){$Symbol=function Symbol(){if(isSymbol(this))throw TypeError("Symbol is not a constructor");return wrap(uid(arguments[0]))};$redef($Symbol.prototype,"toString",function toString(){return this._k});isSymbol=function(it){return it instanceof $Symbol};$.create=$create;$.isEnum=$propertyIsEnumerable;$.getDesc=$getOwnPropertyDescriptor;$.setDesc=$defineProperty;$.setDescs=$defineProperties;$.getNames=$names.get=$getOwnPropertyNames;$.getSymbols=$getOwnPropertySymbols;if(SUPPORT_DESC&&!require("./$.library")){$redef(ObjectProto,"propertyIsEnumerable",$propertyIsEnumerable,true)}}var symbolStatics={for:function(key){return has(SymbolRegistry,key+="")?SymbolRegistry[key]:SymbolRegistry[key]=$Symbol(key)},keyFor:function keyFor(key){return keyOf(SymbolRegistry,key)},useSetter:function(){setter=true},useSimple:function(){setter=false}};$.each.call(("hasInstance,isConcatSpreadable,iterator,match,replace,search,"+"species,split,toPrimitive,toStringTag,unscopables").split(","),function(it){var sym=wks(it);symbolStatics[it]=useNative?sym:wrap(sym)});setter=true;$def($def.G+$def.W,{Symbol:$Symbol});$def($def.S,"Symbol",symbolStatics);$def($def.S+$def.F*!useNative,"Object",{create:$create,defineProperty:$defineProperty,defineProperties:$defineProperties,getOwnPropertyDescriptor:$getOwnPropertyDescriptor,getOwnPropertyNames:$getOwnPropertyNames,getOwnPropertySymbols:$getOwnPropertySymbols});$JSON&&$def($def.S+$def.F*(!useNative||buggyJSON),"JSON",{stringify:$stringify});setTag($Symbol,"Symbol");setTag(Math,"Math",true);setTag(global.JSON,"JSON",true)}],"$.js":function(require,exports,module){var $Object=Object;module.exports={create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}},"$.global.js":function(require,exports,module){var UNDEFINED="undefined";var global=module.exports=typeof window!=UNDEFINED&&window.Math==Math?window:typeof self!=UNDEFINED&&self.Math==Math?self:Function("return this")();if(typeof __g=="number")__g=global},"$.has.js":function(require,exports,module){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},"$.support-desc.js":["./$.fails",function(require,exports,module){module.exports=!require("./$.fails")(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})}],"$.fails.js":function(require,exports,module){module.exports=function(exec){try{return!!exec()}catch(e){return true}}},"$.def.js":["./$.global","./$.core","./$.hide","./$.redef",function(require,exports,module){var global=require("./$.global"),core=require("./$.core"),hide=require("./$.hide"),$redef=require("./$.redef"),PROTOTYPE="prototype";var ctx=function(fn,that){return function(){return fn.apply(that,arguments)}};var $def=function(type,name,source){var key,own,out,exp,isGlobal=type&$def.G,isProto=type&$def.P,target=isGlobal?global:type&$def.S?global[name]||(global[name]={}):(global[name]||{})[PROTOTYPE],exports=isGlobal?core:core[name]||(core[name]={});if(isGlobal)source=name;for(key in source){own=!(type&$def.F)&&target&&key in target;out=(own?target:source)[key];if(type&$def.B&&own)exp=ctx(out,global);else exp=isProto&&typeof out=="function"?ctx(Function.call,out):out;if(target&&!own)$redef(target,key,out);if(exports[key]!=out)hide(exports,key,exp);if(isProto)(exports[PROTOTYPE]||(exports[PROTOTYPE]={}))[key]=out}};global.core=core;$def.F=1;$def.G=2;$def.S=4;$def.P=8;$def.B=16;$def.W=32;module.exports=$def}],"$.core.js":function(require,exports,module){var core=module.exports={version:"1.2.1"};if(typeof __e=="number")__e=core},"$.hide.js":["./$","./$.property-desc","./$.support-desc",function(require,exports,module){var $=require("./$"),createDesc=require("./$.property-desc");module.exports=require("./$.support-desc")?function(object,key,value){return $.setDesc(object,key,createDesc(1,value))}:function(object,key,value){object[key]=value;return object}}],"$.property-desc.js":function(require,exports,module){module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value}}},"$.redef.js":["./$.global","./$.hide","./$.uid","./$.core",function(require,exports,module){var global=require("./$.global"),hide=require("./$.hide"),SRC=require("./$.uid")("src"),TO_STRING="toString",$toString=Function[TO_STRING],TPL=(""+$toString).split(TO_STRING);require("./$.core").inspectSource=function(it){return $toString.call(it)};(module.exports=function(O,key,val,safe){if(typeof val=="function"){hide(val,SRC,O[key]?""+O[key]:TPL.join(String(key)));if(!("name"in val))val.name=key}if(O===global){O[key]=val}else{if(!safe)delete O[key];hide(O,key,val)}})(Function.prototype,TO_STRING,function toString(){return typeof this=="function"&&this[SRC]||$toString.call(this)})}],"$.uid.js":function(require,exports,module){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(key===undefined?"":key,")_",(++id+px).toString(36))}},"$.shared.js":["./$.global",function(require,exports,module){var global=require("./$.global"),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}}],"$.tag.js":["./$.has","./$.hide","./$.wks",function(require,exports,module){var has=require("./$.has"),hide=require("./$.hide"),TAG=require("./$.wks")("toStringTag");module.exports=function(it,tag,stat){if(it&&!has(it=stat?it:it.prototype,TAG))hide(it,TAG,tag)}}],"$.wks.js":["./$.shared","./$.global","./$.uid",function(require,exports,module){var store=require("./$.shared")("wks"),Symbol=require("./$.global").Symbol;module.exports=function(name){return store[name]||(store[name]=Symbol&&Symbol[name]||(Symbol||require("./$.uid"))("Symbol."+name))}}],"$.keyof.js":["./$","./$.to-iobject",function(require,exports,module){var $=require("./$"),toIObject=require("./$.to-iobject");module.exports=function(object,el){var O=toIObject(object),keys=$.getKeys(O),length=keys.length,index=0,key;while(length>index)if(O[key=keys[index++]]===el)return key}}],"$.to-iobject.js":["./$.iobject","./$.defined",function(require,exports,module){var IObject=require("./$.iobject"),defined=require("./$.defined");module.exports=function(it){return IObject(defined(it))}}],"$.iobject.js":["./$.cof",function(require,exports,module){var cof=require("./$.cof");module.exports=0 in Object("z")?Object:function(it){return cof(it)=="String"?it.split(""):Object(it)}}],"$.cof.js":function(require,exports,module){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},"$.defined.js":function(require,exports,module){module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it}},"$.get-names.js":["./$.to-iobject","./$",function(require,exports,module){var toString={}.toString,toIObject=require("./$.to-iobject"),getNames=require("./$").getNames;var windowNames=typeof window=="object"&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function(it){try{return getNames(it)}catch(e){return windowNames.slice()}};module.exports.get=function getOwnPropertyNames(it){if(windowNames&&toString.call(it)=="[object Window]")return getWindowNames(it);return getNames(toIObject(it))}}],"$.enum-keys.js":["./$",function(require,exports,module){var $=require("./$");module.exports=function(it){var keys=$.getKeys(it),getSymbols=$.getSymbols;if(getSymbols){var symbols=getSymbols(it),isEnum=$.isEnum,i=0,key;while(symbols.length>i)if(isEnum.call(it,key=symbols[i++]))keys.push(key)}return keys}}],"$.is-array.js":["./$.cof",function(require,exports,module){var cof=require("./$.cof");module.exports=Array.isArray||function(arg){return cof(arg)=="Array"}}],"$.is-object.js":function(require,exports,module){module.exports=function(it){return typeof it==="object"?it!==null:typeof it==="function"}},"$.an-object.js":["./$.is-object",function(require,exports,module){var isObject=require("./$.is-object");module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}}],"$.library.js":function(require,exports,module){module.exports=false},"es6.object.assign.js":["./$.def","./$.assign",function(require){var $def=require("./$.def");$def($def.S+$def.F,"Object",{assign:require("./$.assign")})}],"$.assign.js":["./$.to-object","./$.iobject","./$.enum-keys","./$.has","./$.fails",function(require,exports,module){var toObject=require("./$.to-object"),IObject=require("./$.iobject"),enumKeys=require("./$.enum-keys"),has=require("./$.has");module.exports=require("./$.fails")(function(){var a=Object.assign,A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";A[S]=7;K.split("").forEach(function(k){B[k]=k});return a({},A)[S]!=7||Object.keys(a({},B)).join("")!=K})?function assign(target,source){var T=toObject(target),l=arguments.length,i=1;while(l>i){var S=IObject(arguments[i++]),keys=enumKeys(S),length=keys.length,j=0,key;while(length>j)if(has(S,key=keys[j++]))T[key]=S[key]}return T}:Object.assign}],"$.to-object.js":["./$.defined",function(require,exports,module){var defined=require("./$.defined");module.exports=function(it){return Object(defined(it))}}],"es6.object.is.js":["./$.def","./$.same",function(require){var $def=require("./$.def");$def($def.S,"Object",{is:require("./$.same")})}],"$.same.js":function(require,exports,module){module.exports=Object.is||function is(x,y){return x===y?x!==0||1/x===1/y:x!=x&&y!=y}},"es6.object.set-prototype-of.js":["./$.def","./$.set-proto",function(require){var $def=require("./$.def");$def($def.S,"Object",{setPrototypeOf:require("./$.set-proto").set})}],"$.set-proto.js":["./$","./$.is-object","./$.an-object","./$.ctx",function(require,exports,module){var getDesc=require("./$").getDesc,isObject=require("./$.is-object"),anObject=require("./$.an-object");var check=function(O,proto){anObject(O);if(!isObject(proto)&&proto!==null)throw TypeError(proto+": can't set as prototype!")};module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(test,buggy,set){try{set=require("./$.ctx")(Function.call,getDesc(Object.prototype,"__proto__").set,2);set(test,[]);buggy=!(test instanceof Array)}catch(e){buggy=true}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O}}({},false):undefined),check:check}}],"$.ctx.js":["./$.a-function",function(require,exports,module){var aFunction=require("./$.a-function");module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}}],"$.a-function.js":function(require,exports,module){module.exports=function(it){if(typeof it!="function")throw TypeError(it+" is not a function!");return it}},"es6.object.to-string.js":["./$.classof","./$.wks","./$.redef",function(require){"use strict";var classof=require("./$.classof"),test={};test[require("./$.wks")("toStringTag")]="z";if(test+""!="[object z]"){require("./$.redef")(Object.prototype,"toString",function toString(){return"[object "+classof(this)+"]"},true)}}],"$.classof.js":["./$.cof","./$.wks",function(require,exports,module){var cof=require("./$.cof"),TAG=require("./$.wks")("toStringTag"),ARG=cof(function(){return arguments}())=="Arguments";module.exports=function(it){var O,T,B;return it===undefined?"Undefined":it===null?"Null":typeof(T=(O=Object(it))[TAG])=="string"?T:ARG?cof(O):(B=cof(O))=="Object"&&typeof O.callee=="function"?"Arguments":B}}],"es6.object.freeze.js":["./$.is-object","./$.object-sap",function(require){var isObject=require("./$.is-object");require("./$.object-sap")("freeze",function($freeze){return function freeze(it){return $freeze&&isObject(it)?$freeze(it):it}})}],"$.object-sap.js":["./$.def","./$.core","./$.fails",function(require,exports,module){module.exports=function(KEY,exec){var $def=require("./$.def"),fn=(require("./$.core").Object||{})[KEY]||Object[KEY],exp={};exp[KEY]=exec(fn);$def($def.S+$def.F*require("./$.fails")(function(){fn(1)}),"Object",exp)}}],"es6.object.seal.js":["./$.is-object","./$.object-sap",function(require){var isObject=require("./$.is-object");require("./$.object-sap")("seal",function($seal){return function seal(it){return $seal&&isObject(it)?$seal(it):it}})}],"es6.object.prevent-extensions.js":["./$.is-object","./$.object-sap",function(require){var isObject=require("./$.is-object");require("./$.object-sap")("preventExtensions",function($preventExtensions){return function preventExtensions(it){return $preventExtensions&&isObject(it)?$preventExtensions(it):it}})}],"es6.object.is-frozen.js":["./$.is-object","./$.object-sap",function(require){var isObject=require("./$.is-object");require("./$.object-sap")("isFrozen",function($isFrozen){return function isFrozen(it){return isObject(it)?$isFrozen?$isFrozen(it):false:true}})}],"es6.object.is-sealed.js":["./$.is-object","./$.object-sap",function(require){var isObject=require("./$.is-object");require("./$.object-sap")("isSealed",function($isSealed){return function isSealed(it){return isObject(it)?$isSealed?$isSealed(it):false:true}})}],"es6.object.is-extensible.js":["./$.is-object","./$.object-sap",function(require){var isObject=require("./$.is-object");
	require("./$.object-sap")("isExtensible",function($isExtensible){return function isExtensible(it){return isObject(it)?$isExtensible?$isExtensible(it):true:false}})}],"es6.object.get-own-property-descriptor.js":["./$.to-iobject","./$.object-sap",function(require){var toIObject=require("./$.to-iobject");require("./$.object-sap")("getOwnPropertyDescriptor",function($getOwnPropertyDescriptor){return function getOwnPropertyDescriptor(it,key){return $getOwnPropertyDescriptor(toIObject(it),key)}})}],"es6.object.get-prototype-of.js":["./$.to-object","./$.object-sap",function(require){var toObject=require("./$.to-object");require("./$.object-sap")("getPrototypeOf",function($getPrototypeOf){return function getPrototypeOf(it){return $getPrototypeOf(toObject(it))}})}],"es6.object.keys.js":["./$.to-object","./$.object-sap",function(require){var toObject=require("./$.to-object");require("./$.object-sap")("keys",function($keys){return function keys(it){return $keys(toObject(it))}})}],"es6.object.get-own-property-names.js":["./$.object-sap","./$.get-names",function(require){require("./$.object-sap")("getOwnPropertyNames",function(){return require("./$.get-names").get})}],"es6.string.iterator.js":["./$.string-at","./$.iter-define",function(require){"use strict";var $at=require("./$.string-at")(true);require("./$.iter-define")(String,"String",function(iterated){this._t=String(iterated);this._i=0},function(){var O=this._t,index=this._i,point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false}})}],"$.string-at.js":["./$.to-integer","./$.defined",function(require,exports,module){var toInteger=require("./$.to-integer"),defined=require("./$.defined");module.exports=function(TO_STRING){return function(that,pos){var s=String(defined(that)),i=toInteger(pos),l=s.length,a,b;if(i<0||i>=l)return TO_STRING?"":undefined;a=s.charCodeAt(i);return a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536}}}],"$.to-integer.js":function(require,exports,module){var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},"$.iter-define.js":["./$.library","./$.def","./$.redef","./$.hide","./$.has","./$.wks","./$.iterators","./$.iter-create","./$","./$.tag",function(require,exports,module){"use strict";var LIBRARY=require("./$.library"),$def=require("./$.def"),$redef=require("./$.redef"),hide=require("./$.hide"),has=require("./$.has"),SYMBOL_ITERATOR=require("./$.wks")("iterator"),Iterators=require("./$.iterators"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values";var returnThis=function(){return this};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCE){require("./$.iter-create")(Constructor,NAME,next);var createMethod=function(kind){switch(kind){case KEYS:return function keys(){return new Constructor(this,kind)};case VALUES:return function values(){return new Constructor(this,kind)}}return function entries(){return new Constructor(this,kind)}};var TAG=NAME+" Iterator",proto=Base.prototype,_native=proto[SYMBOL_ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],_default=_native||createMethod(DEFAULT),methods,key;if(_native){var IteratorPrototype=require("./$").getProto(_default.call(new Base));require("./$.tag")(IteratorPrototype,TAG,true);if(!LIBRARY&&has(proto,FF_ITERATOR))hide(IteratorPrototype,SYMBOL_ITERATOR,returnThis)}if(!LIBRARY||FORCE)hide(proto,SYMBOL_ITERATOR,_default);Iterators[NAME]=_default;Iterators[TAG]=returnThis;if(DEFAULT){methods={keys:IS_SET?_default:createMethod(KEYS),values:DEFAULT==VALUES?_default:createMethod(VALUES),entries:DEFAULT!=VALUES?_default:createMethod("entries")};if(FORCE)for(key in methods){if(!(key in proto))$redef(proto,key,methods[key])}else $def($def.P+$def.F*BUGGY,NAME,methods)}}}],"$.iterators.js":function(require,exports,module){module.exports={}},"$.iter-create.js":["./$","./$.hide","./$.wks","./$.property-desc","./$.tag",function(require,exports,module){"use strict";var $=require("./$"),IteratorPrototype={};require("./$.hide")(IteratorPrototype,require("./$.wks")("iterator"),function(){return this});module.exports=function(Constructor,NAME,next){Constructor.prototype=$.create(IteratorPrototype,{next:require("./$.property-desc")(1,next)});require("./$.tag")(Constructor,NAME+" Iterator")}}],"es6.array.from.js":["./$.ctx","./$.def","./$.to-object","./$.iter-call","./$.is-array-iter","./$.to-length","./core.get-iterator-method","./$.iter-detect",function(require){"use strict";var ctx=require("./$.ctx"),$def=require("./$.def"),toObject=require("./$.to-object"),call=require("./$.iter-call"),isArrayIter=require("./$.is-array-iter"),toLength=require("./$.to-length"),getIterFn=require("./core.get-iterator-method");$def($def.S+$def.F*!require("./$.iter-detect")(function(iter){Array.from(iter)}),"Array",{from:function from(arrayLike){var O=toObject(arrayLike),C=typeof this=="function"?this:Array,mapfn=arguments[1],mapping=mapfn!==undefined,index=0,iterFn=getIterFn(O),length,result,step,iterator;if(mapping)mapfn=ctx(mapfn,arguments[2],2);if(iterFn!=undefined&&!(C==Array&&isArrayIter(iterFn))){for(iterator=iterFn.call(O),result=new C;!(step=iterator.next()).done;index++){result[index]=mapping?call(iterator,mapfn,[step.value,index],true):step.value}}else{length=toLength(O.length);for(result=new C(length);length>index;index++){result[index]=mapping?mapfn(O[index],index):O[index]}}result.length=index;return result}})}],"$.iter-call.js":["./$.an-object",function(require,exports,module){var anObject=require("./$.an-object");module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){var ret=iterator["return"];if(ret!==undefined)anObject(ret.call(iterator));throw e}}}],"$.is-array-iter.js":["./$.iterators","./$.wks",function(require,exports,module){var Iterators=require("./$.iterators"),ITERATOR=require("./$.wks")("iterator");module.exports=function(it){return(Iterators.Array||Array.prototype[ITERATOR])===it}}],"$.to-length.js":["./$.to-integer",function(require,exports,module){var toInteger=require("./$.to-integer"),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}}],"core.get-iterator-method.js":["./$.classof","./$.wks","./$.iterators","./$.core",function(require,exports,module){var classof=require("./$.classof"),ITERATOR=require("./$.wks")("iterator"),Iterators=require("./$.iterators");module.exports=require("./$.core").getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]}}],"$.iter-detect.js":["./$.wks",function(require,exports,module){var SYMBOL_ITERATOR=require("./$.wks")("iterator"),SAFE_CLOSING=false;try{var riter=[7][SYMBOL_ITERATOR]();riter["return"]=function(){SAFE_CLOSING=true};Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec){if(!SAFE_CLOSING)return false;var safe=false;try{var arr=[7],iter=arr[SYMBOL_ITERATOR]();iter.next=function(){safe=true};arr[SYMBOL_ITERATOR]=function(){return iter};exec(arr)}catch(e){}return safe}}],"es6.array.of.js":["./$.def","./$.fails",function(require){"use strict";var $def=require("./$.def");$def($def.S+$def.F*require("./$.fails")(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){var index=0,length=arguments.length,result=new(typeof this=="function"?this:Array)(length);while(length>index)result[index]=arguments[index++];result.length=length;return result}})}],"es6.array.species.js":["./$.species",function(require){require("./$.species")(Array)}],"$.species.js":["./$","./$.wks","./$.support-desc",function(require,exports,module){"use strict";var $=require("./$"),SPECIES=require("./$.wks")("species");module.exports=function(C){if(require("./$.support-desc")&&!(SPECIES in C))$.setDesc(C,SPECIES,{configurable:true,get:function(){return this}})}}],"es6.array.iterator.js":["./$.unscope","./$.iter-step","./$.iterators","./$.to-iobject","./$.iter-define",function(require){"use strict";var setUnscope=require("./$.unscope"),step=require("./$.iter-step"),Iterators=require("./$.iterators"),toIObject=require("./$.to-iobject");require("./$.iter-define")(Array,"Array",function(iterated,kind){this._t=toIObject(iterated);this._i=0;this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;if(!O||index>=O.length){this._t=undefined;return step(1)}if(kind=="keys")return step(0,index);if(kind=="values")return step(0,O[index]);return step(0,[index,O[index]])},"values");Iterators.Arguments=Iterators.Array;setUnscope("keys");setUnscope("values");setUnscope("entries")}],"$.unscope.js":["./$.wks","./$.hide",function(require,exports,module){var UNSCOPABLES=require("./$.wks")("unscopables");if([][UNSCOPABLES]==undefined)require("./$.hide")(Array.prototype,UNSCOPABLES,{});module.exports=function(key){[][UNSCOPABLES][key]=true}}],"$.iter-step.js":function(require,exports,module){module.exports=function(done,value){return{value:value,done:!!done}}},"es6.array.copy-within.js":["./$.def","./$.array-copy-within","./$.unscope",function(require){"use strict";var $def=require("./$.def");$def($def.P,"Array",{copyWithin:require("./$.array-copy-within")});require("./$.unscope")("copyWithin")}],"$.array-copy-within.js":["./$.to-object","./$.to-index","./$.to-length",function(require,exports,module){"use strict";var toObject=require("./$.to-object"),toIndex=require("./$.to-index"),toLength=require("./$.to-length");module.exports=[].copyWithin||function copyWithin(target,start){var O=toObject(this),len=toLength(O.length),to=toIndex(target,len),from=toIndex(start,len),end=arguments[2],count=Math.min((end===undefined?len:toIndex(end,len))-from,len-to),inc=1;if(from<to&&to<from+count){inc=-1;from+=count-1;to+=count-1}while(count-- >0){if(from in O)O[to]=O[from];else delete O[to];to+=inc;from+=inc}return O}}],"$.to-index.js":["./$.to-integer",function(require,exports,module){var toInteger=require("./$.to-integer"),max=Math.max,min=Math.min;module.exports=function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length)}}],"es6.array.fill.js":["./$.def","./$.array-fill","./$.unscope",function(require){var $def=require("./$.def");$def($def.P,"Array",{fill:require("./$.array-fill")});require("./$.unscope")("fill")}],"$.array-fill.js":["./$.to-object","./$.to-index","./$.to-length",function(require,exports,module){"use strict";var toObject=require("./$.to-object"),toIndex=require("./$.to-index"),toLength=require("./$.to-length");module.exports=[].fill||function fill(value){var O=toObject(this,true),length=toLength(O.length),index=toIndex(arguments[1],length),end=arguments[2],endPos=end===undefined?length:toIndex(end,length);while(endPos>index)O[index++]=value;return O}}],"es6.array.find.js":["./$.def","./$.array-methods","./$.unscope",function(require){"use strict";var KEY="find",$def=require("./$.def"),forced=true,$find=require("./$.array-methods")(5);if(KEY in[])Array(1)[KEY](function(){forced=false});$def($def.P+$def.F*forced,"Array",{find:function find(callbackfn){return $find(this,callbackfn,arguments[1])}});require("./$.unscope")(KEY)}],"$.array-methods.js":["./$.ctx","./$.is-object","./$.iobject","./$.to-object","./$.to-length","./$.is-array","./$.wks",function(require,exports,module){var ctx=require("./$.ctx"),isObject=require("./$.is-object"),IObject=require("./$.iobject"),toObject=require("./$.to-object"),toLength=require("./$.to-length"),isArray=require("./$.is-array"),SPECIES=require("./$.wks")("species");var ASC=function(original,length){var C;if(isArray(original)&&isObject(C=original.constructor)){C=C[SPECIES];if(C===null)C=undefined}return new(C===undefined?Array:C)(length)};module.exports=function(TYPE){var IS_MAP=TYPE==1,IS_FILTER=TYPE==2,IS_SOME=TYPE==3,IS_EVERY=TYPE==4,IS_FIND_INDEX=TYPE==6,NO_HOLES=TYPE==5||IS_FIND_INDEX;return function($this,callbackfn,that){var O=toObject($this),self=IObject(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=IS_MAP?ASC($this,length):IS_FILTER?ASC($this,0):undefined,val,res;for(;length>index;index++)if(NO_HOLES||index in self){val=self[index];res=f(val,index,O);if(TYPE){if(IS_MAP)result[index]=res;else if(res)switch(TYPE){case 3:return true;case 5:return val;case 6:return index;case 2:result.push(val)}else if(IS_EVERY)return false}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}}],"es6.array.find-index.js":["./$.def","./$.array-methods","./$.unscope",function(require){"use strict";var KEY="findIndex",$def=require("./$.def"),forced=true,$find=require("./$.array-methods")(6);if(KEY in[])Array(1)[KEY](function(){forced=false});$def($def.P+$def.F*forced,"Array",{findIndex:function findIndex(callbackfn){return $find(this,callbackfn,arguments[1])}});require("./$.unscope")(KEY)}],"es6.string.from-code-point.js":["./$.def","./$.to-index",function(require){var $def=require("./$.def"),toIndex=require("./$.to-index"),fromCharCode=String.fromCharCode,$fromCodePoint=String.fromCodePoint;$def($def.S+$def.F*(!!$fromCodePoint&&$fromCodePoint.length!=1),"String",{fromCodePoint:function fromCodePoint(x){var res=[],len=arguments.length,i=0,code;while(len>i){code=+arguments[i++];if(toIndex(code,1114111)!==code)throw RangeError(code+" is not a valid code point");res.push(code<65536?fromCharCode(code):fromCharCode(((code-=65536)>>10)+55296,code%1024+56320))}return res.join("")}})}],"es6.string.raw.js":["./$.def","./$.to-iobject","./$.to-length",function(require){var $def=require("./$.def"),toIObject=require("./$.to-iobject"),toLength=require("./$.to-length");$def($def.S,"String",{raw:function raw(callSite){var tpl=toIObject(callSite.raw),len=toLength(tpl.length),sln=arguments.length,res=[],i=0;while(len>i){res.push(String(tpl[i++]));if(i<sln)res.push(String(arguments[i]))}return res.join("")}})}],"es6.string.trim.js":["./$.string-trim",function(require){"use strict";require("./$.string-trim")("trim",function($trim){return function trim(){return $trim(this,3)}})}],"$.string-trim.js":["./$.def","./$.defined","./$.fails",function(require,exports,module){var trim=function(string,TYPE){string=String(defined(string));if(TYPE&1)string=string.replace(ltrim,"");if(TYPE&2)string=string.replace(rtrim,"");return string};var $def=require("./$.def"),defined=require("./$.defined"),spaces="\t\n\v\f\r   ᠎    "+"         　\u2028\u2029\ufeff",space="["+spaces+"]",non="​",ltrim=RegExp("^"+space+space+"*"),rtrim=RegExp(space+space+"*$");module.exports=function(KEY,exec){var exp={};exp[KEY]=exec(trim);$def($def.P+$def.F*require("./$.fails")(function(){return!!spaces[KEY]()||non[KEY]()!=non}),"String",exp)}}],"es6.string.code-point-at.js":["./$.def","./$.string-at",function(require){"use strict";var $def=require("./$.def"),$at=require("./$.string-at")(false);$def($def.P,"String",{codePointAt:function codePointAt(pos){return $at(this,pos)}})}],"es6.string.ends-with.js":["./$.def","./$.to-length","./$.string-context","./$.fails-is-regexp",function(require){"use strict";var $def=require("./$.def"),toLength=require("./$.to-length"),context=require("./$.string-context"),ENDS_WITH="endsWith",$endsWith=""[ENDS_WITH];$def($def.P+$def.F*require("./$.fails-is-regexp")(ENDS_WITH),"String",{endsWith:function endsWith(searchString){var that=context(this,searchString,ENDS_WITH),endPosition=arguments[1],len=toLength(that.length),end=endPosition===undefined?len:Math.min(toLength(endPosition),len),search=String(searchString);return $endsWith?$endsWith.call(that,search,end):that.slice(end-search.length,end)===search}})}],"$.string-context.js":["./$.is-regexp","./$.defined",function(require,exports,module){var isRegExp=require("./$.is-regexp"),defined=require("./$.defined");module.exports=function(that,searchString,NAME){if(isRegExp(searchString))throw TypeError("String#"+NAME+" doesn't accept regex!");return String(defined(that))}}],"$.is-regexp.js":["./$.is-object","./$.cof","./$.wks",function(require,exports,module){var isObject=require("./$.is-object"),cof=require("./$.cof"),MATCH=require("./$.wks")("match");module.exports=function(it){var isRegExp;return isObject(it)&&((isRegExp=it[MATCH])!==undefined?!!isRegExp:cof(it)=="RegExp")}}],"$.fails-is-regexp.js":["./$.wks",function(require,exports,module){module.exports=function(KEY){var re=/./;try{"/./"[KEY](re)}catch(e){try{re[require("./$.wks")("match")]=false;return!"/./"[KEY](re)}catch(e){}}return true}}],"es6.string.includes.js":["./$.def","./$.string-context","./$.fails-is-regexp",function(require){"use strict";var $def=require("./$.def"),context=require("./$.string-context"),INCLUDES="includes";$def($def.P+$def.F*require("./$.fails-is-regexp")(INCLUDES),"String",{includes:function includes(searchString){return!!~context(this,searchString,INCLUDES).indexOf(searchString,arguments[1])}})}],"es6.string.repeat.js":["./$.def","./$.string-repeat",function(require){var $def=require("./$.def");$def($def.P,"String",{repeat:require("./$.string-repeat")})}],"$.string-repeat.js":["./$.to-integer","./$.defined",function(require,exports,module){"use strict";var toInteger=require("./$.to-integer"),defined=require("./$.defined");module.exports=function repeat(count){var str=String(defined(this)),res="",n=toInteger(count);if(n<0||n==Infinity)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(str+=str))if(n&1)res+=str;return res}}],"es6.string.starts-with.js":["./$.def","./$.to-length","./$.string-context","./$.fails-is-regexp",function(require){"use strict";var $def=require("./$.def"),toLength=require("./$.to-length"),context=require("./$.string-context"),STARTS_WITH="startsWith",$startsWith=""[STARTS_WITH];$def($def.P+$def.F*require("./$.fails-is-regexp")(STARTS_WITH),"String",{startsWith:function startsWith(searchString){var that=context(this,searchString,STARTS_WITH),index=toLength(Math.min(arguments[1],that.length)),search=String(searchString);return $startsWith?$startsWith.call(that,search,index):that.slice(index,index+search.length)===search}})}],"es6.regexp.match.js":["./$.fix-re-wks",function(require){require("./$.fix-re-wks")("match",1,function(defined,MATCH){return function match(regexp){"use strict";var O=defined(this),fn=regexp==undefined?undefined:regexp[MATCH];return fn!==undefined?fn.call(regexp,O):new RegExp(regexp)[MATCH](String(O))}})}],"$.fix-re-wks.js":["./$.defined","./$.wks","./$.fails","./$.redef","./$.hide",function(require,exports,module){"use strict";module.exports=function(KEY,length,exec){var defined=require("./$.defined"),SYMBOL=require("./$.wks")(KEY),original=""[KEY];if(require("./$.fails")(function(){var O={};O[SYMBOL]=function(){return 7};return""[KEY](O)!=7})){require("./$.redef")(String.prototype,KEY,exec(defined,SYMBOL,original));require("./$.hide")(RegExp.prototype,SYMBOL,length==2?function(string,arg){return original.call(string,this,arg)}:function(string){return original.call(string,this)})}}}],"es6.regexp.replace.js":["./$.fix-re-wks",function(require){require("./$.fix-re-wks")("replace",2,function(defined,REPLACE,$replace){return function replace(searchValue,replaceValue){"use strict";var O=defined(this),fn=searchValue==undefined?undefined:searchValue[REPLACE];return fn!==undefined?fn.call(searchValue,O,replaceValue):$replace.call(String(O),searchValue,replaceValue)}})}],"es6.regexp.search.js":["./$.fix-re-wks",function(require){require("./$.fix-re-wks")("search",1,function(defined,SEARCH){return function search(regexp){"use strict";var O=defined(this),fn=regexp==undefined?undefined:regexp[SEARCH];return fn!==undefined?fn.call(regexp,O):new RegExp(regexp)[SEARCH](String(O))}})}],"es6.regexp.split.js":["./$.fix-re-wks",function(require){require("./$.fix-re-wks")("split",2,function(defined,SPLIT,$split){return function split(separator,limit){"use strict";var O=defined(this),fn=separator==undefined?undefined:separator[SPLIT];return fn!==undefined?fn.call(separator,O,limit):$split.call(String(O),separator,limit)}})}],"es6.function.name.js":["./$","./$.property-desc","./$.has","./$.support-desc",function(require){var setDesc=require("./$").setDesc,createDesc=require("./$.property-desc"),has=require("./$.has"),FProto=Function.prototype,nameRE=/^\s*function ([^ (]*)/,NAME="name";NAME in FProto||require("./$.support-desc")&&setDesc(FProto,NAME,{configurable:true,get:function(){var match=(""+this).match(nameRE),name=match?match[1]:"";has(this,NAME)||setDesc(this,NAME,createDesc(5,name));return name}})}],"es6.function.has-instance.js":["./$","./$.is-object","./$.wks",function(require){"use strict";var $=require("./$"),isObject=require("./$.is-object"),HAS_INSTANCE=require("./$.wks")("hasInstance"),FunctionProto=Function.prototype;if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto,HAS_INSTANCE,{value:function(O){if(typeof this!="function"||!isObject(O))return false;if(!isObject(this.prototype))return O instanceof this;while(O=$.getProto(O))if(this.prototype===O)return true;return false}})}],"web.dom.iterable.js":["./es6.array.iterator","./$.global","./$.hide","./$.iterators","./$.wks",function(require){require("./es6.array.iterator");var global=require("./$.global"),hide=require("./$.hide"),Iterators=require("./$.iterators"),ITERATOR=require("./$.wks")("iterator"),NL=global.NodeList,HTC=global.HTMLCollection,NLProto=NL&&NL.prototype,HTCProto=HTC&&HTC.prototype,ArrayValues=Iterators.NodeList=Iterators.HTMLCollection=Iterators.Array;if(NL&&!(ITERATOR in NLProto))hide(NLProto,ITERATOR,ArrayValues);if(HTC&&!(ITERATOR in HTCProto))hide(HTCProto,ITERATOR,ArrayValues)}],"es6.map.js":["./$.collection-strong","./$.collection",function(require){"use strict";var strong=require("./$.collection-strong");require("./$.collection")("Map",function(get){return function Map(){return get(this,arguments[0])}},{get:function get(key){var entry=strong.getEntry(this,key);return entry&&entry.v},set:function set(key,value){return strong.def(this,key===0?0:key,value)}},strong,true)}],"$.collection-strong.js":["./$","./$.hide","./$.ctx","./$.species","./$.strict-new","./$.defined","./$.for-of","./$.iter-step","./$.uid","./$.has","./$.is-object","./$.support-desc","./$.mix","./$.iter-define","./$.core",function(require,exports,module){"use strict";var $=require("./$"),hide=require("./$.hide"),ctx=require("./$.ctx"),species=require("./$.species"),strictNew=require("./$.strict-new"),defined=require("./$.defined"),forOf=require("./$.for-of"),step=require("./$.iter-step"),ID=require("./$.uid")("id"),$has=require("./$.has"),isObject=require("./$.is-object"),isExtensible=Object.isExtensible||isObject,SUPPORT_DESC=require("./$.support-desc"),SIZE=SUPPORT_DESC?"_s":"size",id=0;var fastKey=function(it,create){if(!isObject(it))return typeof it=="symbol"?it:(typeof it=="string"?"S":"P")+it;if(!$has(it,ID)){if(!isExtensible(it))return"F";if(!create)return"E";hide(it,ID,++id)}return"O"+it[ID]};var getEntry=function(that,key){var index=fastKey(key),entry;if(index!=="F")return that._i[index];for(entry=that._f;entry;entry=entry.n){if(entry.k==key)return entry}};module.exports={getConstructor:function(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){strictNew(that,C,NAME);that._i=$.create(null);that._f=undefined;that._l=undefined;that[SIZE]=0;if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that)});require("./$.mix")(C.prototype,{clear:function clear(){for(var that=this,data=that._i,entry=that._f;entry;entry=entry.n){entry.r=true;if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i]}that._f=that._l=undefined;that[SIZE]=0},delete:function(key){var that=this,entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that._i[entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that._f==entry)that._f=next;if(that._l==entry)that._l=prev;that[SIZE]--}return!!entry},forEach:function forEach(callbackfn){var f=ctx(callbackfn,arguments[1],3),entry;while(entry=entry?entry.n:this._f){f(entry.v,entry.k,this);while(entry&&entry.r)entry=entry.p}},has:function has(key){return!!getEntry(this,key)}});if(SUPPORT_DESC)$.setDesc(C.prototype,"size",{get:function(){return defined(this[SIZE])}});return C},def:function(that,key,value){var entry=getEntry(that,key),prev,index;if(entry){entry.v=value}else{that._l=entry={i:index=fastKey(key,true),k:key,v:value,p:prev=that._l,n:undefined,r:false};if(!that._f)that._f=entry;if(prev)prev.n=entry;that[SIZE]++;if(index!=="F")that._i[index]=entry}return that},getEntry:getEntry,setStrong:function(C,NAME,IS_MAP){require("./$.iter-define")(C,NAME,function(iterated,kind){this._t=iterated;this._k=kind;this._l=undefined},function(){var that=this,kind=that._k,entry=that._l;while(entry&&entry.r)entry=entry.p;if(!that._t||!(that._l=entry=entry?entry.n:that._t._f)){that._t=undefined;return step(1)}if(kind=="keys")return step(0,entry.k);if(kind=="values")return step(0,entry.v);return step(0,[entry.k,entry.v])},IS_MAP?"entries":"values",!IS_MAP,true);species(C);species(require("./$.core")[NAME])}}}],"$.strict-new.js":function(require,exports,module){module.exports=function(it,Constructor,name){if(!(it instanceof Constructor))throw TypeError(name+": use the 'new' operator!");return it}},"$.for-of.js":["./$.ctx","./$.iter-call","./$.is-array-iter","./$.an-object","./$.to-length","./core.get-iterator-method",function(require,exports,module){var ctx=require("./$.ctx"),call=require("./$.iter-call"),isArrayIter=require("./$.is-array-iter"),anObject=require("./$.an-object"),toLength=require("./$.to-length"),getIterFn=require("./core.get-iterator-method");module.exports=function(iterable,entries,fn,that){var iterFn=getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0,length,step,iterator;if(typeof iterFn!="function")throw TypeError(iterable+" is not iterable!");if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++){entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index])}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){call(iterator,f,step.value,entries)}}}],"$.mix.js":["./$.redef",function(require,exports,module){var $redef=require("./$.redef");module.exports=function(target,src){for(var key in src)$redef(target,key,src[key]);return target}}],"$.collection.js":["./$.global","./$.def","./$.for-of","./$.strict-new","./$.redef","./$.fails","./$.mix","./$.iter-detect","./$.tag",function(require,exports,module){"use strict";var global=require("./$.global"),$def=require("./$.def"),forOf=require("./$.for-of"),strictNew=require("./$.strict-new");module.exports=function(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=global[NAME],C=Base,ADDER=IS_MAP?"set":"add",proto=C&&C.prototype,O={};var fixMethod=function(KEY){var fn=proto[KEY];require("./$.redef")(proto,KEY,KEY=="delete"?function(a){return fn.call(this,a===0?0:a)}:KEY=="has"?function has(a){return fn.call(this,a===0?0:a)}:KEY=="get"?function get(a){return fn.call(this,a===0?0:a)}:KEY=="add"?function add(a){fn.call(this,a===0?0:a);return this}:function set(a,b){fn.call(this,a===0?0:a,b);return this})};if(typeof C!="function"||!(IS_WEAK||proto.forEach&&!require("./$.fails")(function(){(new C).entries().next()}))){C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER);require("./$.mix")(C.prototype,methods)}else{var inst=new C,chain=inst[ADDER](IS_WEAK?{}:-0,1),buggyZero;if(!require("./$.iter-detect")(function(iter){new C(iter)})){C=wrapper(function(target,iterable){strictNew(target,C,NAME);var that=new Base;if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that);return that});C.prototype=proto;proto.constructor=C}IS_WEAK||inst.forEach(function(val,key){buggyZero=1/key===-Infinity});if(buggyZero){fixMethod("delete");fixMethod("has");IS_MAP&&fixMethod("get")}if(buggyZero||chain!==inst)fixMethod(ADDER);if(IS_WEAK&&proto.clear)delete proto.clear}require("./$.tag")(C,NAME);O[NAME]=C;$def($def.G+$def.W+$def.F*(C!=Base),O);if(!IS_WEAK)common.setStrong(C,NAME,IS_MAP);return C}}],"es6.set.js":["./$.collection-strong","./$.collection",function(require){"use strict";var strong=require("./$.collection-strong");require("./$.collection")("Set",function(get){return function Set(){return get(this,arguments[0])}},{add:function add(value){return strong.def(this,value=value===0?0:value,value)}},strong)}]}}}}}}}}},{extensions:[".js",".json"]});var exports=require("./node_modules/meteor/ecmascript-runtime/runtime.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["ecmascript-runtime"]=exports,{Symbol:Symbol,Map:Map,Set:Set})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;if(typeof Package==="undefined")Package={};Package.ecmascript={}})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var Base64;(function(){var BASE_64_CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var BASE_64_VALS={};for(var i=0;i<BASE_64_CHARS.length;i++){BASE_64_VALS[BASE_64_CHARS.charAt(i)]=i}Base64={};Base64.encode=function(array){if(typeof array==="string"){var str=array;array=Base64.newBinary(str.length);for(var i=0;i<str.length;i++){var ch=str.charCodeAt(i);if(ch>255){throw new Error("Not ascii. Base64.encode can only take ascii strings.")}array[i]=ch}}var answer=[];var a=null;var b=null;var c=null;var d=null;for(var i=0;i<array.length;i++){switch(i%3){case 0:a=array[i]>>2&63;b=(array[i]&3)<<4;break;case 1:b=b|array[i]>>4&15;c=(array[i]&15)<<2;break;case 2:c=c|array[i]>>6&3;d=array[i]&63;answer.push(getChar(a));answer.push(getChar(b));answer.push(getChar(c));answer.push(getChar(d));a=null;b=null;c=null;d=null;break}}if(a!=null){answer.push(getChar(a));answer.push(getChar(b));if(c==null)answer.push("=");else answer.push(getChar(c));if(d==null)answer.push("=")}return answer.join("")};var getChar=function(val){return BASE_64_CHARS.charAt(val)};var getVal=function(ch){if(ch==="="){return-1}return BASE_64_VALS[ch]};Base64.newBinary=function(len){if(typeof Uint8Array==="undefined"||typeof ArrayBuffer==="undefined"){var ret=[];for(var i=0;i<len;i++){ret.push(0)}ret.$Uint8ArrayPolyfill=true;return ret}return new Uint8Array(new ArrayBuffer(len))};Base64.decode=function(str){var len=Math.floor(str.length*3/4);if(str.charAt(str.length-1)=="="){len--;if(str.charAt(str.length-2)=="=")len--}var arr=Base64.newBinary(len);var one=null;var two=null;var three=null;var j=0;for(var i=0;i<str.length;i++){var c=str.charAt(i);var v=getVal(c);switch(i%4){case 0:if(v<0)throw new Error("invalid base64 string");one=v<<2;break;case 1:if(v<0)throw new Error("invalid base64 string");one=one|v>>4;arr[j++]=one;two=(v&15)<<4;break;case 2:if(v>=0){two=two|v>>2;arr[j++]=two;three=(v&3)<<6}break;case 3:if(v>=0){arr[j++]=three|v}break}}return arr}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.base64={},{Base64:Base64})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var Base64=Package.base64.Base64;var EJSON,EJSONTest;(function(){EJSON={};EJSONTest={};var customTypes={};EJSON.addType=function(name,factory){if(_.has(customTypes,name))throw new Error("Type "+name+" already present");customTypes[name]=factory};var isInfOrNan=function(obj){return _.isNaN(obj)||obj===Infinity||obj===-Infinity};var builtinConverters=[{matchJSONValue:function(obj){return _.has(obj,"$date")&&_.size(obj)===1},matchObject:function(obj){return obj instanceof Date},toJSONValue:function(obj){return{$date:obj.getTime()}},fromJSONValue:function(obj){return new Date(obj.$date)}},{matchJSONValue:function(obj){return _.has(obj,"$InfNaN")&&_.size(obj)===1},matchObject:isInfOrNan,toJSONValue:function(obj){var sign;if(_.isNaN(obj))sign=0;else if(obj===Infinity)sign=1;else sign=-1;return{$InfNaN:sign}},fromJSONValue:function(obj){
	return obj.$InfNaN/0}},{matchJSONValue:function(obj){return _.has(obj,"$binary")&&_.size(obj)===1},matchObject:function(obj){return typeof Uint8Array!=="undefined"&&obj instanceof Uint8Array||obj&&_.has(obj,"$Uint8ArrayPolyfill")},toJSONValue:function(obj){return{$binary:Base64.encode(obj)}},fromJSONValue:function(obj){return Base64.decode(obj.$binary)}},{matchJSONValue:function(obj){return _.has(obj,"$escape")&&_.size(obj)===1},matchObject:function(obj){if(_.isEmpty(obj)||_.size(obj)>2){return false}return _.any(builtinConverters,function(converter){return converter.matchJSONValue(obj)})},toJSONValue:function(obj){var newObj={};_.each(obj,function(value,key){newObj[key]=EJSON.toJSONValue(value)});return{$escape:newObj}},fromJSONValue:function(obj){var newObj={};_.each(obj.$escape,function(value,key){newObj[key]=EJSON.fromJSONValue(value)});return newObj}},{matchJSONValue:function(obj){return _.has(obj,"$type")&&_.has(obj,"$value")&&_.size(obj)===2},matchObject:function(obj){return EJSON._isCustomType(obj)},toJSONValue:function(obj){var jsonValue=Meteor._noYieldsAllowed(function(){return obj.toJSONValue()});return{$type:obj.typeName(),$value:jsonValue}},fromJSONValue:function(obj){var typeName=obj.$type;if(!_.has(customTypes,typeName))throw new Error("Custom EJSON type "+typeName+" is not defined");var converter=customTypes[typeName];return Meteor._noYieldsAllowed(function(){return converter(obj.$value)})}}];EJSON._isCustomType=function(obj){return obj&&typeof obj.toJSONValue==="function"&&typeof obj.typeName==="function"&&_.has(customTypes,obj.typeName())};EJSON._getTypes=function(){return customTypes};EJSON._getConverters=function(){return builtinConverters};var adjustTypesToJSONValue=EJSON._adjustTypesToJSONValue=function(obj){if(obj===null)return null;var maybeChanged=toJSONValueHelper(obj);if(maybeChanged!==undefined)return maybeChanged;if(typeof obj!=="object")return obj;_.each(obj,function(value,key){if(typeof value!=="object"&&value!==undefined&&!isInfOrNan(value))return;var changed=toJSONValueHelper(value);if(changed){obj[key]=changed;return}adjustTypesToJSONValue(value)});return obj};var toJSONValueHelper=function(item){for(var i=0;i<builtinConverters.length;i++){var converter=builtinConverters[i];if(converter.matchObject(item)){return converter.toJSONValue(item)}}return undefined};EJSON.toJSONValue=function(item){var changed=toJSONValueHelper(item);if(changed!==undefined)return changed;if(typeof item==="object"){item=EJSON.clone(item);adjustTypesToJSONValue(item)}return item};var adjustTypesFromJSONValue=EJSON._adjustTypesFromJSONValue=function(obj){if(obj===null)return null;var maybeChanged=fromJSONValueHelper(obj);if(maybeChanged!==obj)return maybeChanged;if(typeof obj!=="object")return obj;_.each(obj,function(value,key){if(typeof value==="object"){var changed=fromJSONValueHelper(value);if(value!==changed){obj[key]=changed;return}adjustTypesFromJSONValue(value)}});return obj};var fromJSONValueHelper=function(value){if(typeof value==="object"&&value!==null){if(_.size(value)<=2&&_.all(value,function(v,k){return typeof k==="string"&&k.substr(0,1)==="$"})){for(var i=0;i<builtinConverters.length;i++){var converter=builtinConverters[i];if(converter.matchJSONValue(value)){return converter.fromJSONValue(value)}}}}return value};EJSON.fromJSONValue=function(item){var changed=fromJSONValueHelper(item);if(changed===item&&typeof item==="object"){item=EJSON.clone(item);adjustTypesFromJSONValue(item);return item}else{return changed}};EJSON.stringify=function(item,options){var json=EJSON.toJSONValue(item);if(options&&(options.canonical||options.indent)){return EJSON._canonicalStringify(json,options)}else{return JSON.stringify(json)}};EJSON.parse=function(item){if(typeof item!=="string")throw new Error("EJSON.parse argument should be a string");return EJSON.fromJSONValue(JSON.parse(item))};EJSON.isBinary=function(obj){return!!(typeof Uint8Array!=="undefined"&&obj instanceof Uint8Array||obj&&obj.$Uint8ArrayPolyfill)};EJSON.equals=function(a,b,options){var i;var keyOrderSensitive=!!(options&&options.keyOrderSensitive);if(a===b)return true;if(_.isNaN(a)&&_.isNaN(b))return true;if(!a||!b)return false;if(!(typeof a==="object"&&typeof b==="object"))return false;if(a instanceof Date&&b instanceof Date)return a.valueOf()===b.valueOf();if(EJSON.isBinary(a)&&EJSON.isBinary(b)){if(a.length!==b.length)return false;for(i=0;i<a.length;i++){if(a[i]!==b[i])return false}return true}if(typeof a.equals==="function")return a.equals(b,options);if(typeof b.equals==="function")return b.equals(a,options);if(a instanceof Array){if(!(b instanceof Array))return false;if(a.length!==b.length)return false;for(i=0;i<a.length;i++){if(!EJSON.equals(a[i],b[i],options))return false}return true}switch(EJSON._isCustomType(a)+EJSON._isCustomType(b)){case 1:return false;case 2:return EJSON.equals(EJSON.toJSONValue(a),EJSON.toJSONValue(b))}var ret;if(keyOrderSensitive){var bKeys=[];_.each(b,function(val,x){bKeys.push(x)});i=0;ret=_.all(a,function(val,x){if(i>=bKeys.length){return false}if(x!==bKeys[i]){return false}if(!EJSON.equals(val,b[bKeys[i]],options)){return false}i++;return true});return ret&&i===bKeys.length}else{i=0;ret=_.all(a,function(val,key){if(!_.has(b,key)){return false}if(!EJSON.equals(val,b[key],options)){return false}i++;return true});return ret&&_.size(b)===i}};EJSON.clone=function(v){var ret;if(typeof v!=="object")return v;if(v===null)return null;if(v instanceof Date)return new Date(v.getTime());if(v instanceof RegExp)return v;if(EJSON.isBinary(v)){ret=EJSON.newBinary(v.length);for(var i=0;i<v.length;i++){ret[i]=v[i]}return ret}if(_.isArray(v)||_.isArguments(v)){ret=[];for(i=0;i<v.length;i++)ret[i]=EJSON.clone(v[i]);return ret}if(typeof v.clone==="function"){return v.clone()}if(EJSON._isCustomType(v)){return EJSON.fromJSONValue(EJSON.clone(EJSON.toJSONValue(v)),true)}ret={};_.each(v,function(value,key){ret[key]=EJSON.clone(value)});return ret};EJSON.newBinary=Base64.newBinary}).call(this);(function(){function quote(string){return JSON.stringify(string)}var str=function(key,holder,singleIndent,outerIndent,canonical){var i;var k;var v;var length;var innerIndent=outerIndent;var partial;var value=holder[key];switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":return String(value);case"object":if(!value){return"null"}innerIndent=outerIndent+singleIndent;partial=[];if(_.isArray(value)||_.isArguments(value)){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value,singleIndent,innerIndent,canonical)||"null"}if(partial.length===0){v="[]"}else if(innerIndent){v="[\n"+innerIndent+partial.join(",\n"+innerIndent)+"\n"+outerIndent+"]"}else{v="["+partial.join(",")+"]"}return v}var keys=_.keys(value);if(canonical)keys=keys.sort();_.each(keys,function(k){v=str(k,value,singleIndent,innerIndent,canonical);if(v){partial.push(quote(k)+(innerIndent?": ":":")+v)}});if(partial.length===0){v="{}"}else if(innerIndent){v="{\n"+innerIndent+partial.join(",\n"+innerIndent)+"\n"+outerIndent+"}"}else{v="{"+partial.join(",")+"}"}return v}};EJSON._canonicalStringify=function(value,options){options=_.extend({indent:"",canonical:false},options);if(options.indent===true){options.indent="  "}else if(typeof options.indent==="number"){var newIndent="";for(var i=0;i<options.indent;i++){newIndent+=" "}options.indent=newIndent}return str("",{"":value},options.indent,"",options.canonical)}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.ejson={},{EJSON:EJSON,EJSONTest:EJSONTest})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var _=Package.underscore._;var EJSON=Package.ejson.EJSON;var check,Match;var require=meteorInstall({node_modules:{meteor:{check:{"match.js":["./isPlainObject.js",function(require,exports){var currentArgumentChecker=new Meteor.EnvironmentVariable;var isPlainObject=require("./isPlainObject.js").isPlainObject;var check=exports.check=function(value,pattern){var argChecker=currentArgumentChecker.getOrNullIfOutsideFiber();if(argChecker)argChecker.checking(value);var result=testSubtree(value,pattern);if(result){var err=new Match.Error(result.message);if(result.path){err.message+=" in field "+result.path;err.path=result.path}throw err}};var Match=exports.Match={Optional:function(pattern){return new Optional(pattern)},Maybe:function(pattern){return new Maybe(pattern)},OneOf:function(){return new OneOf(_.toArray(arguments))},Any:["__any__"],Where:function(condition){return new Where(condition)},ObjectIncluding:function(pattern){return new ObjectIncluding(pattern)},ObjectWithValues:function(pattern){return new ObjectWithValues(pattern)},Integer:["__integer__"],Error:Meteor.makeErrorType("Match.Error",function(msg){this.message="Match error: "+msg;this.path="";this.sanitizedError=new Meteor.Error(400,"Match failed")}),test:function(value,pattern){return!testSubtree(value,pattern)},_failIfArgumentsAreNotAllChecked:function(f,context,args,description){var argChecker=new ArgumentChecker(args,description);var result=currentArgumentChecker.withValue(argChecker,function(){return f.apply(context,args)});argChecker.throwUnlessAllArgumentsHaveBeenChecked();return result}};var Optional=function(pattern){this.pattern=pattern};var Maybe=function(pattern){this.pattern=pattern};var OneOf=function(choices){if(_.isEmpty(choices))throw new Error("Must provide at least one choice to Match.OneOf");this.choices=choices};var Where=function(condition){this.condition=condition};var ObjectIncluding=function(pattern){this.pattern=pattern};var ObjectWithValues=function(pattern){this.pattern=pattern};var stringForErrorMessage=function(value,options){options=options||{};if(value===null)return"null";if(options.onlyShowType){return typeof value}if(typeof value!=="object"){return EJSON.stringify(value)}try{JSON.stringify(value)}catch(stringifyError){if(stringifyError.name==="TypeError"){return typeof value}}return EJSON.stringify(value)};var typeofChecks=[[String,"string"],[Number,"number"],[Boolean,"boolean"],[Function,"function"],[undefined,"undefined"]];var testSubtree=function(value,pattern){if(pattern===Match.Any)return false;for(var i=0;i<typeofChecks.length;++i){if(pattern===typeofChecks[i][0]){if(typeof value===typeofChecks[i][1])return false;return{message:"Expected "+typeofChecks[i][1]+", got "+stringForErrorMessage(value,{onlyShowType:true}),path:""}}}if(pattern===null){if(value===null){return false}return{message:"Expected null, got "+stringForErrorMessage(value),path:""}}if(typeof pattern==="string"||typeof pattern==="number"||typeof pattern==="boolean"){if(value===pattern)return false;return{message:"Expected "+pattern+", got "+stringForErrorMessage(value),path:""}}if(pattern===Match.Integer){if(typeof value==="number"&&(value|0)===value)return false;return{message:"Expected Integer, got "+stringForErrorMessage(value),path:""}}if(pattern===Object)pattern=Match.ObjectIncluding({});if(pattern instanceof Array){if(pattern.length!==1){return{message:"Bad pattern: arrays must have one type element"+stringForErrorMessage(pattern),path:""}}if(!_.isArray(value)&&!_.isArguments(value)){return{message:"Expected array, got "+stringForErrorMessage(value),path:""}}for(var i=0,length=value.length;i<length;i++){var result=testSubtree(value[i],pattern[0]);if(result){result.path=_prependPath(i,result.path);return result}}return false}if(pattern instanceof Where){var result;try{result=pattern.condition(value)}catch(err){if(!(err instanceof Match.Error))throw err;return{message:err.message,path:err.path}}if(result)return false;return{message:"Failed Match.Where validation",path:""}}if(pattern instanceof Maybe){pattern=Match.OneOf(undefined,null,pattern.pattern)}else if(pattern instanceof Optional){pattern=Match.OneOf(undefined,pattern.pattern)}if(pattern instanceof OneOf){for(var i=0;i<pattern.choices.length;++i){var result=testSubtree(value,pattern.choices[i]);if(!result){return false}}return{message:"Failed Match.OneOf, Match.Maybe or Match.Optional validation",path:""}}if(pattern instanceof Function){if(value instanceof pattern)return false;return{message:"Expected "+(pattern.name||"particular constructor"),path:""}}var unknownKeysAllowed=false;var unknownKeyPattern;if(pattern instanceof ObjectIncluding){unknownKeysAllowed=true;pattern=pattern.pattern}if(pattern instanceof ObjectWithValues){unknownKeysAllowed=true;unknownKeyPattern=[pattern.pattern];pattern={}}if(typeof pattern!=="object"){return{message:"Bad pattern: unknown pattern type",path:""}}if(typeof value!=="object"){return{message:"Expected object, got "+typeof value,path:""}}if(value===null){return{message:"Expected object, got null",path:""}}if(!isPlainObject(value)){return{message:"Expected plain object",path:""}}var requiredPatterns={};var optionalPatterns={};_.each(pattern,function(subPattern,key){if(subPattern instanceof Optional||subPattern instanceof Maybe)optionalPatterns[key]=subPattern.pattern;else requiredPatterns[key]=subPattern});var allKeys=function(obj){var keys=[];if(_.isObject(obj)){for(var key in obj)keys.push(key)}return keys};for(var keys=allKeys(value),i=0,length=keys.length;i<length;i++){var key=keys[i];var subValue=value[key];if(_.has(requiredPatterns,key)){var result=testSubtree(subValue,requiredPatterns[key]);if(result){result.path=_prependPath(key,result.path);return result}delete requiredPatterns[key]}else if(_.has(optionalPatterns,key)){var result=testSubtree(subValue,optionalPatterns[key]);if(result){result.path=_prependPath(key,result.path);return result}}else{if(!unknownKeysAllowed){return{message:"Unknown key",path:key}}if(unknownKeyPattern){var result=testSubtree(subValue,unknownKeyPattern[0]);if(result){result.path=_prependPath(key,result.path);return result}}}}var keys=_.keys(requiredPatterns);if(keys.length){return{message:"Missing key '"+keys[0]+"'",path:""}}};var ArgumentChecker=function(args,description){var self=this;self.args=_.clone(args);self.args.reverse();self.description=description};_.extend(ArgumentChecker.prototype,{checking:function(value){var self=this;if(self._checkingOneValue(value))return;if(_.isArray(value)||_.isArguments(value)){_.each(value,_.bind(self._checkingOneValue,self))}},_checkingOneValue:function(value){var self=this;for(var i=0;i<self.args.length;++i){if(value===self.args[i]||_.isNaN(value)&&_.isNaN(self.args[i])){self.args.splice(i,1);return true}}return false},throwUnlessAllArgumentsHaveBeenChecked:function(){var self=this;if(!_.isEmpty(self.args))throw new Error("Did not check() all arguments during "+self.description)}});var _jsKeywords=["do","if","in","for","let","new","try","var","case","else","enum","eval","false","null","this","true","void","with","break","catch","class","const","super","throw","while","yield","delete","export","import","public","return","static","switch","typeof","default","extends","finally","package","private","continue","debugger","function","arguments","interface","protected","implements","instanceof"];var _prependPath=function(key,base){if(typeof key==="number"||key.match(/^[0-9]+$/))key="["+key+"]";else if(!key.match(/^[a-z_$][0-9a-z_$]*$/i)||_.contains(_jsKeywords,key))key=JSON.stringify([key]);if(base&&base[0]!=="[")return key+"."+base;return key+base}}],"isPlainObject.js":function(require,exports){var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(name,i){class2type["[object "+name+"]"]=name.toLowerCase()});function type(obj){if(obj==null){return obj+""}return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj}function isWindow(obj){return obj!=null&&obj==obj.window}exports.isPlainObject=function(obj){var key;if(!obj||type(obj)!=="object"||obj.nodeType||isWindow(obj)){return false}try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false}}catch(e){return false}if(support.ownLast){for(key in obj){return hasOwn.call(obj,key)}}for(key in obj){}return key===undefined||hasOwn.call(obj,key)}}}}}},{extensions:[".js",".json"]});var exports=require("./node_modules/meteor/check/match.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.check=exports,{check:check,Match:Match})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var Symbol=Package["ecmascript-runtime"].Symbol;var Map=Package["ecmascript-runtime"].Map;var Set=Package["ecmascript-runtime"].Set;var meteorBabelHelpers=Package["babel-runtime"].meteorBabelHelpers;var Promise=Package.promise.Promise;var Random;var require=meteorInstall({node_modules:{meteor:{random:{"random.js":function(require){if(Meteor.isServer)var nodeCrypto=Npm.require("crypto");var Alea=function Alea(){function Mash(){var n=4022871197;var mash=function mash(data){data=data.toString();for(var i=0;i<data.length;i++){n+=data.charCodeAt(i);var h=.02519603282416938*n;n=h>>>0;h-=n;h*=n;n=h>>>0;h-=n;n+=h*4294967296}return(n>>>0)*2.3283064365386963e-10};mash.version="Mash 0.9";return mash}return function(args){var s0=0;var s1=0;var s2=0;var c=1;if(args.length==0){args=[+new Date]}var mash=Mash();s0=mash(" ");s1=mash(" ");s2=mash(" ");for(var i=0;i<args.length;i++){s0-=mash(args[i]);if(s0<0){s0+=1}s1-=mash(args[i]);if(s1<0){s1+=1}s2-=mash(args[i]);if(s2<0){s2+=1}}mash=null;var random=function random(){var t=2091639*s0+c*2.3283064365386963e-10;s0=s1;s1=s2;return s2=t-(c=t|0)};random.uint32=function(){return random()*4294967296};random.fract53=function(){return random()+(random()*2097152|0)*1.1102230246251565e-16};random.version="Alea 0.9";random.args=args;return random}(Array.prototype.slice.call(arguments))};var UNMISTAKABLE_CHARS="23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz";var BASE64_CHARS="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789-_";var RandomGenerator=function RandomGenerator(type,options){var self=this;self.type=type;if(!RandomGenerator.Type[type]){throw new Error("Unknown random generator type: "+type)}if(type===RandomGenerator.Type.ALEA){if(!options.seeds){throw new Error("No seeds were provided for Alea PRNG")}self.alea=Alea.apply(null,options.seeds)}};RandomGenerator.Type={NODE_CRYPTO:"NODE_CRYPTO",BROWSER_CRYPTO:"BROWSER_CRYPTO",ALEA:"ALEA"};RandomGenerator.prototype.fraction=function(){var self=this;if(self.type===RandomGenerator.Type.ALEA){return self.alea()}else if(self.type===RandomGenerator.Type.NODE_CRYPTO){var numerator=parseInt(self.hexString(8),16);return numerator*2.3283064365386963e-10}else if(self.type===RandomGenerator.Type.BROWSER_CRYPTO){var array=new Uint32Array(1);window.crypto.getRandomValues(array);return array[0]*2.3283064365386963e-10}else{throw new Error("Unknown random generator type: "+self.type)}};RandomGenerator.prototype.hexString=function(digits){var self=this;if(self.type===RandomGenerator.Type.NODE_CRYPTO){var numBytes=Math.ceil(digits/2);var bytes;try{bytes=nodeCrypto.randomBytes(numBytes)}catch(e){bytes=nodeCrypto.pseudoRandomBytes(numBytes)}var result=bytes.toString("hex");return result.substring(0,digits)}else{return this._randomString(digits,"0123456789abcdef")}};RandomGenerator.prototype._randomString=function(charsCount,alphabet){var self=this;var digits=[];for(var i=0;i<charsCount;i++){digits[i]=self.choice(alphabet)}return digits.join("")};RandomGenerator.prototype.id=function(charsCount){var self=this;if(charsCount===undefined)charsCount=17;return self._randomString(charsCount,UNMISTAKABLE_CHARS)};RandomGenerator.prototype.secret=function(charsCount){var self=this;if(charsCount===undefined)charsCount=43;return self._randomString(charsCount,BASE64_CHARS)};RandomGenerator.prototype.choice=function(arrayOrString){var index=Math.floor(this.fraction()*arrayOrString.length);if(typeof arrayOrString==="string")return arrayOrString.substr(index,1);else return arrayOrString[index]};var height=typeof window!=="undefined"&&window.innerHeight||typeof document!=="undefined"&&document.documentElement&&document.documentElement.clientHeight||typeof document!=="undefined"&&document.body&&document.body.clientHeight||1;var width=typeof window!=="undefined"&&window.innerWidth||typeof document!=="undefined"&&document.documentElement&&document.documentElement.clientWidth||typeof document!=="undefined"&&document.body&&document.body.clientWidth||1;var agent=typeof navigator!=="undefined"&&navigator.userAgent||"";function createAleaGeneratorWithGeneratedSeed(){return new RandomGenerator(RandomGenerator.Type.ALEA,{seeds:[new Date,height,width,agent,Math.random()]})}if(Meteor.isServer){Random=new RandomGenerator(RandomGenerator.Type.NODE_CRYPTO)}else{if(typeof window!=="undefined"&&window.crypto&&window.crypto.getRandomValues){Random=new RandomGenerator(RandomGenerator.Type.BROWSER_CRYPTO)}else{Random=createAleaGeneratorWithGeneratedSeed()}}Random.createWithSeeds=function(){for(var _len=arguments.length,seeds=Array(_len),_key=0;_key<_len;_key++){seeds[_key]=arguments[_key]}if(seeds.length===0){throw new Error("No seeds were provided")}return new RandomGenerator(RandomGenerator.Type.ALEA,{seeds:seeds})};Random.insecure=createAleaGeneratorWithGeneratedSeed()},"deprecated.js":function(){Meteor.uuid=function(){var HEX_DIGITS="0123456789abcdef";var s=[];for(var i=0;i<36;i++){s[i]=Random.choice(HEX_DIGITS)}s[14]="4";s[19]=HEX_DIGITS.substr(parseInt(s[19],16)&3|8,1);s[8]=s[13]=s[18]=s[23]="-";var uuid=s.join("");return uuid}}}}}},{extensions:[".js",".json"]});require("./node_modules/meteor/random/random.js");require("./node_modules/meteor/random/deprecated.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.random={},{Random:Random})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var Tracker,Deps;(function(){Tracker={};Tracker.active=false;Tracker.currentComputation=null;Tracker._computations={};var setCurrentComputation=function(c){Tracker.currentComputation=c;Tracker.active=!!c};var _debugFunc=function(){return typeof Meteor!=="undefined"?Meteor._debug:typeof console!=="undefined"&&console.error?function(){console.error.apply(console,arguments)}:function(){}};var _maybeSuppressMoreLogs=function(messagesLength){if(typeof Meteor!=="undefined"){if(Meteor._suppressed_log_expected()){Meteor._suppress_log(messagesLength-1)}}};var _throwOrLog=function(from,e){if(throwFirstError){throw e}else{var printArgs=["Exception from Tracker "+from+" function:"];if(e.stack&&e.message&&e.name){var idx=e.stack.indexOf(e.message);if(idx<0||idx>e.name.length+2){var message=e.name+": "+e.message;printArgs.push(message)}}printArgs.push(e.stack);_maybeSuppressMoreLogs(printArgs.length);for(var i=0;i<printArgs.length;i++){_debugFunc()(printArgs[i])}}};var withNoYieldsAllowed=function(f){if(typeof Meteor==="undefined"||Meteor.isClient){return f}else{return function(){var args=arguments;Meteor._noYieldsAllowed(function(){f.apply(null,args)})}}};var nextId=1;var pendingComputations=[];var willFlush=false;var inFlush=false;var inCompute=false;var throwFirstError=false;var afterFlushCallbacks=[];var requireFlush=function(){if(!willFlush){if(typeof Meteor!=="undefined")Meteor._setImmediate(Tracker._runFlush);else setTimeout(Tracker._runFlush,0);willFlush=true}};var constructingComputation=false;Tracker.Computation=function(f,parent,onError){if(!constructingComputation)throw new Error("Tracker.Computation constructor is private; use Tracker.autorun");constructingComputation=false;var self=this;self.stopped=false;self.invalidated=false;self.firstRun=true;self._id=nextId++;self._onInvalidateCallbacks=[];self._onStopCallbacks=[];self._parent=parent;self._func=f;self._onError=onError;self._recomputing=false;Tracker._computations[self._id]=self;var errored=true;try{self._compute();errored=false}finally{self.firstRun=false;if(errored)self.stop()}};Tracker.Computation.prototype.onInvalidate=function(f){var self=this;if(typeof f!=="function")throw new Error("onInvalidate requires a function");if(self.invalidated){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self)})}else{self._onInvalidateCallbacks.push(f)}};Tracker.Computation.prototype.onStop=function(f){var self=this;if(typeof f!=="function")throw new Error("onStop requires a function");if(self.stopped){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self)})}else{self._onStopCallbacks.push(f)}};Tracker.Computation.prototype.invalidate=function(){var self=this;if(!self.invalidated){if(!self._recomputing&&!self.stopped){requireFlush();pendingComputations.push(this)}self.invalidated=true;for(var i=0,f;f=self._onInvalidateCallbacks[i];i++){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self)})}self._onInvalidateCallbacks=[]}};Tracker.Computation.prototype.stop=function(){var self=this;if(!self.stopped){self.stopped=true;self.invalidate();delete Tracker._computations[self._id];for(var i=0,f;f=self._onStopCallbacks[i];i++){Tracker.nonreactive(function(){withNoYieldsAllowed(f)(self)})}self._onStopCallbacks=[]}};Tracker.Computation.prototype._compute=function(){var self=this;self.invalidated=false;var previous=Tracker.currentComputation;setCurrentComputation(self);var previousInCompute=inCompute;inCompute=true;try{withNoYieldsAllowed(self._func)(self)}finally{setCurrentComputation(previous);inCompute=previousInCompute}};Tracker.Computation.prototype._needsRecompute=function(){var self=this;return self.invalidated&&!self.stopped};Tracker.Computation.prototype._recompute=function(){var self=this;self._recomputing=true;try{if(self._needsRecompute()){try{self._compute()}catch(e){if(self._onError){self._onError(e)}else{_throwOrLog("recompute",e)}}}}finally{self._recomputing=false}};Tracker.Computation.prototype.flush=function(){var self=this;if(self._recomputing)return;self._recompute()};Tracker.Computation.prototype.run=function(){var self=this;self.invalidate();self.flush()};Tracker.Dependency=function(){this._dependentsById={}};Tracker.Dependency.prototype.depend=function(computation){if(!computation){if(!Tracker.active)return false;computation=Tracker.currentComputation}var self=this;var id=computation._id;if(!(id in self._dependentsById)){self._dependentsById[id]=computation;computation.onInvalidate(function(){delete self._dependentsById[id]});return true}return false};Tracker.Dependency.prototype.changed=function(){var self=this;for(var id in self._dependentsById)self._dependentsById[id].invalidate()};Tracker.Dependency.prototype.hasDependents=function(){var self=this;for(var id in self._dependentsById)return true;return false};Tracker.flush=function(options){Tracker._runFlush({finishSynchronously:true,throwFirstError:options&&options._throwFirstError})};Tracker._runFlush=function(options){if(inFlush)throw new Error("Can't call Tracker.flush while flushing");if(inCompute)throw new Error("Can't flush inside Tracker.autorun");options=options||{};inFlush=true;willFlush=true;throwFirstError=!!options.throwFirstError;var recomputedCount=0;var finishedTry=false;try{while(pendingComputations.length||afterFlushCallbacks.length){while(pendingComputations.length){var comp=pendingComputations.shift();comp._recompute();if(comp._needsRecompute()){pendingComputations.unshift(comp)}if(!options.finishSynchronously&&++recomputedCount>1e3){finishedTry=true;return}}if(afterFlushCallbacks.length){var func=afterFlushCallbacks.shift();try{func()}catch(e){_throwOrLog("afterFlush",e)}}}finishedTry=true}finally{if(!finishedTry){inFlush=false;Tracker._runFlush({finishSynchronously:options.finishSynchronously,throwFirstError:false})}willFlush=false;inFlush=false;if(pendingComputations.length||afterFlushCallbacks.length){if(options.finishSynchronously){throw new Error("still have more to do?")}setTimeout(requireFlush,10)}}};Tracker.autorun=function(f,options){if(typeof f!=="function")throw new Error("Tracker.autorun requires a function argument");options=options||{};constructingComputation=true;var c=new Tracker.Computation(f,Tracker.currentComputation,options.onError);if(Tracker.active)Tracker.onInvalidate(function(){c.stop()});return c};Tracker.nonreactive=function(f){var previous=Tracker.currentComputation;setCurrentComputation(null);try{return f()}finally{setCurrentComputation(previous)}};Tracker.onInvalidate=function(f){if(!Tracker.active)throw new Error("Tracker.onInvalidate requires a currentComputation");Tracker.currentComputation.onInvalidate(f)};Tracker.afterFlush=function(f){afterFlushCallbacks.push(f);requireFlush()}}).call(this);(function(){Meteor.flush=Tracker.flush;Meteor.autorun=Tracker.autorun;Meteor.autosubscribe=Tracker.autorun;Tracker.depend=function(d){return d.depend()};Deps=Tracker}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.tracker={},{Tracker:Tracker,Deps:Deps})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var Random=Package.random.Random;var Retry;(function(){Retry=function(options){var self=this;_.extend(self,_.defaults(_.clone(options||{}),{baseTimeout:1e3,exponent:2.2,maxTimeout:5*6e4,minTimeout:10,minCount:2,fuzz:.5}));self.retryTimer=null};_.extend(Retry.prototype,{clear:function(){var self=this;if(self.retryTimer)clearTimeout(self.retryTimer);self.retryTimer=null},_timeout:function(count){var self=this;if(count<self.minCount)return self.minTimeout;var timeout=Math.min(self.maxTimeout,self.baseTimeout*Math.pow(self.exponent,count));timeout=timeout*(Random.fraction()*self.fuzz+(1-self.fuzz/2));return timeout},retryLater:function(count,fn){var self=this;var timeout=self._timeout(count);if(self.retryTimer)clearTimeout(self.retryTimer);self.retryTimer=Meteor.setTimeout(fn,timeout);return timeout}})}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.retry={},{Retry:Retry})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var EJSON=Package.ejson.EJSON;var IdMap;(function(){IdMap=function(idStringify,idParse){var self=this;self._map={};self._idStringify=idStringify||JSON.stringify;self._idParse=idParse||JSON.parse};_.extend(IdMap.prototype,{get:function(id){var self=this;var key=self._idStringify(id);return self._map[key]},set:function(id,value){var self=this;var key=self._idStringify(id);self._map[key]=value},remove:function(id){var self=this;var key=self._idStringify(id);delete self._map[key]},has:function(id){var self=this;var key=self._idStringify(id);return _.has(self._map,key)},empty:function(){var self=this;return _.isEmpty(self._map)},clear:function(){var self=this;self._map={}},forEach:function(iterator){var self=this;var keys=_.keys(self._map);for(var i=0;i<keys.length;i++){var breakIfFalse=iterator.call(null,self._map[keys[i]],self._idParse(keys[i]));if(breakIfFalse===false)return}},size:function(){var self=this;return _.size(self._map)},setDefault:function(id,def){var self=this;var key=self._idStringify(id);if(_.has(self._map,key))return self._map[key];self._map[key]=def;return def},clone:function(){var self=this;var clone=new IdMap(self._idStringify,self._idParse);self.forEach(function(value,id){clone.set(id,EJSON.clone(value))});return clone}})}).call(this);if(typeof Package==="undefined")Package={};
	(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["id-map"]={},{IdMap:IdMap})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var OrderedDict;(function(){var element=function(key,value,next,prev){return{key:key,value:value,next:next,prev:prev}};OrderedDict=function(){var self=this;self._dict={};self._first=null;self._last=null;self._size=0;var args=_.toArray(arguments);self._stringify=function(x){return x};if(typeof args[0]==="function")self._stringify=args.shift();_.each(args,function(kv){self.putBefore(kv[0],kv[1],null)})};_.extend(OrderedDict.prototype,{_k:function(key){return" "+this._stringify(key)},empty:function(){var self=this;return!self._first},size:function(){var self=this;return self._size},_linkEltIn:function(elt){var self=this;if(!elt.next){elt.prev=self._last;if(self._last)self._last.next=elt;self._last=elt}else{elt.prev=elt.next.prev;elt.next.prev=elt;if(elt.prev)elt.prev.next=elt}if(self._first===null||self._first===elt.next)self._first=elt},_linkEltOut:function(elt){var self=this;if(elt.next)elt.next.prev=elt.prev;if(elt.prev)elt.prev.next=elt.next;if(elt===self._last)self._last=elt.prev;if(elt===self._first)self._first=elt.next},putBefore:function(key,item,before){var self=this;if(self._dict[self._k(key)])throw new Error("Item "+key+" already present in OrderedDict");var elt=before?element(key,item,self._dict[self._k(before)]):element(key,item,null);if(elt.next===undefined)throw new Error("could not find item to put this one before");self._linkEltIn(elt);self._dict[self._k(key)]=elt;self._size++},append:function(key,item){var self=this;self.putBefore(key,item,null)},remove:function(key){var self=this;var elt=self._dict[self._k(key)];if(elt===undefined)throw new Error("Item "+key+" not present in OrderedDict");self._linkEltOut(elt);self._size--;delete self._dict[self._k(key)];return elt.value},get:function(key){var self=this;if(self.has(key))return self._dict[self._k(key)].value;return undefined},has:function(key){var self=this;return _.has(self._dict,self._k(key))},forEach:function(iter){var self=this;var i=0;var elt=self._first;while(elt!==null){var b=iter(elt.value,elt.key,i);if(b===OrderedDict.BREAK)return;elt=elt.next;i++}},first:function(){var self=this;if(self.empty())return undefined;return self._first.key},firstValue:function(){var self=this;if(self.empty())return undefined;return self._first.value},last:function(){var self=this;if(self.empty())return undefined;return self._last.key},lastValue:function(){var self=this;if(self.empty())return undefined;return self._last.value},prev:function(key){var self=this;if(self.has(key)){var elt=self._dict[self._k(key)];if(elt.prev)return elt.prev.key}return null},next:function(key){var self=this;if(self.has(key)){var elt=self._dict[self._k(key)];if(elt.next)return elt.next.key}return null},moveBefore:function(key,before){var self=this;var elt=self._dict[self._k(key)];var eltBefore=before?self._dict[self._k(before)]:null;if(elt===undefined)throw new Error("Item to move is not present");if(eltBefore===undefined){throw new Error("Could not find element to move this one before")}if(eltBefore===elt.next)return;self._linkEltOut(elt);elt.next=eltBefore;self._linkEltIn(elt)},indexOf:function(key){var self=this;var ret=null;self.forEach(function(v,k,i){if(self._k(k)===self._k(key)){ret=i;return OrderedDict.BREAK}return undefined});return ret},_checkRep:function(){var self=this;_.each(self._dict,function(k,v){if(v.next===v)throw new Error("Next is a loop");if(v.prev===v)throw new Error("Prev is a loop")})}});OrderedDict.BREAK={break:true}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["ordered-dict"]={},{OrderedDict:OrderedDict})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var GeoJSON;var require=meteorInstall({node_modules:{meteor:{"geojson-utils":{"main.js":["./geojson-utils.js",function(require,exports){exports.GeoJSON=require("./geojson-utils.js")}],"geojson-utils.js":function(require,exports,module){(function(){var gju={};if(typeof module!=="undefined"&&module.exports){module.exports=gju}gju.lineStringsIntersect=function(l1,l2){var intersects=[];for(var i=0;i<=l1.coordinates.length-2;++i){for(var j=0;j<=l2.coordinates.length-2;++j){var a1={x:l1.coordinates[i][1],y:l1.coordinates[i][0]},a2={x:l1.coordinates[i+1][1],y:l1.coordinates[i+1][0]},b1={x:l2.coordinates[j][1],y:l2.coordinates[j][0]},b2={x:l2.coordinates[j+1][1],y:l2.coordinates[j+1][0]},ua_t=(b2.x-b1.x)*(a1.y-b1.y)-(b2.y-b1.y)*(a1.x-b1.x),ub_t=(a2.x-a1.x)*(a1.y-b1.y)-(a2.y-a1.y)*(a1.x-b1.x),u_b=(b2.y-b1.y)*(a2.x-a1.x)-(b2.x-b1.x)*(a2.y-a1.y);if(u_b!=0){var ua=ua_t/u_b,ub=ub_t/u_b;if(0<=ua&&ua<=1&&0<=ub&&ub<=1){intersects.push({type:"Point",coordinates:[a1.x+ua*(a2.x-a1.x),a1.y+ua*(a2.y-a1.y)]})}}}}if(intersects.length==0)intersects=false;return intersects};function boundingBoxAroundPolyCoords(coords){var xAll=[],yAll=[];for(var i=0;i<coords[0].length;i++){xAll.push(coords[0][i][1]);yAll.push(coords[0][i][0])}xAll=xAll.sort(function(a,b){return a-b});yAll=yAll.sort(function(a,b){return a-b});return[[xAll[0],yAll[0]],[xAll[xAll.length-1],yAll[yAll.length-1]]]}gju.pointInBoundingBox=function(point,bounds){return!(point.coordinates[1]<bounds[0][0]||point.coordinates[1]>bounds[1][0]||point.coordinates[0]<bounds[0][1]||point.coordinates[0]>bounds[1][1])};function pnpoly(x,y,coords){var vert=[[0,0]];for(var i=0;i<coords.length;i++){for(var j=0;j<coords[i].length;j++){vert.push(coords[i][j])}vert.push([0,0])}var inside=false;for(var i=0,j=vert.length-1;i<vert.length;j=i++){if(vert[i][0]>y!=vert[j][0]>y&&x<(vert[j][1]-vert[i][1])*(y-vert[i][0])/(vert[j][0]-vert[i][0])+vert[i][1])inside=!inside}return inside}gju.pointInPolygon=function(p,poly){var coords=poly.type=="Polygon"?[poly.coordinates]:poly.coordinates;var insideBox=false;for(var i=0;i<coords.length;i++){if(gju.pointInBoundingBox(p,boundingBoxAroundPolyCoords(coords[i])))insideBox=true}if(!insideBox)return false;var insidePoly=false;for(var i=0;i<coords.length;i++){if(pnpoly(p.coordinates[1],p.coordinates[0],coords[i]))insidePoly=true}return insidePoly};gju.numberToRadius=function(number){return number*Math.PI/180};gju.numberToDegree=function(number){return number*180/Math.PI};gju.drawCircle=function(radiusInMeters,centerPoint,steps){var center=[centerPoint.coordinates[1],centerPoint.coordinates[0]],dist=radiusInMeters/1e3/6371,radCenter=[gju.numberToRadius(center[0]),gju.numberToRadius(center[1])],steps=steps||15,poly=[[center[0],center[1]]];for(var i=0;i<steps;i++){var brng=2*Math.PI*i/steps;var lat=Math.asin(Math.sin(radCenter[0])*Math.cos(dist)+Math.cos(radCenter[0])*Math.sin(dist)*Math.cos(brng));var lng=radCenter[1]+Math.atan2(Math.sin(brng)*Math.sin(dist)*Math.cos(radCenter[0]),Math.cos(dist)-Math.sin(radCenter[0])*Math.sin(lat));poly[i]=[];poly[i][1]=gju.numberToDegree(lat);poly[i][0]=gju.numberToDegree(lng)}return{type:"Polygon",coordinates:[poly]}};gju.rectangleCentroid=function(rectangle){var bbox=rectangle.coordinates[0];var xmin=bbox[0][0],ymin=bbox[0][1],xmax=bbox[2][0],ymax=bbox[2][1];var xwidth=xmax-xmin;var ywidth=ymax-ymin;return{type:"Point",coordinates:[xmin+xwidth/2,ymin+ywidth/2]}};gju.pointDistance=function(pt1,pt2){var lon1=pt1.coordinates[0],lat1=pt1.coordinates[1],lon2=pt2.coordinates[0],lat2=pt2.coordinates[1],dLat=gju.numberToRadius(lat2-lat1),dLon=gju.numberToRadius(lon2-lon1),a=Math.pow(Math.sin(dLat/2),2)+Math.cos(gju.numberToRadius(lat1))*Math.cos(gju.numberToRadius(lat2))*Math.pow(Math.sin(dLon/2),2),c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return 6371*c*1e3},gju.geometryWithinRadius=function(geometry,center,radius){if(geometry.type=="Point"){return gju.pointDistance(geometry,center)<=radius}else if(geometry.type=="LineString"||geometry.type=="Polygon"){var point={};var coordinates;if(geometry.type=="Polygon"){coordinates=geometry.coordinates[0]}else{coordinates=geometry.coordinates}for(var i in coordinates){point.coordinates=coordinates[i];if(gju.pointDistance(point,center)>radius){return false}}}return true};gju.area=function(polygon){var area=0;var points=polygon.coordinates[0];var j=points.length-1;var p1,p2;for(var i=0;i<points.length;j=i++){var p1={x:points[i][1],y:points[i][0]};var p2={x:points[j][1],y:points[j][0]};area+=p1.x*p2.y;area-=p1.y*p2.x}area/=2;return area},gju.centroid=function(polygon){var f,x=0,y=0;var points=polygon.coordinates[0];var j=points.length-1;var p1,p2;for(var i=0;i<points.length;j=i++){var p1={x:points[i][1],y:points[i][0]};var p2={x:points[j][1],y:points[j][0]};f=p1.x*p2.y-p2.x*p1.y;x+=(p1.x+p2.x)*f;y+=(p1.y+p2.y)*f}f=gju.area(polygon)*6;return{type:"Point",coordinates:[y/f,x/f]}},gju.simplify=function(source,kink){kink=kink||20;source=source.map(function(o){return{lng:o.coordinates[0],lat:o.coordinates[1]}});var n_source,n_stack,n_dest,start,end,i,sig;var dev_sqr,max_dev_sqr,band_sqr;var x12,y12,d12,x13,y13,d13,x23,y23,d23;var F=Math.PI/180*.5;var index=new Array;var sig_start=new Array;var sig_end=new Array;if(source.length<3)return source;n_source=source.length;band_sqr=kink*360/(2*Math.PI*6378137);band_sqr*=band_sqr;n_dest=0;sig_start[0]=0;sig_end[0]=n_source-1;n_stack=1;while(n_stack>0){start=sig_start[n_stack-1];end=sig_end[n_stack-1];n_stack--;if(end-start>1){x12=source[end].lng()-source[start].lng();y12=source[end].lat()-source[start].lat();if(Math.abs(x12)>180)x12=360-Math.abs(x12);x12*=Math.cos(F*(source[end].lat()+source[start].lat()));d12=x12*x12+y12*y12;for(i=start+1,sig=start,max_dev_sqr=-1;i<end;i++){x13=source[i].lng()-source[start].lng();y13=source[i].lat()-source[start].lat();if(Math.abs(x13)>180)x13=360-Math.abs(x13);x13*=Math.cos(F*(source[i].lat()+source[start].lat()));d13=x13*x13+y13*y13;x23=source[i].lng()-source[end].lng();y23=source[i].lat()-source[end].lat();if(Math.abs(x23)>180)x23=360-Math.abs(x23);x23*=Math.cos(F*(source[i].lat()+source[end].lat()));d23=x23*x23+y23*y23;if(d13>=d12+d23)dev_sqr=d23;else if(d23>=d12+d13)dev_sqr=d13;else dev_sqr=(x13*y12-y13*x12)*(x13*y12-y13*x12)/d12;if(dev_sqr>max_dev_sqr){sig=i;max_dev_sqr=dev_sqr}}if(max_dev_sqr<band_sqr){index[n_dest]=start;n_dest++}else{n_stack++;sig_start[n_stack-1]=sig;sig_end[n_stack-1]=end;n_stack++;sig_start[n_stack-1]=start;sig_end[n_stack-1]=sig}}else{index[n_dest]=start;n_dest++}}index[n_dest]=n_source-1;n_dest++;var r=new Array;for(var i=0;i<n_dest;i++)r.push(source[index[i]]);return r.map(function(o){return{type:"Point",coordinates:[o.lng,o.lat]}})};gju.destinationPoint=function(pt,brng,dist){dist=dist/6371;brng=gju.numberToRadius(brng);var lat1=gju.numberToRadius(pt.coordinates[0]);var lon1=gju.numberToRadius(pt.coordinates[1]);var lat2=Math.asin(Math.sin(lat1)*Math.cos(dist)+Math.cos(lat1)*Math.sin(dist)*Math.cos(brng));var lon2=lon1+Math.atan2(Math.sin(brng)*Math.sin(dist)*Math.cos(lat1),Math.cos(dist)-Math.sin(lat1)*Math.sin(lat2));lon2=(lon2+3*Math.PI)%(2*Math.PI)-Math.PI;return{type:"Point",coordinates:[gju.numberToDegree(lat2),gju.numberToDegree(lon2)]}}})()}}}}},{extensions:[".js",".json"]});var exports=require("./node_modules/meteor/geojson-utils/main.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["geojson-utils"]=exports,{GeoJSON:GeoJSON})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var EJSON=Package.ejson.EJSON;var DiffSequence;(function(){DiffSequence={};DiffSequence.diffQueryChanges=function(ordered,oldResults,newResults,observer,options){if(ordered)DiffSequence.diffQueryOrderedChanges(oldResults,newResults,observer,options);else DiffSequence.diffQueryUnorderedChanges(oldResults,newResults,observer,options)};DiffSequence.diffQueryUnorderedChanges=function(oldResults,newResults,observer,options){options=options||{};var projectionFn=options.projectionFn||EJSON.clone;if(observer.movedBefore){throw new Error("_diffQueryUnordered called with a movedBefore observer!")}newResults.forEach(function(newDoc,id){var oldDoc=oldResults.get(id);if(oldDoc){if(observer.changed&&!EJSON.equals(oldDoc,newDoc)){var projectedNew=projectionFn(newDoc);var projectedOld=projectionFn(oldDoc);var changedFields=DiffSequence.makeChangedFields(projectedNew,projectedOld);if(!_.isEmpty(changedFields)){observer.changed(id,changedFields)}}}else if(observer.added){var fields=projectionFn(newDoc);delete fields._id;observer.added(newDoc._id,fields)}});if(observer.removed){oldResults.forEach(function(oldDoc,id){if(!newResults.has(id))observer.removed(id)})}};DiffSequence.diffQueryOrderedChanges=function(old_results,new_results,observer,options){options=options||{};var projectionFn=options.projectionFn||EJSON.clone;var new_presence_of_id={};_.each(new_results,function(doc){if(new_presence_of_id[doc._id])Meteor._debug("Duplicate _id in new_results");new_presence_of_id[doc._id]=true});var old_index_of_id={};_.each(old_results,function(doc,i){if(doc._id in old_index_of_id)Meteor._debug("Duplicate _id in old_results");old_index_of_id[doc._id]=i});var unmoved=[];var max_seq_len=0;var N=new_results.length;var seq_ends=new Array(N);var ptrs=new Array(N);var old_idx_seq=function(i_new){return old_index_of_id[new_results[i_new]._id]};for(var i=0;i<N;i++){if(old_index_of_id[new_results[i]._id]!==undefined){var j=max_seq_len;while(j>0){if(old_idx_seq(seq_ends[j-1])<old_idx_seq(i))break;j--}ptrs[i]=j===0?-1:seq_ends[j-1];seq_ends[j]=i;if(j+1>max_seq_len)max_seq_len=j+1}}var idx=max_seq_len===0?-1:seq_ends[max_seq_len-1];while(idx>=0){unmoved.push(idx);idx=ptrs[idx]}unmoved.reverse();unmoved.push(new_results.length);_.each(old_results,function(doc){if(!new_presence_of_id[doc._id])observer.removed&&observer.removed(doc._id)});var startOfGroup=0;_.each(unmoved,function(endOfGroup){var groupId=new_results[endOfGroup]?new_results[endOfGroup]._id:null;var oldDoc,newDoc,fields,projectedNew,projectedOld;for(var i=startOfGroup;i<endOfGroup;i++){newDoc=new_results[i];if(!_.has(old_index_of_id,newDoc._id)){fields=projectionFn(newDoc);delete fields._id;observer.addedBefore&&observer.addedBefore(newDoc._id,fields,groupId);observer.added&&observer.added(newDoc._id,fields)}else{oldDoc=old_results[old_index_of_id[newDoc._id]];projectedNew=projectionFn(newDoc);projectedOld=projectionFn(oldDoc);fields=DiffSequence.makeChangedFields(projectedNew,projectedOld);if(!_.isEmpty(fields)){observer.changed&&observer.changed(newDoc._id,fields)}observer.movedBefore&&observer.movedBefore(newDoc._id,groupId)}}if(groupId){newDoc=new_results[endOfGroup];oldDoc=old_results[old_index_of_id[newDoc._id]];projectedNew=projectionFn(newDoc);projectedOld=projectionFn(oldDoc);fields=DiffSequence.makeChangedFields(projectedNew,projectedOld);if(!_.isEmpty(fields)){observer.changed&&observer.changed(newDoc._id,fields)}}startOfGroup=endOfGroup+1})};DiffSequence.diffObjects=function(left,right,callbacks){_.each(left,function(leftValue,key){if(_.has(right,key))callbacks.both&&callbacks.both(key,leftValue,right[key]);else callbacks.leftOnly&&callbacks.leftOnly(key,leftValue)});if(callbacks.rightOnly){_.each(right,function(rightValue,key){if(!_.has(left,key))callbacks.rightOnly(key,rightValue)})}};DiffSequence.makeChangedFields=function(newDoc,oldDoc){var fields={};DiffSequence.diffObjects(oldDoc,newDoc,{leftOnly:function(key,value){fields[key]=undefined},rightOnly:function(key,value){fields[key]=value},both:function(key,leftValue,rightValue){if(!EJSON.equals(leftValue,rightValue))fields[key]=rightValue}});return fields};DiffSequence.applyChanges=function(doc,changeFields){_.each(changeFields,function(value,key){if(value===undefined)delete doc[key];else doc[key]=value})}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["diff-sequence"]={},{DiffSequence:DiffSequence})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var EJSON=Package.ejson.EJSON;var IdMap=Package["id-map"].IdMap;var Random=Package.random.Random;var MongoID;(function(){MongoID={};MongoID._looksLikeObjectID=function(str){return str.length===24&&str.match(/^[0-9a-f]*$/)};MongoID.ObjectID=function(hexString){var self=this;if(hexString){hexString=hexString.toLowerCase();if(!MongoID._looksLikeObjectID(hexString)){throw new Error("Invalid hexadecimal string for creating an ObjectID")}self._str=hexString}else{self._str=Random.hexString(24)}};MongoID.ObjectID.prototype.toString=function(){var self=this;return'ObjectID("'+self._str+'")'};MongoID.ObjectID.prototype.equals=function(other){var self=this;return other instanceof MongoID.ObjectID&&self.valueOf()===other.valueOf()};MongoID.ObjectID.prototype.clone=function(){var self=this;return new MongoID.ObjectID(self._str)};MongoID.ObjectID.prototype.typeName=function(){return"oid"};MongoID.ObjectID.prototype.getTimestamp=function(){var self=this;return parseInt(self._str.substr(0,8),16)};MongoID.ObjectID.prototype.valueOf=MongoID.ObjectID.prototype.toJSONValue=MongoID.ObjectID.prototype.toHexString=function(){return this._str};EJSON.addType("oid",function(str){return new MongoID.ObjectID(str)});MongoID.idStringify=function(id){if(id instanceof MongoID.ObjectID){return id.valueOf()}else if(typeof id==="string"){if(id===""){return id}else if(id.substr(0,1)==="-"||id.substr(0,1)==="~"||MongoID._looksLikeObjectID(id)||id.substr(0,1)==="{"){return"-"+id}else{return id}}else if(id===undefined){return"-"}else if(typeof id==="object"&&id!==null){throw new Error("Meteor does not currently support objects other than ObjectID as ids")}else{return"~"+JSON.stringify(id)}};MongoID.idParse=function(id){if(id===""){return id}else if(id==="-"){return undefined}else if(id.substr(0,1)==="-"){return id.substr(1)}else if(id.substr(0,1)==="~"){return JSON.parse(id.substr(1))}else if(MongoID._looksLikeObjectID(id)){return new MongoID.ObjectID(id)}else{return id}}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["mongo-id"]={},{MongoID:MongoID})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var EJSON=Package.ejson.EJSON;var IdMap=Package["id-map"].IdMap;var OrderedDict=Package["ordered-dict"].OrderedDict;var Tracker=Package.tracker.Tracker;var Deps=Package.tracker.Deps;var MongoID=Package["mongo-id"].MongoID;var Random=Package.random.Random;var DiffSequence=Package["diff-sequence"].DiffSequence;var GeoJSON=Package["geojson-utils"].GeoJSON;var LocalCollection,Minimongo,MinimongoTest,MinimongoError,isArray,isPlainObject,isIndexable,isOperatorObject,isNumericKey,regexpElementMatcher,equalityElementMatcher,ELEMENT_OPERATORS,makeLookupFunction,expandArraysInBranches,projectionDetails,pathsToTree;(function(){LocalCollection=function(name){var self=this;self.name=name;self._docs=new LocalCollection._IdMap;self._observeQueue=new Meteor._SynchronousQueue;self.next_qid=1;self.queries={};self._savedOriginals=null;self.paused=false};Minimongo={};MinimongoTest={};MinimongoError=function(message){var e=new Error(message);e.name="MinimongoError";return e};LocalCollection.prototype.find=function(selector,options){if(arguments.length===0)selector={};return new LocalCollection.Cursor(this,selector,options)};LocalCollection.Cursor=function(collection,selector,options){var self=this;if(!options)options={};self.collection=collection;self.sorter=null;self.matcher=new Minimongo.Matcher(selector);if(LocalCollection._selectorIsId(selector)){self._selectorId=selector}else if(LocalCollection._selectorIsIdPerhapsAsObject(selector)){self._selectorId=selector._id}else{self._selectorId=undefined;if(self.matcher.hasGeoQuery()||options.sort){self.sorter=new Minimongo.Sorter(options.sort||[],{matcher:self.matcher})}}self.skip=options.skip;self.limit=options.limit;self.fields=options.fields;self._projectionFn=LocalCollection._compileProjection(self.fields||{});self._transform=LocalCollection.wrapTransform(options.transform);if(typeof Tracker!=="undefined")self.reactive=options.reactive===undefined?true:options.reactive};LocalCollection.Cursor.prototype.rewind=function(){};LocalCollection.prototype.findOne=function(selector,options){if(arguments.length===0)selector={};options=options||{};options.limit=1;return this.find(selector,options).fetch()[0]};LocalCollection.Cursor.prototype.forEach=function(callback,thisArg){var self=this;var objects=self._getRawObjects({ordered:true});if(self.reactive){self._depend({addedBefore:true,removed:true,changed:true,movedBefore:true})}_.each(objects,function(elt,i){elt=self._projectionFn(elt);if(self._transform)elt=self._transform(elt);callback.call(thisArg,elt,i,self)})};LocalCollection.Cursor.prototype.getTransform=function(){return this._transform};LocalCollection.Cursor.prototype.map=function(callback,thisArg){var self=this;var res=[];self.forEach(function(doc,index){res.push(callback.call(thisArg,doc,index,self))});return res};LocalCollection.Cursor.prototype.fetch=function(){var self=this;var res=[];self.forEach(function(doc){res.push(doc)});return res};LocalCollection.Cursor.prototype.count=function(){var self=this;if(self.reactive)self._depend({added:true,removed:true},true);return self._getRawObjects({ordered:true}).length};LocalCollection.Cursor.prototype._publishCursor=function(sub){var self=this;if(!self.collection.name)throw new Error("Can't publish a cursor from a collection without a name.");var collection=self.collection.name;if(!Package.mongo){throw new Error("Can't publish from Minimongo without the `mongo` package.")}return Package.mongo.Mongo.Collection._publishCursor(self,sub,collection)};LocalCollection.Cursor.prototype._getCollectionName=function(){var self=this;return self.collection.name};LocalCollection._observeChangesCallbacksAreOrdered=function(callbacks){if(callbacks.added&&callbacks.addedBefore)throw new Error("Please specify only one of added() and addedBefore()");return!!(callbacks.addedBefore||callbacks.movedBefore)};LocalCollection._observeCallbacksAreOrdered=function(callbacks){if(callbacks.addedAt&&callbacks.added)throw new Error("Please specify only one of added() and addedAt()");if(callbacks.changedAt&&callbacks.changed)throw new Error("Please specify only one of changed() and changedAt()");if(callbacks.removed&&callbacks.removedAt)throw new Error("Please specify only one of removed() and removedAt()");return!!(callbacks.addedAt||callbacks.movedTo||callbacks.changedAt||callbacks.removedAt)};LocalCollection.ObserveHandle=function(){};_.extend(LocalCollection.Cursor.prototype,{observe:function(options){var self=this;return LocalCollection._observeFromObserveChanges(self,options)},observeChanges:function(options){var self=this;var ordered=LocalCollection._observeChangesCallbacksAreOrdered(options);if(!options._allow_unordered&&!ordered&&(self.skip||self.limit))throw new Error("must use ordered observe (ie, 'addedBefore' instead of 'added') with skip or limit");if(self.fields&&(self.fields._id===0||self.fields._id===false))throw Error("You may not observe a cursor with {fields: {_id: 0}}");var query={dirty:false,matcher:self.matcher,sorter:ordered&&self.sorter,distances:self.matcher.hasGeoQuery()&&ordered&&new LocalCollection._IdMap,resultsSnapshot:null,ordered:ordered,cursor:self,projectionFn:self._projectionFn};var qid;if(self.reactive){qid=self.collection.next_qid++;self.collection.queries[qid]=query}query.results=self._getRawObjects({ordered:ordered,distances:query.distances});if(self.collection.paused)query.resultsSnapshot=ordered?[]:new LocalCollection._IdMap;var wrapCallback=function(f){if(!f)return function(){};return function(){var context=this;var args=arguments;if(self.collection.paused)return;self.collection._observeQueue.queueTask(function(){f.apply(context,args)})}};query.added=wrapCallback(options.added);query.changed=wrapCallback(options.changed);query.removed=wrapCallback(options.removed);if(ordered){query.addedBefore=wrapCallback(options.addedBefore);query.movedBefore=wrapCallback(options.movedBefore)}if(!options._suppress_initial&&!self.collection.paused){var each=ordered?_.bind(_.each,null,query.results):_.bind(query.results.forEach,query.results);each(function(doc){var fields=EJSON.clone(doc);delete fields._id;if(ordered)query.addedBefore(doc._id,self._projectionFn(fields),null);query.added(doc._id,self._projectionFn(fields))})}var handle=new LocalCollection.ObserveHandle;_.extend(handle,{collection:self.collection,stop:function(){if(self.reactive)delete self.collection.queries[qid]}});if(self.reactive&&Tracker.active){Tracker.onInvalidate(function(){handle.stop()})}self.collection._observeQueue.drain();return handle}});LocalCollection.Cursor.prototype._getRawObjects=function(options){var self=this;options=options||{};var results=options.ordered?[]:new LocalCollection._IdMap;if(self._selectorId!==undefined){if(self.skip)return results;var selectedDoc=self.collection._docs.get(self._selectorId);if(selectedDoc){if(options.ordered)results.push(selectedDoc);else results.set(self._selectorId,selectedDoc)}return results}var distances;if(self.matcher.hasGeoQuery()&&options.ordered){if(options.distances){distances=options.distances;distances.clear()}else{distances=new LocalCollection._IdMap}}self.collection._docs.forEach(function(doc,id){var matchResult=self.matcher.documentMatches(doc);if(matchResult.result){if(options.ordered){results.push(doc);if(distances&&matchResult.distance!==undefined)distances.set(id,matchResult.distance)}else{results.set(id,doc)}}if(self.limit&&!self.skip&&!self.sorter&&results.length===self.limit)return false;return true});if(!options.ordered)return results;if(self.sorter){var comparator=self.sorter.getComparator({distances:distances});results.sort(comparator)}var idx_start=self.skip||0;var idx_end=self.limit?self.limit+idx_start:results.length;return results.slice(idx_start,idx_end)};LocalCollection.Cursor.prototype._depend=function(changers,_allow_unordered){var self=this;if(Tracker.active){var v=new Tracker.Dependency;v.depend();var notifyChange=_.bind(v.changed,v);var options={_suppress_initial:true,_allow_unordered:_allow_unordered};_.each(["added","changed","removed","addedBefore","movedBefore"],function(fnName){if(changers[fnName])options[fnName]=notifyChange});self.observeChanges(options)}};LocalCollection.prototype.insert=function(doc,callback){var self=this;doc=EJSON.clone(doc);if(!_.has(doc,"_id")){doc._id=LocalCollection._useOID?new MongoID.ObjectID:Random.id()}var id=doc._id;if(self._docs.has(id))throw MinimongoError("Duplicate _id '"+id+"'");self._saveOriginal(id,undefined);self._docs.set(id,doc);var queriesToRecompute=[];for(var qid in self.queries){var query=self.queries[qid];if(query.dirty)continue;var matchResult=query.matcher.documentMatches(doc);if(matchResult.result){if(query.distances&&matchResult.distance!==undefined)query.distances.set(id,matchResult.distance);if(query.cursor.skip||query.cursor.limit)queriesToRecompute.push(qid);else LocalCollection._insertInResults(query,doc)}}_.each(queriesToRecompute,function(qid){if(self.queries[qid])self._recomputeResults(self.queries[qid])});self._observeQueue.drain();if(callback)Meteor.defer(function(){callback(null,id)});return id};LocalCollection.prototype._eachPossiblyMatchingDoc=function(selector,f){var self=this;var specificIds=LocalCollection._idsMatchedBySelector(selector);if(specificIds){for(var i=0;i<specificIds.length;++i){var id=specificIds[i];var doc=self._docs.get(id);if(doc){var breakIfFalse=f(doc,id);if(breakIfFalse===false)break}}}else{self._docs.forEach(f)}};LocalCollection.prototype.remove=function(selector,callback){var self=this;if(self.paused&&!self._savedOriginals&&EJSON.equals(selector,{})){var result=self._docs.size();self._docs.clear();_.each(self.queries,function(query){if(query.ordered){query.results=[]}else{query.results.clear()}});if(callback){Meteor.defer(function(){callback(null,result)})}return result}var matcher=new Minimongo.Matcher(selector);var remove=[];self._eachPossiblyMatchingDoc(selector,function(doc,id){if(matcher.documentMatches(doc).result)remove.push(id)});var queriesToRecompute=[];var queryRemove=[];for(var i=0;i<remove.length;i++){var removeId=remove[i];var removeDoc=self._docs.get(removeId);_.each(self.queries,function(query,qid){if(query.dirty)return;if(query.matcher.documentMatches(removeDoc).result){if(query.cursor.skip||query.cursor.limit)queriesToRecompute.push(qid);else queryRemove.push({qid:qid,doc:removeDoc})}});self._saveOriginal(removeId,removeDoc);self._docs.remove(removeId)}_.each(queryRemove,function(remove){var query=self.queries[remove.qid];if(query){query.distances&&query.distances.remove(remove.doc._id);LocalCollection._removeFromResults(query,remove.doc)}});_.each(queriesToRecompute,function(qid){var query=self.queries[qid];if(query)self._recomputeResults(query)});self._observeQueue.drain();result=remove.length;if(callback)Meteor.defer(function(){callback(null,result)});return result};LocalCollection.prototype.update=function(selector,mod,options,callback){var self=this;if(!callback&&options instanceof Function){callback=options;options=null}if(!options)options={};var matcher=new Minimongo.Matcher(selector);var qidToOriginalResults={};var docMap=new LocalCollection._IdMap;var idsMatchedBySelector=LocalCollection._idsMatchedBySelector(selector);_.each(self.queries,function(query,qid){if((query.cursor.skip||query.cursor.limit)&&!self.paused){if(query.results instanceof LocalCollection._IdMap){qidToOriginalResults[qid]=query.results.clone();return}if(!(query.results instanceof Array)){throw new Error("Assertion failed: query.results not an array")}var memoizedCloneIfNeeded=function(doc){if(docMap.has(doc._id)){return docMap.get(doc._id)}else{var docToMemoize;if(idsMatchedBySelector&&!_.any(idsMatchedBySelector,function(id){return EJSON.equals(id,doc._id)})){docToMemoize=doc}else{docToMemoize=EJSON.clone(doc)}docMap.set(doc._id,docToMemoize);return docToMemoize}};qidToOriginalResults[qid]=query.results.map(memoizedCloneIfNeeded)}});var recomputeQids={};var updateCount=0;self._eachPossiblyMatchingDoc(selector,function(doc,id){var queryResult=matcher.documentMatches(doc);if(queryResult.result){self._saveOriginal(id,doc);self._modifyAndNotify(doc,mod,recomputeQids,queryResult.arrayIndices);++updateCount;if(!options.multi)return false}return true});_.each(recomputeQids,function(dummy,qid){var query=self.queries[qid];if(query)self._recomputeResults(query,qidToOriginalResults[qid])});self._observeQueue.drain();var insertedId;if(updateCount===0&&options.upsert){var newDoc=LocalCollection._removeDollarOperators(selector);LocalCollection._modify(newDoc,mod,{isInsert:true});if(!newDoc._id&&options.insertedId)newDoc._id=options.insertedId;insertedId=self.insert(newDoc);updateCount=1}var result;if(options._returnObject){result={numberAffected:updateCount};if(insertedId!==undefined)result.insertedId=insertedId}else{result=updateCount}if(callback)Meteor.defer(function(){callback(null,result)});return result};LocalCollection.prototype.upsert=function(selector,mod,options,callback){var self=this;if(!callback&&typeof options==="function"){callback=options;options={}}return self.update(selector,mod,_.extend({},options,{upsert:true,_returnObject:true}),callback)};LocalCollection.prototype._modifyAndNotify=function(doc,mod,recomputeQids,arrayIndices){var self=this;var matched_before={};for(var qid in self.queries){var query=self.queries[qid];if(query.dirty)continue;if(query.ordered){matched_before[qid]=query.matcher.documentMatches(doc).result;
	}else{matched_before[qid]=query.results.has(doc._id)}}var old_doc=EJSON.clone(doc);LocalCollection._modify(doc,mod,{arrayIndices:arrayIndices});for(qid in self.queries){query=self.queries[qid];if(query.dirty)continue;var before=matched_before[qid];var afterMatch=query.matcher.documentMatches(doc);var after=afterMatch.result;if(after&&query.distances&&afterMatch.distance!==undefined)query.distances.set(doc._id,afterMatch.distance);if(query.cursor.skip||query.cursor.limit){if(before||after)recomputeQids[qid]=true}else if(before&&!after){LocalCollection._removeFromResults(query,doc)}else if(!before&&after){LocalCollection._insertInResults(query,doc)}else if(before&&after){LocalCollection._updateInResults(query,doc,old_doc)}}};LocalCollection._insertInResults=function(query,doc){var fields=EJSON.clone(doc);delete fields._id;if(query.ordered){if(!query.sorter){query.addedBefore(doc._id,query.projectionFn(fields),null);query.results.push(doc)}else{var i=LocalCollection._insertInSortedList(query.sorter.getComparator({distances:query.distances}),query.results,doc);var next=query.results[i+1];if(next)next=next._id;else next=null;query.addedBefore(doc._id,query.projectionFn(fields),next)}query.added(doc._id,query.projectionFn(fields))}else{query.added(doc._id,query.projectionFn(fields));query.results.set(doc._id,doc)}};LocalCollection._removeFromResults=function(query,doc){if(query.ordered){var i=LocalCollection._findInOrderedResults(query,doc);query.removed(doc._id);query.results.splice(i,1)}else{var id=doc._id;query.removed(doc._id);query.results.remove(id)}};LocalCollection._updateInResults=function(query,doc,old_doc){if(!EJSON.equals(doc._id,old_doc._id))throw new Error("Can't change a doc's _id while updating");var projectionFn=query.projectionFn;var changedFields=DiffSequence.makeChangedFields(projectionFn(doc),projectionFn(old_doc));if(!query.ordered){if(!_.isEmpty(changedFields)){query.changed(doc._id,changedFields);query.results.set(doc._id,doc)}return}var orig_idx=LocalCollection._findInOrderedResults(query,doc);if(!_.isEmpty(changedFields))query.changed(doc._id,changedFields);if(!query.sorter)return;query.results.splice(orig_idx,1);var new_idx=LocalCollection._insertInSortedList(query.sorter.getComparator({distances:query.distances}),query.results,doc);if(orig_idx!==new_idx){var next=query.results[new_idx+1];if(next)next=next._id;else next=null;query.movedBefore&&query.movedBefore(doc._id,next)}};LocalCollection.prototype._recomputeResults=function(query,oldResults){var self=this;if(self.paused){query.dirty=true;return}if(!self.paused&&!oldResults)oldResults=query.results;if(query.distances)query.distances.clear();query.results=query.cursor._getRawObjects({ordered:query.ordered,distances:query.distances});if(!self.paused){LocalCollection._diffQueryChanges(query.ordered,oldResults,query.results,query,{projectionFn:query.projectionFn})}};LocalCollection._findInOrderedResults=function(query,doc){if(!query.ordered)throw new Error("Can't call _findInOrderedResults on unordered query");for(var i=0;i<query.results.length;i++)if(query.results[i]===doc)return i;throw Error("object missing from query")};LocalCollection._binarySearch=function(cmp,array,value){var first=0,rangeLength=array.length;while(rangeLength>0){var halfRange=Math.floor(rangeLength/2);if(cmp(value,array[first+halfRange])>=0){first+=halfRange+1;rangeLength-=halfRange+1}else{rangeLength=halfRange}}return first};LocalCollection._insertInSortedList=function(cmp,array,value){if(array.length===0){array.push(value);return 0}var idx=LocalCollection._binarySearch(cmp,array,value);array.splice(idx,0,value);return idx};LocalCollection.prototype.saveOriginals=function(){var self=this;if(self._savedOriginals)throw new Error("Called saveOriginals twice without retrieveOriginals");self._savedOriginals=new LocalCollection._IdMap};LocalCollection.prototype.retrieveOriginals=function(){var self=this;if(!self._savedOriginals)throw new Error("Called retrieveOriginals without saveOriginals");var originals=self._savedOriginals;self._savedOriginals=null;return originals};LocalCollection.prototype._saveOriginal=function(id,doc){var self=this;if(!self._savedOriginals)return;if(self._savedOriginals.has(id))return;self._savedOriginals.set(id,EJSON.clone(doc))};LocalCollection.prototype.pauseObservers=function(){if(this.paused)return;this.paused=true;for(var qid in this.queries){var query=this.queries[qid];query.resultsSnapshot=EJSON.clone(query.results)}};LocalCollection.prototype.resumeObservers=function(){var self=this;if(!this.paused)return;this.paused=false;for(var qid in this.queries){var query=self.queries[qid];if(query.dirty){query.dirty=false;self._recomputeResults(query,query.resultsSnapshot)}else{LocalCollection._diffQueryChanges(query.ordered,query.resultsSnapshot,query.results,query,{projectionFn:query.projectionFn})}query.resultsSnapshot=null}self._observeQueue.drain()}}).call(this);(function(){LocalCollection.wrapTransform=function(transform){if(!transform)return null;if(transform.__wrappedTransform__)return transform;var wrapped=function(doc){if(!_.has(doc,"_id")){throw new Error("can only transform documents with _id")}var id=doc._id;var transformed=Tracker.nonreactive(function(){return transform(doc)});if(!isPlainObject(transformed)){throw new Error("transform must return object")}if(_.has(transformed,"_id")){if(!EJSON.equals(transformed._id,id)){throw new Error("transformed document can't have different _id")}}else{transformed._id=id}return transformed};wrapped.__wrappedTransform__=true;return wrapped}}).call(this);(function(){isArray=function(x){return _.isArray(x)&&!EJSON.isBinary(x)};isPlainObject=LocalCollection._isPlainObject=function(x){return x&&LocalCollection._f._type(x)===3};isIndexable=function(x){return isArray(x)||isPlainObject(x)};isOperatorObject=function(valueSelector,inconsistentOK){if(!isPlainObject(valueSelector))return false;var theseAreOperators=undefined;_.each(valueSelector,function(value,selKey){var thisIsOperator=selKey.substr(0,1)==="$";if(theseAreOperators===undefined){theseAreOperators=thisIsOperator}else if(theseAreOperators!==thisIsOperator){if(!inconsistentOK)throw new Error("Inconsistent operator: "+JSON.stringify(valueSelector));theseAreOperators=false}});return!!theseAreOperators};isNumericKey=function(s){return/^[0-9]+$/.test(s)}}).call(this);(function(){Minimongo.Matcher=function(selector){var self=this;self._paths={};self._hasGeoQuery=false;self._hasWhere=false;self._isSimple=true;self._matchingDocument=undefined;self._selector=null;self._docMatcher=self._compileSelector(selector)};_.extend(Minimongo.Matcher.prototype,{documentMatches:function(doc){if(!doc||typeof doc!=="object"){throw Error("documentMatches needs a document")}return this._docMatcher(doc)},hasGeoQuery:function(){return this._hasGeoQuery},hasWhere:function(){return this._hasWhere},isSimple:function(){return this._isSimple},_compileSelector:function(selector){var self=this;if(selector instanceof Function){self._isSimple=false;self._selector=selector;self._recordPathUsed("");return function(doc){return{result:!!selector.call(doc)}}}if(LocalCollection._selectorIsId(selector)){self._selector={_id:selector};self._recordPathUsed("_id");return function(doc){return{result:EJSON.equals(doc._id,selector)}}}if(!selector||"_id"in selector&&!selector._id){self._isSimple=false;return nothingMatcher}if(typeof selector==="boolean"||isArray(selector)||EJSON.isBinary(selector))throw new Error("Invalid selector: "+selector);self._selector=EJSON.clone(selector);return compileDocumentSelector(selector,self,{isRoot:true})},_recordPathUsed:function(path){this._paths[path]=true},_getPaths:function(){return _.keys(this._paths)}});var compileDocumentSelector=function(docSelector,matcher,options){options=options||{};var docMatchers=[];_.each(docSelector,function(subSelector,key){if(key.substr(0,1)==="$"){if(!_.has(LOGICAL_OPERATORS,key))throw new Error("Unrecognized logical operator: "+key);matcher._isSimple=false;docMatchers.push(LOGICAL_OPERATORS[key](subSelector,matcher,options.inElemMatch))}else{if(!options.inElemMatch)matcher._recordPathUsed(key);var lookUpByIndex=makeLookupFunction(key);var valueMatcher=compileValueSelector(subSelector,matcher,options.isRoot);docMatchers.push(function(doc){var branchValues=lookUpByIndex(doc);return valueMatcher(branchValues)})}});return andDocumentMatchers(docMatchers)};var compileValueSelector=function(valueSelector,matcher,isRoot){if(valueSelector instanceof RegExp){matcher._isSimple=false;return convertElementMatcherToBranchedMatcher(regexpElementMatcher(valueSelector))}else if(isOperatorObject(valueSelector)){return operatorBranchedMatcher(valueSelector,matcher,isRoot)}else{return convertElementMatcherToBranchedMatcher(equalityElementMatcher(valueSelector))}};var convertElementMatcherToBranchedMatcher=function(elementMatcher,options){options=options||{};return function(branches){var expanded=branches;if(!options.dontExpandLeafArrays){expanded=expandArraysInBranches(branches,options.dontIncludeLeafArrays)}var ret={};ret.result=_.any(expanded,function(element){var matched=elementMatcher(element.value);if(typeof matched==="number"){if(!element.arrayIndices)element.arrayIndices=[matched];matched=true}if(matched&&element.arrayIndices)ret.arrayIndices=element.arrayIndices;return matched});return ret}};regexpElementMatcher=function(regexp){return function(value){if(value instanceof RegExp){return _.isEqual(value,regexp)}if(typeof value!=="string")return false;regexp.lastIndex=0;return regexp.test(value)}};equalityElementMatcher=function(elementSelector){if(isOperatorObject(elementSelector))throw Error("Can't create equalityValueSelector for operator object");if(elementSelector==null){return function(value){return value==null}}return function(value){return LocalCollection._f._equal(elementSelector,value)}};var operatorBranchedMatcher=function(valueSelector,matcher,isRoot){var operatorMatchers=[];_.each(valueSelector,function(operand,operator){var simpleRange=_.contains(["$lt","$lte","$gt","$gte"],operator)&&_.isNumber(operand);var simpleEquality=_.contains(["$ne","$eq"],operator)&&!_.isObject(operand);var simpleInclusion=_.contains(["$in","$nin"],operator)&&_.isArray(operand)&&!_.any(operand,_.isObject);if(!(simpleRange||simpleInclusion||simpleEquality)){matcher._isSimple=false}if(_.has(VALUE_OPERATORS,operator)){operatorMatchers.push(VALUE_OPERATORS[operator](operand,valueSelector,matcher,isRoot))}else if(_.has(ELEMENT_OPERATORS,operator)){var options=ELEMENT_OPERATORS[operator];operatorMatchers.push(convertElementMatcherToBranchedMatcher(options.compileElementSelector(operand,valueSelector,matcher),options))}else{throw new Error("Unrecognized operator: "+operator)}});return andBranchedMatchers(operatorMatchers)};var compileArrayOfDocumentSelectors=function(selectors,matcher,inElemMatch){if(!isArray(selectors)||_.isEmpty(selectors))throw Error("$and/$or/$nor must be nonempty array");return _.map(selectors,function(subSelector){if(!isPlainObject(subSelector))throw Error("$or/$and/$nor entries need to be full objects");return compileDocumentSelector(subSelector,matcher,{inElemMatch:inElemMatch})})};var LOGICAL_OPERATORS={$and:function(subSelector,matcher,inElemMatch){var matchers=compileArrayOfDocumentSelectors(subSelector,matcher,inElemMatch);return andDocumentMatchers(matchers)},$or:function(subSelector,matcher,inElemMatch){var matchers=compileArrayOfDocumentSelectors(subSelector,matcher,inElemMatch);if(matchers.length===1)return matchers[0];return function(doc){var result=_.any(matchers,function(f){return f(doc).result});return{result:result}}},$nor:function(subSelector,matcher,inElemMatch){var matchers=compileArrayOfDocumentSelectors(subSelector,matcher,inElemMatch);return function(doc){var result=_.all(matchers,function(f){return!f(doc).result});return{result:result}}},$where:function(selectorValue,matcher){matcher._recordPathUsed("");matcher._hasWhere=true;if(!(selectorValue instanceof Function)){selectorValue=Function("obj","return "+selectorValue)}return function(doc){return{result:selectorValue.call(doc,doc)}}},$comment:function(){return function(){return{result:true}}}};var invertBranchedMatcher=function(branchedMatcher){return function(branchValues){var invertMe=branchedMatcher(branchValues);return{result:!invertMe.result}}};var VALUE_OPERATORS={$eq:function(operand){return convertElementMatcherToBranchedMatcher(equalityElementMatcher(operand))},$not:function(operand,valueSelector,matcher){return invertBranchedMatcher(compileValueSelector(operand,matcher))},$ne:function(operand){return invertBranchedMatcher(convertElementMatcherToBranchedMatcher(equalityElementMatcher(operand)))},$nin:function(operand){return invertBranchedMatcher(convertElementMatcherToBranchedMatcher(ELEMENT_OPERATORS.$in.compileElementSelector(operand)))},$exists:function(operand){var exists=convertElementMatcherToBranchedMatcher(function(value){return value!==undefined});return operand?exists:invertBranchedMatcher(exists)},$options:function(operand,valueSelector){if(!_.has(valueSelector,"$regex"))throw Error("$options needs a $regex");return everythingMatcher},$maxDistance:function(operand,valueSelector){if(!valueSelector.$near)throw Error("$maxDistance needs a $near");return everythingMatcher},$all:function(operand,valueSelector,matcher){if(!isArray(operand))throw Error("$all requires array");if(_.isEmpty(operand))return nothingMatcher;var branchedMatchers=[];_.each(operand,function(criterion){if(isOperatorObject(criterion))throw Error("no $ expressions in $all");branchedMatchers.push(compileValueSelector(criterion,matcher))});return andBranchedMatchers(branchedMatchers)},$near:function(operand,valueSelector,matcher,isRoot){if(!isRoot)throw Error("$near can't be inside another $ operator");matcher._hasGeoQuery=true;var maxDistance,point,distance;if(isPlainObject(operand)&&_.has(operand,"$geometry")){maxDistance=operand.$maxDistance;point=operand.$geometry;distance=function(value){if(!value||!value.type)return null;if(value.type==="Point"){return GeoJSON.pointDistance(point,value)}else{return GeoJSON.geometryWithinRadius(value,point,maxDistance)?0:maxDistance+1}}}else{maxDistance=valueSelector.$maxDistance;if(!isArray(operand)&&!isPlainObject(operand))throw Error("$near argument must be coordinate pair or GeoJSON");point=pointToArray(operand);distance=function(value){if(!isArray(value)&&!isPlainObject(value))return null;return distanceCoordinatePairs(point,value)}}return function(branchedValues){branchedValues=expandArraysInBranches(branchedValues);var result={result:false};_.each(branchedValues,function(branch){var curDistance=distance(branch.value);if(curDistance===null||curDistance>maxDistance)return;if(result.distance!==undefined&&result.distance<=curDistance)return;result.result=true;result.distance=curDistance;if(!branch.arrayIndices)delete result.arrayIndices;else result.arrayIndices=branch.arrayIndices});return result}}};var distanceCoordinatePairs=function(a,b){a=pointToArray(a);b=pointToArray(b);var x=a[0]-b[0];var y=a[1]-b[1];if(_.isNaN(x)||_.isNaN(y))return null;return Math.sqrt(x*x+y*y)};var pointToArray=function(point){return _.map(point,_.identity)};var makeInequality=function(cmpValueComparator){return{compileElementSelector:function(operand){if(isArray(operand)){return function(){return false}}if(operand===undefined)operand=null;var operandType=LocalCollection._f._type(operand);return function(value){if(value===undefined)value=null;if(LocalCollection._f._type(value)!==operandType)return false;return cmpValueComparator(LocalCollection._f._cmp(value,operand))}}}};ELEMENT_OPERATORS={$lt:makeInequality(function(cmpValue){return cmpValue<0}),$gt:makeInequality(function(cmpValue){return cmpValue>0}),$lte:makeInequality(function(cmpValue){return cmpValue<=0}),$gte:makeInequality(function(cmpValue){return cmpValue>=0}),$mod:{compileElementSelector:function(operand){if(!(isArray(operand)&&operand.length===2&&typeof operand[0]==="number"&&typeof operand[1]==="number")){throw Error("argument to $mod must be an array of two numbers")}var divisor=operand[0];var remainder=operand[1];return function(value){return typeof value==="number"&&value%divisor===remainder}}},$in:{compileElementSelector:function(operand){if(!isArray(operand))throw Error("$in needs an array");var elementMatchers=[];_.each(operand,function(option){if(option instanceof RegExp)elementMatchers.push(regexpElementMatcher(option));else if(isOperatorObject(option))throw Error("cannot nest $ under $in");else elementMatchers.push(equalityElementMatcher(option))});return function(value){if(value===undefined)value=null;return _.any(elementMatchers,function(e){return e(value)})}}},$size:{dontExpandLeafArrays:true,compileElementSelector:function(operand){if(typeof operand==="string"){operand=0}else if(typeof operand!=="number"){throw Error("$size needs a number")}return function(value){return isArray(value)&&value.length===operand}}},$type:{dontIncludeLeafArrays:true,compileElementSelector:function(operand){if(typeof operand!=="number")throw Error("$type needs a number");return function(value){return value!==undefined&&LocalCollection._f._type(value)===operand}}},$regex:{compileElementSelector:function(operand,valueSelector){if(!(typeof operand==="string"||operand instanceof RegExp))throw Error("$regex has to be a string or RegExp");var regexp;if(valueSelector.$options!==undefined){if(/[^gim]/.test(valueSelector.$options))throw new Error("Only the i, m, and g regexp options are supported");var regexSource=operand instanceof RegExp?operand.source:operand;regexp=new RegExp(regexSource,valueSelector.$options)}else if(operand instanceof RegExp){regexp=operand}else{regexp=new RegExp(operand)}return regexpElementMatcher(regexp)}},$elemMatch:{dontExpandLeafArrays:true,compileElementSelector:function(operand,valueSelector,matcher){if(!isPlainObject(operand))throw Error("$elemMatch need an object");var subMatcher,isDocMatcher;if(isOperatorObject(_.omit(operand,_.keys(LOGICAL_OPERATORS)),true)){subMatcher=compileValueSelector(operand,matcher);isDocMatcher=false}else{subMatcher=compileDocumentSelector(operand,matcher,{inElemMatch:true});isDocMatcher=true}return function(value){if(!isArray(value))return false;for(var i=0;i<value.length;++i){var arrayElement=value[i];var arg;if(isDocMatcher){if(!isPlainObject(arrayElement)&&!isArray(arrayElement))return false;arg=arrayElement}else{arg=[{value:arrayElement,dontIterate:true}]}if(subMatcher(arg).result)return i}return false}}}};makeLookupFunction=function(key,options){options=options||{};var parts=key.split(".");var firstPart=parts.length?parts[0]:"";var firstPartIsNumeric=isNumericKey(firstPart);var nextPartIsNumeric=parts.length>=2&&isNumericKey(parts[1]);var lookupRest;if(parts.length>1){lookupRest=makeLookupFunction(parts.slice(1).join("."))}var omitUnnecessaryFields=function(retVal){if(!retVal.dontIterate)delete retVal.dontIterate;if(retVal.arrayIndices&&!retVal.arrayIndices.length)delete retVal.arrayIndices;return retVal};return function(doc,arrayIndices){if(!arrayIndices)arrayIndices=[];if(isArray(doc)){if(!(firstPartIsNumeric&&firstPart<doc.length))return[];arrayIndices=arrayIndices.concat(+firstPart,"x")}var firstLevel=doc[firstPart];if(!lookupRest){return[omitUnnecessaryFields({value:firstLevel,dontIterate:isArray(doc)&&isArray(firstLevel),arrayIndices:arrayIndices})]}if(!isIndexable(firstLevel)){if(isArray(doc))return[];return[omitUnnecessaryFields({value:undefined,arrayIndices:arrayIndices})]}var result=[];var appendToResult=function(more){Array.prototype.push.apply(result,more)};appendToResult(lookupRest(firstLevel,arrayIndices));if(isArray(firstLevel)&&!(nextPartIsNumeric&&options.forSort)){_.each(firstLevel,function(branch,arrayIndex){if(isPlainObject(branch)){appendToResult(lookupRest(branch,arrayIndices.concat(arrayIndex)))}})}return result}};MinimongoTest.makeLookupFunction=makeLookupFunction;expandArraysInBranches=function(branches,skipTheArrays){var branchesOut=[];_.each(branches,function(branch){var thisIsArray=isArray(branch.value);if(!(skipTheArrays&&thisIsArray&&!branch.dontIterate)){branchesOut.push({value:branch.value,arrayIndices:branch.arrayIndices})}if(thisIsArray&&!branch.dontIterate){_.each(branch.value,function(leaf,i){branchesOut.push({value:leaf,arrayIndices:(branch.arrayIndices||[]).concat(i)})})}});return branchesOut};var nothingMatcher=function(docOrBranchedValues){return{result:false}};var everythingMatcher=function(docOrBranchedValues){return{result:true}};var andSomeMatchers=function(subMatchers){if(subMatchers.length===0)return everythingMatcher;if(subMatchers.length===1)return subMatchers[0];return function(docOrBranches){var ret={};ret.result=_.all(subMatchers,function(f){var subResult=f(docOrBranches);if(subResult.result&&subResult.distance!==undefined&&ret.distance===undefined){ret.distance=subResult.distance}if(subResult.result&&subResult.arrayIndices){ret.arrayIndices=subResult.arrayIndices}return subResult.result});if(!ret.result){delete ret.distance;delete ret.arrayIndices}return ret}};var andDocumentMatchers=andSomeMatchers;var andBranchedMatchers=andSomeMatchers;LocalCollection._f={_type:function(v){if(typeof v==="number")return 1;if(typeof v==="string")return 2;if(typeof v==="boolean")return 8;if(isArray(v))return 4;if(v===null)return 10;if(v instanceof RegExp)return 11;if(typeof v==="function")return 13;if(v instanceof Date)return 9;if(EJSON.isBinary(v))return 5;if(v instanceof MongoID.ObjectID)return 7;return 3},_equal:function(a,b){return EJSON.equals(a,b,{keyOrderSensitive:true})},_typeorder:function(t){return[-1,1,2,3,4,5,-1,6,7,8,0,9,-1,100,2,100,1,8,1][t]},_cmp:function(a,b){if(a===undefined)return b===undefined?0:-1;if(b===undefined)return 1;var ta=LocalCollection._f._type(a);var tb=LocalCollection._f._type(b);var oa=LocalCollection._f._typeorder(ta);var ob=LocalCollection._f._typeorder(tb);if(oa!==ob)return oa<ob?-1:1;if(ta!==tb)throw Error("Missing type coercion logic in _cmp");if(ta===7){ta=tb=2;a=a.toHexString();b=b.toHexString()}if(ta===9){ta=tb=1;a=a.getTime();b=b.getTime()}if(ta===1)return a-b;if(tb===2)return a<b?-1:a===b?0:1;if(ta===3){var to_array=function(obj){var ret=[];for(var key in obj){ret.push(key);ret.push(obj[key])}return ret};return LocalCollection._f._cmp(to_array(a),to_array(b))}if(ta===4){for(var i=0;;i++){if(i===a.length)return i===b.length?0:-1;if(i===b.length)return 1;var s=LocalCollection._f._cmp(a[i],b[i]);if(s!==0)return s}}if(ta===5){if(a.length!==b.length)return a.length-b.length;for(i=0;i<a.length;i++){if(a[i]<b[i])return-1;if(a[i]>b[i])return 1}return 0}if(ta===8){if(a)return b?0:1;return b?-1:0}if(ta===10)return 0;if(ta===11)throw Error("Sorting not supported on regular expression");if(ta===13)throw Error("Sorting not supported on Javascript code");throw Error("Unknown type to sort")}};LocalCollection._removeDollarOperators=function(selector){var selectorDoc={};for(var k in selector)if(k.substr(0,1)!=="$")selectorDoc[k]=selector[k];return selectorDoc}}).call(this);(function(){Minimongo.Sorter=function(spec,options){var self=this;options=options||{};self._sortSpecParts=[];self._sortFunction=null;var addSpecPart=function(path,ascending){if(!path)throw Error("sort keys must be non-empty");if(path.charAt(0)==="$")throw Error("unsupported sort key: "+path);self._sortSpecParts.push({path:path,lookup:makeLookupFunction(path,{forSort:true}),ascending:ascending})};if(spec instanceof Array){for(var i=0;i<spec.length;i++){if(typeof spec[i]==="string"){addSpecPart(spec[i],true)}else{addSpecPart(spec[i][0],spec[i][1]!=="desc")}}}else if(typeof spec==="object"){_.each(spec,function(value,key){addSpecPart(key,value>=0)})}else if(typeof spec==="function"){self._sortFunction=spec}else{throw Error("Bad sort specification: "+JSON.stringify(spec))}if(self._sortFunction)return;if(self.affectedByModifier){var selector={};_.each(self._sortSpecParts,function(spec){selector[spec.path]=1});self._selectorForAffectedByModifier=new Minimongo.Matcher(selector)}self._keyComparator=composeComparators(_.map(self._sortSpecParts,function(spec,i){return self._keyFieldComparator(i)}));self._keyFilter=null;options.matcher&&self._useWithMatcher(options.matcher)};_.extend(Minimongo.Sorter.prototype,{getComparator:function(options){var self=this;if(!options||!options.distances){return self._getBaseComparator()}var distances=options.distances;return composeComparators([self._getBaseComparator(),function(a,b){if(!distances.has(a._id))throw Error("Missing distance for "+a._id);if(!distances.has(b._id))throw Error("Missing distance for "+b._id);return distances.get(a._id)-distances.get(b._id)}])},_getPaths:function(){var self=this;return _.pluck(self._sortSpecParts,"path")},_getMinKeyFromDoc:function(doc){var self=this;var minKey=null;self._generateKeysFromDoc(doc,function(key){if(!self._keyCompatibleWithSelector(key))return;if(minKey===null){minKey=key;return}if(self._compareKeys(key,minKey)<0){minKey=key}});if(minKey===null)throw Error("sort selector found no keys in doc?");return minKey},_keyCompatibleWithSelector:function(key){var self=this;return!self._keyFilter||self._keyFilter(key)},_generateKeysFromDoc:function(doc,cb){var self=this;if(self._sortSpecParts.length===0)throw new Error("can't generate keys without a spec");var valuesByIndexAndPath=[];var pathFromIndices=function(indices){return indices.join(",")+","};var knownPaths=null;_.each(self._sortSpecParts,function(spec,whichField){var branches=expandArraysInBranches(spec.lookup(doc),true);if(!branches.length)branches=[{value:null}];var usedPaths=false;valuesByIndexAndPath[whichField]={};_.each(branches,function(branch){if(!branch.arrayIndices){if(branches.length>1)throw Error("multiple branches but no array used?");valuesByIndexAndPath[whichField][""]=branch.value;return}usedPaths=true;var path=pathFromIndices(branch.arrayIndices);if(_.has(valuesByIndexAndPath[whichField],path))throw Error("duplicate path: "+path);valuesByIndexAndPath[whichField][path]=branch.value;if(knownPaths&&!_.has(knownPaths,path)){throw Error("cannot index parallel arrays")}});if(knownPaths){if(!_.has(valuesByIndexAndPath[whichField],"")&&_.size(knownPaths)!==_.size(valuesByIndexAndPath[whichField])){throw Error("cannot index parallel arrays!")}}else if(usedPaths){knownPaths={};_.each(valuesByIndexAndPath[whichField],function(x,path){knownPaths[path]=true})}});if(!knownPaths){var soleKey=_.map(valuesByIndexAndPath,function(values){if(!_.has(values,""))throw Error("no value in sole key case?");return values[""]});cb(soleKey);return}_.each(knownPaths,function(x,path){var key=_.map(valuesByIndexAndPath,function(values){if(_.has(values,""))return values[""];if(!_.has(values,path))throw Error("missing path?");return values[path]});cb(key)})},_compareKeys:function(key1,key2){var self=this;if(key1.length!==self._sortSpecParts.length||key2.length!==self._sortSpecParts.length){throw Error("Key has wrong length")}return self._keyComparator(key1,key2)},_keyFieldComparator:function(i){var self=this;var invert=!self._sortSpecParts[i].ascending;return function(key1,key2){var compare=LocalCollection._f._cmp(key1[i],key2[i]);if(invert)compare=-compare;return compare}},_getBaseComparator:function(){var self=this;if(self._sortFunction)return self._sortFunction;if(!self._sortSpecParts.length){return function(doc1,doc2){return 0}}return function(doc1,doc2){var key1=self._getMinKeyFromDoc(doc1);var key2=self._getMinKeyFromDoc(doc2);return self._compareKeys(key1,key2)}},_useWithMatcher:function(matcher){var self=this;if(self._keyFilter)throw Error("called _useWithMatcher twice?");if(_.isEmpty(self._sortSpecParts))return;var selector=matcher._selector;if(selector instanceof Function)return;var constraintsByPath={};_.each(self._sortSpecParts,function(spec,i){constraintsByPath[spec.path]=[]});_.each(selector,function(subSelector,key){var constraints=constraintsByPath[key];if(!constraints)return;if(subSelector instanceof RegExp){if(subSelector.ignoreCase||subSelector.multiline)return;constraints.push(regexpElementMatcher(subSelector));return}if(isOperatorObject(subSelector)){_.each(subSelector,function(operand,operator){if(_.contains(["$lt","$lte","$gt","$gte"],operator)){constraints.push(ELEMENT_OPERATORS[operator].compileElementSelector(operand))}if(operator==="$regex"&&!subSelector.$options){constraints.push(ELEMENT_OPERATORS.$regex.compileElementSelector(operand,subSelector))}});return}constraints.push(equalityElementMatcher(subSelector))});if(_.isEmpty(constraintsByPath[self._sortSpecParts[0].path]))return;self._keyFilter=function(key){return _.all(self._sortSpecParts,function(specPart,index){return _.all(constraintsByPath[specPart.path],function(f){return f(key[index])})})}}});var composeComparators=function(comparatorArray){return function(a,b){for(var i=0;i<comparatorArray.length;++i){var compare=comparatorArray[i](a,b);if(compare!==0)return compare}return 0}}}).call(this);(function(){LocalCollection._compileProjection=function(fields){LocalCollection._checkSupportedProjection(fields);var _idProjection=_.isUndefined(fields._id)?true:fields._id;var details=projectionDetails(fields);var transform=function(doc,ruleTree){if(_.isArray(doc))return _.map(doc,function(subdoc){return transform(subdoc,ruleTree)});var res=details.including?{}:EJSON.clone(doc);_.each(ruleTree,function(rule,key){if(!_.has(doc,key))return;if(_.isObject(rule)){if(_.isObject(doc[key]))res[key]=transform(doc[key],rule)}else if(details.including)res[key]=EJSON.clone(doc[key]);else delete res[key]});return res};return function(obj){var res=transform(obj,details.tree);if(_idProjection&&_.has(obj,"_id"))res._id=obj._id;if(!_idProjection&&_.has(res,"_id"))delete res._id;return res}};projectionDetails=function(fields){var fieldsKeys=_.keys(fields).sort();if(fieldsKeys.length>0&&!(fieldsKeys.length===1&&fieldsKeys[0]==="_id")&&!(_.contains(fieldsKeys,"_id")&&fields["_id"]))fieldsKeys=_.reject(fieldsKeys,function(key){return key==="_id"});var including=null;_.each(fieldsKeys,function(keyPath){var rule=!!fields[keyPath];if(including===null)including=rule;if(including!==rule)throw MinimongoError("You cannot currently mix including and excluding fields.")});var projectionRulesTree=pathsToTree(fieldsKeys,function(path){return including},function(node,path,fullPath){var currentPath=fullPath;var anotherPath=path;throw MinimongoError("both "+currentPath+" and "+anotherPath+" found in fields option, using both of them may trigger "+"unexpected behavior. Did you mean to use only one of them?")});return{tree:projectionRulesTree,including:including}};pathsToTree=function(paths,newLeafFn,conflictFn,tree){tree=tree||{};_.each(paths,function(keyPath){var treePos=tree;var pathArr=keyPath.split(".");var success=_.all(pathArr.slice(0,-1),function(key,idx){if(!_.has(treePos,key))treePos[key]={};else if(!_.isObject(treePos[key])){treePos[key]=conflictFn(treePos[key],pathArr.slice(0,idx+1).join("."),keyPath);if(!_.isObject(treePos[key]))return false}treePos=treePos[key];return true});if(success){var lastKey=_.last(pathArr);if(!_.has(treePos,lastKey))treePos[lastKey]=newLeafFn(keyPath);else treePos[lastKey]=conflictFn(treePos[lastKey],keyPath,keyPath)}});return tree};LocalCollection._checkSupportedProjection=function(fields){if(!_.isObject(fields)||_.isArray(fields))throw MinimongoError("fields option must be an object");_.each(fields,function(val,keyPath){if(_.contains(keyPath.split("."),"$"))throw MinimongoError("Minimongo doesn't support $ operator in projections yet.");if(typeof val==="object"&&_.intersection(["$elemMatch","$meta","$slice"],_.keys(val)).length>0)throw MinimongoError("Minimongo doesn't support operators in projections yet.");if(_.indexOf([1,0,true,false],val)===-1)throw MinimongoError("Projection values should be one of 1, 0, true, or false")})}}).call(this);(function(){LocalCollection._modify=function(doc,mod,options){options=options||{};if(!isPlainObject(mod))throw MinimongoError("Modifier must be an object");mod=EJSON.clone(mod);
	var isModifier=isOperatorObject(mod);var newDoc;if(!isModifier){if(mod._id&&!EJSON.equals(doc._id,mod._id))throw MinimongoError("Cannot change the _id of a document");for(var k in mod){if(/\./.test(k))throw MinimongoError("When replacing document, field name may not contain '.'")}newDoc=mod}else{newDoc=EJSON.clone(doc);_.each(mod,function(operand,op){var modFunc=MODIFIERS[op];if(options.isInsert&&op==="$setOnInsert")modFunc=MODIFIERS["$set"];if(!modFunc)throw MinimongoError("Invalid modifier specified "+op);_.each(operand,function(arg,keypath){if(keypath===""){throw MinimongoError("An empty update path is not valid.")}if(keypath==="_id"&&op!=="$setOnInsert"){throw MinimongoError("Mod on _id not allowed")}var keyparts=keypath.split(".");if(!_.all(keyparts,_.identity)){throw MinimongoError("The update path '"+keypath+"' contains an empty field name, which is not allowed.")}var noCreate=_.has(NO_CREATE_MODIFIERS,op);var forbidArray=op==="$rename";var target=findModTarget(newDoc,keyparts,{noCreate:NO_CREATE_MODIFIERS[op],forbidArray:op==="$rename",arrayIndices:options.arrayIndices});var field=keyparts.pop();modFunc(target,field,arg,keypath,newDoc)})})}_.each(_.keys(doc),function(k){if(k!=="_id")delete doc[k]});_.each(newDoc,function(v,k){doc[k]=v})};var findModTarget=function(doc,keyparts,options){options=options||{};var usedArrayIndex=false;for(var i=0;i<keyparts.length;i++){var last=i===keyparts.length-1;var keypart=keyparts[i];var indexable=isIndexable(doc);if(!indexable){if(options.noCreate)return undefined;var e=MinimongoError("cannot use the part '"+keypart+"' to traverse "+doc);e.setPropertyError=true;throw e}if(doc instanceof Array){if(options.forbidArray)return null;if(keypart==="$"){if(usedArrayIndex)throw MinimongoError("Too many positional (i.e. '$') elements");if(!options.arrayIndices||!options.arrayIndices.length){throw MinimongoError("The positional operator did not find the "+"match needed from the query")}keypart=options.arrayIndices[0];usedArrayIndex=true}else if(isNumericKey(keypart)){keypart=parseInt(keypart)}else{if(options.noCreate)return undefined;throw MinimongoError("can't append to array using string field name ["+keypart+"]")}if(last)keyparts[i]=keypart;if(options.noCreate&&keypart>=doc.length)return undefined;while(doc.length<keypart)doc.push(null);if(!last){if(doc.length===keypart)doc.push({});else if(typeof doc[keypart]!=="object")throw MinimongoError("can't modify field '"+keyparts[i+1]+"' of list value "+JSON.stringify(doc[keypart]))}}else{if(keypart.length&&keypart.substr(0,1)==="$")throw MinimongoError("can't set field named "+keypart);if(!(keypart in doc)){if(options.noCreate)return undefined;if(!last)doc[keypart]={}}}if(last)return doc;doc=doc[keypart]}};var NO_CREATE_MODIFIERS={$unset:true,$pop:true,$rename:true,$pull:true,$pullAll:true};var MODIFIERS={$inc:function(target,field,arg){if(typeof arg!=="number")throw MinimongoError("Modifier $inc allowed for numbers only");if(field in target){if(typeof target[field]!=="number")throw MinimongoError("Cannot apply $inc modifier to non-number");target[field]+=arg}else{target[field]=arg}},$set:function(target,field,arg){if(!_.isObject(target)){var e=MinimongoError("Cannot set property on non-object field");e.setPropertyError=true;throw e}if(target===null){var e=MinimongoError("Cannot set property on null");e.setPropertyError=true;throw e}target[field]=arg},$setOnInsert:function(target,field,arg){},$unset:function(target,field,arg){if(target!==undefined){if(target instanceof Array){if(field in target)target[field]=null}else delete target[field]}},$push:function(target,field,arg){if(target[field]===undefined)target[field]=[];if(!(target[field]instanceof Array))throw MinimongoError("Cannot apply $push modifier to non-array");if(!(arg&&arg.$each)){target[field].push(arg);return}var toPush=arg.$each;if(!(toPush instanceof Array))throw MinimongoError("$each must be an array");var position=undefined;if("$position"in arg){if(typeof arg.$position!=="number")throw MinimongoError("$position must be a numeric value");if(arg.$position<0)throw MinimongoError("$position in $push must be zero or positive");position=arg.$position}var slice=undefined;if("$slice"in arg){if(typeof arg.$slice!=="number")throw MinimongoError("$slice must be a numeric value");if(arg.$slice>0)throw MinimongoError("$slice in $push must be zero or negative");slice=arg.$slice}var sortFunction=undefined;if(arg.$sort){if(slice===undefined)throw MinimongoError("$sort requires $slice to be present");sortFunction=new Minimongo.Sorter(arg.$sort).getComparator();for(var i=0;i<toPush.length;i++){if(LocalCollection._f._type(toPush[i])!==3){throw MinimongoError("$push like modifiers using $sort "+"require all elements to be objects")}}}if(position===undefined){for(var j=0;j<toPush.length;j++)target[field].push(toPush[j])}else{var spliceArguments=[position,0];for(var j=0;j<toPush.length;j++)spliceArguments.push(toPush[j]);Array.prototype.splice.apply(target[field],spliceArguments)}if(sortFunction)target[field].sort(sortFunction);if(slice!==undefined){if(slice===0)target[field]=[];else target[field]=target[field].slice(slice)}},$pushAll:function(target,field,arg){if(!(typeof arg==="object"&&arg instanceof Array))throw MinimongoError("Modifier $pushAll/pullAll allowed for arrays only");var x=target[field];if(x===undefined)target[field]=arg;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pushAll modifier to non-array");else{for(var i=0;i<arg.length;i++)x.push(arg[i])}},$addToSet:function(target,field,arg){var isEach=false;if(typeof arg==="object"){for(var k in arg){if(k==="$each")isEach=true;break}}var values=isEach?arg["$each"]:[arg];var x=target[field];if(x===undefined)target[field]=values;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $addToSet modifier to non-array");else{_.each(values,function(value){for(var i=0;i<x.length;i++)if(LocalCollection._f._equal(value,x[i]))return;x.push(value)})}},$pop:function(target,field,arg){if(target===undefined)return;var x=target[field];if(x===undefined)return;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pop modifier to non-array");else{if(typeof arg==="number"&&arg<0)x.splice(0,1);else x.pop()}},$pull:function(target,field,arg){if(target===undefined)return;var x=target[field];if(x===undefined)return;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pull/pullAll modifier to non-array");else{var out=[];if(arg!=null&&typeof arg==="object"&&!(arg instanceof Array)){var matcher=new Minimongo.Matcher(arg);for(var i=0;i<x.length;i++)if(!matcher.documentMatches(x[i]).result)out.push(x[i])}else{for(var i=0;i<x.length;i++)if(!LocalCollection._f._equal(x[i],arg))out.push(x[i])}target[field]=out}},$pullAll:function(target,field,arg){if(!(typeof arg==="object"&&arg instanceof Array))throw MinimongoError("Modifier $pushAll/pullAll allowed for arrays only");if(target===undefined)return;var x=target[field];if(x===undefined)return;else if(!(x instanceof Array))throw MinimongoError("Cannot apply $pull/pullAll modifier to non-array");else{var out=[];for(var i=0;i<x.length;i++){var exclude=false;for(var j=0;j<arg.length;j++){if(LocalCollection._f._equal(x[i],arg[j])){exclude=true;break}}if(!exclude)out.push(x[i])}target[field]=out}},$rename:function(target,field,arg,keypath,doc){if(keypath===arg)throw MinimongoError("$rename source must differ from target");if(target===null)throw MinimongoError("$rename source field invalid");if(typeof arg!=="string")throw MinimongoError("$rename target must be a string");if(target===undefined)return;var v=target[field];delete target[field];var keyparts=arg.split(".");var target2=findModTarget(doc,keyparts,{forbidArray:true});if(target2===null)throw MinimongoError("$rename target field invalid");var field2=keyparts.pop();target2[field2]=v},$bit:function(target,field,arg){throw MinimongoError("$bit is not supported")}}}).call(this);(function(){LocalCollection._diffQueryChanges=function(ordered,oldResults,newResults,observer,options){return DiffSequence.diffQueryChanges(ordered,oldResults,newResults,observer,options)};LocalCollection._diffQueryUnorderedChanges=function(oldResults,newResults,observer,options){return DiffSequence.diffQueryUnorderedChanges(oldResults,newResults,observer,options)};LocalCollection._diffQueryOrderedChanges=function(oldResults,newResults,observer,options){return DiffSequence.diffQueryOrderedChanges(oldResults,newResults,observer,options)};LocalCollection._diffObjects=function(left,right,callbacks){return DiffSequence.diffObjects(left,right,callbacks)}}).call(this);(function(){LocalCollection._IdMap=function(){var self=this;IdMap.call(self,MongoID.idStringify,MongoID.idParse)};Meteor._inherits(LocalCollection._IdMap,IdMap)}).call(this);(function(){LocalCollection._CachingChangeObserver=function(options){var self=this;options=options||{};var orderedFromCallbacks=options.callbacks&&LocalCollection._observeChangesCallbacksAreOrdered(options.callbacks);if(_.has(options,"ordered")){self.ordered=options.ordered;if(options.callbacks&&options.ordered!==orderedFromCallbacks)throw Error("ordered option doesn't match callbacks")}else if(options.callbacks){self.ordered=orderedFromCallbacks}else{throw Error("must provide ordered or callbacks")}var callbacks=options.callbacks||{};if(self.ordered){self.docs=new OrderedDict(MongoID.idStringify);self.applyChange={addedBefore:function(id,fields,before){var doc=EJSON.clone(fields);doc._id=id;callbacks.addedBefore&&callbacks.addedBefore.call(self,id,fields,before);callbacks.added&&callbacks.added.call(self,id,fields);self.docs.putBefore(id,doc,before||null)},movedBefore:function(id,before){var doc=self.docs.get(id);callbacks.movedBefore&&callbacks.movedBefore.call(self,id,before);self.docs.moveBefore(id,before||null)}}}else{self.docs=new LocalCollection._IdMap;self.applyChange={added:function(id,fields){var doc=EJSON.clone(fields);callbacks.added&&callbacks.added.call(self,id,fields);doc._id=id;self.docs.set(id,doc)}}}self.applyChange.changed=function(id,fields){var doc=self.docs.get(id);if(!doc)throw new Error("Unknown id for changed: "+id);callbacks.changed&&callbacks.changed.call(self,id,EJSON.clone(fields));DiffSequence.applyChanges(doc,fields)};self.applyChange.removed=function(id){callbacks.removed&&callbacks.removed.call(self,id);self.docs.remove(id)}};LocalCollection._observeFromObserveChanges=function(cursor,observeCallbacks){var transform=cursor.getTransform()||function(doc){return doc};var suppressed=!!observeCallbacks._suppress_initial;var observeChangesCallbacks;if(LocalCollection._observeCallbacksAreOrdered(observeCallbacks)){var indices=!observeCallbacks._no_indices;observeChangesCallbacks={addedBefore:function(id,fields,before){var self=this;if(suppressed||!(observeCallbacks.addedAt||observeCallbacks.added))return;var doc=transform(_.extend(fields,{_id:id}));if(observeCallbacks.addedAt){var index=indices?before?self.docs.indexOf(before):self.docs.size():-1;observeCallbacks.addedAt(doc,index,before)}else{observeCallbacks.added(doc)}},changed:function(id,fields){var self=this;if(!(observeCallbacks.changedAt||observeCallbacks.changed))return;var doc=EJSON.clone(self.docs.get(id));if(!doc)throw new Error("Unknown id for changed: "+id);var oldDoc=transform(EJSON.clone(doc));DiffSequence.applyChanges(doc,fields);doc=transform(doc);if(observeCallbacks.changedAt){var index=indices?self.docs.indexOf(id):-1;observeCallbacks.changedAt(doc,oldDoc,index)}else{observeCallbacks.changed(doc,oldDoc)}},movedBefore:function(id,before){var self=this;if(!observeCallbacks.movedTo)return;var from=indices?self.docs.indexOf(id):-1;var to=indices?before?self.docs.indexOf(before):self.docs.size():-1;if(to>from)--to;observeCallbacks.movedTo(transform(EJSON.clone(self.docs.get(id))),from,to,before||null)},removed:function(id){var self=this;if(!(observeCallbacks.removedAt||observeCallbacks.removed))return;var doc=transform(self.docs.get(id));if(observeCallbacks.removedAt){var index=indices?self.docs.indexOf(id):-1;observeCallbacks.removedAt(doc,index)}else{observeCallbacks.removed(doc)}}}}else{observeChangesCallbacks={added:function(id,fields){if(!suppressed&&observeCallbacks.added){var doc=_.extend(fields,{_id:id});observeCallbacks.added(transform(doc))}},changed:function(id,fields){var self=this;if(observeCallbacks.changed){var oldDoc=self.docs.get(id);var doc=EJSON.clone(oldDoc);DiffSequence.applyChanges(doc,fields);observeCallbacks.changed(transform(doc),transform(EJSON.clone(oldDoc)))}},removed:function(id){var self=this;if(observeCallbacks.removed){observeCallbacks.removed(transform(self.docs.get(id)))}}}}var changeObserver=new LocalCollection._CachingChangeObserver({callbacks:observeChangesCallbacks});var handle=cursor.observeChanges(changeObserver.applyChange);suppressed=false;return handle}}).call(this);(function(){LocalCollection._selectorIsId=function(selector){return typeof selector==="string"||typeof selector==="number"||selector instanceof MongoID.ObjectID};LocalCollection._selectorIsIdPerhapsAsObject=function(selector){return LocalCollection._selectorIsId(selector)||selector&&typeof selector==="object"&&selector._id&&LocalCollection._selectorIsId(selector._id)&&_.size(selector)===1};LocalCollection._idsMatchedBySelector=function(selector){if(LocalCollection._selectorIsId(selector))return[selector];if(!selector)return null;if(_.has(selector,"_id")){if(LocalCollection._selectorIsId(selector._id))return[selector._id];if(selector._id&&selector._id.$in&&_.isArray(selector._id.$in)&&!_.isEmpty(selector._id.$in)&&_.all(selector._id.$in,LocalCollection._selectorIsId)){return selector._id.$in}return null}if(selector.$and&&_.isArray(selector.$and)){for(var i=0;i<selector.$and.length;++i){var subIds=LocalCollection._idsMatchedBySelector(selector.$and[i]);if(subIds)return subIds}}return null}}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.minimongo={},{LocalCollection:LocalCollection,Minimongo:Minimongo,MinimongoTest:MinimongoTest})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var check=Package.check.check;var Match=Package.check.Match;var Random=Package.random.Random;var EJSON=Package.ejson.EJSON;var _=Package.underscore._;var Tracker=Package.tracker.Tracker;var Deps=Package.tracker.Deps;var Retry=Package.retry.Retry;var DDPCommon;(function(){DDPCommon={}}).call(this);(function(){DDPCommon.Heartbeat=function(options){var self=this;self.heartbeatInterval=options.heartbeatInterval;self.heartbeatTimeout=options.heartbeatTimeout;self._sendPing=options.sendPing;self._onTimeout=options.onTimeout;self._seenPacket=false;self._heartbeatIntervalHandle=null;self._heartbeatTimeoutHandle=null};_.extend(DDPCommon.Heartbeat.prototype,{stop:function(){var self=this;self._clearHeartbeatIntervalTimer();self._clearHeartbeatTimeoutTimer()},start:function(){var self=this;self.stop();self._startHeartbeatIntervalTimer()},_startHeartbeatIntervalTimer:function(){var self=this;self._heartbeatIntervalHandle=Meteor.setInterval(_.bind(self._heartbeatIntervalFired,self),self.heartbeatInterval)},_startHeartbeatTimeoutTimer:function(){var self=this;self._heartbeatTimeoutHandle=Meteor.setTimeout(_.bind(self._heartbeatTimeoutFired,self),self.heartbeatTimeout)},_clearHeartbeatIntervalTimer:function(){var self=this;if(self._heartbeatIntervalHandle){Meteor.clearInterval(self._heartbeatIntervalHandle);self._heartbeatIntervalHandle=null}},_clearHeartbeatTimeoutTimer:function(){var self=this;if(self._heartbeatTimeoutHandle){Meteor.clearTimeout(self._heartbeatTimeoutHandle);self._heartbeatTimeoutHandle=null}},_heartbeatIntervalFired:function(){var self=this;if(!self._seenPacket&&!self._heartbeatTimeoutHandle){self._sendPing();self._startHeartbeatTimeoutTimer()}self._seenPacket=false},_heartbeatTimeoutFired:function(){var self=this;self._heartbeatTimeoutHandle=null;self._onTimeout()},messageReceived:function(){var self=this;self._seenPacket=true;if(self._heartbeatTimeoutHandle){self._clearHeartbeatTimeoutTimer()}}})}).call(this);(function(){DDPCommon.SUPPORTED_DDP_VERSIONS=["1","pre2","pre1"];DDPCommon.parseDDP=function(stringMessage){try{var msg=JSON.parse(stringMessage)}catch(e){Meteor._debug("Discarding message with invalid JSON",stringMessage);return null}if(msg===null||typeof msg!=="object"){Meteor._debug("Discarding non-object DDP message",stringMessage);return null}if(_.has(msg,"cleared")){if(!_.has(msg,"fields"))msg.fields={};_.each(msg.cleared,function(clearKey){msg.fields[clearKey]=undefined});delete msg.cleared}_.each(["fields","params","result"],function(field){if(_.has(msg,field))msg[field]=EJSON._adjustTypesFromJSONValue(msg[field])});return msg};DDPCommon.stringifyDDP=function(msg){var copy=EJSON.clone(msg);if(_.has(msg,"fields")){var cleared=[];_.each(msg.fields,function(value,key){if(value===undefined){cleared.push(key);delete copy.fields[key]}});if(!_.isEmpty(cleared))copy.cleared=cleared;if(_.isEmpty(copy.fields))delete copy.fields}_.each(["fields","params","result"],function(field){if(_.has(copy,field))copy[field]=EJSON._adjustTypesToJSONValue(copy[field])});if(msg.id&&typeof msg.id!=="string"){throw new Error("Message id is not a string")}return JSON.stringify(copy)}}).call(this);(function(){DDPCommon.MethodInvocation=function(options){var self=this;this.isSimulation=options.isSimulation;this._unblock=options.unblock||function(){};this._calledUnblock=false;this.userId=options.userId;this._setUserId=options.setUserId||function(){};this.connection=options.connection;this.randomSeed=options.randomSeed;this.randomStream=null};_.extend(DDPCommon.MethodInvocation.prototype,{unblock:function(){var self=this;self._calledUnblock=true;self._unblock()},setUserId:function(userId){var self=this;if(self._calledUnblock)throw new Error("Can't call setUserId in a method after calling unblock");self.userId=userId;self._setUserId(userId)}})}).call(this);(function(){DDPCommon.RandomStream=function(options){var self=this;this.seed=[].concat(options.seed||randomToken());this.sequences={}};function randomToken(){return Random.hexString(20)}DDPCommon.RandomStream.get=function(scope,name){if(!name){name="default"}if(!scope){return Random.insecure}var randomStream=scope.randomStream;if(!randomStream){scope.randomStream=randomStream=new DDPCommon.RandomStream({seed:scope.randomSeed})}return randomStream._sequence(name)};DDPCommon.makeRpcSeed=function(enclosing,methodName){var stream=DDPCommon.RandomStream.get(enclosing,"/rpc/"+methodName);return stream.hexString(20)};_.extend(DDPCommon.RandomStream.prototype,{_sequence:function(name){var self=this;var sequence=self.sequences[name]||null;if(sequence===null){var sequenceSeed=self.seed.concat(name);for(var i=0;i<sequenceSeed.length;i++){if(_.isFunction(sequenceSeed[i])){sequenceSeed[i]=sequenceSeed[i]()}}self.sequences[name]=sequence=Random.createWithSeeds.apply(null,sequenceSeed)}return sequence}})}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["ddp-common"]={},{DDPCommon:DDPCommon})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var check=Package.check.check;var Match=Package.check.Match;var Random=Package.random.Random;var EJSON=Package.ejson.EJSON;var _=Package.underscore._;var Tracker=Package.tracker.Tracker;var Deps=Package.tracker.Deps;var Retry=Package.retry.Retry;var IdMap=Package["id-map"].IdMap;var DDPCommon=Package["ddp-common"].DDPCommon;var DiffSequence=Package["diff-sequence"].DiffSequence;var MongoID=Package["mongo-id"].MongoID;var DDP,LivedataTest,MongoIDMap,SockJS,toSockjsUrl,toWebsocketUrl,allConnections;(function(){DDP={};LivedataTest={}}).call(this);(function(){MongoIDMap=function(){var self=this;IdMap.call(self,MongoID.idStringify,MongoID.idParse)};Meteor._inherits(MongoIDMap,IdMap)}).call(this);(function(){SockJS=function(){var _document=document;var _window=window;var utils={};var REventTarget=function(){};REventTarget.prototype.addEventListener=function(eventType,listener){if(!this._listeners){this._listeners={}}if(!(eventType in this._listeners)){this._listeners[eventType]=[]}var arr=this._listeners[eventType];if(utils.arrIndexOf(arr,listener)===-1){arr.push(listener)}return};REventTarget.prototype.removeEventListener=function(eventType,listener){if(!(this._listeners&&eventType in this._listeners)){return}var arr=this._listeners[eventType];var idx=utils.arrIndexOf(arr,listener);if(idx!==-1){if(arr.length>1){this._listeners[eventType]=arr.slice(0,idx).concat(arr.slice(idx+1))}else{delete this._listeners[eventType]}return}return};REventTarget.prototype.dispatchEvent=function(event){var t=event.type;var args=Array.prototype.slice.call(arguments,0);if(this["on"+t]){this["on"+t].apply(this,args)}if(this._listeners&&t in this._listeners){for(var i=0;i<this._listeners[t].length;i++){this._listeners[t][i].apply(this,args)}}};var SimpleEvent=function(type,obj){this.type=type;if(typeof obj!=="undefined"){for(var k in obj){if(!obj.hasOwnProperty(k))continue;this[k]=obj[k]}}};SimpleEvent.prototype.toString=function(){var r=[];for(var k in this){if(!this.hasOwnProperty(k))continue;var v=this[k];if(typeof v==="function")v="[function]";r.push(k+"="+v)}return"SimpleEvent("+r.join(", ")+")"};var EventEmitter=function(events){var that=this;that._events=events||[];that._listeners={}};EventEmitter.prototype.emit=function(type){var that=this;that._verifyType(type);if(that._nuked)return;var args=Array.prototype.slice.call(arguments,1);if(that["on"+type]){that["on"+type].apply(that,args)}if(type in that._listeners){for(var i=0;i<that._listeners[type].length;i++){that._listeners[type][i].apply(that,args)}}};EventEmitter.prototype.on=function(type,callback){var that=this;that._verifyType(type);if(that._nuked)return;if(!(type in that._listeners)){that._listeners[type]=[]}that._listeners[type].push(callback)};EventEmitter.prototype._verifyType=function(type){var that=this;if(utils.arrIndexOf(that._events,type)===-1){utils.log("Event "+JSON.stringify(type)+" not listed "+JSON.stringify(that._events)+" in "+that)}};EventEmitter.prototype.nuke=function(){var that=this;that._nuked=true;for(var i=0;i<that._events.length;i++){delete that[that._events[i]]}that._listeners={}};var random_string_chars="abcdefghijklmnopqrstuvwxyz0123456789_";utils.random_string=function(length,max){max=max||random_string_chars.length;var i,ret=[];for(i=0;i<length;i++){ret.push(random_string_chars.substr(Math.floor(Math.random()*max),1))}return ret.join("")};utils.random_number=function(max){return Math.floor(Math.random()*max)};utils.random_number_string=function(max){var t=(""+(max-1)).length;var p=Array(t+1).join("0");return(p+utils.random_number(max)).slice(-t)};utils.getOrigin=function(url){url+="/";var parts=url.split("/").slice(0,3);return parts.join("/")};utils.isSameOriginUrl=function(url_a,url_b){if(!url_b)url_b=_window.location.href;return url_a.split("/").slice(0,3).join("/")===url_b.split("/").slice(0,3).join("/")};utils.isSameOriginScheme=function(url_a,url_b){if(!url_b)url_b=_window.location.href;return url_a.split(":")[0]===url_b.split(":")[0]};utils.getParentDomain=function(url){if(/^[0-9.]*$/.test(url))return url;if(/^\[/.test(url))return url;if(!/[.]/.test(url))return url;var parts=url.split(".").slice(1);return parts.join(".")};utils.objectExtend=function(dst,src){for(var k in src){if(src.hasOwnProperty(k)){dst[k]=src[k]}}return dst};var WPrefix="_jp";utils.polluteGlobalNamespace=function(){if(!(WPrefix in _window)){_window[WPrefix]={}}};utils.closeFrame=function(code,reason){return"c"+JSON.stringify([code,reason])};utils.userSetCode=function(code){return code===1e3||code>=3e3&&code<=4999};utils.countRTO=function(rtt){var rto;if(rtt>100){rto=3*rtt}else{rto=rtt+200}return rto};utils.log=function(){if(_window.console&&console.log&&console.log.apply){console.log.apply(console,arguments)}};utils.bind=function(fun,that){if(fun.bind){return fun.bind(that)}else{return function(){return fun.apply(that,arguments)}}};utils.flatUrl=function(url){return url.indexOf("?")===-1&&url.indexOf("#")===-1};utils.amendUrl=function(url,relativeTo){var baseUrl;if(relativeTo===undefined){baseUrl=_document.location}else{var protocolMatch=/^([a-z0-9.+-]+:)/i.exec(relativeTo);if(protocolMatch){var protocol=protocolMatch[0].toLowerCase();var rest=relativeTo.substring(protocol.length);var hostMatch=/[a-z0-9\.-]+(:[0-9]+)?/.exec(rest);if(hostMatch)var host=hostMatch[0]}if(!protocol||!host)throw new Error("relativeTo must be an absolute url");baseUrl={protocol:protocol,host:host}}if(!url){throw new Error("Wrong url for SockJS")}if(!utils.flatUrl(url)){throw new Error("Only basic urls are supported in SockJS")}if(url.indexOf("//")===0){url=baseUrl.protocol+url}if(url.indexOf("/")===0){url=baseUrl.protocol+"//"+baseUrl.host+url}url=url.replace(/[\/]+$/,"");var parts=url.split("/");if(parts[0]==="http:"&&/:80$/.test(parts[2])||parts[0]==="https:"&&/:443$/.test(parts[2])){parts[2]=parts[2].replace(/:(80|443)$/,"")}url=parts.join("/");return url};utils.arrIndexOf=function(arr,obj){for(var i=0;i<arr.length;i++){if(arr[i]===obj){return i}}return-1};utils.arrSkip=function(arr,obj){var idx=utils.arrIndexOf(arr,obj);if(idx===-1){return arr.slice()}else{var dst=arr.slice(0,idx);return dst.concat(arr.slice(idx+1))}};utils.isArray=Array.isArray||function(value){return{}.toString.call(value).indexOf("Array")>=0};utils.delay=function(t,fun){if(typeof t==="function"){fun=t;t=0}return setTimeout(fun,t)};var json_escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,json_lookup={"\0":"\\u0000","":"\\u0001","":"\\u0002","":"\\u0003","":"\\u0004","":"\\u0005","":"\\u0006","":"\\u0007","\b":"\\b","\t":"\\t","\n":"\\n","\v":"\\u000b","\f":"\\f","\r":"\\r","":"\\u000e","":"\\u000f","":"\\u0010","":"\\u0011","":"\\u0012","":"\\u0013","":"\\u0014","":"\\u0015","":"\\u0016","":"\\u0017","":"\\u0018","":"\\u0019","":"\\u001a","":"\\u001b","":"\\u001c","":"\\u001d","":"\\u001e","":"\\u001f",'"':'\\"',"\\":"\\\\","":"\\u007f","":"\\u0080","":"\\u0081","":"\\u0082","":"\\u0083","":"\\u0084","":"\\u0085","":"\\u0086","":"\\u0087","":"\\u0088","":"\\u0089","":"\\u008a","":"\\u008b","":"\\u008c","":"\\u008d","":"\\u008e","":"\\u008f","":"\\u0090","":"\\u0091","":"\\u0092","":"\\u0093","":"\\u0094","":"\\u0095","":"\\u0096","":"\\u0097","":"\\u0098","":"\\u0099","":"\\u009a","":"\\u009b","":"\\u009c","":"\\u009d","":"\\u009e","":"\\u009f","­":"\\u00ad","؀":"\\u0600","؁":"\\u0601","؂":"\\u0602","؃":"\\u0603","؄":"\\u0604","܏":"\\u070f","឴":"\\u17b4","឵":"\\u17b5","‌":"\\u200c","‍":"\\u200d","‎":"\\u200e","‏":"\\u200f","\u2028":"\\u2028","\u2029":"\\u2029","‪":"\\u202a","‫":"\\u202b","‬":"\\u202c","‭":"\\u202d","‮":"\\u202e"," ":"\\u202f","⁠":"\\u2060","⁡":"\\u2061","⁢":"\\u2062","⁣":"\\u2063","⁤":"\\u2064","⁥":"\\u2065","⁦":"\\u2066","⁧":"\\u2067","⁨":"\\u2068","⁩":"\\u2069","⁪":"\\u206a","⁫":"\\u206b","⁬":"\\u206c","⁭":"\\u206d","⁮":"\\u206e","⁯":"\\u206f","\ufeff":"\\ufeff","￰":"\\ufff0","￱":"\\ufff1","￲":"\\ufff2","￳":"\\ufff3","￴":"\\ufff4","￵":"\\ufff5","￶":"\\ufff6","￷":"\\ufff7","￸":"\\ufff8","￹":"\\ufff9","￺":"\\ufffa","￻":"\\ufffb","￼":"\\ufffc","�":"\\ufffd","￾":"\\ufffe","￿":"\\uffff"};var extra_escapable=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,extra_lookup;var JSONQuote=JSON&&JSON.stringify||function(string){json_escapable.lastIndex=0;if(json_escapable.test(string)){string=string.replace(json_escapable,function(a){return json_lookup[a]})}return'"'+string+'"'};var unroll_lookup=function(escapable){var i;var unrolled={};var c=[];for(i=0;i<65536;i++){c.push(String.fromCharCode(i))}escapable.lastIndex=0;c.join("").replace(escapable,function(a){unrolled[a]="\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);return""});escapable.lastIndex=0;return unrolled};utils.quote=function(string){var quoted=JSONQuote(string);extra_escapable.lastIndex=0;if(!extra_escapable.test(quoted)){return quoted}if(!extra_lookup)extra_lookup=unroll_lookup(extra_escapable);return quoted.replace(extra_escapable,function(a){return extra_lookup[a]})};var _all_protocols=["websocket","xdr-streaming","xhr-streaming","iframe-eventsource","iframe-htmlfile","xdr-polling","xhr-polling","iframe-xhr-polling","jsonp-polling"];utils.probeProtocols=function(){var probed={};for(var i=0;i<_all_protocols.length;i++){var protocol=_all_protocols[i];probed[protocol]=SockJS[protocol]&&SockJS[protocol].enabled()}return probed};utils.detectProtocols=function(probed,protocols_whitelist,info){var pe={},protocols=[];if(!protocols_whitelist)protocols_whitelist=_all_protocols;for(var i=0;i<protocols_whitelist.length;i++){var protocol=protocols_whitelist[i];pe[protocol]=probed[protocol]}var maybe_push=function(protos){var proto=protos.shift();if(pe[proto]){protocols.push(proto)}else{if(protos.length>0){maybe_push(protos)}}};if(info.websocket!==false){maybe_push(["websocket"])}if(pe["xhr-streaming"]&&!info.null_origin){protocols.push("xhr-streaming")}else{if(pe["xdr-streaming"]&&!info.cookie_needed&&!info.null_origin){protocols.push("xdr-streaming")}else{maybe_push(["iframe-eventsource","iframe-htmlfile"])}}if(pe["xhr-polling"]&&!info.null_origin){protocols.push("xhr-polling")}else{if(pe["xdr-polling"]&&!info.cookie_needed&&!info.null_origin){protocols.push("xdr-polling")}else{maybe_push(["iframe-xhr-polling","jsonp-polling"])}}return protocols};var MPrefix="_sockjs_global";utils.createHook=function(){var window_id="a"+utils.random_string(8);if(!(MPrefix in _window)){var map={};_window[MPrefix]=function(window_id){if(!(window_id in map)){map[window_id]={id:window_id,del:function(){delete map[window_id]}}}return map[window_id]}}return _window[MPrefix](window_id)};utils.attachMessage=function(listener){utils.attachEvent("message",listener)};utils.attachEvent=function(event,listener){if(typeof _window.addEventListener!=="undefined"){_window.addEventListener(event,listener,false)}else{_document.attachEvent("on"+event,listener);_window.attachEvent("on"+event,listener)}};utils.detachMessage=function(listener){utils.detachEvent("message",listener)};utils.detachEvent=function(event,listener){if(typeof _window.addEventListener!=="undefined"){_window.removeEventListener(event,listener,false)}else{_document.detachEvent("on"+event,listener);_window.detachEvent("on"+event,listener)}};var on_unload={};var after_unload=false;var trigger_unload_callbacks=function(){for(var ref in on_unload){on_unload[ref]();delete on_unload[ref]}};var unload_triggered=function(){if(after_unload)return;after_unload=true;trigger_unload_callbacks()};utils.attachEvent("unload",unload_triggered);utils.unload_add=function(listener){var ref=utils.random_string(8);on_unload[ref]=listener;if(after_unload){utils.delay(trigger_unload_callbacks);
	}return ref};utils.unload_del=function(ref){if(ref in on_unload)delete on_unload[ref]};utils.createIframe=function(iframe_url,error_callback){var iframe=_document.createElement("iframe");var tref,unload_ref;var unattach=function(){clearTimeout(tref);try{iframe.onload=null}catch(x){}iframe.onerror=null};var cleanup=function(){if(iframe){unattach();setTimeout(function(){if(iframe){iframe.parentNode.removeChild(iframe)}iframe=null},0);utils.unload_del(unload_ref)}};var onerror=function(r){if(iframe){cleanup();error_callback(r)}};var post=function(msg,origin){try{if(iframe&&iframe.contentWindow){iframe.contentWindow.postMessage(msg,origin)}}catch(x){}};iframe.src=iframe_url;iframe.style.display="none";iframe.style.position="absolute";iframe.onerror=function(){onerror("onerror")};iframe.onload=function(){clearTimeout(tref);tref=setTimeout(function(){onerror("onload timeout")},2e3)};_document.body.appendChild(iframe);tref=setTimeout(function(){onerror("timeout")},15e3);unload_ref=utils.unload_add(cleanup);return{post:post,cleanup:cleanup,loaded:unattach}};utils.createHtmlfile=function(iframe_url,error_callback){var doc=new ActiveXObject("htmlfile");var tref,unload_ref;var iframe;var unattach=function(){clearTimeout(tref)};var cleanup=function(){if(doc){unattach();utils.unload_del(unload_ref);iframe.parentNode.removeChild(iframe);iframe=doc=null;CollectGarbage()}};var onerror=function(r){if(doc){cleanup();error_callback(r)}};var post=function(msg,origin){try{if(iframe&&iframe.contentWindow){iframe.contentWindow.postMessage(msg,origin)}}catch(x){}};doc.open();doc.write("<html><s"+"cript>"+'document.domain="'+document.domain+'";'+"</s"+"cript></html>");doc.close();doc.parentWindow[WPrefix]=_window[WPrefix];var c=doc.createElement("div");doc.body.appendChild(c);iframe=doc.createElement("iframe");c.appendChild(iframe);iframe.src=iframe_url;tref=setTimeout(function(){onerror("timeout")},15e3);unload_ref=utils.unload_add(cleanup);return{post:post,cleanup:cleanup,loaded:unattach}};var AbstractXHRObject=function(){};AbstractXHRObject.prototype=new EventEmitter(["chunk","finish"]);AbstractXHRObject.prototype._start=function(method,url,payload,opts){var that=this;try{that.xhr=new XMLHttpRequest}catch(x){}if(!that.xhr){try{that.xhr=new _window.ActiveXObject("Microsoft.XMLHTTP")}catch(x){}}if(_window.ActiveXObject||_window.XDomainRequest){url+=(url.indexOf("?")===-1?"?":"&")+"t="+ +new Date}that.unload_ref=utils.unload_add(function(){that._cleanup(true)});try{that.xhr.open(method,url,true)}catch(e){that.emit("finish",0,"");that._cleanup();return}if(!opts||!opts.no_credentials){that.xhr.withCredentials="true"}if(opts&&opts.headers){for(var key in opts.headers){that.xhr.setRequestHeader(key,opts.headers[key])}}that.xhr.onreadystatechange=function(){if(that.xhr){var x=that.xhr;switch(x.readyState){case 3:try{var status=x.status;var text=x.responseText}catch(x){};if(status===1223)status=204;if(text&&text.length>0){that.emit("chunk",status,text)}break;case 4:var status=x.status;if(status===1223)status=204;that.emit("finish",status,x.responseText);that._cleanup(false);break}}};that.xhr.send(payload)};AbstractXHRObject.prototype._cleanup=function(abort){var that=this;if(!that.xhr)return;utils.unload_del(that.unload_ref);that.xhr.onreadystatechange=function(){};if(abort){try{that.xhr.abort()}catch(x){}}that.unload_ref=that.xhr=null};AbstractXHRObject.prototype.close=function(){var that=this;that.nuke();that._cleanup(true)};var XHRCorsObject=utils.XHRCorsObject=function(){var that=this,args=arguments;utils.delay(function(){that._start.apply(that,args)})};XHRCorsObject.prototype=new AbstractXHRObject;var XHRLocalObject=utils.XHRLocalObject=function(method,url,payload){var that=this;utils.delay(function(){that._start(method,url,payload,{no_credentials:true})})};XHRLocalObject.prototype=new AbstractXHRObject;var XDRObject=utils.XDRObject=function(method,url,payload){var that=this;utils.delay(function(){that._start(method,url,payload)})};XDRObject.prototype=new EventEmitter(["chunk","finish"]);XDRObject.prototype._start=function(method,url,payload){var that=this;var xdr=new XDomainRequest;url+=(url.indexOf("?")===-1?"?":"&")+"t="+ +new Date;var onerror=xdr.ontimeout=xdr.onerror=function(){that.emit("finish",0,"");that._cleanup(false)};xdr.onprogress=function(){that.emit("chunk",200,xdr.responseText)};xdr.onload=function(){that.emit("finish",200,xdr.responseText);that._cleanup(false)};that.xdr=xdr;that.unload_ref=utils.unload_add(function(){that._cleanup(true)});try{that.xdr.open(method,url);that.xdr.send(payload)}catch(x){onerror()}};XDRObject.prototype._cleanup=function(abort){var that=this;if(!that.xdr)return;utils.unload_del(that.unload_ref);that.xdr.ontimeout=that.xdr.onerror=that.xdr.onprogress=that.xdr.onload=null;if(abort){try{that.xdr.abort()}catch(x){}}that.unload_ref=that.xdr=null};XDRObject.prototype.close=function(){var that=this;that.nuke();that._cleanup(true)};utils.isXHRCorsCapable=function(){if(_window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest){return 1}if(_window.XDomainRequest&&_document.domain){return 2}if(IframeTransport.enabled()){return 3}return 4};var SockJS=function(url,dep_protocols_whitelist,options){if(!(this instanceof SockJS)){return new SockJS(url,dep_protocols_whitelist,options)}var that=this,protocols_whitelist;that._options={devel:false,debug:false,protocols_whitelist:[],info:undefined,rtt:undefined};if(options){utils.objectExtend(that._options,options)}that._base_url=utils.amendUrl(url);that._server=that._options.server||utils.random_number_string(1e3);if(that._options.protocols_whitelist&&that._options.protocols_whitelist.length){protocols_whitelist=that._options.protocols_whitelist}else{if(typeof dep_protocols_whitelist==="string"&&dep_protocols_whitelist.length>0){protocols_whitelist=[dep_protocols_whitelist]}else if(utils.isArray(dep_protocols_whitelist)){protocols_whitelist=dep_protocols_whitelist}else{protocols_whitelist=null}if(protocols_whitelist){that._debug('Deprecated API: Use "protocols_whitelist" option '+"instead of supplying protocol list as a second "+"parameter to SockJS constructor.")}}that._protocols=[];that.protocol=null;that.readyState=SockJS.CONNECTING;that._ir=createInfoReceiver(that._base_url);that._ir.onfinish=function(info,rtt){that._ir=null;if(info){if(that._options.info){info=utils.objectExtend(info,that._options.info)}if(that._options.rtt){rtt=that._options.rtt}that._applyInfo(info,rtt,protocols_whitelist);that._didClose()}else{that._didClose(1002,"Can't connect to server",true)}}};SockJS.prototype=new REventTarget;SockJS.version="0.3.4";SockJS.CONNECTING=0;SockJS.OPEN=1;SockJS.CLOSING=2;SockJS.CLOSED=3;SockJS.prototype._debug=function(){if(this._options.debug)utils.log.apply(utils,arguments)};SockJS.prototype._dispatchOpen=function(){var that=this;if(that.readyState===SockJS.CONNECTING){if(that._transport_tref){clearTimeout(that._transport_tref);that._transport_tref=null}that.readyState=SockJS.OPEN;that.dispatchEvent(new SimpleEvent("open"))}else{that._didClose(1006,"Server lost session")}};SockJS.prototype._dispatchMessage=function(data){var that=this;if(that.readyState!==SockJS.OPEN)return;that.dispatchEvent(new SimpleEvent("message",{data:data}))};SockJS.prototype._dispatchHeartbeat=function(data){var that=this;if(that.readyState!==SockJS.OPEN)return;that.dispatchEvent(new SimpleEvent("heartbeat",{}))};SockJS.prototype._didClose=function(code,reason,force){var that=this;if(that.readyState!==SockJS.CONNECTING&&that.readyState!==SockJS.OPEN&&that.readyState!==SockJS.CLOSING)throw new Error("INVALID_STATE_ERR");if(that._ir){that._ir.nuke();that._ir=null}if(that._transport){that._transport.doCleanup();that._transport=null}var close_event=new SimpleEvent("close",{code:code,reason:reason,wasClean:utils.userSetCode(code)});if(!utils.userSetCode(code)&&that.readyState===SockJS.CONNECTING&&!force){if(that._try_next_protocol(close_event)){return}close_event=new SimpleEvent("close",{code:2e3,reason:"All transports failed",wasClean:false,last_event:close_event})}that.readyState=SockJS.CLOSED;utils.delay(function(){that.dispatchEvent(close_event)})};SockJS.prototype._didMessage=function(data){var that=this;var type=data.slice(0,1);switch(type){case"o":that._dispatchOpen();break;case"a":var payload=JSON.parse(data.slice(1)||"[]");for(var i=0;i<payload.length;i++){that._dispatchMessage(payload[i])}break;case"m":var payload=JSON.parse(data.slice(1)||"null");that._dispatchMessage(payload);break;case"c":var payload=JSON.parse(data.slice(1)||"[]");that._didClose(payload[0],payload[1]);break;case"h":that._dispatchHeartbeat();break}};SockJS.prototype._try_next_protocol=function(close_event){var that=this;if(that.protocol){that._debug("Closed transport:",that.protocol,""+close_event);that.protocol=null}if(that._transport_tref){clearTimeout(that._transport_tref);that._transport_tref=null}while(1){var protocol=that.protocol=that._protocols.shift();if(!protocol){return false}if(SockJS[protocol]&&SockJS[protocol].need_body===true&&(!_document.body||typeof _document.readyState!=="undefined"&&_document.readyState!=="complete")){that._protocols.unshift(protocol);that.protocol="waiting-for-load";utils.attachEvent("load",function(){that._try_next_protocol()});return true}if(!SockJS[protocol]||!SockJS[protocol].enabled(that._options)){that._debug("Skipping transport:",protocol)}else{var roundTrips=SockJS[protocol].roundTrips||1;var to=(that._options.rto||0)*roundTrips||5e3;that._transport_tref=utils.delay(to,function(){if(that.readyState===SockJS.CONNECTING){that._didClose(2007,"Transport timeouted")}});var connid=utils.random_string(8);var trans_url=that._base_url+"/"+that._server+"/"+connid;that._debug("Opening transport:",protocol," url:"+trans_url," RTO:"+that._options.rto);that._transport=new SockJS[protocol](that,trans_url,that._base_url);return true}}};SockJS.prototype.close=function(code,reason){var that=this;if(code&&!utils.userSetCode(code))throw new Error("INVALID_ACCESS_ERR");if(that.readyState!==SockJS.CONNECTING&&that.readyState!==SockJS.OPEN){return false}that.readyState=SockJS.CLOSING;that._didClose(code||1e3,reason||"Normal closure");return true};SockJS.prototype.send=function(data){var that=this;if(that.readyState===SockJS.CONNECTING)throw new Error("INVALID_STATE_ERR");if(that.readyState===SockJS.OPEN){that._transport.doSend(utils.quote(""+data))}return true};SockJS.prototype._applyInfo=function(info,rtt,protocols_whitelist){var that=this;that._options.info=info;that._options.rtt=rtt;that._options.rto=utils.countRTO(rtt);that._options.info.null_origin=!_document.domain;if(info.base_url)that._base_url=utils.amendUrl(info.base_url,that._base_url);var probed=utils.probeProtocols();that._protocols=utils.detectProtocols(probed,protocols_whitelist,info);if(!utils.isSameOriginScheme(that._base_url)&&2===utils.isXHRCorsCapable()){that._protocols=["jsonp-polling"]}};var WebSocketTransport=SockJS.websocket=function(ri,trans_url){var that=this;var url=trans_url+"/websocket";if(url.slice(0,5)==="https"){url="wss"+url.slice(5)}else{url="ws"+url.slice(4)}that.ri=ri;that.url=url;var Constructor=_window.WebSocket||_window.MozWebSocket;that.ws=new Constructor(that.url);that.ws.onmessage=function(e){that.ri._didMessage(e.data)};that.unload_ref=utils.unload_add(function(){that.ws.close()});that.ws.onclose=function(){that.ri._didMessage(utils.closeFrame(1006,"WebSocket connection broken"))}};WebSocketTransport.prototype.doSend=function(data){this.ws.send("["+data+"]")};WebSocketTransport.prototype.doCleanup=function(){var that=this;var ws=that.ws;if(ws){ws.onmessage=ws.onclose=null;ws.close();utils.unload_del(that.unload_ref);that.unload_ref=that.ri=that.ws=null}};WebSocketTransport.enabled=function(){return!!(_window.WebSocket||_window.MozWebSocket)};WebSocketTransport.roundTrips=2;var BufferedSender=function(){};BufferedSender.prototype.send_constructor=function(sender){var that=this;that.send_buffer=[];that.sender=sender};BufferedSender.prototype.doSend=function(message){var that=this;that.send_buffer.push(message);if(!that.send_stop){that.send_schedule()}};BufferedSender.prototype.send_schedule_wait=function(){var that=this;var tref;that.send_stop=function(){that.send_stop=null;clearTimeout(tref)};tref=utils.delay(25,function(){that.send_stop=null;that.send_schedule()})};BufferedSender.prototype.send_schedule=function(){var that=this;if(that.send_buffer.length>0){var payload="["+that.send_buffer.join(",")+"]";that.send_stop=that.sender(that.trans_url,payload,function(success,abort_reason){that.send_stop=null;if(success===false){that.ri._didClose(1006,"Sending error "+abort_reason)}else{that.send_schedule_wait()}});that.send_buffer=[]}};BufferedSender.prototype.send_destructor=function(){var that=this;if(that._send_stop){that._send_stop()}that._send_stop=null};var jsonPGenericSender=function(url,payload,callback){var that=this;if(!("_send_form"in that)){var form=that._send_form=_document.createElement("form");var area=that._send_area=_document.createElement("textarea");area.name="d";form.style.display="none";form.style.position="absolute";form.method="POST";form.enctype="application/x-www-form-urlencoded";form.acceptCharset="UTF-8";form.appendChild(area);_document.body.appendChild(form)}var form=that._send_form;var area=that._send_area;var id="a"+utils.random_string(8);form.target=id;form.action=url+"/jsonp_send?i="+id;var iframe;try{iframe=_document.createElement('<iframe name="'+id+'">')}catch(x){iframe=_document.createElement("iframe");iframe.name=id}iframe.id=id;form.appendChild(iframe);iframe.style.display="none";try{area.value=payload}catch(e){utils.log("Your browser is seriously broken. Go home! "+e.message)}form.submit();var completed=function(e){if(!iframe.onerror)return;iframe.onreadystatechange=iframe.onerror=iframe.onload=null;utils.delay(500,function(){iframe.parentNode.removeChild(iframe);iframe=null});area.value="";callback(true)};iframe.onerror=iframe.onload=completed;iframe.onreadystatechange=function(e){if(iframe.readyState=="complete")completed()};return completed};var createAjaxSender=function(AjaxObject){return function(url,payload,callback){var xo=new AjaxObject("POST",url+"/xhr_send",payload);xo.onfinish=function(status,text){callback(status===200||status===204,"http status "+status)};return function(abort_reason){callback(false,abort_reason)}}};var jsonPGenericReceiver=function(url,callback){var tref;var script=_document.createElement("script");var script2;var close_script=function(frame){if(script2){script2.parentNode.removeChild(script2);script2=null}if(script){clearTimeout(tref);script.parentNode.removeChild(script);script.onreadystatechange=script.onerror=script.onload=script.onclick=null;script=null;callback(frame);callback=null}};var loaded_okay=false;var error_timer=null;script.id="a"+utils.random_string(8);script.src=url;script.type="text/javascript";script.charset="UTF-8";script.onerror=function(e){if(!error_timer){error_timer=setTimeout(function(){if(!loaded_okay){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (onerror)"))}},1e3)}};script.onload=function(e){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (onload)"))};script.onreadystatechange=function(e){if(/loaded|closed/.test(script.readyState)){if(script&&script.htmlFor&&script.onclick){loaded_okay=true;try{script.onclick()}catch(x){}}if(script){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (onreadystatechange)"))}}};if(typeof script.async==="undefined"&&_document.attachEvent){if(!/opera/i.test(navigator.userAgent)){try{script.htmlFor=script.id;script.event="onclick"}catch(x){}script.async=true}else{script2=_document.createElement("script");script2.text="try{var a = document.getElementById('"+script.id+"'); if(a)a.onerror();}catch(x){};";script.async=script2.async=false}}if(typeof script.async!=="undefined"){script.async=true}tref=setTimeout(function(){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (timeout)"))},35e3);var head=_document.getElementsByTagName("head")[0];head.insertBefore(script,head.firstChild);if(script2){head.insertBefore(script2,head.firstChild)}return close_script};var JsonPTransport=SockJS["jsonp-polling"]=function(ri,trans_url){utils.polluteGlobalNamespace();var that=this;that.ri=ri;that.trans_url=trans_url;that.send_constructor(jsonPGenericSender);that._schedule_recv()};JsonPTransport.prototype=new BufferedSender;JsonPTransport.prototype._schedule_recv=function(){var that=this;var callback=function(data){that._recv_stop=null;if(data){if(!that._is_closing){that.ri._didMessage(data)}}if(!that._is_closing){that._schedule_recv()}};that._recv_stop=jsonPReceiverWrapper(that.trans_url+"/jsonp",jsonPGenericReceiver,callback)};JsonPTransport.enabled=function(){return true};JsonPTransport.need_body=true;JsonPTransport.prototype.doCleanup=function(){var that=this;that._is_closing=true;if(that._recv_stop){that._recv_stop()}that.ri=that._recv_stop=null;that.send_destructor()};var jsonPReceiverWrapper=function(url,constructReceiver,user_callback){var id="a"+utils.random_string(6);var url_id=url+"?c="+escape(WPrefix+"."+id);var aborting=0;var callback=function(frame){switch(aborting){case 0:delete _window[WPrefix][id];user_callback(frame);break;case 1:user_callback(frame);aborting=2;break;case 2:delete _window[WPrefix][id];break}};var close_script=constructReceiver(url_id,callback);_window[WPrefix][id]=close_script;var stop=function(){if(_window[WPrefix][id]){aborting=1;_window[WPrefix][id](utils.closeFrame(1e3,"JSONP user aborted read"))}};return stop};var AjaxBasedTransport=function(){};AjaxBasedTransport.prototype=new BufferedSender;AjaxBasedTransport.prototype.run=function(ri,trans_url,url_suffix,Receiver,AjaxObject){var that=this;that.ri=ri;that.trans_url=trans_url;that.send_constructor(createAjaxSender(AjaxObject));that.poll=new Polling(ri,Receiver,trans_url+url_suffix,AjaxObject)};AjaxBasedTransport.prototype.doCleanup=function(){var that=this;if(that.poll){that.poll.abort();that.poll=null}};var XhrStreamingTransport=SockJS["xhr-streaming"]=function(ri,trans_url){this.run(ri,trans_url,"/xhr_streaming",XhrReceiver,utils.XHRCorsObject)};XhrStreamingTransport.prototype=new AjaxBasedTransport;XhrStreamingTransport.enabled=function(){return _window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest&&!/opera/i.test(navigator.userAgent)};XhrStreamingTransport.roundTrips=2;XhrStreamingTransport.need_body=true;var XdrStreamingTransport=SockJS["xdr-streaming"]=function(ri,trans_url){this.run(ri,trans_url,"/xhr_streaming",XhrReceiver,utils.XDRObject)};XdrStreamingTransport.prototype=new AjaxBasedTransport;XdrStreamingTransport.enabled=function(){return!!_window.XDomainRequest};XdrStreamingTransport.roundTrips=2;var XhrPollingTransport=SockJS["xhr-polling"]=function(ri,trans_url){this.run(ri,trans_url,"/xhr",XhrReceiver,utils.XHRCorsObject)};XhrPollingTransport.prototype=new AjaxBasedTransport;XhrPollingTransport.enabled=XhrStreamingTransport.enabled;XhrPollingTransport.roundTrips=2;var XdrPollingTransport=SockJS["xdr-polling"]=function(ri,trans_url){this.run(ri,trans_url,"/xhr",XhrReceiver,utils.XDRObject)};XdrPollingTransport.prototype=new AjaxBasedTransport;XdrPollingTransport.enabled=XdrStreamingTransport.enabled;XdrPollingTransport.roundTrips=2;var IframeTransport=function(){};IframeTransport.prototype.i_constructor=function(ri,trans_url,base_url){var that=this;that.ri=ri;that.origin=utils.getOrigin(base_url);that.base_url=base_url;that.trans_url=trans_url;var iframe_url=base_url+"/iframe.html";if(that.ri._options.devel){iframe_url+="?t="+ +new Date}that.window_id=utils.random_string(8);iframe_url+="#"+that.window_id;that.iframeObj=utils.createIframe(iframe_url,function(r){that.ri._didClose(1006,"Unable to load an iframe ("+r+")")});that.onmessage_cb=utils.bind(that.onmessage,that);utils.attachMessage(that.onmessage_cb)};IframeTransport.prototype.doCleanup=function(){var that=this;if(that.iframeObj){utils.detachMessage(that.onmessage_cb);try{if(that.iframeObj.iframe.contentWindow){that.postMessage("c")}}catch(x){}that.iframeObj.cleanup();that.iframeObj=null;that.onmessage_cb=that.iframeObj=null}};IframeTransport.prototype.onmessage=function(e){var that=this;if(e.origin!==that.origin)return;var window_id=e.data.slice(0,8);var type=e.data.slice(8,9);var data=e.data.slice(9);if(window_id!==that.window_id)return;switch(type){case"s":that.iframeObj.loaded();that.postMessage("s",JSON.stringify([SockJS.version,that.protocol,that.trans_url,that.base_url]));break;case"t":that.ri._didMessage(data);break}};IframeTransport.prototype.postMessage=function(type,data){var that=this;that.iframeObj.post(that.window_id+type+(data||""),that.origin)};IframeTransport.prototype.doSend=function(message){this.postMessage("m",message)};IframeTransport.enabled=function(){var konqueror=navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Konqueror")!==-1;return(typeof _window.postMessage==="function"||typeof _window.postMessage==="object")&&!konqueror};var curr_window_id;var postMessage=function(type,data){if(parent!==_window){parent.postMessage(curr_window_id+type+(data||""),"*")}else{utils.log("Can't postMessage, no parent window.",type,data)}};var FacadeJS=function(){};FacadeJS.prototype._didClose=function(code,reason){postMessage("t",utils.closeFrame(code,reason))};FacadeJS.prototype._didMessage=function(frame){postMessage("t",frame)};FacadeJS.prototype._doSend=function(data){this._transport.doSend(data)};FacadeJS.prototype._doCleanup=function(){this._transport.doCleanup()};utils.parent_origin=undefined;SockJS.bootstrap_iframe=function(){var facade;curr_window_id=_document.location.hash.slice(1);var onMessage=function(e){if(e.source!==parent)return;if(typeof utils.parent_origin==="undefined")utils.parent_origin=e.origin;if(e.origin!==utils.parent_origin)return;var window_id=e.data.slice(0,8);var type=e.data.slice(8,9);var data=e.data.slice(9);if(window_id!==curr_window_id)return;switch(type){case"s":var p=JSON.parse(data);var version=p[0];var protocol=p[1];var trans_url=p[2];var base_url=p[3];if(version!==SockJS.version){utils.log("Incompatibile SockJS! Main site uses:"+' "'+version+'", the iframe:'+' "'+SockJS.version+'".')}if(!utils.flatUrl(trans_url)||!utils.flatUrl(base_url)){utils.log("Only basic urls are supported in SockJS");return}if(!utils.isSameOriginUrl(trans_url)||!utils.isSameOriginUrl(base_url)){utils.log("Can't connect to different domain from within an "+"iframe. ("+JSON.stringify([_window.location.href,trans_url,base_url])+")");return}facade=new FacadeJS;facade._transport=new FacadeJS[protocol](facade,trans_url,base_url);break;case"m":facade._doSend(data);break;case"c":if(facade)facade._doCleanup();facade=null;break}};utils.attachMessage(onMessage);postMessage("s")};var InfoReceiver=function(base_url,AjaxObject){var that=this;utils.delay(function(){that.doXhr(base_url,AjaxObject)})};InfoReceiver.prototype=new EventEmitter(["finish"]);InfoReceiver.prototype.doXhr=function(base_url,AjaxObject){var that=this;var t0=(new Date).getTime();var xo=new AjaxObject("GET",base_url+"/info?cb="+utils.random_string(10));var tref=utils.delay(8e3,function(){xo.ontimeout()});xo.onfinish=function(status,text){clearTimeout(tref);tref=null;if(status===200){var rtt=(new Date).getTime()-t0;var info=JSON.parse(text);if(typeof info!=="object")info={};that.emit("finish",info,rtt)}else{that.emit("finish")}};xo.ontimeout=function(){xo.close();that.emit("finish")}};var InfoReceiverIframe=function(base_url){var that=this;var go=function(){var ifr=new IframeTransport;ifr.protocol="w-iframe-info-receiver";var fun=function(r){if(typeof r==="string"&&r.substr(0,1)==="m"){var d=JSON.parse(r.substr(1));var info=d[0],rtt=d[1];that.emit("finish",info,rtt)}else{that.emit("finish")}ifr.doCleanup();ifr=null};var mock_ri={_options:{},_didClose:fun,_didMessage:fun};ifr.i_constructor(mock_ri,base_url,base_url)};if(!_document.body){utils.attachEvent("load",go)}else{go()}};InfoReceiverIframe.prototype=new EventEmitter(["finish"]);var InfoReceiverFake=function(){var that=this;utils.delay(function(){that.emit("finish",{},2e3)})};InfoReceiverFake.prototype=new EventEmitter(["finish"]);var createInfoReceiver=function(base_url){if(utils.isSameOriginUrl(base_url)){return new InfoReceiver(base_url,utils.XHRLocalObject)}switch(utils.isXHRCorsCapable()){case 1:return new InfoReceiver(base_url,utils.XHRLocalObject);case 2:if(utils.isSameOriginScheme(base_url))return new InfoReceiver(base_url,utils.XDRObject);else return new InfoReceiverFake;case 3:return new InfoReceiverIframe(base_url);default:return new InfoReceiverFake}};var WInfoReceiverIframe=FacadeJS["w-iframe-info-receiver"]=function(ri,_trans_url,base_url){var ir=new InfoReceiver(base_url,utils.XHRLocalObject);ir.onfinish=function(info,rtt){ri._didMessage("m"+JSON.stringify([info,rtt]));ri._didClose()}};WInfoReceiverIframe.prototype.doCleanup=function(){};var EventSourceIframeTransport=SockJS["iframe-eventsource"]=function(){var that=this;that.protocol="w-iframe-eventsource";that.i_constructor.apply(that,arguments)};EventSourceIframeTransport.prototype=new IframeTransport;EventSourceIframeTransport.enabled=function(){return"EventSource"in _window&&IframeTransport.enabled()};EventSourceIframeTransport.need_body=true;EventSourceIframeTransport.roundTrips=3;var EventSourceTransport=FacadeJS["w-iframe-eventsource"]=function(ri,trans_url){this.run(ri,trans_url,"/eventsource",EventSourceReceiver,utils.XHRLocalObject)};EventSourceTransport.prototype=new AjaxBasedTransport;var XhrPollingIframeTransport=SockJS["iframe-xhr-polling"]=function(){var that=this;that.protocol="w-iframe-xhr-polling";that.i_constructor.apply(that,arguments)};XhrPollingIframeTransport.prototype=new IframeTransport;XhrPollingIframeTransport.enabled=function(){return _window.XMLHttpRequest&&IframeTransport.enabled()};XhrPollingIframeTransport.need_body=true;XhrPollingIframeTransport.roundTrips=3;var XhrPollingITransport=FacadeJS["w-iframe-xhr-polling"]=function(ri,trans_url){this.run(ri,trans_url,"/xhr",XhrReceiver,utils.XHRLocalObject)};XhrPollingITransport.prototype=new AjaxBasedTransport;var HtmlFileIframeTransport=SockJS["iframe-htmlfile"]=function(){var that=this;that.protocol="w-iframe-htmlfile";that.i_constructor.apply(that,arguments)};HtmlFileIframeTransport.prototype=new IframeTransport;HtmlFileIframeTransport.enabled=function(){return IframeTransport.enabled()};HtmlFileIframeTransport.need_body=true;HtmlFileIframeTransport.roundTrips=3;var HtmlFileTransport=FacadeJS["w-iframe-htmlfile"]=function(ri,trans_url){this.run(ri,trans_url,"/htmlfile",HtmlfileReceiver,utils.XHRLocalObject)};HtmlFileTransport.prototype=new AjaxBasedTransport;var Polling=function(ri,Receiver,recv_url,AjaxObject){var that=this;that.ri=ri;that.Receiver=Receiver;that.recv_url=recv_url;that.AjaxObject=AjaxObject;that._scheduleRecv()};Polling.prototype._scheduleRecv=function(){var that=this;var poll=that.poll=new that.Receiver(that.recv_url,that.AjaxObject);var msg_counter=0;poll.onmessage=function(e){msg_counter+=1;that.ri._didMessage(e.data)};poll.onclose=function(e){that.poll=poll=poll.onmessage=poll.onclose=null;if(!that.poll_is_closing){if(e.reason==="permanent"){that.ri._didClose(1006,"Polling error ("+e.reason+")")}else{that._scheduleRecv()}}}};Polling.prototype.abort=function(){var that=this;that.poll_is_closing=true;if(that.poll){that.poll.abort()}};var EventSourceReceiver=function(url){var that=this;var es=new EventSource(url);es.onmessage=function(e){that.dispatchEvent(new SimpleEvent("message",{data:unescape(e.data)}))};that.es_close=es.onerror=function(e,abort_reason){var reason=abort_reason?"user":es.readyState!==2?"network":"permanent";that.es_close=es.onmessage=es.onerror=null;es.close();es=null;utils.delay(200,function(){that.dispatchEvent(new SimpleEvent("close",{reason:reason}))})}};EventSourceReceiver.prototype=new REventTarget;EventSourceReceiver.prototype.abort=function(){var that=this;if(that.es_close){that.es_close({},true)}};var _is_ie_htmlfile_capable;var isIeHtmlfileCapable=function(){if(_is_ie_htmlfile_capable===undefined){if("ActiveXObject"in _window){try{_is_ie_htmlfile_capable=!!new ActiveXObject("htmlfile")}catch(x){}}else{_is_ie_htmlfile_capable=false}}return _is_ie_htmlfile_capable};var HtmlfileReceiver=function(url){var that=this;utils.polluteGlobalNamespace();that.id="a"+utils.random_string(6,26);url+=(url.indexOf("?")===-1?"?":"&")+"c="+escape(WPrefix+"."+that.id);var constructor=isIeHtmlfileCapable()?utils.createHtmlfile:utils.createIframe;var iframeObj;_window[WPrefix][that.id]={start:function(){iframeObj.loaded()},message:function(data){that.dispatchEvent(new SimpleEvent("message",{data:data}))},stop:function(){that.iframe_close({},"network")}};that.iframe_close=function(e,abort_reason){iframeObj.cleanup();that.iframe_close=iframeObj=null;delete _window[WPrefix][that.id];that.dispatchEvent(new SimpleEvent("close",{reason:abort_reason}))};iframeObj=constructor(url,function(e){that.iframe_close({},"permanent")})};HtmlfileReceiver.prototype=new REventTarget;HtmlfileReceiver.prototype.abort=function(){var that=this;if(that.iframe_close){that.iframe_close({},"user")}};var XhrReceiver=function(url,AjaxObject){var that=this;var buf_pos=0;that.xo=new AjaxObject("POST",url,null);that.xo.onchunk=function(status,text){if(status!==200)return;while(1){var buf=text.slice(buf_pos);var p=buf.indexOf("\n");if(p===-1)break;buf_pos+=p+1;var msg=buf.slice(0,p);that.dispatchEvent(new SimpleEvent("message",{data:msg}))}};that.xo.onfinish=function(status,text){that.xo.onchunk(status,text);that.xo=null;var reason=status===200?"network":"permanent";that.dispatchEvent(new SimpleEvent("close",{reason:reason}))}};XhrReceiver.prototype=new REventTarget;XhrReceiver.prototype.abort=function(){var that=this;if(that.xo){that.xo.close();that.dispatchEvent(new SimpleEvent("close",{reason:"user"}));that.xo=null}};SockJS.getUtils=function(){return utils};SockJS.getIframeTransport=function(){return IframeTransport};return SockJS}();if("_sockjs_onload"in window)setTimeout(_sockjs_onload,1);if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return SockJS}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}}).call(this);(function(){LivedataTest.ClientStream=function(url,options){var self=this;self.options=_.extend({retry:true},options);self._initCommon(self.options);self.HEARTBEAT_TIMEOUT=100*1e3;self.rawUrl=url;self.socket=null;self.heartbeatTimer=null;if(typeof window!=="undefined"&&window.addEventListener)window.addEventListener("online",_.bind(self._online,self),false);self._launchConnection()};_.extend(LivedataTest.ClientStream.prototype,{send:function(data){var self=this;if(self.currentStatus.connected){self.socket.send(data)}},_changeUrl:function(url){var self=this;self.rawUrl=url},_connected:function(){var self=this;if(self.connectionTimer){clearTimeout(self.connectionTimer);self.connectionTimer=null}if(self.currentStatus.connected){return}self.currentStatus.status="connected";self.currentStatus.connected=true;self.currentStatus.retryCount=0;self.statusChanged();_.each(self.eventCallbacks.reset,function(callback){callback()})},_cleanup:function(maybeError){var self=this;self._clearConnectionAndHeartbeatTimers();if(self.socket){self.socket.onmessage=self.socket.onclose=self.socket.onerror=self.socket.onheartbeat=function(){};self.socket.close();self.socket=null}_.each(self.eventCallbacks.disconnect,function(callback){callback(maybeError)})},_clearConnectionAndHeartbeatTimers:function(){var self=this;if(self.connectionTimer){clearTimeout(self.connectionTimer);self.connectionTimer=null}if(self.heartbeatTimer){clearTimeout(self.heartbeatTimer);self.heartbeatTimer=null}},_heartbeat_timeout:function(){var self=this;Meteor._debug("Connection timeout. No sockjs heartbeat received.");self._lostConnection(new DDP.ConnectionError("Heartbeat timed out"))},_heartbeat_received:function(){var self=this;if(self._forcedToDisconnect)return;if(self.heartbeatTimer)clearTimeout(self.heartbeatTimer);
	self.heartbeatTimer=setTimeout(_.bind(self._heartbeat_timeout,self),self.HEARTBEAT_TIMEOUT)},_sockjsProtocolsWhitelist:function(){var protocolsWhitelist=["xdr-polling","xhr-polling","iframe-xhr-polling","jsonp-polling"];var noWebsockets=navigator&&/iPhone|iPad|iPod/.test(navigator.userAgent)&&/OS 4_|OS 5_/.test(navigator.userAgent);if(!noWebsockets)protocolsWhitelist=["websocket"].concat(protocolsWhitelist);return protocolsWhitelist},_launchConnection:function(){var self=this;self._cleanup();var options=_.extend({protocols_whitelist:self._sockjsProtocolsWhitelist()},self.options._sockjsOptions);self.socket=new SockJS(toSockjsUrl(self.rawUrl),undefined,options);self.socket.onopen=function(data){self._connected()};self.socket.onmessage=function(data){self._heartbeat_received();if(self.currentStatus.connected)_.each(self.eventCallbacks.message,function(callback){callback(data.data)})};self.socket.onclose=function(){self._lostConnection()};self.socket.onerror=function(){Meteor._debug("stream error",_.toArray(arguments),(new Date).toDateString())};self.socket.onheartbeat=function(){self._heartbeat_received()};if(self.connectionTimer)clearTimeout(self.connectionTimer);self.connectionTimer=setTimeout(function(){self._lostConnection(new DDP.ConnectionError("DDP connection timed out"))},self.CONNECT_TIMEOUT)}})}).call(this);(function(){var startsWith=function(str,starts){return str.length>=starts.length&&str.substring(0,starts.length)===starts};var endsWith=function(str,ends){return str.length>=ends.length&&str.substring(str.length-ends.length)===ends};var translateUrl=function(url,newSchemeBase,subPath){if(!newSchemeBase){newSchemeBase="http"}var ddpUrlMatch=url.match(/^ddp(i?)\+sockjs:\/\//);var httpUrlMatch=url.match(/^http(s?):\/\//);var newScheme;if(ddpUrlMatch){var urlAfterDDP=url.substr(ddpUrlMatch[0].length);newScheme=ddpUrlMatch[1]==="i"?newSchemeBase:newSchemeBase+"s";var slashPos=urlAfterDDP.indexOf("/");var host=slashPos===-1?urlAfterDDP:urlAfterDDP.substr(0,slashPos);var rest=slashPos===-1?"":urlAfterDDP.substr(slashPos);host=host.replace(/\*/g,function(){return Math.floor(Random.fraction()*10)});return newScheme+"://"+host+rest}else if(httpUrlMatch){newScheme=!httpUrlMatch[1]?newSchemeBase:newSchemeBase+"s";var urlAfterHttp=url.substr(httpUrlMatch[0].length);url=newScheme+"://"+urlAfterHttp}if(url.indexOf("://")===-1&&!startsWith(url,"/")){url=newSchemeBase+"://"+url}url=Meteor._relativeToSiteRootUrl(url);if(endsWith(url,"/"))return url+subPath;else return url+"/"+subPath};toSockjsUrl=function(url){return translateUrl(url,"http","sockjs")};toWebsocketUrl=function(url){var ret=translateUrl(url,"ws","websocket");return ret};LivedataTest.toSockjsUrl=toSockjsUrl;_.extend(LivedataTest.ClientStream.prototype,{on:function(name,callback){var self=this;if(name!=="message"&&name!=="reset"&&name!=="disconnect")throw new Error("unknown event type: "+name);if(!self.eventCallbacks[name])self.eventCallbacks[name]=[];self.eventCallbacks[name].push(callback)},_initCommon:function(options){var self=this;options=options||{};self.CONNECT_TIMEOUT=options.connectTimeoutMs||1e4;self.eventCallbacks={};self._forcedToDisconnect=false;self.currentStatus={status:"connecting",connected:false,retryCount:0};self.statusListeners=typeof Tracker!=="undefined"&&new Tracker.Dependency;self.statusChanged=function(){if(self.statusListeners)self.statusListeners.changed()};self._retry=new Retry;self.connectionTimer=null},reconnect:function(options){var self=this;options=options||{};if(options.url){self._changeUrl(options.url)}if(options._sockjsOptions){self.options._sockjsOptions=options._sockjsOptions}if(self.currentStatus.connected){if(options._force||options.url){self._lostConnection(new DDP.ForcedReconnectError)}return}if(self.currentStatus.status==="connecting"){self._lostConnection()}self._retry.clear();self.currentStatus.retryCount-=1;self._retryNow()},disconnect:function(options){var self=this;options=options||{};if(self._forcedToDisconnect)return;if(options._permanent){self._forcedToDisconnect=true}self._cleanup();self._retry.clear();self.currentStatus={status:options._permanent?"failed":"offline",connected:false,retryCount:0};if(options._permanent&&options._error)self.currentStatus.reason=options._error;self.statusChanged()},_lostConnection:function(maybeError){var self=this;self._cleanup(maybeError);self._retryLater(maybeError)},_online:function(){if(this.currentStatus.status!="offline")this.reconnect()},_retryLater:function(maybeError){var self=this;var timeout=0;if(self.options.retry||maybeError&&maybeError.errorType==="DDP.ForcedReconnectError"){timeout=self._retry.retryLater(self.currentStatus.retryCount,_.bind(self._retryNow,self));self.currentStatus.status="waiting";self.currentStatus.retryTime=(new Date).getTime()+timeout}else{self.currentStatus.status="failed";delete self.currentStatus.retryTime}self.currentStatus.connected=false;self.statusChanged()},_retryNow:function(){var self=this;if(self._forcedToDisconnect)return;self.currentStatus.retryCount+=1;self.currentStatus.status="connecting";self.currentStatus.connected=false;delete self.currentStatus.retryTime;self.statusChanged();self._launchConnection()},status:function(){var self=this;if(self.statusListeners)self.statusListeners.depend();return self.currentStatus}});DDP.ConnectionError=Meteor.makeErrorType("DDP.ConnectionError",function(message){var self=this;self.message=message});DDP.ForcedReconnectError=Meteor.makeErrorType("DDP.ForcedReconnectError",function(){})}).call(this);(function(){LivedataTest.SUPPORTED_DDP_VERSIONS=DDPCommon.SUPPORTED_DDP_VERSIONS;DDP._CurrentInvocation=new Meteor.EnvironmentVariable}).call(this);(function(){DDP.randomStream=function(name){var scope=DDP._CurrentInvocation.get();return DDPCommon.RandomStream.get(scope,name)}}).call(this);(function(){if(Meteor.isServer){var path=Npm.require("path");var Fiber=Npm.require("fibers");var Future=Npm.require(path.join("fibers","future"))}var Connection=function(url,options){var self=this;options=_.extend({onConnected:function(){},onDDPVersionNegotiationFailure:function(description){Meteor._debug(description)},heartbeatInterval:17500,heartbeatTimeout:15e3,npmFayeOptions:{},reloadWithOutstanding:false,supportedDDPVersions:DDPCommon.SUPPORTED_DDP_VERSIONS,retry:true,respondToPings:true,bufferedWritesInterval:5,bufferedWritesMaxAge:500},options);self.onReconnect=null;if(typeof url==="object"){self._stream=url}else{self._stream=new LivedataTest.ClientStream(url,{retry:options.retry,headers:options.headers,_sockjsOptions:options._sockjsOptions,_dontPrintErrors:options._dontPrintErrors,connectTimeoutMs:options.connectTimeoutMs,npmFayeOptions:options.npmFayeOptions})}self._lastSessionId=null;self._versionSuggestion=null;self._version=null;self._stores={};self._methodHandlers={};self._nextMethodId=1;self._supportedDDPVersions=options.supportedDDPVersions;self._heartbeatInterval=options.heartbeatInterval;self._heartbeatTimeout=options.heartbeatTimeout;self._methodInvokers={};self._outstandingMethodBlocks=[];self._documentsWrittenByStub={};self._serverDocuments={};self._afterUpdateCallbacks=[];self._messagesBufferedUntilQuiescence=[];self._methodsBlockingQuiescence={};self._subsBeingRevived={};self._resetStores=false;self._updatesForUnknownStores={};self._retryMigrate=null;self.__flushBufferedWrites=Meteor.bindEnvironment(self._flushBufferedWrites,"flushing DDP buffered writes",self);self._bufferedWrites={};self._bufferedWritesFlushAt=null;self._bufferedWritesFlushHandle=null;self._bufferedWritesInterval=options.bufferedWritesInterval;self._bufferedWritesMaxAge=options.bufferedWritesMaxAge;self._subscriptions={};self._userId=null;self._userIdDeps=new Tracker.Dependency;if(Meteor.isClient&&Package.reload&&!options.reloadWithOutstanding){Package.reload.Reload._onMigrate(function(retry){if(!self._readyToMigrate()){if(self._retryMigrate)throw new Error("Two migrations in progress?");self._retryMigrate=retry;return false}else{return[true]}})}var onMessage=function(raw_msg){try{var msg=DDPCommon.parseDDP(raw_msg)}catch(e){Meteor._debug("Exception while parsing DDP",e);return}if(self._heartbeat){self._heartbeat.messageReceived()}if(msg===null||!msg.msg){if(!(msg&&msg.server_id))Meteor._debug("discarding invalid livedata message",msg);return}if(msg.msg==="connected"){self._version=self._versionSuggestion;self._livedata_connected(msg);options.onConnected()}else if(msg.msg==="failed"){if(_.contains(self._supportedDDPVersions,msg.version)){self._versionSuggestion=msg.version;self._stream.reconnect({_force:true})}else{var description="DDP version negotiation failed; server requested version "+msg.version;self._stream.disconnect({_permanent:true,_error:description});options.onDDPVersionNegotiationFailure(description)}}else if(msg.msg==="ping"&&options.respondToPings){self._send({msg:"pong",id:msg.id})}else if(msg.msg==="pong"){}else if(_.include(["added","changed","removed","ready","updated"],msg.msg))self._livedata_data(msg);else if(msg.msg==="nosub")self._livedata_nosub(msg);else if(msg.msg==="result")self._livedata_result(msg);else if(msg.msg==="error")self._livedata_error(msg);else Meteor._debug("discarding unknown livedata message type",msg)};var onReset=function(){var msg={msg:"connect"};if(self._lastSessionId)msg.session=self._lastSessionId;msg.version=self._versionSuggestion||self._supportedDDPVersions[0];self._versionSuggestion=msg.version;msg.support=self._supportedDDPVersions;self._send(msg);if(self._outstandingMethodBlocks.length>0){_.each(self._outstandingMethodBlocks[0].methods,function(methodInvoker){if(methodInvoker.sentMessage&&methodInvoker.noRetry){var currentMethodBlock=self._outstandingMethodBlocks[0].methods;var loopMethod;for(var i=0;i<currentMethodBlock.length;i++){loopMethod=currentMethodBlock[i];if(loopMethod.methodId===methodInvoker.methodId){break}}currentMethodBlock.splice(i,1);methodInvoker.receiveResult(new Meteor.Error("invocation-failed","Method invocation might have failed due to dropped connection. "+"Failing because `noRetry` option was passed to Meteor.apply."))}})}if(!_.isEmpty(self._outstandingMethodBlocks)&&_.isEmpty(self._outstandingMethodBlocks[0].methods)){self._outstandingMethodBlocks.shift()}_.each(self._methodInvokers,function(m){m.sentMessage=false});if(self.onReconnect)self._callOnReconnectAndSendAppropriateOutstandingMethods();else self._sendOutstandingMethods();_.each(self._subscriptions,function(sub,id){self._send({msg:"sub",id:id,name:sub.name,params:sub.params})})};var onDisconnect=function(){if(self._heartbeat){self._heartbeat.stop();self._heartbeat=null}};if(Meteor.isServer){self._stream.on("message",Meteor.bindEnvironment(onMessage,"handling DDP message"));self._stream.on("reset",Meteor.bindEnvironment(onReset,"handling DDP reset"));self._stream.on("disconnect",Meteor.bindEnvironment(onDisconnect,"handling DDP disconnect"))}else{self._stream.on("message",onMessage);self._stream.on("reset",onReset);self._stream.on("disconnect",onDisconnect)}};var MethodInvoker=function(options){var self=this;self.methodId=options.methodId;self.sentMessage=false;self._callback=options.callback;self._connection=options.connection;self._message=options.message;self._onResultReceived=options.onResultReceived||function(){};self._wait=options.wait;self.noRetry=options.noRetry;self._methodResult=null;self._dataVisible=false;self._connection._methodInvokers[self.methodId]=self};_.extend(MethodInvoker.prototype,{sendMessage:function(){var self=this;if(self.gotResult())throw new Error("sendingMethod is called on method with result");self._dataVisible=false;self.sentMessage=true;if(self._wait)self._connection._methodsBlockingQuiescence[self.methodId]=true;self._connection._send(self._message)},_maybeInvokeCallback:function(){var self=this;if(self._methodResult&&self._dataVisible){self._callback(self._methodResult[0],self._methodResult[1]);delete self._connection._methodInvokers[self.methodId];self._connection._outstandingMethodFinished()}},receiveResult:function(err,result){var self=this;if(self.gotResult())throw new Error("Methods should only receive results once");self._methodResult=[err,result];self._onResultReceived(err,result);self._maybeInvokeCallback()},dataVisible:function(){var self=this;self._dataVisible=true;self._maybeInvokeCallback()},gotResult:function(){var self=this;return!!self._methodResult}});_.extend(Connection.prototype,{registerStore:function(name,wrappedStore){var self=this;if(name in self._stores)return false;var store={};_.each(["update","beginUpdate","endUpdate","saveOriginals","retrieveOriginals","getDoc","_getCollection"],function(method){store[method]=function(){return wrappedStore[method]?wrappedStore[method].apply(wrappedStore,arguments):undefined}});self._stores[name]=store;var queued=self._updatesForUnknownStores[name];if(queued){store.beginUpdate(queued.length,false);_.each(queued,function(msg){store.update(msg)});store.endUpdate();delete self._updatesForUnknownStores[name]}return true},subscribe:function(name){var self=this;var params=Array.prototype.slice.call(arguments,1);var callbacks={};if(params.length){var lastParam=params[params.length-1];if(_.isFunction(lastParam)){callbacks.onReady=params.pop()}else if(lastParam&&_.any([lastParam.onReady,lastParam.onError,lastParam.onStop],_.isFunction)){callbacks=params.pop()}}var existing=_.find(self._subscriptions,function(sub){return sub.inactive&&sub.name===name&&EJSON.equals(sub.params,params)});var id;if(existing){id=existing.id;existing.inactive=false;if(callbacks.onReady){if(!existing.ready)existing.readyCallback=callbacks.onReady}if(callbacks.onError){existing.errorCallback=callbacks.onError}if(callbacks.onStop){existing.stopCallback=callbacks.onStop}}else{id=Random.id();self._subscriptions[id]={id:id,name:name,params:EJSON.clone(params),inactive:false,ready:false,readyDeps:new Tracker.Dependency,readyCallback:callbacks.onReady,errorCallback:callbacks.onError,stopCallback:callbacks.onStop,connection:self,remove:function(){delete this.connection._subscriptions[this.id];this.ready&&this.readyDeps.changed()},stop:function(){this.connection._send({msg:"unsub",id:id});this.remove();if(callbacks.onStop){callbacks.onStop()}}};self._send({msg:"sub",id:id,name:name,params:params})}var handle={stop:function(){if(!_.has(self._subscriptions,id))return;self._subscriptions[id].stop()},ready:function(){if(!_.has(self._subscriptions,id))return false;var record=self._subscriptions[id];record.readyDeps.depend();return record.ready},subscriptionId:id};if(Tracker.active){Tracker.onInvalidate(function(c){if(_.has(self._subscriptions,id))self._subscriptions[id].inactive=true;Tracker.afterFlush(function(){if(_.has(self._subscriptions,id)&&self._subscriptions[id].inactive)handle.stop()})})}return handle},_subscribeAndWait:function(name,args,options){var self=this;var f=new Future;var ready=false;var handle;args=args||[];args.push({onReady:function(){ready=true;f["return"]()},onError:function(e){if(!ready)f["throw"](e);else options&&options.onLateError&&options.onLateError(e)}});handle=self.subscribe.apply(self,[name].concat(args));f.wait();return handle},methods:function(methods){var self=this;_.each(methods,function(func,name){if(typeof func!=="function")throw new Error("Method '"+name+"' must be a function");if(self._methodHandlers[name])throw new Error("A method named '"+name+"' is already defined");self._methodHandlers[name]=func})},call:function(name){var args=Array.prototype.slice.call(arguments,1);if(args.length&&typeof args[args.length-1]==="function")var callback=args.pop();return this.apply(name,args,callback)},apply:function(name,args,options,callback){var self=this;if(!callback&&typeof options==="function"){callback=options;options={}}options=options||{};if(callback){callback=Meteor.bindEnvironment(callback,"delivering result of invoking '"+name+"'")}args=EJSON.clone(args);var methodId=function(){var id;return function(){if(id===undefined)id=""+self._nextMethodId++;return id}}();var enclosing=DDP._CurrentInvocation.get();var alreadyInSimulation=enclosing&&enclosing.isSimulation;var randomSeed=null;var randomSeedGenerator=function(){if(randomSeed===null){randomSeed=DDPCommon.makeRpcSeed(enclosing,name)}return randomSeed};var stub=self._methodHandlers[name];if(stub){var setUserId=function(userId){self.setUserId(userId)};var invocation=new DDPCommon.MethodInvocation({isSimulation:true,userId:self.userId(),setUserId:setUserId,randomSeed:function(){return randomSeedGenerator()}});if(!alreadyInSimulation)self._saveOriginals();try{var stubReturnValue=DDP._CurrentInvocation.withValue(invocation,function(){if(Meteor.isServer){return Meteor._noYieldsAllowed(function(){return stub.apply(invocation,EJSON.clone(args))})}else{return stub.apply(invocation,EJSON.clone(args))}})}catch(e){var exception=e}if(!alreadyInSimulation)self._retrieveAndStoreOriginals(methodId())}if(alreadyInSimulation){if(callback){callback(exception,stubReturnValue);return undefined}if(exception)throw exception;return stubReturnValue}if(exception){if(options.throwStubExceptions){throw exception}else if(!exception.expected){Meteor._debug("Exception while simulating the effect of invoking '"+name+"'",exception,exception.stack)}}if(!callback){if(Meteor.isClient){callback=function(err){err&&Meteor._debug("Error invoking Method '"+name+"':",err.message)}}else{var future=new Future;callback=future.resolver()}}var message={msg:"method",method:name,params:args,id:methodId()};if(randomSeed!==null){message.randomSeed=randomSeed}var methodInvoker=new MethodInvoker({methodId:methodId(),callback:callback,connection:self,onResultReceived:options.onResultReceived,wait:!!options.wait,message:message,noRetry:!!options.noRetry});if(options.wait){self._outstandingMethodBlocks.push({wait:true,methods:[methodInvoker]})}else{if(_.isEmpty(self._outstandingMethodBlocks)||_.last(self._outstandingMethodBlocks).wait)self._outstandingMethodBlocks.push({wait:false,methods:[]});_.last(self._outstandingMethodBlocks).methods.push(methodInvoker)}if(self._outstandingMethodBlocks.length===1)methodInvoker.sendMessage();if(future){return future.wait()}return options.returnStubValue?stubReturnValue:undefined},_saveOriginals:function(){var self=this;_.each(self._stores,function(s){s.saveOriginals()})},_retrieveAndStoreOriginals:function(methodId){var self=this;if(self._documentsWrittenByStub[methodId])throw new Error("Duplicate methodId in _retrieveAndStoreOriginals");var docsWritten=[];_.each(self._stores,function(s,collection){var originals=s.retrieveOriginals();if(!originals)return;originals.forEach(function(doc,id){docsWritten.push({collection:collection,id:id});if(!_.has(self._serverDocuments,collection))self._serverDocuments[collection]=new MongoIDMap;var serverDoc=self._serverDocuments[collection].setDefault(id,{});if(serverDoc.writtenByStubs){serverDoc.writtenByStubs[methodId]=true}else{serverDoc.document=doc;serverDoc.flushCallbacks=[];serverDoc.writtenByStubs={};serverDoc.writtenByStubs[methodId]=true}})});if(!_.isEmpty(docsWritten)){self._documentsWrittenByStub[methodId]=docsWritten}},_unsubscribeAll:function(){var self=this;_.each(_.clone(self._subscriptions),function(sub,id){if(sub.name!=="meteor_autoupdate_clientVersions"){self._subscriptions[id].stop()}})},_send:function(obj){var self=this;self._stream.send(DDPCommon.stringifyDDP(obj))},_lostConnection:function(error){var self=this;self._stream._lostConnection(error)},status:function(){var self=this;return self._stream.status.apply(self._stream,arguments)},reconnect:function(){var self=this;return self._stream.reconnect.apply(self._stream,arguments)},disconnect:function(){var self=this;return self._stream.disconnect.apply(self._stream,arguments)},close:function(){var self=this;return self._stream.disconnect({_permanent:true})},userId:function(){var self=this;if(self._userIdDeps)self._userIdDeps.depend();return self._userId},setUserId:function(userId){var self=this;if(self._userId===userId)return;self._userId=userId;if(self._userIdDeps)self._userIdDeps.changed()},_waitingForQuiescence:function(){var self=this;return!_.isEmpty(self._subsBeingRevived)||!_.isEmpty(self._methodsBlockingQuiescence)},_anyMethodsAreOutstanding:function(){var self=this;return _.any(_.pluck(self._methodInvokers,"sentMessage"))},_livedata_connected:function(msg){var self=this;if(self._version!=="pre1"&&self._heartbeatInterval!==0){self._heartbeat=new DDPCommon.Heartbeat({heartbeatInterval:self._heartbeatInterval,heartbeatTimeout:self._heartbeatTimeout,onTimeout:function(){self._lostConnection(new DDP.ConnectionError("DDP heartbeat timed out"))},sendPing:function(){self._send({msg:"ping"})}});self._heartbeat.start()}if(self._lastSessionId)self._resetStores=true;if(typeof msg.session==="string"){var reconnectedToPreviousSession=self._lastSessionId===msg.session;self._lastSessionId=msg.session}if(reconnectedToPreviousSession){return}self._updatesForUnknownStores={};if(self._resetStores){self._documentsWrittenByStub={};self._serverDocuments={}}self._afterUpdateCallbacks=[];self._subsBeingRevived={};_.each(self._subscriptions,function(sub,id){if(sub.ready)self._subsBeingRevived[id]=true});self._methodsBlockingQuiescence={};if(self._resetStores){_.each(self._methodInvokers,function(invoker){if(invoker.gotResult()){self._afterUpdateCallbacks.push(_.bind(invoker.dataVisible,invoker))}else if(invoker.sentMessage){self._methodsBlockingQuiescence[invoker.methodId]=true}})}self._messagesBufferedUntilQuiescence=[];if(!self._waitingForQuiescence()){if(self._resetStores){_.each(self._stores,function(s){s.beginUpdate(0,true);s.endUpdate()});self._resetStores=false}self._runAfterUpdateCallbacks()}},_processOneDataMessage:function(msg,updates){var self=this;self["_process_"+msg.msg](msg,updates)},_livedata_data:function(msg){var self=this;if(self._waitingForQuiescence()){self._messagesBufferedUntilQuiescence.push(msg);if(msg.msg==="nosub")delete self._subsBeingRevived[msg.id];_.each(msg.subs||[],function(subId){delete self._subsBeingRevived[subId]});_.each(msg.methods||[],function(methodId){delete self._methodsBlockingQuiescence[methodId]});if(self._waitingForQuiescence())return;_.each(self._messagesBufferedUntilQuiescence,function(bufferedMsg){self._processOneDataMessage(bufferedMsg,self._bufferedWrites)});self._messagesBufferedUntilQuiescence=[]}else{self._processOneDataMessage(msg,self._bufferedWrites)}var standardWrite=_.include(["added","changed","removed"],msg.msg);if(self._bufferedWritesInterval===0||!standardWrite){self._flushBufferedWrites();return}if(self._bufferedWritesFlushAt===null){self._bufferedWritesFlushAt=(new Date).valueOf()+self._bufferedWritesMaxAge}else if(self._bufferedWritesFlushAt<(new Date).valueOf()){self._flushBufferedWrites();return}if(self._bufferedWritesFlushHandle){clearTimeout(self._bufferedWritesFlushHandle)}self._bufferedWritesFlushHandle=setTimeout(self.__flushBufferedWrites,self._bufferedWritesInterval)},_flushBufferedWrites:function(){var self=this;if(self._bufferedWritesFlushHandle){clearTimeout(self._bufferedWritesFlushHandle);self._bufferedWritesFlushHandle=null}self._bufferedWritesFlushAt=null;var writes=self._bufferedWrites;self._bufferedWrites={};self._performWrites(writes)},_performWrites:function(updates){var self=this;if(self._resetStores||!_.isEmpty(updates)){_.each(self._stores,function(s,storeName){s.beginUpdate(_.has(updates,storeName)?updates[storeName].length:0,self._resetStores)});self._resetStores=false;_.each(updates,function(updateMessages,storeName){var store=self._stores[storeName];if(store){_.each(updateMessages,function(updateMessage){store.update(updateMessage)})}else{if(!_.has(self._updatesForUnknownStores,storeName))self._updatesForUnknownStores[storeName]=[];Array.prototype.push.apply(self._updatesForUnknownStores[storeName],updateMessages)}});_.each(self._stores,function(s){s.endUpdate()})}self._runAfterUpdateCallbacks()},_runAfterUpdateCallbacks:function(){var self=this;var callbacks=self._afterUpdateCallbacks;self._afterUpdateCallbacks=[];_.each(callbacks,function(c){c()})},_pushUpdate:function(updates,collection,msg){var self=this;if(!_.has(updates,collection)){updates[collection]=[]}updates[collection].push(msg)},_getServerDoc:function(collection,id){var self=this;if(!_.has(self._serverDocuments,collection))return null;var serverDocsForCollection=self._serverDocuments[collection];return serverDocsForCollection.get(id)||null},_process_added:function(msg,updates){var self=this;var id=MongoID.idParse(msg.id);var serverDoc=self._getServerDoc(msg.collection,id);if(serverDoc){var isExisting=serverDoc.document!==undefined;serverDoc.document=msg.fields||{};serverDoc.document._id=id;if(self._resetStores){var currentDoc=self._stores[msg.collection].getDoc(msg.id);if(currentDoc!==undefined)msg.fields=currentDoc;self._pushUpdate(updates,msg.collection,msg)}else if(isExisting){throw new Error("Server sent add for existing id: "+msg.id)}}else{self._pushUpdate(updates,msg.collection,msg)}},_process_changed:function(msg,updates){var self=this;var serverDoc=self._getServerDoc(msg.collection,MongoID.idParse(msg.id));if(serverDoc){if(serverDoc.document===undefined)throw new Error("Server sent changed for nonexisting id: "+msg.id);DiffSequence.applyChanges(serverDoc.document,msg.fields)}else{self._pushUpdate(updates,msg.collection,msg)}},_process_removed:function(msg,updates){var self=this;var serverDoc=self._getServerDoc(msg.collection,MongoID.idParse(msg.id));if(serverDoc){if(serverDoc.document===undefined)throw new Error("Server sent removed for nonexisting id:"+msg.id);serverDoc.document=undefined}else{self._pushUpdate(updates,msg.collection,{msg:"removed",collection:msg.collection,id:msg.id})}},_process_updated:function(msg,updates){var self=this;_.each(msg.methods,function(methodId){_.each(self._documentsWrittenByStub[methodId],function(written){var serverDoc=self._getServerDoc(written.collection,written.id);if(!serverDoc)throw new Error("Lost serverDoc for "+JSON.stringify(written));if(!serverDoc.writtenByStubs[methodId])throw new Error("Doc "+JSON.stringify(written)+" not written by  method "+methodId);delete serverDoc.writtenByStubs[methodId];if(_.isEmpty(serverDoc.writtenByStubs)){self._pushUpdate(updates,written.collection,{msg:"replace",id:MongoID.idStringify(written.id),replace:serverDoc.document});_.each(serverDoc.flushCallbacks,function(c){c()});self._serverDocuments[written.collection].remove(written.id)}});delete self._documentsWrittenByStub[methodId];var callbackInvoker=self._methodInvokers[methodId];if(!callbackInvoker)throw new Error("No callback invoker for method "+methodId);self._runWhenAllServerDocsAreFlushed(_.bind(callbackInvoker.dataVisible,callbackInvoker))})},_process_ready:function(msg,updates){var self=this;_.each(msg.subs,function(subId){self._runWhenAllServerDocsAreFlushed(function(){var subRecord=self._subscriptions[subId];if(!subRecord)return;if(subRecord.ready)return;subRecord.ready=true;subRecord.readyCallback&&subRecord.readyCallback();subRecord.readyDeps.changed()})})},_runWhenAllServerDocsAreFlushed:function(f){var self=this;var runFAfterUpdates=function(){self._afterUpdateCallbacks.push(f)};var unflushedServerDocCount=0;var onServerDocFlush=function(){--unflushedServerDocCount;if(unflushedServerDocCount===0){runFAfterUpdates()}};_.each(self._serverDocuments,function(collectionDocs){collectionDocs.forEach(function(serverDoc){var writtenByStubForAMethodWithSentMessage=_.any(serverDoc.writtenByStubs,function(dummy,methodId){var invoker=self._methodInvokers[methodId];return invoker&&invoker.sentMessage});if(writtenByStubForAMethodWithSentMessage){++unflushedServerDocCount;serverDoc.flushCallbacks.push(onServerDocFlush)}})});if(unflushedServerDocCount===0){runFAfterUpdates()}},_livedata_nosub:function(msg){var self=this;self._livedata_data(msg);if(!_.has(self._subscriptions,msg.id))return;var errorCallback=self._subscriptions[msg.id].errorCallback;var stopCallback=self._subscriptions[msg.id].stopCallback;self._subscriptions[msg.id].remove();var meteorErrorFromMsg=function(msgArg){return msgArg&&msgArg.error&&new Meteor.Error(msgArg.error.error,msgArg.error.reason,msgArg.error.details)};if(errorCallback&&msg.error){errorCallback(meteorErrorFromMsg(msg))}if(stopCallback){stopCallback(meteorErrorFromMsg(msg))}},_process_nosub:function(){},_livedata_result:function(msg){var self=this;if(!_.isEmpty(self._bufferedWrites)){self._flushBufferedWrites()}if(_.isEmpty(self._outstandingMethodBlocks)){Meteor._debug("Received method result but no methods outstanding");return}var currentMethodBlock=self._outstandingMethodBlocks[0].methods;var m;for(var i=0;i<currentMethodBlock.length;i++){m=currentMethodBlock[i];if(m.methodId===msg.id)break}if(!m){Meteor._debug("Can't match method response to original method call",msg);return}currentMethodBlock.splice(i,1);if(_.has(msg,"error")){m.receiveResult(new Meteor.Error(msg.error.error,msg.error.reason,msg.error.details))}else{m.receiveResult(undefined,msg.result)}},_outstandingMethodFinished:function(){var self=this;if(self._anyMethodsAreOutstanding())return;if(!_.isEmpty(self._outstandingMethodBlocks)){var firstBlock=self._outstandingMethodBlocks.shift();if(!_.isEmpty(firstBlock.methods))throw new Error("No methods outstanding but nonempty block: "+JSON.stringify(firstBlock));if(!_.isEmpty(self._outstandingMethodBlocks))self._sendOutstandingMethods()}self._maybeMigrate()},_sendOutstandingMethods:function(){var self=this;if(_.isEmpty(self._outstandingMethodBlocks))return;_.each(self._outstandingMethodBlocks[0].methods,function(m){m.sendMessage()})},_livedata_error:function(msg){Meteor._debug("Received error from server: ",msg.reason);if(msg.offendingMessage)Meteor._debug("For: ",msg.offendingMessage)},_callOnReconnectAndSendAppropriateOutstandingMethods:function(){var self=this;var oldOutstandingMethodBlocks=self._outstandingMethodBlocks;self._outstandingMethodBlocks=[];self.onReconnect();if(_.isEmpty(oldOutstandingMethodBlocks))return;if(_.isEmpty(self._outstandingMethodBlocks)){self._outstandingMethodBlocks=oldOutstandingMethodBlocks;self._sendOutstandingMethods();return}if(!_.last(self._outstandingMethodBlocks).wait&&!oldOutstandingMethodBlocks[0].wait){_.each(oldOutstandingMethodBlocks[0].methods,function(m){_.last(self._outstandingMethodBlocks).methods.push(m);if(self._outstandingMethodBlocks.length===1)m.sendMessage()});oldOutstandingMethodBlocks.shift()}_.each(oldOutstandingMethodBlocks,function(block){self._outstandingMethodBlocks.push(block)})},_readyToMigrate:function(){var self=this;return _.isEmpty(self._methodInvokers)},_maybeMigrate:function(){var self=this;if(self._retryMigrate&&self._readyToMigrate()){self._retryMigrate();self._retryMigrate=null}}});LivedataTest.Connection=Connection;DDP.connect=function(url,options){var ret=new Connection(url,options);allConnections.push(ret);return ret};allConnections=[];DDP._allSubscriptionsReady=function(){return _.all(allConnections,function(conn){return _.all(conn._subscriptions,function(sub){return sub.ready})})}}).call(this);(function(){Meteor.refresh=function(notification){};if(Meteor.isClient){var ddpUrl="/";if(typeof __meteor_runtime_config__!=="undefined"){if(__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL)ddpUrl=__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL}var retry=new Retry;var onDDPVersionNegotiationFailure=function(description){Meteor._debug(description);if(Package.reload){var migrationData=Package.reload.Reload._migrationData("livedata")||{};var failures=migrationData.DDPVersionNegotiationFailures||0;++failures;Package.reload.Reload._onMigrate("livedata",function(){return[true,{DDPVersionNegotiationFailures:failures}]});retry.retryLater(failures,function(){Package.reload.Reload._reload()})}};Meteor.connection=DDP.connect(ddpUrl,{onDDPVersionNegotiationFailure:onDDPVersionNegotiationFailure});_.each(["subscribe","methods","call","apply","status","reconnect","disconnect"],function(name){Meteor[name]=_.bind(Meteor.connection[name],Meteor.connection)})}else{Meteor.connection=null;
	}Meteor.default_connection=Meteor.connection;Meteor.connect=DDP.connect}).call(this);if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["ddp-client"]={},{DDP:DDP,LivedataTest:LivedataTest})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var DDP=Package["ddp-client"].DDP;if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.ddp={},{DDP:DDP})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var _=Package.underscore._;var LocalCollection=Package.minimongo.LocalCollection;var Minimongo=Package.minimongo.Minimongo;var check=Package.check.check;var Match=Package.check.Match;var EJSON=Package.ejson.EJSON;var DDP=Package["ddp-client"].DDP;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var Symbol=Package["ecmascript-runtime"].Symbol;var Map=Package["ecmascript-runtime"].Map;var Set=Package["ecmascript-runtime"].Set;var meteorBabelHelpers=Package["babel-runtime"].meteorBabelHelpers;var Promise=Package.promise.Promise;var AllowDeny;var require=meteorInstall({node_modules:{meteor:{"allow-deny":{"allow-deny.js":function(){AllowDeny={CollectionPrototype:{}};var CollectionPrototype=AllowDeny.CollectionPrototype;CollectionPrototype.allow=function(options){addValidator(this,"allow",options)};CollectionPrototype.deny=function(options){addValidator(this,"deny",options)};CollectionPrototype._defineMutationMethods=function(options){var self=this;options=options||{};self._restricted=false;self._insecure=undefined;self._validators={insert:{allow:[],deny:[]},update:{allow:[],deny:[]},remove:{allow:[],deny:[]},upsert:{allow:[],deny:[]},fetch:[],fetchAllFields:false};if(!self._name)return;self._prefix="/"+self._name+"/";if(self._connection&&(self._connection===Meteor.server||Meteor.isClient)){(function(){var m={};_.each(["insert","update","remove"],function(method){var methodName=self._prefix+method;if(options.useExisting){var handlerPropName=Meteor.isClient?"_methodHandlers":"method_handlers";if(self._connection[handlerPropName]&&typeof self._connection[handlerPropName][methodName]==="function")return}m[methodName]=function(){check(arguments,[Match.Any]);var args=_.toArray(arguments);try{var generatedId=null;if(method==="insert"&&!_.has(args[0],"_id")){generatedId=self._makeNewID()}if(this.isSimulation){if(generatedId!==null)args[0]._id=generatedId;return self._collection[method].apply(self._collection,args)}if(method!=="insert")throwIfSelectorIsNotId(args[0],method);if(self._restricted){if(self._validators[method].allow.length===0){throw new Meteor.Error(403,"Access denied. No allow validators set on restricted "+"collection for method '"+method+"'.")}var validatedMethodName="_validated"+method.charAt(0).toUpperCase()+method.slice(1);args.unshift(this.userId);method==="insert"&&args.push(generatedId);return self[validatedMethodName].apply(self,args)}else if(self._isInsecure()){if(generatedId!==null)args[0]._id=generatedId;return self._collection[method].apply(self._collection,args)}else{throw new Meteor.Error(403,"Access denied")}}catch(e){if(e.name==="MongoError"||e.name==="MinimongoError"){throw new Meteor.Error(409,e.toString())}else{throw e}}}});self._connection.methods(m)})()}};CollectionPrototype._updateFetch=function(fields){var self=this;if(!self._validators.fetchAllFields){if(fields){self._validators.fetch=_.union(self._validators.fetch,fields)}else{self._validators.fetchAllFields=true;self._validators.fetch=null}}};CollectionPrototype._isInsecure=function(){var self=this;if(self._insecure===undefined)return!!Package.insecure;return self._insecure};CollectionPrototype._validatedInsert=function(userId,doc,generatedId){var self=this;if(_.any(self._validators.insert.deny,function(validator){return validator(userId,docToValidate(validator,doc,generatedId))})){throw new Meteor.Error(403,"Access denied")}if(_.all(self._validators.insert.allow,function(validator){return!validator(userId,docToValidate(validator,doc,generatedId))})){throw new Meteor.Error(403,"Access denied")}if(generatedId!==null)doc._id=generatedId;self._collection.insert.call(self._collection,doc)};CollectionPrototype._validatedUpdate=function(userId,selector,mutator,options){var self=this;check(mutator,Object);options=_.clone(options)||{};if(!LocalCollection._selectorIsIdPerhapsAsObject(selector))throw new Error("validated update should be of a single ID");if(options.upsert)throw new Meteor.Error(403,"Access denied. Upserts not "+"allowed in a restricted collection.");var noReplaceError="Access denied. In a restricted collection you can only"+" update documents, not replace them. Use a Mongo update operator, such "+"as '$set'.";var fields=[];if(_.isEmpty(mutator)){throw new Meteor.Error(403,noReplaceError)}_.each(mutator,function(params,op){if(op.charAt(0)!=="$"){throw new Meteor.Error(403,noReplaceError)}else if(!_.has(ALLOWED_UPDATE_OPERATIONS,op)){throw new Meteor.Error(403,"Access denied. Operator "+op+" not allowed in a restricted collection.")}else{_.each(_.keys(params),function(field){if(field.indexOf(".")!==-1)field=field.substring(0,field.indexOf("."));if(!_.contains(fields,field))fields.push(field)})}});var findOptions={transform:null};if(!self._validators.fetchAllFields){findOptions.fields={};_.each(self._validators.fetch,function(fieldName){findOptions.fields[fieldName]=1})}var doc=self._collection.findOne(selector,findOptions);if(!doc)return 0;if(_.any(self._validators.update.deny,function(validator){var factoriedDoc=transformDoc(validator,doc);return validator(userId,factoriedDoc,fields,mutator)})){throw new Meteor.Error(403,"Access denied")}if(_.all(self._validators.update.allow,function(validator){var factoriedDoc=transformDoc(validator,doc);return!validator(userId,factoriedDoc,fields,mutator)})){throw new Meteor.Error(403,"Access denied")}options._forbidReplace=true;return self._collection.update.call(self._collection,selector,mutator,options)};var ALLOWED_UPDATE_OPERATIONS={$inc:1,$set:1,$unset:1,$addToSet:1,$pop:1,$pullAll:1,$pull:1,$pushAll:1,$push:1,$bit:1};CollectionPrototype._validatedRemove=function(userId,selector){var self=this;var findOptions={transform:null};if(!self._validators.fetchAllFields){findOptions.fields={};_.each(self._validators.fetch,function(fieldName){findOptions.fields[fieldName]=1})}var doc=self._collection.findOne(selector,findOptions);if(!doc)return 0;if(_.any(self._validators.remove.deny,function(validator){return validator(userId,transformDoc(validator,doc))})){throw new Meteor.Error(403,"Access denied")}if(_.all(self._validators.remove.allow,function(validator){return!validator(userId,transformDoc(validator,doc))})){throw new Meteor.Error(403,"Access denied")}return self._collection.remove.call(self._collection,selector)};CollectionPrototype._callMutatorMethod=function(){function _callMutatorMethod(name,args,callback){if(Meteor.isClient&&!callback&&!alreadyInSimulation()){callback=function(){function callback(err){if(err)Meteor._debug(name+" failed: "+(err.reason||err.stack))}return callback}()}var firstArgIsSelector=name==="update"||name==="remove";if(firstArgIsSelector&&!alreadyInSimulation()){throwIfSelectorIsNotId(args[0],name)}var mutatorMethodName=this._prefix+name;return this._connection.apply(mutatorMethodName,args,{returnStubValue:true},callback)}return _callMutatorMethod}();function transformDoc(validator,doc){if(validator.transform)return validator.transform(doc);return doc}function docToValidate(validator,doc,generatedId){var ret=doc;if(validator.transform){ret=EJSON.clone(doc);if(generatedId!==null){ret._id=generatedId}ret=validator.transform(ret)}return ret}function addValidator(collection,allowOrDeny,options){var VALID_KEYS=["insert","update","remove","fetch","transform"];_.each(_.keys(options),function(key){if(!_.contains(VALID_KEYS,key))throw new Error(allowOrDeny+": Invalid key: "+key)});collection._restricted=true;_.each(["insert","update","remove"],function(name){if(options.hasOwnProperty(name)){if(!(options[name]instanceof Function)){throw new Error(allowOrDeny+": Value for `"+name+"` must be a function")}if(options.transform===undefined){options[name].transform=collection._transform}else{options[name].transform=LocalCollection.wrapTransform(options.transform)}collection._validators[name][allowOrDeny].push(options[name])}});if(options.update||options.remove||options.fetch){if(options.fetch&&!(options.fetch instanceof Array)){throw new Error(allowOrDeny+": Value for `fetch` must be an array")}collection._updateFetch(options.fetch)}}function throwIfSelectorIsNotId(selector,methodName){if(!LocalCollection._selectorIsIdPerhapsAsObject(selector)){throw new Meteor.Error(403,"Not permitted. Untrusted code may only "+methodName+" documents by ID.")}}function alreadyInSimulation(){var enclosing=DDP._CurrentInvocation.get();return enclosing&&enclosing.isSimulation}}}}}},{extensions:[".js",".json"]});require("./node_modules/meteor/allow-deny/allow-deny.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package["allow-deny"]={},{AllowDeny:AllowDeny})})();(function(){var Meteor=Package.meteor.Meteor;var global=Package.meteor.global;var meteorEnv=Package.meteor.meteorEnv;var AllowDeny=Package["allow-deny"].AllowDeny;var Random=Package.random.Random;var EJSON=Package.ejson.EJSON;var _=Package.underscore._;var LocalCollection=Package.minimongo.LocalCollection;var Minimongo=Package.minimongo.Minimongo;var DDP=Package["ddp-client"].DDP;var Tracker=Package.tracker.Tracker;var Deps=Package.tracker.Deps;var DiffSequence=Package["diff-sequence"].DiffSequence;var MongoID=Package["mongo-id"].MongoID;var check=Package.check.check;var Match=Package.check.Match;var meteorInstall=Package.modules.meteorInstall;var Buffer=Package.modules.Buffer;var process=Package.modules.process;var Symbol=Package["ecmascript-runtime"].Symbol;var Map=Package["ecmascript-runtime"].Map;var Set=Package["ecmascript-runtime"].Set;var meteorBabelHelpers=Package["babel-runtime"].meteorBabelHelpers;var Promise=Package.promise.Promise;var LocalCollectionDriver,Mongo;var require=meteorInstall({node_modules:{meteor:{mongo:{"local_collection_driver.js":function(){LocalCollectionDriver=function LocalCollectionDriver(){var self=this;self.noConnCollections={}};var ensureCollection=function ensureCollection(name,collections){if(!(name in collections))collections[name]=new LocalCollection(name);return collections[name]};_.extend(LocalCollectionDriver.prototype,{open:function(){function open(name,conn){var self=this;if(!name)return new LocalCollection;if(!conn){return ensureCollection(name,self.noConnCollections)}if(!conn._mongo_livedata_collections)conn._mongo_livedata_collections={};return ensureCollection(name,conn._mongo_livedata_collections)}return open}()});LocalCollectionDriver=new LocalCollectionDriver},"collection.js":function(require,exports,module){Mongo={};Mongo.Collection=function(name,options){var self=this;if(!(self instanceof Mongo.Collection))throw new Error('use "new" to construct a Mongo.Collection');if(!name&&name!==null){Meteor._debug("Warning: creating anonymous collection. It will not be "+"saved or synchronized over the network. (Pass null for "+"the collection name to turn off this warning.)");name=null}if(name!==null&&typeof name!=="string"){throw new Error("First argument to new Mongo.Collection must be a string or null")}if(options&&options.methods){options={connection:options}}if(options&&options.manager&&!options.connection){options.connection=options.manager}options=_.extend({connection:undefined,idGeneration:"STRING",transform:null,_driver:undefined,_preventAutopublish:false},options);switch(options.idGeneration){case"MONGO":self._makeNewID=function(){var src=name?DDP.randomStream("/collection/"+name):Random.insecure;return new Mongo.ObjectID(src.hexString(24))};break;case"STRING":default:self._makeNewID=function(){var src=name?DDP.randomStream("/collection/"+name):Random.insecure;return src.id()};break}self._transform=LocalCollection.wrapTransform(options.transform);if(!name||options.connection===null)self._connection=null;else if(options.connection)self._connection=options.connection;else if(Meteor.isClient)self._connection=Meteor.connection;else self._connection=Meteor.server;if(!options._driver){if(name&&self._connection===Meteor.server&&typeof MongoInternals!=="undefined"&&MongoInternals.defaultRemoteCollectionDriver){options._driver=MongoInternals.defaultRemoteCollectionDriver()}else{options._driver=LocalCollectionDriver}}self._collection=options._driver.open(name,self._connection);self._name=name;self._driver=options._driver;if(self._connection&&self._connection.registerStore){var ok=self._connection.registerStore(name,{beginUpdate:function(){function beginUpdate(batchSize,reset){if(batchSize>1||reset)self._collection.pauseObservers();if(reset)self._collection.remove({})}return beginUpdate}(),update:function(){function update(msg){var mongoId=MongoID.idParse(msg.id);var doc=self._collection.findOne(mongoId);if(msg.msg==="replace"){var replace=msg.replace;if(!replace){if(doc)self._collection.remove(mongoId)}else if(!doc){self._collection.insert(replace)}else{self._collection.update(mongoId,replace)}return}else if(msg.msg==="added"){if(doc){throw new Error("Expected not to find a document already present for an add")}self._collection.insert(_.extend({_id:mongoId},msg.fields))}else if(msg.msg==="removed"){if(!doc)throw new Error("Expected to find a document already present for removed");self._collection.remove(mongoId)}else if(msg.msg==="changed"){if(!doc)throw new Error("Expected to find a document to change");if(!_.isEmpty(msg.fields)){var modifier={};_.each(msg.fields,function(value,key){if(value===undefined){if(!modifier.$unset)modifier.$unset={};modifier.$unset[key]=1}else{if(!modifier.$set)modifier.$set={};modifier.$set[key]=value}});self._collection.update(mongoId,modifier)}}else{throw new Error("I don't know how to deal with this message")}}return update}(),endUpdate:function(){function endUpdate(){self._collection.resumeObservers()}return endUpdate}(),saveOriginals:function(){function saveOriginals(){self._collection.saveOriginals()}return saveOriginals}(),retrieveOriginals:function(){function retrieveOriginals(){return self._collection.retrieveOriginals()}return retrieveOriginals}(),getDoc:function(){function getDoc(id){return self.findOne(id)}return getDoc}(),_getCollection:function(){function _getCollection(){return self}return _getCollection}()});if(!ok){var message='There is already a collection named "'+name+'"';if(options._suppressSameNameError===true){console.warn?console.warn(message):console.log(message)}else{throw new Error(message)}}}if(options.defineMutationMethods!==false){try{self._defineMutationMethods({useExisting:options._suppressSameNameError===true})}catch(error){if(error.message==="A method named '/"+name+"/insert' is already defined")throw new Error('There is already a collection named "'+name+'"');throw error}}if(Package.autopublish&&!options._preventAutopublish&&self._connection&&self._connection.publish){self._connection.publish(null,function(){return self.find()},{is_auto:true})}};_.extend(Mongo.Collection.prototype,{_getFindSelector:function(){function _getFindSelector(args){if(args.length==0)return{};else return args[0]}return _getFindSelector}(),_getFindOptions:function(){function _getFindOptions(args){var self=this;if(args.length<2){return{transform:self._transform}}else{check(args[1],Match.Optional(Match.ObjectIncluding({fields:Match.Optional(Match.OneOf(Object,undefined)),sort:Match.Optional(Match.OneOf(Object,Array,Function,undefined)),limit:Match.Optional(Match.OneOf(Number,undefined)),skip:Match.Optional(Match.OneOf(Number,undefined))})));return _.extend({transform:self._transform},args[1])}}return _getFindOptions}(),find:function(){function find(){var self=this;var argArray=_.toArray(arguments);return self._collection.find(self._getFindSelector(argArray),self._getFindOptions(argArray))}return find}(),findOne:function(){function findOne(){var self=this;var argArray=_.toArray(arguments);return self._collection.findOne(self._getFindSelector(argArray),self._getFindOptions(argArray))}return findOne}()});Mongo.Collection._publishCursor=function(cursor,sub,collection){var observeHandle=cursor.observeChanges({added:function(){function added(id,fields){sub.added(collection,id,fields)}return added}(),changed:function(){function changed(id,fields){sub.changed(collection,id,fields)}return changed}(),removed:function(){function removed(id){sub.removed(collection,id)}return removed}()});sub.onStop(function(){observeHandle.stop()});return observeHandle};Mongo.Collection._rewriteSelector=function(selector){if(LocalCollection._selectorIsId(selector))selector={_id:selector};if(_.isArray(selector)){throw new Error("Mongo selector can't be an array.")}if(!selector||"_id"in selector&&!selector._id)return{_id:Random.id()};var ret={};_.each(selector,function(value,key){if(value instanceof RegExp){ret[key]=convertRegexpToMongoSelector(value)}else if(value&&value.$regex instanceof RegExp){ret[key]=convertRegexpToMongoSelector(value.$regex);if(value.$options!==undefined)ret[key].$options=value.$options}else if(_.contains(["$or","$and","$nor"],key)){ret[key]=_.map(value,function(v){return Mongo.Collection._rewriteSelector(v)})}else{ret[key]=value}});return ret};function convertRegexpToMongoSelector(regexp){check(regexp,RegExp);var selector={$regex:regexp.source};var regexOptions="";if(regexp.ignoreCase)regexOptions+="i";if(regexp.multiline)regexOptions+="m";if(regexOptions)selector.$options=regexOptions;return selector}Mongo.Collection.prototype.insert=function(){function insert(doc,callback){if(!doc){throw new Error("insert requires an argument")}doc=_.extend({},doc);if("_id"in doc){if(!doc._id||!(typeof doc._id==="string"||doc._id instanceof Mongo.ObjectID)){throw new Error("Meteor requires document _id fields to be non-empty strings or ObjectIDs")}}else{var generateId=true;if(this._isRemoteCollection()){var enclosing=DDP._CurrentInvocation.get();if(!enclosing){generateId=false}}if(generateId){doc._id=this._makeNewID()}}var chooseReturnValueFromCollectionResult=function(){function chooseReturnValueFromCollectionResult(result){if(doc._id){return doc._id}doc._id=result;return result}return chooseReturnValueFromCollectionResult}();var wrappedCallback=wrapCallback(callback,chooseReturnValueFromCollectionResult);if(this._isRemoteCollection()){var result=this._callMutatorMethod("insert",[doc],wrappedCallback);return chooseReturnValueFromCollectionResult(result)}try{var _result=this._collection.insert(doc,wrappedCallback);return chooseReturnValueFromCollectionResult(_result)}catch(e){if(callback){callback(e);return null}throw e}}return insert}();Mongo.Collection.prototype.update=function(){function update(selector,modifier){for(var _len=arguments.length,optionsAndCallback=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){optionsAndCallback[_key-2]=arguments[_key]}var callback=popCallbackFromArgs(optionsAndCallback);selector=Mongo.Collection._rewriteSelector(selector);var options=_.clone(optionsAndCallback[0])||{};if(options&&options.upsert){if(options.insertedId){if(!(typeof options.insertedId==="string"||options.insertedId instanceof Mongo.ObjectID))throw new Error("insertedId must be string or ObjectID")}else if(!selector._id){options.insertedId=this._makeNewID()}}var wrappedCallback=wrapCallback(callback);if(this._isRemoteCollection()){var args=[selector,modifier,options];return this._callMutatorMethod("update",args,wrappedCallback)}try{return this._collection.update(selector,modifier,options,wrappedCallback)}catch(e){if(callback){callback(e);return null}throw e}}return update}();Mongo.Collection.prototype.remove=function(){function remove(selector,callback){selector=Mongo.Collection._rewriteSelector(selector);var wrappedCallback=wrapCallback(callback);if(this._isRemoteCollection()){return this._callMutatorMethod("remove",[selector],wrappedCallback)}try{return this._collection.remove(selector,wrappedCallback)}catch(e){if(callback){callback(e);return null}throw e}}return remove}();Mongo.Collection.prototype._isRemoteCollection=function(){function _isRemoteCollection(){return this._connection&&this._connection!==Meteor.server}return _isRemoteCollection}();function wrapCallback(callback,convertResult){if(!callback){return}convertResult=convertResult||_.identity;return function(error,result){callback(error,!error&&convertResult(result))}}Mongo.Collection.prototype.upsert=function(){function upsert(selector,modifier,options,callback){if(!callback&&typeof options==="function"){callback=options;options={}}var updateOptions=_.extend({},options,{_returnObject:true,upsert:true});return this.update(selector,modifier,updateOptions,callback)}return upsert}();Mongo.Collection.prototype._ensureIndex=function(index,options){var self=this;if(!self._collection._ensureIndex)throw new Error("Can only call _ensureIndex on server collections");self._collection._ensureIndex(index,options)};Mongo.Collection.prototype._dropIndex=function(index){var self=this;if(!self._collection._dropIndex)throw new Error("Can only call _dropIndex on server collections");self._collection._dropIndex(index)};Mongo.Collection.prototype._dropCollection=function(){var self=this;if(!self._collection.dropCollection)throw new Error("Can only call _dropCollection on server collections");self._collection.dropCollection()};Mongo.Collection.prototype._createCappedCollection=function(byteSize,maxDocuments){var self=this;if(!self._collection._createCappedCollection)throw new Error("Can only call _createCappedCollection on server collections");self._collection._createCappedCollection(byteSize,maxDocuments)};Mongo.Collection.prototype.rawCollection=function(){var self=this;if(!self._collection.rawCollection){throw new Error("Can only call rawCollection on server collections")}return self._collection.rawCollection()};Mongo.Collection.prototype.rawDatabase=function(){var self=this;if(!(self._driver.mongo&&self._driver.mongo.db)){throw new Error("Can only call rawDatabase on server collections")}return self._driver.mongo.db};Mongo.ObjectID=MongoID.ObjectID;Mongo.Cursor=LocalCollection.Cursor;Mongo.Collection.Cursor=Mongo.Cursor;Mongo.Collection.ObjectID=Mongo.ObjectID;Meteor.Collection=Mongo.Collection;_.extend(Meteor.Collection.prototype,AllowDeny.CollectionPrototype);function popCallbackFromArgs(args){if(args.length&&(args[args.length-1]===undefined||args[args.length-1]instanceof Function)){return args.pop()}}}}}}},{extensions:[".js",".json"]});require("./node_modules/meteor/mongo/local_collection_driver.js");require("./node_modules/meteor/mongo/collection.js");if(typeof Package==="undefined")Package={};(function(pkg,symbols){for(var s in symbols)s in pkg||(pkg[s]=symbols[s])})(Package.mongo={},{Mongo:Mongo})})();Meteor=Package.meteor.Meteor;global=Package.meteor.global;meteorEnv=Package.meteor.meteorEnv;_=Package.underscore._;DDP=Package["ddp-client"].DDP;Mongo=Package.mongo.Mongo;Tracker=Package.tracker.Tracker;Deps=Package.tracker.Deps;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4).setImmediate, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate, __webpack_require__(4).clearImmediate))

/***/ },
/* 5 */
/***/ function(module, exports) {

	(function(){var Meteor=Package.meteor.Meteor;var _=Package.underscore._;var Hook;(function(){Hook=function(options){var self=this;options=options||{};self.nextCallbackId=0;self.callbacks={};if(options.exceptionHandler)self.exceptionHandler=options.exceptionHandler;else if(options.debugPrintExceptions){if(!_.isString(options.debugPrintExceptions))throw new Error("Hook option debugPrintExceptions should be a string");self.exceptionHandler=options.debugPrintExceptions}};_.extend(Hook.prototype,{register:function(callback){var self=this;callback=Meteor.bindEnvironment(callback,self.exceptionHandler||function(exception){throw exception});var id=self.nextCallbackId++;self.callbacks[id]=callback;return{stop:function(){delete self.callbacks[id]}}},each:function(iterator){var self=this;Meteor._nodeCodeMustBeInFiber();var ids=_.keys(self.callbacks);for(var i=0;i<ids.length;++i){var id=ids[i];if(_.has(self.callbacks,id)){var callback=self.callbacks[id];if(!iterator(callback))break}}}})}).call(this);if(typeof Package==="undefined")Package={};Package["callback-hook"]={Hook:Hook}})();(function(){var Meteor=Package.meteor.Meteor;var Random=Package.random.Random;(function(){var key="_localstorage_test_"+Random.id();var retrieved;try{if(window.localStorage){window.localStorage.setItem(key,key);retrieved=window.localStorage.getItem(key);window.localStorage.removeItem(key)}}catch(e){}if(key===retrieved){Meteor._localStorage={getItem:function(key){return window.localStorage.getItem(key)},setItem:function(key,value){window.localStorage.setItem(key,value)},removeItem:function(key){window.localStorage.removeItem(key)}}}if(!Meteor._localStorage){Meteor._debug("You are running a browser with no localStorage or userData "+"support. Logging in from one tab will not cause another "+"tab to be logged in.");Meteor._localStorage={_data:{},setItem:function(key,val){this._data[key]=val},removeItem:function(key){delete this._data[key]},getItem:function(key){var value=this._data[key];if(value===undefined)return null;else return value}}}}).call(this);if(typeof Package==="undefined")Package={};Package.localstorage={}})();(function(){var Meteor=Package.meteor.Meteor;var _=Package.underscore._;var Tracker=Package.tracker.Tracker;var Deps=Package.tracker.Deps;var Random=Package.random.Random;var Hook=Package["callback-hook"].Hook;var DDP=Package.ddp.DDP;var Mongo=Package.mongo.Mongo;var Accounts,AccountsTest,EXPIRE_TOKENS_INTERVAL_MS,CONNECTION_CLOSE_DELAY_MS,getTokenLifetimeMs,onLoginHook,onLoginFailureHook,autoLoginEnabled,tokenRegex,match,makeClientLoggedOut,makeClientLoggedIn,storeLoginToken,unstoreLoginToken,storedLoginToken,storedLoginTokenExpires;(function(){Accounts={};Accounts._options={};var DEFAULT_LOGIN_EXPIRATION_DAYS=90;var MIN_TOKEN_LIFETIME_CAP_SECS=3600;EXPIRE_TOKENS_INTERVAL_MS=600*1e3;CONNECTION_CLOSE_DELAY_MS=10*1e3;Accounts.config=function(options){if(Meteor.isServer){__meteor_runtime_config__.accountsConfigCalled=true}else if(!__meteor_runtime_config__.accountsConfigCalled){Meteor._debug("Accounts.config was called on the client but not on the "+"server; some configuration options may not take effect.")}if(_.has(options,"oauthSecretKey")){if(Meteor.isClient)throw new Error("The oauthSecretKey option may only be specified on the server");if(!Package["oauth-encryption"])throw new Error("The oauth-encryption package must be loaded to set oauthSecretKey");Package["oauth-encryption"].OAuthEncryption.loadKey(options.oauthSecretKey);options=_.omit(options,"oauthSecretKey")}var VALID_KEYS=["sendVerificationEmail","forbidClientAccountCreation","restrictCreationByEmailDomain","loginExpirationInDays"];_.each(_.keys(options),function(key){if(!_.contains(VALID_KEYS,key)){throw new Error("Accounts.config: Invalid key: "+key)}});_.each(VALID_KEYS,function(key){if(key in options){if(key in Accounts._options){throw new Error("Can't set `"+key+"` more than once")}else{Accounts._options[key]=options[key]}}});if(Meteor.isServer)maybeStopExpireTokensInterval()};if(Meteor.isClient){Accounts.connection=Meteor.connection;if(typeof __meteor_runtime_config__!=="undefined"&&__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL){Accounts.connection=DDP.connect(__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL)}}Meteor.users=new Mongo.Collection("users",{_preventAutopublish:true,connection:Meteor.isClient?Accounts.connection:Meteor.connection});Meteor.startup(function(){var ServiceConfiguration=Package["service-configuration"].ServiceConfiguration;Accounts.loginServiceConfiguration=ServiceConfiguration.configurations;Accounts.ConfigError=ServiceConfiguration.ConfigError});Accounts.LoginCancelledError=function(description){this.message=description};Accounts.LoginCancelledError.numericError=145546287;Accounts.LoginCancelledError.prototype=new Error;Accounts.LoginCancelledError.prototype.name="Accounts.LoginCancelledError";getTokenLifetimeMs=function(){return(Accounts._options.loginExpirationInDays||DEFAULT_LOGIN_EXPIRATION_DAYS)*24*60*60*1e3};Accounts._tokenExpiration=function(when){return new Date(new Date(when).getTime()+getTokenLifetimeMs())};Accounts._tokenExpiresSoon=function(when){var minLifetimeMs=.1*getTokenLifetimeMs();var minLifetimeCapMs=MIN_TOKEN_LIFETIME_CAP_SECS*1e3;if(minLifetimeMs>minLifetimeCapMs)minLifetimeMs=minLifetimeCapMs;return new Date>new Date(when)-minLifetimeMs};onLoginHook=new Hook({debugPrintExceptions:"onLogin callback"});onLoginFailureHook=new Hook({debugPrintExceptions:"onLoginFailure callback"});Accounts.onLogin=function(func){return onLoginHook.register(func)};Accounts.onLoginFailure=function(func){return onLoginFailureHook.register(func)}}).call(this);(function(){autoLoginEnabled=true;var accountsPaths=["reset-password","verify-email","enroll-account"];var attemptToMatchHash=function(hash,success){_.each(accountsPaths,function(urlPart){var token;tokenRegex=new RegExp("^\\#\\/"+urlPart+"\\/(.*)$");match=hash.match(tokenRegex);if(match){token=match[1];if(urlPart==="reset-password"){Accounts._resetPasswordToken=token}else if(urlPart==="verify-email"){Accounts._verifyEmailToken=token}else if(urlPart==="enroll-account"){Accounts._enrollAccountToken=token}}else{return}success(token,urlPart)})};var accountsCallbacks={};var enableAutoLogin=function(){Accounts._enableAutoLogin()};attemptToMatchHash(window.location.hash,function(token,urlPart){autoLoginEnabled=false;window.location.hash="";Meteor.startup(function(){if(accountsCallbacks[urlPart]){accountsCallbacks[urlPart](token,enableAutoLogin)}})});AccountsTest={attemptToMatchHash:attemptToMatchHash};Accounts.onResetPasswordLink=function(callback){if(accountsCallbacks["reset-password"]){Meteor._debug("Accounts.onResetPasswordLink was called more than once. "+"Only one callback added will be executed.")}accountsCallbacks["reset-password"]=callback};Accounts.onEmailVerificationLink=function(callback){if(accountsCallbacks["verify-email"]){Meteor._debug("Accounts.onEmailVerificationLink was called more than once. "+"Only one callback added will be executed.")}accountsCallbacks["verify-email"]=callback};Accounts.onEnrollmentLink=function(callback){if(accountsCallbacks["enroll-account"]){Meteor._debug("Accounts.onEnrollmentLink was called more than once. "+"Only one callback added will be executed.")}accountsCallbacks["enroll-account"]=callback}}).call(this);(function(){Meteor.userId=function(){return Accounts.connection.userId()};var loggingIn=false;var loggingInDeps=new Tracker.Dependency;Accounts._setLoggingIn=function(x){if(loggingIn!==x){loggingIn=x;loggingInDeps.changed()}};Meteor.loggingIn=function(){loggingInDeps.depend();return loggingIn};Meteor.user=function(){var userId=Meteor.userId();if(!userId)return null;return Meteor.users.findOne(userId)};Accounts.callLoginMethod=function(options){options=_.extend({methodName:"login",methodArguments:[{}],_suppressLoggingIn:false},options);_.each(["validateResult","userCallback"],function(f){if(!options[f])options[f]=function(){}});var loginCallbacks=_.once(function(error){if(!error){onLoginHook.each(function(callback){callback()})}else{onLoginFailureHook.each(function(callback){callback()})}options.userCallback.apply(this,arguments)});var reconnected=false;var onResultReceived=function(err,result){if(err||!result||!result.token){Accounts.connection.onReconnect=null}else{Accounts.connection.onReconnect=function(){reconnected=true;var storedToken=storedLoginToken();if(storedToken){result={token:storedToken,tokenExpires:storedLoginTokenExpires()}}if(!result.tokenExpires)result.tokenExpires=Accounts._tokenExpiration(new Date);if(Accounts._tokenExpiresSoon(result.tokenExpires)){makeClientLoggedOut()}else{Accounts.callLoginMethod({methodArguments:[{resume:result.token}],_suppressLoggingIn:true,userCallback:function(error){var storedTokenNow=storedLoginToken();if(error){if(storedTokenNow&&storedTokenNow===result.token){makeClientLoggedOut()}}loginCallbacks(error)}})}}}};var loggedInAndDataReadyCallback=function(error,result){if(reconnected)return;Accounts._setLoggingIn(false);if(error||!result){error=error||new Error("No result from call to "+options.methodName);loginCallbacks(error);return}try{options.validateResult(result)}catch(e){loginCallbacks(e);return}makeClientLoggedIn(result.id,result.token,result.tokenExpires);loginCallbacks()};if(!options._suppressLoggingIn)Accounts._setLoggingIn(true);Accounts.connection.apply(options.methodName,options.methodArguments,{wait:true,onResultReceived:onResultReceived},loggedInAndDataReadyCallback)};makeClientLoggedOut=function(){unstoreLoginToken();Accounts.connection.setUserId(null);Accounts.connection.onReconnect=null};makeClientLoggedIn=function(userId,token,tokenExpires){storeLoginToken(userId,token,tokenExpires);Accounts.connection.setUserId(userId)};Meteor.logout=function(callback){Accounts.connection.apply("logout",[],{wait:true},function(error,result){if(error){callback&&callback(error)}else{makeClientLoggedOut();callback&&callback()}})};Meteor.logoutOtherClients=function(callback){Accounts.connection.apply("getNewToken",[],{wait:true},function(err,result){if(!err){storeLoginToken(Meteor.userId(),result.token,result.tokenExpires)}});Accounts.connection.apply("removeOtherTokens",[],{wait:true},function(err){callback&&callback(err)})};var loginServicesHandle=Accounts.connection.subscribe("meteor.loginServiceConfiguration");Accounts.loginServicesConfigured=function(){return loginServicesHandle.ready()};var pageLoadLoginCallbacks=[];var pageLoadLoginAttemptInfo=null;Accounts.onPageLoadLogin=function(f){if(pageLoadLoginAttemptInfo)f(pageLoadLoginAttemptInfo);else pageLoadLoginCallbacks.push(f)};Accounts._pageLoadLogin=function(attemptInfo){if(pageLoadLoginAttemptInfo){Meteor._debug("Ignoring unexpected duplicate page load login attempt info");return}_.each(pageLoadLoginCallbacks,function(callback){callback(attemptInfo)});pageLoadLoginCallbacks=[];pageLoadLoginAttemptInfo=attemptInfo};if(Package.blaze){Package.blaze.Blaze.Template.registerHelper("currentUser",function(){return Meteor.user()});Package.blaze.Blaze.Template.registerHelper("loggingIn",function(){return Meteor.loggingIn()})}}).call(this);(function(){var lastLoginTokenWhenPolled;Meteor.loginWithToken=function(token,callback){Accounts.callLoginMethod({methodArguments:[{resume:token}],userCallback:callback})};Accounts._enableAutoLogin=function(){autoLoginEnabled=true;pollStoredLoginToken()};var loginTokenKey="Meteor.loginToken";var loginTokenExpiresKey="Meteor.loginTokenExpires";var userIdKey="Meteor.userId";Accounts._isolateLoginTokenForTest=function(){loginTokenKey=loginTokenKey+Random.id();userIdKey=userIdKey+Random.id()};storeLoginToken=function(userId,token,tokenExpires){Meteor._localStorage.setItem(userIdKey,userId);Meteor._localStorage.setItem(loginTokenKey,token);if(!tokenExpires)tokenExpires=Accounts._tokenExpiration(new Date);Meteor._localStorage.setItem(loginTokenExpiresKey,tokenExpires);lastLoginTokenWhenPolled=token};unstoreLoginToken=function(){Meteor._localStorage.removeItem(userIdKey);Meteor._localStorage.removeItem(loginTokenKey);Meteor._localStorage.removeItem(loginTokenExpiresKey);lastLoginTokenWhenPolled=null};storedLoginToken=Accounts._storedLoginToken=function(){return Meteor._localStorage.getItem(loginTokenKey)};storedLoginTokenExpires=function(){return Meteor._localStorage.getItem(loginTokenExpiresKey)};var storedUserId=function(){return Meteor._localStorage.getItem(userIdKey)};var unstoreLoginTokenIfExpiresSoon=function(){var tokenExpires=Meteor._localStorage.getItem(loginTokenExpiresKey);if(tokenExpires&&Accounts._tokenExpiresSoon(new Date(tokenExpires)))unstoreLoginToken()};if(autoLoginEnabled){unstoreLoginTokenIfExpiresSoon();var token=storedLoginToken();if(token){var userId=storedUserId();userId&&Accounts.connection.setUserId(userId);Meteor.loginWithToken(token,function(err){if(err){Meteor._debug("Error logging in with token: "+err);makeClientLoggedOut()}Accounts._pageLoadLogin({type:"resume",allowed:!err,error:err,methodName:"login",methodArguments:[{resume:token}]})})}}lastLoginTokenWhenPolled=token;var pollStoredLoginToken=function(){if(!autoLoginEnabled)return;var currentLoginToken=storedLoginToken();if(lastLoginTokenWhenPolled!=currentLoginToken){if(currentLoginToken){Meteor.loginWithToken(currentLoginToken,function(err){if(err)makeClientLoggedOut()})}else{Meteor.logout()}}lastLoginTokenWhenPolled=currentLoginToken};setInterval(pollStoredLoginToken,3e3)}).call(this);if(typeof Package==="undefined")Package={};Package["accounts-base"]={Accounts:Accounts,AccountsTest:AccountsTest}})();(function(){var Meteor=Package.meteor.Meteor;var Accounts=Package["accounts-base"].Accounts;var Mongo=Package.mongo.Mongo;var ServiceConfiguration;(function(){if(typeof ServiceConfiguration==="undefined"){ServiceConfiguration={}}ServiceConfiguration.configurations=new Mongo.Collection("meteor_accounts_loginServiceConfiguration",{_preventAutopublish:true,connection:Meteor.isClient?Accounts.connection:Meteor.connection});ServiceConfiguration.ConfigError=function(serviceName){if(Meteor.isClient&&!Accounts.loginServicesConfigured()){this.message="Login service configuration not yet loaded"}else if(serviceName){this.message="Service "+serviceName+" not configured"}else{this.message="Service not configured"}};ServiceConfiguration.ConfigError.prototype=new Error;ServiceConfiguration.ConfigError.prototype.name="ServiceConfiguration.ConfigError"}).call(this);if(typeof Package==="undefined")Package={};Package["service-configuration"]={ServiceConfiguration:ServiceConfiguration}})();Accounts=Package["accounts-base"].Accounts;

/***/ },
/* 6 */
/***/ function(module, exports) {

	(function(){var Meteor=Package.meteor.Meteor;var SHA256;(function(){SHA256=function(){function SHA256(s){var chrsz=8;var hexcase=0;function safe_add(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}function S(X,n){return X>>>n|X<<32-n}function R(X,n){return X>>>n}function Ch(x,y,z){return x&y^~x&z}function Maj(x,y,z){return x&y^x&z^y&z}function Sigma0256(x){return S(x,2)^S(x,13)^S(x,22)}function Sigma1256(x){return S(x,6)^S(x,11)^S(x,25)}function Gamma0256(x){return S(x,7)^S(x,18)^R(x,3)}function Gamma1256(x){return S(x,17)^S(x,19)^R(x,10)}function core_sha256(m,l){var K=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298);var HASH=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225);var W=new Array(64);var a,b,c,d,e,f,g,h,i,j;var T1,T2;m[l>>5]|=128<<24-l%32;m[(l+64>>9<<4)+15]=l;for(var i=0;i<m.length;i+=16){a=HASH[0];b=HASH[1];c=HASH[2];d=HASH[3];e=HASH[4];f=HASH[5];g=HASH[6];h=HASH[7];for(var j=0;j<64;j++){if(j<16)W[j]=m[j+i];else W[j]=safe_add(safe_add(safe_add(Gamma1256(W[j-2]),W[j-7]),Gamma0256(W[j-15])),W[j-16]);T1=safe_add(safe_add(safe_add(safe_add(h,Sigma1256(e)),Ch(e,f,g)),K[j]),W[j]);T2=safe_add(Sigma0256(a),Maj(a,b,c));h=g;g=f;f=e;e=safe_add(d,T1);d=c;c=b;b=a;a=safe_add(T1,T2)}HASH[0]=safe_add(a,HASH[0]);HASH[1]=safe_add(b,HASH[1]);HASH[2]=safe_add(c,HASH[2]);HASH[3]=safe_add(d,HASH[3]);HASH[4]=safe_add(e,HASH[4]);HASH[5]=safe_add(f,HASH[5]);HASH[6]=safe_add(g,HASH[6]);HASH[7]=safe_add(h,HASH[7])}return HASH}function str2binb(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz){bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<24-i%32}return bin}function Utf8Encode(string){var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if(c>127&&c<2048){utftext+=String.fromCharCode(c>>6|192);utftext+=String.fromCharCode(c&63|128)}else{utftext+=String.fromCharCode(c>>12|224);utftext+=String.fromCharCode(c>>6&63|128);utftext+=String.fromCharCode(c&63|128)}}return utftext}function binb2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt(binarray[i>>2]>>(3-i%4)*8+4&15)+hex_tab.charAt(binarray[i>>2]>>(3-i%4)*8&15)}return str}s=Utf8Encode(s);return binb2hex(core_sha256(str2binb(s),s.length*chrsz))}return SHA256}()}).call(this);if(typeof Package==="undefined")Package={};Package.sha={SHA256:SHA256}})();(function(){var Meteor=Package.meteor.Meteor;var Random=Package.random.Random;var check=Package.check.check;var Match=Package.check.Match;var SHA256=Package.sha.SHA256;var _=Package.underscore._;var SRP,BigInteger;(function(){BigInteger=function(){var dbits;var canary=0xdeadbeefcafe;var j_lm=(canary&16777215)==15715070;function BigInteger(a,b,c){if(a!=null)if("number"==typeof a)this.fromNumber(a,b,c);else if(b==null&&"string"!=typeof a)this.fromString(a,256);else this.fromString(a,b)}function nbi(){return new BigInteger(null)}function am1(i,x,w,j,c,n){while(--n>=0){var v=x*this[i++]+w[j]+c;c=Math.floor(v/67108864);w[j++]=v&67108863}return c}function am2(i,x,w,j,c,n){var xl=x&32767,xh=x>>15;while(--n>=0){var l=this[i]&32767;var h=this[i++]>>15;var m=xh*l+h*xl;l=xl*l+((m&32767)<<15)+w[j]+(c&1073741823);c=(l>>>30)+(m>>>15)+xh*h+(c>>>30);w[j++]=l&1073741823}return c}function am3(i,x,w,j,c,n){var xl=x&16383,xh=x>>14;while(--n>=0){var l=this[i]&16383;var h=this[i++]>>14;var m=xh*l+h*xl;l=xl*l+((m&16383)<<14)+w[j]+c;c=(l>>28)+(m>>14)+xh*h;w[j++]=l&268435455}return c}{BigInteger.prototype.am=am3;dbits=28}BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array;var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;function int2char(n){return BI_RM.charAt(n)}function intAt(s,i){var c=BI_RC[s.charCodeAt(i)];return c==null?-1:c}function bnpCopyTo(r){for(var i=this.t-1;i>=0;--i)r[i]=this[i];r.t=this.t;r.s=this.s}function bnpFromInt(x){this.t=1;this.s=x<0?-1:0;if(x>0)this[0]=x;else if(x<-1)this[0]=x+DV;else this.t=0}function nbv(i){var r=nbi();r.fromInt(i);return r}function bnpFromString(s,b){var k;if(b==16)k=4;else if(b==8)k=3;else if(b==256)k=8;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else{this.fromRadix(s,b);return}this.t=0;this.s=0;var i=s.length,mi=false,sh=0;while(--i>=0){var x=k==8?s[i]&255:intAt(s,i);if(x<0){if(s.charAt(i)=="-")mi=true;continue}mi=false;if(sh==0)this[this.t++]=x;else if(sh+k>this.DB){this[this.t-1]|=(x&(1<<this.DB-sh)-1)<<sh;this[this.t++]=x>>this.DB-sh}else this[this.t-1]|=x<<sh;sh+=k;if(sh>=this.DB)sh-=this.DB}if(k==8&&(s[0]&128)!=0){this.s=-1;if(sh>0)this[this.t-1]|=(1<<this.DB-sh)-1<<sh}this.clamp();if(mi)BigInteger.ZERO.subTo(this,this)}function bnpClamp(){var c=this.s&this.DM;while(this.t>0&&this[this.t-1]==c)--this.t}function bnToString(b){if(this.s<0)return"-"+this.negate().toString(b);var k;if(b==16)k=4;else if(b==8)k=3;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else return this.toRadix(b);var km=(1<<k)-1,d,m=false,r="",i=this.t;var p=this.DB-i*this.DB%k;if(i-->0){if(p<this.DB&&(d=this[i]>>p)>0){m=true;r=int2char(d)}while(i>=0){if(p<k){d=(this[i]&(1<<p)-1)<<k-p;d|=this[--i]>>(p+=this.DB-k)}else{d=this[i]>>(p-=k)&km;if(p<=0){p+=this.DB;--i}}if(d>0)m=true;if(m)r+=int2char(d)}}return m?r:"0"}function bnNegate(){var r=nbi();BigInteger.ZERO.subTo(this,r);return r}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var r=this.s-a.s;if(r!=0)return r;var i=this.t;r=i-a.t;if(r!=0)return r;while(--i>=0)if((r=this[i]-a[i])!=0)return r;return 0}function nbits(x){var r=1,t;if((t=x>>>16)!=0){x=t;r+=16}if((t=x>>8)!=0){x=t;r+=8}if((t=x>>4)!=0){x=t;r+=4}if((t=x>>2)!=0){x=t;r+=2}if((t=x>>1)!=0){x=t;r+=1}return r}function bnBitLength(){if(this.t<=0)return 0;return this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(n,r){var i;for(i=this.t-1;i>=0;--i)r[i+n]=this[i];for(i=n-1;i>=0;--i)r[i]=0;r.t=this.t+n;r.s=this.s}function bnpDRShiftTo(n,r){for(var i=n;i<this.t;++i)r[i-n]=this[i];r.t=Math.max(this.t-n,0);r.s=this.s}function bnpLShiftTo(n,r){var bs=n%this.DB;var cbs=this.DB-bs;var bm=(1<<cbs)-1;var ds=Math.floor(n/this.DB),c=this.s<<bs&this.DM,i;for(i=this.t-1;i>=0;--i){r[i+ds+1]=this[i]>>cbs|c;c=(this[i]&bm)<<bs}for(i=ds-1;i>=0;--i)r[i]=0;r[ds]=c;r.t=this.t+ds+1;r.s=this.s;r.clamp()}function bnpRShiftTo(n,r){r.s=this.s;var ds=Math.floor(n/this.DB);if(ds>=this.t){r.t=0;return}var bs=n%this.DB;var cbs=this.DB-bs;var bm=(1<<bs)-1;r[0]=this[ds]>>bs;for(var i=ds+1;i<this.t;++i){r[i-ds-1]|=(this[i]&bm)<<cbs;r[i-ds]=this[i]>>bs}if(bs>0)r[this.t-ds-1]|=(this.s&bm)<<cbs;r.t=this.t-ds;r.clamp()}function bnpSubTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i<m){c+=this[i]-a[i];r[i++]=c&this.DM;c>>=this.DB}if(a.t<this.t){c-=a.s;while(i<this.t){c+=this[i];r[i++]=c&this.DM;c>>=this.DB}c+=this.s}else{c+=this.s;while(i<a.t){c-=a[i];r[i++]=c&this.DM;c>>=this.DB}c-=a.s}r.s=c<0?-1:0;if(c<-1)r[i++]=this.DV+c;else if(c>0)r[i++]=c;r.t=i;r.clamp()}function bnpMultiplyTo(a,r){var x=this.abs(),y=a.abs();var i=x.t;r.t=i+y.t;while(--i>=0)r[i]=0;for(i=0;i<y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);r.s=0;r.clamp();if(this.s!=a.s)BigInteger.ZERO.subTo(r,r)}function bnpSquareTo(r){var x=this.abs();var i=r.t=2*x.t;while(--i>=0)r[i]=0;for(i=0;i<x.t-1;++i){var c=x.am(i,x[i],r,2*i,0,1);if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1))>=x.DV){r[i+x.t]-=x.DV;r[i+x.t+1]=1}}if(r.t>0)r[r.t-1]+=x.am(i,x[i],r,2*i,0,1);r.s=0;r.clamp()}function bnpDivRemTo(m,q,r){var pm=m.abs();if(pm.t<=0)return;var pt=this.abs();if(pt.t<pm.t){if(q!=null)q.fromInt(0);if(r!=null)this.copyTo(r);return}if(r==null)r=nbi();var y=nbi(),ts=this.s,ms=m.s;var nsh=this.DB-nbits(pm[pm.t-1]);if(nsh>0){pm.lShiftTo(nsh,y);pt.lShiftTo(nsh,r)}else{pm.copyTo(y);pt.copyTo(r)}var ys=y.t;var y0=y[ys-1];if(y0==0)return;var yt=y0*(1<<this.F1)+(ys>1?y[ys-2]>>this.F2:0);var d1=this.FV/yt,d2=(1<<this.F1)/yt,e=1<<this.F2;var i=r.t,j=i-ys,t=q==null?nbi():q;y.dlShiftTo(j,t);if(r.compareTo(t)>=0){r[r.t++]=1;r.subTo(t,r)}BigInteger.ONE.dlShiftTo(ys,t);t.subTo(y,y);while(y.t<ys)y[y.t++]=0;while(--j>=0){var qd=r[--i]==y0?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);if((r[i]+=y.am(0,qd,r,j,0,ys))<qd){y.dlShiftTo(j,t);r.subTo(t,r);while(r[i]<--qd)r.subTo(t,r)}}if(q!=null){r.drShiftTo(ys,q);if(ts!=ms)BigInteger.ZERO.subTo(q,q)}r.t=ys;r.clamp();if(nsh>0)r.rShiftTo(nsh,r);if(ts<0)BigInteger.ZERO.subTo(r,r)}function bnMod(a){var r=nbi();this.abs().divRemTo(a,null,r);if(this.s<0&&r.compareTo(BigInteger.ZERO)>0)a.subTo(r,r);return r}function Classic(m){this.m=m}function cConvert(x){if(x.s<0||x.compareTo(this.m)>=0)return x.mod(this.m);else return x}function cRevert(x){return x}function cReduce(x){x.divRemTo(this.m,null,x)}function cMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}function cSqrTo(x,r){x.squareTo(r);this.reduce(r)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1)return 0;var x=this[0];if((x&1)==0)return 0;var y=x&3;y=y*(2-(x&15)*y)&15;y=y*(2-(x&255)*y)&255;y=y*(2-((x&65535)*y&65535))&65535;y=y*(2-x*y%this.DV)%this.DV;return y>0?this.DV-y:-y}function Montgomery(m){this.m=m;this.mp=m.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<m.DB-15)-1;this.mt2=2*m.t}function montConvert(x){var r=nbi();x.abs().dlShiftTo(this.m.t,r);r.divRemTo(this.m,null,r);if(x.s<0&&r.compareTo(BigInteger.ZERO)>0)this.m.subTo(r,r);return r}function montRevert(x){var r=nbi();x.copyTo(r);this.reduce(r);return r}function montReduce(x){while(x.t<=this.mt2)x[x.t++]=0;for(var i=0;i<this.m.t;++i){var j=x[i]&32767;var u0=j*this.mpl+((j*this.mph+(x[i]>>15)*this.mpl&this.um)<<15)&x.DM;j=i+this.m.t;x[j]+=this.m.am(0,u0,x,i,0,this.m.t);while(x[j]>=x.DV){x[j]-=x.DV;x[++j]++}}x.clamp();x.drShiftTo(this.m.t,x);if(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function montSqrTo(x,r){x.squareTo(r);this.reduce(r)}function montMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(e,z){if(e>4294967295||e<1)return BigInteger.ONE;var r=nbi(),r2=nbi(),g=z.convert(this),i=nbits(e)-1;g.copyTo(r);while(--i>=0){z.sqrTo(r,r2);if((e&1<<i)>0)z.mulTo(r2,g,r);else{var t=r;r=r2;r2=t}}return z.revert(r)}function bnModPowInt(e,m){var z;if(e<256||m.isEven())z=new Classic(m);else z=new Montgomery(m);return this.exp(e,z)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);function bnClone(){var r=nbi();this.copyTo(r);return r}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;else if(this.t==0)return-1}else if(this.t==1)return this[0];else if(this.t==0)return 0;return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function bnSigNum(){if(this.s<0)return-1;else if(this.t<=0||this.t==1&&this[0]<=0)return 0;else return 1}function bnpToRadix(b){if(b==null)b=10;if(this.signum()==0||b<2||b>36)return"0";var cs=this.chunkSize(b);var a=Math.pow(b,cs);var d=nbv(a),y=nbi(),z=nbi(),r="";this.divRemTo(d,y,z);while(y.signum()>0){r=(a+z.intValue()).toString(b).substr(1)+r;y.divRemTo(d,y,z)}return z.intValue().toString(b)+r}function bnpFromRadix(s,b){this.fromInt(0);if(b==null)b=10;var cs=this.chunkSize(b);var d=Math.pow(b,cs),mi=false,j=0,w=0;for(var i=0;i<s.length;++i){var x=intAt(s,i);if(x<0){if(s.charAt(i)=="-"&&this.signum()==0)mi=true;continue}w=b*w+x;if(++j>=cs){this.dMultiply(d);this.dAddOffset(w,0);j=0;w=0}}if(j>0){this.dMultiply(Math.pow(b,j));this.dAddOffset(w,0)}if(mi)BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(a,b,c){if("number"==typeof b){if(a<2)this.fromInt(1);else{this.fromNumber(a,c);if(!this.testBit(a-1))this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);if(this.isEven())this.dAddOffset(1,0);while(!this.isProbablePrime(b)){this.dAddOffset(2,0);if(this.bitLength()>a)this.subTo(BigInteger.ONE.shiftLeft(a-1),this)}}}else{var x=new Array,t=a&7;x.length=(a>>3)+1;b.nextBytes(x);if(t>0)x[0]&=(1<<t)-1;else x[0]=0;this.fromString(x,256)}}function bnToByteArray(){var i=this.t,r=new Array;r[0]=this.s;var p=this.DB-i*this.DB%8,d,k=0;if(i-->0){if(p<this.DB&&(d=this[i]>>p)!=(this.s&this.DM)>>p)r[k++]=d|this.s<<this.DB-p;while(i>=0){if(p<8){d=(this[i]&(1<<p)-1)<<8-p;d|=this[--i]>>(p+=this.DB-8)}else{d=this[i]>>(p-=8)&255;if(p<=0){p+=this.DB;--i}}if((d&128)!=0)d|=-256;if(k==0&&(this.s&128)!=(d&128))++k;if(k>0||d!=this.s)r[k++]=d}}return r}function bnEquals(a){return this.compareTo(a)==0}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,op,r){var i,f,m=Math.min(a.t,this.t);for(i=0;i<m;++i)r[i]=op(this[i],a[i]);if(a.t<this.t){f=a.s&this.DM;for(i=m;i<this.t;++i)r[i]=op(this[i],f);r.t=this.t}else{f=this.s&this.DM;for(i=m;i<a.t;++i)r[i]=op(f,a[i]);r.t=a.t}r.s=op(this.s,a.s);r.clamp()}function op_and(x,y){return x&y}function bnAnd(a){var r=nbi();this.bitwiseTo(a,op_and,r);return r}function op_or(x,y){return x|y}function bnOr(a){var r=nbi();this.bitwiseTo(a,op_or,r);return r}function op_xor(x,y){return x^y}function bnXor(a){var r=nbi();this.bitwiseTo(a,op_xor,r);return r}function op_andnot(x,y){return x&~y}function bnAndNot(a){var r=nbi();this.bitwiseTo(a,op_andnot,r);return r}function bnNot(){var r=nbi();for(var i=0;i<this.t;++i)r[i]=this.DM&~this[i];r.t=this.t;r.s=~this.s;return r}function bnShiftLeft(n){var r=nbi();if(n<0)this.rShiftTo(-n,r);else this.lShiftTo(n,r);return r}function bnShiftRight(n){var r=nbi();if(n<0)this.lShiftTo(-n,r);else this.rShiftTo(n,r);return r}function lbit(x){if(x==0)return-1;var r=0;if((x&65535)==0){x>>=16;r+=16}if((x&255)==0){x>>=8;r+=8}if((x&15)==0){x>>=4;r+=4}if((x&3)==0){x>>=2;r+=2}if((x&1)==0)++r;return r}function bnGetLowestSetBit(){for(var i=0;i<this.t;++i)if(this[i]!=0)return i*this.DB+lbit(this[i]);if(this.s<0)return this.t*this.DB;return-1}function cbit(x){var r=0;while(x!=0){x&=x-1;++r}return r}function bnBitCount(){var r=0,x=this.s&this.DM;for(var i=0;i<this.t;++i)r+=cbit(this[i]^x);return r}function bnTestBit(n){var j=Math.floor(n/this.DB);if(j>=this.t)return this.s!=0;return(this[j]&1<<n%this.DB)!=0}function bnpChangeBit(n,op){var r=BigInteger.ONE.shiftLeft(n);this.bitwiseTo(r,op,r);return r}function bnSetBit(n){return this.changeBit(n,op_or)}function bnClearBit(n){return this.changeBit(n,op_andnot)}function bnFlipBit(n){return this.changeBit(n,op_xor)}function bnpAddTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i<m){c+=this[i]+a[i];r[i++]=c&this.DM;c>>=this.DB}if(a.t<this.t){c+=a.s;while(i<this.t){c+=this[i];r[i++]=c&this.DM;c>>=this.DB}c+=this.s}else{c+=this.s;while(i<a.t){c+=a[i];r[i++]=c&this.DM;c>>=this.DB}c+=a.s}r.s=c<0?-1:0;if(c>0)r[i++]=c;else if(c<-1)r[i++]=this.DV+c;r.t=i;r.clamp()}function bnAdd(a){var r=nbi();this.addTo(a,r);return r}function bnSubtract(a){var r=nbi();this.subTo(a,r);return r}function bnMultiply(a){var r=nbi();this.multiplyTo(a,r);return r}function bnDivide(a){var r=nbi();this.divRemTo(a,r,null);return r}function bnRemainder(a){var r=nbi();this.divRemTo(a,null,r);return r}function bnDivideAndRemainder(a){var q=nbi(),r=nbi();this.divRemTo(a,q,r);return new Array(q,r)}function bnpDMultiply(n){this[this.t]=this.am(0,n-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(n,w){while(this.t<=w)this[this.t++]=0;this[w]+=n;while(this[w]>=this.DV){this[w]-=this.DV;if(++w>=this.t)this[this.t++]=0;++this[w]}}function NullExp(){}function nNop(x){return x}function nMulTo(x,y,r){x.multiplyTo(y,r)}function nSqrTo(x,r){x.squareTo(r)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(a,n,r){var i=Math.min(this.t+a.t,n);r.s=0;r.t=i;while(i>0)r[--i]=0;var j;for(j=r.t-this.t;i<j;++i)r[i+this.t]=this.am(0,a[i],r,i,0,this.t);for(j=Math.min(a.t,n);i<j;++i)this.am(0,a[i],r,i,0,n-i);r.clamp()}function bnpMultiplyUpperTo(a,n,r){--n;var i=r.t=this.t+a.t-n;r.s=0;while(--i>=0)r[i]=0;for(i=Math.max(n-this.t,0);i<a.t;++i)r[this.t+i-n]=this.am(n-i,a[i],r,0,0,this.t+i-n);r.clamp();r.drShiftTo(1,r)}function Barrett(m){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*m.t,this.r2);this.mu=this.r2.divide(m);this.m=m}function barrettConvert(x){if(x.s<0||x.t>2*this.m.t)return x.mod(this.m);else if(x.compareTo(this.m)<0)return x;else{var r=nbi();x.copyTo(r);this.reduce(r);return r}}function barrettRevert(x){return x}function barrettReduce(x){x.drShiftTo(this.m.t-1,this.r2);if(x.t>this.m.t+1){x.t=this.m.t+1;x.clamp()}this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(x.compareTo(this.r2)<0)x.dAddOffset(1,this.m.t+1);x.subTo(this.r2,x);while(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function barrettSqrTo(x,r){x.squareTo(r);this.reduce(r)}function barrettMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;function bnModPow(e,m){var i=e.bitLength(),k,r=nbv(1),z;if(i<=0)return r;else if(i<18)k=1;else if(i<48)k=3;else if(i<144)k=4;else if(i<768)k=5;else k=6;if(i<8)z=new Classic(m);else if(m.isEven())z=new Barrett(m);else z=new Montgomery(m);var g=new Array,n=3,k1=k-1,km=(1<<k)-1;g[1]=z.convert(this);if(k>1){var g2=nbi();z.sqrTo(g[1],g2);while(n<=km){g[n]=nbi();z.mulTo(g2,g[n-2],g[n]);n+=2}}var j=e.t-1,w,is1=true,r2=nbi(),t;i=nbits(e[j])-1;while(j>=0){if(i>=k1)w=e[j]>>i-k1&km;else{w=(e[j]&(1<<i+1)-1)<<k1-i;if(j>0)w|=e[j-1]>>this.DB+i-k1}n=k;while((w&1)==0){w>>=1;--n}if((i-=n)<0){i+=this.DB;--j}if(is1){g[w].copyTo(r);is1=false}else{while(n>1){z.sqrTo(r,r2);z.sqrTo(r2,r);n-=2}if(n>0)z.sqrTo(r,r2);else{t=r;r=r2;r2=t}z.mulTo(r2,g[w],r)}while(j>=0&&(e[j]&1<<i)==0){z.sqrTo(r,r2);t=r;r=r2;r2=t;if(--i<0){i=this.DB-1;--j}}}return z.revert(r)}function bnGCD(a){var x=this.s<0?this.negate():this.clone();var y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y;y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit();if(g<0)return x;if(i<g)g=i;if(g>0){x.rShiftTo(g,x);y.rShiftTo(g,y)}while(x.signum()>0){if((i=x.getLowestSetBit())>0)x.rShiftTo(i,x);if((i=y.getLowestSetBit())>0)y.rShiftTo(i,y);if(x.compareTo(y)>=0){x.subTo(y,x);x.rShiftTo(1,x)}else{y.subTo(x,y);y.rShiftTo(1,y)}}if(g>0)y.lShiftTo(g,y);return y}function bnpModInt(n){if(n<=0)return 0;var d=this.DV%n,r=this.s<0?n-1:0;if(this.t>0)if(d==0)r=this[0]%n;else for(var i=this.t-1;i>=0;--i)r=(d*r+this[i])%n;return r}function bnModInverse(m){var ac=m.isEven();if(this.isEven()&&ac||m.signum()==0)return BigInteger.ZERO;var u=m.clone(),v=this.clone();var a=nbv(1),b=nbv(0),c=nbv(0),d=nbv(1);while(u.signum()!=0){while(u.isEven()){u.rShiftTo(1,u);if(ac){if(!a.isEven()||!b.isEven()){a.addTo(this,a);b.subTo(m,b)}a.rShiftTo(1,a)}else if(!b.isEven())b.subTo(m,b);b.rShiftTo(1,b)}while(v.isEven()){v.rShiftTo(1,v);if(ac){if(!c.isEven()||!d.isEven()){c.addTo(this,c);d.subTo(m,d)}c.rShiftTo(1,c)}else if(!d.isEven())d.subTo(m,d);d.rShiftTo(1,d)}if(u.compareTo(v)>=0){u.subTo(v,u);if(ac)a.subTo(c,a);b.subTo(d,b)}else{v.subTo(u,v);if(ac)c.subTo(a,c);d.subTo(b,d)}}if(v.compareTo(BigInteger.ONE)!=0)return BigInteger.ZERO;if(d.compareTo(m)>=0)return d.subtract(m);if(d.signum()<0)d.addTo(m,d);else return d;if(d.signum()<0)return d.add(m);else return d}var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];var lplim=(1<<26)/lowprimes[lowprimes.length-1];function bnIsProbablePrime(t){var i,x=this.abs();if(x.t==1&&x[0]<=lowprimes[lowprimes.length-1]){for(i=0;i<lowprimes.length;++i)if(x[0]==lowprimes[i])return true;return false}if(x.isEven())return false;i=1;while(i<lowprimes.length){var m=lowprimes[i],j=i+1;while(j<lowprimes.length&&m<lplim)m*=lowprimes[j++];m=x.modInt(m);while(i<j)if(m%lowprimes[i++]==0)return false}return x.millerRabin(t)}function bnpMillerRabin(t){var n1=this.subtract(BigInteger.ONE);var k=n1.getLowestSetBit();if(k<=0)return false;var r=n1.shiftRight(k);t=t+1>>1;if(t>lowprimes.length)t=lowprimes.length;var a=nbi();for(var i=0;i<t;++i){a.fromInt(lowprimes[i]);var y=a.modPow(r,this);if(y.compareTo(BigInteger.ONE)!=0&&y.compareTo(n1)!=0){var j=1;while(j++<k&&y.compareTo(n1)!=0){y=y.modPowInt(2,this);if(y.compareTo(BigInteger.ONE)==0)return false}if(y.compareTo(n1)!=0)return false}}return true}BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix;BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue=bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight=bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder;BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;return BigInteger}()}).call(this);(function(){SRP={};SRP.generateVerifier=function(password,options){var params=paramsFromOptions(options);var salt=options&&options.salt||Random.secret();var identity;var hashedIdentityAndPassword=options&&options.hashedIdentityAndPassword;if(!hashedIdentityAndPassword){identity=options&&options.identity||Random.secret();hashedIdentityAndPassword=params.hash(identity+":"+password)}var x=params.hash(salt+hashedIdentityAndPassword);var xi=new BigInteger(x,16);var v=params.g.modPow(xi,params.N);return{identity:identity,salt:salt,verifier:v.toString(16)}};SRP.matchVerifier={identity:String,salt:String,verifier:String};var _defaults={hash:function(x){return SHA256(x).toLowerCase()},N:new BigInteger("EEAF0AB9ADB38DD69C33F80AFA8FC5E86072618775FF3C0B9EA2314C9C256576D674DF7496EA81D3383B4813D692C6E0E0D5D8E250B98BE48E495C1D6089DAD15DC7D7B46154D6B6CE8EF4AD69B15D4982559B297BCF1885C529F566660E57EC68EDBC3C05726CC02FD4CBF4976EAA9AFD5138FE8376435B9FC61D2FC0EB06E3",16),g:new BigInteger("2")};_defaults.k=new BigInteger(_defaults.hash(_defaults.N.toString(16)+_defaults.g.toString(16)),16);var paramsFromOptions=function(options){if(!options)return _defaults;var ret=_.extend({},_defaults);_.each(["N","g","k"],function(p){if(options[p]){if(typeof options[p]==="string")ret[p]=new BigInteger(options[p],16);else if(options[p]instanceof BigInteger)ret[p]=options[p];else throw new Error("Invalid parameter: "+p)}});if(options.hash)ret.hash=function(x){return options.hash(x).toLowerCase()};if(!options.k&&(options.N||options.g||options.hash)){ret.k=ret.hash(ret.N.toString(16)+ret.g.toString(16))}return ret}}).call(this);if(typeof Package==="undefined")Package={};Package.srp={SRP:SRP}})();(function(){var Meteor=Package.meteor.Meteor;var Accounts=Package["accounts-base"].Accounts;var SRP=Package.srp.SRP;var SHA256=Package.sha.SHA256;var check=Package.check.check;var Match=Package.check.Match;var _=Package.underscore._;var DDP=Package.ddp.DDP;(function(){Meteor.loginWithPassword=function(selector,password,callback){if(typeof selector==="string")if(selector.indexOf("@")===-1)selector={username:selector};else selector={email:selector};Accounts.callLoginMethod({methodArguments:[{user:selector,password:Accounts._hashPassword(password)}],userCallback:function(error,result){if(error&&error.error===400&&error.reason==="old password format"){srpUpgradePath({upgradeError:error,userSelector:selector,plaintextPassword:password},callback)}else if(error){callback&&callback(error)}else{callback&&callback()}}})};Accounts._hashPassword=function(password){return{digest:SHA256(password),algorithm:"sha-256"}};var srpUpgradePath=function(options,callback){var details;try{details=EJSON.parse(options.upgradeError.details)}catch(e){}if(!(details&&details.format==="srp")){callback&&callback(new Meteor.Error(400,"Password is old. Please reset your "+"password."))}else{Accounts.callLoginMethod({methodArguments:[{user:options.userSelector,srp:SHA256(details.identity+":"+options.plaintextPassword),password:Accounts._hashPassword(options.plaintextPassword)}],userCallback:callback})}};Accounts.createUser=function(options,callback){options=_.clone(options);if(typeof options.password!=="string")throw new Error("Must set options.password");if(!options.password){callback(new Meteor.Error(400,"Password may not be empty"));return}options.password=Accounts._hashPassword(options.password);Accounts.callLoginMethod({methodName:"createUser",methodArguments:[options],userCallback:callback})};Accounts.changePassword=function(oldPassword,newPassword,callback){if(!Meteor.user()){callback&&callback(new Error("Must be logged in to change password."));return}check(newPassword,String);if(!newPassword){callback(new Meteor.Error(400,"Password may not be empty"));return}Accounts.connection.apply("changePassword",[oldPassword?Accounts._hashPassword(oldPassword):null,Accounts._hashPassword(newPassword)],function(error,result){if(error||!result){if(error&&error.error===400&&error.reason==="old password format"){srpUpgradePath({upgradeError:error,userSelector:{id:Meteor.userId()},plaintextPassword:oldPassword},function(err){if(err){callback&&callback(err)}else{Accounts.changePassword(oldPassword,newPassword,callback)}})}else{callback&&callback(error||new Error("No result from changePassword."))}}else{callback&&callback()}})};Accounts.forgotPassword=function(options,callback){if(!options.email)throw new Error("Must pass options.email");Accounts.connection.call("forgotPassword",options,callback)};Accounts.resetPassword=function(token,newPassword,callback){check(token,String);check(newPassword,String);if(!newPassword){callback(new Meteor.Error(400,"Password may not be empty"));return}Accounts.callLoginMethod({methodName:"resetPassword",methodArguments:[token,Accounts._hashPassword(newPassword)],userCallback:callback})};Accounts.verifyEmail=function(token,callback){if(!token)throw new Error("Need to pass token");Accounts.callLoginMethod({methodName:"verifyEmail",methodArguments:[token],userCallback:callback})}}).call(this);if(typeof Package==="undefined")Package={};Package["accounts-password"]={}})();Accounts=Package["accounts-base"].Accounts;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = window.Package && Package["mongo"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tabs = __webpack_require__(9);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _first = __webpack_require__(10);
	
	var _first2 = _interopRequireDefault(_first);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AppRouter($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('app', {
	        url: "/app",
	        abstract: true,
	        template: _tabs2.default
	    }).state('app.home', {
	        url: "/home",
	        views: {
	            'home-tab': {
	                template: _first2.default
	            }
	        }
	    });
	    $urlRouterProvider.otherwise('/app/home');
	}
	
	exports.default = AppRouter;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<ion-tabs class=\"tabs-icon-top tabs-positive\" >\n  <ion-tab title=\"Home\" icon=\"ion-home\" href=\"#/app/home\">\n      <ion-nav-view name=\"home-tab\"></ion-nav-view>\n   </ion-tab>\n   <ion-tab title=\"Profile\" icon=\"ion-person\" href=\"#/app/profile\">\n       <ion-nav-view name=\"profile-tab\"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title=\"register\" icon=\"ion-log-in\" href=\"#/app/register\">\n        <ion-nav-view name=\"register-tab\"></ion-nav-view>\n     </ion-tab>\n</ion-tabs>\n"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n    <ion-nav-title>\n        Home\n    </ion-nav-title>\n    <ion-content>\n        <h1>Header Text</h1>\n    </ion-content>\n</ion-view>\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _profile = __webpack_require__(12);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _profile3 = __webpack_require__(14);
	
	var _profile4 = _interopRequireDefault(_profile3);
	
	var _angularMeteor = __webpack_require__(15);
	
	var _angularMeteor2 = _interopRequireDefault(_angularMeteor);
	
	var _profileView = __webpack_require__(52);
	
	var _profileView2 = _interopRequireDefault(_profileView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var name = 'profile';
	exports.default = angular.module(name, [_angularMeteor2.default]).config(_profile4.default).component(name, {
	  template: _profileView2.default,
	  controller: _profile2.default,
	  controllerAs: name
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _collections = __webpack_require__(13);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProfileCtrl = function ProfileCtrl($scope, $reactive) {
	  'ngInject';
	
	  _classCallCheck(this, ProfileCtrl);
	
	  $reactive(this).attach($scope);
	
	  this.helpers({
	    profile: function profile() {
	      return _collections.Profiles.find({});
	    }
	  });
	};
	
	exports.default = ProfileCtrl;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Profiles = undefined;
	
	var _mongo = __webpack_require__(7);
	
	var Profiles = exports.Profiles = new _mongo.Mongo.Collection('profiles');
	
	Profiles.allow({
	  update: function update(userId, profile, fields, modifier) {
	    return userId && profile.owner === userId;
	  }
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($stateProvider) {
	  $stateProvider.state('app.profile', {
	    url: "/profile",
	    views: {
	      'profile-tab': {
	        template: '<profile></profile>'
	      }
	    }
	  });
	};
	
	;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*! angular-meteor v1.3.11 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(16), __webpack_require__(17));
		else if(typeof define === 'function' && define.amd)
			define(["underscore", "jsondiffpatch"], factory);
		else if(typeof exports === 'object')
			exports["angularMeteor"] = factory(require("underscore"), require("jsondiffpatch"));
		else
			root["angularMeteor"] = factory(root["_"], root["jsondiffpatch"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_22__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		__webpack_require__(1);
	
		__webpack_require__(4);
	
		__webpack_require__(5);
	
		__webpack_require__(6);
	
		__webpack_require__(7);
	
		__webpack_require__(8);
	
		__webpack_require__(9);
	
		__webpack_require__(10);
	
		__webpack_require__(11);
	
		__webpack_require__(12);
	
		__webpack_require__(13);
	
		__webpack_require__(14);
	
		__webpack_require__(15);
	
		var _utils = __webpack_require__(16);
	
		var _mixer = __webpack_require__(17);
	
		var _scope = __webpack_require__(18);
	
		var _core = __webpack_require__(19);
	
		var _viewModel = __webpack_require__(20);
	
		var _reactive = __webpack_require__(21);
	
		var _templates = __webpack_require__(23);
	
		// legacy
		// lib
	
	
		var name = 'angular-meteor';
	
		// new
	
		exports.default = name;
	
	
		angular.module(name, [
		// new
		_utils.name, _mixer.name, _scope.name, _core.name, _viewModel.name, _reactive.name, _templates.name,
	
		// legacy
		'angular-meteor.ironrouter', 'angular-meteor.utils', 'angular-meteor.subscribe', 'angular-meteor.collection', 'angular-meteor.object', 'angular-meteor.user', 'angular-meteor.methods', 'angular-meteor.session', 'angular-meteor.camera']).run([_mixer.Mixer, _core.Core, _viewModel.ViewModel, _reactive.Reactive, function ($Mixer, $$Core, $$ViewModel, $$Reactive) {
		  // Load all mixins
		  $Mixer.mixin($$Core).mixin($$ViewModel).mixin($$Reactive);
		}])
	
		// legacy
		// Putting all services under $meteor service for syntactic sugar
		.service('$meteor', ['$meteorCollection', '$meteorCollectionFS', '$meteorObject', '$meteorMethods', '$meteorSession', '$meteorSubscribe', '$meteorUtils', '$meteorCamera', '$meteorUser', function ($meteorCollection, $meteorCollectionFS, $meteorObject, $meteorMethods, $meteorSession, $meteorSubscribe, $meteorUtils, $meteorCamera, $meteorUser) {
		  var _this = this;
	
		  this.collection = $meteorCollection;
		  this.collectionFS = $meteorCollectionFS;
		  this.object = $meteorObject;
		  this.subscribe = $meteorSubscribe.subscribe;
		  this.call = $meteorMethods.call;
		  this.session = $meteorSession;
		  this.autorun = $meteorUtils.autorun;
		  this.getCollectionByName = $meteorUtils.getCollectionByName;
		  this.getPicture = $meteorCamera.getPicture;
	
		  // $meteorUser
		  ['loginWithPassword', 'requireUser', 'requireValidUser', 'waitForUser', 'createUser', 'changePassword', 'forgotPassword', 'resetPassword', 'verifyEmail', 'loginWithMeteorDeveloperAccount', 'loginWithFacebook', 'loginWithGithub', 'loginWithGoogle', 'loginWithMeetup', 'loginWithTwitter', 'loginWithWeibo', 'logout', 'logoutOtherClients'].forEach(function (method) {
		    _this[method] = $meteorUser[method];
		  });
		}]);
		module.exports = exports['default'];
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		'use strict';
	
		// https://github.com/DAB0mB/get-updates
		/*global
		 angular, _
		 */
	
		(function () {
		  var module = angular.module('getUpdates', []);
	
		  var utils = function () {
		    var rip = function rip(obj, level) {
		      if (level < 1) return {};
	
		      return _underscore2.default.reduce(obj, function (clone, v, k) {
		        v = _underscore2.default.isObject(v) ? rip(v, --level) : v;
		        clone[k] = v;
		        return clone;
		      }, {});
		    };
	
		    var toPaths = function toPaths(obj) {
		      var keys = getKeyPaths(obj);
		      var values = getDeepValues(obj);
		      return _underscore2.default.object(keys, values);
		    };
	
		    var getKeyPaths = function getKeyPaths(obj) {
		      var keys = _underscore2.default.keys(obj).map(function (k) {
		        var v = obj[k];
		        if (!_underscore2.default.isObject(v) || _underscore2.default.isEmpty(v) || _underscore2.default.isArray(v)) return k;
	
		        return getKeyPaths(v).map(function (subKey) {
		          return k + '.' + subKey;
		        });
		      });
	
		      return _underscore2.default.flatten(keys);
		    };
	
		    var getDeepValues = function getDeepValues(obj, arr) {
		      arr = arr || [];
	
		      _underscore2.default.values(obj).forEach(function (v) {
		        if (!_underscore2.default.isObject(v) || _underscore2.default.isEmpty(v) || _underscore2.default.isArray(v)) arr.push(v);else getDeepValues(v, arr);
		      });
	
		      return arr;
		    };
	
		    var flatten = function flatten(arr) {
		      return arr.reduce(function (flattened, v, i) {
		        if (_underscore2.default.isArray(v) && !_underscore2.default.isEmpty(v)) flattened.push.apply(flattened, flatten(v));else flattened.push(v);
	
		        return flattened;
		      }, []);
		    };
	
		    var setFilled = function setFilled(obj, k, v) {
		      if (!_underscore2.default.isEmpty(v)) obj[k] = v;
		    };
	
		    var assert = function assert(result, msg) {
		      if (!result) throwErr(msg);
		    };
	
		    var throwErr = function throwErr(msg) {
		      throw Error('get-updates error - ' + msg);
		    };
	
		    return {
		      rip: rip,
		      toPaths: toPaths,
		      getKeyPaths: getKeyPaths,
		      getDeepValues: getDeepValues,
		      setFilled: setFilled,
		      assert: assert,
		      throwErr: throwErr
		    };
		  }();
	
		  var getDifference = function () {
		    var getDifference = function getDifference(src, dst, isShallow) {
		      var level;
	
		      if (isShallow > 1) level = isShallow;else if (isShallow) level = 1;
	
		      if (level) {
		        src = utils.rip(src, level);
		        dst = utils.rip(dst, level);
		      }
	
		      return compare(src, dst);
		    };
	
		    var compare = function compare(src, dst) {
		      var srcKeys = _underscore2.default.keys(src);
		      var dstKeys = _underscore2.default.keys(dst);
	
		      var keys = _underscore2.default.chain([]).concat(srcKeys).concat(dstKeys).uniq().without('$$hashKey').value();
	
		      return keys.reduce(function (diff, k) {
		        var srcValue = src[k];
		        var dstValue = dst[k];
	
		        if (_underscore2.default.isDate(srcValue) && _underscore2.default.isDate(dstValue)) {
		          if (srcValue.getTime() != dstValue.getTime()) diff[k] = dstValue;
		        }
	
		        if (_underscore2.default.isObject(srcValue) && _underscore2.default.isObject(dstValue)) {
		          var valueDiff = getDifference(srcValue, dstValue);
		          utils.setFilled(diff, k, valueDiff);
		        } else if (srcValue !== dstValue) {
		          diff[k] = dstValue;
		        }
	
		        return diff;
		      }, {});
		    };
	
		    return getDifference;
		  }();
	
		  var getUpdates = function () {
		    var getUpdates = function getUpdates(src, dst, isShallow) {
		      utils.assert(_underscore2.default.isObject(src), 'first argument must be an object');
		      utils.assert(_underscore2.default.isObject(dst), 'second argument must be an object');
	
		      var diff = getDifference(src, dst, isShallow);
		      var paths = utils.toPaths(diff);
	
		      var set = createSet(paths);
		      var unset = createUnset(paths);
		      var pull = createPull(unset);
	
		      var updates = {};
		      utils.setFilled(updates, '$set', set);
		      utils.setFilled(updates, '$unset', unset);
		      utils.setFilled(updates, '$pull', pull);
	
		      return updates;
		    };
	
		    var createSet = function createSet(paths) {
		      var undefinedKeys = getUndefinedKeys(paths);
		      return _underscore2.default.omit(paths, undefinedKeys);
		    };
	
		    var createUnset = function createUnset(paths) {
		      var undefinedKeys = getUndefinedKeys(paths);
		      var unset = _underscore2.default.pick(paths, undefinedKeys);
	
		      return _underscore2.default.reduce(unset, function (result, v, k) {
		        result[k] = true;
		        return result;
		      }, {});
		    };
	
		    var createPull = function createPull(unset) {
		      var arrKeyPaths = _underscore2.default.keys(unset).map(function (k) {
		        var split = k.match(/(.*)\.\d+$/);
		        return split && split[1];
		      });
	
		      return _underscore2.default.compact(arrKeyPaths).reduce(function (pull, k) {
		        pull[k] = null;
		        return pull;
		      }, {});
		    };
	
		    var getUndefinedKeys = function getUndefinedKeys(obj) {
		      return _underscore2.default.keys(obj).filter(function (k) {
		        var v = obj[k];
		        return _underscore2.default.isUndefined(v);
		      });
		    };
	
		    return getUpdates;
		  }();
	
		  module.value('getUpdates', getUpdates);
		})();
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _underscore = __webpack_require__(3);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (typeof _underscore2.default === 'undefined') {
		  if (typeof Package.underscore === 'undefined') {
		    throw new Error('underscore is missing');
		  }
		}
	
		exports.default = _underscore2.default || Package.underscore._;
		module.exports = exports['default'];
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		'use strict'; /*global
		               angular, _, Package
		               */
	
		var _module = angular.module('diffArray', ['getUpdates']);
	
		_module.factory('diffArray', ['getUpdates', function (getUpdates) {
		  var LocalCollection = Package.minimongo.LocalCollection;
		  var idStringify = LocalCollection._idStringify || Package['mongo-id'].MongoID.idStringify;
		  var idParse = LocalCollection._idParse || Package['mongo-id'].MongoID.idParse;
	
		  // Calculates the differences between `lastSeqArray` and
		  // `seqArray` and calls appropriate functions from `callbacks`.
		  // Reuses Minimongo's diff algorithm implementation.
		  // XXX Should be replaced with the original diffArray function here:
		  // https://github.com/meteor/meteor/blob/devel/packages/observe-sequence/observe_sequence.js#L152
		  // When it will become nested as well, tracking here: https://github.com/meteor/meteor/issues/3764
		  function diffArray(lastSeqArray, seqArray, callbacks, preventNestedDiff) {
		    preventNestedDiff = !!preventNestedDiff;
	
		    var diffFn = Package.minimongo.LocalCollection._diffQueryOrderedChanges || Package['diff-sequence'].DiffSequence.diffQueryOrderedChanges;
	
		    var oldObjIds = [];
		    var newObjIds = [];
		    var posOld = {}; // maps from idStringify'd ids
		    var posNew = {}; // ditto
		    var posCur = {};
		    var lengthCur = lastSeqArray.length;
	
		    _underscore2.default.each(seqArray, function (doc, i) {
		      newObjIds.push({ _id: doc._id });
		      posNew[idStringify(doc._id)] = i;
		    });
	
		    _underscore2.default.each(lastSeqArray, function (doc, i) {
		      oldObjIds.push({ _id: doc._id });
		      posOld[idStringify(doc._id)] = i;
		      posCur[idStringify(doc._id)] = i;
		    });
	
		    // Arrays can contain arbitrary objects. We don't diff the
		    // objects. Instead we always fire 'changedAt' callback on every
		    // object. The consumer of `observe-sequence` should deal with
		    // it appropriately.
		    diffFn(oldObjIds, newObjIds, {
		      addedBefore: function addedBefore(id, doc, before) {
		        var position = before ? posCur[idStringify(before)] : lengthCur;
	
		        _underscore2.default.each(posCur, function (pos, id) {
		          if (pos >= position) posCur[id]++;
		        });
	
		        lengthCur++;
		        posCur[idStringify(id)] = position;
	
		        callbacks.addedAt(id, seqArray[posNew[idStringify(id)]], position, before);
		      },
	
		      movedBefore: function movedBefore(id, before) {
		        var prevPosition = posCur[idStringify(id)];
		        var position = before ? posCur[idStringify(before)] : lengthCur - 1;
	
		        _underscore2.default.each(posCur, function (pos, id) {
		          if (pos >= prevPosition && pos <= position) posCur[id]--;else if (pos <= prevPosition && pos >= position) posCur[id]++;
		        });
	
		        posCur[idStringify(id)] = position;
	
		        callbacks.movedTo(id, seqArray[posNew[idStringify(id)]], prevPosition, position, before);
		      },
		      removed: function removed(id) {
		        var prevPosition = posCur[idStringify(id)];
	
		        _underscore2.default.each(posCur, function (pos, id) {
		          if (pos >= prevPosition) posCur[id]--;
		        });
	
		        delete posCur[idStringify(id)];
		        lengthCur--;
	
		        callbacks.removedAt(id, lastSeqArray[posOld[idStringify(id)]], prevPosition);
		      }
		    });
	
		    _underscore2.default.each(posNew, function (pos, idString) {
		      if (!_underscore2.default.has(posOld, idString)) return;
	
		      var id = idParse(idString);
		      var newItem = seqArray[pos] || {};
		      var oldItem = lastSeqArray[posOld[idString]];
		      var updates = getUpdates(oldItem, newItem, preventNestedDiff);
	
		      if (!_underscore2.default.isEmpty(updates)) callbacks.changedAt(id, updates, pos, oldItem);
		    });
		  }
	
		  diffArray.shallow = function (lastSeqArray, seqArray, callbacks) {
		    return diffArray(lastSeqArray, seqArray, callbacks, true);
		  };
	
		  diffArray.deepCopyChanges = function (oldItem, newItem) {
		    var setDiff = getUpdates(oldItem, newItem).$set;
	
		    _underscore2.default.each(setDiff, function (v, deepKey) {
		      setDeep(oldItem, deepKey, v);
		    });
		  };
	
		  diffArray.deepCopyRemovals = function (oldItem, newItem) {
		    var unsetDiff = getUpdates(oldItem, newItem).$unset;
	
		    _underscore2.default.each(unsetDiff, function (v, deepKey) {
		      unsetDeep(oldItem, deepKey);
		    });
		  };
	
		  // Finds changes between two collections
		  diffArray.getChanges = function (newCollection, oldCollection, diffMethod) {
		    var changes = { added: [], removed: [], changed: [] };
	
		    diffMethod(oldCollection, newCollection, {
		      addedAt: function addedAt(id, item, index) {
		        changes.added.push({ item: item, index: index });
		      },
	
		      removedAt: function removedAt(id, item, index) {
		        changes.removed.push({ item: item, index: index });
		      },
	
		      changedAt: function changedAt(id, updates, index, oldItem) {
		        changes.changed.push({ selector: id, modifier: updates });
		      },
	
		      movedTo: function movedTo(id, item, fromIndex, toIndex) {
		        // XXX do we need this?
		      }
		    });
	
		    return changes;
		  };
	
		  var setDeep = function setDeep(obj, deepKey, v) {
		    var split = deepKey.split('.');
		    var initialKeys = _underscore2.default.initial(split);
		    var lastKey = _underscore2.default.last(split);
	
		    initialKeys.reduce(function (subObj, k, i) {
		      var nextKey = split[i + 1];
	
		      if (isNumStr(nextKey)) {
		        if (subObj[k] === null) subObj[k] = [];
		        if (subObj[k].length == parseInt(nextKey)) subObj[k].push(null);
		      } else if (subObj[k] === null || !isHash(subObj[k])) {
		        subObj[k] = {};
		      }
	
		      return subObj[k];
		    }, obj);
	
		    var deepObj = getDeep(obj, initialKeys);
		    deepObj[lastKey] = v;
		    return v;
		  };
	
		  var unsetDeep = function unsetDeep(obj, deepKey) {
		    var split = deepKey.split('.');
		    var initialKeys = _underscore2.default.initial(split);
		    var lastKey = _underscore2.default.last(split);
		    var deepObj = getDeep(obj, initialKeys);
	
		    if (_underscore2.default.isArray(deepObj) && isNumStr(lastKey)) return !!deepObj.splice(lastKey, 1);else return delete deepObj[lastKey];
		  };
	
		  var getDeep = function getDeep(obj, keys) {
		    return keys.reduce(function (subObj, k) {
		      return subObj[k];
		    }, obj);
		  };
	
		  var isHash = function isHash(obj) {
		    return _underscore2.default.isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
		  };
	
		  var isNumStr = function isNumStr(str) {
		    return str.match(/^\d+$/);
		  };
	
		  return diffArray;
		}]);
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		'use strict';
	
		angular.module('angular-meteor.settings', []).constant('$angularMeteorSettings', {
		  suppressWarnings: true
		});
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
	
		angular.module('angular-meteor.ironrouter', []).run(['$compile', '$document', '$rootScope', function ($compile, $document, $rootScope) {
		  var Router = (Package['iron:router'] || {}).Router;
		  if (!Router) return;
	
		  var isLoaded = false;
	
		  // Recompile after iron:router builds page
		  Router.onAfterAction(function (req, res, next) {
		    Tracker.afterFlush(function () {
		      if (isLoaded) return;
		      $compile($document)($rootScope);
		      if (!$rootScope.$$phase) $rootScope.$apply();
		      isLoaded = true;
		    });
		  });
		}]);
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*global
		                                                                                                                                                                                                                                                   angular, _, Tracker, EJSON, FS, Mongo
		                                                                                                                                                                                                                                                   */
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		'use strict';
	
		var angularMeteorUtils = angular.module('angular-meteor.utils', ['angular-meteor.settings']);
	
		angularMeteorUtils.service('$meteorUtils', ['$q', '$timeout', '$angularMeteorSettings', function ($q, $timeout, $angularMeteorSettings) {
	
		  var self = this;
	
		  this.autorun = function (scope, fn) {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.utils.autorun] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! For more info: http://www.angular-meteor.com/api/1.3.6/autorun. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		    // wrapping around Deps.autorun
		    var comp = Tracker.autorun(function (c) {
		      fn(c);
		      // this is run immediately for the first call
		      // but after that, we need to $apply to start Angular digest
		      if (!c.firstRun) $timeout(angular.noop, 0);
		    });
	
		    // stop autorun when scope is destroyed
		    scope.$on('$destroy', function () {
		      comp.stop();
		    });
	
		    // return autorun object so that it can be stopped manually
		    return comp;
		  };
	
		  // Borrowed from angularFire
		  // https://github.com/firebase/angularfire/blob/master/src/utils.js#L445-L454
		  this.stripDollarPrefixedKeys = function (data) {
		    if (!_underscore2.default.isObject(data) || data instanceof Date || data instanceof File || EJSON.toJSONValue(data).$type === 'oid' || (typeof FS === 'undefined' ? 'undefined' : _typeof(FS)) === 'object' && data instanceof FS.File) return data;
	
		    var out = _underscore2.default.isArray(data) ? [] : {};
	
		    _underscore2.default.each(data, function (v, k) {
		      if (typeof k !== 'string' || k.charAt(0) !== '$') out[k] = self.stripDollarPrefixedKeys(v);
		    });
	
		    return out;
		  };
	
		  // Returns a callback which fulfills promise
		  this.fulfill = function (deferred, boundError, boundResult) {
		    return function (err, result) {
		      if (err) deferred.reject(boundError == null ? err : boundError);else if (typeof boundResult == "function") deferred.resolve(boundResult == null ? result : boundResult(result));else deferred.resolve(boundResult == null ? result : boundResult);
		    };
		  };
	
		  // creates a function which invokes method with the given arguments and returns a promise
		  this.promissor = function (obj, method) {
		    return function () {
		      var deferred = $q.defer();
		      var fulfill = self.fulfill(deferred);
		      var args = _underscore2.default.toArray(arguments).concat(fulfill);
		      obj[method].apply(obj, args);
		      return deferred.promise;
		    };
		  };
	
		  // creates a $q.all() promise and call digestion loop on fulfillment
		  this.promiseAll = function (promises) {
		    var allPromise = $q.all(promises);
	
		    allPromise.finally(function () {
		      // calls digestion loop with no conflicts
		      $timeout(angular.noop);
		    });
	
		    return allPromise;
		  };
	
		  this.getCollectionByName = function (string) {
		    return Mongo.Collection.get(string);
		  };
	
		  this.findIndexById = function (collection, doc) {
		    var foundDoc = _underscore2.default.find(collection, function (colDoc) {
		      // EJSON.equals used to compare Mongo.ObjectIDs and Strings.
		      return EJSON.equals(colDoc._id, doc._id);
		    });
	
		    return _underscore2.default.indexOf(collection, foundDoc);
		  };
		}]);
	
		angularMeteorUtils.run(['$rootScope', '$meteorUtils', function ($rootScope, $meteorUtils) {
		  Object.getPrototypeOf($rootScope).$meteorAutorun = function (fn) {
		    return $meteorUtils.autorun(this, fn);
		  };
		}]);
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		/*global
		 angular, Meteor
		 */
	
		'use strict';
	
		var angularMeteorSubscribe = angular.module('angular-meteor.subscribe', ['angular-meteor.settings']);
	
		angularMeteorSubscribe.service('$meteorSubscribe', ['$q', '$angularMeteorSettings', function ($q, $angularMeteorSettings) {
	
		  var self = this;
	
		  this._subscribe = function (scope, deferred, args) {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.subscribe] Please note that this module is deprecated since 1.3.0 and will be removed in 1.4.0! Replace it with the new syntax described here: http://www.angular-meteor.com/api/1.3.6/subscribe. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		    var subscription = null;
		    var lastArg = args[args.length - 1];
	
		    // User supplied onStop callback
		    // save it for later use and remove
		    // from subscription arguments
		    if (angular.isObject(lastArg) && angular.isFunction(lastArg.onStop)) {
		      var _onStop = lastArg.onStop;
	
		      args.pop();
		    }
	
		    args.push({
		      onReady: function onReady() {
		        deferred.resolve(subscription);
		      },
		      onStop: function onStop(err) {
		        if (!deferred.promise.$$state.status) {
		          if (err) deferred.reject(err);else deferred.reject(new Meteor.Error("Subscription Stopped", "Subscription stopped by a call to stop method. Either by the client or by the server."));
		        } else if (_onStop)
		          // After promise was resolved or rejected
		          // call user supplied onStop callback.
		          _onStop.apply(this, Array.prototype.slice.call(arguments));
		      }
		    });
	
		    subscription = Meteor.subscribe.apply(scope, args);
	
		    return subscription;
		  };
	
		  this.subscribe = function () {
		    var deferred = $q.defer();
		    var args = Array.prototype.slice.call(arguments);
		    var subscription = null;
	
		    self._subscribe(this, deferred, args);
	
		    return deferred.promise;
		  };
		}]);
	
		angularMeteorSubscribe.run(['$rootScope', '$q', '$meteorSubscribe', function ($rootScope, $q, $meteorSubscribe) {
		  Object.getPrototypeOf($rootScope).$meteorSubscribe = function () {
		    var deferred = $q.defer();
		    var args = Array.prototype.slice.call(arguments);
	
		    var subscription = $meteorSubscribe._subscribe(this, deferred, args);
	
		    this.$on('$destroy', function () {
		      subscription.stop();
		    });
	
		    return deferred.promise;
		  };
		}]);
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		'use strict'; /*global
		               angular, _, Tracker, check, Match, Mongo
		               */
	
		var angularMeteorCollection = angular.module('angular-meteor.collection', ['angular-meteor.stopper', 'angular-meteor.subscribe', 'angular-meteor.utils', 'diffArray', 'angular-meteor.settings']);
	
		// The reason angular meteor collection is a factory function and not something
		// that inherit from array comes from here:
		// http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/
		// We went with the direct extensions approach.
		angularMeteorCollection.factory('AngularMeteorCollection', ['$q', '$meteorSubscribe', '$meteorUtils', '$rootScope', '$timeout', 'diffArray', '$angularMeteorSettings', function ($q, $meteorSubscribe, $meteorUtils, $rootScope, $timeout, diffArray, $angularMeteorSettings) {
	
		  function AngularMeteorCollection(curDefFunc, collection, diffArrayFunc, autoClientSave) {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.$meteorCollection] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! For more info: http://www.angular-meteor.com/api/1.3.0/meteorCollection. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		    var data = [];
		    // Server backup data to evaluate what changes come from client
		    // after each server update.
		    data._serverBackup = [];
		    // Array differ function.
		    data._diffArrayFunc = diffArrayFunc;
		    // Handler of the cursor observer.
		    data._hObserve = null;
		    // On new cursor autorun handler
		    // (autorun for reactive variables).
		    data._hNewCurAutorun = null;
		    // On new data autorun handler
		    // (autorun for cursor.fetch).
		    data._hDataAutorun = null;
	
		    if (angular.isDefined(collection)) {
		      data.$$collection = collection;
		    } else {
		      var cursor = curDefFunc();
		      data.$$collection = $meteorUtils.getCollectionByName(cursor.collection.name);
		    }
	
		    _underscore2.default.extend(data, AngularMeteorCollection);
		    data._startCurAutorun(curDefFunc, autoClientSave);
	
		    return data;
		  }
	
		  AngularMeteorCollection._startCurAutorun = function (curDefFunc, autoClientSave) {
		    var self = this;
	
		    self._hNewCurAutorun = Tracker.autorun(function () {
		      // When the reactive func gets recomputated we need to stop any previous
		      // observeChanges.
		      Tracker.onInvalidate(function () {
		        self._stopCursor();
		      });
	
		      if (autoClientSave) self._setAutoClientSave();
		      self._updateCursor(curDefFunc(), autoClientSave);
		    });
		  };
	
		  AngularMeteorCollection.subscribe = function () {
		    $meteorSubscribe.subscribe.apply(this, arguments);
		    return this;
		  };
	
		  AngularMeteorCollection.save = function (docs, useUnsetModifier) {
		    // save whole collection
		    if (!docs) docs = this;
		    // save single doc
		    docs = [].concat(docs);
	
		    var promises = docs.map(function (doc) {
		      return this._upsertDoc(doc, useUnsetModifier);
		    }, this);
	
		    return $meteorUtils.promiseAll(promises);
		  };
	
		  AngularMeteorCollection._upsertDoc = function (doc, useUnsetModifier) {
		    var deferred = $q.defer();
		    var collection = this.$$collection;
		    var createFulfill = _underscore2.default.partial($meteorUtils.fulfill, deferred, null);
	
		    // delete $$hashkey
		    doc = $meteorUtils.stripDollarPrefixedKeys(doc);
		    var docId = doc._id;
		    var isExist = collection.findOne(docId);
	
		    // update
		    if (isExist) {
		      // Deletes _id property (from the copy) so that
		      // it can be $set using update.
		      delete doc._id;
		      var modifier = useUnsetModifier ? { $unset: doc } : { $set: doc };
		      // NOTE: do not use #upsert() method, since it does not exist in some collections
		      collection.update(docId, modifier, createFulfill(function () {
		        return { _id: docId, action: 'updated' };
		      }));
		    }
		    // insert
		    else {
		        collection.insert(doc, createFulfill(function (id) {
		          return { _id: id, action: 'inserted' };
		        }));
		      }
	
		    return deferred.promise;
		  };
	
		  // performs $pull operations parallely.
		  // used for handling splice operations returned from getUpdates() to prevent conflicts.
		  // see issue: https://github.com/Urigo/angular-meteor/issues/793
		  AngularMeteorCollection._updateDiff = function (selector, update, callback) {
		    callback = callback || angular.noop;
		    var setters = _underscore2.default.omit(update, '$pull');
		    var updates = [setters];
	
		    _underscore2.default.each(update.$pull, function (pull, prop) {
		      var puller = {};
		      puller[prop] = pull;
		      updates.push({ $pull: puller });
		    });
	
		    this._updateParallel(selector, updates, callback);
		  };
	
		  // performs each update operation parallely
		  AngularMeteorCollection._updateParallel = function (selector, updates, callback) {
		    var self = this;
		    var done = _underscore2.default.after(updates.length, callback);
	
		    var next = function next(err, affectedDocsNum) {
		      if (err) return callback(err);
		      done(null, affectedDocsNum);
		    };
	
		    _underscore2.default.each(updates, function (update) {
		      self.$$collection.update(selector, update, next);
		    });
		  };
	
		  AngularMeteorCollection.remove = function (keyOrDocs) {
		    var keys;
	
		    // remove whole collection
		    if (!keyOrDocs) {
		      keys = _underscore2.default.pluck(this, '_id');
		    }
		    // remove docs
		    else {
		        keyOrDocs = [].concat(keyOrDocs);
	
		        keys = _underscore2.default.map(keyOrDocs, function (keyOrDoc) {
		          return keyOrDoc._id || keyOrDoc;
		        });
		      }
	
		    // Checks if all keys are correct.
		    check(keys, [Match.OneOf(String, Mongo.ObjectID)]);
	
		    var promises = keys.map(function (key) {
		      return this._removeDoc(key);
		    }, this);
	
		    return $meteorUtils.promiseAll(promises);
		  };
	
		  AngularMeteorCollection._removeDoc = function (id) {
		    var deferred = $q.defer();
		    var collection = this.$$collection;
		    var fulfill = $meteorUtils.fulfill(deferred, null, { _id: id, action: 'removed' });
		    collection.remove(id, fulfill);
		    return deferred.promise;
		  };
	
		  AngularMeteorCollection._updateCursor = function (cursor, autoClientSave) {
		    var self = this;
		    // XXX - consider adding an option for a non-orderd result for faster performance
		    if (self._hObserve) self._stopObserving();
	
		    self._hObserve = cursor.observe({
		      addedAt: function addedAt(doc, atIndex) {
		        self.splice(atIndex, 0, doc);
		        self._serverBackup.splice(atIndex, 0, doc);
		        self._setServerUpdateMode();
		      },
	
		      changedAt: function changedAt(doc, oldDoc, atIndex) {
		        diffArray.deepCopyChanges(self[atIndex], doc);
		        diffArray.deepCopyRemovals(self[atIndex], doc);
		        self._serverBackup[atIndex] = self[atIndex];
		        self._setServerUpdateMode();
		      },
	
		      movedTo: function movedTo(doc, fromIndex, toIndex) {
		        self.splice(fromIndex, 1);
		        self.splice(toIndex, 0, doc);
		        self._serverBackup.splice(fromIndex, 1);
		        self._serverBackup.splice(toIndex, 0, doc);
		        self._setServerUpdateMode();
		      },
	
		      removedAt: function removedAt(oldDoc) {
		        var removedIndex = $meteorUtils.findIndexById(self, oldDoc);
	
		        if (removedIndex != -1) {
		          self.splice(removedIndex, 1);
		          self._serverBackup.splice(removedIndex, 1);
		          self._setServerUpdateMode();
		        } else {
		          // If it's been removed on client then it's already not in collection
		          // itself but still is in the _serverBackup.
		          removedIndex = $meteorUtils.findIndexById(self._serverBackup, oldDoc);
	
		          if (removedIndex != -1) {
		            self._serverBackup.splice(removedIndex, 1);
		          }
		        }
		      }
		    });
	
		    self._hDataAutorun = Tracker.autorun(function () {
		      cursor.fetch();
		      if (self._serverMode) self._unsetServerUpdateMode(autoClientSave);
		    });
		  };
	
		  AngularMeteorCollection._stopObserving = function () {
		    this._hObserve.stop();
		    this._hDataAutorun.stop();
		    delete this._serverMode;
		    delete this._hUnsetTimeout;
		  };
	
		  AngularMeteorCollection._setServerUpdateMode = function (name) {
		    this._serverMode = true;
		    // To simplify server update logic, we don't follow
		    // updates from the client at the same time.
		    this._unsetAutoClientSave();
		  };
	
		  // Here we use $timeout to combine multiple updates that go
		  // each one after another.
		  AngularMeteorCollection._unsetServerUpdateMode = function (autoClientSave) {
		    var self = this;
	
		    if (self._hUnsetTimeout) {
		      $timeout.cancel(self._hUnsetTimeout);
		      self._hUnsetTimeout = null;
		    }
	
		    self._hUnsetTimeout = $timeout(function () {
		      self._serverMode = false;
		      // Finds updates that was potentially done from the client side
		      // and saves them.
		      var changes = diffArray.getChanges(self, self._serverBackup, self._diffArrayFunc);
		      self._saveChanges(changes);
		      // After, continues following client updates.
		      if (autoClientSave) self._setAutoClientSave();
		    }, 0);
		  };
	
		  AngularMeteorCollection.stop = function () {
		    this._stopCursor();
		    this._hNewCurAutorun.stop();
		  };
	
		  AngularMeteorCollection._stopCursor = function () {
		    this._unsetAutoClientSave();
	
		    if (this._hObserve) {
		      this._hObserve.stop();
		      this._hDataAutorun.stop();
		    }
	
		    this.splice(0);
		    this._serverBackup.splice(0);
		  };
	
		  AngularMeteorCollection._unsetAutoClientSave = function (name) {
		    if (this._hRegAutoBind) {
		      this._hRegAutoBind();
		      this._hRegAutoBind = null;
		    }
		  };
	
		  AngularMeteorCollection._setAutoClientSave = function () {
		    var self = this;
	
		    // Always unsets auto save to keep only one $watch handler.
		    self._unsetAutoClientSave();
	
		    self._hRegAutoBind = $rootScope.$watch(function () {
		      return self;
		    }, function (nItems, oItems) {
		      if (nItems === oItems) return;
	
		      var changes = diffArray.getChanges(self, oItems, self._diffArrayFunc);
		      self._unsetAutoClientSave();
		      self._saveChanges(changes);
		      self._setAutoClientSave();
		    }, true);
		  };
	
		  AngularMeteorCollection._saveChanges = function (changes) {
		    var self = this;
	
		    // Saves added documents
		    // Using reversed iteration to prevent indexes from changing during splice
		    var addedDocs = changes.added.reverse().map(function (descriptor) {
		      self.splice(descriptor.index, 1);
		      return descriptor.item;
		    });
	
		    if (addedDocs.length) self.save(addedDocs);
	
		    // Removes deleted documents
		    var removedDocs = changes.removed.map(function (descriptor) {
		      return descriptor.item;
		    });
	
		    if (removedDocs.length) self.remove(removedDocs);
	
		    // Updates changed documents
		    changes.changed.forEach(function (descriptor) {
		      self._updateDiff(descriptor.selector, descriptor.modifier);
		    });
		  };
	
		  return AngularMeteorCollection;
		}]);
	
		angularMeteorCollection.factory('$meteorCollectionFS', ['$meteorCollection', 'diffArray', '$angularMeteorSettings', function ($meteorCollection, diffArray, $angularMeteorSettings) {
		  function $meteorCollectionFS(reactiveFunc, autoClientSave, collection) {
	
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.$meteorCollectionFS] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! For more info: http://www.angular-meteor.com/api/1.3.0/files. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
		    return new $meteorCollection(reactiveFunc, autoClientSave, collection, diffArray.shallow);
		  }
	
		  return $meteorCollectionFS;
		}]);
	
		angularMeteorCollection.factory('$meteorCollection', ['AngularMeteorCollection', '$rootScope', 'diffArray', function (AngularMeteorCollection, $rootScope, diffArray) {
		  function $meteorCollection(reactiveFunc, autoClientSave, collection, diffFn) {
		    // Validate parameters
		    if (!reactiveFunc) {
		      throw new TypeError('The first argument of $meteorCollection is undefined.');
		    }
	
		    if (!(angular.isFunction(reactiveFunc) || angular.isFunction(reactiveFunc.find))) {
		      throw new TypeError('The first argument of $meteorCollection must be a function or ' + 'a have a find function property.');
		    }
	
		    if (!angular.isFunction(reactiveFunc)) {
		      collection = angular.isDefined(collection) ? collection : reactiveFunc;
		      reactiveFunc = _underscore2.default.bind(reactiveFunc.find, reactiveFunc);
		    }
	
		    // By default auto save - true.
		    autoClientSave = angular.isDefined(autoClientSave) ? autoClientSave : true;
		    diffFn = diffFn || diffArray;
		    return new AngularMeteorCollection(reactiveFunc, collection, diffFn, autoClientSave);
		  }
	
		  return $meteorCollection;
		}]);
	
		angularMeteorCollection.run(['$rootScope', '$meteorCollection', '$meteorCollectionFS', '$meteorStopper', function ($rootScope, $meteorCollection, $meteorCollectionFS, $meteorStopper) {
		  var scopeProto = Object.getPrototypeOf($rootScope);
		  scopeProto.$meteorCollection = $meteorStopper($meteorCollection);
		  scopeProto.$meteorCollectionFS = $meteorStopper($meteorCollectionFS);
		}]);
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		'use strict'; /*global
		                angular, _, Mongo
		              */
	
		var angularMeteorObject = angular.module('angular-meteor.object', ['angular-meteor.utils', 'angular-meteor.subscribe', 'angular-meteor.collection', 'getUpdates', 'diffArray', 'angular-meteor.settings']);
	
		angularMeteorObject.factory('AngularMeteorObject', ['$q', '$meteorSubscribe', '$meteorUtils', 'diffArray', 'getUpdates', 'AngularMeteorCollection', '$angularMeteorSettings', function ($q, $meteorSubscribe, $meteorUtils, diffArray, getUpdates, AngularMeteorCollection, $angularMeteorSettings) {
	
		  // A list of internals properties to not watch for, nor pass to the Document on update and etc.
		  AngularMeteorObject.$$internalProps = ['$$collection', '$$options', '$$id', '$$hashkey', '$$internalProps', '$$scope', 'bind', 'save', 'reset', 'subscribe', 'stop', 'autorunComputation', 'unregisterAutoBind', 'unregisterAutoDestroy', 'getRawObject', '_auto', '_setAutos', '_eventEmitter', '_serverBackup', '_updateDiff', '_updateParallel', '_getId'];
	
		  function AngularMeteorObject(collection, selector, options) {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.$meteorObject] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! For more info: http://www.angular-meteor.com/api/1.3.0/meteorObject. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
		    // Make data not be an object so we can extend it to preserve
		    // Collection Helpers and the like
		    var helpers = collection._helpers;
		    var data = _underscore2.default.isFunction(helpers) ? Object.create(helpers.prototype) : {};
		    var doc = collection.findOne(selector, options);
		    var collectionExtension = _underscore2.default.pick(AngularMeteorCollection, '_updateParallel');
		    _underscore2.default.extend(data, doc);
		    _underscore2.default.extend(data, AngularMeteorObject);
		    _underscore2.default.extend(data, collectionExtension);
	
		    // Omit options that may spoil document finding
		    data.$$options = _underscore2.default.omit(options, 'skip', 'limit');
		    data.$$collection = collection;
		    data.$$id = data._getId(selector);
		    data._serverBackup = doc || {};
	
		    return data;
		  }
	
		  AngularMeteorObject.getRawObject = function () {
		    return angular.copy(_underscore2.default.omit(this, this.$$internalProps));
		  };
	
		  AngularMeteorObject.subscribe = function () {
		    $meteorSubscribe.subscribe.apply(this, arguments);
		    return this;
		  };
	
		  AngularMeteorObject.save = function (custom) {
		    var deferred = $q.defer();
		    var collection = this.$$collection;
		    var createFulfill = _underscore2.default.partial($meteorUtils.fulfill, deferred, null);
		    var oldDoc = collection.findOne(this.$$id);
		    var mods;
	
		    // update
		    if (oldDoc) {
		      if (custom) mods = { $set: custom };else {
		        mods = getUpdates(oldDoc, this.getRawObject());
		        // If there are no updates, there is nothing to do here, returning
		        if (_underscore2.default.isEmpty(mods)) {
		          return $q.when({ action: 'updated' });
		        }
		      }
	
		      // NOTE: do not use #upsert() method, since it does not exist in some collections
		      this._updateDiff(mods, createFulfill({ action: 'updated' }));
		    }
		    // insert
		    else {
		        if (custom) mods = _underscore2.default.clone(custom);else mods = this.getRawObject();
	
		        mods._id = mods._id || this.$$id;
		        collection.insert(mods, createFulfill({ action: 'inserted' }));
		      }
	
		    return deferred.promise;
		  };
	
		  AngularMeteorObject._updateDiff = function (update, callback) {
		    var selector = this.$$id;
		    AngularMeteorCollection._updateDiff.call(this, selector, update, callback);
		  };
	
		  AngularMeteorObject.reset = function (keepClientProps) {
		    var self = this;
		    var options = this.$$options;
		    var id = this.$$id;
		    var doc = this.$$collection.findOne(id, options);
	
		    if (doc) {
		      // extend SubObject
		      var docKeys = _underscore2.default.keys(doc);
		      var docExtension = _underscore2.default.pick(doc, docKeys);
		      var clientProps;
	
		      _underscore2.default.extend(self, docExtension);
		      _underscore2.default.extend(self._serverBackup, docExtension);
	
		      if (keepClientProps) {
		        clientProps = _underscore2.default.intersection(_underscore2.default.keys(self), _underscore2.default.keys(self._serverBackup));
		      } else {
		        clientProps = _underscore2.default.keys(self);
		      }
	
		      var serverProps = _underscore2.default.keys(doc);
		      var removedKeys = _underscore2.default.difference(clientProps, serverProps, self.$$internalProps);
	
		      removedKeys.forEach(function (prop) {
		        delete self[prop];
		        delete self._serverBackup[prop];
		      });
		    } else {
		      _underscore2.default.keys(this.getRawObject()).forEach(function (prop) {
		        delete self[prop];
		      });
	
		      self._serverBackup = {};
		    }
		  };
	
		  AngularMeteorObject.stop = function () {
		    if (this.unregisterAutoDestroy) this.unregisterAutoDestroy();
	
		    if (this.unregisterAutoBind) this.unregisterAutoBind();
	
		    if (this.autorunComputation && this.autorunComputation.stop) this.autorunComputation.stop();
		  };
	
		  AngularMeteorObject._getId = function (selector) {
		    var options = _underscore2.default.extend({}, this.$$options, {
		      fields: { _id: 1 },
		      reactive: false,
		      transform: null
		    });
	
		    var doc = this.$$collection.findOne(selector, options);
	
		    if (doc) return doc._id;
		    if (selector instanceof Mongo.ObjectID) return selector;
		    if (_underscore2.default.isString(selector)) return selector;
		    return new Mongo.ObjectID();
		  };
	
		  return AngularMeteorObject;
		}]);
	
		angularMeteorObject.factory('$meteorObject', ['$rootScope', '$meteorUtils', 'getUpdates', 'AngularMeteorObject', function ($rootScope, $meteorUtils, getUpdates, AngularMeteorObject) {
		  function $meteorObject(collection, id, auto, options) {
		    // Validate parameters
		    if (!collection) {
		      throw new TypeError("The first argument of $meteorObject is undefined.");
		    }
	
		    if (!angular.isFunction(collection.findOne)) {
		      throw new TypeError("The first argument of $meteorObject must be a function or a have a findOne function property.");
		    }
	
		    var data = new AngularMeteorObject(collection, id, options);
		    // Making auto default true - http://stackoverflow.com/a/15464208/1426570
		    data._auto = auto !== false;
		    _underscore2.default.extend(data, $meteorObject);
		    data._setAutos();
		    return data;
		  }
	
		  $meteorObject._setAutos = function () {
		    var self = this;
	
		    this.autorunComputation = $meteorUtils.autorun($rootScope, function () {
		      self.reset(true);
		    });
	
		    // Deep watches the model and performs autobind
		    this.unregisterAutoBind = this._auto && $rootScope.$watch(function () {
		      return self.getRawObject();
		    }, function (item, oldItem) {
		      if (item !== oldItem) self.save();
		    }, true);
	
		    this.unregisterAutoDestroy = $rootScope.$on('$destroy', function () {
		      if (self && self.stop) self.pop();
		    });
		  };
	
		  return $meteorObject;
		}]);
	
		angularMeteorObject.run(['$rootScope', '$meteorObject', '$meteorStopper', function ($rootScope, $meteorObject, $meteorStopper) {
		  var scopeProto = Object.getPrototypeOf($rootScope);
		  scopeProto.$meteorObject = $meteorStopper($meteorObject);
		}]);
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		'use strict'; /*global
		               angular, _, Package, Meteor
		               */
	
		var angularMeteorUser = angular.module('angular-meteor.user', ['angular-meteor.utils', 'angular-meteor.core', 'angular-meteor.settings']);
	
		// requires package 'accounts-password'
		angularMeteorUser.service('$meteorUser', ['$rootScope', '$meteorUtils', '$q', '$angularMeteorSettings', function ($rootScope, $meteorUtils, $q, $angularMeteorSettings) {
	
		  var pack = Package['accounts-base'];
		  if (!pack) return;
	
		  var self = this;
		  var Accounts = pack.Accounts;
	
		  this.waitForUser = function () {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.waitForUser] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! http://info.meteor.com/blog/angular-meteor-1.3. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		    var deferred = $q.defer();
	
		    $meteorUtils.autorun($rootScope, function () {
		      if (!Meteor.loggingIn()) deferred.resolve(Meteor.user());
		    }, true);
	
		    return deferred.promise;
		  };
	
		  this.requireUser = function () {
		    if (!$angularMeteorSettings.suppressWarnings) {
		      console.warn('[angular-meteor.requireUser] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! http://info.meteor.com/blog/angular-meteor-1.3. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
		    }
	
		    var deferred = $q.defer();
	
		    $meteorUtils.autorun($rootScope, function () {
		      if (!Meteor.loggingIn()) {
		        if (Meteor.user() === null) deferred.reject("AUTH_REQUIRED");else deferred.resolve(Meteor.user());
		      }
		    }, true);
	
		    return deferred.promise;
		  };
	
		  this.requireValidUser = function (validatorFn) {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.requireValidUser] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! http://info.meteor.com/blog/angular-meteor-1.3. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		    return self.requireUser(true).then(function (user) {
		      var valid = validatorFn(user);
	
		      if (valid === true) return user;else if (typeof valid === "string") return $q.reject(valid);else return $q.reject("FORBIDDEN");
		    });
		  };
	
		  this.loginWithPassword = $meteorUtils.promissor(Meteor, 'loginWithPassword');
		  this.createUser = $meteorUtils.promissor(Accounts, 'createUser');
		  this.changePassword = $meteorUtils.promissor(Accounts, 'changePassword');
		  this.forgotPassword = $meteorUtils.promissor(Accounts, 'forgotPassword');
		  this.resetPassword = $meteorUtils.promissor(Accounts, 'resetPassword');
		  this.verifyEmail = $meteorUtils.promissor(Accounts, 'verifyEmail');
		  this.logout = $meteorUtils.promissor(Meteor, 'logout');
		  this.logoutOtherClients = $meteorUtils.promissor(Meteor, 'logoutOtherClients');
		  this.loginWithFacebook = $meteorUtils.promissor(Meteor, 'loginWithFacebook');
		  this.loginWithTwitter = $meteorUtils.promissor(Meteor, 'loginWithTwitter');
		  this.loginWithGoogle = $meteorUtils.promissor(Meteor, 'loginWithGoogle');
		  this.loginWithGithub = $meteorUtils.promissor(Meteor, 'loginWithGithub');
		  this.loginWithMeteorDeveloperAccount = $meteorUtils.promissor(Meteor, 'loginWithMeteorDeveloperAccount');
		  this.loginWithMeetup = $meteorUtils.promissor(Meteor, 'loginWithMeetup');
		  this.loginWithWeibo = $meteorUtils.promissor(Meteor, 'loginWithWeibo');
		}]);
	
		angularMeteorUser.run(['$rootScope', '$angularMeteorSettings', '$$Core', function ($rootScope, $angularMeteorSettings, $$Core) {
	
		  var ScopeProto = Object.getPrototypeOf($rootScope);
		  _underscore2.default.extend(ScopeProto, $$Core);
	
		  $rootScope.autorun(function () {
		    if (!Meteor.user) return;
		    $rootScope.currentUser = Meteor.user();
		    $rootScope.loggingIn = Meteor.loggingIn();
		  });
		}]);
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		'use strict'; /*global
		               angular, _, Meteor
		               */
	
		var angularMeteorMethods = angular.module('angular-meteor.methods', ['angular-meteor.utils', 'angular-meteor.settings']);
	
		angularMeteorMethods.service('$meteorMethods', ['$q', '$meteorUtils', '$angularMeteorSettings', function ($q, $meteorUtils, $angularMeteorSettings) {
		  this.call = function () {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.$meteor.call] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! For more info: http://www.angular-meteor.com/api/1.3.0/methods. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		    var deferred = $q.defer();
		    var fulfill = $meteorUtils.fulfill(deferred);
		    var args = _underscore2.default.toArray(arguments).concat(fulfill);
		    Meteor.call.apply(this, args);
		    return deferred.promise;
		  };
		}]);
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		/*global
		 angular, Session
		 */
	
		'use strict';
	
		var angularMeteorSession = angular.module('angular-meteor.session', ['angular-meteor.utils', 'angular-meteor.settings']);
	
		angularMeteorSession.factory('$meteorSession', ['$meteorUtils', '$parse', '$angularMeteorSettings', function ($meteorUtils, $parse, $angularMeteorSettings) {
		  return function (session) {
	
		    return {
	
		      bind: function bind(scope, model) {
		        if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.session.bind] Please note that this method is deprecated since 1.3.0 and will be removed in 1.4.0! http://www.angular-meteor.com/api/1.3.0/session. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		        var getter = $parse(model);
		        var setter = getter.assign;
		        $meteorUtils.autorun(scope, function () {
		          setter(scope, Session.get(session));
		        });
	
		        scope.$watch(model, function (newItem, oldItem) {
		          Session.set(session, getter(scope));
		        }, true);
		      }
		    };
		  };
		}]);
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		/*global
		 angular, Package
		 */
	
		'use strict';
	
		var angularMeteorCamera = angular.module('angular-meteor.camera', ['angular-meteor.utils', 'angular-meteor.settings']);
	
		// requires package 'mdg:camera'
		angularMeteorCamera.service('$meteorCamera', ['$q', '$meteorUtils', '$angularMeteorSettings', function ($q, $meteorUtils, $angularMeteorSettings) {
		  if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.camera] Please note that this module has moved to a separate package and is deprecated since 1.3.0 and will be removed in 1.4.0! For more info: http://www.angular-meteor.com/api/1.3.0/camera. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
		  var pack = Package['mdg:camera'];
		  if (!pack) return;
	
		  var MeteorCamera = pack.MeteorCamera;
	
		  this.getPicture = function (options) {
		    if (!$angularMeteorSettings.suppressWarnings) console.warn('[angular-meteor.camera] Please note that this module has moved to a separate package and is deprecated since 1.3.0 and will be removed in 1.4.0! For more info: http://www.angular-meteor.com/api/1.3.0/camera. You can disable this warning by following this guide http://www.angular-meteor.com/api/1.3.6/settings');
	
		    options = options || {};
		    var deferred = $q.defer();
		    MeteorCamera.getPicture(options, $meteorUtils.fulfill(deferred));
		    return deferred.promise;
		  };
		}]);
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		/*global
		 angular
		 */
	
		'use strict';
	
		var angularMeteorStopper = angular.module('angular-meteor.stopper', ['angular-meteor.subscribe']);
	
		angularMeteorStopper.factory('$meteorStopper', ['$q', '$meteorSubscribe', function ($q, $meteorSubscribe) {
		  function $meteorStopper($meteorEntity) {
		    return function () {
		      var args = Array.prototype.slice.call(arguments);
		      var meteorEntity = $meteorEntity.apply(this, args);
	
		      angular.extend(meteorEntity, $meteorStopper);
		      meteorEntity.$$scope = this;
	
		      this.$on('$destroy', function () {
		        meteorEntity.stop();
		        if (meteorEntity.subscription) meteorEntity.subscription.stop();
		      });
	
		      return meteorEntity;
		    };
		  }
	
		  $meteorStopper.subscribe = function () {
		    var args = Array.prototype.slice.call(arguments);
		    this.subscription = $meteorSubscribe._subscribe(this.$$scope, $q.defer(), args);
		    return this;
		  };
	
		  return $meteorStopper;
		}]);
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.utils = exports.name = undefined;
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var name = exports.name = 'angular-meteor.utilities';
		var utils = exports.utils = '$$utils';
	
		angular.module(name, [])
	
		/*
		  A utility service which is provided with general utility functions
		 */
		.service(utils, ['$rootScope', function ($rootScope) {
		  var self = this;
	
		  // Checks if an object is a cursor
		  this.isCursor = function (obj) {
		    return obj instanceof Meteor.Collection.Cursor;
		  };
	
		  // Cheecks if an object is a scope
		  this.isScope = function (obj) {
		    return obj instanceof $rootScope.constructor;
		  };
	
		  // Checks if an object is a view model
		  this.isViewModel = function (obj) {
		    return _underscore2.default.isObject(obj) && obj.$$dependencies;
		  };
	
		  // Checks if two objects are siblings
		  this.areSiblings = function (obj1, obj2) {
		    return _underscore2.default.isObject(obj1) && _underscore2.default.isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
		  };
	
		  // Binds function into a scpecified context. If an object is provided, will bind every
		  // value in the object which is a function. If a tap function is provided, it will be
		  // called right after the function has been invoked.
		  this.bind = function (fn, context, tap) {
		    tap = _underscore2.default.isFunction(tap) ? tap : angular.noop;
		    if (_underscore2.default.isFunction(fn)) return bindFn(fn, context, tap);
		    if (_underscore2.default.isObject(fn)) return bindObj(fn, context, tap);
		    return fn;
		  };
	
		  function bindFn(fn, context, tap) {
		    return function () {
		      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		        args[_key] = arguments[_key];
		      }
	
		      var result = fn.apply(context, args);
		      tap.call(context, {
		        result: result,
		        args: args
		      });
		      return result;
		    };
		  }
	
		  function bindObj(obj, context, tap) {
		    return _underscore2.default.keys(obj).reduce(function (bound, k) {
		      bound[k] = self.bind(obj[k], context, tap);
		      return bound;
		    }, {});
		  }
		}]);
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Mixer = exports.name = undefined;
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
		var name = exports.name = 'angular-meteor.mixer';
		var Mixer = exports.Mixer = '$Mixer';
	
		angular.module(name, [])
	
		/*
		  A service which lets us apply mixins into Scope.prototype.
		  The flow is simple. Once we define a mixin, it will be stored in the `$Mixer`,
		  and any time a `ChildScope` prototype is created
		  it will be extended by the `$Mixer`.
		  This concept is good because it keeps our code
		  clean and simple, and easy to extend.
		  So any time we would like to define a new behaviour to our scope,
		  we will just use the `$Mixer` service.
		 */
		.service(Mixer, function () {
		  var _this = this;
	
		  // Used to store method's caller
		  var caller = undefined;
	
		  this._mixins = [];
		  // Apply mixins automatically on specified contexts
		  this._autoExtend = [];
		  this._autoConstruct = [];
	
		  // Adds a new mixin
		  this.mixin = function (mixin) {
		    if (!_underscore2.default.isObject(mixin)) {
		      throw Error('argument 1 must be an object');
		    }
	
		    _this._mixins = _underscore2.default.union(_this._mixins, [mixin]);
		    // Apply mixins to stored contexts
		    _this._autoExtend.forEach(function (context) {
		      return _this._extend(context);
		    });
		    _this._autoConstruct.forEach(function (context) {
		      return _this._construct(context);
		    });
		    return _this;
		  };
	
		  // Removes a mixin. Useful mainly for test purposes
		  this._mixout = function (mixin) {
		    _this._mixins = _underscore2.default.without(_this._mixins, mixin);
		    return _this;
		  };
	
		  // Invoke function mixins with the provided context and arguments
		  this._construct = function (context) {
		    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      args[_key - 1] = arguments[_key];
		    }
	
		    _this._mixins.filter(_underscore2.default.isFunction).forEach(function (mixin) {
		      mixin.call.apply(mixin, [context].concat(args));
		    });
	
		    return context;
		  };
	
		  // Extend prototype with the defined mixins
		  this._extend = function (obj, options) {
		    var _$defaults = _underscore2.default.defaults({}, options, {
		      pattern: /.*/ });
	
		    var pattern = _$defaults.pattern;
		    var context = _$defaults.context;
		    // The patterns of the keys which will be filtered
	
	
		    var mixins = _this._mixins.map(function (mixin) {
		      // Filtering the keys by the specified pattern
		      var keys = _underscore2.default.keys(mixin).filter(function (k) {
		        return k.match(pattern);
		      }).filter(function (k) {
		        return _underscore2.default.isFunction(mixin[k]);
		      });
	
		      return keys.reduce(function (boundMixin, methodName) {
		        var methodHandler = mixin[methodName];
	
		        // Note that this is not an arrow function so we can conserve the conetxt
		        boundMixin[methodName] = function () {
		          // Storing original caller so we will know who actually called the
		          // method event though it is bound to another context
		          var methodContext = context || this;
		          var recentCaller = caller;
		          caller = this;
	
		          try {
		            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		              args[_key2] = arguments[_key2];
		            }
	
		            return methodHandler.apply(methodContext, args);
		          } finally {
		            // No matter what happens, restore variable to the previous one
		            caller = recentCaller;
		          }
		        };
	
		        return boundMixin;
		      }, {});
		    });
	
		    return _underscore2.default.extend.apply(_underscore2.default, [obj].concat(_toConsumableArray(mixins)));
		  };
	
		  // Caller property can not be set
		  Object.defineProperty(this, 'caller', {
		    configurable: true,
		    enumerable: true,
	
		    get: function get() {
		      return caller;
		    }
		  });
		});
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.name = undefined;
	
		var _mixer = __webpack_require__(17);
	
		var name = exports.name = 'angular-meteor.scope';
	
		angular.module(name, [_mixer.name]).run(['$rootScope', _mixer.Mixer, function ($rootScope, $Mixer) {
		  var Scope = $rootScope.constructor;
		  var $new = $rootScope.$new;
	
		  // Apply extensions whether a mixin in defined.
		  // Note that this way mixins which are initialized later
		  // can be applied on rootScope.
		  $Mixer._autoExtend.push(Scope.prototype);
		  $Mixer._autoConstruct.push($rootScope);
	
		  Scope.prototype.$new = function () {
		    var scope = $new.apply(this, arguments);
		    // Apply constructors to newly created scopes
		    return $Mixer._construct(scope);
		  };
		}]);
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Core = exports.name = undefined;
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		var _utils = __webpack_require__(16);
	
		var _mixer = __webpack_require__(17);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
		var name = exports.name = 'angular-meteor.core';
		var Core = exports.Core = '$$Core';
	
		angular.module(name, [_utils.name, _mixer.name])
	
		/*
		  A mixin which provides us with core Meteor functions.
		 */
		.factory(Core, ['$q', _utils.utils, _mixer.Mixer, function ($q, $$utils, $Mixer) {
		  function $$Core() {}
	
		  // Calls Meteor.autorun() which will be digested after each run and automatically destroyed
		  $$Core.autorun = function (fn) {
		    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		    fn = this.$bindToContext($Mixer.caller, fn);
	
		    if (!_underscore2.default.isFunction(fn)) {
		      throw Error('argument 1 must be a function');
		    }
		    if (!_underscore2.default.isObject(options)) {
		      throw Error('argument 2 must be an object');
		    }
	
		    var computation = Tracker.autorun(fn, options);
		    // Reset to a function that will also stop the listener we just added
		    computation.stop = this.$$autoStop(computation);
		    return computation;
		  };
	
		  // Calls Meteor.subscribe() which will be digested after each invokation
		  // and automatically destroyed
		  $$Core.subscribe = function (subName, fn, cb) {
		    fn = this.$bindToContext($Mixer.caller, fn || angular.noop);
		    cb = cb ? this.$bindToContext($Mixer.caller, cb) : angular.noop;
	
		    // Additional callbacks specific for this library
		    // onStart - right after Meteor.subscribe()
		    var hooks = {
		      onStart: angular.noop
		    };
	
		    if (!_underscore2.default.isString(subName)) {
		      throw Error('argument 1 must be a string');
		    }
		    if (!_underscore2.default.isFunction(fn)) {
		      throw Error('argument 2 must be a function');
		    }
		    if (!_underscore2.default.isFunction(cb) && !_underscore2.default.isObject(cb)) {
		      throw Error('argument 3 must be a function or an object');
		    }
	
		    if (_underscore2.default.isObject(cb)) {
		      for (var hook in hooks) {
		        if (hooks.hasOwnProperty(hook) && cb[hook]) {
		          // Don't use any of additional callbacks in Meteor.subscribe
		          hooks[hook] = cb[hook];
		          delete cb[hook];
		        }
		      }
		    }
	
		    var result = {};
	
		    var computation = this.autorun(function () {
		      var _Meteor;
	
		      var args = fn();
		      if (angular.isUndefined(args)) args = [];
	
		      if (!_underscore2.default.isArray(args)) {
		        throw Error('reactive function\'s return value must be an array');
		      }
	
		      var subscription = (_Meteor = Meteor).subscribe.apply(_Meteor, [subName].concat(_toConsumableArray(args), [cb]));
	
		      hooks.onStart();
	
		      result.ready = subscription.ready.bind(subscription);
		      result.subscriptionId = subscription.subscriptionId;
		    });
	
		    // Once the computation has been stopped,
		    // any subscriptions made inside will be stopped as well
		    result.stop = computation.stop.bind(computation);
		    return result;
		  };
	
		  // Calls Meteor.call() wrapped by a digestion cycle
		  $$Core.callMethod = function () {
		    var _Meteor2;
	
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
	
		    var fn = args.pop();
		    if (_underscore2.default.isFunction(fn)) fn = this.$bindToContext($Mixer.caller, fn);
		    return (_Meteor2 = Meteor).call.apply(_Meteor2, args.concat([fn]));
		  };
	
		  // Calls Meteor.apply() wrapped by a digestion cycle
		  $$Core.applyMethod = function () {
		    var _Meteor3;
	
		    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      args[_key2] = arguments[_key2];
		    }
	
		    var fn = args.pop();
		    if (_underscore2.default.isFunction(fn)) fn = this.$bindToContext($Mixer.caller, fn);
		    return (_Meteor3 = Meteor).apply.apply(_Meteor3, args.concat([fn]));
		  };
	
		  // Stops a process once the scope has been destroyed
		  $$Core.$$autoStop = function (stoppable) {
		    var removeListener = undefined;
		    var baseStop = stoppable.stop.bind(stoppable);
	
		    // Once the process has been stopped the destroy event listener will be removed
		    // to avoid memory leaks and unexpected behaviours
		    var stop = function stop() {
		      removeListener();
		      return baseStop.apply(undefined, arguments);
		    };
	
		    removeListener = this.$on('$destroy', stop);
		    return stop;
		  };
	
		  // Digests scope only if there is no phase at the moment
		  $$Core.$$throttledDigest = function () {
		    var isDigestable = !this.$$destroyed && !this.$$phase && !this.$root.$$phase;
	
		    if (isDigestable) this.$digest();
		  };
	
		  // Creates a promise only that the digestion cycle will be called at its fulfillment
		  $$Core.$$defer = function () {
		    var deferred = $q.defer();
		    // Once promise has been fulfilled, digest
		    deferred.promise = deferred.promise.finally(this.$$throttledDigest.bind(this));
		    return deferred;
		  };
	
		  // Binds an object or a function to the provided context and digest it once it is invoked
		  $$Core.$bindToContext = function (context, fn) {
		    if (_underscore2.default.isFunction(context)) {
		      fn = context;
		      context = this;
		    }
	
		    return $$utils.bind(fn, context, this.$$throttledDigest.bind(this));
		  };
	
		  return $$Core;
		}]);
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.reactive = exports.ViewModel = exports.name = undefined;
	
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		var _utils = __webpack_require__(16);
	
		var _mixer = __webpack_require__(17);
	
		var _core = __webpack_require__(19);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		var name = exports.name = 'angular-meteor.view-model';
		var ViewModel = exports.ViewModel = '$$ViewModel';
		var reactive = exports.reactive = '$reactive';
	
		angular.module(name, [_utils.name, _mixer.name, _core.name])
	
		/*
		  A mixin which lets us bind a view model into a scope.
		  Note that only a single view model can be bound,
		  otherwise the scope might behave unexpectedly.
		  Mainly used to define the controller as the view model,
		  and very useful when wanting to use Angular's `controllerAs` syntax.
		 */
		.factory(ViewModel, [_utils.utils, _mixer.Mixer, function ($$utils, $Mixer) {
		  function $$ViewModel() {}
	
		  // Gets an object, wraps it with scope functions and returns it
		  $$ViewModel.viewModel = function (vm) {
		    if (!_underscore2.default.isObject(vm)) {
		      throw Error('argument 1 must be an object');
		    }
	
		    // Extend view model with mixin functions
		    $Mixer._extend(vm, {
		      pattern: /^(?!\$\$).*$/, // Omitting methods which start with a $$ notation
		      context: this // Binding methods to scope
		    });
	
		    // Apply mixin constructors on scope with view model
		    $Mixer._construct(this, vm);
		    return vm;
		  };
	
		  return $$ViewModel;
		}])
	
		/*
		  Illustrates the old API where a view model is created using $reactive service
		 */
		.service(reactive, [_utils.utils, function ($$utils) {
		  var Reactive = function () {
		    function Reactive(vm) {
		      var _this = this;
	
		      _classCallCheck(this, Reactive);
	
		      if (!_underscore2.default.isObject(vm)) {
		        throw Error('argument 1 must be an object');
		      }
	
		      _underscore2.default.defer(function () {
		        if (!_this._attached) {
		          console.warn('view model was not attached to any scope');
		        }
		      });
	
		      this._vm = vm;
		    }
	
		    _createClass(Reactive, [{
		      key: 'attach',
		      value: function attach(scope) {
		        this._attached = true;
	
		        if (!$$utils.isScope(scope)) {
		          throw Error('argument 1 must be a scope');
		        }
	
		        var viewModel = scope.viewModel(this._vm);
	
		        // Similar to the old/Meteor API
		        viewModel.call = viewModel.callMethod;
		        viewModel.apply = viewModel.applyMethod;
	
		        return viewModel;
		      }
		    }]);
	
		    return Reactive;
		  }();
	
		  return function (vm) {
		    return new Reactive(vm);
		  };
		}]);
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Reactive = exports.name = undefined;
	
		var _jsondiffpatch = __webpack_require__(22);
	
		var _jsondiffpatch2 = _interopRequireDefault(_jsondiffpatch);
	
		var _underscore = __webpack_require__(2);
	
		var _underscore2 = _interopRequireDefault(_underscore);
	
		var _utils = __webpack_require__(16);
	
		var _mixer = __webpack_require__(17);
	
		var _core = __webpack_require__(19);
	
		var _viewModel = __webpack_require__(20);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var name = exports.name = 'angular-meteor.reactive';
		var Reactive = exports.Reactive = '$$Reactive';
	
		angular.module(name, [_utils.name, _mixer.name, _core.name, _viewModel.name])
	
		/*
		  A mixin which enhance our reactive abilities by providing methods
		  that are capable of updating our scope reactively.
		 */
		.factory(Reactive, ['$parse', _utils.utils, _mixer.Mixer, function ($parse, $$utils, $Mixer) {
		  function $$Reactive() {
		    var vm = arguments.length <= 0 || arguments[0] === undefined ? this : arguments[0];
	
		    // Helps us track changes made in the view model
		    vm.$$dependencies = {};
		  }
	
		  // Gets an object containing functions and define their results as reactive properties.
		  // Once a return value has been changed the property will be reset.
		  $$Reactive.helpers = function (vm, props) {
		    var _this = this;
	
		    if ($$utils.isViewModel(vm)) {
		      if (!_underscore2.default.isObject(props)) {
		        throw Error('argument 2 must be an object');
		      }
		    } else {
		      props = vm;
		      vm = $Mixer.caller;
	
		      if (!_underscore2.default.isObject(props)) {
		        throw Error('argument 1 must be an object');
		      }
		    }
	
		    _underscore2.default.each(props, function (v, k) {
		      if (!_underscore2.default.isFunction(v)) {
		        throw Error('helper \'' + k + '\' must be a function');
		      }
		    });
	
		    _underscore2.default.each(props, function (v, k) {
		      if (!vm.$$dependencies[k]) {
		        // Registers a new dependency to the specified helper
		        vm.$$dependencies[k] = new Tracker.Dependency();
		      }
	
		      _this.$$setFnHelper(vm, k, v);
		    });
		  };
	
		  // Gets a model reactively
		  $$Reactive.getReactively = function (vm, k, isDeep) {
		    if ($$utils.isViewModel(vm)) {
		      if (angular.isUndefined(isDeep)) isDeep = false;
	
		      if (!_underscore2.default.isString(k)) {
		        throw Error('argument 2 must be a string');
		      }
		      if (!_underscore2.default.isBoolean(isDeep)) {
		        throw Error('argument 3 must be a boolean');
		      }
		    } else {
		      isDeep = angular.isDefined(k) ? k : false;
		      k = vm;
		      vm = $Mixer.caller;
	
		      if (!_underscore2.default.isString(k)) {
		        throw Error('argument 1 must be a string');
		      }
		      if (!_underscore2.default.isBoolean(isDeep)) {
		        throw Error('argument 2 must be a boolean');
		      }
		    }
	
		    return this.$$reactivateEntity(vm, k, this.$watch, isDeep);
		  };
	
		  // Gets a collection reactively
		  $$Reactive.getCollectionReactively = function (vm, k) {
		    if ($$utils.isViewModel(vm)) {
		      if (!_underscore2.default.isString(k)) {
		        throw Error('argument 2 must be a string');
		      }
		    } else {
		      k = vm;
		      vm = $Mixer.caller;
	
		      if (!_underscore2.default.isString(k)) {
		        throw Error('argument 1 must be a string');
		      }
		    }
	
		    return this.$$reactivateEntity(vm, k, this.$watchCollection);
		  };
	
		  // Gets an entity reactively, and once it has been changed the computation will be recomputed
		  $$Reactive.$$reactivateEntity = function (vm, k, watcher) {
		    if (!vm.$$dependencies[k]) {
		      vm.$$dependencies[k] = new Tracker.Dependency();
	
		      for (var _len = arguments.length, watcherArgs = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
		        watcherArgs[_key - 3] = arguments[_key];
		      }
	
		      this.$$watchEntity.apply(this, [vm, k, watcher].concat(watcherArgs));
		    }
	
		    vm.$$dependencies[k].depend();
		    return $parse(k)(vm);
		  };
	
		  // Watches for changes in the view model, and if so will notify a change
		  $$Reactive.$$watchEntity = function (vm, k, watcher) {
		    var _this2 = this;
	
		    // Gets a deep property from the caller
		    var getVal = _underscore2.default.partial($parse(k), vm);
		    var initialVal = getVal();
	
		    // Watches for changes in the view model
	
		    for (var _len2 = arguments.length, watcherArgs = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
		      watcherArgs[_key2 - 3] = arguments[_key2];
		    }
	
		    watcher.call.apply(watcher, [this, getVal, function (val, oldVal) {
		      var hasChanged = val !== initialVal || val !== oldVal;
	
		      // Notify if a change has been detected
		      if (hasChanged) _this2.$$changed(vm, k);
		    }].concat(watcherArgs));
		  };
	
		  // Invokes a function and sets the return value as a property
		  $$Reactive.$$setFnHelper = function (vm, k, fn) {
		    var _this3 = this;
	
		    var activeObservation = null;
		    var lastModel = null;
		    var lastModelData = [];
	
		    this.autorun(function () /* computation */{
		      // Invokes the reactive functon
		      var model = fn.apply(vm);
	
		      // Ignore notifications made by the following handler
		      Tracker.nonreactive(function () {
		        // If a cursor, observe its changes and update acoordingly
		        if ($$utils.isCursor(model)) {
		          var modelData = undefined;
	
		          if (angular.isUndefined(vm[k])) {
		            _this3.$$setValHelper(vm, k, [], false);
		          }
	
		          if (activeObservation) {
		            lastModelData = lastModel.fetch();
		            activeObservation.stop();
		            activeObservation = null;
		          }
	
		          var handle = _this3.$$handleCursor(vm, k, model);
	
		          activeObservation = handle.observation;
		          modelData = handle.data;
	
		          if (lastModelData.length !== 0) {
		            var diff = _jsondiffpatch2.default.diff(lastModelData, modelData);
		            vm[k] = _jsondiffpatch2.default.patch(lastModelData, diff);
		          } else {
		            vm[k] = modelData;
		          }
	
		          lastModel = model;
		          lastModelData = modelData;
	
		          /* computation.onInvalidate(() => {
		            activeObservation.stop();
		          });*/
		        } else {
		            _this3.$$handleNonCursor(vm, k, model);
		          }
	
		        // Notify change and update the view model
		        _this3.$$changed(vm, k);
		      });
		    });
		  };
	
		  // Sets a value helper as a setter and a getter which will notify computations once used
		  $$Reactive.$$setValHelper = function (vm, k, v) {
		    var _this4 = this;
	
		    var watch = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
	
		    // If set, reactives property
		    if (watch) {
		      var isDeep = _underscore2.default.isObject(v);
		      this.getReactively(vm, k, isDeep);
		    }
	
		    Object.defineProperty(vm, k, {
		      configurable: true,
		      enumerable: true,
	
		      get: function get() {
		        return v;
		      },
		      set: function set(newVal) {
		        v = newVal;
		        _this4.$$changed(vm, k);
		      }
		    });
		  };
	
		  // Fetching a cursor and updates properties once the result set has been changed
		  $$Reactive.$$handleCursor = function (vm, k, cursor) {
		    var _this5 = this;
	
		    var data = [];
		    // Observe changes made in the result set
		    var observation = cursor.observe({
		      addedAt: function addedAt(doc, atIndex) {
		        if (!observation) {
		          data.push(doc);
		          return;
		        }
		        vm[k].splice(atIndex, 0, doc);
		        _this5.$$changed(vm, k);
		      },
		      changedAt: function changedAt(doc, oldDoc, atIndex) {
		        var diff = _jsondiffpatch2.default.diff(vm[k][atIndex], doc);
		        _jsondiffpatch2.default.patch(vm[k][atIndex], diff);
		        _this5.$$changed(vm, k);
		      },
		      movedTo: function movedTo(doc, fromIndex, toIndex) {
		        vm[k].splice(fromIndex, 1);
		        vm[k].splice(toIndex, 0, doc);
		        _this5.$$changed(vm, k);
		      },
		      removedAt: function removedAt(oldDoc, atIndex) {
		        vm[k].splice(atIndex, 1);
		        _this5.$$changed(vm, k);
		      }
		    });
	
		    return {
		      observation: observation,
		      data: data
		    };
		  };
	
		  $$Reactive.$$handleNonCursor = function (vm, k, data) {
		    var v = vm[k];
	
		    if (angular.isDefined(v)) {
		      delete vm[k];
		      v = null;
		    }
	
		    if (angular.isUndefined(v)) {
		      this.$$setValHelper(vm, k, data);
		    }
		    // Update property if the new value is from the same type
		    else if ($$utils.areSiblings(v, data)) {
		        var diff = _jsondiffpatch2.default.diff(v, data);
		        _jsondiffpatch2.default.patch(v, diff);
		        this.$$changed(vm, k);
		      } else {
		        vm[k] = data;
		      }
		  };
	
		  // Notifies dependency in view model
		  $$Reactive.$$depend = function (vm, k) {
		    vm.$$dependencies[k].depend();
		  };
	
		  // Notifies change in view model
		  $$Reactive.$$changed = function (vm, k) {
		    this.$$throttledDigest();
		    vm.$$dependencies[k].changed();
		  };
	
		  return $$Reactive;
		}]);
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_22__;
	
	/***/ },
	/* 23 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var name = exports.name = 'angular-templates';
	
		try {
		  angular.module(name);
		} catch (e) {
		  angular.module(name, []);
		}
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	var environment = __webpack_require__(18);
	
	var DiffPatcher = __webpack_require__(19).DiffPatcher;
	exports.DiffPatcher = DiffPatcher;
	
	exports.create = function(options){
	  return new DiffPatcher(options);
	};
	
	exports.dateReviver = __webpack_require__(24);
	
	var defaultInstance;
	
	exports.diff = function() {
	  if (!defaultInstance) {
	    defaultInstance = new DiffPatcher();
	  }
	  return defaultInstance.diff.apply(defaultInstance, arguments);
	};
	
	exports.patch = function() {
	  if (!defaultInstance) {
	    defaultInstance = new DiffPatcher();
	  }
	  return defaultInstance.patch.apply(defaultInstance, arguments);
	};
	
	exports.unpatch = function() {
	  if (!defaultInstance) {
	    defaultInstance = new DiffPatcher();
	  }
	  return defaultInstance.unpatch.apply(defaultInstance, arguments);
	};
	
	exports.reverse = function() {
	  if (!defaultInstance) {
	    defaultInstance = new DiffPatcher();
	  }
	  return defaultInstance.reverse.apply(defaultInstance, arguments);
	};
	
	if (environment.isBrowser) {
	  exports.homepage = '{{package-homepage}}';
	  exports.version = '{{package-version}}';
	} else {
	  var packageInfoModuleName = '../package.json';
	  var packageInfo = __webpack_require__(35)(packageInfoModuleName);
	  exports.homepage = packageInfo.homepage;
	  exports.version = packageInfo.version;
	
	  var formatterModuleName = './formatters';
	  var formatters = __webpack_require__(35)(formatterModuleName);
	  exports.formatters = formatters;
	  // shortcut for console
	  exports.console = formatters.console;
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	
	exports.isBrowser = typeof window !== 'undefined';


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var Processor = __webpack_require__(20).Processor;
	var Pipe = __webpack_require__(21).Pipe;
	var DiffContext = __webpack_require__(22).DiffContext;
	var PatchContext = __webpack_require__(25).PatchContext;
	var ReverseContext = __webpack_require__(26).ReverseContext;
	
	var trivial = __webpack_require__(27);
	var nested = __webpack_require__(28);
	var arrays = __webpack_require__(29);
	var dates = __webpack_require__(31);
	var texts = __webpack_require__(32);
	
	var DiffPatcher = function DiffPatcher(options) {
	  this.processor = new Processor(options);
	  this.processor.pipe(new Pipe('diff').append(
	    nested.collectChildrenDiffFilter,
	    trivial.diffFilter,
	    dates.diffFilter,
	    texts.diffFilter,
	    nested.objectsDiffFilter,
	    arrays.diffFilter
	  ).shouldHaveResult());
	  this.processor.pipe(new Pipe('patch').append(
	    nested.collectChildrenPatchFilter,
	    arrays.collectChildrenPatchFilter,
	    trivial.patchFilter,
	    texts.patchFilter,
	    nested.patchFilter,
	    arrays.patchFilter
	  ).shouldHaveResult());
	  this.processor.pipe(new Pipe('reverse').append(
	    nested.collectChildrenReverseFilter,
	    arrays.collectChildrenReverseFilter,
	    trivial.reverseFilter,
	    texts.reverseFilter,
	    nested.reverseFilter,
	    arrays.reverseFilter
	  ).shouldHaveResult());
	};
	
	DiffPatcher.prototype.options = function() {
	  return this.processor.options.apply(this.processor, arguments);
	};
	
	DiffPatcher.prototype.diff = function(left, right) {
	  return this.processor.process(new DiffContext(left, right));
	};
	
	DiffPatcher.prototype.patch = function(left, delta) {
	  return this.processor.process(new PatchContext(left, delta));
	};
	
	DiffPatcher.prototype.reverse = function(delta) {
	  return this.processor.process(new ReverseContext(delta));
	};
	
	DiffPatcher.prototype.unpatch = function(right, delta) {
	  return this.patch(right, this.reverse(delta));
	};
	
	exports.DiffPatcher = DiffPatcher;


/***/ },
/* 20 */
/***/ function(module, exports) {

	
	var Processor = function Processor(options){
	  this.selfOptions = options || {};
	  this.pipes = {};
	};
	
	Processor.prototype.options = function(options) {
	  if (options) {
	    this.selfOptions = options;
	  }
	  return this.selfOptions;
	};
	
	Processor.prototype.pipe = function(name, pipe) {
	  if (typeof name === 'string') {
	    if (typeof pipe === 'undefined') {
	      return this.pipes[name];
	    } else {
	      this.pipes[name] = pipe;
	    }
	  }
	  if (name && name.name) {
	    pipe = name;
	    if (pipe.processor === this) { return pipe; }
	    this.pipes[pipe.name] = pipe;
	  }
	  pipe.processor = this;
	  return pipe;
	};
	
	Processor.prototype.process = function(input, pipe) {
	  var context = input;
	  context.options = this.options();
	  var nextPipe = pipe || input.pipe || 'default';
	  var lastPipe, lastContext;
	  while (nextPipe) {
	    if (typeof context.nextAfterChildren !== 'undefined') {
	      // children processed and coming back to parent
	      context.next = context.nextAfterChildren;
	      context.nextAfterChildren = null;
	    }
	
	    if (typeof nextPipe === 'string') {
	      nextPipe = this.pipe(nextPipe);
	    }
	    nextPipe.process(context);
	    lastContext = context;
	    lastPipe = nextPipe;
	    nextPipe = null;
	    if (context) {
	      if (context.next) {
	        context = context.next;
	        nextPipe = lastContext.nextPipe || context.pipe || lastPipe;
	      }
	    }
	  }
	  return context.hasResult ? context.result : undefined;
	};
	
	exports.Processor = Processor;


/***/ },
/* 21 */
/***/ function(module, exports) {

	var Pipe = function Pipe(name) {
	  this.name = name;
	  this.filters = [];
	};
	
	Pipe.prototype.process = function(input) {
	  if (!this.processor) {
	    throw new Error('add this pipe to a processor before using it');
	  }
	  var debug = this.debug;
	  var length = this.filters.length;
	  var context = input;
	  for (var index = 0; index < length; index++) {
	    var filter = this.filters[index];
	    if (debug) {
	      this.log('filter: ' + filter.filterName);
	    }
	    filter(context);
	    if (typeof context === 'object' && context.exiting) {
	      context.exiting = false;
	      break;
	    }
	  }
	  if (!context.next && this.resultCheck) {
	    this.resultCheck(context);
	  }
	};
	
	Pipe.prototype.log = function(msg) {
	  console.log('[jsondiffpatch] ' + this.name + ' pipe, ' + msg);
	};
	
	Pipe.prototype.append = function() {
	  this.filters.push.apply(this.filters, arguments);
	  return this;
	};
	
	Pipe.prototype.prepend = function() {
	  this.filters.unshift.apply(this.filters, arguments);
	  return this;
	};
	
	Pipe.prototype.indexOf = function(filterName) {
	  if (!filterName) {
	    throw new Error('a filter name is required');
	  }
	  for (var index = 0; index < this.filters.length; index++) {
	    var filter = this.filters[index];
	    if (filter.filterName === filterName) {
	      return index;
	    }
	  }
	  throw new Error('filter not found: ' + filterName);
	};
	
	Pipe.prototype.list = function() {
	  var names = [];
	  for (var index = 0; index < this.filters.length; index++) {
	    var filter = this.filters[index];
	    names.push(filter.filterName);
	  }
	  return names;
	};
	
	Pipe.prototype.after = function(filterName) {
	  var index = this.indexOf(filterName);
	  var params = Array.prototype.slice.call(arguments, 1);
	  if (!params.length) {
	    throw new Error('a filter is required');
	  }
	  params.unshift(index + 1, 0);
	  Array.prototype.splice.apply(this.filters, params);
	  return this;
	};
	
	Pipe.prototype.before = function(filterName) {
	  var index = this.indexOf(filterName);
	  var params = Array.prototype.slice.call(arguments, 1);
	  if (!params.length) {
	    throw new Error('a filter is required');
	  }
	  params.unshift(index, 0);
	  Array.prototype.splice.apply(this.filters, params);
	  return this;
	};
	
	Pipe.prototype.clear = function() {
	  this.filters.length = 0;
	  return this;
	};
	
	Pipe.prototype.shouldHaveResult = function(should) {
	  if (should === false) {
	    this.resultCheck = null;
	    return;
	  }
	  if (this.resultCheck) {
	    return;
	  }
	  var pipe = this;
	  this.resultCheck = function(context) {
	    if (!context.hasResult) {
	      console.log(context);
	      var error = new Error(pipe.name + ' failed');
	      error.noResult = true;
	      throw error;
	    }
	  };
	  return this;
	};
	
	exports.Pipe = Pipe;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Context = __webpack_require__(23).Context;
	var dateReviver = __webpack_require__(24);
	
	var DiffContext = function DiffContext(left, right) {
	  this.left = left;
	  this.right = right;
	  this.pipe = 'diff';
	};
	
	DiffContext.prototype = new Context();
	
	DiffContext.prototype.setResult = function(result) {
	  if (this.options.cloneDiffValues) {
	    var clone = typeof this.options.cloneDiffValues === 'function' ?
	      this.options.cloneDiffValues : function(value) {
	        return JSON.parse(JSON.stringify(value), dateReviver);
	      };
	    if (typeof result[0] === 'object') {
	      result[0] = clone(result[0]);
	    }
	    if (typeof result[1] === 'object') {
	      result[1] = clone(result[1]);
	    }
	  }
	  return Context.prototype.setResult.apply(this, arguments);
	};
	
	exports.DiffContext = DiffContext;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	var Pipe = __webpack_require__(21).Pipe;
	
	var Context = function Context(){
	};
	
	Context.prototype.setResult = function(result) {
		this.result = result;
		this.hasResult = true;
		return this;
	};
	
	Context.prototype.exit = function() {
		this.exiting = true;
		return this;
	};
	
	Context.prototype.switchTo = function(next, pipe) {
		if (typeof next === 'string' || next instanceof Pipe) {
			this.nextPipe = next;
		} else {
			this.next = next;
			if (pipe) {
				this.nextPipe = pipe;
			}
		}
		return this;
	};
	
	Context.prototype.push = function(child, name) {
		child.parent = this;
		if (typeof name !== 'undefined') {
			child.childName = name;
		}
		child.root = this.root || this;
		child.options = child.options || this.options;
		if (!this.children) {
			this.children = [child];
			this.nextAfterChildren = this.next || null;
			this.next = child;
		} else {
			this.children[this.children.length - 1].next = child;
			this.children.push(child);
		}
		child.next = this;
		return this;
	};
	
	exports.Context = Context;


/***/ },
/* 24 */
/***/ function(module, exports) {

	// use as 2nd parameter for JSON.parse to revive Date instances
	module.exports = function dateReviver(key, value) {
	  var parts;
	  if (typeof value === 'string') {
	    parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
	    if (parts) {
	      return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4], +parts[5], +parts[6], +(parts[7] || 0)));
	    }
	  }
	  return value;
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Context = __webpack_require__(23).Context;
	
	var PatchContext = function PatchContext(left, delta) {
	  this.left = left;
	  this.delta = delta;
	  this.pipe = 'patch';
	};
	
	PatchContext.prototype = new Context();
	
	exports.PatchContext = PatchContext;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Context = __webpack_require__(23).Context;
	
	var ReverseContext = function ReverseContext(delta) {
	  this.delta = delta;
	  this.pipe = 'reverse';
	};
	
	ReverseContext.prototype = new Context();
	
	exports.ReverseContext = ReverseContext;


/***/ },
/* 27 */
/***/ function(module, exports) {

	var isArray = (typeof Array.isArray === 'function') ?
	  // use native function
	  Array.isArray :
	  // use instanceof operator
	  function(a) {
	    return a instanceof Array;
	  };
	
	var diffFilter = function trivialMatchesDiffFilter(context) {
	  if (context.left === context.right) {
	    context.setResult(undefined).exit();
	    return;
	  }
	  if (typeof context.left === 'undefined') {
	    if (typeof context.right === 'function') {
	      throw new Error('functions are not supported');
	    }
	    context.setResult([context.right]).exit();
	    return;
	  }
	  if (typeof context.right === 'undefined') {
	    context.setResult([context.left, 0, 0]).exit();
	    return;
	  }
	  if (typeof context.left === 'function' || typeof context.right === 'function') {
	    throw new Error('functions are not supported');
	  }
	  context.leftType = context.left === null ? 'null' : typeof context.left;
	  context.rightType = context.right === null ? 'null' : typeof context.right;
	  if (context.leftType !== context.rightType) {
	    context.setResult([context.left, context.right]).exit();
	    return;
	  }
	  if (context.leftType === 'boolean' || context.leftType === 'number') {
	    context.setResult([context.left, context.right]).exit();
	    return;
	  }
	  if (context.leftType === 'object') {
	    context.leftIsArray = isArray(context.left);
	  }
	  if (context.rightType === 'object') {
	    context.rightIsArray = isArray(context.right);
	  }
	  if (context.leftIsArray !== context.rightIsArray) {
	    context.setResult([context.left, context.right]).exit();
	    return;
	  }
	};
	diffFilter.filterName = 'trivial';
	
	var patchFilter = function trivialMatchesPatchFilter(context) {
	  if (typeof context.delta === 'undefined') {
	    context.setResult(context.left).exit();
	    return;
	  }
	  context.nested = !isArray(context.delta);
	  if (context.nested) {
	    return;
	  }
	  if (context.delta.length === 1) {
	    context.setResult(context.delta[0]).exit();
	    return;
	  }
	  if (context.delta.length === 2) {
	    context.setResult(context.delta[1]).exit();
	    return;
	  }
	  if (context.delta.length === 3 && context.delta[2] === 0) {
	    context.setResult(undefined).exit();
	    return;
	  }
	};
	patchFilter.filterName = 'trivial';
	
	var reverseFilter = function trivialReferseFilter(context) {
	  if (typeof context.delta === 'undefined') {
	    context.setResult(context.delta).exit();
	    return;
	  }
	  context.nested = !isArray(context.delta);
	  if (context.nested) {
	    return;
	  }
	  if (context.delta.length === 1) {
	    context.setResult([context.delta[0], 0, 0]).exit();
	    return;
	  }
	  if (context.delta.length === 2) {
	    context.setResult([context.delta[1], context.delta[0]]).exit();
	    return;
	  }
	  if (context.delta.length === 3 && context.delta[2] === 0) {
	    context.setResult([context.delta[0]]).exit();
	    return;
	  }
	};
	reverseFilter.filterName = 'trivial';
	
	exports.diffFilter = diffFilter;
	exports.patchFilter = patchFilter;
	exports.reverseFilter = reverseFilter;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var DiffContext = __webpack_require__(22).DiffContext;
	var PatchContext = __webpack_require__(25).PatchContext;
	var ReverseContext = __webpack_require__(26).ReverseContext;
	
	var collectChildrenDiffFilter = function collectChildrenDiffFilter(context) {
	  if (!context || !context.children) {
	    return;
	  }
	  var length = context.children.length;
	  var child;
	  var result = context.result;
	  for (var index = 0; index < length; index++) {
	    child = context.children[index];
	    if (typeof child.result === 'undefined') {
	      continue;
	    }
	    result = result || {};
	    result[child.childName] = child.result;
	  }
	  if (result && context.leftIsArray) {
	    result._t = 'a';
	  }
	  context.setResult(result).exit();
	};
	collectChildrenDiffFilter.filterName = 'collectChildren';
	
	var objectsDiffFilter = function objectsDiffFilter(context) {
	  if (context.leftIsArray || context.leftType !== 'object') {
	    return;
	  }
	
	  var name, child, propertyFilter = context.options.propertyFilter;
	  for (name in context.left) {
	    if (!Object.prototype.hasOwnProperty.call(context.left, name)) {
	      continue;
	    }
	    if (propertyFilter && !propertyFilter(name, context)) {
	      continue;
	    }
	    child = new DiffContext(context.left[name], context.right[name]);
	    context.push(child, name);
	  }
	  for (name in context.right) {
	    if (!Object.prototype.hasOwnProperty.call(context.right, name)) {
	      continue;
	    }
	    if (propertyFilter && !propertyFilter(name, context)) {
	      continue;
	    }
	    if (typeof context.left[name] === 'undefined') {
	      child = new DiffContext(undefined, context.right[name]);
	      context.push(child, name);
	    }
	  }
	
	  if (!context.children || context.children.length === 0) {
	    context.setResult(undefined).exit();
	    return;
	  }
	  context.exit();
	};
	objectsDiffFilter.filterName = 'objects';
	
	var patchFilter = function nestedPatchFilter(context) {
	  if (!context.nested) {
	    return;
	  }
	  if (context.delta._t) {
	    return;
	  }
	  var name, child;
	  for (name in context.delta) {
	    child = new PatchContext(context.left[name], context.delta[name]);
	    context.push(child, name);
	  }
	  context.exit();
	};
	patchFilter.filterName = 'objects';
	
	var collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
	  if (!context || !context.children) {
	    return;
	  }
	  if (context.delta._t) {
	    return;
	  }
	  var length = context.children.length;
	  var child;
	  for (var index = 0; index < length; index++) {
	    child = context.children[index];
	    if (Object.prototype.hasOwnProperty.call(context.left, child.childName) && child.result === undefined) {
	      delete context.left[child.childName];
	    } else if (context.left[child.childName] !== child.result) {
	      context.left[child.childName] = child.result;
	    }
	  }
	  context.setResult(context.left).exit();
	};
	collectChildrenPatchFilter.filterName = 'collectChildren';
	
	var reverseFilter = function nestedReverseFilter(context) {
	  if (!context.nested) {
	    return;
	  }
	  if (context.delta._t) {
	    return;
	  }
	  var name, child;
	  for (name in context.delta) {
	    child = new ReverseContext(context.delta[name]);
	    context.push(child, name);
	  }
	  context.exit();
	};
	reverseFilter.filterName = 'objects';
	
	var collectChildrenReverseFilter = function collectChildrenReverseFilter(context) {
	  if (!context || !context.children) {
	    return;
	  }
	  if (context.delta._t) {
	    return;
	  }
	  var length = context.children.length;
	  var child;
	  var delta = {};
	  for (var index = 0; index < length; index++) {
	    child = context.children[index];
	    if (delta[child.childName] !== child.result) {
	      delta[child.childName] = child.result;
	    }
	  }
	  context.setResult(delta).exit();
	};
	collectChildrenReverseFilter.filterName = 'collectChildren';
	
	exports.collectChildrenDiffFilter = collectChildrenDiffFilter;
	exports.objectsDiffFilter = objectsDiffFilter;
	exports.patchFilter = patchFilter;
	exports.collectChildrenPatchFilter = collectChildrenPatchFilter;
	exports.reverseFilter = reverseFilter;
	exports.collectChildrenReverseFilter = collectChildrenReverseFilter;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var DiffContext = __webpack_require__(22).DiffContext;
	var PatchContext = __webpack_require__(25).PatchContext;
	var ReverseContext = __webpack_require__(26).ReverseContext;
	
	var lcs = __webpack_require__(30);
	
	var ARRAY_MOVE = 3;
	
	var isArray = (typeof Array.isArray === 'function') ?
	  // use native function
	  Array.isArray :
	  // use instanceof operator
	  function(a) {
	    return a instanceof Array;
	  };
	
	var arrayIndexOf = typeof Array.prototype.indexOf === 'function' ?
	  function(array, item) {
	    return array.indexOf(item);
	  } : function(array, item) {
	    var length = array.length;
	    for (var i = 0; i < length; i++) {
	      if (array[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  };
	
	function arraysHaveMatchByRef(array1, array2, len1, len2) {
	  for (var index1 = 0; index1 < len1; index1++) {
	    var val1 = array1[index1];
	    for (var index2 = 0; index2 < len2; index2++) {
	      var val2 = array2[index2];
	      if (val1 === val2) {
	        return true;
	      }
	    }
	  }
	}
	
	function matchItems(array1, array2, index1, index2, context) {
	  var value1 = array1[index1];
	  var value2 = array2[index2];
	  if (value1 === value2) {
	    return true;
	  }
	  if (typeof value1 !== 'object' || typeof value2 !== 'object') {
	    return false;
	  }
	  var objectHash = context.objectHash;
	  if (!objectHash) {
	    // no way to match objects was provided, try match by position
	    return context.matchByPosition && index1 === index2;
	  }
	  var hash1;
	  var hash2;
	  if (typeof index1 === 'number') {
	    context.hashCache1 = context.hashCache1 || [];
	    hash1 = context.hashCache1[index1];
	    if (typeof hash1 === 'undefined') {
	      context.hashCache1[index1] = hash1 = objectHash(value1, index1);
	    }
	  } else {
	    hash1 = objectHash(value1);
	  }
	  if (typeof hash1 === 'undefined') {
	    return false;
	  }
	  if (typeof index2 === 'number') {
	    context.hashCache2 = context.hashCache2 || [];
	    hash2 = context.hashCache2[index2];
	    if (typeof hash2 === 'undefined') {
	      context.hashCache2[index2] = hash2 = objectHash(value2, index2);
	    }
	  } else {
	    hash2 = objectHash(value2);
	  }
	  if (typeof hash2 === 'undefined') {
	    return false;
	  }
	  return hash1 === hash2;
	}
	
	var diffFilter = function arraysDiffFilter(context) {
	  if (!context.leftIsArray) {
	    return;
	  }
	
	  var matchContext = {
	    objectHash: context.options && context.options.objectHash,
	    matchByPosition: context.options && context.options.matchByPosition
	  };
	  var commonHead = 0;
	  var commonTail = 0;
	  var index;
	  var index1;
	  var index2;
	  var array1 = context.left;
	  var array2 = context.right;
	  var len1 = array1.length;
	  var len2 = array2.length;
	
	  var child;
	
	  if (len1 > 0 && len2 > 0 && !matchContext.objectHash &&
	    typeof matchContext.matchByPosition !== 'boolean') {
	    matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
	  }
	
	  // separate common head
	  while (commonHead < len1 && commonHead < len2 &&
	    matchItems(array1, array2, commonHead, commonHead, matchContext)) {
	    index = commonHead;
	    child = new DiffContext(context.left[index], context.right[index]);
	    context.push(child, index);
	    commonHead++;
	  }
	  // separate common tail
	  while (commonTail + commonHead < len1 && commonTail + commonHead < len2 &&
	    matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)) {
	    index1 = len1 - 1 - commonTail;
	    index2 = len2 - 1 - commonTail;
	    child = new DiffContext(context.left[index1], context.right[index2]);
	    context.push(child, index2);
	    commonTail++;
	  }
	  var result;
	  if (commonHead + commonTail === len1) {
	    if (len1 === len2) {
	      // arrays are identical
	      context.setResult(undefined).exit();
	      return;
	    }
	    // trivial case, a block (1 or more consecutive items) was added
	    result = result || {
	      _t: 'a'
	    };
	    for (index = commonHead; index < len2 - commonTail; index++) {
	      result[index] = [array2[index]];
	    }
	    context.setResult(result).exit();
	    return;
	  }
	  if (commonHead + commonTail === len2) {
	    // trivial case, a block (1 or more consecutive items) was removed
	    result = result || {
	      _t: 'a'
	    };
	    for (index = commonHead; index < len1 - commonTail; index++) {
	      result['_' + index] = [array1[index], 0, 0];
	    }
	    context.setResult(result).exit();
	    return;
	  }
	  // reset hash cache
	  delete matchContext.hashCache1;
	  delete matchContext.hashCache2;
	
	  // diff is not trivial, find the LCS (Longest Common Subsequence)
	  var trimmed1 = array1.slice(commonHead, len1 - commonTail);
	  var trimmed2 = array2.slice(commonHead, len2 - commonTail);
	  var seq = lcs.get(
	    trimmed1, trimmed2,
	    matchItems,
	    matchContext
	  );
	  var removedItems = [];
	  result = result || {
	    _t: 'a'
	  };
	  for (index = commonHead; index < len1 - commonTail; index++) {
	    if (arrayIndexOf(seq.indices1, index - commonHead) < 0) {
	      // removed
	      result['_' + index] = [array1[index], 0, 0];
	      removedItems.push(index);
	    }
	  }
	
	  var detectMove = true;
	  if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
	    detectMove = false;
	  }
	  var includeValueOnMove = false;
	  if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
	    includeValueOnMove = true;
	  }
	
	  var removedItemsLength = removedItems.length;
	  for (index = commonHead; index < len2 - commonTail; index++) {
	    var indexOnArray2 = arrayIndexOf(seq.indices2, index - commonHead);
	    if (indexOnArray2 < 0) {
	      // added, try to match with a removed item and register as position move
	      var isMove = false;
	      if (detectMove && removedItemsLength > 0) {
	        for (var removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
	          index1 = removedItems[removeItemIndex1];
	          if (matchItems(trimmed1, trimmed2, index1 - commonHead,
	            index - commonHead, matchContext)) {
	            // store position move as: [originalValue, newPosition, ARRAY_MOVE]
	            result['_' + index1].splice(1, 2, index, ARRAY_MOVE);
	            if (!includeValueOnMove) {
	              // don't include moved value on diff, to save bytes
	              result['_' + index1][0] = '';
	            }
	
	            index2 = index;
	            child = new DiffContext(context.left[index1], context.right[index2]);
	            context.push(child, index2);
	            removedItems.splice(removeItemIndex1, 1);
	            isMove = true;
	            break;
	          }
	        }
	      }
	      if (!isMove) {
	        // added
	        result[index] = [array2[index]];
	      }
	    } else {
	      // match, do inner diff
	      index1 = seq.indices1[indexOnArray2] + commonHead;
	      index2 = seq.indices2[indexOnArray2] + commonHead;
	      child = new DiffContext(context.left[index1], context.right[index2]);
	      context.push(child, index2);
	    }
	  }
	
	  context.setResult(result).exit();
	
	};
	diffFilter.filterName = 'arrays';
	
	var compare = {
	  numerically: function(a, b) {
	    return a - b;
	  },
	  numericallyBy: function(name) {
	    return function(a, b) {
	      return a[name] - b[name];
	    };
	  }
	};
	
	var patchFilter = function nestedPatchFilter(context) {
	  if (!context.nested) {
	    return;
	  }
	  if (context.delta._t !== 'a') {
	    return;
	  }
	  var index, index1;
	
	  var delta = context.delta;
	  var array = context.left;
	
	  // first, separate removals, insertions and modifications
	  var toRemove = [];
	  var toInsert = [];
	  var toModify = [];
	  for (index in delta) {
	    if (index !== '_t') {
	      if (index[0] === '_') {
	        // removed item from original array
	        if (delta[index][2] === 0 || delta[index][2] === ARRAY_MOVE) {
	          toRemove.push(parseInt(index.slice(1), 10));
	        } else {
	          throw new Error('only removal or move can be applied at original array indices' +
	            ', invalid diff type: ' + delta[index][2]);
	        }
	      } else {
	        if (delta[index].length === 1) {
	          // added item at new array
	          toInsert.push({
	            index: parseInt(index, 10),
	            value: delta[index][0]
	          });
	        } else {
	          // modified item at new array
	          toModify.push({
	            index: parseInt(index, 10),
	            delta: delta[index]
	          });
	        }
	      }
	    }
	  }
	
	  // remove items, in reverse order to avoid sawing our own floor
	  toRemove = toRemove.sort(compare.numerically);
	  for (index = toRemove.length - 1; index >= 0; index--) {
	    index1 = toRemove[index];
	    var indexDiff = delta['_' + index1];
	    var removedValue = array.splice(index1, 1)[0];
	    if (indexDiff[2] === ARRAY_MOVE) {
	      // reinsert later
	      toInsert.push({
	        index: indexDiff[1],
	        value: removedValue
	      });
	    }
	  }
	
	  // insert items, in reverse order to avoid moving our own floor
	  toInsert = toInsert.sort(compare.numericallyBy('index'));
	  var toInsertLength = toInsert.length;
	  for (index = 0; index < toInsertLength; index++) {
	    var insertion = toInsert[index];
	    array.splice(insertion.index, 0, insertion.value);
	  }
	
	  // apply modifications
	  var toModifyLength = toModify.length;
	  var child;
	  if (toModifyLength > 0) {
	    for (index = 0; index < toModifyLength; index++) {
	      var modification = toModify[index];
	      child = new PatchContext(context.left[modification.index], modification.delta);
	      context.push(child, modification.index);
	    }
	  }
	
	  if (!context.children) {
	    context.setResult(context.left).exit();
	    return;
	  }
	  context.exit();
	};
	patchFilter.filterName = 'arrays';
	
	var collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
	  if (!context || !context.children) {
	    return;
	  }
	  if (context.delta._t !== 'a') {
	    return;
	  }
	  var length = context.children.length;
	  var child;
	  for (var index = 0; index < length; index++) {
	    child = context.children[index];
	    context.left[child.childName] = child.result;
	  }
	  context.setResult(context.left).exit();
	};
	collectChildrenPatchFilter.filterName = 'arraysCollectChildren';
	
	var reverseFilter = function arraysReverseFilter(context) {
	  if (!context.nested) {
	    if (context.delta[2] === ARRAY_MOVE) {
	      context.newName = '_' + context.delta[1];
	      context.setResult([context.delta[0], parseInt(context.childName.substr(1), 10), ARRAY_MOVE]).exit();
	    }
	    return;
	  }
	  if (context.delta._t !== 'a') {
	    return;
	  }
	  var name, child;
	  for (name in context.delta) {
	    if (name === '_t') {
	      continue;
	    }
	    child = new ReverseContext(context.delta[name]);
	    context.push(child, name);
	  }
	  context.exit();
	};
	reverseFilter.filterName = 'arrays';
	
	var reverseArrayDeltaIndex = function(delta, index, itemDelta) {
	  if (typeof index === 'string' && index[0] === '_') {
	    return parseInt(index.substr(1), 10);
	  } else if (isArray(itemDelta) && itemDelta[2] === 0) {
	    return '_' + index;
	  }
	
	  var reverseIndex = +index;
	  for (var deltaIndex in delta) {
	    var deltaItem = delta[deltaIndex];
	    if (isArray(deltaItem)) {
	      if (deltaItem[2] === ARRAY_MOVE) {
	        var moveFromIndex = parseInt(deltaIndex.substr(1), 10);
	        var moveToIndex = deltaItem[1];
	        if (moveToIndex === +index) {
	          return moveFromIndex;
	        }
	        if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
	          reverseIndex++;
	        } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
	          reverseIndex--;
	        }
	      } else if (deltaItem[2] === 0) {
	        var deleteIndex = parseInt(deltaIndex.substr(1), 10);
	        if (deleteIndex <= reverseIndex) {
	          reverseIndex++;
	        }
	      } else if (deltaItem.length === 1 && deltaIndex <= reverseIndex) {
	        reverseIndex--;
	      }
	    }
	  }
	
	  return reverseIndex;
	};
	
	var collectChildrenReverseFilter = function collectChildrenReverseFilter(context) {
	  if (!context || !context.children) {
	    return;
	  }
	  if (context.delta._t !== 'a') {
	    return;
	  }
	  var length = context.children.length;
	  var child;
	  var delta = {
	    _t: 'a'
	  };
	
	  for (var index = 0; index < length; index++) {
	    child = context.children[index];
	    var name = child.newName;
	    if (typeof name === 'undefined') {
	      name = reverseArrayDeltaIndex(context.delta, child.childName, child.result);
	    }
	    if (delta[name] !== child.result) {
	      delta[name] = child.result;
	    }
	  }
	  context.setResult(delta).exit();
	};
	collectChildrenReverseFilter.filterName = 'arraysCollectChildren';
	
	exports.diffFilter = diffFilter;
	exports.patchFilter = patchFilter;
	exports.collectChildrenPatchFilter = collectChildrenPatchFilter;
	exports.reverseFilter = reverseFilter;
	exports.collectChildrenReverseFilter = collectChildrenReverseFilter;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/*
	
	LCS implementation that supports arrays or strings
	
	reference: http://en.wikipedia.org/wiki/Longest_common_subsequence_problem
	
	*/
	
	var defaultMatch = function(array1, array2, index1, index2) {
	  return array1[index1] === array2[index2];
	};
	
	var lengthMatrix = function(array1, array2, match, context) {
	  var len1 = array1.length;
	  var len2 = array2.length;
	  var x, y;
	
	  // initialize empty matrix of len1+1 x len2+1
	  var matrix = [len1 + 1];
	  for (x = 0; x < len1 + 1; x++) {
	    matrix[x] = [len2 + 1];
	    for (y = 0; y < len2 + 1; y++) {
	      matrix[x][y] = 0;
	    }
	  }
	  matrix.match = match;
	  // save sequence lengths for each coordinate
	  for (x = 1; x < len1 + 1; x++) {
	    for (y = 1; y < len2 + 1; y++) {
	      if (match(array1, array2, x - 1, y - 1, context)) {
	        matrix[x][y] = matrix[x - 1][y - 1] + 1;
	      } else {
	        matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
	      }
	    }
	  }
	  return matrix;
	};
	
	var backtrack = function(matrix, array1, array2, index1, index2, context) {
	  if (index1 === 0 || index2 === 0) {
	    return {
	      sequence: [],
	      indices1: [],
	      indices2: []
	    };
	  }
	
	  if (matrix.match(array1, array2, index1 - 1, index2 - 1, context)) {
	    var subsequence = backtrack(matrix, array1, array2, index1 - 1, index2 - 1, context);
	    subsequence.sequence.push(array1[index1 - 1]);
	    subsequence.indices1.push(index1 - 1);
	    subsequence.indices2.push(index2 - 1);
	    return subsequence;
	  }
	
	  if (matrix[index1][index2 - 1] > matrix[index1 - 1][index2]) {
	    return backtrack(matrix, array1, array2, index1, index2 - 1, context);
	  } else {
	    return backtrack(matrix, array1, array2, index1 - 1, index2, context);
	  }
	};
	
	var get = function(array1, array2, match, context) {
	  context = context || {};
	  var matrix = lengthMatrix(array1, array2, match || defaultMatch, context);
	  var result = backtrack(matrix, array1, array2, array1.length, array2.length, context);
	  if (typeof array1 === 'string' && typeof array2 === 'string') {
	    result.sequence = result.sequence.join('');
	  }
	  return result;
	};
	
	exports.get = get;


/***/ },
/* 31 */
/***/ function(module, exports) {

	var diffFilter = function datesDiffFilter(context) {
	  if (context.left instanceof Date) {
	    if (context.right instanceof Date) {
	      if (context.left.getTime() !== context.right.getTime()) {
	        context.setResult([context.left, context.right]);
	      } else {
	        context.setResult(undefined);
	      }
	    } else {
	      context.setResult([context.left, context.right]);
	    }
	    context.exit();
	  } else if (context.right instanceof Date) {
	    context.setResult([context.left, context.right]).exit();
	  }
	};
	diffFilter.filterName = 'dates';
	
	exports.diffFilter = diffFilter;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* global diff_match_patch */
	var TEXT_DIFF = 2;
	var DEFAULT_MIN_LENGTH = 60;
	var cachedDiffPatch = null;
	
	var getDiffMatchPatch = function(required) {
	  /*jshint camelcase: false */
	
	  if (!cachedDiffPatch) {
	    var instance;
	    if (typeof diff_match_patch !== 'undefined') {
	      // already loaded, probably a browser
	      instance = typeof diff_match_patch === 'function' ?
	        new diff_match_patch() : new diff_match_patch.diff_match_patch();
	    } else if (true) {
	      try {
	        var dmpModuleName = 'diff_match_patch_uncompressed';
	        var dmp = __webpack_require__(33)("./" + dmpModuleName);
	        instance = new dmp.diff_match_patch();
	      } catch (err) {
	        instance = null;
	      }
	    }
	    if (!instance) {
	      if (!required) {
	        return null;
	      }
	      var error = new Error('text diff_match_patch library not found');
	      error.diff_match_patch_not_found = true;
	      throw error;
	    }
	    cachedDiffPatch = {
	      diff: function(txt1, txt2) {
	        return instance.patch_toText(instance.patch_make(txt1, txt2));
	      },
	      patch: function(txt1, patch) {
	        var results = instance.patch_apply(instance.patch_fromText(patch), txt1);
	        for (var i = 0; i < results[1].length; i++) {
	          if (!results[1][i]) {
	            var error = new Error('text patch failed');
	            error.textPatchFailed = true;
	          }
	        }
	        return results[0];
	      }
	    };
	  }
	  return cachedDiffPatch;
	};
	
	var diffFilter = function textsDiffFilter(context) {
	  if (context.leftType !== 'string') {
	    return;
	  }
	  var minLength = (context.options && context.options.textDiff &&
	    context.options.textDiff.minLength) || DEFAULT_MIN_LENGTH;
	  if (context.left.length < minLength ||
	    context.right.length < minLength) {
	    context.setResult([context.left, context.right]).exit();
	    return;
	  }
	  // large text, try to use a text-diff algorithm
	  var diffMatchPatch = getDiffMatchPatch();
	  if (!diffMatchPatch) {
	    // diff-match-patch library not available, fallback to regular string replace
	    context.setResult([context.left, context.right]).exit();
	    return;
	  }
	  var diff = diffMatchPatch.diff;
	  context.setResult([diff(context.left, context.right), 0, TEXT_DIFF]).exit();
	};
	diffFilter.filterName = 'texts';
	
	var patchFilter = function textsPatchFilter(context) {
	  if (context.nested) {
	    return;
	  }
	  if (context.delta[2] !== TEXT_DIFF) {
	    return;
	  }
	
	  // text-diff, use a text-patch algorithm
	  var patch = getDiffMatchPatch(true).patch;
	  context.setResult(patch(context.left, context.delta[0])).exit();
	};
	patchFilter.filterName = 'texts';
	
	var textDeltaReverse = function(delta) {
	  var i, l, lines, line, lineTmp, header = null,
	    headerRegex = /^@@ +\-(\d+),(\d+) +\+(\d+),(\d+) +@@$/,
	    lineHeader, lineAdd, lineRemove;
	  lines = delta.split('\n');
	  for (i = 0, l = lines.length; i < l; i++) {
	    line = lines[i];
	    var lineStart = line.slice(0, 1);
	    if (lineStart === '@') {
	      header = headerRegex.exec(line);
	      lineHeader = i;
	      lineAdd = null;
	      lineRemove = null;
	
	      // fix header
	      lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
	    } else if (lineStart === '+') {
	      lineAdd = i;
	      lines[i] = '-' + lines[i].slice(1);
	      if (lines[i - 1].slice(0, 1) === '+') {
	        // swap lines to keep default order (-+)
	        lineTmp = lines[i];
	        lines[i] = lines[i - 1];
	        lines[i - 1] = lineTmp;
	      }
	    } else if (lineStart === '-') {
	      lineRemove = i;
	      lines[i] = '+' + lines[i].slice(1);
	    }
	  }
	  return lines.join('\n');
	};
	
	var reverseFilter = function textsReverseFilter(context) {
	  if (context.nested) {
	    return;
	  }
	  if (context.delta[2] !== TEXT_DIFF) {
	    return;
	  }
	
	  // text-diff, use a text-diff algorithm
	  context.setResult([textDeltaReverse(context.delta[0]), 0, TEXT_DIFF]).exit();
	};
	reverseFilter.filterName = 'texts';
	
	exports.diffFilter = diffFilter;
	exports.patchFilter = patchFilter;
	exports.reverseFilter = reverseFilter;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./diff_match_patch_uncompressed": 34,
		"./diff_match_patch_uncompressed.js": 34
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 33;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Diff Match and Patch
	 *
	 * Copyright 2006 Google Inc.
	 * http://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * @fileoverview Computes the difference between two texts to create a patch.
	 * Applies the patch onto another text, allowing for errors.
	 * @author fraser@google.com (Neil Fraser)
	 */
	
	/**
	 * Class containing the diff, match and patch methods.
	 * @constructor
	 */
	function diff_match_patch() {
	
	  // Defaults.
	  // Redefine these in your program to override the defaults.
	
	  // Number of seconds to map a diff before giving up (0 for infinity).
	  this.Diff_Timeout = 1.0;
	  // Cost of an empty edit operation in terms of edit characters.
	  this.Diff_EditCost = 4;
	  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
	  this.Match_Threshold = 0.5;
	  // How far to search for a match (0 = exact location, 1000+ = broad match).
	  // A match this many characters away from the expected location will add
	  // 1.0 to the score (0.0 is a perfect match).
	  this.Match_Distance = 1000;
	  // When deleting a large block of text (over ~64 characters), how close does
	  // the contents have to match the expected contents. (0.0 = perfection,
	  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
	  // end points of a delete need to match.
	  this.Patch_DeleteThreshold = 0.5;
	  // Chunk size for context length.
	  this.Patch_Margin = 4;
	
	  // The number of bits in an int.
	  this.Match_MaxBits = 32;
	}
	
	
	//  DIFF FUNCTIONS
	
	
	/**
	 * The data structure representing a diff is an array of tuples:
	 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
	 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
	 */
	var DIFF_DELETE = -1;
	var DIFF_INSERT = 1;
	var DIFF_EQUAL = 0;
	
	/** @typedef {!Array.<number|string>} */
	diff_match_patch.Diff;
	
	
	/**
	 * Find the differences between two texts.  Simplifies the problem by stripping
	 * any common prefix or suffix off the texts before diffing.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean=} opt_checklines Optional speedup flag. If present and false,
	 *     then don't run a line-level diff first to identify the changed areas.
	 *     Defaults to true, which does a faster, slightly less optimal diff.
	 * @param {number} opt_deadline Optional time when the diff should be complete
	 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
	 *     instead.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines,
	    opt_deadline) {
	  // Set a deadline by which time the diff must be complete.
	  if (typeof opt_deadline == 'undefined') {
	    if (this.Diff_Timeout <= 0) {
	      opt_deadline = Number.MAX_VALUE;
	    } else {
	      opt_deadline = (new Date).getTime() + this.Diff_Timeout * 1000;
	    }
	  }
	  var deadline = opt_deadline;
	
	  // Check for null inputs.
	  if (text1 == null || text2 == null) {
	    throw new Error('Null input. (diff_main)');
	  }
	
	  // Check for equality (speedup).
	  if (text1 == text2) {
	    if (text1) {
	      return [[DIFF_EQUAL, text1]];
	    }
	    return [];
	  }
	
	  if (typeof opt_checklines == 'undefined') {
	    opt_checklines = true;
	  }
	  var checklines = opt_checklines;
	
	  // Trim off common prefix (speedup).
	  var commonlength = this.diff_commonPrefix(text1, text2);
	  var commonprefix = text1.substring(0, commonlength);
	  text1 = text1.substring(commonlength);
	  text2 = text2.substring(commonlength);
	
	  // Trim off common suffix (speedup).
	  commonlength = this.diff_commonSuffix(text1, text2);
	  var commonsuffix = text1.substring(text1.length - commonlength);
	  text1 = text1.substring(0, text1.length - commonlength);
	  text2 = text2.substring(0, text2.length - commonlength);
	
	  // Compute the diff on the middle block.
	  var diffs = this.diff_compute_(text1, text2, checklines, deadline);
	
	  // Restore the prefix and suffix.
	  if (commonprefix) {
	    diffs.unshift([DIFF_EQUAL, commonprefix]);
	  }
	  if (commonsuffix) {
	    diffs.push([DIFF_EQUAL, commonsuffix]);
	  }
	  this.diff_cleanupMerge(diffs);
	  return diffs;
	};
	
	
	/**
	 * Find the differences between two texts.  Assumes that the texts do not
	 * have any common prefix or suffix.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean} checklines Speedup flag.  If false, then don't run a
	 *     line-level diff first to identify the changed areas.
	 *     If true, then run a faster, slightly less optimal diff.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines,
	    deadline) {
	  var diffs;
	
	  if (!text1) {
	    // Just add some text (speedup).
	    return [[DIFF_INSERT, text2]];
	  }
	
	  if (!text2) {
	    // Just delete some text (speedup).
	    return [[DIFF_DELETE, text1]];
	  }
	
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  var i = longtext.indexOf(shorttext);
	  if (i != -1) {
	    // Shorter text is inside the longer text (speedup).
	    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
	             [DIFF_EQUAL, shorttext],
	             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
	    // Swap insertions for deletions if diff is reversed.
	    if (text1.length > text2.length) {
	      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
	    }
	    return diffs;
	  }
	
	  if (shorttext.length == 1) {
	    // Single character string.
	    // After the previous speedup, the character can't be an equality.
	    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	  }
	  longtext = shorttext = null;  // Garbage collect.
	
	  // Check to see if the problem can be split in two.
	  var hm = this.diff_halfMatch_(text1, text2);
	  if (hm) {
	    // A half-match was found, sort out the return data.
	    var text1_a = hm[0];
	    var text1_b = hm[1];
	    var text2_a = hm[2];
	    var text2_b = hm[3];
	    var mid_common = hm[4];
	    // Send both pairs off for separate processing.
	    var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
	    var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
	    // Merge the results.
	    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
	  }
	
	  if (checklines && text1.length > 100 && text2.length > 100) {
	    return this.diff_lineMode_(text1, text2, deadline);
	  }
	
	  return this.diff_bisect_(text1, text2, deadline);
	};
	
	
	/**
	 * Do a quick line-level diff on both strings, then rediff the parts for
	 * greater accuracy.
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
	  // Scan the text on a line-by-line basis first.
	  var a = this.diff_linesToChars_(text1, text2);
	  text1 = /** @type {string} */(a[0]);
	  text2 = /** @type {string} */(a[1]);
	  var linearray = /** @type {!Array.<string>} */(a[2]);
	
	  var diffs = this.diff_bisect_(text1, text2, deadline);
	
	  // Convert the diff back to original text.
	  this.diff_charsToLines_(diffs, linearray);
	  // Eliminate freak matches (e.g. blank lines)
	  this.diff_cleanupSemantic(diffs);
	
	  // Rediff any replacement blocks, this time character-by-character.
	  // Add a dummy entry at the end.
	  diffs.push([DIFF_EQUAL, '']);
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete >= 1 && count_insert >= 1) {
	          // Delete the offending records and add the merged ones.
	          var a = this.diff_main(text_delete, text_insert, false, deadline);
	          diffs.splice(pointer - count_delete - count_insert,
	                       count_delete + count_insert);
	          pointer = pointer - count_delete - count_insert;
	          for (var j = a.length - 1; j >= 0; j--) {
	            diffs.splice(pointer, 0, a[j]);
	          }
	          pointer = pointer + a.length;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	    pointer++;
	  }
	  diffs.pop();  // Remove the dummy entry at the end.
	
	  return diffs;
	};
	
	
	/**
	 * Find the 'middle snake' of a diff, split the problem in two
	 * and return the recursively constructed diff.
	 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  var max_d = Math.ceil((text1_length + text2_length) / 2);
	  var v_offset = max_d;
	  var v_length = 2 * max_d;
	  var v1 = new Array(v_length);
	  var v2 = new Array(v_length);
	  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
	  // integers and undefined.
	  for (var x = 0; x < v_length; x++) {
	    v1[x] = -1;
	    v2[x] = -1;
	  }
	  v1[v_offset + 1] = 0;
	  v2[v_offset + 1] = 0;
	  var delta = text1_length - text2_length;
	  // If the total number of characters is odd, then the front path will collide
	  // with the reverse path.
	  var front = (delta % 2 != 0);
	  // Offsets for start and end of k loop.
	  // Prevents mapping of space beyond the grid.
	  var k1start = 0;
	  var k1end = 0;
	  var k2start = 0;
	  var k2end = 0;
	  for (var d = 0; d < max_d; d++) {
	    // Bail out if deadline is reached.
	    if ((new Date()).getTime() > deadline) {
	      break;
	    }
	
	    // Walk the front path one step.
	    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
	      var k1_offset = v_offset + k1;
	      var x1;
	      if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
	        x1 = v1[k1_offset + 1];
	      } else {
	        x1 = v1[k1_offset - 1] + 1;
	      }
	      var y1 = x1 - k1;
	      while (x1 < text1_length && y1 < text2_length &&
	             text1.charAt(x1) == text2.charAt(y1)) {
	        x1++;
	        y1++;
	      }
	      v1[k1_offset] = x1;
	      if (x1 > text1_length) {
	        // Ran off the right of the graph.
	        k1end += 2;
	      } else if (y1 > text2_length) {
	        // Ran off the bottom of the graph.
	        k1start += 2;
	      } else if (front) {
	        var k2_offset = v_offset + delta - k1;
	        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
	          // Mirror x2 onto top-left coordinate system.
	          var x2 = text1_length - v2[k2_offset];
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }
	
	    // Walk the reverse path one step.
	    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
	      var k2_offset = v_offset + k2;
	      var x2;
	      if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
	        x2 = v2[k2_offset + 1];
	      } else {
	        x2 = v2[k2_offset - 1] + 1;
	      }
	      var y2 = x2 - k2;
	      while (x2 < text1_length && y2 < text2_length &&
	             text1.charAt(text1_length - x2 - 1) ==
	             text2.charAt(text2_length - y2 - 1)) {
	        x2++;
	        y2++;
	      }
	      v2[k2_offset] = x2;
	      if (x2 > text1_length) {
	        // Ran off the left of the graph.
	        k2end += 2;
	      } else if (y2 > text2_length) {
	        // Ran off the top of the graph.
	        k2start += 2;
	      } else if (!front) {
	        var k1_offset = v_offset + delta - k2;
	        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
	          var x1 = v1[k1_offset];
	          var y1 = v_offset + x1 - k1_offset;
	          // Mirror x2 onto top-left coordinate system.
	          x2 = text1_length - x2;
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }
	  }
	  // Diff took too long and hit the deadline or
	  // number of diffs equals number of characters, no commonality at all.
	  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	};
	
	
	/**
	 * Given the location of the 'middle snake', split the diff in two parts
	 * and recurse.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} x Index of split point in text1.
	 * @param {number} y Index of split point in text2.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y,
	    deadline) {
	  var text1a = text1.substring(0, x);
	  var text2a = text2.substring(0, y);
	  var text1b = text1.substring(x);
	  var text2b = text2.substring(y);
	
	  // Compute both diffs serially.
	  var diffs = this.diff_main(text1a, text2a, false, deadline);
	  var diffsb = this.diff_main(text1b, text2b, false, deadline);
	
	  return diffs.concat(diffsb);
	};
	
	
	/**
	 * Split two texts into an array of strings.  Reduce the texts to a string of
	 * hashes where each Unicode character represents one line.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {!Array.<string|!Array.<string>>} Three element Array, containing the
	 *     encoded text1, the encoded text2 and the array of unique strings.  The
	 *     zeroth element of the array of unique strings is intentionally blank.
	 * @private
	 */
	diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
	  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
	  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4
	
	  // '\x00' is a valid character, but various debuggers don't like it.
	  // So we'll insert a junk entry to avoid generating a null character.
	  lineArray[0] = '';
	
	  /**
	   * Split a text into an array of strings.  Reduce the texts to a string of
	   * hashes where each Unicode character represents one line.
	   * Modifies linearray and linehash through being a closure.
	   * @param {string} text String to encode.
	   * @return {string} Encoded string.
	   * @private
	   */
	  function diff_linesToCharsMunge_(text) {
	    var chars = '';
	    // Walk the text, pulling out a substring for each line.
	    // text.split('\n') would would temporarily double our memory footprint.
	    // Modifying text would create many large strings to garbage collect.
	    var lineStart = 0;
	    var lineEnd = -1;
	    // Keeping our own length variable is faster than looking it up.
	    var lineArrayLength = lineArray.length;
	    while (lineEnd < text.length - 1) {
	      lineEnd = text.indexOf('\n', lineStart);
	      if (lineEnd == -1) {
	        lineEnd = text.length - 1;
	      }
	      var line = text.substring(lineStart, lineEnd + 1);
	      lineStart = lineEnd + 1;
	
	      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
	          (lineHash[line] !== undefined)) {
	        chars += String.fromCharCode(lineHash[line]);
	      } else {
	        chars += String.fromCharCode(lineArrayLength);
	        lineHash[line] = lineArrayLength;
	        lineArray[lineArrayLength++] = line;
	      }
	    }
	    return chars;
	  }
	
	  var chars1 = diff_linesToCharsMunge_(text1);
	  var chars2 = diff_linesToCharsMunge_(text2);
	  return [chars1, chars2, lineArray];
	};
	
	
	/**
	 * Rehydrate the text in a diff from a string of line hashes to real lines of
	 * text.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {!Array.<string>} lineArray Array of unique strings.
	 * @private
	 */
	diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
	  for (var x = 0; x < diffs.length; x++) {
	    var chars = diffs[x][1];
	    var text = [];
	    for (var y = 0; y < chars.length; y++) {
	      text[y] = lineArray[chars.charCodeAt(y)];
	    }
	    diffs[x][1] = text.join('');
	  }
	};
	
	
	/**
	 * Determine the common prefix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the start of each
	 *     string.
	 */
	diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerstart = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(pointerstart, pointermid) ==
	        text2.substring(pointerstart, pointermid)) {
	      pointermin = pointermid;
	      pointerstart = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};
	
	
	/**
	 * Determine the common suffix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of each string.
	 */
	diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 ||
	      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerend = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
	        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
	      pointermin = pointermid;
	      pointerend = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};
	
	
	/**
	 * Determine if the suffix of one string is the prefix of another.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of the first
	 *     string and the start of the second string.
	 * @private
	 */
	diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  // Eliminate the null case.
	  if (text1_length == 0 || text2_length == 0) {
	    return 0;
	  }
	  // Truncate the longer string.
	  if (text1_length > text2_length) {
	    text1 = text1.substring(text1_length - text2_length);
	  } else if (text1_length < text2_length) {
	    text2 = text2.substring(0, text1_length);
	  }
	  var text_length = Math.min(text1_length, text2_length);
	  // Quick check for the worst case.
	  if (text1 == text2) {
	    return text_length;
	  }
	
	  // Start by looking for a single character match
	  // and increase length until no match is found.
	  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
	  var best = 0;
	  var length = 1;
	  while (true) {
	    var pattern = text1.substring(text_length - length);
	    var found = text2.indexOf(pattern);
	    if (found == -1) {
	      return best;
	    }
	    length += found;
	    if (found == 0 || text1.substring(text_length - length) ==
	        text2.substring(0, length)) {
	      best = length;
	      length++;
	    }
	  }
	};
	
	
	/**
	 * Do the two texts share a substring which is at least half the length of the
	 * longer text?
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {Array.<string>} Five element Array, containing the prefix of
	 *     text1, the suffix of text1, the prefix of text2, the suffix of
	 *     text2 and the common middle.  Or null if there was no match.
	 * @private
	 */
	diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
	  if (this.Diff_Timeout <= 0) {
	    // Don't risk returning a non-optimal diff if we have unlimited time.
	    return null;
	  }
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
	    return null;  // Pointless.
	  }
	  var dmp = this;  // 'this' becomes 'window' in a closure.
	
	  /**
	   * Does a substring of shorttext exist within longtext such that the substring
	   * is at least half the length of longtext?
	   * Closure, but does not reference any external variables.
	   * @param {string} longtext Longer string.
	   * @param {string} shorttext Shorter string.
	   * @param {number} i Start index of quarter length substring within longtext.
	   * @return {Array.<string>} Five element Array, containing the prefix of
	   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
	   *     of shorttext and the common middle.  Or null if there was no match.
	   * @private
	   */
	  function diff_halfMatchI_(longtext, shorttext, i) {
	    // Start with a 1/4 length substring at position i as a seed.
	    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
	    var j = -1;
	    var best_common = '';
	    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
	    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
	      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
	                                               shorttext.substring(j));
	      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
	                                               shorttext.substring(0, j));
	      if (best_common.length < suffixLength + prefixLength) {
	        best_common = shorttext.substring(j - suffixLength, j) +
	            shorttext.substring(j, j + prefixLength);
	        best_longtext_a = longtext.substring(0, i - suffixLength);
	        best_longtext_b = longtext.substring(i + prefixLength);
	        best_shorttext_a = shorttext.substring(0, j - suffixLength);
	        best_shorttext_b = shorttext.substring(j + prefixLength);
	      }
	    }
	    if (best_common.length * 2 >= longtext.length) {
	      return [best_longtext_a, best_longtext_b,
	              best_shorttext_a, best_shorttext_b, best_common];
	    } else {
	      return null;
	    }
	  }
	
	  // First check if the second quarter is the seed for a half-match.
	  var hm1 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 4));
	  // Check again based on the third quarter.
	  var hm2 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 2));
	  var hm;
	  if (!hm1 && !hm2) {
	    return null;
	  } else if (!hm2) {
	    hm = hm1;
	  } else if (!hm1) {
	    hm = hm2;
	  } else {
	    // Both matched.  Select the longest.
	    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
	  }
	
	  // A half-match was found, sort out the return data.
	  var text1_a, text1_b, text2_a, text2_b;
	  if (text1.length > text2.length) {
	    text1_a = hm[0];
	    text1_b = hm[1];
	    text2_a = hm[2];
	    text2_b = hm[3];
	  } else {
	    text2_a = hm[0];
	    text2_b = hm[1];
	    text1_a = hm[2];
	    text1_b = hm[3];
	  }
	  var mid_common = hm[4];
	  return [text1_a, text1_b, text2_a, text2_b, mid_common];
	};
	
	
	/**
	 * Reduce the number of edits by eliminating semantically trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  /** @type {?string} */
	  var lastequality = null;  // Always equal to equalities[equalitiesLength-1][1]
	  var pointer = 0;  // Index of current position.
	  // Number of characters that changed prior to the equality.
	  var length_insertions1 = 0;
	  var length_deletions1 = 0;
	  // Number of characters that changed after the equality.
	  var length_insertions2 = 0;
	  var length_deletions2 = 0;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      equalities[equalitiesLength++] = pointer;
	      length_insertions1 = length_insertions2;
	      length_deletions1 = length_deletions2;
	      length_insertions2 = 0;
	      length_deletions2 = 0;
	      lastequality = /** @type {string} */(diffs[pointer][1]);
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_INSERT) {
	        length_insertions2 += diffs[pointer][1].length;
	      } else {
	        length_deletions2 += diffs[pointer][1].length;
	      }
	      // Eliminate an equality that is smaller or equal to the edits on both
	      // sides of it.
	      if (lastequality !== null && (lastequality.length <=
	          Math.max(length_insertions1, length_deletions1)) &&
	          (lastequality.length <= Math.max(length_insertions2,
	                                           length_deletions2))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     [DIFF_DELETE, lastequality]);
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        // Throw away the equality we just deleted.
	        equalitiesLength--;
	        // Throw away the previous equality (it needs to be reevaluated).
	        equalitiesLength--;
	        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
	        length_insertions1 = 0;  // Reset the counters.
	        length_deletions1 = 0;
	        length_insertions2 = 0;
	        length_deletions2 = 0;
	        lastequality = null;
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	
	  // Normalize the diff.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	  this.diff_cleanupSemanticLossless(diffs);
	
	  // Find any overlaps between deletions and insertions.
	  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
	  //   -> <del>abc</del>xxx<ins>def</ins>
	  // Only extract an overlap if it is as big as the edit ahead or behind it.
	  pointer = 1;
	  while (pointer < diffs.length) {
	    if (diffs[pointer - 1][0] == DIFF_DELETE &&
	        diffs[pointer][0] == DIFF_INSERT) {
	      var deletion = /** @type {string} */(diffs[pointer - 1][1]);
	      var insertion = /** @type {string} */(diffs[pointer][1]);
	      var overlap_length = this.diff_commonOverlap_(deletion, insertion);
	      if (overlap_length >= deletion.length / 2 ||
	          overlap_length >= insertion.length / 2) {
	        // Overlap found.  Insert an equality and trim the surrounding edits.
	        diffs.splice(pointer, 0,
	            [DIFF_EQUAL, insertion.substring(0, overlap_length)]);
	        diffs[pointer - 1][1] =
	            deletion.substring(0, deletion.length - overlap_length);
	        diffs[pointer + 1][1] = insertion.substring(overlap_length);
	        pointer++;
	      }
	      pointer++;
	    }
	    pointer++;
	  }
	};
	
	
	/**
	 * Look for single edits surrounded on both sides by equalities
	 * which can be shifted sideways to align the edit to a word boundary.
	 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
	  // Define some regex patterns for matching boundaries.
	  var punctuation = /[^a-zA-Z0-9]/;
	  var whitespace = /\s/;
	  var linebreak = /[\r\n]/;
	  var blanklineEnd = /\n\r?\n$/;
	  var blanklineStart = /^\r?\n\r?\n/;
	
	  /**
	   * Given two strings, compute a score representing whether the internal
	   * boundary falls on logical boundaries.
	   * Scores range from 5 (best) to 0 (worst).
	   * Closure, makes reference to regex patterns defined above.
	   * @param {string} one First string.
	   * @param {string} two Second string.
	   * @return {number} The score.
	   * @private
	   */
	  function diff_cleanupSemanticScore_(one, two) {
	    if (!one || !two) {
	      // Edges are the best.
	      return 5;
	    }
	
	    // Each port of this function behaves slightly differently due to
	    // subtle differences in each language's definition of things like
	    // 'whitespace'.  Since this function's purpose is largely cosmetic,
	    // the choice has been made to use each language's native features
	    // rather than force total conformity.
	    var score = 0;
	    // One point for non-alphanumeric.
	    if (one.charAt(one.length - 1).match(punctuation) ||
	        two.charAt(0).match(punctuation)) {
	      score++;
	      // Two points for whitespace.
	      if (one.charAt(one.length - 1).match(whitespace) ||
	          two.charAt(0).match(whitespace)) {
	        score++;
	        // Three points for line breaks.
	        if (one.charAt(one.length - 1).match(linebreak) ||
	            two.charAt(0).match(linebreak)) {
	          score++;
	          // Four points for blank lines.
	          if (one.match(blanklineEnd) || two.match(blanklineStart)) {
	            score++;
	          }
	        }
	      }
	    }
	    return score;
	  }
	
	  var pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      var equality1 = /** @type {string} */(diffs[pointer - 1][1]);
	      var edit = /** @type {string} */(diffs[pointer][1]);
	      var equality2 = /** @type {string} */(diffs[pointer + 1][1]);
	
	      // First, shift the edit as far left as possible.
	      var commonOffset = this.diff_commonSuffix(equality1, edit);
	      if (commonOffset) {
	        var commonString = edit.substring(edit.length - commonOffset);
	        equality1 = equality1.substring(0, equality1.length - commonOffset);
	        edit = commonString + edit.substring(0, edit.length - commonOffset);
	        equality2 = commonString + equality2;
	      }
	
	      // Second, step character by character right, looking for the best fit.
	      var bestEquality1 = equality1;
	      var bestEdit = edit;
	      var bestEquality2 = equality2;
	      var bestScore = diff_cleanupSemanticScore_(equality1, edit) +
	          diff_cleanupSemanticScore_(edit, equality2);
	      while (edit.charAt(0) === equality2.charAt(0)) {
	        equality1 += edit.charAt(0);
	        edit = edit.substring(1) + equality2.charAt(0);
	        equality2 = equality2.substring(1);
	        var score = diff_cleanupSemanticScore_(equality1, edit) +
	            diff_cleanupSemanticScore_(edit, equality2);
	        // The >= encourages trailing rather than leading whitespace on edits.
	        if (score >= bestScore) {
	          bestScore = score;
	          bestEquality1 = equality1;
	          bestEdit = edit;
	          bestEquality2 = equality2;
	        }
	      }
	
	      if (diffs[pointer - 1][1] != bestEquality1) {
	        // We have an improvement, save it back to the diff.
	        if (bestEquality1) {
	          diffs[pointer - 1][1] = bestEquality1;
	        } else {
	          diffs.splice(pointer - 1, 1);
	          pointer--;
	        }
	        diffs[pointer][1] = bestEdit;
	        if (bestEquality2) {
	          diffs[pointer + 1][1] = bestEquality2;
	        } else {
	          diffs.splice(pointer + 1, 1);
	          pointer--;
	        }
	      }
	    }
	    pointer++;
	  }
	};
	
	
	/**
	 * Reduce the number of edits by eliminating operationally trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  var lastequality = '';  // Always equal to equalities[equalitiesLength-1][1]
	  var pointer = 0;  // Index of current position.
	  // Is there an insertion operation before the last equality.
	  var pre_ins = false;
	  // Is there a deletion operation before the last equality.
	  var pre_del = false;
	  // Is there an insertion operation after the last equality.
	  var post_ins = false;
	  // Is there a deletion operation after the last equality.
	  var post_del = false;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      if (diffs[pointer][1].length < this.Diff_EditCost &&
	          (post_ins || post_del)) {
	        // Candidate found.
	        equalities[equalitiesLength++] = pointer;
	        pre_ins = post_ins;
	        pre_del = post_del;
	        lastequality = diffs[pointer][1];
	      } else {
	        // Not a candidate, and can never become one.
	        equalitiesLength = 0;
	        lastequality = '';
	      }
	      post_ins = post_del = false;
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_DELETE) {
	        post_del = true;
	      } else {
	        post_ins = true;
	      }
	      /*
	       * Five types to be split:
	       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
	       * <ins>A</ins>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<ins>C</ins>
	       * <ins>A</del>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<del>C</del>
	       */
	      if (lastequality && ((pre_ins && pre_del && post_ins && post_del) ||
	                           ((lastequality.length < this.Diff_EditCost / 2) &&
	                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     [DIFF_DELETE, lastequality]);
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        equalitiesLength--;  // Throw away the equality we just deleted;
	        lastequality = '';
	        if (pre_ins && pre_del) {
	          // No changes made which could affect previous entry, keep going.
	          post_ins = post_del = true;
	          equalitiesLength = 0;
	        } else {
	          equalitiesLength--;  // Throw away the previous equality.
	          pointer = equalitiesLength > 0 ?
	              equalities[equalitiesLength - 1] : -1;
	          post_ins = post_del = false;
	        }
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};
	
	
	/**
	 * Reorder and merge like edit sections.  Merge equalities.
	 * Any edit section can move as long as it doesn't cross an equality.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
	  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  var commonlength;
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete + count_insert > 1) {
	          if (count_delete !== 0 && count_insert !== 0) {
	            // Factor out any common prefixies.
	            commonlength = this.diff_commonPrefix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              if ((pointer - count_delete - count_insert) > 0 &&
	                  diffs[pointer - count_delete - count_insert - 1][0] ==
	                  DIFF_EQUAL) {
	                diffs[pointer - count_delete - count_insert - 1][1] +=
	                    text_insert.substring(0, commonlength);
	              } else {
	                diffs.splice(0, 0, [DIFF_EQUAL,
	                                    text_insert.substring(0, commonlength)]);
	                pointer++;
	              }
	              text_insert = text_insert.substring(commonlength);
	              text_delete = text_delete.substring(commonlength);
	            }
	            // Factor out any common suffixies.
	            commonlength = this.diff_commonSuffix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              diffs[pointer][1] = text_insert.substring(text_insert.length -
	                  commonlength) + diffs[pointer][1];
	              text_insert = text_insert.substring(0, text_insert.length -
	                  commonlength);
	              text_delete = text_delete.substring(0, text_delete.length -
	                  commonlength);
	            }
	          }
	          // Delete the offending records and add the merged ones.
	          if (count_delete === 0) {
	            diffs.splice(pointer - count_delete - count_insert,
	                count_delete + count_insert, [DIFF_INSERT, text_insert]);
	          } else if (count_insert === 0) {
	            diffs.splice(pointer - count_delete - count_insert,
	                count_delete + count_insert, [DIFF_DELETE, text_delete]);
	          } else {
	            diffs.splice(pointer - count_delete - count_insert,
	                count_delete + count_insert, [DIFF_DELETE, text_delete],
	                [DIFF_INSERT, text_insert]);
	          }
	          pointer = pointer - count_delete - count_insert +
	                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
	        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
	          // Merge this equality with the previous one.
	          diffs[pointer - 1][1] += diffs[pointer][1];
	          diffs.splice(pointer, 1);
	        } else {
	          pointer++;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	  }
	  if (diffs[diffs.length - 1][1] === '') {
	    diffs.pop();  // Remove the dummy entry at the end.
	  }
	
	  // Second pass: look for single edits surrounded on both sides by equalities
	  // which can be shifted sideways to eliminate an equality.
	  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
	  var changes = false;
	  pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      if (diffs[pointer][1].substring(diffs[pointer][1].length -
	          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
	        // Shift the edit over the previous equality.
	        diffs[pointer][1] = diffs[pointer - 1][1] +
	            diffs[pointer][1].substring(0, diffs[pointer][1].length -
	                                        diffs[pointer - 1][1].length);
	        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
	        diffs.splice(pointer - 1, 1);
	        changes = true;
	      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
	          diffs[pointer + 1][1]) {
	        // Shift the edit over the next equality.
	        diffs[pointer - 1][1] += diffs[pointer + 1][1];
	        diffs[pointer][1] =
	            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
	            diffs[pointer + 1][1];
	        diffs.splice(pointer + 1, 1);
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	  // If shifts were made, the diff needs reordering and another shift sweep.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};
	
	
	/**
	 * loc is a location in text1, compute and return the equivalent location in
	 * text2.
	 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {number} loc Location within text1.
	 * @return {number} Location within text2.
	 */
	diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
	  var chars1 = 0;
	  var chars2 = 0;
	  var last_chars1 = 0;
	  var last_chars2 = 0;
	  var x;
	  for (x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
	      chars1 += diffs[x][1].length;
	    }
	    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
	      chars2 += diffs[x][1].length;
	    }
	    if (chars1 > loc) {  // Overshot the location.
	      break;
	    }
	    last_chars1 = chars1;
	    last_chars2 = chars2;
	  }
	  // Was the location was deleted?
	  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
	    return last_chars2;
	  }
	  // Add the remaining character length.
	  return last_chars2 + (loc - last_chars1);
	};
	
	
	/**
	 * Convert a diff array into a pretty HTML report.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} HTML representation.
	 */
	diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
	  var html = [];
	  var i = 0;
	  var pattern_amp = /&/g;
	  var pattern_lt = /</g;
	  var pattern_gt = />/g;
	  var pattern_para = /\n/g;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];    // Operation (insert, delete, equal)
	    var data = diffs[x][1];  // Text of change.
	    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
	        .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
	    switch (op) {
	      case DIFF_INSERT:
	        html[x] = '<ins style="background:#e6ffe6;">' + text + '</ins>';
	        break;
	      case DIFF_DELETE:
	        html[x] = '<del style="background:#ffe6e6;">' + text + '</del>';
	        break;
	      case DIFF_EQUAL:
	        html[x] = '<span>' + text + '</span>';
	        break;
	    }
	    if (op !== DIFF_DELETE) {
	      i += data.length;
	    }
	  }
	  return html.join('');
	};
	
	
	/**
	 * Compute and return the source text (all equalities and deletions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Source text.
	 */
	diff_match_patch.prototype.diff_text1 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};
	
	
	/**
	 * Compute and return the destination text (all equalities and insertions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Destination text.
	 */
	diff_match_patch.prototype.diff_text2 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_DELETE) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};
	
	
	/**
	 * Compute the Levenshtein distance; the number of inserted, deleted or
	 * substituted characters.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {number} Number of changes.
	 */
	diff_match_patch.prototype.diff_levenshtein = function(diffs) {
	  var levenshtein = 0;
	  var insertions = 0;
	  var deletions = 0;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];
	    var data = diffs[x][1];
	    switch (op) {
	      case DIFF_INSERT:
	        insertions += data.length;
	        break;
	      case DIFF_DELETE:
	        deletions += data.length;
	        break;
	      case DIFF_EQUAL:
	        // A deletion and an insertion is one substitution.
	        levenshtein += Math.max(insertions, deletions);
	        insertions = 0;
	        deletions = 0;
	        break;
	    }
	  }
	  levenshtein += Math.max(insertions, deletions);
	  return levenshtein;
	};
	
	
	/**
	 * Crush the diff into an encoded string which describes the operations
	 * required to transform text1 into text2.
	 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
	 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Delta text.
	 */
	diff_match_patch.prototype.diff_toDelta = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    switch (diffs[x][0]) {
	      case DIFF_INSERT:
	        text[x] = '+' + encodeURI(diffs[x][1]);
	        break;
	      case DIFF_DELETE:
	        text[x] = '-' + diffs[x][1].length;
	        break;
	      case DIFF_EQUAL:
	        text[x] = '=' + diffs[x][1].length;
	        break;
	    }
	  }
	  return text.join('\t').replace(/%20/g, ' ');
	};
	
	
	/**
	 * Given the original text1, and an encoded string which describes the
	 * operations required to transform text1 into text2, compute the full diff.
	 * @param {string} text1 Source string for the diff.
	 * @param {string} delta Delta text.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
	  var diffs = [];
	  var diffsLength = 0;  // Keeping our own length var is faster in JS.
	  var pointer = 0;  // Cursor in text1
	  var tokens = delta.split(/\t/g);
	  for (var x = 0; x < tokens.length; x++) {
	    // Each token begins with a one character parameter which specifies the
	    // operation of this token (delete, insert, equality).
	    var param = tokens[x].substring(1);
	    switch (tokens[x].charAt(0)) {
	      case '+':
	        try {
	          diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
	        } catch (ex) {
	          // Malformed URI sequence.
	          throw new Error('Illegal escape in diff_fromDelta: ' + param);
	        }
	        break;
	      case '-':
	        // Fall through.
	      case '=':
	        var n = parseInt(param, 10);
	        if (isNaN(n) || n < 0) {
	          throw new Error('Invalid number in diff_fromDelta: ' + param);
	        }
	        var text = text1.substring(pointer, pointer += n);
	        if (tokens[x].charAt(0) == '=') {
	          diffs[diffsLength++] = [DIFF_EQUAL, text];
	        } else {
	          diffs[diffsLength++] = [DIFF_DELETE, text];
	        }
	        break;
	      default:
	        // Blank tokens are ok (from a trailing \t).
	        // Anything else is an error.
	        if (tokens[x]) {
	          throw new Error('Invalid diff operation in diff_fromDelta: ' +
	                          tokens[x]);
	        }
	    }
	  }
	  if (pointer != text1.length) {
	    throw new Error('Delta length (' + pointer +
	        ') does not equal source text length (' + text1.length + ').');
	  }
	  return diffs;
	};
	
	
	//  MATCH FUNCTIONS
	
	
	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc'.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 */
	diff_match_patch.prototype.match_main = function(text, pattern, loc) {
	  // Check for null inputs.
	  if (text == null || pattern == null || loc == null) {
	    throw new Error('Null input. (match_main)');
	  }
	
	  loc = Math.max(0, Math.min(loc, text.length));
	  if (text == pattern) {
	    // Shortcut (potentially not guaranteed by the algorithm)
	    return 0;
	  } else if (!text.length) {
	    // Nothing to match.
	    return -1;
	  } else if (text.substring(loc, loc + pattern.length) == pattern) {
	    // Perfect match at the perfect spot!  (Includes case of null pattern)
	    return loc;
	  } else {
	    // Do a fuzzy compare.
	    return this.match_bitap_(text, pattern, loc);
	  }
	};
	
	
	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
	 * Bitap algorithm.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 * @private
	 */
	diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
	  if (pattern.length > this.Match_MaxBits) {
	    throw new Error('Pattern too long for this browser.');
	  }
	
	  // Initialise the alphabet.
	  var s = this.match_alphabet_(pattern);
	
	  var dmp = this;  // 'this' becomes 'window' in a closure.
	
	  /**
	   * Compute and return the score for a match with e errors and x location.
	   * Accesses loc and pattern through being a closure.
	   * @param {number} e Number of errors in match.
	   * @param {number} x Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  function match_bitapScore_(e, x) {
	    var accuracy = e / pattern.length;
	    var proximity = Math.abs(loc - x);
	    if (!dmp.Match_Distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy;
	    }
	    return accuracy + (proximity / dmp.Match_Distance);
	  }
	
	  // Highest score beyond which we give up.
	  var score_threshold = this.Match_Threshold;
	  // Is there a nearby exact match? (speedup)
	  var best_loc = text.indexOf(pattern, loc);
	  if (best_loc != -1) {
	    score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    // What about in the other direction? (speedup)
	    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
	    if (best_loc != -1) {
	      score_threshold =
	          Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    }
	  }
	
	  // Initialise the bit arrays.
	  var matchmask = 1 << (pattern.length - 1);
	  best_loc = -1;
	
	  var bin_min, bin_mid;
	  var bin_max = pattern.length + text.length;
	  var last_rd;
	  for (var d = 0; d < pattern.length; d++) {
	    // Scan for the best match; each iteration allows for one more error.
	    // Run a binary search to determine how far from 'loc' we can stray at this
	    // error level.
	    bin_min = 0;
	    bin_mid = bin_max;
	    while (bin_min < bin_mid) {
	      if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
	        bin_min = bin_mid;
	      } else {
	        bin_max = bin_mid;
	      }
	      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
	    }
	    // Use the result from this iteration as the maximum for the next.
	    bin_max = bin_mid;
	    var start = Math.max(1, loc - bin_mid + 1);
	    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
	
	    var rd = Array(finish + 2);
	    rd[finish + 1] = (1 << d) - 1;
	    for (var j = finish; j >= start; j--) {
	      // The alphabet (s) is a sparse hash, so the following line generates
	      // warnings.
	      var charMatch = s[text.charAt(j - 1)];
	      if (d === 0) {  // First pass: exact match.
	        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
	      } else {  // Subsequent passes: fuzzy match.
	        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch |
	                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
	                last_rd[j + 1];
	      }
	      if (rd[j] & matchmask) {
	        var score = match_bitapScore_(d, j - 1);
	        // This match will almost certainly be better than any existing match.
	        // But check anyway.
	        if (score <= score_threshold) {
	          // Told you so.
	          score_threshold = score;
	          best_loc = j - 1;
	          if (best_loc > loc) {
	            // When passing loc, don't exceed our current distance from loc.
	            start = Math.max(1, 2 * loc - best_loc);
	          } else {
	            // Already passed loc, downhill from here on in.
	            break;
	          }
	        }
	      }
	    }
	    // No hope for a (better) match at greater error levels.
	    if (match_bitapScore_(d + 1, loc) > score_threshold) {
	      break;
	    }
	    last_rd = rd;
	  }
	  return best_loc;
	};
	
	
	/**
	 * Initialise the alphabet for the Bitap algorithm.
	 * @param {string} pattern The text to encode.
	 * @return {!Object} Hash of character locations.
	 * @private
	 */
	diff_match_patch.prototype.match_alphabet_ = function(pattern) {
	  var s = {};
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] = 0;
	  }
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
	  }
	  return s;
	};
	
	
	//  PATCH FUNCTIONS
	
	
	/**
	 * Increase the context until it is unique,
	 * but don't let the pattern expand beyond Match_MaxBits.
	 * @param {!diff_match_patch.patch_obj} patch The patch to grow.
	 * @param {string} text Source text.
	 * @private
	 */
	diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
	  if (text.length == 0) {
	    return;
	  }
	  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
	  var padding = 0;
	
	  // Look for the first and last matches of pattern in text.  If two different
	  // matches are found, increase the pattern length.
	  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
	         pattern.length < this.Match_MaxBits - this.Patch_Margin -
	         this.Patch_Margin) {
	    padding += this.Patch_Margin;
	    pattern = text.substring(patch.start2 - padding,
	                             patch.start2 + patch.length1 + padding);
	  }
	  // Add one chunk for good luck.
	  padding += this.Patch_Margin;
	
	  // Add the prefix.
	  var prefix = text.substring(patch.start2 - padding, patch.start2);
	  if (prefix) {
	    patch.diffs.unshift([DIFF_EQUAL, prefix]);
	  }
	  // Add the suffix.
	  var suffix = text.substring(patch.start2 + patch.length1,
	                              patch.start2 + patch.length1 + padding);
	  if (suffix) {
	    patch.diffs.push([DIFF_EQUAL, suffix]);
	  }
	
	  // Roll back the start points.
	  patch.start1 -= prefix.length;
	  patch.start2 -= prefix.length;
	  // Extend the lengths.
	  patch.length1 += prefix.length + suffix.length;
	  patch.length2 += prefix.length + suffix.length;
	};
	
	
	/**
	 * Compute a list of patches to turn text1 into text2.
	 * Use diffs if provided, otherwise compute it ourselves.
	 * There are four ways to call this function, depending on what data is
	 * available to the caller:
	 * Method 1:
	 * a = text1, b = text2
	 * Method 2:
	 * a = diffs
	 * Method 3 (optimal):
	 * a = text1, b = diffs
	 * Method 4 (deprecated, use method 3):
	 * a = text1, b = text2, c = diffs
	 *
	 * @param {string|!Array.<!diff_match_patch.Diff>} a text1 (methods 1,3,4) or
	 * Array of diff tuples for text1 to text2 (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>} opt_b text2 (methods 1,4) or
	 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>} opt_c Array of diff tuples
	 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of patch objects.
	 */
	diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
	  var text1, diffs;
	  if (typeof a == 'string' && typeof opt_b == 'string' &&
	      typeof opt_c == 'undefined') {
	    // Method 1: text1, text2
	    // Compute diffs from text1 and text2.
	    text1 = /** @type {string} */(a);
	    diffs = this.diff_main(text1, /** @type {string} */(opt_b), true);
	    if (diffs.length > 2) {
	      this.diff_cleanupSemantic(diffs);
	      this.diff_cleanupEfficiency(diffs);
	    }
	  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
	      typeof opt_c == 'undefined') {
	    // Method 2: diffs
	    // Compute text1 from diffs.
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(a);
	    text1 = this.diff_text1(diffs);
	  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
	      typeof opt_c == 'undefined') {
	    // Method 3: text1, diffs
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_b);
	  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
	      opt_c && typeof opt_c == 'object') {
	    // Method 4: text1, text2, diffs
	    // text2 is not used.
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_c);
	  } else {
	    throw new Error('Unknown call format to patch_make.');
	  }
	
	  if (diffs.length === 0) {
	    return [];  // Get rid of the null case.
	  }
	  var patches = [];
	  var patch = new diff_match_patch.patch_obj();
	  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
	  var char_count1 = 0;  // Number of characters into the text1 string.
	  var char_count2 = 0;  // Number of characters into the text2 string.
	  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
	  // text2 (postpatch_text).  We recreate the patches one by one to determine
	  // context info.
	  var prepatch_text = text1;
	  var postpatch_text = text1;
	  for (var x = 0; x < diffs.length; x++) {
	    var diff_type = diffs[x][0];
	    var diff_text = diffs[x][1];
	
	    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
	      // A new patch starts here.
	      patch.start1 = char_count1;
	      patch.start2 = char_count2;
	    }
	
	    switch (diff_type) {
	      case DIFF_INSERT:
	        patch.diffs[patchDiffLength++] = diffs[x];
	        patch.length2 += diff_text.length;
	        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
	                         postpatch_text.substring(char_count2);
	        break;
	      case DIFF_DELETE:
	        patch.length1 += diff_text.length;
	        patch.diffs[patchDiffLength++] = diffs[x];
	        postpatch_text = postpatch_text.substring(0, char_count2) +
	                         postpatch_text.substring(char_count2 +
	                             diff_text.length);
	        break;
	      case DIFF_EQUAL:
	        if (diff_text.length <= 2 * this.Patch_Margin &&
	            patchDiffLength && diffs.length != x + 1) {
	          // Small equality inside a patch.
	          patch.diffs[patchDiffLength++] = diffs[x];
	          patch.length1 += diff_text.length;
	          patch.length2 += diff_text.length;
	        } else if (diff_text.length >= 2 * this.Patch_Margin) {
	          // Time for a new patch.
	          if (patchDiffLength) {
	            this.patch_addContext_(patch, prepatch_text);
	            patches.push(patch);
	            patch = new diff_match_patch.patch_obj();
	            patchDiffLength = 0;
	            // Unlike Unidiff, our patch lists have a rolling context.
	            // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
	            // Update prepatch text & pos to reflect the application of the
	            // just completed patch.
	            prepatch_text = postpatch_text;
	            char_count1 = char_count2;
	          }
	        }
	        break;
	    }
	
	    // Update the current character count.
	    if (diff_type !== DIFF_INSERT) {
	      char_count1 += diff_text.length;
	    }
	    if (diff_type !== DIFF_DELETE) {
	      char_count2 += diff_text.length;
	    }
	  }
	  // Pick up the leftover patch if not empty.
	  if (patchDiffLength) {
	    this.patch_addContext_(patch, prepatch_text);
	    patches.push(patch);
	  }
	
	  return patches;
	};
	
	
	/**
	 * Given an array of patches, return another array that is identical.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of patch objects.
	 */
	diff_match_patch.prototype.patch_deepCopy = function(patches) {
	  // Making deep copies is hard in JavaScript.
	  var patchesCopy = [];
	  for (var x = 0; x < patches.length; x++) {
	    var patch = patches[x];
	    var patchCopy = new diff_match_patch.patch_obj();
	    patchCopy.diffs = [];
	    for (var y = 0; y < patch.diffs.length; y++) {
	      patchCopy.diffs[y] = patch.diffs[y].slice();
	    }
	    patchCopy.start1 = patch.start1;
	    patchCopy.start2 = patch.start2;
	    patchCopy.length1 = patch.length1;
	    patchCopy.length2 = patch.length2;
	    patchesCopy[x] = patchCopy;
	  }
	  return patchesCopy;
	};
	
	
	/**
	 * Merge a set of patches onto the text.  Return a patched text, as well
	 * as a list of true/false values indicating which patches were applied.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
	 * @param {string} text Old text.
	 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
	 *      new text and an array of boolean values.
	 */
	diff_match_patch.prototype.patch_apply = function(patches, text) {
	  if (patches.length == 0) {
	    return [text, []];
	  }
	
	  // Deep copy the patches so that no changes are made to originals.
	  patches = this.patch_deepCopy(patches);
	
	  var nullPadding = this.patch_addPadding(patches);
	  text = nullPadding + text + nullPadding;
	
	  this.patch_splitMax(patches);
	  // delta keeps track of the offset between the expected and actual location
	  // of the previous patch.  If there are patches expected at positions 10 and
	  // 20, but the first patch was found at 12, delta is 2 and the second patch
	  // has an effective expected position of 22.
	  var delta = 0;
	  var results = [];
	  for (var x = 0; x < patches.length; x++) {
	    var expected_loc = patches[x].start2 + delta;
	    var text1 = this.diff_text1(patches[x].diffs);
	    var start_loc;
	    var end_loc = -1;
	    if (text1.length > this.Match_MaxBits) {
	      // patch_splitMax will only provide an oversized pattern in the case of
	      // a monster delete.
	      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
	                                  expected_loc);
	      if (start_loc != -1) {
	        end_loc = this.match_main(text,
	            text1.substring(text1.length - this.Match_MaxBits),
	            expected_loc + text1.length - this.Match_MaxBits);
	        if (end_loc == -1 || start_loc >= end_loc) {
	          // Can't find valid trailing context.  Drop this patch.
	          start_loc = -1;
	        }
	      }
	    } else {
	      start_loc = this.match_main(text, text1, expected_loc);
	    }
	    if (start_loc == -1) {
	      // No match found.  :(
	      results[x] = false;
	      // Subtract the delta for this failed patch from subsequent patches.
	      delta -= patches[x].length2 - patches[x].length1;
	    } else {
	      // Found a match.  :)
	      results[x] = true;
	      delta = start_loc - expected_loc;
	      var text2;
	      if (end_loc == -1) {
	        text2 = text.substring(start_loc, start_loc + text1.length);
	      } else {
	        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
	      }
	      if (text1 == text2) {
	        // Perfect match, just shove the replacement text in.
	        text = text.substring(0, start_loc) +
	               this.diff_text2(patches[x].diffs) +
	               text.substring(start_loc + text1.length);
	      } else {
	        // Imperfect match.  Run a diff to get a framework of equivalent
	        // indices.
	        var diffs = this.diff_main(text1, text2, false);
	        if (text1.length > this.Match_MaxBits &&
	            this.diff_levenshtein(diffs) / text1.length >
	            this.Patch_DeleteThreshold) {
	          // The end points match, but the content is unacceptably bad.
	          results[x] = false;
	        } else {
	          this.diff_cleanupSemanticLossless(diffs);
	          var index1 = 0;
	          var index2;
	          for (var y = 0; y < patches[x].diffs.length; y++) {
	            var mod = patches[x].diffs[y];
	            if (mod[0] !== DIFF_EQUAL) {
	              index2 = this.diff_xIndex(diffs, index1);
	            }
	            if (mod[0] === DIFF_INSERT) {  // Insertion
	              text = text.substring(0, start_loc + index2) + mod[1] +
	                     text.substring(start_loc + index2);
	            } else if (mod[0] === DIFF_DELETE) {  // Deletion
	              text = text.substring(0, start_loc + index2) +
	                     text.substring(start_loc + this.diff_xIndex(diffs,
	                         index1 + mod[1].length));
	            }
	            if (mod[0] !== DIFF_DELETE) {
	              index1 += mod[1].length;
	            }
	          }
	        }
	      }
	    }
	  }
	  // Strip the padding off.
	  text = text.substring(nullPadding.length, text.length - nullPadding.length);
	  return [text, results];
	};
	
	
	/**
	 * Add some padding on text start and end so that edges can match something.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
	 * @return {string} The padding string added to each side.
	 */
	diff_match_patch.prototype.patch_addPadding = function(patches) {
	  var paddingLength = this.Patch_Margin;
	  var nullPadding = '';
	  for (var x = 1; x <= paddingLength; x++) {
	    nullPadding += String.fromCharCode(x);
	  }
	
	  // Bump all the patches forward.
	  for (var x = 0; x < patches.length; x++) {
	    patches[x].start1 += paddingLength;
	    patches[x].start2 += paddingLength;
	  }
	
	  // Add some padding on start of first diff.
	  var patch = patches[0];
	  var diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.unshift([DIFF_EQUAL, nullPadding]);
	    patch.start1 -= paddingLength;  // Should be 0.
	    patch.start2 -= paddingLength;  // Should be 0.
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[0][1].length) {
	    // Grow first equality.
	    var extraLength = paddingLength - diffs[0][1].length;
	    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
	    patch.start1 -= extraLength;
	    patch.start2 -= extraLength;
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }
	
	  // Add some padding on end of last diff.
	  patch = patches[patches.length - 1];
	  diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.push([DIFF_EQUAL, nullPadding]);
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
	    // Grow last equality.
	    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
	    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }
	
	  return nullPadding;
	};
	
	
	/**
	 * Look through the patches and break up any which are longer than the maximum
	 * limit of the match algorithm.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
	 */
	diff_match_patch.prototype.patch_splitMax = function(patches) {
	  var patch_size = this.Match_MaxBits;
	  for (var x = 0; x < patches.length; x++) {
	    if (patches[x].length1 > patch_size) {
	      var bigpatch = patches[x];
	      // Remove the big old patch.
	      patches.splice(x--, 1);
	      var start1 = bigpatch.start1;
	      var start2 = bigpatch.start2;
	      var precontext = '';
	      while (bigpatch.diffs.length !== 0) {
	        // Create one of several smaller patches.
	        var patch = new diff_match_patch.patch_obj();
	        var empty = true;
	        patch.start1 = start1 - precontext.length;
	        patch.start2 = start2 - precontext.length;
	        if (precontext !== '') {
	          patch.length1 = patch.length2 = precontext.length;
	          patch.diffs.push([DIFF_EQUAL, precontext]);
	        }
	        while (bigpatch.diffs.length !== 0 &&
	               patch.length1 < patch_size - this.Patch_Margin) {
	          var diff_type = bigpatch.diffs[0][0];
	          var diff_text = bigpatch.diffs[0][1];
	          if (diff_type === DIFF_INSERT) {
	            // Insertions are harmless.
	            patch.length2 += diff_text.length;
	            start2 += diff_text.length;
	            patch.diffs.push(bigpatch.diffs.shift());
	            empty = false;
	          } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
	                     patch.diffs[0][0] == DIFF_EQUAL &&
	                     diff_text.length > 2 * patch_size) {
	            // This is a large deletion.  Let it pass in one chunk.
	            patch.length1 += diff_text.length;
	            start1 += diff_text.length;
	            empty = false;
	            patch.diffs.push([diff_type, diff_text]);
	            bigpatch.diffs.shift();
	          } else {
	            // Deletion or equality.  Only take as much as we can stomach.
	            diff_text = diff_text.substring(0,
	                patch_size - patch.length1 - this.Patch_Margin);
	            patch.length1 += diff_text.length;
	            start1 += diff_text.length;
	            if (diff_type === DIFF_EQUAL) {
	              patch.length2 += diff_text.length;
	              start2 += diff_text.length;
	            } else {
	              empty = false;
	            }
	            patch.diffs.push([diff_type, diff_text]);
	            if (diff_text == bigpatch.diffs[0][1]) {
	              bigpatch.diffs.shift();
	            } else {
	              bigpatch.diffs[0][1] =
	                  bigpatch.diffs[0][1].substring(diff_text.length);
	            }
	          }
	        }
	        // Compute the head context for the next patch.
	        precontext = this.diff_text2(patch.diffs);
	        precontext =
	            precontext.substring(precontext.length - this.Patch_Margin);
	        // Append the end context for this patch.
	        var postcontext = this.diff_text1(bigpatch.diffs)
	                              .substring(0, this.Patch_Margin);
	        if (postcontext !== '') {
	          patch.length1 += postcontext.length;
	          patch.length2 += postcontext.length;
	          if (patch.diffs.length !== 0 &&
	              patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
	            patch.diffs[patch.diffs.length - 1][1] += postcontext;
	          } else {
	            patch.diffs.push([DIFF_EQUAL, postcontext]);
	          }
	        }
	        if (!empty) {
	          patches.splice(++x, 0, patch);
	        }
	      }
	    }
	  }
	};
	
	
	/**
	 * Take a list of patches and return a textual representation.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
	 * @return {string} Text representation of patches.
	 */
	diff_match_patch.prototype.patch_toText = function(patches) {
	  var text = [];
	  for (var x = 0; x < patches.length; x++) {
	    text[x] = patches[x];
	  }
	  return text.join('');
	};
	
	
	/**
	 * Parse a textual representation of patches and return a list of patch objects.
	 * @param {string} textline Text representation of patches.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of patch objects.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.patch_fromText = function(textline) {
	  var patches = [];
	  if (!textline) {
	    return patches;
	  }
	  var text = textline.split('\n');
	  var textPointer = 0;
	  var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
	  while (textPointer < text.length) {
	    var m = text[textPointer].match(patchHeader);
	    if (!m) {
	      throw new Error('Invalid patch string: ' + text[textPointer]);
	    }
	    var patch = new diff_match_patch.patch_obj();
	    patches.push(patch);
	    patch.start1 = parseInt(m[1], 10);
	    if (m[2] === '') {
	      patch.start1--;
	      patch.length1 = 1;
	    } else if (m[2] == '0') {
	      patch.length1 = 0;
	    } else {
	      patch.start1--;
	      patch.length1 = parseInt(m[2], 10);
	    }
	
	    patch.start2 = parseInt(m[3], 10);
	    if (m[4] === '') {
	      patch.start2--;
	      patch.length2 = 1;
	    } else if (m[4] == '0') {
	      patch.length2 = 0;
	    } else {
	      patch.start2--;
	      patch.length2 = parseInt(m[4], 10);
	    }
	    textPointer++;
	
	    while (textPointer < text.length) {
	      var sign = text[textPointer].charAt(0);
	      try {
	        var line = decodeURI(text[textPointer].substring(1));
	      } catch (ex) {
	        // Malformed URI sequence.
	        throw new Error('Illegal escape in patch_fromText: ' + line);
	      }
	      if (sign == '-') {
	        // Deletion.
	        patch.diffs.push([DIFF_DELETE, line]);
	      } else if (sign == '+') {
	        // Insertion.
	        patch.diffs.push([DIFF_INSERT, line]);
	      } else if (sign == ' ') {
	        // Minor equality.
	        patch.diffs.push([DIFF_EQUAL, line]);
	      } else if (sign == '@') {
	        // Start of next patch.
	        break;
	      } else if (sign === '') {
	        // Blank line?  Whatever.
	      } else {
	        // WTF?
	        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
	      }
	      textPointer++;
	    }
	  }
	  return patches;
	};
	
	
	/**
	 * Class representing one patch operation.
	 * @constructor
	 */
	diff_match_patch.patch_obj = function() {
	  /** @type {!Array.<!diff_match_patch.Diff>} */
	  this.diffs = [];
	  /** @type {?number} */
	  this.start1 = null;
	  /** @type {?number} */
	  this.start2 = null;
	  /** @type {number} */
	  this.length1 = 0;
	  /** @type {number} */
	  this.length2 = 0;
	};
	
	
	/**
	 * Emmulate GNU diff's format.
	 * Header: @@ -382,8 +481,9 @@
	 * Indicies are printed as 1-based, not 0-based.
	 * @return {string} The GNU diff string.
	 */
	diff_match_patch.patch_obj.prototype.toString = function() {
	  var coords1, coords2;
	  if (this.length1 === 0) {
	    coords1 = this.start1 + ',0';
	  } else if (this.length1 == 1) {
	    coords1 = this.start1 + 1;
	  } else {
	    coords1 = (this.start1 + 1) + ',' + this.length1;
	  }
	  if (this.length2 === 0) {
	    coords2 = this.start2 + ',0';
	  } else if (this.length2 == 1) {
	    coords2 = this.start2 + 1;
	  } else {
	    coords2 = (this.start2 + 1) + ',' + this.length2;
	  }
	  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
	  var op;
	  // Escape the body of the patch with %xx notation.
	  for (var x = 0; x < this.diffs.length; x++) {
	    switch (this.diffs[x][0]) {
	      case DIFF_INSERT:
	        op = '+';
	        break;
	      case DIFF_DELETE:
	        op = '-';
	        break;
	      case DIFF_EQUAL:
	        op = ' ';
	        break;
	    }
	    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
	  }
	  return text.join('').replace(/%20/g, ' ');
	};
	
	
	// Export these global variables so that they survive Google's JS compiler.
	// In a browser, 'this' will be 'window'.
	// In node.js 'this' will be a global object.
	this['diff_match_patch'] = diff_match_patch;
	this['DIFF_DELETE'] = DIFF_DELETE;
	this['DIFF_INSERT'] = DIFF_INSERT;
	this['DIFF_EQUAL'] = DIFF_EQUAL;
	


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./contexts/context": 23,
		"./contexts/context.js": 23,
		"./contexts/diff": 22,
		"./contexts/diff.js": 22,
		"./contexts/patch": 25,
		"./contexts/patch.js": 25,
		"./contexts/reverse": 26,
		"./contexts/reverse.js": 26,
		"./date-reviver": 24,
		"./date-reviver.js": 24,
		"./diffpatcher": 19,
		"./diffpatcher.js": 19,
		"./environment": 18,
		"./environment.js": 18,
		"./filters/arrays": 29,
		"./filters/arrays.js": 29,
		"./filters/dates": 31,
		"./filters/dates.js": 31,
		"./filters/lcs": 30,
		"./filters/lcs.js": 30,
		"./filters/nested": 28,
		"./filters/nested.js": 28,
		"./filters/texts": 32,
		"./filters/texts.js": 32,
		"./filters/trivial": 27,
		"./filters/trivial.js": 27,
		"./formatters/annotated": 36,
		"./formatters/annotated.js": 36,
		"./formatters/base": 37,
		"./formatters/base.js": 37,
		"./formatters/console": 38,
		"./formatters/console.js": 38,
		"./formatters/html": 46,
		"./formatters/html.js": 46,
		"./formatters/index": 47,
		"./formatters/index.js": 47,
		"./formatters/jsonpatch": 48,
		"./formatters/jsonpatch.js": 48,
		"./main": 17,
		"./main-formatters": 50,
		"./main-formatters.js": 50,
		"./main-full": 51,
		"./main-full.js": 51,
		"./main.js": 17,
		"./pipe": 21,
		"./pipe.js": 21,
		"./processor": 20,
		"./processor.js": 20
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 35;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var base = __webpack_require__(37);
	var BaseFormatter = base.BaseFormatter;
	
	var AnnotatedFormatter = function AnnotatedFormatter() {
	  this.includeMoveDestinations = false;
	};
	
	AnnotatedFormatter.prototype = new BaseFormatter();
	
	AnnotatedFormatter.prototype.prepareContext = function(context) {
	  BaseFormatter.prototype.prepareContext.call(this, context);
	  context.indent = function(levels) {
	    this.indentLevel = (this.indentLevel || 0) +
	      (typeof levels === 'undefined' ? 1 : levels);
	    this.indentPad = new Array(this.indentLevel + 1).join('&nbsp;&nbsp;');
	  };
	  context.row = function(json, htmlNote) {
	    context.out('<tr><td style="white-space: nowrap;">' +
	      '<pre class="jsondiffpatch-annotated-indent" style="display: inline-block">');
	    context.out(context.indentPad);
	    context.out('</pre><pre style="display: inline-block">');
	    context.out(json);
	    context.out('</pre></td><td class="jsondiffpatch-delta-note"><div>');
	    context.out(htmlNote);
	    context.out('</div></td></tr>');
	  };
	};
	
	AnnotatedFormatter.prototype.typeFormattterErrorFormatter = function(context, err) {
	  context.row('', '<pre class="jsondiffpatch-error">' + err + '</pre>');
	};
	
	AnnotatedFormatter.prototype.formatTextDiffString = function(context, value) {
	  var lines = this.parseTextDiff(value);
	  context.out('<ul class="jsondiffpatch-textdiff">');
	  for (var i = 0, l = lines.length; i < l; i++) {
	    var line = lines[i];
	    context.out('<li>' +
	      '<div class="jsondiffpatch-textdiff-location">' +
	      '<span class="jsondiffpatch-textdiff-line-number">' +
	      line.location.line +
	      '</span>' +
	      '<span class="jsondiffpatch-textdiff-char">' +
	      line.location.chr +
	      '</span>' +
	      '</div>' +
	      '<div class="jsondiffpatch-textdiff-line">');
	    var pieces = line.pieces;
	    for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
	      var piece = pieces[pieceIndex];
	      context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' +
	        piece.text + '</span>');
	    }
	    context.out('</div></li>');
	  }
	  context.out('</ul>');
	};
	
	AnnotatedFormatter.prototype.rootBegin = function(context, type, nodeType) {
	  context.out('<table class="jsondiffpatch-annotated-delta">');
	  if (type === 'node') {
	    context.row('{');
	    context.indent();
	  }
	  if (nodeType === 'array') {
	    context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
	  }
	};
	
	AnnotatedFormatter.prototype.rootEnd = function(context, type) {
	  if (type === 'node') {
	    context.indent(-1);
	    context.row('}');
	  }
	  context.out('</table>');
	};
	
	AnnotatedFormatter.prototype.nodeBegin = function(context, key, leftKey, type, nodeType) {
	  context.row('&quot;' + key + '&quot;: {');
	  if (type === 'node') {
	    context.indent();
	  }
	  if (nodeType === 'array') {
	    context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
	  }
	};
	
	AnnotatedFormatter.prototype.nodeEnd = function(context, key, leftKey, type, nodeType, isLast) {
	  if (type === 'node') {
	    context.indent(-1);
	  }
	  context.row('}' + (isLast ? '' : ','));
	};
	
	/* jshint camelcase: false */
	
	AnnotatedFormatter.prototype.format_unchanged = function() {
	  return;
	};
	
	AnnotatedFormatter.prototype.format_movedestination = function() {
	  return;
	};
	
	
	AnnotatedFormatter.prototype.format_node = function(context, delta, left) {
	  // recurse
	  this.formatDeltaChildren(context, delta, left);
	};
	
	var wrapPropertyName = function(name) {
	  return '<pre style="display:inline-block">&quot;' + name + '&quot;</pre>';
	};
	
	var deltaAnnotations = {
	  added: function(delta, left, key, leftKey) {
	    var formatLegend = ' <pre>([newValue])</pre>';
	    if (typeof leftKey === 'undefined') {
	      return 'new value' + formatLegend;
	    }
	    if (typeof leftKey === 'number') {
	      return 'insert at index ' + leftKey + formatLegend;
	    }
	    return 'add property ' + wrapPropertyName(leftKey) + formatLegend;
	  },
	  modified: function(delta, left, key, leftKey) {
	    var formatLegend = ' <pre>([previousValue, newValue])</pre>';
	    if (typeof leftKey === 'undefined') {
	      return 'modify value' + formatLegend;
	    }
	    if (typeof leftKey === 'number') {
	      return 'modify at index ' + leftKey + formatLegend;
	    }
	    return 'modify property ' + wrapPropertyName(leftKey) + formatLegend;
	  },
	  deleted: function(delta, left, key, leftKey) {
	    var formatLegend = ' <pre>([previousValue, 0, 0])</pre>';
	    if (typeof leftKey === 'undefined') {
	      return 'delete value' + formatLegend;
	    }
	    if (typeof leftKey === 'number') {
	      return 'remove index ' + leftKey + formatLegend;
	    }
	    return 'delete property ' + wrapPropertyName(leftKey) + formatLegend;
	  },
	  moved: function(delta, left, key, leftKey) {
	    return 'move from <span title="(position to remove at original state)">index ' +
	      leftKey + '</span> to ' +
	      '<span title="(position to insert at final state)">index ' +
	      delta[1] + '</span>';
	  },
	  textdiff: function(delta, left, key, leftKey) {
	    var location = (typeof leftKey === 'undefined') ?
	      '' : (
	        (typeof leftKey === 'number') ?
	        ' at index ' + leftKey :
	        ' at property ' + wrapPropertyName(leftKey)
	      );
	    return 'text diff' + location + ', format is ' +
	      '<a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">' +
	      'a variation of Unidiff</a>';
	  }
	};
	
	var formatAnyChange = function(context, delta) {
	  var deltaType = this.getDeltaType(delta);
	  var annotator = deltaAnnotations[deltaType];
	  var htmlNote = annotator && annotator.apply(annotator,
	    Array.prototype.slice.call(arguments, 1));
	  var json = JSON.stringify(delta, null, 2);
	  if (deltaType === 'textdiff') {
	    // split text diffs lines
	    json = json.split('\\n').join('\\n"+\n   "');
	  }
	  context.indent();
	  context.row(json, htmlNote);
	  context.indent(-1);
	};
	
	AnnotatedFormatter.prototype.format_added = formatAnyChange;
	AnnotatedFormatter.prototype.format_modified = formatAnyChange;
	AnnotatedFormatter.prototype.format_deleted = formatAnyChange;
	AnnotatedFormatter.prototype.format_moved = formatAnyChange;
	AnnotatedFormatter.prototype.format_textdiff = formatAnyChange;
	
	/* jshint camelcase: true */
	
	exports.AnnotatedFormatter = AnnotatedFormatter;
	
	var defaultInstance;
	
	exports.format = function(delta, left) {
	  if (!defaultInstance) {
	    defaultInstance = new AnnotatedFormatter();
	  }
	  return defaultInstance.format(delta, left);
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	var isArray = (typeof Array.isArray === 'function') ?
	  // use native function
	  Array.isArray :
	  // use instanceof operator
	  function(a) {
	    return a instanceof Array;
	  };
	
	var getObjectKeys = typeof Object.keys === 'function' ?
	  function(obj) {
	    return Object.keys(obj);
	  } : function(obj) {
	    var names = [];
	    for (var property in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, property)) {
	        names.push(property);
	      }
	    }
	    return names;
	  };
	
	var trimUnderscore = function(str) {
	  if (str.substr(0, 1) === '_') {
	    return str.slice(1);
	  }
	  return str;
	};
	
	var arrayKeyToSortNumber = function(key) {
	  if (key === '_t') {
	    return -1;
	  } else {
	    if (key.substr(0, 1) === '_') {
	      return parseInt(key.slice(1), 10);
	    } else {
	      return parseInt(key, 10) + 0.1;
	    }
	  }
	};
	
	var arrayKeyComparer = function(key1, key2) {
	  return arrayKeyToSortNumber(key1) - arrayKeyToSortNumber(key2);
	};
	
	var BaseFormatter = function BaseFormatter() {};
	
	BaseFormatter.prototype.format = function(delta, left) {
	  var context = {};
	  this.prepareContext(context);
	  this.recurse(context, delta, left);
	  return this.finalize(context);
	};
	
	BaseFormatter.prototype.prepareContext = function(context) {
	  context.buffer = [];
	  context.out = function() {
	    this.buffer.push.apply(this.buffer, arguments);
	  };
	};
	
	BaseFormatter.prototype.typeFormattterNotFound = function(context, deltaType) {
	  throw new Error('cannot format delta type: ' + deltaType);
	};
	
	BaseFormatter.prototype.typeFormattterErrorFormatter = function(context, err) {
	  return err.toString();
	};
	
	BaseFormatter.prototype.finalize = function(context) {
	  if (isArray(context.buffer)) {
	    return context.buffer.join('');
	  }
	};
	
	BaseFormatter.prototype.recurse = function(context, delta, left, key, leftKey, movedFrom, isLast) {
	
	  var useMoveOriginHere = delta && movedFrom;
	  var leftValue = useMoveOriginHere ? movedFrom.value : left;
	
	  if (typeof delta === 'undefined' && typeof key === 'undefined') {
	    return undefined;
	  }
	
	  var type = this.getDeltaType(delta, movedFrom);
	  var nodeType = type === 'node' ? (delta._t === 'a' ? 'array' : 'object') : '';
	
	  if (typeof key !== 'undefined') {
	    this.nodeBegin(context, key, leftKey, type, nodeType, isLast);
	  } else {
	    this.rootBegin(context, type, nodeType);
	  }
	
	  var typeFormattter;
	  try {
	    typeFormattter = this['format_' + type] || this.typeFormattterNotFound(context, type);
	    typeFormattter.call(this, context, delta, leftValue, key, leftKey, movedFrom);
	  } catch (err) {
	    this.typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom);
	    if (typeof console !== 'undefined' && console.error) {
	      console.error(err.stack);
	    }
	  }
	
	  if (typeof key !== 'undefined') {
	    this.nodeEnd(context, key, leftKey, type, nodeType, isLast);
	  } else {
	    this.rootEnd(context, type, nodeType);
	  }
	};
	
	BaseFormatter.prototype.formatDeltaChildren = function(context, delta, left) {
	  var self = this;
	  this.forEachDeltaKey(delta, left, function(key, leftKey, movedFrom, isLast) {
	    self.recurse(context, delta[key], left ? left[leftKey] : undefined,
	      key, leftKey, movedFrom, isLast);
	  });
	};
	
	BaseFormatter.prototype.forEachDeltaKey = function(delta, left, fn) {
	  var keys = getObjectKeys(delta);
	  var arrayKeys = delta._t === 'a';
	  var moveDestinations = {};
	  var name;
	  if (typeof left !== 'undefined') {
	    for (name in left) {
	      if (typeof delta[name] === 'undefined' &&
	        ((!arrayKeys) || typeof delta['_' + name] === 'undefined')) {
	        keys.push(name);
	      }
	    }
	  }
	  // look for move destinations
	  for (name in delta) {
	    var value = delta[name];
	    if (isArray(value) && value[2] === 3) {
	      moveDestinations[value[1].toString()] = {
	        key: name,
	        value: left && left[parseInt(name.substr(1))]
	      };
	      if (this.includeMoveDestinations !== false) {
	        if ((typeof left === 'undefined') &&
	          (typeof delta[value[1]] === 'undefined')) {
	          keys.push(value[1].toString());
	        }
	      }
	    }
	  }
	  if (arrayKeys) {
	    keys.sort(arrayKeyComparer);
	  } else {
	    keys.sort();
	  }
	  for (var index = 0, length = keys.length; index < length; index++) {
	    var key = keys[index];
	    if (arrayKeys && key === '_t') {
	      continue;
	    }
	    var leftKey = arrayKeys ?
	      (typeof key === 'number' ? key : parseInt(trimUnderscore(key), 10)) :
	      key;
	    var isLast = (index === length - 1);
	    fn(key, leftKey, moveDestinations[leftKey], isLast);
	  }
	};
	
	BaseFormatter.prototype.getDeltaType = function(delta, movedFrom) {
	  if (typeof delta === 'undefined') {
	    if (typeof movedFrom !== 'undefined') {
	      return 'movedestination';
	    }
	    return 'unchanged';
	  }
	  if (isArray(delta)) {
	    if (delta.length === 1) {
	      return 'added';
	    }
	    if (delta.length === 2) {
	      return 'modified';
	    }
	    if (delta.length === 3 && delta[2] === 0) {
	      return 'deleted';
	    }
	    if (delta.length === 3 && delta[2] === 2) {
	      return 'textdiff';
	    }
	    if (delta.length === 3 && delta[2] === 3) {
	      return 'moved';
	    }
	  } else if (typeof delta === 'object') {
	    return 'node';
	  }
	  return 'unknown';
	};
	
	BaseFormatter.prototype.parseTextDiff = function(value) {
	  var output = [];
	  var lines = value.split('\n@@ ');
	  for (var i = 0, l = lines.length; i < l; i++) {
	    var line = lines[i];
	    var lineOutput = {
	      pieces: []
	    };
	    var location = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(line).slice(1);
	    lineOutput.location = {
	      line: location[0],
	      chr: location[1]
	    };
	    var pieces = line.split('\n').slice(1);
	    for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
	      var piece = pieces[pieceIndex];
	      if (!piece.length) {
	        continue;
	      }
	      var pieceOutput = {
	        type: 'context'
	      };
	      if (piece.substr(0, 1) === '+') {
	        pieceOutput.type = 'added';
	      } else if (piece.substr(0, 1) === '-') {
	        pieceOutput.type = 'deleted';
	      }
	      pieceOutput.text = piece.slice(1);
	      lineOutput.pieces.push(pieceOutput);
	    }
	    output.push(lineOutput);
	  }
	  return output;
	};
	
	exports.BaseFormatter = BaseFormatter;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var chalk = __webpack_require__(39);
	var base = __webpack_require__(37);
	var BaseFormatter = base.BaseFormatter;
	
	var colors = {
	  added: chalk.green,
	  deleted: chalk.red,
	  movedestination: chalk.gray,
	  moved: chalk.yellow,
	  unchanged: chalk.gray,
	  error: chalk.white.bgRed,
	  textDiffLine: chalk.gray
	};
	
	var ConsoleFormatter = function ConsoleFormatter() {
	  this.includeMoveDestinations = false;
	};
	
	ConsoleFormatter.prototype = new BaseFormatter();
	
	ConsoleFormatter.prototype.prepareContext = function(context) {
	  BaseFormatter.prototype.prepareContext.call(this, context);
	  context.indent = function(levels) {
	    this.indentLevel = (this.indentLevel || 0) +
	      (typeof levels === 'undefined' ? 1 : levels);
	    this.indentPad = new Array(this.indentLevel + 1).join('  ');
	    this.outLine();
	  };
	  context.outLine = function() {
	    this.buffer.push('\n' + (this.indentPad || ''));
	  };
	  context.out = function() {
	    for (var i = 0, l = arguments.length; i < l; i++) {
	      var lines = arguments[i].split('\n');
	      var text = lines.join('\n' + (this.indentPad || ''));
	      if (this.color && this.color[0]) {
	        text = this.color[0](text);
	      }
	      this.buffer.push(text);
	    }
	  };
	  context.pushColor = function(color) {
	    this.color = this.color || [];
	    this.color.unshift(color);
	  };
	  context.popColor = function() {
	    this.color = this.color || [];
	    this.color.shift();
	  };
	};
	
	ConsoleFormatter.prototype.typeFormattterErrorFormatter = function(context, err) {
	  context.pushColor(colors.error);
	  context.out('[ERROR]' + err);
	  context.popColor();
	};
	
	ConsoleFormatter.prototype.formatValue = function(context, value) {
	  context.out(JSON.stringify(value, null, 2));
	};
	
	ConsoleFormatter.prototype.formatTextDiffString = function(context, value) {
	  var lines = this.parseTextDiff(value);
	  context.indent();
	  for (var i = 0, l = lines.length; i < l; i++) {
	    var line = lines[i];
	    context.pushColor(colors.textDiffLine);
	    context.out(line.location.line + ',' + line.location.chr + ' ');
	    context.popColor();
	    var pieces = line.pieces;
	    for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
	      var piece = pieces[pieceIndex];
	      context.pushColor(colors[piece.type]);
	      context.out(piece.text);
	      context.popColor();
	    }
	    if (i < l - 1) {
	      context.outLine();
	    }
	  }
	  context.indent(-1);
	};
	
	ConsoleFormatter.prototype.rootBegin = function(context, type, nodeType) {
	  context.pushColor(colors[type]);
	  if (type === 'node') {
	    context.out(nodeType === 'array' ? '[' : '{');
	    context.indent();
	  }
	};
	
	ConsoleFormatter.prototype.rootEnd = function(context, type, nodeType) {
	  if (type === 'node') {
	    context.indent(-1);
	    context.out(nodeType === 'array' ? ']' : '}');
	  }
	  context.popColor();
	};
	
	ConsoleFormatter.prototype.nodeBegin = function(context, key, leftKey, type, nodeType) {
	  context.pushColor(colors[type]);
	  context.out(leftKey + ': ');
	  if (type === 'node') {
	    context.out(nodeType === 'array' ? '[' : '{');
	    context.indent();
	  }
	};
	
	ConsoleFormatter.prototype.nodeEnd = function(context, key, leftKey, type, nodeType, isLast) {
	  if (type === 'node') {
	    context.indent(-1);
	    context.out(nodeType === 'array' ? ']' : '}' +
	      (isLast ? '' : ','));
	  }
	  if (!isLast) {
	    context.outLine();
	  }
	  context.popColor();
	};
	
	/* jshint camelcase: false */
	
	ConsoleFormatter.prototype.format_unchanged = function(context, delta, left) {
	  if (typeof left === 'undefined') {
	    return;
	  }
	  this.formatValue(context, left);
	};
	
	ConsoleFormatter.prototype.format_movedestination = function(context, delta, left) {
	  if (typeof left === 'undefined') {
	    return;
	  }
	  this.formatValue(context, left);
	};
	
	ConsoleFormatter.prototype.format_node = function(context, delta, left) {
	  // recurse
	  this.formatDeltaChildren(context, delta, left);
	};
	
	ConsoleFormatter.prototype.format_added = function(context, delta) {
	  this.formatValue(context, delta[0]);
	};
	
	ConsoleFormatter.prototype.format_modified = function(context, delta) {
	  context.pushColor(colors.deleted);
	  this.formatValue(context, delta[0]);
	  context.popColor();
	  context.out(' => ');
	  context.pushColor(colors.added);
	  this.formatValue(context, delta[1]);
	  context.popColor();
	};
	
	ConsoleFormatter.prototype.format_deleted = function(context, delta) {
	  this.formatValue(context, delta[0]);
	};
	
	ConsoleFormatter.prototype.format_moved = function(context, delta) {
	  context.out('==> ' + delta[1]);
	};
	
	ConsoleFormatter.prototype.format_textdiff = function(context, delta) {
	  this.formatTextDiffString(context, delta[0]);
	};
	
	/* jshint camelcase: true */
	
	exports.ConsoleFormatter = ConsoleFormatter;
	
	var defaultInstance;
	
	var format = function(delta, left) {
	  if (!defaultInstance) {
	    defaultInstance = new ConsoleFormatter();
	  }
	  return defaultInstance.format(delta, left);
	};
	
	exports.log = function(delta, left) {
	  console.log(format(delta, left));
	};
	
	exports.format = format;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var escapeStringRegexp = __webpack_require__(40);
	var ansiStyles = __webpack_require__(41);
	var stripAnsi = __webpack_require__(42);
	var hasAnsi = __webpack_require__(44);
	var supportsColor = __webpack_require__(45);
	var defineProps = Object.defineProperties;
	var chalk = module.exports;
	
	function build(_styles) {
		var builder = function builder() {
			return applyStyle.apply(builder, arguments);
		};
		builder._styles = _styles;
		// __proto__ is used because we must return a function, but there is
		// no way to create a function with a different prototype.
		builder.__proto__ = proto;
		return builder;
	}
	
	var styles = (function () {
		var ret = {};
	
		ansiStyles.grey = ansiStyles.gray;
	
		Object.keys(ansiStyles).forEach(function (key) {
			ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
	
			ret[key] = {
				get: function () {
					return build(this._styles.concat(key));
				}
			};
		});
	
		return ret;
	})();
	
	var proto = defineProps(function chalk() {}, styles);
	
	function applyStyle() {
		// support varags, but simply cast to string in case there's only one arg
		var args = arguments;
		var argsLen = args.length;
		var str = argsLen !== 0 && String(arguments[0]);
		if (argsLen > 1) {
			// don't slice `arguments`, it prevents v8 optimizations
			for (var a = 1; a < argsLen; a++) {
				str += ' ' + args[a];
			}
		}
	
		if (!chalk.enabled || !str) {
			return str;
		}
	
		/*jshint validthis: true*/
		var nestedStyles = this._styles;
	
		for (var i = 0; i < nestedStyles.length; i++) {
			var code = ansiStyles[nestedStyles[i]];
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			str = code.open + str.replace(code.closeRe, code.open) + code.close;
		}
	
		return str;
	}
	
	function init() {
		var ret = {};
	
		Object.keys(styles).forEach(function (name) {
			ret[name] = {
				get: function () {
					return build([name]);
				}
			};
		});
	
		return ret;
	}
	
	defineProps(chalk, init());
	
	chalk.styles = ansiStyles;
	chalk.hasColor = hasAnsi;
	chalk.stripColor = stripAnsi;
	chalk.supportsColor = supportsColor;
	
	// detect mode if not set manually
	if (chalk.enabled === undefined) {
		chalk.enabled = chalk.supportsColor;
	}


/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
	
	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}
	
		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	var styles = module.exports;
	
	var codes = {
		reset: [0, 0],
	
		bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
		dim: [2, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		hidden: [8, 28],
		strikethrough: [9, 29],
	
		black: [30, 39],
		red: [31, 39],
		green: [32, 39],
		yellow: [33, 39],
		blue: [34, 39],
		magenta: [35, 39],
		cyan: [36, 39],
		white: [37, 39],
		gray: [90, 39],
	
		bgBlack: [40, 49],
		bgRed: [41, 49],
		bgGreen: [42, 49],
		bgYellow: [43, 49],
		bgBlue: [44, 49],
		bgMagenta: [45, 49],
		bgCyan: [46, 49],
		bgWhite: [47, 49]
	};
	
	Object.keys(codes).forEach(function (key) {
		var val = codes[key];
		var style = styles[key] = {};
		style.open = '\u001b[' + val[0] + 'm';
		style.close = '\u001b[' + val[1] + 'm';
	});


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(43)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /\u001b\[(?:[0-9]{1,3}(?:;[0-9]{1,3})*)?[m|K]/g;
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(43);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	module.exports = (function () {
		if (process.argv.indexOf('--no-color') !== -1) {
			return false;
		}
	
		if (process.argv.indexOf('--color') !== -1) {
			return true;
		}
	
		if (process.stdout && !process.stdout.isTTY) {
			return false;
		}
	
		if (process.platform === 'win32') {
			return true;
		}
	
		if ('COLORTERM' in process.env) {
			return true;
		}
	
		if (process.env.TERM === 'dumb') {
			return false;
		}
	
		if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
			return true;
		}
	
		return false;
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var base = __webpack_require__(37);
	var BaseFormatter = base.BaseFormatter;
	
	var HtmlFormatter = function HtmlFormatter() {};
	
	HtmlFormatter.prototype = new BaseFormatter();
	
	function htmlEscape(text) {
	  var html = text;
	  var replacements = [
	    [/&/g, '&amp;'],
	    [/</g, '&lt;'],
	    [/>/g, '&gt;'],
	    [/'/g, '&apos;'],
	    [/"/g, '&quot;']
	  ];
	  for (var i = 0; i < replacements.length; i++) {
	    html = html.replace(replacements[i][0], replacements[i][1]);
	  }
	  return html;
	}
	
	HtmlFormatter.prototype.typeFormattterErrorFormatter = function(context, err) {
	  context.out('<pre class="jsondiffpatch-error">' + err + '</pre>');
	};
	
	HtmlFormatter.prototype.formatValue = function(context, value) {
	  context.out('<pre>' + htmlEscape(JSON.stringify(value, null, 2)) + '</pre>');
	};
	
	HtmlFormatter.prototype.formatTextDiffString = function(context, value) {
	  var lines = this.parseTextDiff(value);
	  context.out('<ul class="jsondiffpatch-textdiff">');
	  for (var i = 0, l = lines.length; i < l; i++) {
	    var line = lines[i];
	    context.out('<li>' +
	      '<div class="jsondiffpatch-textdiff-location">' +
	      '<span class="jsondiffpatch-textdiff-line-number">' +
	      line.location.line +
	      '</span>' +
	      '<span class="jsondiffpatch-textdiff-char">' +
	      line.location.chr +
	      '</span>' +
	      '</div>' +
	      '<div class="jsondiffpatch-textdiff-line">');
	    var pieces = line.pieces;
	    for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
	      /* global unescape */
	      var piece = pieces[pieceIndex];
	      context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' +
	        htmlEscape(unescape(piece.text)) + '</span>');
	    }
	    context.out('</div></li>');
	  }
	  context.out('</ul>');
	};
	
	var adjustArrows = function jsondiffpatchHtmlFormatterAdjustArrows(node) {
	  node = node || document;
	  var getElementText = function(el) {
	    return el.textContent || el.innerText;
	  };
	  var eachByQuery = function(el, query, fn) {
	    var elems = el.querySelectorAll(query);
	    for (var i = 0, l = elems.length; i < l; i++) {
	      fn(elems[i]);
	    }
	  };
	  var eachChildren = function(el, fn) {
	    for (var i = 0, l = el.children.length; i < l; i++) {
	      fn(el.children[i], i);
	    }
	  };
	  eachByQuery(node, '.jsondiffpatch-arrow', function(arrow) {
	    var arrowParent = arrow.parentNode;
	    var svg = arrow.children[0],
	      path = svg.children[1];
	    svg.style.display = 'none';
	    var destination = getElementText(arrowParent.querySelector('.jsondiffpatch-moved-destination'));
	    var container = arrowParent.parentNode;
	    var destinationElem;
	    eachChildren(container, function(child) {
	      if (child.getAttribute('data-key') === destination) {
	        destinationElem = child;
	      }
	    });
	    if (!destinationElem) {
	      return;
	    }
	    try {
	      var distance = destinationElem.offsetTop - arrowParent.offsetTop;
	      svg.setAttribute('height', Math.abs(distance) + 6);
	      arrow.style.top = (-8 + (distance > 0 ? 0 : distance)) + 'px';
	      var curve = distance > 0 ?
	        'M30,0 Q-10,' + Math.round(distance / 2) + ' 26,' + (distance - 4) :
	        'M30,' + (-distance) + ' Q-10,' + Math.round(-distance / 2) + ' 26,4';
	      path.setAttribute('d', curve);
	      svg.style.display = '';
	    } catch (err) {
	      return;
	    }
	  });
	};
	
	HtmlFormatter.prototype.rootBegin = function(context, type, nodeType) {
	  var nodeClass = 'jsondiffpatch-' + type +
	    (nodeType ? ' jsondiffpatch-child-node-type-' + nodeType : '');
	  context.out('<div class="jsondiffpatch-delta ' + nodeClass + '">');
	};
	
	HtmlFormatter.prototype.rootEnd = function(context) {
	  context.out('</div>' + (context.hasArrows ?
	    ('<script type="text/javascript">setTimeout(' +
	      adjustArrows.toString() +
	      ',10);</script>') : ''));
	};
	
	HtmlFormatter.prototype.nodeBegin = function(context, key, leftKey, type, nodeType) {
	  var nodeClass = 'jsondiffpatch-' + type +
	    (nodeType ? ' jsondiffpatch-child-node-type-' + nodeType : '');
	  context.out('<li class="' + nodeClass + '" data-key="' + leftKey + '">' +
	    '<div class="jsondiffpatch-property-name">' + leftKey + '</div>');
	};
	
	
	HtmlFormatter.prototype.nodeEnd = function(context) {
	  context.out('</li>');
	};
	
	/* jshint camelcase: false */
	
	HtmlFormatter.prototype.format_unchanged = function(context, delta, left) {
	  if (typeof left === 'undefined') {
	    return;
	  }
	  context.out('<div class="jsondiffpatch-value">');
	  this.formatValue(context, left);
	  context.out('</div>');
	};
	
	HtmlFormatter.prototype.format_movedestination = function(context, delta, left) {
	  if (typeof left === 'undefined') {
	    return;
	  }
	  context.out('<div class="jsondiffpatch-value">');
	  this.formatValue(context, left);
	  context.out('</div>');
	};
	
	HtmlFormatter.prototype.format_node = function(context, delta, left) {
	  // recurse
	  var nodeType = (delta._t === 'a') ? 'array' : 'object';
	  context.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-' + nodeType + '">');
	  this.formatDeltaChildren(context, delta, left);
	  context.out('</ul>');
	};
	
	HtmlFormatter.prototype.format_added = function(context, delta) {
	  context.out('<div class="jsondiffpatch-value">');
	  this.formatValue(context, delta[0]);
	  context.out('</div>');
	};
	
	HtmlFormatter.prototype.format_modified = function(context, delta) {
	  context.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">');
	  this.formatValue(context, delta[0]);
	  context.out('</div>' +
	    '<div class="jsondiffpatch-value jsondiffpatch-right-value">');
	  this.formatValue(context, delta[1]);
	  context.out('</div>');
	};
	
	HtmlFormatter.prototype.format_deleted = function(context, delta) {
	  context.out('<div class="jsondiffpatch-value">');
	  this.formatValue(context, delta[0]);
	  context.out('</div>');
	};
	
	HtmlFormatter.prototype.format_moved = function(context, delta) {
	  context.out('<div class="jsondiffpatch-value">');
	  this.formatValue(context, delta[0]);
	  context.out('</div><div class="jsondiffpatch-moved-destination">' + delta[1] + '</div>');
	
	  // draw an SVG arrow from here to move destination
	  context.out(
	    /*jshint multistr: true */
	    '<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\
	        <svg width="30" height="60" style="position: absolute; display: none;">\
	        <defs>\
	            <marker id="markerArrow" markerWidth="8" markerHeight="8" refx="2" refy="4"\
	                   orient="auto" markerUnits="userSpaceOnUse">\
	                <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\
	            </marker>\
	        </defs>\
	        <path d="M30,0 Q-10,25 26,50" style="stroke: #88f; stroke-width: 2px; fill: none;\
	        stroke-opacity: 0.5; marker-end: url(#markerArrow);"></path>\
	        </svg>\
	        </div>');
	  context.hasArrows = true;
	};
	
	HtmlFormatter.prototype.format_textdiff = function(context, delta) {
	  context.out('<div class="jsondiffpatch-value">');
	  this.formatTextDiffString(context, delta[0]);
	  context.out('</div>');
	};
	
	/* jshint camelcase: true */
	
	var showUnchanged = function(show, node, delay) {
	  var el = node || document.body;
	  var prefix = 'jsondiffpatch-unchanged-';
	  var classes = {
	    showing: prefix + 'showing',
	    hiding: prefix + 'hiding',
	    visible: prefix + 'visible',
	    hidden: prefix + 'hidden',
	  };
	  var list = el.classList;
	  if (!list) {
	    return;
	  }
	  if (!delay) {
	    list.remove(classes.showing);
	    list.remove(classes.hiding);
	    list.remove(classes.visible);
	    list.remove(classes.hidden);
	    if (show === false) {
	      list.add(classes.hidden);
	    }
	    return;
	  }
	  if (show === false) {
	    list.remove(classes.showing);
	    list.add(classes.visible);
	    setTimeout(function() {
	      list.add(classes.hiding);
	    }, 10);
	  } else {
	    list.remove(classes.hiding);
	    list.add(classes.showing);
	    list.remove(classes.hidden);
	  }
	  var intervalId = setInterval(function() {
	    adjustArrows(el);
	  }, 100);
	  setTimeout(function() {
	    list.remove(classes.showing);
	    list.remove(classes.hiding);
	    if (show === false) {
	      list.add(classes.hidden);
	      list.remove(classes.visible);
	    } else {
	      list.add(classes.visible);
	      list.remove(classes.hidden);
	    }
	    setTimeout(function() {
	      list.remove(classes.visible);
	      clearInterval(intervalId);
	    }, delay + 400);
	  }, delay);
	};
	
	var hideUnchanged = function(node, delay) {
	  return showUnchanged(false, node, delay);
	};
	
	exports.HtmlFormatter = HtmlFormatter;
	
	exports.showUnchanged = showUnchanged;
	
	exports.hideUnchanged = hideUnchanged;
	
	var defaultInstance;
	
	exports.format = function(delta, left) {
	  if (!defaultInstance) {
	    defaultInstance = new HtmlFormatter();
	  }
	  return defaultInstance.format(delta, left);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var environment = __webpack_require__(18);
	
	exports.base = __webpack_require__(37);
	exports.html = __webpack_require__(46);
	exports.annotated = __webpack_require__(36);
	exports.jsonpatch = __webpack_require__(48);
	
	if (!environment.isBrowser) {
	  var consoleModuleName = './console';
	  exports.console = __webpack_require__(49)(consoleModuleName);
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	  var base = __webpack_require__(37);
	  var BaseFormatter = base.BaseFormatter;
	
	  var named = {
	    added: 'add',
	    deleted: 'remove',
	    modified: 'replace',
	    moved: 'moved',
	    movedestination: 'movedestination',
	    unchanged: 'unchanged',
	    error: 'error',
	    textDiffLine: 'textDiffLine'
	  };
	
	  function JSONFormatter() {
	    this.includeMoveDestinations = false;
	  }
	
	  JSONFormatter.prototype = new BaseFormatter();
	
	  JSONFormatter.prototype.prepareContext = function (context) {
	    BaseFormatter.prototype.prepareContext.call(this, context);
	    context.result = [];
	    context.path = [];
	    context.pushCurrentOp = function (op, value) {
	      var val = {
	        op: op,
	        path: this.currentPath()
	      };
	      if (typeof value !== 'undefined') {
	        val.value = value;
	      }
	      this.result.push(val);
	    };
	
	    context.currentPath = function () {
	      return '/' + this.path.join('/');
	    };
	  };
	
	  JSONFormatter.prototype.typeFormattterErrorFormatter = function (context, err) {
	    context.out('[ERROR]' + err);
	  };
	
	  JSONFormatter.prototype.rootBegin = function () {
	  };
	
	  JSONFormatter.prototype.rootEnd = function () {
	  };
	
	  JSONFormatter.prototype.nodeBegin = function (context, key, leftKey) {
	    context.path.push(leftKey);
	  };
	
	  JSONFormatter.prototype.nodeEnd = function (context) {
	    context.path.pop();
	  };
	
	  /* jshint camelcase: false */
	
	  JSONFormatter.prototype.format_unchanged = function (context, delta, left) {
	    if (typeof left === 'undefined') {
	      return;
	    }
	    context.pushCurrentOp(named.unchanged, left);
	  };
	
	  JSONFormatter.prototype.format_movedestination = function (context, delta, left) {
	    if (typeof left === 'undefined') {
	      return;
	    }
	    context.pushCurrentOp(named.movedestination, left);
	  };
	
	  JSONFormatter.prototype.format_node = function (context, delta, left) {
	    this.formatDeltaChildren(context, delta, left);
	  };
	
	  JSONFormatter.prototype.format_added = function (context, delta) {
	    context.pushCurrentOp(named.added, delta[0]);
	  };
	
	  JSONFormatter.prototype.format_modified = function (context, delta) {
	    context.pushCurrentOp(named.modified, delta[1]);
	  };
	
	  JSONFormatter.prototype.format_deleted = function (context) {
	    context.pushCurrentOp(named.deleted);
	  };
	
	  JSONFormatter.prototype.format_moved = function (context, delta) {
	    context.pushCurrentOp(named.moved, delta[1]);
	  };
	
	  JSONFormatter.prototype.format_textdiff = function () {
	    throw 'not implimented';
	  };
	
	  JSONFormatter.prototype.format = function (delta, left) {
	    var context = {};
	    this.prepareContext(context);
	    this.recurse(context, delta, left);
	    return context.result;
	  };
	  /* jshint camelcase: true */
	
	  exports.JSONFormatter = JSONFormatter;
	
	  var defaultInstance;
	
	  function last(arr) {
	    return arr[arr.length - 1];
	  }
	
	  function sortBy(arr, pred) {
	    arr.sort(pred);
	    return arr;
	  }
	
	  var compareByIndexDesc = function (indexA, indexB) {
	    var lastA = parseInt(indexA, 10);
	    var lastB = parseInt(indexB, 10);
	    if (!(isNaN(lastA) || isNaN(lastB))) {
	      return lastB - lastA;
	    } else {
	      return 0;
	    }
	  };
	
	  function opsByDescendingOrder(removeOps) {
	    return sortBy(removeOps, function (a, b) {
	      var splitA = a.path.split('/');
	      var splitB = b.path.split('/');
	      if (splitA.length !== splitB.length) {
	        return splitA.length - splitB.length;
	      } else {
	        return compareByIndexDesc(last(splitA), last(splitB));
	      }
	    });
	  }
	
	  function partition(arr, pred) {
	    var left = [];
	    var right = [];
	
	    arr.forEach(function (el) {
	      var coll = pred(el) ? left : right;
	      coll.push(el);
	    });
	    return [left, right];
	  }
	
	  function reorderOps(jsonFormattedDiff) {
	    var removeOpsOtherOps = partition(jsonFormattedDiff, function (operation) {
	      return operation.op === 'remove';
	    });
	    var removeOps = removeOpsOtherOps[0];
	    var otherOps = removeOpsOtherOps[1];
	
	    var removeOpsReverse = opsByDescendingOrder(removeOps);
	    return removeOpsReverse.concat(otherOps);
	  }
	
	
	  var format = function (delta, left) {
	    if (!defaultInstance) {
	      defaultInstance = new JSONFormatter();
	    }
	    return reorderOps(defaultInstance.format(delta, left));
	  };
	
	  exports.log = function (delta, left) {
	    console.log(format(delta, left));
	  };
	
	  exports.format = format;
	})();


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./annotated": 36,
		"./annotated.js": 36,
		"./base": 37,
		"./base.js": 37,
		"./console": 38,
		"./console.js": 38,
		"./html": 46,
		"./html.js": 46,
		"./index": 47,
		"./index.js": 47,
		"./jsonpatch": 48,
		"./jsonpatch.js": 48
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 49;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(47);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var environment = __webpack_require__(18);
	
	if (environment.isBrowser) {
	  /* global window */
	  /* jshint camelcase: false */
	  window.diff_match_patch = __webpack_require__(34);
	  /* jshint camelcase: true */
	}
	
	module.exports = __webpack_require__(17);


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n    <ion-nav-title>\n        Profile\n    </ion-nav-title>\n    <ion-content>\n      <h1>This is profile page</h1>\n      <ul>\n        <li ng-repeat=\"p in profile.profile\">\n            Username: {{p.userName}}\n        </li>\n      </ul>\n    </ion-content>\n</ion-view>\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(54);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _register3 = __webpack_require__(57);
	
	var _register4 = _interopRequireDefault(_register3);
	
	var _angularMeteor = __webpack_require__(15);
	
	var _angularMeteor2 = _interopRequireDefault(_angularMeteor);
	
	var _angularMeteorAuth = __webpack_require__(58);
	
	var _angularMeteorAuth2 = _interopRequireDefault(_angularMeteorAuth);
	
	var _registerView = __webpack_require__(59);
	
	var _registerView2 = _interopRequireDefault(_registerView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var name = 'register';
	
	exports.default = angular.module(name, [_angularMeteor2.default, _angularMeteorAuth2.default]).config(_register4.default).component(name, {
	  template: _registerView2.default,
	  controller: _register2.default,
	  controllerAs: name
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _accountsBase = __webpack_require__(55);
	
	var _meteor = __webpack_require__(56);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RegisterCtrl = function () {
	  function RegisterCtrl($scope, $reactive) {
	    'ngInject';
	
	    _classCallCheck(this, RegisterCtrl);
	
	    $reactive(this).attach($scope);
	    this.email = "";
	    this.password = "";
	    this.userCreateSuccess = -1;
	  }
	
	  _createClass(RegisterCtrl, [{
	    key: 'createUser',
	    value: function createUser() {
	      var _this = this;
	
	      if (this.email && this.password) {
	        var res = _accountsBase.Accounts.createUser({
	          email: this.email,
	          password: this.password
	        }, this.$bindToContext(function (err) {
	          if (!err) _this.userCreateSuccess = true;else {
	            console.log("err", err);
	            _this.userCreateSuccess = false;
	          }
	        }));
	      } else {
	        this.userCreateSuccess = -2;
	        console.log("FAIL");
	      }
	    }
	  }, {
	    key: 'facebookSignIn',
	    value: function facebookSignIn() {
	      console.log("clicked");
	
	      CordovaFacebook.login({
	        permissions: ['user_events'],
	        onSuccess: function onSuccess(result) {
	          if (result.declined.length > 0) {
	            // Do something
	            console.log("User has declined something");
	          }
	          console.log("success :", result);
	        },
	        onFailure: function onFailure(result) {
	          if (result.cancelled) {
	            console.log("user canceled the login");
	          } else if ("facebook login, Error :", result.errorLocalized) ;
	        }
	      });
	    }
	  }]);
	
	  return RegisterCtrl;
	}();
	
	exports.default = RegisterCtrl;
	;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = window.Package && Package["accounts-base"];

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = window.Package && Package["meteor"];

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($stateProvider) {
	  $stateProvider.state('app.register', {
	    url: "/register",
	    views: {
	      'register-tab': {
	        template: '<register></register>'
	      }
	    }
	  });
	};
	
	;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/*! angular-meteor-auth v1.0.3 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["angularMeteorAuth"] = factory();
		else
			root["angularMeteorAuth"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var name = 'angular-meteor.auth';
		exports.default = name;
	
	
		angular.module(name, ['angular-meteor.mixer', 'angular-meteor.scope', 'angular-meteor.core', 'angular-meteor.view-model', 'angular-meteor.reactive'])
	
		/*
		  A mixin which provides us with authentication related methods and properties.
		  This mixin comes in a seperate package called `angular-meteor-auth`. Note that `accounts-base`
		  package needs to be installed in order for this module to work, otherwise an error will be thrown.
		 */
		.factory('$$Auth', ['$Mixer', '$log', function ($Mixer, $log) {
		  var Accounts = (Package['accounts-base'] || {}).Accounts;
	
		  if (!Accounts) {
		    throw Error('`angular-meteor.auth` module requires `accounts-base` package, ' + 'please run `meteor add accounts-base` before use');
		  }
	
		  var errors = {
		    required: 'AUTH_REQUIRED',
		    forbidden: 'FORBIDDEN'
		  };
	
		  function $$Auth() {
		    var vm = arguments.length <= 0 || arguments[0] === undefined ? this : arguments[0];
	
		    // Reset auth properties
		    this.autorun(function () {
		      // Note that we use Meteor and not Accounts since the following methods are
		      // not available in older versions of `accounts-base` meteor package
		      vm.currentUser = Meteor.user();
		      vm.currentUserId = Meteor.userId();
		      vm.isLoggingIn = Meteor.loggingIn();
		    });
		  }
	
		  // Waits for user to finish the login process. Gets an optional validation function which
		  // will validate if the current user is valid or not. Returns a promise which will be rejected
		  // once login has failed or user is not valid, otherwise it will be resolved with the current
		  // user
		  $$Auth.$awaitUser = function (validate) {
		    var _this = this;
	
		    validate = validate ? this.$bindToContext($Mixer.caller, validate) : function () {
		      return true;
		    };
	
		    if (!_.isFunction(validate)) {
		      throw Error('argument 1 must be a function');
		    }
	
		    var deferred = this.$$defer();
	
		    // Note the promise is being fulfilled in the next event loop to avoid
		    // nested computations, otherwise the outer computation will cancel the
		    // inner one once the scope has been destroyed which will lead to subscription
		    // failures. Happens mainly after resolving a route.
		    var computation = this.autorun(function (computation) {
		      if (_this.getReactively('isLoggingIn')) return;
		      // Stop computation once a user has logged in
		      computation.stop();
	
		      if (!_this.currentUser) return _this.$$afterFlush(deferred.reject, errors.required);
	
		      var isValid = validate(_this.currentUser);
		      // Resolve the promise if validation has passed
		      if (isValid === true) return _this.$$afterFlush(deferred.resolve, _this.currentUser);
	
		      var error = void 0;
	
		      if (_.isString(isValid) || isValid instanceof Error) {
		        error = isValid;
		      } else {
		        error = errors.forbidden;
		      }
	
		      return _this.$$afterFlush(deferred.reject, error);
		    });
	
		    var promise = deferred.promise;
		    promise.stop = computation.stop.bind(computation);
		    return promise;
		  };
	
		  // Calls a function with the provided args after flush
		  $$Auth.$$afterFlush = function (fn) {
		    var _fn;
	
		    if (_.isString(fn)) {
		      fn = this[fn];
		    }
	
		    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      args[_key - 1] = arguments[_key];
		    }
	
		    return Tracker.afterFlush((_fn = fn).bind.apply(_fn, [this].concat(args)));
		  };
	
		  // API v0.2.0
		  // Aliases with small modificatons
	
		  // No validation
		  // Silent error
		  $$Auth.$waitForUser = function () {
		    // Silent error
		    return this.$awaitUser().catch(function (err) {
		      $log.debug('user login has failed (' + err + ')');
		    });
		  };
	
		  // No validation
		  $$Auth.$requireUser = function () {
		    return this.$awaitUser();
		  };
	
		  // Full functionality
		  $$Auth.$requireValidUser = function () {
		    return this.$awaitUser.apply(this, arguments);
		  };
	
		  return $$Auth;
		}])
	
		/*
		  External service for syntactic sugare.
		  Originally created as UI-router's resolve handler.
		 */
		.service('$auth', ['$rootScope', '$$Auth', function ($rootScope, $$Auth) {
		  var _this2 = this;
	
		  // Note that services are initialized once we call them which means that the mixin
		  // will be available by then
		  _.keys($$Auth).forEach(function (k) {
		    var stripped = k.substr(1);
		    // Not using bind() so it would be testable
		    _this2[stripped] = function () {
		      return $rootScope[k].apply($rootScope, arguments);
		    };
		  });
		}]).run(['$Mixer', '$$Auth', function ($Mixer, $$Auth) {
		  $Mixer.mixin($$Auth);
		}]);
		module.exports = exports['default'];
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n    <ion-nav-title>\n        Register\n    </ion-nav-title>\n    <ion-content>\n      <div class=\"list\">\n        <label class=\"item item-input item-floating-label\">\n          <span class=\"input-label\">Email</span>\n          <input type=\"email\" placeholder=\"Email\" ng-model=\"register.email\">\n        </label>\n        <label class=\"item item-input item-floating-label\">\n          <span class=\"input-label\">Password</span>\n          <input type=\"password\" placeholder=\"password\" ng-model=\"register.password\">\n        </label>\n      </div>\n      <button class=\"button button-full button-positive\" ng-click=\"register.createUser()\">\n        Register\n      </button>\n\n      <a class=\"facebook-sign-in button button-block\" ng-click=\"register.facebookSignIn()\">Login with Facebook</a>\n      <div class=\"card\">\n        <div class=\"item item-divider\">\n          Register info\n        </div>\n        <div class=\"item item-text-wrap\">\n          registration process :\n            <span ng-if=\"register.userCreateSuccess == true\">\n              Success\n            </span>\n            <span ng-if=\"register.userCreateSuccess == false\">\n              Fail\n            </span>\n            <span ng-if=\"register.userCreateSuccess == -1\">\n              Click on register\n            </span>\n            <span ng-if=\"register.userCreateSuccess == -2\">\n              Fill the form before sending\n            </span>\n        </div>\n      </div>\n    </ion-content>\n</ion-view>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map