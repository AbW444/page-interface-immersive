var vh=Object.defineProperty;var xh=(r,e,t)=>e in r?vh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var un=(r,e,t)=>xh(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const so="163",yh=0,ko=1,Mh=2,Dc=1,Ic=2,Ln=3,yn=0,wt=1,pn=2,Kn=0,Zi=1,ys=2,Ho=3,Vo=4,Sh=5,vi=100,bh=101,Eh=102,Th=103,wh=104,Ah=200,Ch=201,Rh=202,Ph=203,Na=204,Oa=205,Lh=206,Dh=207,Ih=208,Uh=209,Nh=210,Oh=211,Fh=212,Bh=213,zh=214,kh=0,Hh=1,Vh=2,Ms=3,Gh=4,Wh=5,qh=6,Xh=7,Uc=0,Yh=1,$h=2,Zn=0,jh=1,Kh=2,Zh=3,Nc=4,Jh=5,Qh=6,ed=7,Oc=300,ir=301,rr=302,Fa=303,Ba=304,Ns=306,za=1e3,yi=1001,ka=1002,Qt=1003,td=1004,Xr=1005,Pt=1006,Xs=1007,Mi=1008,Jn=1009,nd=1010,id=1011,Fc=1012,Bc=1013,sr=1014,Xn=1015,Ss=1016,zc=1017,kc=1018,Fr=1020,rd=35902,sd=1021,ad=1022,on=1023,od=1024,ld=1025,Ji=1026,Cr=1027,cd=1028,Hc=1029,ud=1030,Vc=1031,Gc=1033,Ys=33776,$s=33777,js=33778,Ks=33779,Go=35840,Wo=35841,qo=35842,Xo=35843,Wc=36196,Yo=37492,$o=37496,jo=37808,Ko=37809,Zo=37810,Jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,al=37819,ol=37820,ll=37821,Zs=36492,cl=36494,ul=36495,hd=36283,hl=36284,dl=36285,fl=36286,dd=3200,fd=3201,qc=0,pd=1,qn="",hn="srgb",ii="srgb-linear",ao="display-p3",Os="display-p3-linear",bs="linear",$e="srgb",Es="rec709",Ts="p3",Pi=7680,pl=519,md=512,gd=513,_d=514,Xc=515,vd=516,xd=517,yd=518,Md=519,ml=35044,gl="300 es",Nn=2e3,ws=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Ha=180/Math.PI;function Br(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[r&255]+St[r>>8&255]+St[r>>16&255]+St[r>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function It(r,e,t){return Math.max(e,Math.min(t,r))}function Sd(r,e){return(r%e+e)%e}function Qs(r,e,t){return(1-t)*r+t*e}function gr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,s,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],g=i[0],f=i[3],p=i[6],S=i[1],v=i[4],E=i[7],A=i[2],w=i[5],T=i[8];return s[0]=a*g+o*S+l*A,s[3]=a*f+o*v+l*w,s[6]=a*p+o*E+l*T,s[1]=c*g+u*S+h*A,s[4]=c*f+u*v+h*w,s[7]=c*p+u*E+h*T,s[2]=d*g+m*S+_*A,s[5]=d*f+m*v+_*w,s[8]=d*p+m*E+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=t*h+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Le;function Yc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bd(){const r=Rr("canvas");return r.style.display="block",r}const _l={};function Ed(r){r in _l||(_l[r]=!0,console.warn(r))}const vl=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xl=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[ii]:{transfer:bs,primaries:Es,toReference:r=>r,fromReference:r=>r},[hn]:{transfer:$e,primaries:Es,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Os]:{transfer:bs,primaries:Ts,toReference:r=>r.applyMatrix3(xl),fromReference:r=>r.applyMatrix3(vl)},[ao]:{transfer:$e,primaries:Ts,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xl),fromReference:r=>r.applyMatrix3(vl).convertLinearToSRGB()}},Td=new Set([ii,Os]),Ge={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Td.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Yr[e].toReference,i=Yr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Yr[r].primaries},getTransfer:function(r){return r===qn?bs:Yr[r].transfer}};function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Li;class wd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Rr("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(na(i[a].image)):s.push(na(i[a]))}else s=na(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class At extends fr{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=yi,i=yi,s=Pt,a=Mi,o=on,l=Jn,c=At.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Br(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Oc;At.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],g=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,A=(p+1)/2,w=(u+d)/4,T=(h+g)/4,L=(_+f)/4;return v>E&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=T/n):E>A?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=w/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=L/s),this.set(n,i,s,t),this}let S=Math.sqrt((f-_)*(f-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $c(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jc extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pd extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==m||u!==_){let f=1-o;const p=l*d+c*m+u*_+h*g,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,p*S);f=Math.sin(f*w)/A,o=Math.sin(o*w)/A}const E=o*S;if(l=l*f+d*E,c=c*f+m*E,u=u*f+_*E,h=h*f+g*E,f===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-o*m,e[t+2]=c*_+u*m+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),m=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new U,yl=new zr;class kr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),jr.subVectors(this.max,_r),Di.subVectors(e.a,_r),Ii.subVectors(e.b,_r),Ui.subVectors(e.c,_r),zn.subVectors(Ii,Di),kn.subVectors(Ui,Ii),oi.subVectors(Di,Ui);let t=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-oi.z,oi.y,zn.z,0,-zn.x,kn.z,0,-kn.x,oi.z,0,-oi.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-oi.y,oi.x,0];return!ra(t,Di,Ii,Ui,jr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Di,Ii,Ui,jr))?!1:(Kr.crossVectors(zn,kn),t=[Kr.x,Kr.y,Kr.z],ra(t,Di,Ii,Ui,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,$r=new kr,Di=new U,Ii=new U,Ui=new U,zn=new U,kn=new U,oi=new U,_r=new U,jr=new U,Kr=new U,li=new U;function ra(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){li.fromArray(r,s);const o=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=n.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ld=new kr,vr=new U,sa=new U;class oo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ld.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(sa)),this.expandByPoint(vr.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new U,aa=new U,Zr=new U,Hn=new U,oa=new U,Jr=new U,la=new U;class Kc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){aa.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Hn.dot(this.direction),l=-Hn.dot(Zr),c=Hn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(aa).addScaledVector(Zr,d),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,s){oa.subVectors(t,e),Jr.subVectors(n,e),la.crossVectors(oa,Jr);let a=this.direction.dot(la),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(Jr.crossVectors(Hn,Jr));if(l<0)return null;const c=o*this.direction.dot(oa.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(la);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,a,o,l,c,u,h,d,m,_,g,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,m,_,g,f)}set(e,t,n,i,s,a,o,l,c,u,h,d,m,_,g,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dd,e,Id)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Vn.crossVectors(n,kt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Vn.crossVectors(n,kt)),Vn.normalize(),Qr.crossVectors(kt,Vn),i[0]=Vn.x,i[4]=Qr.x,i[8]=kt.x,i[1]=Vn.y,i[5]=Qr.y,i[9]=kt.y,i[2]=Vn.z,i[6]=Qr.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],g=n[6],f=n[10],p=n[14],S=n[3],v=n[7],E=n[11],A=n[15],w=i[0],T=i[4],L=i[8],x=i[12],y=i[1],D=i[5],k=i[9],P=i[13],W=i[2],V=i[6],X=i[10],Y=i[14],F=i[3],J=i[7],K=i[11],le=i[15];return s[0]=a*w+o*y+l*W+c*F,s[4]=a*T+o*D+l*V+c*J,s[8]=a*L+o*k+l*X+c*K,s[12]=a*x+o*P+l*Y+c*le,s[1]=u*w+h*y+d*W+m*F,s[5]=u*T+h*D+d*V+m*J,s[9]=u*L+h*k+d*X+m*K,s[13]=u*x+h*P+d*Y+m*le,s[2]=_*w+g*y+f*W+p*F,s[6]=_*T+g*D+f*V+p*J,s[10]=_*L+g*k+f*X+p*K,s[14]=_*x+g*P+f*Y+p*le,s[3]=S*w+v*y+E*W+A*F,s[7]=S*T+v*D+E*V+A*J,s[11]=S*L+v*k+E*X+A*K,s[15]=S*x+v*P+E*Y+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],g=e[7],f=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*m-n*l*m)+g*(+t*l*m-t*c*d+s*a*d-i*a*m+i*c*u-s*l*u)+f*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],g=e[13],f=e[14],p=e[15],S=h*f*c-g*d*c+g*l*m-o*f*m-h*l*p+o*d*p,v=_*d*c-u*f*c-_*l*m+a*f*m+u*l*p-a*d*p,E=u*g*c-_*h*c+_*o*m-a*g*m-u*o*p+a*h*p,A=_*h*l-u*g*l-_*o*d+a*g*d+u*o*f-a*h*f,w=t*S+n*v+i*E+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=S*T,e[1]=(g*d*s-h*f*s-g*i*m+n*f*m+h*i*p-n*d*p)*T,e[2]=(o*f*s-g*l*s+g*i*c-n*f*c-o*i*p+n*l*p)*T,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*m-n*l*m)*T,e[4]=v*T,e[5]=(u*f*s-_*d*s+_*i*m-t*f*m-u*i*p+t*d*p)*T,e[6]=(_*l*s-a*f*s-_*i*c+t*f*c+a*i*p-t*l*p)*T,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*m+t*l*m)*T,e[8]=E*T,e[9]=(_*h*s-u*g*s-_*n*m+t*g*m+u*n*p-t*h*p)*T,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*T,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*T,e[12]=A*T,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*f+t*h*f)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*f-t*o*f)*T,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,_=s*h,g=a*u,f=a*h,p=o*h,S=l*c,v=l*u,E=l*h,A=n.x,w=n.y,T=n.z;return i[0]=(1-(g+p))*A,i[1]=(m+E)*A,i[2]=(_-v)*A,i[3]=0,i[4]=(m-E)*w,i[5]=(1-(d+p))*w,i[6]=(f+S)*w,i[7]=0,i[8]=(_+v)*T,i[9]=(f-S)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ni.set(i[0],i[1],i[2]).length();const a=Ni.set(i[4],i[5],i[6]).length(),o=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/s,u=1/a,h=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Nn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let m,_;if(o===Nn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ws)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Nn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,m=(n+i)*u;let _,g;if(o===Nn)_=(a+s)*h,g=-2*h;else if(o===ws)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new U,rn=new rt,Dd=new U(0,0,0),Id=new U(1,1,1),Vn=new U,Qr=new U,kt=new U,Ml=new rt,Sl=new zr;class Mn{constructor(e=0,t=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ud=0;const bl=new U,Oi=new zr,Cn=new rt,es=new U,xr=new U,Nd=new U,Od=new zr,El=new U(1,0,0),Tl=new U(0,1,0),wl=new U(0,0,1),Al={type:"added"},Fd={type:"removed"},Fi={type:"childadded",child:null},ca={type:"childremoved",child:null};class vt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new U,t=new Mn,n=new zr,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Le}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(xr,es,this.up):Cn.lookAt(es,xr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new U(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,Rn=new U,ua=new U,Pn=new U,Bi=new U,zi=new U,Cl=new U,ha=new U,da=new U,fa=new U;class mn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){sn.subVectors(i,t),Rn.subVectors(n,t),ua.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(Rn),l=sn.dot(ua),c=Rn.dot(Rn),u=Rn.dot(ua),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),Rn.subVectors(e,t),sn.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),sn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Bi.subVectors(i,n),zi.subVectors(s,n),ha.subVectors(e,n);const l=Bi.dot(ha),c=zi.dot(ha);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,i);const u=Bi.dot(da),h=zi.dot(da);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Bi,a);fa.subVectors(e,s);const m=Bi.dot(fa),_=zi.dot(fa);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(zi,o);const f=u*_-m*h;if(f<=0&&h-u>=0&&m-_>=0)return Cl.subVectors(s,i),o=(h-u)/(h-u+(m-_)),t.copy(i).addScaledVector(Cl,o);const p=1/(f+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function pa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=Sd(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=pa(a,s,e+1/3),this.g=pa(a,s,e),this.b=pa(a,s,e-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(e,t=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Ge.fromWorkingColorSpace(bt.copy(this),e),Math.round(It(bt.r*255,0,255))*65536+Math.round(It(bt.g*255,0,255))*256+Math.round(It(bt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,s=bt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=hn){Ge.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(ts);const n=Qs(Gn.h,ts.h,t),i=Qs(Gn.s,ts.s,t),s=Qs(Gn.l,ts.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ne;Ne.NAMES=Zc;let Bd=0;class Hr extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Zi,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dn extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new U,ns=new Ue;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ed("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}}class Jc extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qc extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zd=0;const Kt=new rt,ma=new vt,ki=new U,Ht=new kr,yr=new kr,mt=new U;class En extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yc(e)?Qc:Jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ht.min,yr.min),Ht.expandByPoint(mt),mt.addVectors(Ht.max,yr.max),Ht.expandByPoint(mt)):(Ht.expandByPoint(yr.min),Ht.expandByPoint(yr.max))}Ht.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),mt.add(ki)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new U,l[L]=new U;const c=new U,u=new U,h=new U,d=new Ue,m=new Ue,_=new Ue,g=new U,f=new U;function p(L,x,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,L),m.fromBufferAttribute(s,x),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(D),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(D),o[L].add(g),o[x].add(g),o[y].add(g),l[L].add(f),l[x].add(f),l[y].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,x=S.length;L<x;++L){const y=S[L],D=y.start,k=y.count;for(let P=D,W=D+k;P<W;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new U,E=new U,A=new U,w=new U;function T(L){A.fromBufferAttribute(i,L),w.copy(A);const x=o[L];v.copy(x),v.sub(A.multiplyScalar(A.dot(x))).normalize(),E.crossVectors(w,x);const D=E.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,D)}for(let L=0,x=S.length;L<x;++L){const y=S[L],D=y.start,k=y.count;for(let P=D,W=D+k;P<W;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,f),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[m++]}return new vn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new rt,ci=new Kc,is=new oo,Pl=new U,Hi=new U,Vi=new U,Gi=new U,ga=new U,rs=new U,ss=new Ue,as=new Ue,os=new Ue,Ll=new U,Dl=new U,Il=new U,ls=new U,cs=new U;class ht extends vt{constructor(e=new En,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ga.fromBufferAttribute(h,e),a?rs.addScaledVector(ga,u):rs.addScaledVector(ga.sub(t),u))}t.add(rs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(is.containsPoint(ci.origin)===!1&&(ci.intersectSphere(is,Pl)===null||ci.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Rl.copy(s).invert(),ci.copy(e.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const f=d[_],p=a[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=S,A=v;E<A;E+=3){const w=o.getX(E),T=o.getX(E+1),L=o.getX(E+2);i=us(this,p,e,n,c,u,h,w,T,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let f=_,p=g;f<p;f+=3){const S=o.getX(f),v=o.getX(f+1),E=o.getX(f+2);i=us(this,a,e,n,c,u,h,S,v,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const f=d[_],p=a[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let E=S,A=v;E<A;E+=3){const w=E,T=E+1,L=E+2;i=us(this,p,e,n,c,u,h,w,T,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=_,p=g;f<p;f+=3){const S=f,v=f+1,E=f+2;i=us(this,a,e,n,c,u,h,S,v,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function kd(r,e,t,n,i,s,a,o){let l;if(e.side===wt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===yn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:r}}function us(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Hi),r.getVertexPosition(l,Vi),r.getVertexPosition(c,Gi);const u=kd(r,e,t,n,Hi,Vi,Gi,ls);if(u){i&&(ss.fromBufferAttribute(i,o),as.fromBufferAttribute(i,l),os.fromBufferAttribute(i,c),u.uv=mn.getInterpolation(ls,Hi,Vi,Gi,ss,as,os,new Ue)),s&&(ss.fromBufferAttribute(s,o),as.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),u.uv1=mn.getInterpolation(ls,Hi,Vi,Gi,ss,as,os,new Ue)),a&&(Ll.fromBufferAttribute(a,o),Dl.fromBufferAttribute(a,l),Il.fromBufferAttribute(a,c),u.normal=mn.getInterpolation(ls,Hi,Vi,Gi,Ll,Dl,Il,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};mn.getNormal(Hi,Vi,Gi,h.normal),u.face=h}return u}class Vr extends En{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function _(g,f,p,S,v,E,A,w,T,L,x){const y=E/T,D=A/L,k=E/2,P=A/2,W=w/2,V=T+1,X=L+1;let Y=0,F=0;const J=new U;for(let K=0;K<X;K++){const le=K*D-P;for(let Se=0;Se<V;Se++){const He=Se*y-k;J[g]=He*S,J[f]=le*v,J[p]=W,c.push(J.x,J.y,J.z),J[g]=0,J[f]=0,J[p]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(Se/T),h.push(1-K/L),Y+=1}}for(let K=0;K<L;K++)for(let le=0;le<T;le++){const Se=d+le+V*K,He=d+le+V*(K+1),G=d+(le+1)+V*(K+1),Z=d+(le+1)+V*K;l.push(Se,He,Z),l.push(He,G,Z),F+=6}o.addGroup(m,F,x),m+=F,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(r){const e={};for(let t=0;t<r.length;t++){const n=ar(r[t]);for(const i in n)e[i]=n[i]}return e}function Hd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function eu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Vd={clone:ar,merge:Rt};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new U,Ul=new Ue,Nl=new Ue;class Jt extends tu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Nl),t.subVectors(Nl,Ul)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,qi=1;class qd extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(Wi,qi,e,t);i.layers=this.layers,this.add(i);const s=new Jt(Wi,qi,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Wi,qi,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Wi,qi,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Wi,qi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Wi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nu extends At{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iu extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vr(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:Kn});s.uniforms.tEquirect.value=t;const a=new ht(i,s),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Pt),new qd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const _a=new U,Xd=new U,Yd=new Le;class mi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_a.subVectors(n,t).cross(Xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yd.getNormalMatrix(e),i=this.coplanarPoint(_a).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new oo,hs=new U;class co{constructor(e=new mi,t=new mi,n=new mi,i=new mi,s=new mi,a=new mi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],m=i[8],_=i[9],g=i[10],f=i[11],p=i[12],S=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-s,d-c,f-m,E-p).normalize(),n[1].setComponents(l+s,d+c,f+m,E+p).normalize(),n[2].setComponents(l+a,d+u,f+_,E+S).normalize(),n[3].setComponents(l-a,d-u,f-_,E-S).normalize(),n[4].setComponents(l-o,d-h,f-g,E-v).normalize(),t===Nn)n[5].setComponents(l+o,d+h,f+g,E+v).normalize();else if(t===ws)n[5].setComponents(o,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hs.x=i.normal.x>0?e.max.x:e.min.x,hs.y=i.normal.y>0?e.max.y:e.min.y,hs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $d(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),h.count===-1&&d.length===0&&r.bufferSubData(c,0,u),d.length!==0){for(let m=0,_=d.length;m<_;m++){const g=d[m];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Fs extends En{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,m=[],_=[],g=[],f=[];for(let p=0;p<u;p++){const S=p*d-a;for(let v=0;v<c;v++){const E=v*h-s;_.push(E,-S,0),g.push(0,0,1),f.push(v/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const v=S+c*p,E=S+c*(p+1),A=S+1+c*(p+1),w=S+1+c*p;m.push(v,E,w),m.push(E,A,w)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:jd,alphahash_pars_fragment:Kd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:Qd,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:nf,batching_pars_vertex:rf,batching_vertex:sf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:bf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Tf,colorspace_fragment:wf,colorspace_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Gf,envmap_vertex:Df,fog_vertex:If,fog_pars_vertex:Uf,fog_fragment:Nf,fog_pars_fragment:Of,gradientmap_pars_fragment:Ff,lightmap_fragment:Bf,lightmap_pars_fragment:zf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Vf,lights_toon_fragment:Wf,lights_toon_pars_fragment:qf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:$f,lights_physical_pars_fragment:jf,lights_fragment_begin:Kf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:rp,map_particle_fragment:sp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:up,morphnormal_vertex:hp,morphtarget_pars_vertex:dp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:bp,opaque_fragment:Ep,packing:Tp,premultiplied_alpha_fragment:wp,project_vertex:Ap,dithering_fragment:Cp,dithering_pars_fragment:Rp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Up,shadowmask_pars_fragment:Np,skinbase_vertex:Op,skinning_pars_vertex:Fp,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Hp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:qp,uv_pars_fragment:Xp,uv_pars_vertex:Yp,uv_vertex:$p,worldpos_vertex:jp,background_vert:Kp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:em,cube_frag:tm,depth_vert:nm,depth_frag:im,distanceRGBA_vert:rm,distanceRGBA_frag:sm,equirect_vert:am,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:um,meshbasic_frag:hm,meshlambert_vert:dm,meshlambert_frag:fm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:xm,meshphysical_vert:ym,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:bm,points_vert:Em,points_frag:Tm,shadow_vert:wm,shadow_frag:Am,sprite_vert:Cm,sprite_frag:Rm},ie={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},fn={basic:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Rt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Rt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Rt([ie.points,ie.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Rt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Rt([ie.common,ie.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Rt([ie.sprite,ie.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Rt([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Rt([ie.lights,ie.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};fn.physical={uniforms:Rt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const ds={r:0,b:0,g:0},hi=new Mn,Pm=new rt;function Lm(r,e,t,n,i,s,a){const o=new Ne(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function _(f,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),S=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ns)?(u===void 0&&(u=new ht(new Vr(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ar(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),hi.copy(p.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(hi)),u.material.toneMapped=Ge.getTransfer(v.colorSpace)!==$e,(h!==v||d!==v.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ht(new Fs(2,2),new Sn({name:"BackgroundMaterial",uniforms:ar(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==$e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,p){f.getRGB(ds,eu(r)),n.buffers.color.setClear(ds.r,ds.g,ds.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(o,l)},render:_}}function Dm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,D,k,P,W){let V=!1;const X=h(P,k,D);s!==X&&(s=X,c(s.object)),V=m(y,P,k,W),V&&_(y,P,k,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(y,D,k,P),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,D,k){const P=k.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let V=W[D.id];V===void 0&&(V={},W[D.id]=V);let X=V[P];return X===void 0&&(X=d(l()),V[P]=X),X}function d(y){const D=[],k=[],P=[];for(let W=0;W<t;W++)D[W]=0,k[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:P,object:y,attributes:{},index:null}}function m(y,D,k,P){const W=s.attributes,V=D.attributes;let X=0;const Y=k.getAttributes();for(const F in Y)if(Y[F].location>=0){const K=W[F];let le=V[F];if(le===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;X++}return s.attributesNum!==X||s.index!==P}function _(y,D,k,P){const W={},V=D.attributes;let X=0;const Y=k.getAttributes();for(const F in Y)if(Y[F].location>=0){let K=V[F];K===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),W[F]=le,X++}s.attributes=W,s.attributesNum=X,s.index=P}function g(){const y=s.newAttributes;for(let D=0,k=y.length;D<k;D++)y[D]=0}function f(y){p(y,0)}function p(y,D){const k=s.newAttributes,P=s.enabledAttributes,W=s.attributeDivisors;k[y]=1,P[y]===0&&(r.enableVertexAttribArray(y),P[y]=1),W[y]!==D&&(r.vertexAttribDivisor(y,D),W[y]=D)}function S(){const y=s.newAttributes,D=s.enabledAttributes;for(let k=0,P=D.length;k<P;k++)D[k]!==y[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function v(y,D,k,P,W,V,X){X===!0?r.vertexAttribIPointer(y,D,k,W,V):r.vertexAttribPointer(y,D,k,P,W,V)}function E(y,D,k,P){g();const W=P.attributes,V=k.getAttributes(),X=D.defaultAttributeValues;for(const Y in V){const F=V[Y];if(F.location>=0){let J=W[Y];if(J===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const K=J.normalized,le=J.itemSize,Se=e.get(J);if(Se===void 0)continue;const He=Se.buffer,G=Se.type,Z=Se.bytesPerElement,ce=G===r.INT||G===r.UNSIGNED_INT||J.gpuType===Bc;if(J.isInterleavedBufferAttribute){const se=J.data,Ce=se.stride,De=J.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<F.locationSize;Be++)p(F.location+Be,se.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<F.locationSize;Be++)f(F.location+Be);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Be=0;Be<F.locationSize;Be++)v(F.location+Be,le/F.locationSize,G,K,Ce*Z,(De+le/F.locationSize*Be)*Z,ce)}else{if(J.isInstancedBufferAttribute){for(let se=0;se<F.locationSize;se++)p(F.location+se,J.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let se=0;se<F.locationSize;se++)f(F.location+se);r.bindBuffer(r.ARRAY_BUFFER,He);for(let se=0;se<F.locationSize;se++)v(F.location+se,le/F.locationSize,G,K,le*Z,le/F.locationSize*se*Z,ce)}}else if(X!==void 0){const K=X[Y];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(F.location,K);break;case 3:r.vertexAttrib3fv(F.location,K);break;case 4:r.vertexAttrib4fv(F.location,K);break;default:r.vertexAttrib1fv(F.location,K)}}}}S()}function A(){L();for(const y in n){const D=n[y];for(const k in D){const P=D[k];for(const W in P)u(P[W].object),delete P[W];delete D[k]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const k in D){const P=D[k];for(const W in P)u(P[W].object),delete P[W];delete D[k]}delete n[y.id]}function T(y){for(const D in n){const k=n[D];if(k[y.id]===void 0)continue;const P=k[y.id];for(const W in P)u(P[W].object),delete P[W];delete k[y.id]}}function L(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:f,disableUnusedAttributes:S}}function Im(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(l[d],c[d]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let m=0;m<u;m++)d+=c[m];t.update(d,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Um(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),f=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:f,vertexTextures:p,maxSamples:S}}function Nm(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new mi,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!f)s?u(null):c();else{const S=s?0:n,v=S*4;let E=p.clippingState||null;l.value=E,E=u(_,d,v,m);for(let A=0;A!==v;++A)E[A]=t[A];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){const g=h!==null?h.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const p=m+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,E=m;v!==g;++v,E+=4)a.copy(h[v]).applyMatrix4(S,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function Om(r){let e=new WeakMap;function t(a,o){return o===Fa?a.mapping=ir:o===Ba&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fa||o===Ba)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new iu(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class su extends tu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Ol=[.125,.215,.35,.446,.526,.582],xi=20,va=new su,Fl=new Ne;let xa=null,ya=0,Ma=0,Sa=!1;const gi=(1+Math.sqrt(5))/2,Xi=1/gi,Bl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,gi,Xi),new U(0,gi,-Xi),new U(Xi,0,gi),new U(-Xi,0,gi),new U(gi,Xi,0),new U(-gi,Xi,0)];class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,ya,Ma),this._renderer.xr.enabled=Sa,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ss,format:on,colorSpace:ii,depthBuffer:!1},i=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(s)),this._blurMaterial=Bm(s,e,t)}return i}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,i){const o=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Fl),u.toneMapping=Zn,u.autoClear=!1;const m=new Dn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),_=new ht(new Vr,m);let g=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(Fl),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;fs(i,S*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ir||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Bl[(i-1)%Bl.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ht(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),g=s/_,f=isFinite(s)?1+Math.floor(u*g):xi;f>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${xi}`);const p=[];let S=0;for(let T=0;T<xi;++T){const L=T/g,x=Math.exp(-L*L/2);p.push(x),T===0?S+=x:T<f&&(S+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const E=this._sizeLods[i],A=3*E*(i>v-$i?i-v+$i:0),w=4*(this._cubeSize-E);fs(t,A,w,3*E,2*E),l.setRenderTarget(t),l.render(h,va)}}function Fm(r){const e=[],t=[],n=[];let i=r;const s=r-$i+1+Ol.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-$i?l=Ol[a-r+$i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,f=2,p=1,S=new Float32Array(g*_*m),v=new Float32Array(f*_*m),E=new Float32Array(p*_*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,L=w>2?0:-1,x=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(x,g*_*w),v.set(d,f*_*w);const y=[w,w,w,w,w,w];E.set(y,p*_*w)}const A=new En;A.setAttribute("position",new vn(S,g)),A.setAttribute("uv",new vn(v,f)),A.setAttribute("faceIndex",new vn(E,p)),e.push(A),i>$i&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kl(r,e,t){const n=new Ai(r,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bm(r,e,t){const n=new Float32Array(xi),i=new U(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Hl(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Vl(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fa||l===Ba,u=l===ir||l===rr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new zl(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new zl(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function km(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hm(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let f=0,p=g.length;f<p;f++)e.remove(g[f])}d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let f=0,p=g.length;f<p;f++)e.update(g[f],r.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let v=0,E=S.length;v<E;v+=3){const A=S[v+0],w=S[v+1],T=S[v+2];d.push(A,w,w,T,T,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let v=0,E=S.length/3-1;v<E;v+=3){const A=v+0,w=v+1,T=v+2;d.push(A,w,w,T,T,A)}}else return;const f=new(Yc(d)?Qc:Jc)(d,1);f.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Vm(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,h*a,m),t.update(d,n,m))}function u(h,d,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<m;g++)this.render(h[g]/a,d[g]);else{_.multiDrawElementsWEBGL(n,d,0,s,h,0,m);let g=0;for(let f=0;f<m;f++)g+=d[f];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Gm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wm(r,e,t){const n=new WeakMap,i=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),f===!0&&(E=3);let A=o.attributes.position.count*E,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*w*4*h),L=new jc(T,A,w,h);L.type=Xn,L.needsUpdate=!0;const x=E*4;for(let D=0;D<h;D++){const k=p[D],P=S[D],W=v[D],V=A*w*4*D;for(let X=0;X<k.count;X++){const Y=X*x;_===!0&&(i.fromBufferAttribute(k,X),T[V+Y+0]=i.x,T[V+Y+1]=i.y,T[V+Y+2]=i.z,T[V+Y+3]=0),g===!0&&(i.fromBufferAttribute(P,X),T[V+Y+4]=i.x,T[V+Y+5]=i.y,T[V+Y+6]=i.z,T[V+Y+7]=0),f===!0&&(i.fromBufferAttribute(W,X),T[V+Y+8]=i.x,T[V+Y+9]=i.y,T[V+Y+10]=i.z,T[V+Y+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:L,size:new Ue(A,w)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let f=0;f<c.length;f++)_+=c[f];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function qm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class au extends At{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Ji,u!==Ji&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ji&&(n=sr),n===void 0&&u===Cr&&(n=Fr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ou=new At,lu=new au(1,1);lu.compareFunction=Xc;const cu=new jc,uu=new Pd,hu=new nu,Gl=[],Wl=[],ql=new Float32Array(16),Xl=new Float32Array(9),Yl=new Float32Array(4);function pr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Gl[i];if(s===void 0&&(s=new Float32Array(i),Gl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bs(r,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Xm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),ft(t,e)}}function $m(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),ft(t,e)}}function jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),ft(t,e)}}function Km(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Yl.set(n),r.uniformMatrix2fv(this.addr,!1,Yl),ft(t,n)}}function Zm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Xl.set(n),r.uniformMatrix3fv(this.addr,!1,Xl),ft(t,n)}}function Jm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;ql.set(n),r.uniformMatrix4fv(this.addr,!1,ql),ft(t,n)}}function Qm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),ft(t,e)}}function tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),ft(t,e)}}function ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),ft(t,e)}}function ig(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),ft(t,e)}}function sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),ft(t,e)}}function ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),ft(t,e)}}function og(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?lu:ou;t.setTexture2D(e||s,i)}function lg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uu,i)}function cg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hu,i)}function ug(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cu,i)}function hg(r){switch(r){case 5126:return Xm;case 35664:return Ym;case 35665:return $m;case 35666:return jm;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}function dg(r,e){r.uniform1fv(this.addr,e)}function fg(r,e){const t=pr(e,this.size,2);r.uniform2fv(this.addr,t)}function pg(r,e){const t=pr(e,this.size,3);r.uniform3fv(this.addr,t)}function mg(r,e){const t=pr(e,this.size,4);r.uniform4fv(this.addr,t)}function gg(r,e){const t=pr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _g(r,e){const t=pr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vg(r,e){const t=pr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xg(r,e){r.uniform1iv(this.addr,e)}function yg(r,e){r.uniform2iv(this.addr,e)}function Mg(r,e){r.uniform3iv(this.addr,e)}function Sg(r,e){r.uniform4iv(this.addr,e)}function bg(r,e){r.uniform1uiv(this.addr,e)}function Eg(r,e){r.uniform2uiv(this.addr,e)}function Tg(r,e){r.uniform3uiv(this.addr,e)}function wg(r,e){r.uniform4uiv(this.addr,e)}function Ag(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ou,s[a])}function Cg(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||uu,s[a])}function Rg(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hu,s[a])}function Pg(r,e,t){const n=this.cache,i=e.length,s=Bs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cu,s[a])}function Lg(r){switch(r){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lg(t.type)}}class Ug{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function $l(r,e){r.seq.push(e),r.map[e.id]=e}function Ng(r,e,t){const n=r.name,i=n.length;for(ba.lastIndex=0;;){const s=ba.exec(n),a=ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$l(t,c===void 0?new Dg(o,r,e):new Ig(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Ug(o),$l(t,h)),t=h}}}class gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Ng(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function jl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Og=37297;let Fg=0;function Bg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zg(r){const e=Ge.getPrimaries(Ge.workingColorSpace),t=Ge.getPrimaries(r);let n;switch(e===t?n="":e===Ts&&t===Es?n="LinearDisplayP3ToLinearSRGB":e===Es&&t===Ts&&(n="LinearSRGBToLinearDisplayP3"),r){case ii:case Os:return[n,"LinearTransferOETF"];case hn:case ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Kl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bg(r.getShaderSource(e),a)}else return i}function kg(r,e){const t=zg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hg(r,e){let t;switch(e){case jh:t="Linear";break;case Kh:t="Reinhard";break;case Zh:t="OptimizedCineon";break;case Nc:t="ACESFilmic";break;case Qh:t="AgX";break;case ed:t="Neutral";break;case Jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Gg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Sr(r){return r!==""}function Zl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(r){return r.replace(qg,Yg)}const Xg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yg(r,e){let t=Pe[e];if(t===void 0){const n=Xg.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(r){return r.replace($g,jg)}function jg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ec(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Zg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yh:e="ENVMAP_BLENDING_MIX";break;case $h:e="ENVMAP_BLENDING_ADD";break}return e}function e_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function t_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kg(t),c=Zg(t),u=Jg(t),h=Qg(t),d=e_(t),m=Vg(t),_=Gg(s),g=i.createProgram();let f,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(f=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,kg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=Va(a),a=Zl(a,t),a=Jl(a,t),o=Va(o),o=Zl(o,t),o=Jl(o,t),a=Ql(a),o=Ql(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+f+a,E=S+p+o,A=jl(i,i.VERTEX_SHADER,v),w=jl(i,i.FRAGMENT_SHADER,E);i.attachShader(g,A),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(D){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(w).trim();let V=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const Y=Kl(i,A,"vertex"),F=Kl(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+Y+`
`+F)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:V,programLog:k,vertexShader:{log:P,prefix:f},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(w),L=new gs(i,g),x=Wg(i,g)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Og)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let n_=0;class i_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new r_(e),t.set(e,n)),n}}class r_{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}}function s_(r,e,t,n,i,s,a){const o=new lo,l=new i_,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,y,D,k,P){const W=k.fog,V=P.geometry,X=x.isMeshStandardMaterial?k.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),F=Y&&Y.mapping===Ns?Y.image.height:null,J=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=K!==void 0?K.length:0;let Se=0;V.morphAttributes.position!==void 0&&(Se=1),V.morphAttributes.normal!==void 0&&(Se=2),V.morphAttributes.color!==void 0&&(Se=3);let He,G,Z,ce;if(J){const yt=fn[J];He=yt.vertexShader,G=yt.fragmentShader}else He=x.vertexShader,G=x.fragmentShader,l.update(x),Z=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const se=r.getRenderTarget(),Ce=P.isInstancedMesh===!0,De=P.isBatchedMesh===!0,Be=!!x.map,N=!!x.matcap,Ie=!!Y,ye=!!x.aoMap,ut=!!x.lightMap,be=!!x.bumpMap,We=!!x.normalMap,C=!!x.displacementMap,M=!!x.emissiveMap,H=!!x.metalnessMap,q=!!x.roughnessMap,$=x.anisotropy>0,j=x.clearcoat>0,ve=x.iridescence>0,Q=x.sheen>0,me=x.transmission>0,xe=$&&!!x.anisotropyMap,ne=j&&!!x.clearcoatMap,oe=j&&!!x.clearcoatNormalMap,Ee=j&&!!x.clearcoatRoughnessMap,ue=ve&&!!x.iridescenceMap,he=ve&&!!x.iridescenceThicknessMap,Fe=Q&&!!x.sheenColorMap,ze=Q&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,ke=!!x.specularColorMap,je=!!x.specularIntensityMap,fe=me&&!!x.transmissionMap,R=me&&!!x.thicknessMap,te=!!x.gradientMap,ee=!!x.alphaMap,pe=x.alphaTest>0,ge=!!x.alphaHash,Xe=!!x.extensions;let Ke=Zn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const Qe={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:G,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:De,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,instancingMorph:Ce&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ii,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:N,envMap:Ie,envMapMode:Ie&&Y.mapping,envMapCubeUVHeight:F,aoMap:ye,lightMap:ut,bumpMap:be,normalMap:We,displacementMap:d&&C,emissiveMap:M,normalMapObjectSpace:We&&x.normalMapType===pd,normalMapTangentSpace:We&&x.normalMapType===qc,metalnessMap:H,roughnessMap:q,anisotropy:$,anisotropyMap:xe,clearcoat:j,clearcoatMap:ne,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,iridescence:ve,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:ze,specularMap:Ve,specularColorMap:ke,specularIntensityMap:je,transmission:me,transmissionMap:fe,thicknessMap:R,gradientMap:te,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:ge,combine:x.combine,mapUv:Be&&g(x.map.channel),aoMapUv:ye&&g(x.aoMap.channel),lightMapUv:ut&&g(x.lightMap.channel),bumpMapUv:be&&g(x.bumpMap.channel),normalMapUv:We&&g(x.normalMap.channel),displacementMapUv:C&&g(x.displacementMap.channel),emissiveMapUv:M&&g(x.emissiveMap.channel),metalnessMapUv:H&&g(x.metalnessMap.channel),roughnessMapUv:q&&g(x.roughnessMap.channel),anisotropyMapUv:xe&&g(x.anisotropyMap.channel),clearcoatMapUv:ne&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(x.sheenRoughnessMap.channel),specularMapUv:Ve&&g(x.specularMap.channel),specularColorMapUv:ke&&g(x.specularColorMap.channel),specularIntensityMapUv:je&&g(x.specularIntensityMap.channel),transmissionMapUv:fe&&g(x.transmissionMap.channel),thicknessMapUv:R&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(We||$),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(Be||ee),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===$e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Xe&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)y.push(D),y.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(y,x),v(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)}function E(x){const y=_[x.type];let D;if(y){const k=fn[y];D=Vd.clone(k.uniforms)}else D=x.uniforms;return D}function A(x,y){let D;for(let k=0,P=u.length;k<P;k++){const W=u[k];if(W.cacheKey===y){D=W,++D.usedTimes;break}}return D===void 0&&(D=new t_(r,y,x,s),u.push(D)),D}function w(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:E,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:L}}function a_(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function o_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function tc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,_,g,f){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:f},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=f),e++,p}function o(h,d,m,_,g,f){const p=a(h,d,m,_,g,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,d,m,_,g,f){const p=a(h,d,m,_,g,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||o_),n.length>1&&n.sort(d||tc),i.length>1&&i.sort(d||tc)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function l_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new nc,r.set(n,[a])):i>=s.length?(a=new nc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function c_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ne};break;case"SpotLight":t={position:new U,direction:new U,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function u_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let h_=0;function d_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function f_(r){const e=new c_,t=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new rt,a=new rt;function o(c,u){let h=0,d=0,m=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let _=0,g=0,f=0,p=0,S=0,v=0,E=0,A=0,w=0,T=0,L=0;c.sort(d_);const x=u===!0?Math.PI:1;for(let D=0,k=c.length;D<k;D++){const P=c[D],W=P.color,V=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*V*x,d+=W.g*V*x,m+=W.b*V*x;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],V);L++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const J=P.shadow,K=t.get(P);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.directionalShadow[_]=K,n.directionalShadowMap[_]=Y,n.directionalShadowMatrix[_]=P.shadow.matrix,v++}n.directional[_]=F,_++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(W).multiplyScalar(V*x),F.distance=X,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[f]=F;const J=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,J.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[f]=J.matrix,P.castShadow){const K=t.get(P);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.spotShadow[f]=K,n.spotShadowMap[f]=Y,A++}f++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(W).multiplyScalar(V),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=F,p++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*x),F.distance=P.distance,F.decay=P.decay,P.castShadow){const J=P.shadow,K=t.get(P);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=F,g++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(V*x),F.groundColor.copy(P.groundColor).multiplyScalar(V*x),n.hemi[S]=F,S++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;const y=n.hash;(y.directionalLength!==_||y.pointLength!==g||y.spotLength!==f||y.rectAreaLength!==p||y.hemiLength!==S||y.numDirectionalShadows!==v||y.numPointShadows!==E||y.numSpotShadows!==A||y.numSpotMaps!==w||y.numLightProbes!==L)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=p,n.point.length=g,n.hemi.length=S,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,y.directionalLength=_,y.pointLength=g,y.spotLength=f,y.rectAreaLength=p,y.hemiLength=S,y.numDirectionalShadows=v,y.numPointShadows=E,y.numSpotShadows=A,y.numSpotMaps=w,y.numLightProbes=L,n.version=h_++)}function l(c,u){let h=0,d=0,m=0,_=0,g=0;const f=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),h++}else if(v.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),m++}else if(v.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),a.identity(),s.copy(v.matrixWorld),s.premultiply(f),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function ic(r){const e=new f_(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function p_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new ic(r),e.set(i,[o])):s>=a.length?(o=new ic(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class m_ extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g_ extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x_(r,e,t){let n=new co;const i=new Ue,s=new Ue,a=new gt,o=new m_({depthPacking:fd}),l=new g_,c={},u=t.maxTextureSize,h={[yn]:wt,[wt]:yn,[pn]:pn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:__,fragmentShader:v_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ht(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let p=this.type;this.render=function(w,T,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const x=r.getRenderTarget(),y=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Kn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const P=p!==Ln&&this.type===Ln,W=p===Ln&&this.type!==Ln;for(let V=0,X=w.length;V<X;V++){const Y=w[V],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const J=F.getFrameExtents();if(i.multiply(J),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,F.mapSize.y=s.y)),F.map===null||P===!0||W===!0){const le=this.type!==Ln?{minFilter:Qt,magFilter:Qt}:{};F.map!==null&&F.map.dispose(),F.map=new Ai(i.x,i.y,le),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const K=F.getViewportCount();for(let le=0;le<K;le++){const Se=F.getViewport(le);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),k.viewport(a),F.updateMatrices(Y,le),n=F.getFrustum(),E(T,L,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===Ln&&S(F,L),F.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(x,y,D)};function S(w,T){const L=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,L,d,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,L,m,g,null)}function v(w,T,L,x){let y=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)y=D;else if(y=L.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=y.uuid,P=T.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let V=W[P];V===void 0&&(V=y.clone(),W[P]=V,T.addEventListener("dispose",A)),y=V}if(y.visible=T.visible,y.wireframe=T.wireframe,x===Ln?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=r.properties.get(y);k.light=L}return y}function E(w,T,L,x,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ln)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const P=e.update(w),W=w.material;if(Array.isArray(W)){const V=P.groups;for(let X=0,Y=V.length;X<Y;X++){const F=V[X],J=W[F.materialIndex];if(J&&J.visible){const K=v(w,J,x,y);w.onBeforeShadow(r,w,T,L,P,K,F),r.renderBufferDirect(L,null,P,K,w,F),w.onAfterShadow(r,w,T,L,P,K,F)}}}else if(W.visible){const V=v(w,W,x,y);w.onBeforeShadow(r,w,T,L,P,V,null),r.renderBufferDirect(L,null,P,V,w,null),w.onAfterShadow(r,w,T,L,P,V,null)}}const k=w.children;for(let P=0,W=k.length;P<W;P++)E(k[P],T,L,x,y)}function A(w){w.target.removeEventListener("dispose",A);for(const L in c){const x=c[L],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}function y_(r){function e(){let R=!1;const te=new gt;let ee=null;const pe=new gt(0,0,0,0);return{setMask:function(ge){ee!==ge&&!R&&(r.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){R=ge},setClear:function(ge,Xe,Ke,Qe,yt){yt===!0&&(ge*=Qe,Xe*=Qe,Ke*=Qe),te.set(ge,Xe,Ke,Qe),pe.equals(te)===!1&&(r.clearColor(ge,Xe,Ke,Qe),pe.copy(te))},reset:function(){R=!1,ee=null,pe.set(-1,0,0,0)}}}function t(){let R=!1,te=null,ee=null,pe=null;return{setTest:function(ge){ge?ce(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(ge){te!==ge&&!R&&(r.depthMask(ge),te=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case kh:r.depthFunc(r.NEVER);break;case Hh:r.depthFunc(r.ALWAYS);break;case Vh:r.depthFunc(r.LESS);break;case Ms:r.depthFunc(r.LEQUAL);break;case Gh:r.depthFunc(r.EQUAL);break;case Wh:r.depthFunc(r.GEQUAL);break;case qh:r.depthFunc(r.GREATER);break;case Xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=ge}},setLocked:function(ge){R=ge},setClear:function(ge){pe!==ge&&(r.clearDepth(ge),pe=ge)},reset:function(){R=!1,te=null,ee=null,pe=null}}}function n(){let R=!1,te=null,ee=null,pe=null,ge=null,Xe=null,Ke=null,Qe=null,yt=null;return{setTest:function(Ye){R||(Ye?ce(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(Ye){te!==Ye&&!R&&(r.stencilMask(Ye),te=Ye)},setFunc:function(Ye,ln,cn){(ee!==Ye||pe!==ln||ge!==cn)&&(r.stencilFunc(Ye,ln,cn),ee=Ye,pe=ln,ge=cn)},setOp:function(Ye,ln,cn){(Xe!==Ye||Ke!==ln||Qe!==cn)&&(r.stencilOp(Ye,ln,cn),Xe=Ye,Ke=ln,Qe=cn)},setLocked:function(Ye){R=Ye},setClear:function(Ye){yt!==Ye&&(r.clearStencil(Ye),yt=Ye)},reset:function(){R=!1,te=null,ee=null,pe=null,ge=null,Xe=null,Ke=null,Qe=null,yt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,_=!1,g=null,f=null,p=null,S=null,v=null,E=null,A=null,w=new Ne(0,0,0),T=0,L=!1,x=null,y=null,D=null,k=null,P=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=X>=2);let F=null,J={};const K=r.getParameter(r.SCISSOR_BOX),le=r.getParameter(r.VIEWPORT),Se=new gt().fromArray(K),He=new gt().fromArray(le);function G(R,te,ee,pe){const ge=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(R,Xe),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<ee;Ke++)R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?r.texImage3D(te,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(te+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return Xe}const Z={};Z[r.TEXTURE_2D]=G(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=G(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=G(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=G(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(r.DEPTH_TEST),s.setFunc(Ms),be(!1),We(ko),ce(r.CULL_FACE),ye(Kn);function ce(R){c[R]!==!0&&(r.enable(R),c[R]=!0)}function se(R){c[R]!==!1&&(r.disable(R),c[R]=!1)}function Ce(R,te){return u[R]!==te?(r.bindFramebuffer(R,te),u[R]=te,R===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=te),R===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=te),!0):!1}function De(R,te){let ee=d,pe=!1;if(R){ee=h.get(te),ee===void 0&&(ee=[],h.set(te,ee));const ge=R.textures;if(ee.length!==ge.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,Ke=ge.length;Xe<Ke;Xe++)ee[Xe]=r.COLOR_ATTACHMENT0+Xe;ee.length=ge.length,pe=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ee)}function Be(R){return m!==R?(r.useProgram(R),m=R,!0):!1}const N={[vi]:r.FUNC_ADD,[bh]:r.FUNC_SUBTRACT,[Eh]:r.FUNC_REVERSE_SUBTRACT};N[Th]=r.MIN,N[wh]=r.MAX;const Ie={[Ah]:r.ZERO,[Ch]:r.ONE,[Rh]:r.SRC_COLOR,[Na]:r.SRC_ALPHA,[Nh]:r.SRC_ALPHA_SATURATE,[Ih]:r.DST_COLOR,[Lh]:r.DST_ALPHA,[Ph]:r.ONE_MINUS_SRC_COLOR,[Oa]:r.ONE_MINUS_SRC_ALPHA,[Uh]:r.ONE_MINUS_DST_COLOR,[Dh]:r.ONE_MINUS_DST_ALPHA,[Oh]:r.CONSTANT_COLOR,[Fh]:r.ONE_MINUS_CONSTANT_COLOR,[Bh]:r.CONSTANT_ALPHA,[zh]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(R,te,ee,pe,ge,Xe,Ke,Qe,yt,Ye){if(R===Kn){_===!0&&(se(r.BLEND),_=!1);return}if(_===!1&&(ce(r.BLEND),_=!0),R!==Sh){if(R!==g||Ye!==L){if((f!==vi||v!==vi)&&(r.blendEquation(r.FUNC_ADD),f=vi,v=vi),Ye)switch(R){case Zi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ys:r.blendFunc(r.ONE,r.ONE);break;case Ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Zi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ys:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}p=null,S=null,E=null,A=null,w.set(0,0,0),T=0,g=R,L=Ye}return}ge=ge||te,Xe=Xe||ee,Ke=Ke||pe,(te!==f||ge!==v)&&(r.blendEquationSeparate(N[te],N[ge]),f=te,v=ge),(ee!==p||pe!==S||Xe!==E||Ke!==A)&&(r.blendFuncSeparate(Ie[ee],Ie[pe],Ie[Xe],Ie[Ke]),p=ee,S=pe,E=Xe,A=Ke),(Qe.equals(w)===!1||yt!==T)&&(r.blendColor(Qe.r,Qe.g,Qe.b,yt),w.copy(Qe),T=yt),g=R,L=!1}function ut(R,te){R.side===pn?se(r.CULL_FACE):ce(r.CULL_FACE);let ee=R.side===wt;te&&(ee=!ee),be(ee),R.blending===Zi&&R.transparent===!1?ye(Kn):ye(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),i.setMask(R.colorWrite);const pe=R.stencilWrite;a.setTest(pe),pe&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),M(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function be(R){x!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),x=R)}function We(R){R!==yh?(ce(r.CULL_FACE),R!==y&&(R===ko?r.cullFace(r.BACK):R===Mh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),y=R}function C(R){R!==D&&(V&&r.lineWidth(R),D=R)}function M(R,te,ee){R?(ce(r.POLYGON_OFFSET_FILL),(k!==te||P!==ee)&&(r.polygonOffset(te,ee),k=te,P=ee)):se(r.POLYGON_OFFSET_FILL)}function H(R){R?ce(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function q(R){R===void 0&&(R=r.TEXTURE0+W-1),F!==R&&(r.activeTexture(R),F=R)}function $(R,te,ee){ee===void 0&&(F===null?ee=r.TEXTURE0+W-1:ee=F);let pe=J[ee];pe===void 0&&(pe={type:void 0,texture:void 0},J[ee]=pe),(pe.type!==R||pe.texture!==te)&&(F!==ee&&(r.activeTexture(ee),F=ee),r.bindTexture(R,te||Z[R]),pe.type=R,pe.texture=te)}function j(){const R=J[F];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ve(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(R){Se.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Se.copy(R))}function Ve(R){He.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),He.copy(R))}function ke(R,te){let ee=l.get(te);ee===void 0&&(ee=new WeakMap,l.set(te,ee));let pe=ee.get(R);pe===void 0&&(pe=r.getUniformBlockIndex(te,R.name),ee.set(R,pe))}function je(R,te){const pe=l.get(te).get(R);o.get(te)!==pe&&(r.uniformBlockBinding(te,pe,R.__bindingPointIndex),o.set(te,pe))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},F=null,J={},u={},h=new WeakMap,d=[],m=null,_=!1,g=null,f=null,p=null,S=null,v=null,E=null,A=null,w=new Ne(0,0,0),T=0,L=!1,x=null,y=null,D=null,k=null,P=null,Se.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ce,disable:se,bindFramebuffer:Ce,drawBuffers:De,useProgram:Be,setBlending:ye,setMaterial:ut,setFlipSided:be,setCullFace:We,setLineWidth:C,setPolygonOffset:M,setScissorTest:H,activeTexture:q,bindTexture:$,unbindTexture:j,compressedTexImage2D:ve,compressedTexImage3D:Q,texImage2D:he,texImage3D:Fe,updateUBOMapping:ke,uniformBlockBinding:je,texStorage2D:Ee,texStorage3D:ue,texSubImage2D:me,texSubImage3D:xe,compressedTexSubImage2D:ne,compressedTexSubImage3D:oe,scissor:ze,viewport:Ve,reset:fe}}function M_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return m?new OffscreenCanvas(C,M):Rr("canvas")}function g(C,M,H){let q=1;const $=We(C);if(($.width>H||$.height>H)&&(q=H/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(q*$.width),ve=Math.floor(q*$.height);h===void 0&&(h=_(j,ve));const Q=M?_(j,ve):h;return Q.width=j,Q.height=ve,Q.getContext("2d").drawImage(C,0,0,j,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+ve+")."),Q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function f(C){return C.generateMipmaps&&C.minFilter!==Qt&&C.minFilter!==Pt}function p(C){r.generateMipmap(C)}function S(C,M,H,q,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=M;if(M===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),M===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),M===r.RGBA){const ve=$?bs:Ge.getTransfer(q);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=ve===$e?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(C,M){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==Pt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){const M=C.target;M.removeEventListener("dispose",E),w(M),M.isVideoTexture&&u.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),L(M)}function w(C){const M=n.get(C);if(M.__webglInit===void 0)return;const H=C.source,q=d.get(H);if(q){const $=q[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(C),Object.keys(q).length===0&&d.delete(H)}n.remove(C)}function T(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const H=C.source,q=d.get(H);delete q[M.__cacheKey],a.memory.textures--}function L(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let $=0;$<M.__webglFramebuffer[q].length;$++)r.deleteFramebuffer(M.__webglFramebuffer[q][$]);else r.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)r.deleteFramebuffer(M.__webglFramebuffer[q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let q=0,$=H.length;q<$;q++){const j=n.get(H[q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(C)}let x=0;function y(){x=0}function D(){const C=x;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),x+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function P(C,M){const H=n.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(H,C,M);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function W(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Se(H,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function V(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Se(H,C,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function X(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){He(H,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const Y={[za]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[ka]:r.MIRRORED_REPEAT},F={[Qt]:r.NEAREST,[td]:r.NEAREST_MIPMAP_NEAREST,[Xr]:r.NEAREST_MIPMAP_LINEAR,[Pt]:r.LINEAR,[Xs]:r.LINEAR_MIPMAP_NEAREST,[Mi]:r.LINEAR_MIPMAP_LINEAR},J={[md]:r.NEVER,[Md]:r.ALWAYS,[gd]:r.LESS,[Xc]:r.LEQUAL,[_d]:r.EQUAL,[yd]:r.GEQUAL,[vd]:r.GREATER,[xd]:r.NOTEQUAL};function K(C,M){if(M.type===Xn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pt||M.magFilter===Xs||M.magFilter===Xr||M.magFilter===Mi||M.minFilter===Pt||M.minFilter===Xs||M.minFilter===Xr||M.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Y[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Y[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Y[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,F[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Xr&&M.minFilter!==Mi||M.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function le(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));const q=M.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const j=k(M);if(j!==C.__cacheKey){$[j]===void 0&&($[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[j].usedTimes++;const ve=$[C.__cacheKey];ve!==void 0&&($[C.__cacheKey].usedTimes--,ve.usedTimes===0&&T(M)),C.__cacheKey=j,C.__webglTexture=$[j].texture}return H}function Se(C,M,H){let q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=r.TEXTURE_3D);const $=le(C,M),j=M.source;t.bindTexture(q,C.__webglTexture,r.TEXTURE0+H);const ve=n.get(j);if(j.version!==ve.__version||$===!0){t.activeTexture(r.TEXTURE0+H);const Q=Ge.getPrimaries(Ge.workingColorSpace),me=M.colorSpace===qn?null:Ge.getPrimaries(M.colorSpace),xe=M.colorSpace===qn||Q===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ne=g(M.image,!1,i.maxTextureSize);ne=be(M,ne);const oe=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type);let ue=S(M.internalFormat,oe,Ee,M.colorSpace,M.isVideoTexture);K(q,M);let he;const Fe=M.mipmaps,ze=M.isVideoTexture!==!0&&ue!==Wc,Ve=ve.__version===void 0||$===!0,ke=j.dataReady,je=v(M,ne);if(M.isDepthTexture)ue=r.DEPTH_COMPONENT16,M.type===Xn?ue=r.DEPTH_COMPONENT32F:M.type===sr?ue=r.DEPTH_COMPONENT24:M.type===Fr&&(ue=r.DEPTH24_STENCIL8),Ve&&(ze?t.texStorage2D(r.TEXTURE_2D,1,ue,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,ue,ne.width,ne.height,0,oe,Ee,null));else if(M.isDataTexture)if(Fe.length>0){ze&&Ve&&t.texStorage2D(r.TEXTURE_2D,je,ue,Fe[0].width,Fe[0].height);for(let fe=0,R=Fe.length;fe<R;fe++)he=Fe[fe],ze?ke&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,he.width,he.height,oe,Ee,he.data):t.texImage2D(r.TEXTURE_2D,fe,ue,he.width,he.height,0,oe,Ee,he.data);M.generateMipmaps=!1}else ze?(Ve&&t.texStorage2D(r.TEXTURE_2D,je,ue,ne.width,ne.height),ke&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,oe,Ee,ne.data)):t.texImage2D(r.TEXTURE_2D,0,ue,ne.width,ne.height,0,oe,Ee,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&Ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,ue,Fe[0].width,Fe[0].height,ne.depth);for(let fe=0,R=Fe.length;fe<R;fe++)he=Fe[fe],M.format!==on?oe!==null?ze?ke&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,he.width,he.height,ne.depth,oe,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,ue,he.width,he.height,ne.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?ke&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,he.width,he.height,ne.depth,oe,Ee,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,ue,he.width,he.height,ne.depth,0,oe,Ee,he.data)}else{ze&&Ve&&t.texStorage2D(r.TEXTURE_2D,je,ue,Fe[0].width,Fe[0].height);for(let fe=0,R=Fe.length;fe<R;fe++)he=Fe[fe],M.format!==on?oe!==null?ze?ke&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,he.width,he.height,oe,he.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,ue,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?ke&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,he.width,he.height,oe,Ee,he.data):t.texImage2D(r.TEXTURE_2D,fe,ue,he.width,he.height,0,oe,Ee,he.data)}else if(M.isDataArrayTexture)ze?(Ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,ue,ne.width,ne.height,ne.depth),ke&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ee,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,ne.width,ne.height,ne.depth,0,oe,Ee,ne.data);else if(M.isData3DTexture)ze?(Ve&&t.texStorage3D(r.TEXTURE_3D,je,ue,ne.width,ne.height,ne.depth),ke&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ee,ne.data)):t.texImage3D(r.TEXTURE_3D,0,ue,ne.width,ne.height,ne.depth,0,oe,Ee,ne.data);else if(M.isFramebufferTexture){if(Ve)if(ze)t.texStorage2D(r.TEXTURE_2D,je,ue,ne.width,ne.height);else{let fe=ne.width,R=ne.height;for(let te=0;te<je;te++)t.texImage2D(r.TEXTURE_2D,te,ue,fe,R,0,oe,Ee,null),fe>>=1,R>>=1}}else if(Fe.length>0){if(ze&&Ve){const fe=We(Fe[0]);t.texStorage2D(r.TEXTURE_2D,je,ue,fe.width,fe.height)}for(let fe=0,R=Fe.length;fe<R;fe++)he=Fe[fe],ze?ke&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,oe,Ee,he):t.texImage2D(r.TEXTURE_2D,fe,ue,oe,Ee,he);M.generateMipmaps=!1}else if(ze){if(Ve){const fe=We(ne);t.texStorage2D(r.TEXTURE_2D,je,ue,fe.width,fe.height)}ke&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ee,ne)}else t.texImage2D(r.TEXTURE_2D,0,ue,oe,Ee,ne);f(M)&&p(q),ve.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function He(C,M,H){if(M.image.length!==6)return;const q=le(C,M),$=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);const j=n.get($);if($.version!==j.__version||q===!0){t.activeTexture(r.TEXTURE0+H);const ve=Ge.getPrimaries(Ge.workingColorSpace),Q=M.colorSpace===qn?null:Ge.getPrimaries(M.colorSpace),me=M.colorSpace===qn||ve===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let R=0;R<6;R++)!xe&&!ne?oe[R]=g(M.image[R],!0,i.maxCubemapSize):oe[R]=ne?M.image[R].image:M.image[R],oe[R]=be(M,oe[R]);const Ee=oe[0],ue=s.convert(M.format,M.colorSpace),he=s.convert(M.type),Fe=S(M.internalFormat,ue,he,M.colorSpace),ze=M.isVideoTexture!==!0,Ve=j.__version===void 0||q===!0,ke=$.dataReady;let je=v(M,Ee);K(r.TEXTURE_CUBE_MAP,M);let fe;if(xe){ze&&Ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,je,Fe,Ee.width,Ee.height);for(let R=0;R<6;R++){fe=oe[R].mipmaps;for(let te=0;te<fe.length;te++){const ee=fe[te];M.format!==on?ue!==null?ze?ke&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te,0,0,ee.width,ee.height,ue,ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te,Fe,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te,0,0,ee.width,ee.height,ue,he,ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te,Fe,ee.width,ee.height,0,ue,he,ee.data)}}}else{if(fe=M.mipmaps,ze&&Ve){fe.length>0&&je++;const R=We(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,je,Fe,R.width,R.height)}for(let R=0;R<6;R++)if(ne){ze?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,oe[R].width,oe[R].height,ue,he,oe[R].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Fe,oe[R].width,oe[R].height,0,ue,he,oe[R].data);for(let te=0;te<fe.length;te++){const pe=fe[te].image[R].image;ze?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te+1,0,0,pe.width,pe.height,ue,he,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te+1,Fe,pe.width,pe.height,0,ue,he,pe.data)}}else{ze?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ue,he,oe[R]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Fe,ue,he,oe[R]);for(let te=0;te<fe.length;te++){const ee=fe[te];ze?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te+1,0,0,ue,he,ee.image[R]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+R,te+1,Fe,ue,he,ee.image[R])}}}f(M)&&p(r.TEXTURE_CUBE_MAP),j.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,H,q,$,j){const ve=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),me=S(H.internalFormat,ve,Q,H.colorSpace);if(!n.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>j),oe=Math.max(1,M.height>>j);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,j,me,ne,oe,M.depth,0,ve,Q,null):t.texImage2D($,j,me,ne,oe,0,ve,Q,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ye(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,$,n.get(H).__webglTexture,0,Ie(M)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,$,n.get(H).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(C,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let q=r.DEPTH_COMPONENT24;if(H||ye(M)){const $=M.depthTexture;$&&$.isDepthTexture&&($.type===Xn?q=r.DEPTH_COMPONENT32F:$.type===sr&&(q=r.DEPTH_COMPONENT24));const j=Ie(M);ye(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,q,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,j,q,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,q,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const q=Ie(M);H&&ye(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,q,r.DEPTH24_STENCIL8,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,q,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const q=M.textures;for(let $=0;$<q.length;$++){const j=q[$],ve=s.convert(j.format,j.colorSpace),Q=s.convert(j.type),me=S(j.internalFormat,ve,Q,j.colorSpace),xe=Ie(M);H&&ye(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,me,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,me,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const q=n.get(M.depthTexture).__webglTexture,$=Ie(M);if(M.depthTexture.format===Ji)ye(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else if(M.depthTexture.format===Cr)ye(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function se(C){const M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]=r.createRenderbuffer(),Z(M.__webglDepthbuffer[q],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Z(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(C,M,H){const q=n.get(C);M!==void 0&&G(q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&se(C)}function De(C){const M=C.texture,H=n.get(C),q=n.get(M);C.addEventListener("dispose",A);const $=C.textures,j=C.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=M.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let me=0;me<M.mipmaps.length;me++)H.__webglFramebuffer[Q][me]=r.createFramebuffer()}else H.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)H.__webglFramebuffer[Q]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(ve)for(let Q=0,me=$.length;Q<me;Q++){const xe=n.get($[Q]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ye(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){const me=$[Q];H.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const xe=s.convert(me.format,me.colorSpace),ne=s.convert(me.type),oe=S(me.internalFormat,xe,ne,me.colorSpace,C.isXRRenderTarget===!0),Ee=Ie(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,oe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),K(r.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)G(H.__webglFramebuffer[Q][me],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me);else G(H.__webglFramebuffer[Q],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let Q=0,me=$.length;Q<me;Q++){const xe=$[Q],ne=n.get(xe);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),K(r.TEXTURE_2D,xe),G(H.__webglFramebuffer,C,xe,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,0),f(xe)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let Q=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,q.__webglTexture),K(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)G(H.__webglFramebuffer[me],C,M,r.COLOR_ATTACHMENT0,Q,me);else G(H.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,Q,0);f(M)&&p(Q),t.unbindTexture()}C.depthBuffer&&se(C)}function Be(C){const M=C.textures;for(let H=0,q=M.length;H<q;H++){const $=M[H];if(f($)){const j=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ve=n.get($).__webglTexture;t.bindTexture(j,ve),p(j),t.unbindTexture()}}}function N(C){if(C.samples>0&&ye(C)===!1){const M=C.textures,H=C.width,q=C.height;let $=r.COLOR_BUFFER_BIT;const j=[],ve=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=n.get(C),me=M.length>1;if(me)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){j.push(r.COLOR_ATTACHMENT0+xe),C.depthBuffer&&j.push(ve);const ne=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(ne===!1&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&Q.__isTransmissionRenderTarget!==!0&&($|=r.STENCIL_BUFFER_BIT)),me&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Q.__webglColorRenderbuffer[xe]),ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),me){const oe=n.get(M[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,H,q,0,0,H,q,$,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Q.__webglColorRenderbuffer[xe]);const ne=n.get(M[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function Ie(C){return Math.min(i.maxSamples,C.samples)}function ye(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function be(C,M){const H=C.colorSpace,q=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==ii&&H!==qn&&(Ge.getTransfer(H)===$e?(q!==on||$!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function We(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=y,this.setTexture2D=P,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=Ce,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=G,this.useMultisampledRTT=ye}function S_(r,e){function t(n,i=qn){let s;const a=Ge.getTransfer(i);if(n===Jn)return r.UNSIGNED_BYTE;if(n===zc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===nd)return r.BYTE;if(n===id)return r.SHORT;if(n===Fc)return r.UNSIGNED_SHORT;if(n===Bc)return r.INT;if(n===sr)return r.UNSIGNED_INT;if(n===Xn)return r.FLOAT;if(n===Ss)return r.HALF_FLOAT;if(n===sd)return r.ALPHA;if(n===ad)return r.RGB;if(n===on)return r.RGBA;if(n===od)return r.LUMINANCE;if(n===ld)return r.LUMINANCE_ALPHA;if(n===Ji)return r.DEPTH_COMPONENT;if(n===Cr)return r.DEPTH_STENCIL;if(n===cd)return r.RED;if(n===Hc)return r.RED_INTEGER;if(n===ud)return r.RG;if(n===Vc)return r.RG_INTEGER;if(n===Gc)return r.RGBA_INTEGER;if(n===Ys||n===$s||n===js||n===Ks)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Wo||n===qo||n===Xo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Yo||n===$o)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yo)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$o)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jo||n===Ko||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===cl||n===ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zs)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hd||n===hl||n===dl||n===fl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class b_ extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ps extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),p=this._getHandJoint(c,g);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new At,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Sn({vertexShader:T_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ht(new Fs(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class C_ extends fr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const g=new A_,f=t.getContextAttributes();let p=null,S=null;const v=[],E=[],A=new Ue;let w=null;const T=new Jt;T.layers.enable(1),T.viewport=new gt;const L=new Jt;L.layers.enable(2),L.viewport=new gt;const x=[T,L],y=new b_;y.layers.enable(1),y.layers.enable(2);let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=v[G];return Z===void 0&&(Z=new Ea,v[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=v[G];return Z===void 0&&(Z=new Ea,v[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=v[G];return Z===void 0&&(Z=new Ea,v[G]=Z),Z.getHandSpace()};function P(G){const Z=E.indexOf(G.inputSource);if(Z===-1)return;const ce=v[Z];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",V);for(let G=0;G<v.length;G++){const Z=E[G];Z!==null&&(E[G]=null,v[G].disconnect(Z))}D=null,k=null,g.reset(),e.setRenderTarget(p),m=null,d=null,h=null,i=null,S=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",W),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const Z={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ai(m.framebufferWidth,m.framebufferHeight,{format:on,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,ce=null,se=null;f.depth&&(se=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=f.stencil?Cr:Ji,ce=f.stencil?Fr:sr);const Ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ai(d.textureWidth,d.textureHeight,{format:on,type:Jn,depthTexture:new au(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const De=e.properties.get(S);De.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(G){for(let Z=0;Z<G.removed.length;Z++){const ce=G.removed[Z],se=E.indexOf(ce);se>=0&&(E[se]=null,v[se].disconnect(ce))}for(let Z=0;Z<G.added.length;Z++){const ce=G.added[Z];let se=E.indexOf(ce);if(se===-1){for(let De=0;De<v.length;De++)if(De>=E.length){E.push(ce),se=De;break}else if(E[De]===null){E[De]=ce,se=De;break}if(se===-1)break}const Ce=v[se];Ce&&Ce.connect(ce)}}const X=new U,Y=new U;function F(G,Z,ce){X.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const se=X.distanceTo(Y),Ce=Z.projectionMatrix.elements,De=ce.projectionMatrix.elements,Be=Ce[14]/(Ce[10]-1),N=Ce[14]/(Ce[10]+1),Ie=(Ce[9]+1)/Ce[5],ye=(Ce[9]-1)/Ce[5],ut=(Ce[8]-1)/Ce[0],be=(De[8]+1)/De[0],We=Be*ut,C=Be*be,M=se/(-ut+be),H=M*-ut;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(H),G.translateZ(M),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const q=Be+M,$=N+M,j=We-H,ve=C+(se-H),Q=Ie*N/$*q,me=ye*N/$*q;G.projectionMatrix.makePerspective(j,ve,Q,me,q,$),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function J(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;g.texture!==null&&(G.near=g.depthNear,G.far=g.depthFar),y.near=L.near=T.near=G.near,y.far=L.far=T.far=G.far,(D!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,k=y.far,T.near=D,T.far=k,L.near=D,L.far=k,T.updateProjectionMatrix(),L.updateProjectionMatrix(),G.updateProjectionMatrix());const Z=G.parent,ce=y.cameras;J(y,Z);for(let se=0;se<ce.length;se++)J(ce[se],Z);ce.length===2?F(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),K(G,y,Z)};function K(G,Z,ce){ce===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ha*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null};let le=null;function Se(G,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let se=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let De=0;De<ce.length;De++){const Be=ce[De];let N=null;if(m!==null)N=m.getViewport(Be);else{const ye=h.getViewSubImage(d,Be);N=ye.viewport,De===0&&(e.setRenderTargetTextures(S,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(S))}let Ie=x[De];Ie===void 0&&(Ie=new Jt,Ie.layers.enable(De),Ie.viewport=new gt,x[De]=Ie),Ie.matrix.fromArray(Be.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Be.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(N.x,N.y,N.width,N.height),De===0&&(y.matrix.copy(Ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(Ie)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const De=h.getDepthInformation(ce[0]);De&&De.isValid&&De.texture&&g.init(e,De,i.renderState)}}for(let ce=0;ce<v.length;ce++){const se=E[ce],Ce=v[ce];se!==null&&Ce!==void 0&&Ce.update(se,Z,c||a)}g.render(e,y),le&&le(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const He=new ru;He.setAnimationLoop(Se),this.setAnimationLoop=function(G){le=G},this.dispose=function(){}}}const di=new Mn,R_=new rt;function P_(r,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,eu(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,S,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,E)):p.isMeshMatcapMaterial?(s(f,p),_(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),g(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===wt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===wt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p),v=S.envMap,E=S.envMapRotation;if(v&&(f.envMap.value=v,di.copy(E),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),f.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(di)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*A,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=v*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function L_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const E=v.program;n.uniformBlockBinding(S,E)}function c(S,v){let E=i[S.id];E===void 0&&(_(S),E=u(S),i[S.id]=E,S.addEventListener("dispose",f));const A=v.program;n.updateUBOMapping(S,A);const w=e.render.frame;s[S.id]!==w&&(d(S),s[S.id]=w)}function u(S){const v=h();S.__bindingPointIndex=v;const E=r.createBuffer(),A=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],E=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,T=E.length;w<T;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,y=L.length;x<y;x++){const D=L[x];if(m(D,w,x,A)===!0){const k=D.__offset,P=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let V=0;V<P.length;V++){const X=P[V],Y=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,k+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,v,E,A){const w=S.value,T=v+"_"+E;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const L=A[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(S){const v=S.uniforms;let E=0;const A=16;for(let T=0,L=v.length;T<L;T++){const x=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,D=x.length;y<D;y++){const k=x[y],P=Array.isArray(k.value)?k.value:[k.value];for(let W=0,V=P.length;W<V;W++){const X=P[W],Y=g(X),F=E%A;F!==0&&A-F<Y.boundary&&(E+=A-F),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Y.storage}}}const w=E%A;return w>0&&(E+=A-w),S.__size=E,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function f(S){const v=S.target;v.removeEventListener("dispose",f);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class D_{constructor(e={}){const{canvas:t=bd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const v=this;let E=!1,A=0,w=0,T=null,L=-1,x=null;const y=new gt,D=new gt;let k=null;const P=new Ne(0);let W=0,V=t.width,X=t.height,Y=1,F=null,J=null;const K=new gt(0,0,V,X),le=new gt(0,0,V,X);let Se=!1;const He=new co;let G=!1,Z=!1;const ce=new rt,se=new Ue,Ce=new U,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return T===null?Y:1}let N=n;function Ie(b,I){const B=t.getContext(b,I);return B!==null?B:null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${so}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const I="webgl2";if(N=Ie(I,b),N===null)throw Ie(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,ut,be,We,C,M,H,q,$,j,ve,Q,me,xe,ne,oe,Ee,ue,he,Fe,ze,Ve,ke,je;function fe(){ye=new km(N),ye.init(),ut=new Um(N,ye,e),Ve=new S_(N,ye),be=new y_(N),We=new Gm(N),C=new a_,M=new M_(N,ye,be,C,ut,Ve,We),H=new Om(v),q=new zm(v),$=new $d(N),ke=new Dm(N,$),j=new Hm(N,$,We,ke),ve=new qm(N,j,$,We),he=new Wm(N,ut,M),oe=new Nm(C),Q=new s_(v,H,q,ye,ut,ke,oe),me=new P_(v,C),xe=new l_,ne=new p_(ye),ue=new Lm(v,H,q,be,ve,d,l),Ee=new x_(v,ve,ut),je=new L_(N,We,ut,be),Fe=new Im(N,ye,We),ze=new Vm(N,ye,We),We.programs=Q.programs,v.capabilities=ut,v.extensions=ye,v.properties=C,v.renderLists=xe,v.shadowMap=Ee,v.state=be,v.info=We}fe();const R=new C_(v,N);this.xr=R,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(V,X,!1))},this.getSize=function(b){return b.set(V,X)},this.setSize=function(b,I,B=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,X=I,t.width=Math.floor(b*Y),t.height=Math.floor(I*Y),B===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(V*Y,X*Y).floor()},this.setDrawingBufferSize=function(b,I,B){V=b,X=I,Y=B,t.width=Math.floor(b*B),t.height=Math.floor(I*B),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,I,B,z){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,I,B,z),be.viewport(y.copy(K).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,I,B,z){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,I,B,z),be.scissor(D.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){be.setScissorTest(Se=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(b=!0,I=!0,B=!0){let z=0;if(b){let O=!1;if(T!==null){const re=T.texture.format;O=re===Gc||re===Vc||re===Hc}if(O){const re=T.texture.type,de=re===Jn||re===sr||re===Fc||re===Fr||re===zc||re===kc,_e=ue.getClearColor(),Me=ue.getClearAlpha(),we=_e.r,Te=_e.g,Ae=_e.b;de?(m[0]=we,m[1]=Te,m[2]=Ae,m[3]=Me,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=we,_[1]=Te,_[2]=Ae,_[3]=Me,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),ne.dispose(),C.dispose(),H.dispose(),q.dispose(),ve.dispose(),ke.dispose(),je.dispose(),Q.dispose(),R.dispose(),R.removeEventListener("sessionstart",ln),R.removeEventListener("sessionend",cn),si.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=We.autoReset,I=Ee.enabled,B=Ee.autoUpdate,z=Ee.needsUpdate,O=Ee.type;fe(),We.autoReset=b,Ee.enabled=I,Ee.autoUpdate=B,Ee.needsUpdate=z,Ee.type=O}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ge(b){const I=b.target;I.removeEventListener("dispose",ge),Xe(I)}function Xe(b){Ke(b),C.remove(b)}function Ke(b){const I=C.get(b).programs;I!==void 0&&(I.forEach(function(B){Q.releaseProgram(B)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,B,z,O,re){I===null&&(I=De);const de=O.isMesh&&O.matrixWorld.determinant()<0,_e=ph(b,I,B,z,O);be.setMaterial(z,de);let Me=B.index,we=1;if(z.wireframe===!0){if(Me=j.getWireframeAttribute(B),Me===void 0)return;we=2}const Te=B.drawRange,Ae=B.attributes.position;let st=Te.start*we,zt=(Te.start+Te.count)*we;re!==null&&(st=Math.max(st,re.start*we),zt=Math.min(zt,(re.start+re.count)*we)),Me!==null?(st=Math.max(st,0),zt=Math.min(zt,Me.count)):Ae!=null&&(st=Math.max(st,0),zt=Math.min(zt,Ae.count));const pt=zt-st;if(pt<0||pt===1/0)return;ke.setup(O,z,_e,B,Me);let Tn,et=Fe;if(Me!==null&&(Tn=$.get(Me),et=ze,et.setIndex(Tn)),O.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*Be()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(O.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),be.setLineWidth(Re*Be()),O.isLineSegments?et.setMode(N.LINES):O.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else O.isPoints?et.setMode(N.POINTS):O.isSprite&&et.setMode(N.TRIANGLES);if(O.isBatchedMesh)et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)et.renderInstances(st,pt,O.count);else if(B.isInstancedBufferGeometry){const Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Vs=Math.min(B.instanceCount,Re);et.renderInstances(st,pt,Vs)}else et.render(st,pt)};function Qe(b,I,B){b.transparent===!0&&b.side===pn&&b.forceSinglePass===!1?(b.side=wt,b.needsUpdate=!0,qr(b,I,B),b.side=yn,b.needsUpdate=!0,qr(b,I,B),b.side=pn):qr(b,I,B)}this.compile=function(b,I,B=null){B===null&&(B=b),f=ne.get(B),f.init(),S.push(f),B.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(v._useLegacyLights);const z=new Set;return b.traverse(function(O){const re=O.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const _e=re[de];Qe(_e,B,O),z.add(_e)}else Qe(re,B,O),z.add(re)}),S.pop(),f=null,z},this.compileAsync=function(b,I,B=null){const z=this.compile(b,I,B);return new Promise(O=>{function re(){if(z.forEach(function(de){C.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){O(b);return}setTimeout(re,10)}ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let yt=null;function Ye(b){yt&&yt(b)}function ln(){si.stop()}function cn(){si.start()}const si=new ru;si.setAnimationLoop(Ye),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){yt=b,R.setAnimationLoop(b),b===null?si.stop():si.start()},R.addEventListener("sessionstart",ln),R.addEventListener("sessionend",cn),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(I),I=R.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,T),f=ne.get(b,S.length),f.init(),S.push(f),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),He.setFromProjectionMatrix(ce),Z=this.localClippingEnabled,G=oe.init(this.clippingPlanes,Z),g=xe.get(b,p.length),g.init(),p.push(g),Io(b,I,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(F,J),this.info.render.frame++,G===!0&&oe.beginShadows();const B=f.state.shadowsArray;if(Ee.render(B,b,I),G===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1)&&ue.render(g,b),f.setupLights(v._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let O=0,re=z.length;O<re;O++){const de=z[O];Uo(g,b,de,de.viewport)}}else Uo(g,b,I);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,I),ke.resetDefaultState(),L=-1,x=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Io(b,I,B,z){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||He.intersectsSprite(b)){z&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const de=ve.update(b),_e=b.material;_e.visible&&g.push(b,de,_e,B,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||He.intersectsObject(b))){const de=ve.update(b),_e=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ce.copy(de.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(_e)){const Me=de.groups;for(let we=0,Te=Me.length;we<Te;we++){const Ae=Me[we],st=_e[Ae.materialIndex];st&&st.visible&&g.push(b,de,st,B,Ce.z,Ae)}}else _e.visible&&g.push(b,de,_e,B,Ce.z,null)}}const re=b.children;for(let de=0,_e=re.length;de<_e;de++)Io(re[de],I,B,z)}function Uo(b,I,B,z){const O=b.opaque,re=b.transmissive,de=b.transparent;f.setupLightsView(B),G===!0&&oe.setGlobalState(v.clippingPlanes,B),re.length>0&&fh(O,re,I,B),z&&be.viewport(y.copy(z)),O.length>0&&Wr(O,I,B),re.length>0&&Wr(re,I,B),de.length>0&&Wr(de,I,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function fh(b,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget===null){f.state.transmissionRenderTarget=new Ai(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Ss:Jn,minFilter:Mi,samples:4,stencilBuffer:s});const we=C.get(f.state.transmissionRenderTarget);we.__isTransmissionRenderTarget=!0}const re=f.state.transmissionRenderTarget;v.getDrawingBufferSize(se),re.setSize(se.x,se.y);const de=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(P),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear();const _e=v.toneMapping;v.toneMapping=Zn,Wr(b,B,z),M.updateMultisampleRenderTarget(re),M.updateRenderTargetMipmap(re);let Me=!1;for(let we=0,Te=I.length;we<Te;we++){const Ae=I[we],st=Ae.object,zt=Ae.geometry,pt=Ae.material,Tn=Ae.group;if(pt.side===pn&&st.layers.test(z.layers)){const et=pt.side;pt.side=wt,pt.needsUpdate=!0,No(st,B,z,zt,pt,Tn),pt.side=et,pt.needsUpdate=!0,Me=!0}}Me===!0&&(M.updateMultisampleRenderTarget(re),M.updateRenderTargetMipmap(re)),v.setRenderTarget(de),v.setClearColor(P,W),v.toneMapping=_e}function Wr(b,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let O=0,re=b.length;O<re;O++){const de=b[O],_e=de.object,Me=de.geometry,we=z===null?de.material:z,Te=de.group;_e.layers.test(B.layers)&&No(_e,I,B,Me,we,Te)}}function No(b,I,B,z,O,re){b.onBeforeRender(v,I,B,z,O,re),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,I,B,z,b,re),O.transparent===!0&&O.side===pn&&O.forceSinglePass===!1?(O.side=wt,O.needsUpdate=!0,v.renderBufferDirect(B,I,z,O,b,re),O.side=yn,O.needsUpdate=!0,v.renderBufferDirect(B,I,z,O,b,re),O.side=pn):v.renderBufferDirect(B,I,z,O,b,re),b.onAfterRender(v,I,B,z,O,re)}function qr(b,I,B){I.isScene!==!0&&(I=De);const z=C.get(b),O=f.state.lights,re=f.state.shadowsArray,de=O.state.version,_e=Q.getParameters(b,O.state,re,I,B),Me=Q.getProgramCacheKey(_e);let we=z.programs;z.environment=b.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(b.isMeshStandardMaterial?q:H).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",ge),we=new Map,z.programs=we);let Te=we.get(Me);if(Te!==void 0){if(z.currentProgram===Te&&z.lightsStateVersion===de)return Fo(b,_e),Te}else _e.uniforms=Q.getUniforms(b),b.onBuild(B,_e,v),b.onBeforeCompile(_e,v),Te=Q.acquireProgram(_e,Me),we.set(Me,Te),z.uniforms=_e.uniforms;const Ae=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=oe.uniform),Fo(b,_e),z.needsLights=gh(b),z.lightsStateVersion=de,z.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Te,z.uniformsList=null,Te}function Oo(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=gs.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Fo(b,I){const B=C.get(b);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function ph(b,I,B,z,O){I.isScene!==!0&&(I=De),M.resetTextureUnits();const re=I.fog,de=z.isMeshStandardMaterial?I.environment:null,_e=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ii,Me=(z.isMeshStandardMaterial?q:H).get(z.envMap||de),we=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Te=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!B.morphAttributes.position,st=!!B.morphAttributes.normal,zt=!!B.morphAttributes.color;let pt=Zn;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=v.toneMapping);const Tn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=Tn!==void 0?Tn.length:0,Re=C.get(z),Vs=f.state.lights;if(G===!0&&(Z===!0||b!==x)){const jt=b===x&&z.id===L;oe.setState(z,b,jt)}let Ze=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Vs.state.version||Re.outputColorSpace!==_e||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==Me||z.fog===!0&&Re.fog!==re||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==oe.numPlanes||Re.numIntersection!==oe.numIntersection)||Re.vertexAlphas!==we||Re.vertexTangents!==Te||Re.morphTargets!==Ae||Re.morphNormals!==st||Re.morphColors!==zt||Re.toneMapping!==pt||Re.morphTargetsCount!==et)&&(Ze=!0):(Ze=!0,Re.__version=z.version);let ai=Re.currentProgram;Ze===!0&&(ai=qr(z,I,O));let Bo=!1,mr=!1,Gs=!1;const Mt=ai.getUniforms(),Bn=Re.uniforms;if(be.useProgram(ai.program)&&(Bo=!0,mr=!0,Gs=!0),z.id!==L&&(L=z.id,mr=!0),Bo||x!==b){Mt.setValue(N,"projectionMatrix",b.projectionMatrix),Mt.setValue(N,"viewMatrix",b.matrixWorldInverse);const jt=Mt.map.cameraPosition;jt!==void 0&&jt.setValue(N,Ce.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&Mt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,mr=!0,Gs=!0)}if(O.isSkinnedMesh){Mt.setOptional(N,O,"bindMatrix"),Mt.setOptional(N,O,"bindMatrixInverse");const jt=O.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Mt.setValue(N,"boneTexture",jt.boneTexture,M))}O.isBatchedMesh&&(Mt.setOptional(N,O,"batchingTexture"),Mt.setValue(N,"batchingTexture",O._matricesTexture,M));const Ws=B.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&he.update(O,B,ai),(mr||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,Mt.setValue(N,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Bn.envMap.value=Me,Bn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Bn.envMapIntensity.value=I.environmentIntensity),mr&&(Mt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&mh(Bn,Gs),re&&z.fog===!0&&me.refreshFogUniforms(Bn,re),me.refreshMaterialUniforms(Bn,z,Y,X,f.state.transmissionRenderTarget),gs.upload(N,Oo(Re),Bn,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(gs.upload(N,Oo(Re),Bn,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(N,"center",O.center),Mt.setValue(N,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(N,"normalMatrix",O.normalMatrix),Mt.setValue(N,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const jt=z.uniformsGroups;for(let qs=0,_h=jt.length;qs<_h;qs++){const zo=jt[qs];je.update(zo,ai),je.bind(zo,ai)}}return ai}function mh(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function gh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,B){C.get(b.texture).__webglTexture=I,C.get(b.depthTexture).__webglTexture=B;const z=C.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const B=C.get(b);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,B=0){T=b,A=I,w=B;let z=!0,O=null,re=!1,de=!1;if(b){const Me=C.get(b);Me.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Me.__webglFramebuffer===void 0?M.setupRenderTarget(b):Me.__hasExternalTextures&&M.rebindTextures(b,C.get(b.texture).__webglTexture,C.get(b.depthTexture).__webglTexture);const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(de=!0);const Te=C.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?O=Te[I][B]:O=Te[I],re=!0):b.samples>0&&M.useMultisampledRTT(b)===!1?O=C.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[B]:O=Te,y.copy(b.viewport),D.copy(b.scissor),k=b.scissorTest}else y.copy(K).multiplyScalar(Y).floor(),D.copy(le).multiplyScalar(Y).floor(),k=Se;if(be.bindFramebuffer(N.FRAMEBUFFER,O)&&z&&be.drawBuffers(b,O),be.viewport(y),be.scissor(D),be.setScissorTest(k),re){const Me=C.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,B)}else if(de){const Me=C.get(b.texture),we=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,we)}L=-1},this.readRenderTargetPixels=function(b,I,B,z,O,re,de){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){be.bindFramebuffer(N.FRAMEBUFFER,_e);try{const Me=b.texture,we=Me.format,Te=Me.type;if(we!==on&&Ve.convert(we)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Te===Ss&&(ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float"));if(Te!==Jn&&Ve.convert(Te)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&Te!==Xn&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-z&&B>=0&&B<=b.height-O&&N.readPixels(I,B,z,O,Ve.convert(we),Ve.convert(Te),re)}finally{const Me=T!==null?C.get(T).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(b,I,B=0){const z=Math.pow(2,-B),O=Math.floor(I.image.width*z),re=Math.floor(I.image.height*z);M.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,b.x,b.y,O,re),be.unbindTexture()},this.copyTextureToTexture=function(b,I,B,z=0){const O=I.image.width,re=I.image.height,de=Ve.convert(B.format),_e=Ve.convert(B.type);M.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,b.x,b.y,O,re,de,_e,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,de,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,b.x,b.y,de,_e,I.image),z===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(b,I,B,z,O=0){const re=Math.round(b.max.x-b.min.x),de=Math.round(b.max.y-b.min.y),_e=b.max.z-b.min.z+1,Me=Ve.convert(z.format),we=Ve.convert(z.type);let Te;if(z.isData3DTexture)M.setTexture3D(z,0),Te=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M.setTexture2DArray(z,0),Te=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ae=N.getParameter(N.UNPACK_ROW_LENGTH),st=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),pt=N.getParameter(N.UNPACK_SKIP_ROWS),Tn=N.getParameter(N.UNPACK_SKIP_IMAGES),et=B.isCompressedTexture?B.mipmaps[O]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Te,O,I.x,I.y,I.z,re,de,_e,Me,we,et.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,O,I.x,I.y,I.z,re,de,_e,Me,et.data):N.texSubImage3D(Te,O,I.x,I.y,I.z,re,de,_e,Me,we,et),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ae),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tn),O===0&&z.generateMipmaps&&N.generateMipmap(Te),be.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,be.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ao?"display-p3":"srgb",t.unpackColorSpace=Ge.workingColorSpace===Os?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class As{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new As(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I_ extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class U_ extends At{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Pt,this.magFilter=s!==void 0?s:Pt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ho extends En{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,m=new U,_=new Ue;for(let g=0;g<=i;g++){for(let f=0;f<=n;f++){const p=s+f/n*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let g=0;g<i;g++){const f=g*(n+1);for(let p=0;p<n;p++){const S=p+f,v=S,E=S+n+1,A=S+n+2,w=S+1;o.push(v,E,w),o.push(E,A,w)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class an extends En{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,d=new U,m=[],_=[],g=[],f=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const w=A/t;h.x=-e*Math.cos(i+w*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+w*s)*Math.sin(a+v*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),f.push(w+E,1-v),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const v=u[p][S+1],E=u[p][S],A=u[p+1][S],w=u[p+1][S+1];(p!==0||a>0)&&m.push(v,E,w),(p!==n-1||l<Math.PI)&&m.push(E,A,w)}this.setIndex(m),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class N_ extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const rc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class O_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const F_=new O_;class fo{constructor(e){this.manager=e!==void 0?e:F_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fo.DEFAULT_MATERIAL_NAME="__DEFAULT";class B_ extends fo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=rc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Rr("img");function l(){u(),rc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ta extends fo{constructor(e){super(e)}load(e,t,n,i){const s=new At,a=new B_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class po extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class z_ extends po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new rt,sc=new U,ac=new U;class k_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ac),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class H_ extends k_{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oc extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lc extends po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class V_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cc(){return(typeof performance>"u"?Date:performance).now()}const uc=new rt;class hc{constructor(e,t,n=0,i=1/0){this.ray=new Kc(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(e,t=!0,n=[]){return Ga(e,this,n,t),n.sort(dc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ga(e[i],this,n,t);return n.sort(dc),n}}function dc(r,e){return r.distance-e.distance}function Ga(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Ga(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);function In(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function du(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},or={duration:.5,overwrite:!1,delay:0},mo,xt,Je,xn=1e8,Tt=1/xn,Wa=Math.PI*2,G_=Wa/4,W_=0,fu=Math.sqrt,q_=Math.cos,X_=Math.sin,_t=function(e){return typeof e=="string"},it=function(e){return typeof e=="function"},On=function(e){return typeof e=="number"},go=function(e){return typeof e>"u"},bn=function(e){return typeof e=="object"},Ut=function(e){return e!==!1},_o=function(){return typeof window<"u"},ms=function(e){return it(e)||_t(e)},pu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ct=Array.isArray,qa=/(?:-?\.?\d|\.)+/gi,mu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ji=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Aa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gu=/[+-]=-?[.\d]+/,_u=/[^,'"\[\]\s]+/gi,Y_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,dn,Xa,vo,Yt={},Cs={},vu,xu=function(e){return(Cs=lr(e,Yt))&&Bt},xo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pr=function(e,t){return!t&&console.warn(e)},yu=function(e,t){return e&&(Yt[e]=t)&&Cs&&(Cs[e]=t)||Yt},Lr=function(){return 0},$_={suppressEvents:!0,isStart:!0,kill:!1},_s={suppressEvents:!0,kill:!1},j_={suppressEvents:!0},yo={},Qn=[],Ya={},Mu,Vt={},Ca={},fc=30,vs=[],Mo="",So=function(e){var t=e[0],n,i;if(bn(t)||it(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=vs.length;i--&&!vs[i].targetTest(t););n=vs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new qu(e[i],n)))||e.splice(i,1);return e},bi=function(e){return e._gsap||So(en(e))[0]._gsap},Su=function(e,t,n){return(n=e[t])&&it(n)?e[t]():go(n)&&e.getAttribute&&e.getAttribute(t)||n},Nt=function(e,t){return(e=e.split(",")).forEach(t)||e},at=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},er=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},K_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Rs=function(){var e=Qn.length,t=Qn.slice(0),n,i;for(Ya={},Qn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bo=function(e){return!!(e._initted||e._startAt||e.add)},bu=function(e,t,n,i){Qn.length&&!xt&&Rs(),e.render(t,n,!!(xt&&t<0&&bo(e))),Qn.length&&!xt&&Rs()},Eu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(_u).length<2?t:_t(e)?e.trim():e},Tu=function(e){return e},$t=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Z_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},lr=function(e,t){for(var n in t)e[n]=t[n];return e},pc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ps=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Tr=function(e){var t=e.parent||tt,n=e.keyframes?Z_(Ct(e.keyframes)):$t;if(Ut(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},J_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},wu=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},zs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ti=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ei=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Q_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$a=function(e,t,n,i){return e._startAt&&(xt?e._startAt.revert(_s):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},e0=function r(e){return!e||e._ts&&r(e.parent)},mc=function(e){return e._repeat?cr(e._tTime,e=e.duration()+e._rDelay)*e:0},cr=function(e,t){var n=Math.floor(e=ct(e/t));return e&&n===e?n-1:n},Ls=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ks=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},Hs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ks(e),n._dirty||Ei(n,e)),e},Au=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ls(e.rawTime(),t),(!t._dur||Gr(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Ei(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},gn=function(e,t,n,i){return t.parent&&ti(t),t._start=ct((On(n)?n:n||e!==tt?Zt(e,n,t):e._time)+t._delay),t._end=ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wu(e,t,"_first","_last",e._sort?"_start":0),ja(t)||(e._recent=t),i||Au(e,t),e._ts<0&&Hs(e,e._tTime),e},Cu=function(e,t){return(Yt.ScrollTrigger||xo("scrollTrigger",t))&&Yt.ScrollTrigger.create(t,e)},Ru=function(e,t,n,i,s){if(To(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mu!==Gt.frame)return Qn.push(e),e._lazy=[s,i],1},t0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ja=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},n0=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&t0(e)&&!(!e._initted&&ja(e))||(e._ts<0||e._dp._ts<0)&&!ja(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Gr(0,e._tDur,t),u=cr(l,o),e._yoyo&&u&1&&(a=1-a),u!==cr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||xt||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Ru(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&$a(e,t,n,!0),e._onUpdate&&!n&&Wt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Wt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ti(e,1),!n&&!xt&&(Wt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},i0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ur=function(e,t,n,i){var s=e._repeat,a=ct(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ct(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Hs(e,e._tTime=e._tDur*o),e.parent&&ks(e),n||Ei(e.parent,e),e},gc=function(e){return e instanceof Lt?Ei(e):ur(e,e._dur)},r0={_start:0,endTime:Lr,totalDuration:Lr},Zt=function r(e,t,n){var i=e.labels,s=e._recent||r0,a=e.duration()>=xn?s.endTime(!1):e._dur,o,l,c;return _t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ct(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},wr=function(e,t,n){var i=On(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ut(l.vars.inherit)&&l.parent;a.immediateRender=Ut(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new lt(t[0],a,t[s+1])},ri=function(e,t){return e||e===0?t(e):t},Gr=function(e,t,n){return n<e?e:n>t?t:n},Et=function(e,t){return!_t(e)||!(t=Y_.exec(e))?"":t[1]},s0=function(e,t,n){return ri(n,function(i){return Gr(e,t,i)})},Ka=[].slice,Pu=function(e,t){return e&&bn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bn(e[0]))&&!e.nodeType&&e!==dn},a0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return _t(i)&&!t||Pu(i,1)?(s=n).push.apply(s,en(i)):n.push(i)})||n},en=function(e,t,n){return Je&&!t&&Je.selector?Je.selector(e):_t(e)&&!n&&(Xa||!hr())?Ka.call((t||vo).querySelectorAll(e),0):Ct(e)?a0(e,n):Pu(e)?Ka.call(e,0):e?[e]:[]},Za=function(e){return e=en(e)[0]||Pr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return en(t,n.querySelectorAll?n:n===e?Pr("Invalid scope")||vo.createElement("div"):e)}},Lu=function(e){return e.sort(function(){return .5-Math.random()})},Du=function(e){if(it(e))return e;var t=bn(e)?e:{each:e},n=Ti(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return _t(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,m,_){var g=(_||t).length,f=a[g],p,S,v,E,A,w,T,L,x;if(!f){if(x=t.grid==="auto"?0:(t.grid||[1,xn])[1],!x){for(T=-1e8;T<(T=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(f=a[g]=[],p=l?Math.min(x,g)*u-.5:i%x,S=x===xn?0:l?g*h/x-.5:i/x|0,T=0,L=xn,w=0;w<g;w++)v=w%x-p,E=S-(w/x|0),f[w]=A=c?Math.abs(c==="y"?E:v):fu(v*v+E*E),A>T&&(T=A),A<L&&(L=A);i==="random"&&Lu(f),f.max=T-L,f.min=L,f.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),f.b=g<0?s-g:s,f.u=Et(t.amount||t.each)||0,n=n&&g<0?Vu(n):n}return g=(f[d]-f.min)/f.max||0,ct(f.b+(n?n(g):g)*f.v)+f.u}},Ja=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(On(n)?0:Et(n))}},Iu=function(e,t){var n=Ct(e),i,s;return!n&&bn(e)&&(i=n=e.radius||xn,e.values?(e=en(e.values),(s=!On(e[0]))&&(i*=i)):e=Ja(e.increment)),ri(t,n?it(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=xn,u=0,h=e.length,d,m;h--;)s?(d=e[h].x-o,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||On(a)?u:u+Et(a)}:Ja(e))},Uu=function(e,t,n,i){return ri(Ct(e)?!t:n===!0?!!(n=0):!i,function(){return Ct(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},o0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},l0=function(e,t){return function(n){return e(parseFloat(n))+(t||Et(n))}},c0=function(e,t,n){return Ou(e,t,0,1,n)},Nu=function(e,t,n){return ri(n,function(i){return e[~~t(i)]})},u0=function r(e,t,n){var i=t-e;return Ct(e)?Nu(e,r(0,e.length),t):ri(n,function(s){return(i+(s-e)%i)%i+e})},h0=function r(e,t,n){var i=t-e,s=i*2;return Ct(e)?Nu(e,r(0,e.length-1),t):ri(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Dr=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?_u:qa),n+=e.substr(t,i-t)+Uu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Ou=function(e,t,n,i,s){var a=t-e,o=i-n;return ri(s,function(l){return n+((l-e)/a*o||0)})},d0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=_t(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ct(e)&&!Ct(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=lr(Ct(e)?[]:{},e));if(!u){for(l in t)Eo.call(o,e,l,"get",t[l]);s=function(_){return Co(_,o)||(a?e.p:e)}}}return ri(n,s)},_c=function(e,t,n){var i=e.labels,s=xn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Wt=function(e,t,n){var i=e.vars,s=i[t],a=Je,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Qn.length&&Rs(),o&&(Je=o),u=l?s.apply(c,l):s.call(c),Je=a,u},br=function(e){return ti(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xt),e.progress()<1&&Wt(e,"onInterrupt"),e},Ki,Fu=[],Bu=function(e){if(e)if(e=!e.name&&e.default||e,_o()||e.headless){var t=e.name,n=it(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Lr,render:Co,add:Eo,kill:C0,modifier:A0,rawVars:0},a={targetTest:0,get:0,getSetter:Ao,aliases:{},register:0};if(hr(),e!==i){if(Vt[t])return;$t(i,$t(Ps(e,s),a)),lr(i.prototype,lr(s,Ps(e,a))),Vt[i.prop=t]=i,e.targetTest&&(vs.push(i),yo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yu(t,i),e.register&&e.register(Bt,i,Ot)}else Fu.push(e)},qe=255,Er={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},Ra=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qe+.5|0},zu=function(e,t,n){var i=e?On(e)?[e>>16,e>>8&qe,e&qe]:0:Er.black,s,a,o,l,c,u,h,d,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Er[e])i=Er[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(qa),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ra(l+1/3,s,a),i[1]=Ra(l,s,a),i[2]=Ra(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(mu),n&&i.length<4&&(i[3]=1),i}else i=e.match(qa)||Er.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/qe,a=i[1]/qe,o=i[2]/qe,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ku=function(e){var t=[],n=[],i=-1;return e.split(ei).forEach(function(s){var a=s.match(ji)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},vc=function(e,t,n){var i="",s=(e+i).match(ei),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=zu(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ku(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ei,"1").split(ji),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ei),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},ei=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Er)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),f0=/hsl[a]?\(/,Hu=function(e){var t=e.join(" "),n;if(ei.lastIndex=0,ei.test(t))return n=f0.test(t),e[1]=vc(e[1],n),e[0]=vc(e[0],n,ku(e[1])),!0},Ir,Gt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,m,_=function g(f){var p=r()-i,S=f===!0,v,E,A,w;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,v=A-a,(v>0||S)&&(w=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,a+=v+(v>=s?4:s-v),E=1),S||(l=c(g)),E)for(m=0;m<o.length;m++)o[m](A,d,w,f)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){vu&&(!Xa&&_o()&&(dn=Xa=window,vo=dn.document||{},Yt.gsap=Bt,(dn.gsapVersions||(dn.gsapVersions=[])).push(Bt.version),xu(Cs||dn.GreenSockGlobals||!dn.gsap&&dn||{}),Fu.forEach(Bu)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(f){return setTimeout(f,a-h.time*1e3+1|0)},Ir=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ir=0,c=Lr},lagSmoothing:function(f,p){e=f||1/0,t=Math.min(p||33,e)},fps:function(f){s=1e3/(f||240),a=h.time*1e3+s},add:function(f,p,S){var v=p?function(E,A,w,T){f(E,A,w,T),h.remove(v)}:f;return h.remove(f),o[S?"unshift":"push"](v),hr(),v},remove:function(f,p){~(p=o.indexOf(f))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},h}(),hr=function(){return!Ir&&Gt.wake()},Oe={},p0=/^[\d.\-M][\d.\-,\s]/,m0=/["']/g,g0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(m0,"").trim():+c,i=l.substr(o+1).trim();return t},_0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},v0=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[g0(t[1])]:_0(e).split(",").map(Eu)):Oe._CE&&p0.test(e)?Oe._CE("",e):n},Vu=function(e){return function(t){return 1-e(1-t)}},Gu=function r(e,t){for(var n=e._first,i;n;)n instanceof Lt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ti=function(e,t){return e&&(it(e)?e:Oe[e]||v0(e))||t},Ri=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Nt(e,function(o){Oe[o]=Yt[o]=s,Oe[a=o.toLowerCase()]=n;for(var l in s)Oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Oe[o+"."+l]=s[l]}),s},Wu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pa=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Wa*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*X_((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Wu(o);return s=Wa/s,l.config=function(c,u){return r(e,c,u)},l},La=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Wu(n);return i.config=function(s){return r(e,s)},i};Nt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ri(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;Ri("Elastic",Pa("in"),Pa("out"),Pa());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ri("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ri("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ri("Circ",function(r){return-(fu(1-r*r)-1)});Ri("Sine",function(r){return r===1?1:-q_(r*G_)+1});Ri("Back",La("in"),La("out"),La());Oe.SteppedEase=Oe.steps=Yt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Tt;return function(o){return((i*Gr(0,a,o)|0)+s)*n}}};or.ease=Oe["quad.out"];Nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Mo+=r+","+r+"Params,"});var qu=function(e,t){this.id=W_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Su,this.set=t?t.getSetter:Ao},Ur=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ur(this,+t.duration,1,1),this.data=t.data,Je&&(this._ctx=Je,Je.data.push(this)),Ir||Gt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hs(this,n),!s._dp||s.parent||Au(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?cr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ls(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Gr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ks(this),Q_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ut(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ls(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=j_);var i=xt;return xt=n,bo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zt(this,n),Ut(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ut(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=it(n)?n:Tu,o=function(){var c=i.then;i.then=null,it(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){br(this)},r}();$t(Ur.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Lt=function(r){du(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ut(n.sortChildren),tt&&gn(n.parent||tt,In(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Cu(In(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return wr(0,arguments,this),this},t.from=function(i,s,a){return wr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return wr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Tr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new lt(i,s,Zt(this,a),1),this},t.call=function(i,s,a){return gn(this,lt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new lt(i,a,Zt(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Tr(a).immediateRender=Ut(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Tr(o).immediateRender=Ut(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,_,g,f,p,S,v,E,A,w,T;if(this!==tt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,E=this._start,v=this._ts,p=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,s,a);if(d=ct(u%f),u===l?(g=this._repeat,d=c):(A=ct(u/f),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=cr(this._tTime,f),!o&&this._tTime&&A!==g&&this._tTime-A*f-this._dur<=0&&(A=g),w&&g&1&&(d=c-d,T=1),g!==A&&!this._lock){var L=w&&A&1,x=L===(w&&g&1);if(g<A&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(T?0:ct(g*f)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wt(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Gu(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=i0(this,ct(o),ct(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!A&&(Wt(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-1e-8);break}}m=_}else{m=this._last;for(var y=i<0?i:d;m;){if(_=m._prev,(m._act||y<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,s,a||xt&&bo(m)),d!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=y?-1e-8:Tt);break}}m=_}}if(S&&!s&&(this.pause(),S.render(d>=o?0:-1e-8)._zTime=d>=o?1:-1,this._ts))return this._start=E,ks(this),this.render(i,s,a);this._onUpdate&&!s&&Wt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ti(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Wt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(On(s)||(s=Zt(this,s,i)),!(i instanceof Ur)){if(Ct(i))return i.forEach(function(o){return a.add(o,s)}),this;if(_t(i))return this.addLabel(i,s);if(it(i))i=lt.delayedCall(0,i);else return this}return this!==i?gn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof lt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return _t(i)?this.removeLabel(i):it(i)?this.killTweensOf(i):(i.parent===this&&zs(this,i),i===this._recent&&(this._recent=this._last),Ei(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(Gt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Zt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=lt.delayedCall(0,s||Lr,a);return o.data="isPause",this._hasPause=1,gn(this,o,Zt(this,i))},t.removePause=function(i){var s=this._first;for(i=Zt(this,i);s;)s._start===i&&s.data==="isPause"&&ti(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Yn!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=en(i),l=this._first,c=On(s),u;l;)l instanceof lt?K_(l._targets,o)&&(c?(!Yn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Zt(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,_=lt.to(a,$t({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Tt,onStart:function(){if(a.pause(),!m){var f=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==f&&ur(_,f,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,$t({startAt:{time:Zt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_c(this,Zt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_c(this,Zt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ei(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ei(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=xn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,gn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ur(a,a===tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(tt._ts&&(bu(tt,Ls(i,tt)),Mu=Gt.frame),Gt.frame>=fc){fc+=Xt.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&Xt.autoSleep&&Gt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gt.sleep()}}},e}(Ur);$t(Lt.prototype,{_lock:0,_hasPause:0,_forcing:0});var x0=function(e,t,n,i,s,a,o){var l=new Ot(this._pt,e,t,0,1,Zu,null,s),c=0,u=0,h,d,m,_,g,f,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Dr(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),d=n.match(Aa)||[];h=Aa.exec(i);)_=h[0],g=i.substring(c,h.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==d[u++]&&(f=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:f,c:_.charAt(1)==="="?er(f,_)-f:parseFloat(_)-f,m:m&&m<4?Math.round:0},c=Aa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(gu.test(i)||p)&&(l.e=0),this._pt=l,l},Eo=function(e,t,n,i,s,a,o,l,c,u){it(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:it(h)?c?e[t.indexOf("set")||!it(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=it(h)?c?E0:ju:wo,_;if(_t(i)&&(~i.indexOf("random(")&&(i=Dr(i)),i.charAt(1)==="="&&(_=er(d,i)+(Et(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Qa)return!isNaN(d*i)&&i!==""?(_=new Ot(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?w0:Ku,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&xo(t,i),x0.call(this,e,t,d,i,m,l||Xt.stringFilter,c))},y0=function(e,t,n,i,s){if(it(e)&&(e=Ar(e,s,t,n,i)),!bn(e)||e.style&&e.nodeType||Ct(e)||pu(e))return _t(e)?Ar(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ar(e[o],s,t,n,i);return a},Xu=function(e,t,n,i,s,a){var o,l,c,u;if(Vt[e]&&(o=new Vt[e]).init(s,o.rawVars?t[e]:y0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ot(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ki))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Yn,Qa,To=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,m=i.autoRevert,_=e._dur,g=e._startAt,f=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:f,v=e._overwrite==="auto"&&!mo,E=e.timeline,A,w,T,L,x,y,D,k,P,W,V,X,Y;if(E&&(!d||!s)&&(s="none"),e._ease=Ti(s,or.ease),e._yEase=h?Vu(Ti(h===!0?s:h,or.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!E&&!!i.runBackwards,!E||d&&!i.stagger){if(k=f[0]?bi(f[0]).harness:0,X=k&&i[k.prop],A=Ps(i,yo),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!m?g.render(-1,!0):g.revert(u&&_?_s:$_),g._lazy=0),a){if(ti(e._startAt=lt.set(f,$t({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Ut(l),startAt:null,delay:0,onUpdate:c&&function(){return Wt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt||!o&&!m)&&e._startAt.revert(_s),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),T=$t({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ut(l),immediateRender:o,stagger:0,parent:p},A),X&&(T[k.prop]=X),ti(e._startAt=lt.set(f,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt?e._startAt.revert(_s):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Ut(l)||l&&!_,w=0;w<f.length;w++){if(x=f[w],D=x._gsap||So(f)[w]._gsap,e._ptLookup[w]=W={},Ya[D.id]&&Qn.length&&Rs(),V=S===f?w:S.indexOf(x),k&&(P=new k).init(x,X||A,e,V,S)!==!1&&(e._pt=L=new Ot(e._pt,x,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(F){W[F]=L}),P.priority&&(y=1)),!k||X)for(T in A)Vt[T]&&(P=Xu(T,A,e,V,x,S))?P.priority&&(y=1):W[T]=L=Eo.call(e,x,T,"get",A[T],V,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),v&&e._pt&&(Yn=e,tt.killTweensOf(x,W,e.globalTime(t)),Y=!e.parent,Yn=0),e._pt&&l&&(Ya[D.id]=1)}y&&Ju(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&E.render(xn,!0,!0)},M0=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,m;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qa=1,e.vars[t]="+=0",To(e,o),Qa=0,l?Pr(t+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=at(n)+Et(h.e)),h.b&&(h.b=u.s+Et(h.b))},S0=function(e,t){var n=e[0]?bi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=lr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},b0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ct(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ar=function(e,t,n,i,s){return it(e)?e.call(t,n,i,s):_t(e)&&~e.indexOf("random(")?Dr(e):e},Yu=Mo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$u={};Nt(Yu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return $u[r]=1});var lt=function(r){du(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Tr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,f=l.scrollTrigger,p=l.yoyoEase,S=i.parent||tt,v=(Ct(n)||pu(n)?On(n[0]):"length"in i)?[n]:en(n),E,A,w,T,L,x,y,D;if(o._targets=v.length?So(v):Pr("GSAP target "+n+" not found. https://gsap.com",!Xt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||d||ms(c)||ms(u)){if(i=o.vars,E=o.timeline=new Lt({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),E.kill(),E.parent=E._dp=In(o),E._start=0,d||ms(c)||ms(u)){if(T=v.length,y=d&&Du(d),bn(d))for(L in d)~Yu.indexOf(L)&&(D||(D={}),D[L]=d[L]);for(A=0;A<T;A++)w=Ps(i,$u),w.stagger=0,p&&(w.yoyoEase=p),D&&lr(w,D),x=v[A],w.duration=+Ar(c,In(o),A,x,v),w.delay=(+Ar(u,In(o),A,x,v)||0)-o._delay,!d&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),E.to(x,w,y?y(A,x,v):0),E._ease=Oe.none;E.duration()?c=u=0:o.timeline=0}else if(_){Tr($t(E.vars.defaults,{ease:"none"})),E._ease=Ti(_.ease||i.ease||"none");var k=0,P,W,V;if(Ct(_))_.forEach(function(X){return E.to(v,X,">")}),E.duration();else{w={};for(L in _)L==="ease"||L==="easeEach"||b0(L,_[L],w,_.easeEach);for(L in w)for(P=w[L].sort(function(X,Y){return X.t-Y.t}),k=0,A=0;A<P.length;A++)W=P[A],V={ease:W.e,duration:(W.t-(A?P[A-1].t:0))/100*c},V[L]=W.v,E.to(v,V,k),k+=V.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return m===!0&&!mo&&(Yn=In(o),tt.killTweensOf(v),Yn=0),gn(S,In(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===ct(S._time)&&Ut(h)&&e0(In(o))&&S.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),f&&Cu(In(o),f),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,d,m,_,g,f,p,S,v,E;if(!c)n0(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=ct(h%g),h===l?(_=this._repeat,d=c):(f=ct(h/g),_=~~f,_&&_===f?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(E=this._yEase,d=c-d),f=cr(this._tTime,g),d===o&&!a&&this._initted&&_===f)return this._tTime=h,this;_!==f&&(v&&this._yEase&&Gu(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ct(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ru(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==f))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(E||this._ease)(d/c),this._from&&(this.ratio=S=1-S),!o&&h&&!s&&!f&&(Wt(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$a(this,i,s,a),Wt(this,"onUpdate")),this._repeat&&_!==f&&this.vars.onRepeat&&!s&&this.parent&&Wt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&$a(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ti(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Wt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ir||Gt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||To(this,c),u=this._ease(c/this._dur),M0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Hs(this,0),this.parent||wu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?br(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Yn&&Yn.vars.overwrite!==!0)._first||br(this),this.parent&&a!==this.timeline.totalDuration()&&ur(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?en(i):o,c=this._ptLookup,u=this._pt,h,d,m,_,g,f,p;if((!s||s==="all")&&J_(o,l))return s==="all"&&(this._pt=0),br(this);for(h=this._op=this._op||[],s!=="all"&&(_t(s)&&(g={},Nt(s,function(S){return g[S]=1}),s=g),s=S0(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,_=d,m={}):(m=h[p]=h[p]||{},_=s);for(g in _)f=d&&d[g],f&&((!("kill"in f.d)||f.d.kill(g)===!0)&&zs(this,f,"_pt"),delete d[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&br(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return wr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return wr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return tt.killTweensOf(i,s,a)},e}(Ur);$t(lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nt("staggerTo,staggerFrom,staggerFromTo",function(r){lt[r]=function(){var e=new Lt,t=Ka.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var wo=function(e,t,n){return e[t]=n},ju=function(e,t,n){return e[t](n)},E0=function(e,t,n,i){return e[t](i.fp,n)},T0=function(e,t,n){return e.setAttribute(t,n)},Ao=function(e,t){return it(e[t])?ju:go(e[t])&&e.setAttribute?T0:wo},Ku=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},w0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Co=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},A0=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},C0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?zs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},R0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ju=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Ot=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ku,this.d=l||this,this.set=c||wo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=R0,this.m=n,this.mt=s,this.tween=i},r}();Nt(Mo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yo[r]=1});Yt.TweenMax=Yt.TweenLite=lt;Yt.TimelineLite=Yt.TimelineMax=Lt;tt=new Lt({sortChildren:!1,defaults:or,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xt.stringFilter=Hu;var wi=[],xs={},P0=[],xc=0,L0=0,Da=function(e){return(xs[e]||P0).map(function(t){return t()})},eo=function(){var e=Date.now(),t=[];e-xc>2&&(Da("matchMediaInit"),wi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=dn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Da("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xc=e,Da("matchMedia"))},Qu=function(){function r(t,n){this.selector=n&&Za(n),this.data=[],this._r=[],this.isReverted=!1,this.id=L0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){it(n)&&(s=i,i=n,n=it);var a=this,o=function(){var c=Je,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Za(s)),Je=a,h=i.apply(a,arguments),it(h)&&a._r.push(h),Je=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===it?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Je;Je=null,n(this),Je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Lt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof lt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=wi.length;a--;)wi[a].id===this.id&&wi.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),D0=function(){function r(t){this.contexts=[],this.scope=t,Je&&Je.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){bn(n)||(n={matches:n});var a=new Qu(0,s||this.scope),o=a.conditions={},l,c,u;Je&&!a.selector&&(a.selector=Je.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=dn.matchMedia(n[c]),l&&(wi.indexOf(a)<0&&wi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(eo):l.addEventListener("change",eo)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ds={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Bu(i)})},timeline:function(e){return new Lt(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){_t(e)&&(e=en(e)[0]);var s=bi(e||{}).get,a=n?Tu:Eu;return n==="native"&&(n=""),e&&(t?a((Vt[t]&&Vt[t].get||s)(e,t,n,i)):function(o,l,c){return a((Vt[o]&&Vt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=en(e),e.length>1){var i=e.map(function(u){return Bt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Vt[t],o=bi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ki._pt=0,h.init(e,n?u+n:u,Ki,0,[e]),h.render(1,h),Ki._pt&&Co(1,Ki)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Bt.to(e,$t((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ti(e.ease,or.ease)),pc(or,e||{})},config:function(e){return pc(Xt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Vt[o]&&!Yt[o]&&Pr(t+" effect requires "+o+" plugin.")}),Ca[t]=function(o,l,c){return n(en(o),$t(l||{},s),c)},a&&(Lt.prototype[t]=function(o,l,c){return this.add(Ca[t](o,bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Oe[e]=Ti(t)},parseEase:function(e,t){return arguments.length?Ti(e,t):Oe},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Lt(e),i,s;for(n.smoothChildTiming=Ut(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,i=tt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof lt&&i.vars.onComplete===i._targets[0]))&&gn(n,i,i._start-i._delay),i=s;return gn(tt,n,0),n},context:function(e,t){return e?new Qu(e,t):Je},matchMedia:function(e){return new D0(e)},matchMediaRefresh:function(){return wi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||eo()},addEventListener:function(e,t){var n=xs[e]||(xs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:u0,wrapYoyo:h0,distribute:Du,random:Uu,snap:Iu,normalize:c0,getUnit:Et,clamp:s0,splitColor:zu,toArray:en,selector:Za,mapRange:Ou,pipe:o0,unitize:l0,interpolate:d0,shuffle:Lu},install:xu,effects:Ca,ticker:Gt,updateRoot:Lt.updateRoot,plugins:Vt,globalTimeline:tt,core:{PropTween:Ot,globals:yu,Tween:lt,Timeline:Lt,Animation:Ur,getCache:bi,_removeLinkedListItem:zs,reverting:function(){return xt},context:function(e){return e&&Je&&(Je.data.push(e),e._ctx=Je),Je},suppressOverwrites:function(e){return mo=e}}};Nt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ds[r]=lt[r]});Gt.add(Lt.updateRoot);Ki=Ds.to({},{duration:0});var I0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},U0=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=I0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ia=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(_t(s)&&(l={},Nt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}U0(o,s)}}}},Bt=Ds.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)xt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ia("roundProps",Ja),Ia("modifiers"),Ia("snap",Iu))||Ds;lt.version=Lt.version=Bt.version="3.13.0";vu=1;_o()&&hr();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yc,$n,tr,Ro,Si,Mc,Po,N0=function(){return typeof window<"u"},Fn={},_i=180/Math.PI,nr=Math.PI/180,Yi=Math.atan2,Sc=1e8,Lo=/([A-Z])/g,O0=/(left|right|width|margin|padding|x)/i,F0=/[\s,\(]\S/,_n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},to=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},B0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},k0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},eh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},th=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},H0=function(e,t,n){return e.style[t]=n},V0=function(e,t,n){return e.style.setProperty(t,n)},G0=function(e,t,n){return e._gsap[t]=n},W0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},q0=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},X0=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},nt="transform",Ft=nt+"Origin",Y0=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Fn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Un(i,o)}):this.tfm[e]=a.x?a[e]:Un(i,e),e===Ft&&(this.tfm.zOrigin=a.zOrigin);else return _n.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(nt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ft,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},nh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Lo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Po(),(!s||!s.isStart)&&!n[nt]&&(nh(n),i.zOrigin&&n[Ft]&&(n[Ft]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ih=function(e,t){var n={target:e,props:[],revert:$0,save:Y0};return e._gsap||Bt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},rh,no=function(e,t){var n=$n.createElementNS?$n.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$n.createElement(e);return n&&n.style?n:$n.createElement(e)},tn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,dr(t)||t,1)||""},bc="O,Moz,ms,Ms,Webkit".split(","),dr=function(e,t,n){var i=t||Si,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(bc[a]+e in s););return a<0?null:(a===3?"ms":a>=0?bc[a]:"")+e},io=function(){N0()&&window.document&&(yc=window,$n=yc.document,tr=$n.documentElement,Si=no("div")||{style:{}},no("div"),nt=dr(nt),Ft=nt+"Origin",Si.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rh=!!dr("perspective"),Po=Bt.core.reverting,Ro=1)},Ec=function(e){var t=e.ownerSVGElement,n=no("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),tr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),tr.removeChild(n),s},Tc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sh=function(e){var t,n;try{t=e.getBBox()}catch{t=Ec(e),n=1}return t&&(t.width||t.height)||n||(t=Ec(e)),t&&!t.width&&!t.x&&!t.y?{x:+Tc(e,["x","cx","x1"])||0,y:+Tc(e,["y","cy","y1"])||0,width:0,height:0}:t},ah=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sh(e))},Ci=function(e,t){if(t){var n=e.style,i;t in Fn&&t!==Ft&&(t=nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Lo,"-$1").toLowerCase())):n.removeAttribute(t)}},jn=function(e,t,n,i,s,a){var o=new Ot(e._pt,t,n,0,1,a?th:eh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},wc={deg:1,rad:1,turn:1},j0={grid:1,flex:1},ni=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Si.style,l=O0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",_,g,f,p;if(i===a||!s||wc[i]||wc[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&ah(e),(m||a==="%")&&(Fn[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],at(m?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===$n||!g.appendChild)&&(g=$n.body),f=g._gsap,f&&m&&f.width&&l&&f.time===Gt.time&&!f.uncache)return at(s/f.width*h);if(m&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:Ci(e,t)}else(m||a==="%")&&!j0[tn(g,"display")]&&(o.position=tn(e,"position")),g===e&&(o.position="static"),g.appendChild(Si),_=Si[u],g.removeChild(Si),o.position="absolute";return l&&m&&(f=bi(g),f.time=Gt.time,f.width=g[u]),at(d?_*s/h:_&&s?h/_*s:0)},Un=function(e,t,n,i){var s;return Ro||io(),t in _n&&t!=="transform"&&(t=_n[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fn[t]&&t!=="transform"?(s=Or(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Us(tn(e,Ft))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Is[t]&&Is[t](e,t,n)||tn(e,t)||Su(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ni(e,t,s,n)+n:s},K0=function(e,t,n,i){if(!n||n==="none"){var s=dr(t,e,1),a=s&&tn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=tn(e,"borderTopColor"))}var o=new Ot(this._pt,e.style,t,0,1,Zu),l=0,c=0,u,h,d,m,_,g,f,p,S,v,E,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=tn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=tn(e,t)||i,g?e.style[t]=g:Ci(e,t)),u=[n,i],Hu(u),n=u[0],i=u[1],d=n.match(ji)||[],A=i.match(ji)||[],A.length){for(;h=ji.exec(i);)f=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),f!==(g=d[c++]||"")&&(m=parseFloat(g)||0,E=g.substr((m+"").length),f.charAt(1)==="="&&(f=er(m,f)+E),p=parseFloat(f),v=f.substr((p+"").length),l=ji.lastIndex-v.length,v||(v=v||Xt.units[t]||E,l===i.length&&(i+=v,o.e+=v)),E!==v&&(m=ni(e,t,g,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:m,c:p-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?th:eh;return gu.test(i)&&(o.e=0),this._pt=o,o},Ac={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Z0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ac[n]||n,t[1]=Ac[i]||i,t.join(" ")},J0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Fn[o]&&(l=1,o=o==="transformOrigin"?Ft:nt),Ci(n,o);l&&(Ci(n,nt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Or(n,1),a.uncache=1,nh(i)))}},Is={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Ot(e._pt,t,n,0,0,J0);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Nr=[1,0,0,1,0,0],oh={},lh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cc=function(e){var t=tn(e,nt);return lh(t)?Nr:t.substr(7).match(mu).map(at)},Do=function(e,t){var n=e._gsap||bi(e),i=e.style,s=Cc(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Nr:s):(s===Nr&&!e.offsetParent&&e!==tr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,tr.appendChild(e)),s=Cc(e),l?i.display=l:Ci(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):tr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ro=function(e,t,n,i,s,a){var o=e._gsap,l=s||Do(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],_=l[1],g=l[2],f=l[3],p=l[4],S=l[5],v=t.split(" "),E=parseFloat(v[0])||0,A=parseFloat(v[1])||0,w,T,L,x;n?l!==Nr&&(T=m*f-_*g)&&(L=E*(f/T)+A*(-g/T)+(g*S-f*p)/T,x=E*(-_/T)+A*(m/T)-(m*S-_*p)/T,E=L,A=x):(w=sh(e),E=w.x+(~v[0].indexOf("%")?E/100*w.width:E),A=w.y+(~(v[1]||v[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(p=E-c,S=A-u,o.xOffset=h+(p*m+S*g)-p,o.yOffset=d+(p*_+S*f)-S):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Ft]="0px 0px",a&&(jn(a,o,"xOrigin",c,E),jn(a,o,"yOrigin",u,A),jn(a,o,"xOffset",h,o.xOffset),jn(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+A)},Or=function(e,t){var n=e._gsap||new qu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=tn(e,Ft)||"0",u,h,d,m,_,g,f,p,S,v,E,A,w,T,L,x,y,D,k,P,W,V,X,Y,F,J,K,le,Se,He,G,Z;return u=h=d=g=f=p=S=v=E=0,m=_=1,n.svg=!!(e.getCTM&&ah(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),i.scale=i.rotate=i.translate="none"),T=Do(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),ro(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,w=n.yOrigin||0,T!==Nr&&(D=T[0],k=T[1],P=T[2],W=T[3],u=V=T[4],h=X=T[5],T.length===6?(m=Math.sqrt(D*D+k*k),_=Math.sqrt(W*W+P*P),g=D||k?Yi(k,D)*_i:0,S=P||W?Yi(P,W)*_i+g:0,S&&(_*=Math.abs(Math.cos(S*nr))),n.svg&&(u-=A-(A*D+w*P),h-=w-(A*k+w*W))):(Z=T[6],He=T[7],K=T[8],le=T[9],Se=T[10],G=T[11],u=T[12],h=T[13],d=T[14],L=Yi(Z,Se),f=L*_i,L&&(x=Math.cos(-L),y=Math.sin(-L),Y=V*x+K*y,F=X*x+le*y,J=Z*x+Se*y,K=V*-y+K*x,le=X*-y+le*x,Se=Z*-y+Se*x,G=He*-y+G*x,V=Y,X=F,Z=J),L=Yi(-P,Se),p=L*_i,L&&(x=Math.cos(-L),y=Math.sin(-L),Y=D*x-K*y,F=k*x-le*y,J=P*x-Se*y,G=W*y+G*x,D=Y,k=F,P=J),L=Yi(k,D),g=L*_i,L&&(x=Math.cos(L),y=Math.sin(L),Y=D*x+k*y,F=V*x+X*y,k=k*x-D*y,X=X*x-V*y,D=Y,V=F),f&&Math.abs(f)+Math.abs(g)>359.9&&(f=g=0,p=180-p),m=at(Math.sqrt(D*D+k*k+P*P)),_=at(Math.sqrt(X*X+Z*Z)),L=Yi(V,X),S=Math.abs(L)>2e-4?L*_i:0,E=G?1/(G<0?-G:G):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!lh(tn(e,nt)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(m*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=at(m),n.scaleY=at(_),n.rotation=at(g)+o,n.rotationX=at(f)+o,n.rotationY=at(p)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Ft]=Us(c)),n.xOffset=n.yOffset=0,n.force3D=Xt.force3D,n.renderTransform=n.svg?ev:rh?ch:Q0,n.uncache=0,n},Us=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ua=function(e,t,n){var i=Et(t);return at(parseFloat(t)+parseFloat(ni(e,"x",n+"px",i)))+i},Q0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ch(e,t)},fi="0deg",Mr="0px",pi=") ",ch=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,f=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,E="",A=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==fi||u!==fi)){var w=parseFloat(u)*nr,T=Math.sin(w),L=Math.cos(w),x;w=parseFloat(h)*nr,x=Math.cos(w),a=Ua(S,a,T*x*-v),o=Ua(S,o,-Math.sin(w)*-v),l=Ua(S,l,L*x*-v+v)}f!==Mr&&(E+="perspective("+f+pi),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(A||a!==Mr||o!==Mr||l!==Mr)&&(E+=l!==Mr||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+pi),c!==fi&&(E+="rotate("+c+pi),u!==fi&&(E+="rotateY("+u+pi),h!==fi&&(E+="rotateX("+h+pi),(d!==fi||m!==fi)&&(E+="skew("+d+", "+m+pi),(_!==1||g!==1)&&(E+="scale("+_+", "+g+pi),S.style[nt]=E||"translate(0, 0)"},ev=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,f=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(a),E=parseFloat(o),A,w,T,L,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=nr,c*=nr,A=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=nr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,L*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),A*=x,w*=x)),A=at(A),w=at(w),T=at(T),L=at(L)):(A=h,L=d,w=T=0),(v&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(v=ni(m,"x",a,"px"),E=ni(m,"y",o,"px")),(_||g||f||p)&&(v=at(v+_-(_*A+g*T)+f),E=at(E+g-(_*w+g*L)+p)),(i||s)&&(x=m.getBBox(),v=at(v+i/100*x.width),E=at(E+s/100*x.height)),x="matrix("+A+","+w+","+T+","+L+","+v+","+E+")",m.setAttribute("transform",x),S&&(m.style[nt]=x)},tv=function(e,t,n,i,s){var a=360,o=_t(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?_i:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),h==="cw"&&c<0?c=(c+a*Sc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Sc)%a-~~(c/a)*a)),e._pt=d=new Ot(e._pt,t,n,i,c,B0),d.e=u,d.u="deg",e._props.push(n),d},Rc=function(e,t){for(var n in t)e[n]=t[n];return e},nv=function(e,t,n){var i=Rc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[nt]=t,o=Or(n,1),Ci(n,nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nt],a[nt]=t,o=Or(n,1),a[nt]=c);for(l in Fn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Et(c),_=Et(u),h=m!==_?ni(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Ot(e._pt,o,l,h,d-h,to),e._pt.u=_||0,e._props.push(l));Rc(o,i)};Nt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Is[e>1?"border"+r:r]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(_){return Un(o,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(_,g){return m[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,m,h)}});var uh={name:"css",register:io,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,m,_,g,f,p,S,v,E,A,w,T,L;Ro||io(),this.styles=this.styles||ih(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Vt[g]&&Xu(g,t,n,i,e,s)))){if(m=typeof u,_=Is[g],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Dr(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ei.lastIndex=0,ei.test(c)||(f=Et(c),p=Et(u)),p?f!==p&&(c=ni(e,g,c,p)+p):f&&(u+=f),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),L.push(g,0,o[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],_t(c)&&~c.indexOf("random(")&&(c=Dr(c)),Et(c+"")||c==="auto"||(c+=Xt.units[g]||Et(Un(e,g))||""),(c+"").charAt(1)==="="&&(c=Un(e,g))):c=Un(e,g),d=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in _n&&(g==="autoAlpha"&&(d===1&&Un(e,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,o.visibility),jn(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=_n[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Fn,v){if(this.styles.save(g),m==="string"&&u.substring(0,6)==="var(--"&&(u=tn(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),E||(A=e._gsap,A.renderTransform&&!t.parseTransform||Or(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,E=this._pt=new Ot(this._pt,o,nt,0,1,A.renderTransform,A,0,-1),E.dep=1),g==="scale")this._pt=new Ot(this._pt,A,"scaleY",A.scaleY,(S?er(A.scaleY,S+h):h)-A.scaleY||0,to),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(Ft,0,o[Ft]),u=Z0(u),A.svg?ro(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&jn(this,A,"zOrigin",A.zOrigin,p),jn(this,o,g,Us(c),Us(u)));continue}else if(g==="svgOrigin"){ro(e,u,1,w,0,this);continue}else if(g in oh){tv(this,A,g,d,S?er(d,S+u):u);continue}else if(g==="smoothOrigin"){jn(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){nv(this,u,e);continue}}else g in o||(g=dr(g)||g);if(v||(h||h===0)&&(d||d===0)&&!F0.test(u)&&g in o)f=(c+"").substr((d+"").length),h||(h=0),p=Et(u)||(g in Xt.units?Xt.units[g]:f),f!==p&&(d=ni(e,g,c,p)),this._pt=new Ot(this._pt,v?A:o,g,d,(S?er(d,S+h):h)-d,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?k0:to),this._pt.u=p||0,f!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=z0);else if(g in o)K0.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){xo(g,u);continue}v||(g in o?L.push(g,0,o[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,c||e[g])),a.push(g)}}T&&Ju(this)},render:function(e,t){if(t.tween._time||!Po())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Un,aliases:_n,getSetter:function(e,t,n){var i=_n[t];return i&&i.indexOf(",")<0&&(t=i),t in Fn&&t!==Ft&&(e._gsap.x||Un(e,"x"))?n&&Mc===n?t==="scale"?W0:G0:(Mc=n||{})&&(t==="scale"?q0:X0):e.style&&!go(e.style[t])?H0:~t.indexOf("-")?V0:Ao(e,t)},core:{_removeProperty:Ci,_getMatrix:Do}};Bt.utils.checkPrefix=dr;Bt.core.getStyleSaver=ih;(function(r,e,t,n){var i=Nt(r+","+e+","+t,function(s){Fn[s]=1});Nt(e,function(s){Xt.units[s]="deg",oh[s]=1}),_n[i[13]]=r+","+e,Nt(n,function(s){var a=s.split(":");_n[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xt.units[r]="px"});Bt.registerPlugin(uh);var ae=Bt.registerPlugin(uh)||Bt;ae.core.Tween;class iv{constructor(e){this.options=e,this.container=document.getElementById(e.containerId),this.scene=null,this.camera=null,this.renderer=null,this.globe=null,this.videoElement=null,this.hotspotObjects=[],this.raycaster=new hc,this.mouse=new Ue,this.clock=new V_,this.orbitParams={isOrbiting:!0,baseSpeed:4e-4,currentSpeed:4e-4,maxSpeed:.002,accelerationFactor:1.5,decelerationFactor:.9,ellipseMajorAxis:12,ellipseMinorAxis:8,inclination:Math.PI/6,orbitAngle:0,zoomLevel:1,maxZoomLevel:1.1,minZoomLevel:.6,inHotspotMode:!1,orbitHistory:[]},this.celestialParams={sunPosition:new U(100,20,100),moonPosition:new U(-70,30,-50)},this._savedState=null,this.init()}init(){this.scene=new I_;const e=new lc(16777215,1.2);this.scene.add(e);const t=new oc(16777215,.5);t.position.set(5,10,7),this.scene.add(t),this.scene.fog=new As(0,15e-5),this.camera=new Jt(60,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraPosition(),this.renderer=new D_({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ic,this.container.appendChild(this.renderer.domElement),this.createSkybox(),this.setupLighting(),this.createGlobe(),this.createCelestialBodies(),this.createOrbitPath(),window.addEventListener("resize",this.onWindowResize.bind(this)),this.container.addEventListener("click",this.onMouseClick.bind(this)),this.addLogo()}addLogo(){const e=document.createElement("div");e.style.cssText=`
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
        `;const t=document.createElement("img");t.src="/public/images/nat-geo-logo.png",t.alt="National Geographic",t.style.cssText=`
            height: 40px;
            width: auto;
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
        `,e.appendChild(t),this.container.appendChild(e)}setupLighting(){const e=new lc(4210768,.5);this.scene.add(e);const t=new oc(16777215,1);t.position.copy(this.celestialParams.sunPosition),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,this.scene.add(t),this.sunLight=t;const n=new z_(35071,65416,.6);this.scene.add(n)}createCelestialBodies(){const e=new Ta,t=e.load("/public/images/sun-texture.jpg"),n=new an(3,32,32),i=new Dn({map:t,transparent:!0,opacity:.95}),s=new ht(n,i);s.position.copy(this.celestialParams.sunPosition),this.scene.add(s);const a=e.load("/public/images/moon-texture.jpg"),o=new an(1.5,32,32),l=new N_({map:a}),c=new ht(o,l);c.position.copy(this.celestialParams.moonPosition),this.scene.add(c),this.sun=s,this.moon=c}createOrbitPath(){const e=[];for(let s=0;s<=100;s++){const a=s/100*Math.PI*2,o=this.orbitParams.ellipseMajorAxis,l=this.orbitParams.ellipseMinorAxis,c=this.orbitParams.inclination;let u=o*Math.cos(a),h=l*Math.sin(a);const d=h*Math.sin(c);h=h*Math.cos(c),e.push(new U(u,d,h))}new En().setFromPoints(e);const n=new an(.2,16,16),i=new Dn({color:16763904,transparent:!0,opacity:.9});this.cameraMarker=new ht(n,i),this.scene.add(this.cameraMarker)}createGlobe(){const e=document.createElement("video");e.src=this.options.videoPath,e.loop=!0,e.muted=!0,e.autoplay=!0,e.playsInline=!0,e.crossOrigin="anonymous",this.videoElement=e,e.addEventListener("ended",()=>{e.play()}),setInterval(()=>{e.paused&&!e.ended&&(console.log("Vidéo en pause, relance..."),e.play().catch(u=>{console.error("Impossible de relancer la vidéo:",u)}))},1e3);const t=new U_(e);t.minFilter=Pt,t.magFilter=Pt,t.format=on,t.encoding=void 0;const n=new an(1.99,64,64),i=new Dn({color:0,transparent:!0,opacity:0,colorWrite:!1,depthWrite:!0,side:yn}),s=new ht(n,i);s.renderOrder=0,this.scene.add(s),this.depthSphere=s;const a=new an(2,64,64),o=new Dn({map:t,transparent:!0,opacity:1,side:yn,depthTest:!0,depthWrite:!1,color:16777215,toneMapped:!1});this.globe=new ht(a,o),this.globe.castShadow=!0,this.globe.receiveShadow=!0,this.globe.renderOrder=1,this.scene.add(this.globe),this.createAtmosphere();const l=new an(2.02,64,64),c=new Dn({color:16777215,transparent:!0,opacity:.4,alphaTest:.1,depthTest:!0,depthWrite:!1});this.clouds=new ht(l,c),this.clouds.renderOrder=2,this.scene.add(this.clouds),e.play().catch(u=>{console.error("Erreur lors de la lecture de la vidéo:",u),this.handleVideoError()})}createAtmosphere(){const e=new an(2.08,64,64),t=new Sn({vertexShader:`
                varying vec3 vNormal;
                varying vec3 vWorldPosition;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform vec3 cameraPosition;
                varying vec3 vNormal;
                varying vec3 vWorldPosition;
                
                void main() {
                    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
                    float fresnel = 1.0 - abs(dot(viewDirection, vNormal));
                    
                    float distance = length(cameraPosition - vWorldPosition);
                    float attenuation = 1.0 / (1.0 + distance * 0.05);
                    
                    vec3 atmosphereColor = vec3(0.3, 0.6, 1.0);
                    
                    float intensity = pow(fresnel, 1.5) * attenuation;
                    
                    gl_FragColor = vec4(atmosphereColor, intensity * 0.3);
                }
            `,uniforms:{cameraPosition:{value:new U}},blending:ys,side:wt,transparent:!0}),n=new ht(e,t);this.scene.add(n),this.atmosphere=n,this.updateAtmosphereUniforms=()=>{this.atmosphere&&this.atmosphere.material.uniforms&&this.atmosphere.material.uniforms.cameraPosition.value.copy(this.camera.position)}}createSkybox(){new Ta().load("/public/images/night-sky.png",n=>{this.renderer.toneMapping=Nc,this.renderer.toneMappingExposure=.3;const i=new iu(n.image.height);i.fromEquirectangularTexture(this.renderer,n),this.scene.background=i.texture,this.scene.fog=new As(17,8e-5)},void 0,n=>{console.error("Erreur lors du chargement de la texture du ciel:",n),this.scene.background=new Ne(17)})}updateCameraPosition(){if(!this.orbitParams.isOrbiting)return;const e=this.orbitParams.ellipseMajorAxis*this.orbitParams.zoomLevel,t=this.orbitParams.ellipseMinorAxis*this.orbitParams.zoomLevel;let n=e*Math.cos(this.orbitParams.orbitAngle),i=t*Math.sin(this.orbitParams.orbitAngle);const s=this.orbitParams.inclination,a=i*Math.sin(s);i=i*Math.cos(s),this.camera.position.set(n,a,i),this.camera.lookAt(0,0,0),this.cameraMarker&&this.cameraMarker.position.set(n,a,i),this.orbitParams.orbitAngle+=this.orbitParams.currentSpeed,this.orbitParams.orbitHistory.push(new U(n,a,i)),this.orbitParams.orbitHistory.length>100&&this.orbitParams.orbitHistory.shift()}_updateCameraPositionManual(){const e=this.orbitParams.ellipseMajorAxis*this.orbitParams.zoomLevel,t=this.orbitParams.ellipseMinorAxis*this.orbitParams.zoomLevel;let n=e*Math.cos(this.orbitParams.orbitAngle),i=t*Math.sin(this.orbitParams.orbitAngle);const s=this.orbitParams.inclination,a=i*Math.sin(s);i=i*Math.cos(s),this.camera.position.set(n,a,i),this.camera.lookAt(0,0,0),this.cameraMarker&&this.cameraMarker.position.copy(this.camera.position)}addHotspots(e){this.hotspotObjects.forEach(t=>{this.scene.remove(t),t.userData.labelContainer&&document.body.removeChild(t.userData.labelContainer)}),this.hotspotObjects=[],e.forEach(t=>{const{position:n,title:i}=t,s=n.lat*(Math.PI/180),a=n.lng*(Math.PI/180),o=2.1,l=o*Math.cos(s)*Math.cos(a),c=o*Math.sin(s),u=o*Math.cos(s)*Math.sin(a);console.log(`Hotspot ${i}: GPS(${n.lat}, ${n.lng}) -> 3D(${l.toFixed(2)}, ${c.toFixed(2)}, ${u.toFixed(2)})`);const h=new an(.05,16,16),d=new Dn({color:16763904,transparent:!0,opacity:.8}),m=new ht(h,d);m.position.set(l,c,u),m.userData={hotspot:t};const _=new an(.08,16,16),g=new Dn({color:16763904,transparent:!0,opacity:.5,side:wt}),f=new ht(_,g);m.add(f),this.addHotspotLabel(m,i,new U(l,c,u)),this.scene.add(m),this.hotspotObjects.push(m)})}addHotspotLabel(e,t,n){const i=document.createElement("div");i.className="hotspot-label-container",i.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 10;
        `;const s=document.createElement("div");s.className="hotspot-label",s.textContent=t,s.style.cssText=`
            position: absolute;
            background-color: rgba(0, 0, 0, 0.7);
            color: #ffcc00;
            padding: 5px 10px;
            border-radius: 4px;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s ease;
            border: 1px solid rgba(255, 204, 0, 0.7);
            z-index: 11;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
            text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
        `;const a=document.createElement("div");a.className="connector-line",a.style.cssText=`
            position: absolute;
            background: linear-gradient(to right, rgba(255, 204, 0, 0.9), rgba(255, 204, 0, 0.3));
            height: 1.5px;
            transform-origin: 0 0;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 10;
            box-shadow: 0 0 4px rgba(255, 204, 0, 0.5);
        `,i.appendChild(s),i.appendChild(a),document.body.appendChild(i),e.userData.label=s,e.userData.connector=a,e.userData.labelContainer=i,e.userData.worldPosition=n.clone();const o=l=>{const c=new U().copy(l).project(this.camera);if(c.z>1||c.x<-1||c.x>1||c.y<-1||c.y>1)return!1;const u=new U().subVectors(l,this.camera.position).normalize(),d=new hc(this.camera.position,u).intersectObject(this.globe);if(d.length>0){const m=d[0].distance,_=this.camera.position.distanceTo(l);return m>_-.1}return!0};e.onBeforeRender=()=>{if(!e.userData.label||!e.userData.connector)return;if(o(e.userData.worldPosition)&&!this.orbitParams.inHotspotMode){const c=e.userData.worldPosition.clone();c.project(this.camera);const u=(c.x*.5+.5)*window.innerWidth,h=(-c.y*.5+.5)*window.innerHeight,d=window.innerWidth/2,m=window.innerHeight/2,_=Math.sqrt(Math.pow(u-d,2)+Math.pow(h-m,2)),g=Math.atan2(h-m,u-d),f=Math.min(d,m)*.6;let p,S;if(_<f){const A=f+60+Math.sin(g*5)*20;p=d+Math.cos(g)*A,S=m+Math.sin(g)*A;const w=20;p<w&&(p=w),p>window.innerWidth-w&&(p=window.innerWidth-w),S<w&&(S=w),S>window.innerHeight-w&&(S=window.innerHeight-w)}else{const A=t.length*8,w=25+A*.25,T=10;u+w+A>window.innerWidth-20?p=u-w-A:p=u+w,h-T-30<20?S=h+T:S=h-T}e.userData.label.style.left=`${p}px`,e.userData.label.style.top=`${S}px`,e.userData.label.style.opacity="1",a.style.left=`${u}px`,a.style.top=`${h}px`;const v=Math.sqrt(Math.pow(p-u,2)+Math.pow(S-h,2)),E=Math.atan2(S-h,p-u);a.style.width=`${v}px`,a.style.transform=`rotate(${E}rad)`,a.style.opacity="1",a.style.animation="pulseConnector 2s infinite alternate"}else e.userData.label.style.opacity="0",a.style.opacity="0"}}onMouseClick(e){if(this.orbitParams.inHotspotMode)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObject(this.globe);if(t.length>0){const i=t[0].point,a=Math.acos(i.y/2),o=Math.atan2(i.z,i.x),l=90-a*180/Math.PI,c=o*180/Math.PI-180;console.log(`Clic sur le globe à lat: ${l.toFixed(2)}, lng: ${c.toFixed(2)}`);const u=this._findNearestHotspot(l,c,10);if(u){console.log(`Hotspot trouvé: ${u.title}`),this.activateHotspot(u);return}}const n=this.raycaster.intersectObjects(this.hotspotObjects);if(n.length>0){const i=n[0].object.userData.hotspot;console.log(`Hotspot sélectionné par raycasting: ${i.title}`),this.activateHotspot(i)}}_findNearestHotspot(e,t,n){let i=null,s=n;const a=this.hotspotObjects.map(o=>o.userData.hotspot).filter(Boolean);for(const o of a){const l=o.position.lat,c=o.position.lng,u=Math.sqrt(Math.pow(l-e,2)+Math.pow(c-t,2));u<s&&(s=u,i=o)}return i}activateHotspot(e){if(this.orbitParams.inHotspotMode)return;console.log(`=== ACTIVATION HOTSPOT: ${e.title} ===`);const t=e.position.lat*(Math.PI/180),n=e.position.lng*(Math.PI/180),i=2.1,s=i*Math.cos(t)*Math.cos(n),a=i*Math.sin(t),o=i*Math.cos(t)*Math.sin(n),l=new U(s,a,o);this.createScanEffect(e.position),this.orbitParams.isOrbiting=!1;const h=l.clone().normalize().multiplyScalar(3.5);ae.to(this.camera.position,{x:h.x,y:h.y,z:h.z,duration:1.5,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(0,0,0)},onComplete:()=>{this.orbitParams.inHotspotMode=!0,this._redirectToExternalPage(e)}}),ae.to(this.camera,{fov:40,duration:1.5,ease:"power2.inOut",onUpdate:()=>{this.camera.updateProjectionMatrix()}})}_redirectToExternalPage(e){console.log("=== REDIRECTION VERS PAGE EXTERNE ===");const t=document.createElement("div");t.style.cssText=`
           position: fixed;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           background-color: rgba(0, 0, 0, 0);
           z-index: 9999;
           pointer-events: none;
       `,document.body.appendChild(t),ae.to(t,{backgroundColor:"rgba(0, 0, 0, 1)",duration:1,ease:"power2.inOut",onComplete:()=>{const i={"grande-barriere":"https://page-collection-les-ombres-de-la-mer.vercel.app/",abysses:"https://page-collection-les-ombres-de-la-mer.vercel.app/",arctique:"https://page-collection-les-ombres-de-la-mer.vercel.app/",plastique:"https://page-collection-les-ombres-de-la-mer.vercel.app/","triangle-corail":"https://page-collection-les-ombres-de-la-mer.vercel.app/",requins:"https://page-collection-les-ombres-de-la-mer.vercel.app/"}[e.id]||"https://example.com/default";console.log(`Redirection vers: ${i}`),window.location.href=i}})}createScanEffect(e){const t=(90-e.lat)*(Math.PI/180),n=(e.lng+180)*(Math.PI/180),i=-(2.1*Math.sin(t)*Math.cos(n)),s=2.1*Math.cos(t),a=2.1*Math.sin(t)*Math.sin(n),o=new ho(0,.3,32),l=new Sn({uniforms:{color:{value:new Ne(16763904)},time:{value:0}},vertexShader:`
               varying vec2 vUv;
               void main() {
                   vUv = uv;
                   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
               }
           `,fragmentShader:`
               uniform vec3 color;
               uniform float time;
               varying vec2 vUv;
               
               void main() {
                   float distance = length(vUv - vec2(0.5, 0.5)) * 2.0;
                   float alpha = smoothstep(0.8, 1.0, distance) * 0.8;
                   
                   alpha *= (sin(time * 10.0) * 0.2 + 0.8);
                   
                   gl_FragColor = vec4(color, alpha);
               }
           `,side:pn,transparent:!0,blending:ys,depthWrite:!1}),c=new ht(o,l);c.position.set(i,s,a),c.lookAt(0,0,0),this.scene.add(c);let u=performance.now();const h=()=>{const d=(performance.now()-u)/1e3;l.uniforms.time.value=d,d<2?requestAnimationFrame(h):(this.scene.remove(c),c.geometry.dispose(),l.dispose())};h(),ae.to(c.scale,{x:4,y:4,z:1,duration:2,ease:"power1.out"}),ae.to(l.uniforms.color.value,{r:1,g:.8,b:.2,duration:2,ease:"power1.out"})}exitHotspotMode(){this.orbitParams.inHotspotMode&&(console.log("Sortie du mode hotspot"),this.orbitParams.inHotspotMode=!1,ae.to(this.camera,{fov:60,duration:1,ease:"power2.out",onUpdate:()=>{this.camera.updateProjectionMatrix()}}),setTimeout(()=>{this.orbitParams.isOrbiting=!0,this.orbitParams.currentSpeed=this.orbitParams.baseSpeed},500))}exitHotspotModeExternal(){this.exitHotspotMode()}_handleVideoError(){console.log("Tentative de résolution de l'erreur vidéo..."),new Ta().load("/public/images/video-placeholder.jpg",t=>{this.globe&&this.globe.material&&(console.log("Application de la texture de secours"),this.globe.material.uniforms&&this.globe.material.uniforms.map?this.globe.material.uniforms.map.value=t:this.globe.material.map=t,this.globe.material.needsUpdate=!0)})}zoom(e){const t=e?.85:1.15,n=this.orbitParams.zoomLevel*t;this.orbitParams.zoomLevel=Math.min(Math.max(n,this.orbitParams.minZoomLevel),this.orbitParams.maxZoomLevel),ae.to(this.camera.position,{x:this.camera.position.x*t,y:this.camera.position.y*t,z:this.camera.position.z*t,duration:.5,ease:"back.out(1.2)",onUpdate:()=>{this.camera.lookAt(0,0,0)}})}resetView(){this.orbitParams.zoomLevel=1,this.orbitParams.currentSpeed=this.orbitParams.baseSpeed;const e=this.orbitParams.ellipseMajorAxis,t=this.orbitParams.ellipseMinorAxis,n=this.orbitParams.inclination,i=this.orbitParams.orbitAngle,s=e*Math.cos(i),a=t*Math.sin(i),o=a*Math.sin(n),l=a*Math.cos(n);ae.to(this.camera.position,{x:s,y:o,z:l,duration:1,ease:"elastic.out(1, 0.7)",onUpdate:()=>{this.camera.lookAt(0,0,0)}})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setHotspotSelectCallback(e){this.onHotspotSelect=e}setHotspotExitCallback(e){this.onHotspotExit=e}animate(){requestAnimationFrame(this.animate.bind(this)),this.clock.getDelta();const e=this.clock.getElapsedTime()*1e3;this.orbitParams.isOrbiting&&!this.orbitParams.inHotspotMode&&this.updateCameraPosition(),this.updateSkyboxTime&&this.updateSkyboxTime(e),this.hotspotObjects.forEach(t=>{if(t.children.length>0){const n=t.children[0],i=1+.2*Math.sin(e*.003);n.scale.set(i,i,i)}t.userData.label&&t.userData.worldPosition&&t.onBeforeRender()}),this.clouds&&(this.clouds.rotation.y+=1e-4),this.globe&&!this.orbitParams.inHotspotMode&&(this.globe.rotation.y+=2e-4),this.globe&&this.globe.material.uniforms&&this.globe.material.uniforms.time&&(this.globe.material.uniforms.time.value=e),this.videoElement&&this.videoElement.paused&&!this.videoElement.ended&&this.videoElement.play().catch(t=>{console.error("Erreur lors de la reprise de la vidéo:",t)}),this.renderer.render(this.scene,this.camera)}}class rv{constructor(e){this.container=e.container,this.effectsContainer=null,this.notificationContainer=null,this.init()}init(){this.effectsContainer=document.createElement("div"),this.effectsContainer.classList.add("effects-container"),this.effectsContainer.style.position="absolute",this.effectsContainer.style.top="0",this.effectsContainer.style.left="0",this.effectsContainer.style.width="100%",this.effectsContainer.style.height="100%",this.effectsContainer.style.pointerEvents="none",this.effectsContainer.style.zIndex="5",this.container.appendChild(this.effectsContainer),this.createNotificationContainer()}createNotificationContainer(){this.notificationContainer=document.createElement("div"),this.notificationContainer.className="notification-container",this.notificationContainer.style.cssText=`
            position: absolute;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            z-index: 100;
            pointer-events: none;
            max-width: 400px;
        `,this.container.appendChild(this.notificationContainer)}transitionIn(){const e=document.createElement("div");e.classList.add("transition-overlay"),e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="#000000",e.style.zIndex="10",this.effectsContainer.appendChild(e),ae.fromTo(e,{opacity:1},{opacity:0,duration:1.5,ease:"power2.out",onComplete:()=>{e.remove()}})}transitionOut(e){const t=document.createElement("div");t.classList.add("transition-overlay"),t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.backgroundColor="#000000",t.style.zIndex="10",t.style.opacity="0",this.effectsContainer.appendChild(t),ae.to(t,{opacity:1,duration:1,ease:"power2.in",onComplete:()=>{e&&e()}})}createOrbitalLoaderEffect(e,t=4){const n=document.createElement("div");n.className="orbital-loader",n.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 50;
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
        `;const i=document.createElement("div");i.style.cssText=`
            width: 200px;
            height: 200px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        `;for(let l=0;l<3;l++){const c=document.createElement("div");c.style.cssText=`
                position: absolute;
                border-radius: 50%;
                border: 2px solid rgba(255, 204, 0, ${.7-l*.2});
                width: ${120+l*40}px;
                height: ${120+l*40}px;
                animation: orbit${l} ${4-l*.5}s linear infinite;
            `;for(let u=0;u<3+l;u++){const h=document.createElement("div"),d=360/(3+l)*u;h.style.cssText=`
                    position: absolute;
                    width: ${8-l}px;
                    height: ${8-l}px;
                    background-color: #ffcc00;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    box-shadow: 0 0 10px #ffcc00;
                    transform: translate(-50%, -50%) rotate(${d}deg) translateX(${60+l*20}px);
                `,c.appendChild(h)}i.appendChild(c)}const s=document.createElement("div");s.style.cssText=`
            width: 20px;
            height: 20px;
            background-color: #ffcc00;
            border-radius: 50%;
            box-shadow: 0 0 20px #ffcc00;
            animation: pulse 2s ease-in-out infinite;
        `,i.appendChild(s);const a=document.createElement("div");a.style.cssText=`
            position: absolute;
            bottom: 30%;
            text-align: center;
            color: #ffcc00;
            font-family: 'Roboto Mono', monospace;
            font-size: 16px;
            letter-spacing: 2px;
        `,a.textContent="INITIALISATION DU SYSTÈME...",n.appendChild(i),n.appendChild(a);const o=document.createElement("style");o.textContent=`
            @keyframes orbit0 {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes orbit1 {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(-360deg); }
            }
            @keyframes orbit2 {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.3); opacity: 0.7; }
            }
        `,document.head.appendChild(o),this.effectsContainer.appendChild(n),ae.fromTo(n,{opacity:0},{opacity:1,duration:.5}),setTimeout(()=>{ae.to(n,{opacity:0,duration:.5,onComplete:()=>{n.remove(),o.remove(),e&&e()}})},t*1e3)}highlightSelection(e){const t=document.createElement("div");t.classList.add("highlight-effect"),t.style.position="absolute",t.style.width="100px",t.style.height="100px",t.style.borderRadius="50%",t.style.border="2px solid #ffcc00",t.style.boxShadow="0 0 20px rgba(255, 204, 0, 0.5)",t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="none",t.style.top="50%",t.style.left="50%",this.effectsContainer.appendChild(t),ae.fromTo(t,{scale:.5,opacity:0},{scale:1.5,opacity:.8,duration:.8,ease:"elastic.out(1, 0.3)",onComplete:()=>{ae.to(t,{scale:2,opacity:0,duration:.5,delay:.3,onComplete:()=>{t.remove()}})}})}createRadarScanEffect(e,t={}){const i={...{radius:50,duration:1,color:"rgba(255, 204, 0, 0.4)",pulseCount:1},...t};for(let s=0;s<i.pulseCount;s++)setTimeout(()=>{const a=document.createElement("div");a.style.cssText=`
                    position: absolute;
                    top: ${e.y}px;
                    left: ${e.x}px;
                    width: 10px;
                    height: 10px;
                    background-color: transparent;
                    border: 2px solid ${i.color};
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 100;
                    pointer-events: none;
                `,this.effectsContainer.appendChild(a),ae.to(a,{width:i.radius*2,height:i.radius*2,opacity:0,duration:i.duration,ease:"power2.out",onComplete:()=>{a.remove()}})},s*(i.duration*300))}flashScreen(e="#ffffff"){const t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.backgroundColor=e,t.style.pointerEvents="none",t.style.zIndex="20",t.style.opacity="0",this.effectsContainer.appendChild(t),ae.timeline().to(t,{opacity:.7,duration:.1}).to(t,{opacity:0,duration:.3,onComplete:()=>{t.remove()}})}showNotification(e,t="info",n=3e3){this.notificationContainer||this.createNotificationContainer();const i=document.createElement("div");i.className="notification";let s="",a="#2196F3";switch(t){case"success":s="✓",a="#4CAF50";break;case"warning":s="!",a="#FF9800";break;case"error":s="✗",a="#F44336";break;default:s="i",a="#2196F3"}i.innerHTML=`
            <div class="notification-icon" style="background-color: ${a};">${s}</div>
            <div class="notification-message">${e}</div>
        `,i.style.cssText=`
            display: flex;
            align-items: center;
            gap: 12px;
            background-color: rgba(0, 10, 30, 0.85);
            color: #ffffff;
            padding: 12px 16px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            font-family: 'Roboto Mono', monospace;
            font-size: 14px;
            max-width: 100%;
            pointer-events: all;
            transform: translateX(50px);
            opacity: 0;
            border-left: 3px solid ${a};
            backdrop-filter: blur(5px);
        `;const o=i.querySelector(".notification-icon");o&&(o.style.cssText=`
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                color: white;
                font-weight: bold;
                flex-shrink: 0;
            `);const l=i.querySelector(".notification-message");l&&(l.style.cssText=`
                flex: 1;
                line-height: 1.4;
            `),this.notificationContainer.appendChild(i),ae.fromTo(i,{opacity:0,x:50},{opacity:1,x:0,duration:.4,ease:"power2.out"}),setTimeout(()=>{ae.to(i,{opacity:0,x:50,duration:.4,ease:"power2.in",onComplete:()=>{i.remove()}})},n)}showSystemMessage(e){const t=document.createElement("div");t.className="system-message",t.textContent=e,t.style.cssText=`
            position: absolute;
            bottom: 20px;
            right: 20px;
            background-color: rgba(0, 10, 30, 0.8);
            color: #ffffff;
            padding: 10px 15px;
            border-radius: 6px;
            border-left: 3px solid #ffcc00;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            max-width: 400px;
            text-align: left;
            transform: translateY(20px);
            opacity: 0;
            z-index: 100;
            pointer-events: none;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(3px);
        `,this.effectsContainer.appendChild(t),ae.timeline().to(t,{y:0,opacity:1,duration:.5,ease:"power2.out"}).to(t,{y:-10,opacity:0,duration:.5,delay:3,ease:"power2.in",onComplete:()=>{t.remove()}})}addBackgroundParticles(e={}){const n={...{count:50,container:this.container},...e},i=document.createElement("div");i.className="background-particles",i.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
        `;for(let s=0;s<n.count;s++){const a=document.createElement("div"),o=Math.random()*3+1,l=Math.random()*100,c=Math.random()*100,u=Math.random()*5,h=Math.random()*10+10,d=Math.random()*.5+.1;a.style.cssText=`
                position: absolute;
                width: ${o}px;
                height: ${o}px;
                background-color: rgba(255, 255, 255, ${d});
                border-radius: 50%;
                top: ${c}%;
                left: ${l}%;
                box-shadow: 0 0 ${o*2}px rgba(255, 255, 255, ${d*.8});
            `,ae.to(a,{y:`${Math.random()*20-10}%`,x:`${Math.random()*20-10}%`,opacity:Math.random()*.5+.1,duration:h,delay:u,repeat:-1,yoyo:!0,ease:"sine.inOut"}),i.appendChild(a)}n.container.appendChild(i)}}class sv{constructor(e){this.globeManager=e.globeManager,this.visualEffects=e.visualEffects,this.isDragging=!1,this.lastTouchTime=0,this.touchTimeout=null,this.mouseStartY=0,this.mouseStartX=0,this.scrollAmount=0,this.lastPosition={x:0,y:0},this.scrollTimerId=null,this.scrollSpeed=0,this.lastScrollTime=0,this.scrollAccumulator=0,this.inertiaEnabled=!0,this.velocityX=0,this.velocityY=0,this.inertiaAnimationId=null,this.zoomInertia=0,this.initialDistance=0,this.currentDistance=0,this.isPinching=!1,this.movementThreshold=5,this.swipeThreshold=80,this.hasMoved=!1,this.interfaceVisible=!0,this.autoHideTimeout=null,this.init()}init(){this.globeManager.container.addEventListener("wheel",this.handleMouseWheel.bind(this),{passive:!1}),document.addEventListener("keydown",this.handleKeyDown.bind(this)),document.addEventListener("mousemove",this.resetInterfaceAutoHide.bind(this)),this.startInterfaceAutoHide(),console.log("=== INTERACTIONS INITIALISÉES ==="),console.log("- Scroll: Activé (contrôle vitesse orbite)"),console.log("- Clic: Activé (sélection hotspots)"),console.log("- Glissement: DÉSACTIVÉ"),console.log("- Touch: DÉSACTIVÉ")}handleTouchMove(e){if(this.isDragging){if(e.preventDefault(),this.globeManager.orbitParams.inHotspotMode&&e.touches.length===1){const t=e.touches[0].clientY,n=t-this.mouseStartY;this.scrollAmount+=n,this.scrollAmount>150&&(this.globeManager.exitHotspotModeExternal(),this.scrollAmount=0),this.mouseStartY=t}else if(e.touches.length===1){const t=e.touches[0].clientX,n=e.touches[0].clientY,i=t-this.lastPosition.x,s=n-this.lastPosition.y;(Math.abs(i)>this.movementThreshold||Math.abs(s)>this.movementThreshold)&&(this.hasMoved=!0),this.velocityX=.8*this.velocityX+.2*i,this.velocityY=.8*this.velocityY+.2*s,this.globeManager.orbitParams.orbitAngle-=i*.005,this.lastPosition={x:t,y:n},typeof this.globeManager._updateCameraPositionManual=="function"&&this.globeManager._updateCameraPositionManual()}}}handleMouseWheel(e){if(e.preventDefault(),this.showInterface(),this.resetInterfaceAutoHide(),this.globeManager.orbitParams.inHotspotMode){const o=e.deltaY<0;this.globeManager.zoom(o);return}const t=Date.now(),n=t-this.lastScrollTime;if(this.lastScrollTime=t,this.scrollAccumulator+=e.deltaY,n<50&&this.scrollTimerId)return;this.scrollTimerId&&clearTimeout(this.scrollTimerId);const i=Math.sign(this.scrollAccumulator),s=Math.min(Math.abs(this.scrollAccumulator)/100,2),a=this.globeManager.orbitParams.currentSpeed;i>0?(this.globeManager.orbitParams.currentSpeed=Math.max(this.globeManager.orbitParams.baseSpeed*.5,this.globeManager.orbitParams.currentSpeed*Math.pow(this.globeManager.orbitParams.decelerationFactor,s)),this.visualEffects&&Math.abs(a-this.globeManager.orbitParams.currentSpeed)>1e-4):(this.globeManager.orbitParams.currentSpeed=Math.min(this.globeManager.orbitParams.maxSpeed,this.globeManager.orbitParams.currentSpeed*Math.pow(this.globeManager.orbitParams.accelerationFactor,s)),this.visualEffects&&Math.abs(a-this.globeManager.orbitParams.currentSpeed)>1e-4),this.scrollAccumulator=0,this.scrollTimerId=setTimeout(()=>{ae.to(this.globeManager.orbitParams,{currentSpeed:this.globeManager.orbitParams.baseSpeed,duration:3,ease:"power2.out",onComplete:()=>{this.visualEffects&&this.visualEffects.showNotification("Vitesse d'orbite normalisée","info",1e3)}}),this.scrollTimerId=null},3e3)}handleKeyDown(e){switch(this.showInterface(),this.resetInterfaceAutoHide(),e.key){case"Escape":this.globeManager.orbitParams.inHotspotMode&&(this.globeManager.exitHotspotModeExternal(),this.visualEffects&&(this.visualEffects.flashScreen("rgba(0, 0, 0, 0.4)"),this.visualEffects.showNotification("Retour à l'exploration globale","info",2e3)));break;case"Enter":if(!this.globeManager.orbitParams.inHotspotMode){const t=window.innerWidth/2,n=window.innerHeight/2,i={clientX:t,clientY:n,preventDefault:()=>{}};this.globeManager.onMouseClick(i)}break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":e.preventDefault(),this.globeManager.orbitParams.inHotspotMode&&e.key==="ArrowDown"?(this.globeManager.exitHotspotModeExternal(),this.visualEffects&&(this.visualEffects.flashScreen("rgba(0, 0, 0, 0.4)"),this.visualEffects.showNotification("Retour à l'exploration globale","info",2e3))):this.handleArrowNavigation(e.key);break;case"+":case"=":this.globeManager.zoom(!0);break;case"-":case"_":this.globeManager.zoom(!1);break;case"r":case"R":this.globeManager.resetView(),this.visualEffects&&(this.visualEffects.flashScreen("rgba(255, 255, 255, 0.2)"),this.visualEffects.showNotification("Vue réinitialisée","info",2e3));break;case"h":case"H":this.toggleInterface();break}}handleArrowNavigation(e){try{const t=this.globeManager.orbitParams.orbitAngle,n=this.globeManager.orbitParams.isOrbiting;switch(this.globeManager.orbitParams.isOrbiting=!1,e){case"ArrowLeft":this.globeManager.orbitParams.orbitAngle+=.05;break;case"ArrowRight":this.globeManager.orbitParams.orbitAngle-=.05;break;case"ArrowUp":if(!this.globeManager.orbitParams.inHotspotMode){const i=this.globeManager.orbitParams.inclination;this.globeManager.orbitParams.inclination=Math.min(i+.03,Math.PI/3)}break;case"ArrowDown":if(!this.globeManager.orbitParams.inHotspotMode){const i=this.globeManager.orbitParams.inclination;this.globeManager.orbitParams.inclination=Math.max(i-.03,.1)}break}typeof this.globeManager._updateCameraPositionManual=="function"&&this.globeManager._updateCameraPositionManual(),setTimeout(()=>{this.globeManager.orbitParams.isOrbiting=n},500)}catch(t){console.error("Erreur lors de la navigation par flèches:",t),this.globeManager&&this.globeManager.orbitParams&&(this.globeManager.orbitParams.orbitAngle=backupAngle,this.globeManager.orbitParams.isOrbiting=!0)}}startInterfaceAutoHide(){this.autoHideTimeout&&clearTimeout(this.autoHideTimeout),this.autoHideTimeout=setTimeout(()=>{this.hideInterface()},1e4)}resetInterfaceAutoHide(){this.showInterface(),this.startInterfaceAutoHide()}hideInterface(){if(!this.interfaceVisible)return;this.interfaceVisible=!1;const e=document.getElementById("ui-controls"),t=document.querySelectorAll(".satellite-hud, .coordinates-display"),n=document.querySelector(".satellite-crosshair");ae.to(e,{opacity:0,y:20,duration:.5,ease:"power2.inOut"}),ae.to([...t,n],{opacity:0,duration:.5,ease:"power2.inOut"}),setTimeout(()=>{this.interfaceVisible||(e.style.pointerEvents="none")},500)}showInterface(){if(this.interfaceVisible)return;this.interfaceVisible=!0;const e=document.getElementById("ui-controls"),t=document.querySelectorAll(".satellite-hud, .coordinates-display"),n=document.querySelector(".satellite-crosshair");e.style.pointerEvents="auto",ae.to(e,{opacity:1,y:0,duration:.5,ease:"power2.out"}),ae.to([...t,n],{opacity:1,duration:.5,ease:"power2.out"})}toggleInterface(){this.interfaceVisible?this.hideInterface():(this.showInterface(),this.startInterfaceAutoHide())}}class av{constructor(e){this.options=e,this.zoomInBtn=e.zoomInBtn,this.zoomOutBtn=e.zoomOutBtn,this.resetViewBtn=e.resetViewBtn,this.infoBtn=e.infoBtn,this.closeInfoBtn=e.closeInfoBtn,this.infoOverlay=e.infoOverlay,this.globeManager=e.globeManager,this.isInfoVisible=!1,this.buttons=[],this.notificationContainer=null,this.init()}init(){this.applyEnhancedStyles(),this.buttons=[this.zoomInBtn,this.zoomOutBtn,this.resetViewBtn,this.infoBtn],this.zoomInBtn.addEventListener("click",()=>{this.globeManager.zoom(!0),this.animateButtonClick(this.zoomInBtn)}),this.zoomOutBtn.addEventListener("click",()=>{this.globeManager.zoom(!1),this.animateButtonClick(this.zoomOutBtn)}),this.resetViewBtn.addEventListener("click",()=>{this.globeManager.resetView(),this.animateButtonClick(this.resetViewBtn)}),this.infoBtn.addEventListener("click",()=>{this.toggleInfoOverlay(),this.animateButtonClick(this.infoBtn)}),this.closeInfoBtn.addEventListener("click",()=>{this.hideInfoOverlay()}),this.createNotificationContainer(),this.animateButtonsIn()}applyEnhancedStyles(){const e=document.getElementById("ui-controls");e&&(e.style.cssText=`
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 50;
                transition: opacity 0.3s ease, transform 0.3s ease;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
            `);const t=document.getElementById("navigation-controls");if(t&&(t.style.cssText=`
				display: flex;
				flex-direction: column;
				gap: 20px; /* espace plus large entre les boutons */
				background: none;
				padding: 0;
				border: none;
				box-shadow: none;
`),(t?t.querySelectorAll("button"):[]).forEach(i=>{i.style.cssText=`
                width: 70px;
                height: 70px;
                border: 2px solid rgba(255, 204, 0, 0.7);              
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: 'Roboto Mono', monospace;
                letter-spacing: 1px;
                font-size: 23px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0), 0 0 4px rgba(255, 204, 0, 0.4);
            `,i.addEventListener("mouseenter",()=>{ae.to(i,{backgroundColor:"rgba(255, 204, 0, 0.9)",color:"#000000",borderColor:"#ffcc00",boxShadow:"0 2px 15px rgba(255, 204, 0, 0.5), 0 0 8px rgba(255, 204, 0, 0.7)",duration:.25})}),i.addEventListener("mouseleave",()=>{ae.to(i,{backgroundColor:"rgba(0, 10, 30, 0.7)",color:"#ffcc00",borderColor:"rgba(255, 204, 0, 0.7)",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.3), 0 0 4px rgba(255, 204, 0, 0.4)",duration:.3})})}),this.infoBtn&&(this.infoBtn.style.cssText=`
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: rgba(0, 10, 30, 0.7);
                color: #ffcc00;
                border: 2px solid rgba(255, 204, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: 'Roboto Mono', monospace;
                font-size: 18px;
                font-weight: bold;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 4px rgba(255, 204, 0, 0.4);
            `,this.infoBtn.addEventListener("mouseenter",()=>{ae.to(this.infoBtn,{backgroundColor:"rgba(255, 204, 0, 0.9)",color:"#000000",borderColor:"#ffcc00",boxShadow:"0 2px 15px rgba(255, 204, 0, 0.5), 0 0 8px rgba(255, 204, 0, 0.7)",duration:.3})}),this.infoBtn.addEventListener("mouseleave",()=>{ae.to(this.infoBtn,{backgroundColor:"rgba(0, 10, 30, 0.7)",color:"#ffcc00",borderColor:"rgba(255, 204, 0, 0.7)",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.3), 0 0 4px rgba(255, 204, 0, 0.4)",duration:.3})})),this.infoOverlay){this.infoOverlay.style.cssText=`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(10px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 200;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.5s ease;
            `;const i=this.infoOverlay.querySelector(".overlay-content");if(i){i.style.cssText=`
                    background: linear-gradient(to bottom, rgba(0, 40, 94, 0.9), rgba(0, 20, 47, 0.9));
                    padding: 40px;
                    border-radius: 10px;
                    max-width: 700px;
                    text-align: center;
                    position: relative;
                    border: 1px solid var(--nat-geo-yellow);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 204, 0, 0.3);
                `;const s=i.querySelector("h3");if(s&&(s.style.cssText=`
                        font-size: 2rem;
                        margin-bottom: 30px;
                        color: #ffcc00;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        font-family: 'Roboto Mono', monospace;
                        font-weight: 700;
                        text-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
                    `),i.querySelectorAll("p").forEach(o=>{o.style.cssText=`
                        margin-bottom: 25px;
                        line-height: 1.8;
                        color: #e0e0e0;
                        font-size: 1.1rem;
                        font-family: 'Merriweather Sans', 'Source Sans Pro', sans-serif;
                        text-align: justify;
                    `}),this.closeInfoBtn){this.closeInfoBtn.style.cssText=`
                        padding: 12px 32px;
                        background-color: transparent;
                        color: #ffcc00;
                        border: 2px solid #ffcc00;
                        border-radius: 30px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        font-family: 'Roboto Mono', monospace;
                        letter-spacing: 1px;
                        position: relative;
                        overflow: hidden;
                        z-index: 1;
                        font-size: 16px;
                    `;const o=document.createElement("style");o.textContent=`
                        #close-info::before {
                            content: "";
                            position: absolute;
                            left: -100%;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            background-color: #ffcc00;
                            transition: all 0.3s ease;
                            z-index: -1;
                        }
                        
                        #close-info:hover {
                            color: #000000;
                            box-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
                        }
                        
                        #close-info:hover::before {
                            left: 0;
                        }
                    `,document.head.appendChild(o)}}}}createNotificationContainer(){this.notificationContainer=document.createElement("div"),this.notificationContainer.className="notifications-container",this.notificationContainer.style.cssText=`
            position: absolute;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            z-index: 100;
            pointer-events: none;
            max-width: 400px;
        `,document.getElementById("main-container").appendChild(this.notificationContainer)}animateButtonsIn(){this.buttons.forEach(e=>{ae.set(e,{opacity:0,y:20,scale:.8})}),this.buttons.forEach((e,t)=>{ae.to(e,{opacity:1,y:0,scale:1,duration:.7,delay:1.5+t*.15,ease:"back.out(1.7)"})})}animateButtonClick(e){ae.timeline().to(e,{scale:.85,duration:.15,ease:"power2.in"}).to(e,{scale:1,duration:.4,ease:"elastic.out(1.2, 0.5)"})}toggleInfoOverlay(){this.isInfoVisible?this.hideInfoOverlay():this.showInfoOverlay()}showInfoOverlay(){if(this.isInfoVisible)return;this.isInfoVisible=!0,this.infoOverlay.classList.add("visible"),ae.to(this.infoOverlay,{opacity:1,duration:.4,ease:"power2.out",onStart:()=>{this.infoOverlay.style.pointerEvents="all"}});const e=this.infoOverlay.querySelector(".overlay-content");ae.fromTo(e,{opacity:0,y:30,scale:.95},{opacity:1,y:0,scale:1,duration:.6,delay:.1,ease:"back.out(1.7)"}),e.querySelectorAll("h3, p, button").forEach((n,i)=>{ae.fromTo(n,{opacity:0,y:20},{opacity:1,y:0,duration:.5,delay:.3+i*.1,ease:"power2.out"})})}hideInfoOverlay(){if(!this.isInfoVisible)return;this.isInfoVisible=!1;const e=this.infoOverlay.querySelector(".overlay-content");ae.to(e,{opacity:0,y:30,scale:.95,duration:.4,ease:"power3.in"}),ae.to(this.infoOverlay,{opacity:0,duration:.5,delay:.2,ease:"power2.in",onComplete:()=>{this.infoOverlay.classList.remove("visible"),this.infoOverlay.style.pointerEvents="none"}})}showNotification(e,t="info",n=3e3){const i=document.createElement("div");i.classList.add("notification",`notification-${t}`);let s="",a="#2196F3";switch(t){case"success":s="✓",a="#4CAF50";break;case"warning":s="!",a="#FF9800";break;case"error":s="✗",a="#F44336";break;default:s="i",a="#2196F3"}i.innerHTML=`
            <div class="notification-icon" style="background-color: ${a};">${s}</div>
            <div class="notification-message">${e}</div>
        `,i.style.cssText=`
            display: flex;
            align-items: center;
            gap: 12px;
            background-color: rgba(0, 10, 30, 0.85);
            color: #ffffff;
            padding: 12px 16px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            font-family: 'Roboto Mono', monospace;
            font-size: 14px;
            max-width: 100%;
            pointer-events: all;
            transform: translateX(50px);
            opacity: 0;
            border-left: 3px solid ${a};
            backdrop-filter: blur(5px);
        `;const o=`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            color: white;
            font-weight: bold;
            flex-shrink: 0;
        `;i.querySelector(".notification-icon").style.cssText=o,i.querySelector(".notification-message").style.cssText=`
            flex: 1;
            line-height: 1.4;
        `,this.notificationContainer.appendChild(i),ae.fromTo(i,{opacity:0,x:50},{opacity:1,x:0,duration:.4,ease:"power2.out"}),setTimeout(()=>{ae.to(i,{opacity:0,x:50,duration:.4,ease:"power2.in",onComplete:()=>{i.remove()}})},n)}setUIVisibility(e){const t=e?1:0,n=e?0:20,i=e?"auto":"none",s=document.getElementById("ui-controls");s&&ae.to(s,{opacity:t,y:n,duration:.4,ease:e?"power2.out":"power2.in",onComplete:()=>{s.style.pointerEvents=i}}),document.querySelectorAll(".satellite-hud, .coordinates-display").forEach(o=>{ae.to(o,{opacity:t,duration:.4,ease:e?"power2.out":"power2.in"})})}showTooltip(e,t,n={}){const s={...{position:"top",duration:3e3,offset:10,className:""},...n},a=document.createElement("div");a.className=`tooltip ${s.className}`,a.textContent=t,a.style.cssText=`
            position: absolute;
            background-color: rgba(0, 10, 30, 0.9);
            color: #ffffff;
            padding: 8px 12px;
            border-radius: 4px;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            pointer-events: none;
            z-index: 1000;
            white-space: nowrap;
            opacity: 0;
            transform: scale(0.9);
            border: 1px solid rgba(255, 204, 0, 0.5);
        `,document.body.appendChild(a);const o=e.getBoundingClientRect();switch(s.position){case"top":a.style.bottom=`${window.innerHeight-o.top+s.offset}px`,a.style.left=`${o.left+o.width/2}px`,a.style.transform="translateX(-50%) scale(0.9)";break;case"bottom":a.style.top=`${o.bottom+s.offset}px`,a.style.left=`${o.left+o.width/2}px`,a.style.transform="translateX(-50%) scale(0.9)";break;case"left":a.style.top=`${o.top+o.height/2}px`,a.style.right=`${window.innerWidth-o.left+s.offset}px`,a.style.transform="translateY(-50%) scale(0.9)";break;case"right":a.style.top=`${o.top+o.height/2}px`,a.style.left=`${o.right+s.offset}px`,a.style.transform="translateY(-50%) scale(0.9)";break}return ae.to(a,{opacity:1,scale:1,duration:.3,ease:"back.out(1.7)"}),setTimeout(()=>{ae.to(a,{opacity:0,scale:.9,duration:.2,ease:"power2.in",onComplete:()=>{a.remove()}})},s.duration),{hide:()=>{ae.to(a,{opacity:0,scale:.9,duration:.2,ease:"power2.in",onComplete:()=>{a.remove()}})}}}createMinimap(e,t){const n=document.createElement("div");n.className="minimap",n.style.cssText=`
            position: absolute;
            bottom: 30px;
            right: 30px;
            width: 200px;
            height: 100px;
            background-color: rgba(0, 10, 30, 0.7);
            border: 1px solid rgba(255, 204, 0, 0.5);
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 50;
        `;const i=document.createElement("div");i.style.cssText=`
            width: 100%;
            height: 100%;
            background-image: url('/public/images/map-outline.png');
            background-size: cover;
            background-position: center;
            opacity: 0.7;
        `,n.appendChild(i),[{id:"grande-barriere",x:150,y:70,name:"Grande Barrière"},{id:"abysses",x:50,y:60,name:"Abysses"},{id:"arctique",x:100,y:20,name:"Arctique"},{id:"plastique",x:80,y:50,name:"Pollution"},{id:"triangle-corail",x:130,y:60,name:"Triangle Corail"},{id:"requins",x:70,y:40,name:"Requins"}].forEach(l=>{const c=document.createElement("div");c.className="minimap-dot",c.dataset.id=l.id,c.title=l.name,c.style.cssText=`
                position: absolute;
                top: ${l.y}px;
                left: ${l.x}px;
                width: 6px;
                height: 6px;
                background-color: #ffcc00;
                border-radius: 50%;
                cursor: pointer;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 5px rgba(255, 204, 0, 0.7);
                transition: all 0.3s ease;
            `,c.addEventListener("mouseenter",()=>{ae.to(c,{width:10,height:10,boxShadow:"0 0 10px rgba(255, 204, 0, 0.9)",duration:.3}),this.showTooltip(c,l.name,{position:"top",duration:2e3})}),c.addEventListener("mouseleave",()=>{ae.to(c,{width:6,height:6,boxShadow:"0 0 5px rgba(255, 204, 0, 0.7)",duration:.3})}),c.addEventListener("click",()=>{t&&t(l.id)}),n.appendChild(c)});const a=document.createElement("div");a.className="minimap-toggle",a.innerHTML="−",a.style.cssText=`
            position: absolute;
            top: 5px;
            right: 5px;
            width: 20px;
            height: 20px;
            background-color: rgba(0, 0, 0, 0.5);
            color: #ffcc00;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            z-index: 1;
        `;let o=!1;return a.addEventListener("click",()=>{o?(ae.to(n,{height:100,duration:.3,ease:"power2.out"}),a.innerHTML="−"):(ae.to(n,{height:30,duration:.3,ease:"power2.out"}),a.innerHTML="+"),o=!o}),n.appendChild(a),e.appendChild(n),ae.fromTo(n,{y:50,opacity:0},{y:0,opacity:1,duration:.5,ease:"power2.out"}),{highlight:l=>{const c=n.querySelector(`.minimap-dot[data-id="${l}"]`);c&&ae.to(c,{width:12,height:12,backgroundColor:"#ffffff",boxShadow:"0 0 15px rgba(255, 255, 255, 0.9)",duration:.5,repeat:3,yoyo:!0})},hide:()=>{ae.to(n,{y:50,opacity:0,duration:.3,ease:"power2.in",onComplete:()=>{n.remove()}})},element:n}}}class ov{constructor(e){this.panel=e.panel,this.closeBtn=e.closeBtn,this.titleElement=e.titleElement,this.descriptionElement=e.descriptionElement,this.videoElement=e.videoElement,this.globeManager=e.globeManager,this.isVisible=!1,this.drawerToggle=null,this.drawer=null,this.drawerContent=null,this.isDrawerOpen=!1,this.panel&&this.closeBtn&&this.titleElement&&this.descriptionElement?this.init():(console.warn("ContentPanel: Éléments DOM manquants, panneau désactivé"),this.show=()=>{},this.hide=()=>{},this.update=()=>{})}init(){this.applyDesignSystem(),this.closeBtn&&this.closeBtn.addEventListener("click",()=>{this.hide(),this.globeManager.exitHotspotModeExternal()}),this.videoElement&&(this.videoElement.addEventListener("loadeddata",()=>{console.log("Vidéo chargée avec succès"),ae.fromTo(this.videoElement,{opacity:0},{opacity:1,duration:.8,ease:"power2.out"})}),this.videoElement.addEventListener("error",()=>{console.error("Erreur lors du chargement de la vidéo"),this.videoElement.style.display="none";const e=document.createElement("img");e.src="/public/images/video-placeholder.jpg",e.alt="Vidéo non disponible",e.style.width="100%",e.style.borderRadius="3px";const t=this.videoElement.parentElement;t&&t.appendChild(e)})),this.createDrawerElements()}applyDesignSystem(){if(!this.panel){console.warn("ContentPanel.panel n'existe pas");return}this.panel.style.cssText=`
            position: absolute;
            top: 5%;
            right: 5%;
            width: 380px;
            max-width: 33.33%; /* Règle du tiers */
            max-height: 90%;
            background-color: rgba(0, 0, 0, 0.85);
            border: 1px solid rgba(255, 204, 0, 0.7);
            border-radius: 5px;
            overflow: hidden;
            transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            transform: translateX(100%);
            z-index: 10;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 204, 0, 0.2);
        `;const e=this.panel.querySelector(".panel-header");if(e){e.style.cssText=`
                padding: 16px 20px;
                background: linear-gradient(to bottom, rgba(0, 30, 60, 0.9), rgba(0, 15, 30, 0.9));
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(255, 204, 0, 0.5);
                position: relative;
            `;const i=document.createElement("div");i.style.cssText=`
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background-color: #ffcc00;
            `,e.insertBefore(i,e.firstChild)}this.titleElement&&(this.titleElement.style.cssText=`
                margin: 0;
                font-size: 1.2rem;
                font-weight: 600;
                color: #ffcc00;
                letter-spacing: 1px;
                font-family: 'Roboto Mono', monospace;
                text-transform: uppercase;
                line-height: 1.3;
            `),this.closeBtn&&(this.closeBtn.style.cssText=`
                background: none;
                border: none;
                color: #ffffff;
                font-size: 1.5rem;
                cursor: pointer;
                opacity: 0.7;
                transition: all 0.3s ease;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            `,this.closeBtn.addEventListener("mouseenter",()=>{this.closeBtn.style.opacity="1",this.closeBtn.style.color="#ffcc00",this.closeBtn.style.backgroundColor="rgba(255, 255, 255, 0.1)"}),this.closeBtn.addEventListener("mouseleave",()=>{this.closeBtn.style.opacity="0.7",this.closeBtn.style.color="#ffffff",this.closeBtn.style.backgroundColor="transparent"}));const t=this.panel.querySelector(".panel-content");if(t){t.style.cssText=`
                padding: 20px;
                max-height: calc(90vh - 60px);
                overflow-y: auto;
                scrollbar-width: thin;
                scrollbar-color: rgba(255, 204, 0, 0.7) rgba(0, 0, 0, 0.3);
            `;const i=document.createElement("style");i.textContent=`
                .panel-content::-webkit-scrollbar {
                    width: 6px;
                }
                
                .panel-content::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 3px;
                }
                
                .panel-content::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 204, 0, 0.7);
                    border-radius: 3px;
                }
                
                .panel-content::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 204, 0, 0.9);
                }
            `,document.head.appendChild(i)}const n=this.panel.querySelector("#video-container");if(n&&(n.style.cssText=`
                width: 100%;
                margin-bottom: 24px;
                border: 1px solid rgba(255, 204, 0, 0.3);
                position: relative;
                overflow: hidden;
                border-radius: 4px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            `),this.videoElement&&(this.videoElement.style.cssText=`
                width: 100%;
                border-radius: 3px;
                display: block;
                background-color: #000;
            `,this.videoElement.controls=!0),this.descriptionElement){this.descriptionElement.style.cssText=`
                font-size: 0.95rem;
                line-height: 1.6;
                color: #e0e0e0;
                font-family: 'Merriweather Sans', 'Source Sans Pro', sans-serif;
            `;const i=document.createElement("style");i.textContent=`
                #hotspot-description p {
                    margin-bottom: 16px;
                    text-align: justify;
                }
                
                #hotspot-description p:last-child {
                    margin-bottom: 0;
                }
                
                #hotspot-description .coordinates {
                    background: linear-gradient(to right, rgba(0, 40, 80, 0.5), rgba(0, 20, 40, 0.5));
                    padding: 10px 15px;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-left: 3px solid #ffcc00;
                    font-family: 'Roboto Mono', monospace;
                }
                
                #hotspot-description .coordinates-label {
                    font-weight: bold;
                    color: #ffcc00;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                }
                
                #hotspot-description .coordinates-value {
                    font-family: 'Roboto Mono', monospace;
                    letter-spacing: 1px;
                }
            `,document.head.appendChild(i)}}createDrawerElements(){if(!this.panel)return;this.drawerToggle=document.createElement("div"),this.drawerToggle.className="drawer-toggle",this.drawerToggle.innerHTML='<span class="arrow up"></span>',this.drawerToggle.style.cssText=`
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 44px;
            height: 28px;
            background-color: rgba(0, 0, 0, 0.7);
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
            border-top: 1px solid rgba(255, 204, 0, 0.5);
            border-left: 1px solid rgba(255, 204, 0, 0.5);
            border-right: 1px solid rgba(255, 204, 0, 0.5);
            z-index: 101;
        `;const e=document.createElement("style");e.textContent=`
            .arrow {
                width: 12px;
                height: 12px;
                border-style: solid;
                border-color: #ffcc00;
                border-width: 0 2px 2px 0;
                display: inline-block;
                transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
            }
            
            .up {
                transform: rotate(-135deg) translateY(-2px);
            }
            
            .down {
                transform: rotate(45deg) translateY(-2px);
            }
            
            .drawer-toggle:hover .arrow {
                border-color: #ffffff;
            }
        `,document.head.appendChild(e),this.panel.appendChild(this.drawerToggle),this.drawer=document.createElement("div"),this.drawer.className="info-drawer",this.drawer.style.cssText=`
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 70%;
            background: linear-gradient(to bottom, rgba(0, 40, 80, 0.97) 0%, rgba(0, 10, 30, 0.97) 100%);
            transform: translateY(100%);
            transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            z-index: 100;
            box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
            padding: 20px;
            box-sizing: border-box;
            color: white;
            display: none;
            border-top: 1px solid rgba(255, 204, 0, 0.7);
            backdrop-filter: blur(10px);
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 204, 0, 0.7) rgba(0, 0, 0, 0.3);
        `,this.drawerContent=document.createElement("div"),this.drawerContent.className="drawer-content",this.drawerContent.style.cssText=`
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 24px;
        `,this.drawer.appendChild(this.drawerContent),document.body.appendChild(this.drawer),this.drawerToggle.addEventListener("click",()=>{this.toggleDrawer()})}toggleDrawer(){this.isDrawerOpen?this.closeDrawer():this.openDrawer()}openDrawer(){if(this.isDrawerOpen||!this.drawer)return;this.isDrawerOpen=!0,this.drawer.style.display="block",ae.to(this.drawer,{y:0,duration:.7,ease:"back.out(1.2)"});const e=this.drawerToggle.querySelector(".arrow");e&&(e.classList.remove("up"),e.classList.add("down")),this.drawerToggle&&ae.to(this.drawerToggle,{bottom:"auto",top:-28,duration:.5}),this.panel&&ae.to(this.panel,{scale:.95,opacity:.85,duration:.5,ease:"power2.out"})}closeDrawer(){if(!this.isDrawerOpen||!this.drawer)return;this.isDrawerOpen=!1,ae.to(this.drawer,{y:"100%",duration:.5,ease:"power3.in",onComplete:()=>{this.drawer.style.display="none"}});const e=this.drawerToggle.querySelector(".arrow");e&&(e.classList.remove("down"),e.classList.add("up")),this.drawerToggle&&ae.to(this.drawerToggle,{top:"auto",bottom:0,duration:.5}),this.panel&&ae.to(this.panel,{scale:1,opacity:1,duration:.5,ease:"power2.out"})}update(e){if(!this.titleElement||!this.descriptionElement)return;this.titleElement.textContent=e.title||"Information";let t=e.description||"";if(e.coordinates&&(t=`
                <div class="coordinates">
                    <span class="coordinates-label">GPS:</span>
                    <span class="coordinates-value">${e.coordinates.lat.toFixed(4)}° N, ${e.coordinates.lng.toFixed(4)}° E</span>
                </div>
                ${t}
            `),this.descriptionElement.innerHTML=t,this.videoElement&&e.videoSrc){if(this.videoElement.style.display="block",this.videoElement.querySelector("source"))this.videoElement.querySelector("source").src=e.videoSrc;else{const n=document.createElement("source");n.src=e.videoSrc,n.type="video/mp4",this.videoElement.appendChild(n)}this.videoElement.load()}else this.videoElement&&(this.videoElement.style.display="none");if((e.detailedInfo||e.links)&&this.drawerContent){let n="";n+="<h3>INFORMATIONS COMPLÉMENTAIRES</h3>",e.detailedInfo&&(n+=`
                    <div class="detailed-info">
                        ${e.detailedInfo}
                    </div>
                `),e.links&&e.links.length>0&&(n+=`
                    <div class="external-links">
                        <h4>RESSOURCES SCIENTIFIQUES</h4>
                        <ul>
                `,e.links.forEach(i=>{n+=`<li><a href="${i.url}" target="_blank">${i.title}</a></li>`}),n+=`
                        </ul>
                    </div>
                `),this.drawerContent.innerHTML=n,this.drawerToggle&&(this.drawerToggle.style.display="flex")}else this.drawerToggle&&(this.drawerToggle.style.display="none")}show(){if(this.isVisible||!this.panel)return;this.isVisible=!0,this.panel.classList.remove("hidden"),this.panel.classList.add("visible"),this.closeDrawer(),ae.fromTo(this.panel,{x:"100%",opacity:0,scale:.95},{x:"0%",opacity:1,scale:1,duration:.7,ease:"back.out(1.2)"});const e=document.getElementById("main-container");e&&ae.to(e.querySelectorAll(":not(#content-panel)"),{filter:"blur(2px)",opacity:.8,duration:.5,ease:"power2.out"})}hide(){if(!this.isVisible||!this.panel)return;this.isVisible=!1,this.isDrawerOpen&&this.closeDrawer(),ae.to(this.panel,{x:"100%",opacity:0,scale:.95,duration:.5,ease:"power3.in",onComplete:()=>{this.panel.classList.remove("visible"),this.panel.classList.add("hidden"),this.videoElement&&this.videoElement.pause()}});const e=document.getElementById("main-container");e&&ae.to(e.querySelectorAll(":not(#content-panel)"),{filter:"blur(0px)",opacity:1,duration:.5,ease:"power2.out"})}}const hh=[{id:"grande-barriere",title:"Grande Barrière de Corail",position:{lat:-18.2871,lng:147.6992},description:`
            <p>La Grande Barrière de Corail représente le plus grand récif corallien du monde. Située au large du Queensland en Australie, elle s'étend sur plus de 2 300 kilomètres et abrite une biodiversité exceptionnelle avec plus de 1 500 espèces de poissons et 400 types de coraux.</p>
            <p>Ce site classé au patrimoine mondial de l'UNESCO est aujourd'hui gravement menacé par le changement climatique, la pollution et la surpêche. Les scientifiques observent un blanchissement massif des coraux dû à l'augmentation de la température des océans, avec cinq épisodes majeurs depuis 1998, dont trois entre 2016 et 2020.</p>
        `,videoSrc:"/public/videos/grande-barriere.mp4",scientificData:{depth:{min:15,max:45,avg:35},temperature:{min:23.5,max:28.5,avg:25.7},biodiversity:"Exceptionnelle",conservationStatus:"En danger critique",area:"348,000 km²",discoveryYear:1770,phValue:{min:8.1,max:8.4},salinity:"34-35‰"},detailedInfo:`
            <p>La Grande Barrière de Corail est le plus vaste écosystème corallien du monde. Elle abrite plus de 1 500 espèces de poissons, 4 000 types de mollusques, 240 espèces d'oiseaux et de nombreux mammifères marins en danger. Le réchauffement océanique a provoqué cinq épisodes massifs de blanchissement des coraux depuis 1998, dont trois entre 2016 et 2020, affectant gravement cet écosystème unique.</p>
            <p>Selon les dernières études, plus de 50% des coraux de la Grande Barrière ont été perdus depuis 1995, principalement en raison du réchauffement des océans. La hausse des températures provoque l'expulsion des algues symbiotiques qui donnent aux coraux leur couleur et leur principale source d'énergie, entraînant leur blanchissement et, souvent, leur mort.</p>
            <p>Le site est également menacé par l'acidification des océans, qui réduit la capacité des coraux à construire leurs squelettes calcaires, les rendant plus vulnérables aux tempêtes et aux prédateurs. Les scientifiques estiment que si la tendance actuelle se poursuit, nous pourrions assister à la disparition de la majorité des récifs coralliens du monde d'ici 2050.</p>
        `,evolutionData:[{year:2e3,healthIndex:.85},{year:2005,healthIndex:.79},{year:2010,healthIndex:.72},{year:2015,healthIndex:.61},{year:2020,healthIndex:.47},{year:2025,healthIndex:.43,projected:!0}],sources:[{title:"État des récifs coralliens 2024 (UNESCO)",url:"https://whc.unesco.org/en/list/154/"},{title:"Études sur le blanchissement des coraux (AIMS)",url:"https://www.aims.gov.au/research-topics/coral-reefs"},{title:"Stratégies de conservation marine (GBRMPA)",url:"https://www.gbrmpa.gov.au/"}]},{id:"abysses",title:"Les Abysses",position:{lat:-10.9638,lng:-176.6333},description:`
            <p>Les abysses constituent les zones les plus profondes des océans, situées entre 3 000 et 11 000 mètres de profondeur. Ces environnements extrêmes, caractérisés par une pression écrasante, l'absence de lumière et des températures avoisinant 2°C, abritent pourtant une vie extraordinaire.</p>
            <p>Les créatures abyssales ont développé des adaptations fascinantes : organes bioluminescents, corps transparents, dents démesurées ou encore capacité à résister à des pressions plusieurs centaines de fois supérieures à celle de la surface. Notre connaissance de ces écosystèmes reste limitée, avec moins de 5% des fonds marins ayant été explorés à ce jour.</p>
        `,videoSrc:"/public/videos/abysses.mp4",scientificData:{depth:{min:3e3,max:11e3,avg:5e3},temperature:{min:1.5,max:3,avg:2.3},biodiversity:"Rare et spécialisée",conservationStatus:"Zone peu explorée",pressure:"Jusqu'à 1100 atmosphères",lightPenetration:"Nulle",oxygenLevel:"Très faible",microbialDensity:"Élevée dans certaines zones hydrothermales"},detailedInfo:`
            <p>Les abysses, zones des océans situées entre 3 000 et 11 000 mètres de profondeur, sont parmi les environnements les moins explorés de notre planète. La fosse des Mariannes, point le plus profond de la Terre (10 994 mètres), abrite une biodiversité étonnamment riche malgré une pression 1 100 fois supérieure à celle du niveau de la mer. Les créatures abyssales ont développé des adaptations uniques comme la bioluminescence pour communiquer et attirer leurs proies dans l'obscurité totale.</p>
            <p>Ces écosystèmes fonctionnent différemment des environnements de surface. Sans photosynthèse, ils s'appuient sur la "neige marine" (particules organiques tombant des eaux supérieures) et sur les sources hydrothermales comme sources d'énergie. Ces cheminées, découvertes en 1977, ont révolutionné notre compréhension de la vie sur Terre, montrant qu'elle peut exister sans lumière solaire, basée sur la chimiosynthèse.</p>
            <p>Les abysses abritent une biodiversité unique : poissons comme le dragon des mers ou le poisson-ogre, calmars géants, vers tubicoles géants, et diverses espèces bioluminescentes. Paradoxalement, bien que très hostiles à la vie humaine, ces environnements font preuve d'une remarquable stabilité climatique, à l'abri des variations affectant la surface des océans, ce qui en fait des témoins privilégiés de l'évolution.</p>
        `,evolutionData:[{year:2e3,discoveryIndex:.12},{year:2005,discoveryIndex:.15},{year:2010,discoveryIndex:.19},{year:2015,discoveryIndex:.25},{year:2020,discoveryIndex:.32},{year:2025,discoveryIndex:.38,projected:!0}],sources:[{title:"Exploration des grands fonds (NOAA)",url:"https://oceanexplorer.noaa.gov/explorations/deepwater-exploration.html"},{title:"Biodiversité des abysses (DOSI)",url:"https://www.dosi-project.org/"},{title:"Adaptations aux milieux extrêmes (MBARI)",url:"https://www.mbari.org/science/seafloor-processes/"}]},{id:"arctique",title:"Océan Arctique",position:{lat:78.9634,lng:12.5847},description:`
            <p>L'océan Arctique, en grande partie recouvert de glace, constitue un écosystème unique abritant des espèces parfaitement adaptées aux conditions extrêmes, comme l'ours polaire, le phoque annelé et le narval.</p>
            <p>Le réchauffement climatique affecte cet environnement deux fois plus rapidement que le reste de la planète. La fonte de la banquise estivale, qui a diminué de plus de 40% depuis 1979, transforme radicalement les habitats et menace la survie de nombreuses espèces qui dépendent de la glace pour leur alimentation et leur reproduction.</p>
        `,videoSrc:"/public/videos/arctique.mp4",scientificData:{temperature:{min:-1.8,max:3,avg:-.5},iceExtent:{winter:"15 millions km²",summer:"5 millions km²"},biodiversity:"Modérée",conservationStatus:"Vulnérable",depth:{max:5567,avg:1038},salinity:"30-34‰",iceThickness:{min:.5,max:4,avg:1.8},iceRetreatRate:"13% par décennie"},detailedInfo:`
            <p>L'Océan Arctique subit le réchauffement le plus rapide de la planète, avec des températures augmentant à un rythme deux fois plus élevé que la moyenne mondiale. La banquise estivale a diminué de 40% depuis 1979, ce qui modifie radicalement l'écosystème régional. Des espèces tempérées migrent vers le nord, entrant en compétition avec les espèces arctiques comme le phoque annelé, le narval et l'ours polaire, dont la survie dépend directement de la glace de mer.</p>
            <p>L'effet d'amplification arctique, causé par la réduction de l'albédo (réflexion de la lumière solaire) lorsque la glace blanche est remplacée par l'eau sombre qui absorbe la chaleur, accélère le réchauffement dans un cycle de rétroaction positive. Les mesures de l'épaisseur de la glace montrent également une diminution drastique, avec une perte de 65% depuis 1975.</p>
            <p>Cette transformation a des conséquences planétaires : modification des courants océaniques, perturbation de la circulation atmosphérique globale et libération potentielle de grandes quantités de méthane piégé dans le pergélisol. Les prévisions actuelles suggèrent que l'océan Arctique pourrait être pratiquement libre de glace en été dès les années 2030-2040, soit quelques décennies plus tôt que ce qui était prévu par les modèles climatiques précédents.</p>
        `,evolutionData:[{year:1980,iceExtent:7.85},{year:1990,iceExtent:6.74},{year:2e3,iceExtent:6.32},{year:2010,iceExtent:4.9},{year:2020,iceExtent:3.74},{year:2025,iceExtent:3.2,projected:!0}],sources:[{title:"Évolution de la banquise arctique (NSIDC)",url:"https://nsidc.org/arcticseaicenews/"},{title:"Impact du changement climatique sur l'écosystème arctique (WWF)",url:"https://arcticwwf.org/work/climate/"},{title:"Rapport sur l'état de l'Arctique (NOAA)",url:"https://arctic.noaa.gov/Report-Card"}]},{id:"plastique",title:"Pollution Plastique",position:{lat:28.3699,lng:-144.4089},description:`
            <p>Le "Great Pacific Garbage Patch" est une zone d'accumulation de déchets plastiques située dans le Pacifique Nord. Cette "soupe de plastique" s'étend sur une surface équivalente à trois fois la France et contient plus de 1,8 trillion de morceaux de plastique.</p>
            <p>Ces débris se fragmentent en microplastiques qui sont ingérés par la faune marine et entrent dans la chaîne alimentaire. Chaque année, plus de 8 millions de tonnes de plastique sont déversées dans les océans, avec des conséquences désastreuses pour les écosystèmes marins et potentiellement la santé humaine.</p>
        `,videoSrc:"/public/videos/plastique.mp4",scientificData:{area:"Environ 1,6 million km²",plasticDensity:{min:"10 kg/km²",max:"100 kg/km²"},biodiversity:"Dégradée",conservationStatus:"Zone fortement dégradée",microplasticConcentration:"Jusqu'à 1 million de particules/km²",originOfWaste:"80% terrestre, 20% maritime",degradationTime:"450 ans pour une bouteille plastique",annualInput:"8 millions de tonnes/an"},detailedInfo:`
            <p>Le "Great Pacific Garbage Patch" (vortex de déchets du Pacifique nord) est la plus grande des cinq zones d'accumulation de plastiques océaniques. D'une superficie de 1,6 million de km², elle contient environ 1,8 trillion de fragments plastiques. Plus de 80% de cette pollution provient d'activités terrestres. Les microplastiques (&lt;5mm) sont particulièrement dangereux car ils sont ingérés par les organismes marins et s'accumulent dans la chaîne alimentaire. On estime que d'ici 2050, il y aura plus de plastique que de poissons dans les océans (en poids).</p>
            <p>La durée de vie des plastiques en milieu marin peut atteindre plusieurs centaines d'années. Loin de se décomposer complètement, ils se fragmentent en particules de plus en plus petites qui deviennent impossibles à récupérer. Ces microplastiques sont désormais présents dans tous les océans, des fosses les plus profondes jusqu'à l'Arctique, et ont été détectés dans plus de 700 espèces marines.</p>
            <p>Les impacts sur la faune sont multiples : enchevêtrement (tortues, mammifères marins), ingestion causant des occlusions intestinales, faux sentiment de satiété, et absorption de polluants toxiques concentrés sur les microplastiques. De récentes études ont également mis en évidence la présence de microplastiques dans le poisson et les fruits de mer consommés par les humains, soulevant de sérieuses questions de santé publique. Les estimations actuelles suggèrent qu'un être humain ingère en moyenne l'équivalent d'une carte de crédit en plastique par semaine.</p>
        `,evolutionData:[{year:1990,plasticAmount:.8},{year:2e3,plasticAmount:1.5},{year:2010,plasticAmount:2.8},{year:2020,plasticAmount:4.5},{year:2025,plasticAmount:5.7,projected:!0}],sources:[{title:"Étude globale sur la pollution plastique (The Ocean Cleanup)",url:"https://theoceancleanup.com/great-pacific-garbage-patch/"},{title:"Impact des microplastiques sur les écosystèmes marins (PNUE)",url:"https://www.unep.org/explore-topics/oceans-seas/what-we-do/addressing-land-based-pollution/marine-plastics-issue"},{title:"Solutions pour réduire la pollution plastique (Plastic Pollution Coalition)",url:"https://www.plasticpollutioncoalition.org/"}]},{id:"triangle-corail",title:"Triangle de Corail",position:{lat:.7893,lng:127.8641},description:`
            <p>Le Triangle de Corail, situé entre l'Indonésie, la Malaisie, les Philippines, la Papouasie-Nouvelle-Guinée, les Îles Salomon et le Timor-Leste, représente l'épicentre de la biodiversité marine mondiale.</p>
            <p>Cette région abrite 76% des espèces de coraux connues et plus de 3 000 espèces de poissons. Véritable nurserie des océans, le Triangle de Corail joue un rôle crucial dans l'équilibre des écosystèmes marins de la planète et assure la subsistance de plus de 120 millions de personnes.</p>
        `,videoSrc:"/public/videos/triangle-corail.mp4",scientificData:{area:"5,7 millions km²",depth:{min:10,max:200,avg:53},temperature:{min:26,max:29,avg:27.6},biodiversity:"Exceptionnelle",conservationStatus:"En danger",coralSpecies:"605 (76% du total mondial)",fishSpecies:"2228+",economicValue:"1,2 billion USD/an"},detailedInfo:`
            <p>Le Triangle de Corail, épicentre de la biodiversité marine mondiale, abrite 76% des espèces de coraux connues et plus de 2 200 espèces de poissons récifaux. Chaque année, 30% des espèces marines de ce triangle disparaissent à cause de la surpêche, de la pollution et du changement climatique. Cette région couvre seulement 1,5% de la surface océanique totale mais contient le plus grand nombre d'espèces marines par unité de surface au monde, ce qui en fait un véritable "Amazon de la mer".</p>
            <p>Cette richesse exceptionnelle s'explique par la rencontre de facteurs géologiques et océanographiques favorables : eaux chaudes et peu profondes, complexité topographique sous-marine, et position au carrefour des courants marins principaux. Au-delà des coraux et poissons, on y trouve 6 des 7 espèces de tortues marines, des dugongs, des requins-baleines et d'innombrables invertébrés, dont beaucoup restent à découvrir.</p>
            <p>Le Triangle de Corail fournit des services écosystémiques vitaux : barrière naturelle contre les tempêtes, puits de carbone, nurserie pour de nombreuses espèces commerciales, et source de nourriture pour plus de 120 millions de personnes. Sa valeur économique est estimée à 1,2 billion de dollars annuels. Les efforts de conservation impliquent six nations et des dizaines d'ONG, avec un objectif de protection effective de 20% des récifs d'ici 2030, contre moins de 10% actuellement.</p>
        `,evolutionData:[{year:2e3,coralCover:.65},{year:2005,coralCover:.61},{year:2010,coralCover:.58},{year:2015,coralCover:.53},{year:2020,coralCover:.49},{year:2025,coralCover:.45,projected:!0}],sources:[{title:"Initiative pour le Triangle de Corail (CTI)",url:"https://www.coraltriangleinitiative.org/"},{title:"Stratégies de conservation marine (WWF)",url:"https://www.worldwildlife.org/places/coral-triangle"},{title:"Biodiversité du Triangle de Corail (Nature Conservancy)",url:"https://www.nature.org/en-us/about-us/where-we-work/asia-pacific/asia-and-the-pacific-coral-triangle/"}]},{id:"requins",title:"Requins en Danger",position:{lat:24.287,lng:-77.6843},description:`
            <p>Les requins, prédateurs au sommet de la chaîne alimentaire marine depuis plus de 400 millions d'années, sont aujourd'hui gravement menacés. Plus d'un tiers des espèces de requins et de raies sont en danger d'extinction.</p>
            <p>La surpêche, notamment pour le commerce des ailerons, et les prises accessoires sont les principales menaces. En tant que régulateurs des écosystèmes marins, leur déclin a des effets en cascade sur la santé des océans et l'équilibre des populations de poissons.</p>
        `,videoSrc:"/public/videos/requins.mp4",scientificData:{speciesCount:"500+ espèces",depth:{min:0,max:2e3,avg:150},temperature:{min:4,max:26,avg:21.5},biodiversity:"Élevée",conservationStatus:"En danger",annualDeath:"~100 millions d'individus",evolutionTime:"450 millions d'années",threatLevel:"37% des espèces menacées"},detailedInfo:`
            <p>Les requins, prédateurs au sommet des écosystèmes marins depuis plus de 400 millions d'années, sont aujourd'hui gravement menacés. Chaque année, environ 100 millions de requins sont tués, principalement pour leurs ailerons. Plus de 37% des espèces de requins et de raies dans le monde sont menacées d'extinction. En tant que régulateurs des populations de proies, leur disparition a un effet en cascade sur l'ensemble de l'écosystème marin, avec des conséquences sur les stocks de poissons commerciaux et la santé des récifs coralliens.</p>
            <p>Le commerce des ailerons, notamment pour la soupe d'aileron en Asie, est particulièrement dévastateur car il implique souvent la pratique du "finning" où seuls les ailerons sont prélevés et le requin, encore vivant, est rejeté à la mer où il meurt lentement. Bien que des réglementations existent dans certains pays, le commerce illégal reste répandu.</p>
            <p>Les requins sont particulièrement vulnérables à la surpêche en raison de leur maturité sexuelle tardive et de leur faible taux de reproduction. Une femelle de requin blanc, par exemple, n'atteint sa maturité sexuelle qu'à l'âge de 33 ans et ne produit qu'un petit nombre de jeunes. Cette biologie "lente" signifie que les populations mettent des décennies à se reconstituer après avoir été décimées. Des zones marines protégées dédiées, comme le sanctuaire de requins des Bahamas, montrent qu'une protection efficace peut permettre aux populations de se maintenir, tout en générant des revenus importants grâce à l'écotourisme.</p>
        `,evolutionData:[{year:1970,sharkPopulation:1},{year:1990,sharkPopulation:.8},{year:2e3,sharkPopulation:.68},{year:2010,sharkPopulation:.55},{year:2020,sharkPopulation:.44},{year:2025,sharkPopulation:.39,projected:!0}],sources:[{title:"État des populations de requins (IUCN Shark Specialist Group)",url:"https://www.iucnssg.org/"},{title:"Impact de la disparition des grands prédateurs marins (Shark Trust)",url:"https://www.sharktrust.org/"},{title:"Sanctuaires de requins et protection (PEW Charitable Trusts)",url:"https://www.pewtrusts.org/en/projects/global-shark-conservation"}]}];function lv(r){return hh.find(e=>e.id===r)||null}class cv{constructor(){this.globeManager=null,this.visualEffects=null,this.interaction=null,this.interfaceUI=null,this.contentPanel=null,this.isInitialized=!1,this.isExploring=!1,this.currentHotspot=null,this.explorationHistory=[],this.welcomeScreen=document.getElementById("welcome-screen"),this.mainContainer=document.getElementById("main-container"),this.loadingScreen=document.getElementById("loading-screen")}init(){if(console.log("Initialisation de l'application Mondes Immergés"),this.isInitialized)return;this.isInitialized=!0,this.createStarryBackground(),this.visualEffects=new rv({container:this.mainContainer}),this.globeManager=new iv({containerId:"globe-container",videoPath:"/public/videos/globe-video.mp4",skyTexturePath:"/public/images/night-sky.png"}),this.interaction=new sv({globeManager:this.globeManager,visualEffects:this.visualEffects}),this.interfaceUI=new av({zoomInBtn:document.getElementById("zoom-in"),zoomOutBtn:document.getElementById("zoom-out"),resetViewBtn:document.getElementById("reset-view"),infoBtn:document.getElementById("info-button"),closeInfoBtn:document.getElementById("close-info"),infoOverlay:document.getElementById("info-overlay"),globeManager:this.globeManager});const e={panel:document.getElementById("content-panel"),closeBtn:document.getElementById("close-panel"),titleElement:document.getElementById("hotspot-title"),descriptionElement:document.getElementById("hotspot-description"),videoElement:document.getElementById("hotspot-video"),globeManager:this.globeManager};e.panel&&e.closeBtn&&e.titleElement&&e.descriptionElement?this.contentPanel=new ov(e):(console.warn("ContentPanel: Éléments DOM du panneau de contenu manquants, fonctionnalité désactivée"),this.contentPanel={show:()=>console.log("ContentPanel.show() appelé mais panneau désactivé"),hide:()=>console.log("ContentPanel.hide() appelé mais panneau désactivé"),update:()=>console.log("ContentPanel.update() appelé mais panneau désactivé")}),this.globeManager.setHotspotSelectCallback(this.handleHotspotSelect.bind(this)),this.globeManager.setHotspotExitCallback(this.handleHotspotExit.bind(this)),this.globeManager.animate(),this.globeManager.addHotspots(hh),this.initSatelliteInterface(),this.setupEventListeners(),this.addNatGeoLogo(),console.log("Initialisation terminée avec succès")}setupEventListeners(){const e=document.getElementById("explore-btn");e&&e.addEventListener("click",()=>{this.startExploration()}),document.addEventListener("keydown",t=>{t.key===" "&&!this.isExploring&&this.startExploration(),t.key==="Escape"&&(this.currentHotspot?(this.globeManager.exitHotspotModeExternal(),this.currentHotspot=null):this.isExploring)}),window.addEventListener("resize",this.handleResize.bind(this))}startExploration(e=!1){this.isExploring||(this.welcomeScreen&&this.welcomeScreen.classList.add("hidden"),this.mainContainer&&this.mainContainer.classList.remove("hidden"),this.visualEffects.transitionIn(),e?(console.log("Séquence de démarrage fictive ignorée"),this.isExploring=!0):(setTimeout(()=>{this.startupSequence()},1e3),this.isExploring=!0))}returnToWelcomeScreen(){this.isExploring&&this.visualEffects.transitionOut(()=>{this.mainContainer&&this.mainContainer.classList.add("hidden"),this.welcomeScreen&&this.welcomeScreen.classList.remove("hidden"),this.isExploring=!1,this.currentHotspot=null,this.contentPanel&&this.contentPanel.hide&&this.contentPanel.hide(),this.globeManager&&this.globeManager.resetView()})}handleResize(){this.globeManager&&this.globeManager.renderer&&this.globeManager.onWindowResize()}createStarryBackground(){const e=document.createElement("div");e.className="starry-background",this.mainContainer.appendChild(e)}addNatGeoLogo(){const e=document.createElement("div");e.style.cssText=`
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
        `;const t=document.createElement("img");t.src="/public/images/nat-geo-logo.png",t.alt="National Geographic",t.style.cssText=`
            height: 40px;
            width: auto;
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
        `,e.appendChild(t),this.mainContainer.appendChild(e)}initSatelliteInterface(){const e=document.getElementById("coord-lat"),t=document.getElementById("coord-lng"),n=document.getElementById("zoom-level"),i=document.getElementById("orbit-status"),s=document.getElementById("altitude-value"),a=document.getElementById("current-date"),o=document.getElementById("current-time");setInterval(()=>{const l=new Date,c={day:"2-digit",month:"2-digit",year:"numeric"};a&&(a.textContent=l.toLocaleDateString("fr-FR",c));const u=String(l.getUTCHours()).padStart(2,"0"),h=String(l.getUTCMinutes()).padStart(2,"0"),d=String(l.getUTCSeconds()).padStart(2,"0");if(o&&(o.textContent=`${u}:${h}:${d}`),this.globeManager&&this.globeManager.camera){const m=this.globeManager.camera.position,_=Math.sqrt(m.x*m.x+m.z*m.z),g=Math.atan2(m.z,m.x)*(180/Math.PI),f=Math.atan2(m.y,_)*(180/Math.PI);e&&(e.textContent=Math.abs(f).toFixed(4)+(f>=0?"":"-")),t&&(t.textContent=Math.abs(g).toFixed(4)+(g>=0?"":"-"));const p=m.length();s&&(s.textContent=p.toFixed(3)),n&&this.globeManager.orbitParams&&(n.textContent=this.globeManager.orbitParams.zoomLevel.toFixed(1)),i&&this.globeManager.orbitParams&&(this.globeManager.orbitParams.inHotspotMode?(i.textContent="FIXÉE",i.style.color="#ffcc00"):this.globeManager.orbitParams.currentSpeed>this.globeManager.orbitParams.baseSpeed*1.5?(i.textContent="ACCÉLÉRÉE",i.style.color="#ff9900"):this.globeManager.orbitParams.currentSpeed<this.globeManager.orbitParams.baseSpeed?(i.textContent="RALENTIE",i.style.color="#66ccff"):(i.textContent="NORMALE",i.style.color="#ffffff"))}},100)}startupSequence(){this.visualEffects.createOrbitalLoaderEffect(()=>{this.finalizeStartup()},4);const e=document.createElement("div");e.style.cssText=`
            max-width: 800px;
            margin: 0 auto;
        `,startupOverlay.appendChild(e),document.body.appendChild(startupOverlay);const t=["Initialisation du système de navigation...","Chargement des modules cartographiques...","Calibration des capteurs océanographiques...","Établissement de la liaison satellite...","Chargement des données bathymétriques...","Analyse des courants marins...","Détection des points d'intérêt...","Optimisation de l'interface scientifique...","Calcul de l'orbite ellipsoïdale...","Système opérationnel. Bienvenue à bord."];let n=0;const i=setInterval(()=>{if(n<t.length){const s=document.createElement("div");s.className="startup-message",s.innerHTML=`<span style="color: #66ccff;">[SYSTÈME]</span> ${t[n]}`,s.style.cssText=`
                    margin-bottom: 6px;
                    background-color: rgba(0, 10, 30, 0.7);
                    padding: 6px 10px;
                    border-radius: 4px;
                    color: white;
                    font-size: 11px;
                    font-family: 'Roboto Mono', monospace;
                    text-align: left;
                    transform: translateY(10px);
                    opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                `,e.appendChild(s),setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},50),n++}else clearInterval(i),setTimeout(()=>{startupOverlay.style.transition="opacity 1s ease",startupOverlay.style.opacity="0",setTimeout(()=>{startupOverlay.remove()},1e3)},1e3)},400)}finalizeStartup(){this.showSystemMessages(),this.visualEffects.addBackgroundParticles({count:30,container:this.mainContainer}),setTimeout(()=>{this.visualEffects.showNotification("Bienvenue dans l'exploration des Mondes Immergés","info",4e3)},1e3)}showSystemMessages(){}handleHotspotSelect(e){console.log(`Point d'intérêt sélectionné: ${e.title}`),this.currentHotspot=e,this.explorationHistory.push({id:e.id,title:e.title,timestamp:Date.now()}),this.visualEffects.highlightSelection(e.position),this.visualEffects.flashScreen("rgba(255, 204, 0, 0.2)");const t=document.querySelector(".coordinates-display");t&&(t.style.backgroundColor="rgba(255, 204, 0, 0.2)",t.style.borderColor="rgba(255, 204, 0, 0.8)");const n=lv(e.id),i=this.generateDetailedInfoHTML(n),s=n.sources||[{title:"Étude scientifique de référence (National Geographic)",url:"https://www.nationalgeographic.com/environment/oceans"},{title:"Base de données océanographiques (NOAA)",url:"https://www.noaa.gov/oceans-coasts"},{title:"Conservation marine (UNESCO)",url:"https://en.unesco.org/themes/ocean"}];this.contentPanel&&this.contentPanel.update?(this.contentPanel.update({title:e.title,description:e.description,videoSrc:e.videoSrc,coordinates:e.position,detailedInfo:i,links:s}),this.contentPanel.show()):(console.log("ContentPanel non disponible, affichage des informations dans la console:"),console.log("Titre:",e.title),console.log("Description:",e.description),console.log("Coordonnées:",e.position)),this.interfaceUI&&this.interfaceUI.setUIVisibility&&this.interfaceUI.setUIVisibility(!1),this.visualEffects.showNotification(`Exploration de: ${e.title}`,"info",3e3)}generateDetailedInfoHTML(e){if(!e||!e.scientificData)return"<p>Informations détaillées non disponibles pour cette zone.</p>";const t=e.scientificData;let n=`
            <div class="scientific-data">
                <strong>Profondeur moyenne:</strong> ${t.depth?typeof t.depth=="object"?`${t.depth.min}-${t.depth.max} m (moy. ${t.depth.avg} m)`:t.depth:"Non disponible"}<br>
                <strong>Température de l'eau:</strong> ${t.temperature?typeof t.temperature=="object"?`${t.temperature.min}-${t.temperature.max}°C (moy. ${t.temperature.avg}°C)`:t.temperature:"Non disponible"}<br>
                <strong>Biodiversité:</strong> ${t.biodiversity||"Non classifiée"}<br>
                <strong>Statut de conservation:</strong> ${t.conservationStatus||"Non déterminé"}<br>
        `;t.area&&(n+=`<strong>Superficie:</strong> ${t.area}<br>`),t.iceExtent&&(n+=`<strong>Étendue de glace:</strong> ${typeof t.iceExtent=="object"?`Hiver: ${t.iceExtent.winter}, Été: ${t.iceExtent.summer}`:t.iceExtent}<br>`),t.annualInput&&(n+=`<strong>Apport annuel:</strong> ${t.annualInput}<br>`),t.economicValue&&(n+=`<strong>Valeur économique:</strong> ${t.economicValue}<br>`),n+="</div>";let i="";e.detailedInfo&&(i=`
                <div class="detailed-text">
                    ${e.detailedInfo}
                </div>
            `);let s="";return e.evolutionData&&e.evolutionData.length>0&&(s=`
                <div class="data-visualization">
                    <h4>Évolution sur ${e.evolutionData[e.evolutionData.length-1].year-e.evolutionData[0].year} ans</h4>
                    <div class="chart-placeholder" style="width: 100%; height: 200px; background-color: rgba(0, 30, 60, 0.5); border-radius: 5px; display: flex; justify-content: center; align-items: center;">
                        <span>Graphique de tendance (à implémenter)</span>
                    </div>
                </div>
            `),`
            ${n}
            ${i}
            ${s}
        `}handleHotspotExit(){this.contentPanel&&this.contentPanel.hide&&this.contentPanel.hide();const e=document.querySelector(".coordinates-display");e&&(e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.borderColor="rgba(255, 204, 0, 0.3)"),this.interfaceUI&&this.interfaceUI.setUIVisibility&&this.interfaceUI.setUIVisibility(!0),this.visualEffects&&this.visualEffects.showNotification("Retour à l'exploration globale","info",3e3),this.currentHotspot=null}}const dh=new cv;function uv(){dh.init()}function hv(){return dh}let dv=class extends HTMLElement{constructor(){super();un(this,"_propsToUpgrade",{});un(this,"shadow");un(this,"template");un(this,"defaultProps");un(this,"isAttached",!1);this.shadow=this.attachShadow({mode:"open"}),this.template=document.createElement("template")}storePropsToUpgrade(t){t.forEach(n=>{this.hasOwnProperty(n)&&this[n]!==void 0&&(this._propsToUpgrade[n]=this[n],delete this[n])})}upgradeStoredProps(){Object.entries(this._propsToUpgrade).forEach(([t,n])=>{this.setAttribute(t,n)})}reflect(t){t.forEach(n=>{Object.defineProperty(this,n,{set(i){"string,number".includes(typeof i)?this.setAttribute(n,i.toString()):this.removeAttribute(n)},get(){return this.getAttribute(n)}})})}applyDefaultProps(t){this.defaultProps=t,Object.entries(t).forEach(([n,i])=>{this[n]=this[n]||i.toString()})}};var Pc=":host{--uib-dot-size:calc(var(--uib-size)/2);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;animation:rotate calc(var(--uib-speed)*2) linear infinite;display:flex;height:calc(var(--uib-size)/2);justify-content:space-between;position:relative;width:var(--uib-size);will-change:transform}.svg{filter:url(#uib-jelly-ooze);overflow:visible}.dot{cy:50%;cx:50%;r:calc(var(--uib-dot-size)/2);fill:var(--uib-color);display:block;transform-box:fill-box;transform-origin:center;transition:fill .3s ease;will-change:transform}.dot:first-child{animation:shift-left var(--uib-speed) ease infinite}.dot:nth-child(2){animation:shift-right var(--uib-speed) ease infinite}@keyframes rotate{0%,49.999%,to{transform:none}50%,99.999%{transform:rotate(90deg)}}@keyframes shift-left{0%,to{transform:scale(1) translateX(0)}50%{transform:scale(.65) translateX(-75%)}}@keyframes shift-right{0%,to{transform:scale(1) translateX(0)}50%{transform:scale(.65) translateX(75%)}}";class Lc extends dv{constructor(){super();un(this,"_attributes",["size","color","speed"]);un(this,"size");un(this,"color");un(this,"speed");this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}static get observedAttributes(){return["size","color","speed"]}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9});const t=parseInt(this.size)/2;this.template.innerHTML=`
      <div
        class="container"
      >
        <svg 
          class="svg"         
          x="0px" 
          y="0px"
          viewBox="0 0 ${this.size} ${t}"
          height="${t}"
          width="${this.size}"
          preserveAspectRatio='xMidYMid meet'
        >
          <circle class="dot" />
          <circle class="dot" />
          <defs>
            <filter id="uib-jelly-ooze">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation=${parseInt(this.size)/8}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="ooze"
              />
              <feBlend in="SourceGraphic" in2="ooze" />
            </filter>
          </defs>
        </svg>  
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Pc}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){const t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Pc}
    `)}}var fv={register:(r="l-jelly")=>{customElements.get(r)||customElements.define(r,class extends Lc{})},element:Lc};function pv(){console.log("Application Mondes Immergés en cours de chargement...");const r=document.createElement("style");r.textContent=`
		#main-container, #globe-container, canvas {
			user-select: none !important;
			-webkit-user-select: none !important;
			-moz-user-select: none !important;
			-ms-user-select: none !important;
			touch-action: none !important;
			-webkit-user-drag: none !important;
			-khtml-user-drag: none !important;
			-moz-user-drag: none !important;
			-o-user-drag: none !important;
			user-drag: none !important;
			-webkit-touch-callout: none !important;
			pointer-events: auto !important;
			cursor: crosshair !important;
		}
	`,document.head.appendChild(r);const e=document.getElementById("welcome-screen");e&&(e.style.display="none",e.classList.add("hidden"));const t=document.getElementById("main-container");t&&(t.classList.add("hidden"),t.style.opacity="0");let n=0;const i=8,s=()=>{n++;const o=Math.round(n/i*100),l=document.querySelector(".progress-bar"),c=document.querySelector(".progress-text");l&&(l.style.width=`${o}%`),c&&(c.textContent=`${o}%`),n>=i&&gv()};["Configuration système","Textures globe","Vidéos des zones","Données géographiques","Interfaces utilisateur","Modèles 3D","Données scientifiques","Effets visuels"].forEach((o,l)=>{const c=100+Math.random()*200;setTimeout(()=>{console.log(`Ressource chargée: ${o}`),s()},c*(l+1))}),mv()}function mv(){const r=document.getElementById("main-container");if(r.querySelector(".starry-background"))return;const e=document.createElement("div");e.className="starry-background",r.appendChild(e);for(let t=0;t<100;t++){const n=document.createElement("div");n.className="star";const i=Math.random()*100,s=Math.random()*100,a=Math.random()*2+1,o=Math.random()*.7+.3,l=Math.random()*5+3,c=Math.random()*3;n.style.cssText=`
            position: absolute;
            left: ${i}%;
            top: ${s}%;
            width: ${a}px;
            height: ${a}px;
            background-color: rgba(255, 255, 255, ${o});
            border-radius: 50%;
            animation: starTwinkle ${l}s ease-in-out ${c}s infinite;
        `,e.appendChild(n)}if(!document.getElementById("star-animation-style")){const t=document.createElement("style");t.id="star-animation-style",t.textContent=`
            @keyframes starTwinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }
        `,document.head.appendChild(t)}}function gv(){console.log("Démarrage de l'application..."),uv();const r=hv();setTimeout(()=>{r?_v(r):console.error("Impossible de récupérer l'instance de l'application")},300)}function _v(r){const e=document.getElementById("loading-screen");e?(e.style.opacity="0",e.style.transform="scale(1.1)",setTimeout(()=>{e.classList.add("hidden");const t=document.getElementById("main-container");t.classList.remove("hidden"),t.style.opacity="1",r.startupSequence?(r.startupSequence(),setTimeout(()=>{r.startExploration(!0)},5e3)):r.startExploration(!0)},500)):r.startExploration(!0)}function vv(){const r=document.getElementById("loading-screen");if(!r||r.querySelector(".progress-container"))return;const e=r.querySelector(".spinner");e&&e.remove(),fv.register();const t=document.createElement("l-jelly");t.setAttribute("size","60"),t.setAttribute("speed","0.9"),t.setAttribute("color","#ffcc00"),t.style.cssText=`
        margin-bottom: 30px;
        display: block;
    `;const n=r.querySelector("p");n?r.insertBefore(t,n):r.appendChild(t);const i=document.createElement("div");i.className="progress-container",i.style.cssText=`
        width: 300px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        margin-top: 20px;
        overflow: hidden;
        position: relative;
    `;const s=document.createElement("div");s.className="progress-bar",s.style.cssText=`
        height: 100%;
        background-color: #ffcc00;
        width: 0%;
        transition: width 0.3s ease;
        position: absolute;
        top: 0;
        left: 0;
    `;const a=document.createElement("div");a.className="progress-text",a.style.cssText=`
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        color: #ffcc00;
        font-family: 'Roboto Mono', monospace;
    `,a.textContent="0%",i.appendChild(s),i.appendChild(a),r.appendChild(i)}document.addEventListener("DOMContentLoaded",()=>{vv(),setTimeout(()=>{pv()},100)});function xv(){const r=document.querySelector(".cursor"),e=document.querySelector(".cursor-follower");!r||!e||document.addEventListener("mousemove",t=>{const n=t.clientX,i=t.clientY;r.style.left=`${n}px`,r.style.top=`${i}px`,e.style.left=`${n}px`,e.style.top=`${i}px`})}window.addEventListener("load",function(){xv()});
