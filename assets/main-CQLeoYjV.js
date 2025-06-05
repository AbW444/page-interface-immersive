import{R as k,V as X,C as _,a as x,S as Z,A as L,D as A,F as z,P as K,W as J,b as Q,c as B,L as P,d as D,e as O,H as ee,T as q,f as v,M as C,g as y,h as te,B as oe,i as H,j as $,k as N,l as V,m as ie,n as se,o as R,p as ne,q as ae}from"./three-CLD-q7dq.js";import{g as c}from"./gsap-D3jsOSc0.js";import{i as re}from"./utils-CFRTidej.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const le={"grande-barriere":"https://page-collection-les-ombres-de-la-mer.vercel.app/",abysses:"https://page-collection-les-ombres-de-la-mer.vercel.app/",arctique:"https://page-collection-les-ombres-de-la-mer.vercel.app/",plastique:"https://page-collection-les-ombres-de-la-mer.vercel.app/","triangle-corail":"https://page-collection-les-ombres-de-la-mer.vercel.app/",requins:"https://page-collection-les-ombres-de-la-mer.vercel.app/"},ce="https://page-collection-les-ombres-de-la-mer.vercel.app/";function de(d){return le[d]||ce}function F(d){return`/page-interface-immersive/${d.startsWith("/")?d.slice(1):d}`}function j(d){return F(`videos/${d}`)}function T(d){return F(`images/${d}`)}class pe{constructor(e){this.options=e,this.container=document.getElementById(e.containerId),this.scene=null,this.camera=null,this.renderer=null,this.globe=null,this.videoElement=null,this.videoTexture=null,this.hotspotObjects=[],this.raycaster=new k,this.mouse=new X,this.clock=new _,this.currentVideoPath=j("globe-video.webm"),this.alternateVideoPath=j("globe-video-aberration.webm"),this.isAlternateVideo=!1,this.orbitParams={isOrbiting:!0,baseSpeed:4e-4,currentSpeed:4e-4,maxSpeed:.002,accelerationFactor:1.3,decelerationFactor:.9,ellipseMajorAxis:12,ellipseMinorAxis:8,inclination:Math.PI/6,orbitAngle:0,zoomLevel:1,maxZoomLevel:1.1,minZoomLevel:.6,inHotspotMode:!1,orbitHistory:[]},this.celestialParams={sunPosition:new x(100,20,100),moonPosition:new x(-70,30,-50)},this._savedState=null,this.init()}init(){this.scene=new Z;const e=new L(16777215,1.2);this.scene.add(e);const t=new A(16777215,.5);t.position.set(5,10,7),this.scene.add(t),this.scene.fog=new z(0,15e-5),this.camera=new K(60,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraPosition(),this.renderer=new J({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Q,this.container.appendChild(this.renderer.domElement),this.createSkybox(),this.setupLighting(),this.createGlobe(),this.createCelestialBodies(),this.createOrbitPath(),window.addEventListener("resize",this.onWindowResize.bind(this)),this.container.addEventListener("click",this.onMouseClick.bind(this)),document.addEventListener("keydown",this.onKeyDown.bind(this)),this.addLogo()}onKeyDown(e){e.key==="Enter"&&this.switchVideoTexture()}switchVideoTexture(){if(!this.videoElement||!this.videoTexture){console.warn("Vidéo ou texture non initialisée");return}console.log("=== CHANGEMENT DE TEXTURE VIDÉO ==="),this.isAlternateVideo=!this.isAlternateVideo;const e=this.isAlternateVideo?this.alternateVideoPath:this.currentVideoPath;console.log(`Passage à: ${e}`);const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.autoplay=!0,t.playsInline=!0,t.crossOrigin="anonymous",t.addEventListener("canplaythrough",()=>{console.log("Nouvelle vidéo prête"),this.videoElement.pause();const i=new B(t);i.minFilter=P,i.magFilter=P,i.format=D,i.colorSpace=O,this.globe&&this.globe.material&&(this.videoTexture&&this.videoTexture.dispose(),this.globe.material.map=i,this.globe.material.needsUpdate=!0,this.videoElement=t,this.videoTexture=i,console.log("Texture du globe mise à jour avec succès"),this.createVideoSwitchEffect())}),t.addEventListener("error",i=>{console.error("Erreur lors du chargement de la nouvelle vidéo:",i),console.log("Tentative de retour à la vidéo précédente..."),this.isAlternateVideo=!this.isAlternateVideo}),t.load(),t.play().catch(i=>{console.error("Erreur lors de la lecture de la nouvelle vidéo:",i)})}createVideoSwitchEffect(){const e=document.createElement("div");e.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 204, 0, 0.3);
            pointer-events: none;
            z-index: 50;
            opacity: 0;
        `,this.container.appendChild(e),c.timeline().to(e,{opacity:1,duration:.1,ease:"power2.out"}).to(e,{opacity:0,duration:.3,ease:"power2.out",onComplete:()=>{e.remove()}}),this.showVideoSwitchNotification()}showVideoSwitchNotification(){const e=document.createElement("div");e.textContent=this.isAlternateVideo?"Mode Aberration Activé":"Mode Normal Activé",e.style.cssText=`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 10, 30, 0.9);
            color: #ffcc00;
            padding: 15px 25px;
            border-radius: 8px;
            font-family: 'Roboto Mono', monospace;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            border: 2px solid #ffcc00;
            box-shadow: 0 0 20px rgba(255, 204, 0, 0.5);
            z-index: 100;
            pointer-events: none;
            opacity: 0;
            letter-spacing: 1px;
        `,this.container.appendChild(e),c.timeline().to(e,{opacity:1,scale:1.1,duration:.3,ease:"back.out(1.7)"}).to(e,{scale:1,duration:.2}).to(e,{opacity:0,scale:.9,duration:.5,delay:1.5,ease:"power2.in",onComplete:()=>{e.remove()}})}addLogo(){const e=document.createElement("div");e.style.cssText=`
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
        `;const t=document.createElement("img");t.src=T("nat-geo-logo.png"),t.alt="National Geographic",t.style.cssText=`
            height: 40px;
            width: auto;
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
        `,e.appendChild(t),this.container.appendChild(e)}setupLighting(){const e=new L(4210768,.5);this.scene.add(e);const t=new A(16777215,1);t.position.copy(this.celestialParams.sunPosition),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,this.scene.add(t),this.sunLight=t;const i=new ee(35071,65416,.6);this.scene.add(i)}createCelestialBodies(){const e=new q,t=e.load(T("sun-texture.jpg")),i=new v(3,32,32),o=new C({map:t,transparent:!0,opacity:.95}),n=new y(i,o);n.position.copy(this.celestialParams.sunPosition),this.scene.add(n);const s=e.load(T("moon-texture.jpg")),a=new v(1.5,32,32),r=new te({map:s}),l=new y(a,r);l.position.copy(this.celestialParams.moonPosition),this.scene.add(l),this.sun=n,this.moon=l}createOrbitPath(){const e=[];for(let n=0;n<=100;n++){const s=n/100*Math.PI*2,a=this.orbitParams.ellipseMajorAxis,r=this.orbitParams.ellipseMinorAxis,l=this.orbitParams.inclination;let p=a*Math.cos(s),u=r*Math.sin(s);const m=u*Math.sin(l);u=u*Math.cos(l),e.push(new x(p,m,u))}new oe().setFromPoints(e);const i=new v(.2,16,16),o=new C({color:16763904,transparent:!0,opacity:.9});this.cameraMarker=new y(i,o),this.scene.add(this.cameraMarker)}createGlobe(){const e=document.createElement("video");e.src=this.currentVideoPath,e.loop=!0,e.muted=!0,e.autoplay=!0,e.playsInline=!0,e.crossOrigin="anonymous",this.videoElement=e,e.addEventListener("ended",()=>{e.play()}),setInterval(()=>{e.paused&&!e.ended&&(console.log("Vidéo en pause, relance..."),e.play().catch(l=>{console.error("Impossible de relancer la vidéo:",l)}))},1e3),this.videoTexture=new B(e),this.videoTexture.minFilter=P,this.videoTexture.magFilter=P,this.videoTexture.format=D,this.videoTexture.colorSpace=O;const t=new v(1.99,64,64),i=new C({color:0,transparent:!0,opacity:0,colorWrite:!1,depthWrite:!0,side:H}),o=new y(t,i);o.renderOrder=0,this.scene.add(o),this.depthSphere=o;const n=new v(2,64,64),s=new C({map:this.videoTexture,transparent:!0,opacity:1,side:H,depthTest:!0,depthWrite:!1,color:16777215,toneMapped:!1});this.globe=new y(n,s),this.globe.castShadow=!0,this.globe.receiveShadow=!0,this.globe.renderOrder=1,this.scene.add(this.globe),this.createAtmosphere();const a=new v(2.02,64,64),r=new C({color:16777215,transparent:!0,opacity:.4,alphaTest:.1,depthTest:!0,depthWrite:!1});this.clouds=new y(a,r),this.clouds.renderOrder=2,this.scene.add(this.clouds),e.play().catch(l=>{console.error("Erreur lors de la lecture de la vidéo:",l),this.handleVideoError()})}createAtmosphere(){const e=new v(2.08,64,64),t=new $({vertexShader:`
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 viewerPosition;  // CHANGÉ: cameraPosition -> viewerPosition
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            
            void main() {
                vec3 viewDirection = normalize(viewerPosition - vWorldPosition);
                float fresnel = 1.0 - abs(dot(viewDirection, vNormal));
                
                float distance = length(viewerPosition - vWorldPosition);
                float attenuation = 1.0 / (1.0 + distance * 0.05);
                
                vec3 atmosphereColor = vec3(0.3, 0.6, 1.0);
                
                float intensity = pow(fresnel, 1.5) * attenuation;
                
                gl_FragColor = vec4(atmosphereColor, intensity * 0.3);
            }
        `,uniforms:{viewerPosition:{value:new x}},blending:V,side:N,transparent:!0}),i=new y(e,t);this.scene.add(i),this.atmosphere=i,this.updateAtmosphereUniforms=()=>{this.atmosphere&&this.atmosphere.material.uniforms&&this.atmosphere.material.uniforms.viewerPosition.value.copy(this.camera.position)}}createSkybox(){const e=new q,t=T("night-sky.png");e.load(t,i=>{this.renderer.toneMapping=ie,this.renderer.toneMappingExposure=.3;const o=new se(i.image.height);o.fromEquirectangularTexture(this.renderer,i),this.scene.background=o.texture,this.scene.fog=new z(17,8e-5)},void 0,i=>{console.error("Erreur lors du chargement de la texture du ciel:",i),this.scene.background=new R(17)})}updateCameraPosition(){if(!this.orbitParams.isOrbiting)return;const e=this.orbitParams.ellipseMajorAxis*this.orbitParams.zoomLevel,t=this.orbitParams.ellipseMinorAxis*this.orbitParams.zoomLevel;let i=e*Math.cos(this.orbitParams.orbitAngle),o=t*Math.sin(this.orbitParams.orbitAngle);const n=this.orbitParams.inclination,s=o*Math.sin(n);o=o*Math.cos(n),this.camera.position.set(i,s,o),this.camera.lookAt(0,0,0),this.cameraMarker&&this.cameraMarker.position.set(i,s,o),this.orbitParams.orbitAngle+=this.orbitParams.currentSpeed,this.orbitParams.orbitHistory.push(new x(i,s,o)),this.orbitParams.orbitHistory.length>100&&this.orbitParams.orbitHistory.shift()}_updateCameraPositionManual(){const e=this.orbitParams.ellipseMajorAxis*this.orbitParams.zoomLevel,t=this.orbitParams.ellipseMinorAxis*this.orbitParams.zoomLevel;let i=e*Math.cos(this.orbitParams.orbitAngle),o=t*Math.sin(this.orbitParams.orbitAngle);const n=this.orbitParams.inclination,s=o*Math.sin(n);o=o*Math.cos(n),this.camera.position.set(i,s,o),this.camera.lookAt(0,0,0),this.cameraMarker&&this.cameraMarker.position.copy(this.camera.position)}addHotspots(e){this.hotspotObjects.forEach(t=>{this.scene.remove(t),t.userData.labelContainer&&document.body.removeChild(t.userData.labelContainer)}),this.hotspotObjects=[],e.forEach(t=>{const{position:i,title:o}=t,n=i.lat*(Math.PI/180),s=i.lng*(Math.PI/180),a=2.1,r=a*Math.cos(n)*Math.cos(s),l=a*Math.sin(n),p=a*Math.cos(n)*Math.sin(s);console.log(`Hotspot ${o}: GPS(${i.lat}, ${i.lng}) -> 3D(${r.toFixed(2)}, ${l.toFixed(2)}, ${p.toFixed(2)})`);const u=new v(.05,16,16),m=new C({color:16763904,transparent:!0,opacity:.8}),h=new y(u,m);h.position.set(r,l,p),h.userData={hotspot:t};const E=new v(.08,16,16),w=new C({color:16763904,transparent:!0,opacity:.5,side:N}),M=new y(E,w);h.add(M),this.addHotspotLabel(h,o,new x(r,l,p)),this.scene.add(h),this.hotspotObjects.push(h)})}addHotspotLabel(e,t,i){const o=document.createElement("div");o.className="hotspot-label-container",o.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 10;
        `;const n=document.createElement("div");n.className="hotspot-label",n.textContent=t,n.style.cssText=`
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
        `;const s=document.createElement("div");s.className="connector-line",s.style.cssText=`
            position: absolute;
            background: linear-gradient(to right, rgba(255, 204, 0, 0.9), rgba(255, 204, 0, 0.3));
            height: 1.5px;
            transform-origin: 0 0;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 10;
            box-shadow: 0 0 4px rgba(255, 204, 0, 0.5);
        `,o.appendChild(n),o.appendChild(s),document.body.appendChild(o),e.userData.label=n,e.userData.connector=s,e.userData.labelContainer=o,e.userData.worldPosition=i.clone();const a=r=>{const l=new x().copy(r).project(this.camera);if(l.z>1||l.x<-1||l.x>1||l.y<-1||l.y>1)return!1;const p=new x().subVectors(r,this.camera.position).normalize(),m=new k(this.camera.position,p).intersectObject(this.globe);if(m.length>0){const h=m[0].distance,E=this.camera.position.distanceTo(r);return h>E-.1}return!0};e.onBeforeRender=()=>{if(!e.userData.label||!e.userData.connector)return;if(a(e.userData.worldPosition)&&!this.orbitParams.inHotspotMode){const l=e.userData.worldPosition.clone();l.project(this.camera);const p=(l.x*.5+.5)*window.innerWidth,u=(-l.y*.5+.5)*window.innerHeight,m=window.innerWidth/2,h=window.innerHeight/2,E=Math.sqrt(Math.pow(p-m,2)+Math.pow(u-h,2)),w=Math.atan2(u-h,p-m),M=Math.min(m,h)*.6;let f,b;if(E<M){const S=M+60+Math.sin(w*5)*20;f=m+Math.cos(w)*S,b=h+Math.sin(w)*S;const g=20;f<g&&(f=g),f>window.innerWidth-g&&(f=window.innerWidth-g),b<g&&(b=g),b>window.innerHeight-g&&(b=window.innerHeight-g)}else{const S=t.length*8,g=25+S*.25,I=10;p+g+S>window.innerWidth-20?f=p-g-S:f=p+g,u-I-30<20?b=u+I:b=u-I}e.userData.label.style.left=`${f}px`,e.userData.label.style.top=`${b}px`,e.userData.label.style.opacity="1",s.style.left=`${p}px`,s.style.top=`${u}px`;const W=Math.sqrt(Math.pow(f-p,2)+Math.pow(b-u,2)),Y=Math.atan2(b-u,f-p);s.style.width=`${W}px`,s.style.transform=`rotate(${Y}rad)`,s.style.opacity="1",s.style.animation="pulseConnector 2s infinite alternate"}else e.userData.label.style.opacity="0",s.style.opacity="0"}}onMouseClick(e){if(this.orbitParams.inHotspotMode)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObject(this.globe);if(t.length>0){const o=t[0].point,s=Math.acos(o.y/2),a=Math.atan2(o.z,o.x),r=90-s*180/Math.PI,l=a*180/Math.PI-180;console.log(`Clic sur le globe à lat: ${r.toFixed(2)}, lng: ${l.toFixed(2)}`);const p=this._findNearestHotspot(r,l,10);if(p){console.log(`Hotspot trouvé: ${p.title}`),this.activateHotspot(p);return}}const i=this.raycaster.intersectObjects(this.hotspotObjects);if(i.length>0){const o=i[0].object.userData.hotspot;console.log(`Hotspot sélectionné par raycasting: ${o.title}`),this.activateHotspot(o)}}_findNearestHotspot(e,t,i){let o=null,n=i;const s=this.hotspotObjects.map(a=>a.userData.hotspot).filter(Boolean);for(const a of s){const r=a.position.lat,l=a.position.lng,p=Math.sqrt(Math.pow(r-e,2)+Math.pow(l-t,2));p<n&&(n=p,o=a)}return o}activateHotspot(e){if(this.orbitParams.inHotspotMode)return;console.log(`=== ACTIVATION HOTSPOT: ${e.title} ===`);const t=e.position.lat*(Math.PI/180),i=e.position.lng*(Math.PI/180),o=2.1,n=o*Math.cos(t)*Math.cos(i),s=o*Math.sin(t),a=o*Math.cos(t)*Math.sin(i),r=new x(n,s,a);this.createScanEffect(e.position),this.orbitParams.isOrbiting=!1;const u=r.clone().normalize().multiplyScalar(3.5);c.to(this.camera.position,{x:u.x,y:u.y,z:u.z,duration:1.5,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(0,0,0)},onComplete:()=>{this.orbitParams.inHotspotMode=!0,this._redirectToExternalPage(e)}}),c.to(this.camera,{fov:40,duration:1.5,ease:"power2.inOut",onUpdate:()=>{this.camera.updateProjectionMatrix()}})}_redirectToExternalPage(e){console.log("=== REDIRECTION VERS PAGE EXTERNE ===");const t=document.createElement("div");t.style.cssText=`
           position: fixed;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           background-color: rgba(0, 0, 0, 0);
           z-index: 9999;
           pointer-events: none;
       `,document.body.appendChild(t),c.to(t,{backgroundColor:"rgba(0, 0, 0, 1)",duration:1,ease:"power2.inOut",onComplete:()=>{const i=de(e.id);console.log(`Redirection vers: ${i}`),window.location.href=i}})}createScanEffect(e){const t=(90-e.lat)*(Math.PI/180),i=(e.lng+180)*(Math.PI/180),o=-(2.1*Math.sin(t)*Math.cos(i)),n=2.1*Math.cos(t),s=2.1*Math.sin(t)*Math.sin(i),a=new ne(0,.3,32),r=new $({uniforms:{color:{value:new R(16763904)},time:{value:0}},vertexShader:`
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
           `,side:ae,transparent:!0,blending:V,depthWrite:!1}),l=new y(a,r);l.position.set(o,n,s),l.lookAt(0,0,0),this.scene.add(l);let p=performance.now();const u=()=>{const m=(performance.now()-p)/1e3;r.uniforms.time.value=m,m<2?requestAnimationFrame(u):(this.scene.remove(l),l.geometry.dispose(),r.dispose())};u(),c.to(l.scale,{x:4,y:4,z:1,duration:2,ease:"power1.out"}),c.to(r.uniforms.color.value,{r:1,g:.8,b:.2,duration:2,ease:"power1.out"})}exitHotspotMode(){this.orbitParams.inHotspotMode&&(console.log("Sortie du mode hotspot"),this.orbitParams.inHotspotMode=!1,c.to(this.camera,{fov:60,duration:1,ease:"power2.out",onUpdate:()=>{this.camera.updateProjectionMatrix()}}),setTimeout(()=>{this.orbitParams.isOrbiting=!0,this.orbitParams.currentSpeed=this.orbitParams.baseSpeed},500))}exitHotspotModeExternal(){this.exitHotspotMode()}handleVideoError(){console.log("Tentative de résolution de l'erreur vidéo..."),new q().load(T("video-placeholder.jpg"),t=>{this.globe&&this.globe.material&&(console.log("Application de la texture de secours"),this.globe.material.uniforms&&this.globe.material.uniforms.map?this.globe.material.uniforms.map.value=t:this.globe.material.map=t,this.globe.material.needsUpdate=!0)})}zoom(e){const t=e?.85:1.15,i=this.orbitParams.zoomLevel*t;this.orbitParams.zoomLevel=Math.min(Math.max(i,this.orbitParams.minZoomLevel),this.orbitParams.maxZoomLevel),c.to(this.camera.position,{x:this.camera.position.x*t,y:this.camera.position.y*t,z:this.camera.position.z*t,duration:.5,ease:"back.out(1.2)",onUpdate:()=>{this.camera.lookAt(0,0,0)}})}resetView(){this.orbitParams.zoomLevel=1,this.orbitParams.currentSpeed=this.orbitParams.baseSpeed;const e=this.orbitParams.ellipseMajorAxis,t=this.orbitParams.ellipseMinorAxis,i=this.orbitParams.inclination,o=this.orbitParams.orbitAngle,n=e*Math.cos(o),s=t*Math.sin(o),a=s*Math.sin(i),r=s*Math.cos(i);c.to(this.camera.position,{x:n,y:a,z:r,duration:1,ease:"elastic.out(1, 0.7)",onUpdate:()=>{this.camera.lookAt(0,0,0)}})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setHotspotSelectCallback(e){this.onHotspotSelect=e}setHotspotExitCallback(e){this.onHotspotExit=e}animate(){requestAnimationFrame(this.animate.bind(this)),this.clock.getDelta();const e=this.clock.getElapsedTime()*1e3;this.orbitParams.isOrbiting&&!this.orbitParams.inHotspotMode&&this.updateCameraPosition(),this.updateSkyboxTime&&this.updateSkyboxTime(e),this.hotspotObjects.forEach(t=>{if(t.children.length>0){const i=t.children[0],o=1+.2*Math.sin(e*.003);i.scale.set(o,o,o)}t.userData.label&&t.userData.worldPosition&&t.onBeforeRender()}),this.clouds&&(this.clouds.rotation.y+=1e-4),this.globe&&!this.orbitParams.inHotspotMode&&(this.globe.rotation.y+=2e-4),this.globe&&this.globe.material.uniforms&&this.globe.material.uniforms.time&&(this.globe.material.uniforms.time.value=e),this.videoElement&&this.videoElement.paused&&!this.videoElement.ended&&this.videoElement.play().catch(t=>{console.error("Erreur lors de la reprise de la vidéo:",t)}),this.renderer.render(this.scene,this.camera)}}class ue{constructor(e){this.container=e.container,this.effectsContainer=null,this.notificationContainer=null,this.init()}init(){this.effectsContainer=document.createElement("div"),this.effectsContainer.classList.add("effects-container"),this.effectsContainer.style.position="absolute",this.effectsContainer.style.top="0",this.effectsContainer.style.left="0",this.effectsContainer.style.width="100%",this.effectsContainer.style.height="100%",this.effectsContainer.style.pointerEvents="none",this.effectsContainer.style.zIndex="5",this.container.appendChild(this.effectsContainer),this.createNotificationContainer()}createNotificationContainer(){this.notificationContainer=document.createElement("div"),this.notificationContainer.className="notification-container",this.notificationContainer.style.cssText=`
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
        `,this.container.appendChild(this.notificationContainer)}transitionIn(){const e=document.createElement("div");e.classList.add("transition-overlay"),e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="#000000",e.style.zIndex="10",this.effectsContainer.appendChild(e),c.fromTo(e,{opacity:1},{opacity:0,duration:1.5,ease:"power2.out",onComplete:()=>{e.remove()}})}transitionOut(e){const t=document.createElement("div");t.classList.add("transition-overlay"),t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.backgroundColor="#000000",t.style.zIndex="10",t.style.opacity="0",this.effectsContainer.appendChild(t),c.to(t,{opacity:1,duration:1,ease:"power2.in",onComplete:()=>{e&&e()}})}createOrbitalLoaderEffect(e,t=4){const i=document.createElement("div");i.className="orbital-loader",i.style.cssText=`
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
        `;const o=document.createElement("div");o.style.cssText=`
            width: 200px;
            height: 200px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        `;for(let r=0;r<3;r++){const l=document.createElement("div");l.style.cssText=`
                position: absolute;
                border-radius: 50%;
                border: 2px solid rgba(255, 204, 0, ${.7-r*.2});
                width: ${120+r*40}px;
                height: ${120+r*40}px;
                animation: orbit${r} ${4-r*.5}s linear infinite;
            `;for(let p=0;p<3+r;p++){const u=document.createElement("div"),m=360/(3+r)*p;u.style.cssText=`
                    position: absolute;
                    width: ${8-r}px;
                    height: ${8-r}px;
                    background-color: #ffcc00;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    box-shadow: 0 0 10px #ffcc00;
                    transform: translate(-50%, -50%) rotate(${m}deg) translateX(${60+r*20}px);
                `,l.appendChild(u)}o.appendChild(l)}const n=document.createElement("div");n.style.cssText=`
            width: 20px;
            height: 20px;
            background-color: #ffcc00;
            border-radius: 50%;
            box-shadow: 0 0 20px #ffcc00;
            animation: pulse 2s ease-in-out infinite;
        `,o.appendChild(n);const s=document.createElement("div");s.style.cssText=`
            position: absolute;
            bottom: 30%;
            text-align: center;
            color: #ffcc00;
            font-family: 'Roboto Mono', monospace;
            font-size: 16px;
            letter-spacing: 2px;
        `,s.textContent="INITIALISATION DU SYSTÈME...",i.appendChild(o),i.appendChild(s);const a=document.createElement("style");a.textContent=`
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
        `,document.head.appendChild(a),this.effectsContainer.appendChild(i),c.fromTo(i,{opacity:0},{opacity:1,duration:.5}),setTimeout(()=>{c.to(i,{opacity:0,duration:.5,onComplete:()=>{i.remove(),a.remove(),e&&e()}})},t*1e3)}highlightSelection(e){const t=document.createElement("div");t.classList.add("highlight-effect"),t.style.position="absolute",t.style.width="100px",t.style.height="100px",t.style.borderRadius="50%",t.style.border="2px solid #ffcc00",t.style.boxShadow="0 0 20px rgba(255, 204, 0, 0.5)",t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="none",t.style.top="50%",t.style.left="50%",this.effectsContainer.appendChild(t),c.fromTo(t,{scale:.5,opacity:0},{scale:1.5,opacity:.8,duration:.8,ease:"elastic.out(1, 0.3)",onComplete:()=>{c.to(t,{scale:2,opacity:0,duration:.5,delay:.3,onComplete:()=>{t.remove()}})}})}createRadarScanEffect(e,t={}){const o={...{radius:50,duration:1,color:"rgba(255, 204, 0, 0.4)",pulseCount:1},...t};for(let n=0;n<o.pulseCount;n++)setTimeout(()=>{const s=document.createElement("div");s.style.cssText=`
                    position: absolute;
                    top: ${e.y}px;
                    left: ${e.x}px;
                    width: 10px;
                    height: 10px;
                    background-color: transparent;
                    border: 2px solid ${o.color};
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 100;
                    pointer-events: none;
                `,this.effectsContainer.appendChild(s),c.to(s,{width:o.radius*2,height:o.radius*2,opacity:0,duration:o.duration,ease:"power2.out",onComplete:()=>{s.remove()}})},n*(o.duration*300))}flashScreen(e="#ffffff"){const t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.backgroundColor=e,t.style.pointerEvents="none",t.style.zIndex="20",t.style.opacity="0",this.effectsContainer.appendChild(t),c.timeline().to(t,{opacity:.7,duration:.1}).to(t,{opacity:0,duration:.3,onComplete:()=>{t.remove()}})}showNotification(e,t="info",i=3e3){this.notificationContainer||this.createNotificationContainer();const o=document.createElement("div");o.className="notification";let n="",s="#2196F3";switch(t){case"success":n="✓",s="#4CAF50";break;case"warning":n="!",s="#FF9800";break;case"error":n="✗",s="#F44336";break;default:n="i",s="#2196F3"}o.innerHTML=`
            <div class="notification-icon" style="background-color: ${s};">${n}</div>
            <div class="notification-message">${e}</div>
        `,o.style.cssText=`
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
            border-left: 3px solid ${s};
            backdrop-filter: blur(5px);
        `;const a=o.querySelector(".notification-icon");a&&(a.style.cssText=`
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                color: white;
                font-weight: bold;
                flex-shrink: 0;
            `);const r=o.querySelector(".notification-message");r&&(r.style.cssText=`
                flex: 1;
                line-height: 1.4;
            `),this.notificationContainer.appendChild(o),c.fromTo(o,{opacity:0,x:50},{opacity:1,x:0,duration:.4,ease:"power2.out"}),setTimeout(()=>{c.to(o,{opacity:0,x:50,duration:.4,ease:"power2.in",onComplete:()=>{o.remove()}})},i)}showSystemMessage(e){const t=document.createElement("div");t.className="system-message",t.textContent=e,t.style.cssText=`
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
        `,this.effectsContainer.appendChild(t),c.timeline().to(t,{y:0,opacity:1,duration:.5,ease:"power2.out"}).to(t,{y:-10,opacity:0,duration:.5,delay:3,ease:"power2.in",onComplete:()=>{t.remove()}})}addBackgroundParticles(e={}){const i={...{count:50,container:this.container},...e},o=document.createElement("div");o.className="background-particles",o.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
        `;for(let n=0;n<i.count;n++){const s=document.createElement("div"),a=Math.random()*3+1,r=Math.random()*100,l=Math.random()*100,p=Math.random()*5,u=Math.random()*10+10,m=Math.random()*.5+.1;s.style.cssText=`
                position: absolute;
                width: ${a}px;
                height: ${a}px;
                background-color: rgba(255, 255, 255, ${m});
                border-radius: 50%;
                top: ${l}%;
                left: ${r}%;
                box-shadow: 0 0 ${a*2}px rgba(255, 255, 255, ${m*.8});
            `,c.to(s,{y:`${Math.random()*20-10}%`,x:`${Math.random()*20-10}%`,opacity:Math.random()*.5+.1,duration:u,delay:p,repeat:-1,yoyo:!0,ease:"sine.inOut"}),o.appendChild(s)}i.container.appendChild(o)}}class he{constructor(e){this.globeManager=e.globeManager,this.visualEffects=e.visualEffects,this.isDragging=!1,this.lastTouchTime=0,this.touchTimeout=null,this.mouseStartY=0,this.mouseStartX=0,this.scrollAmount=0,this.lastPosition={x:0,y:0},this.scrollTimerId=null,this.scrollSpeed=0,this.lastScrollTime=0,this.scrollAccumulator=0,this.inertiaEnabled=!0,this.velocityX=0,this.velocityY=0,this.inertiaAnimationId=null,this.zoomInertia=0,this.initialDistance=0,this.currentDistance=0,this.isPinching=!1,this.movementThreshold=5,this.swipeThreshold=80,this.hasMoved=!1,this.interfaceVisible=!0,this.autoHideTimeout=null,this.init()}init(){this.globeManager.container.addEventListener("wheel",this.handleMouseWheel.bind(this),{passive:!1}),document.addEventListener("keydown",this.handleKeyDown.bind(this)),document.addEventListener("mousemove",this.resetInterfaceAutoHide.bind(this)),this.startInterfaceAutoHide(),console.log("=== INTERACTIONS INITIALISÉES ==="),console.log("- Scroll: Activé (contrôle vitesse orbite)"),console.log("- Clic: Activé (sélection hotspots)"),console.log("- Glissement: DÉSACTIVÉ"),console.log("- Touch: DÉSACTIVÉ"),console.log("- Touche Entrée: GÉRÉE PAR GLOBEMANAGER (changement vidéo)")}handleTouchMove(e){if(this.isDragging){if(e.preventDefault(),this.globeManager.orbitParams.inHotspotMode&&e.touches.length===1){const t=e.touches[0].clientY,i=t-this.mouseStartY;this.scrollAmount+=i,this.scrollAmount>150&&(this.globeManager.exitHotspotModeExternal(),this.scrollAmount=0),this.mouseStartY=t}else if(e.touches.length===1){const t=e.touches[0].clientX,i=e.touches[0].clientY,o=t-this.lastPosition.x,n=i-this.lastPosition.y;(Math.abs(o)>this.movementThreshold||Math.abs(n)>this.movementThreshold)&&(this.hasMoved=!0),this.velocityX=.8*this.velocityX+.2*o,this.velocityY=.8*this.velocityY+.2*n,this.globeManager.orbitParams.orbitAngle-=o*.005,this.lastPosition={x:t,y:i},typeof this.globeManager._updateCameraPositionManual=="function"&&this.globeManager._updateCameraPositionManual()}}}handleMouseWheel(e){if(e.preventDefault(),this.showInterface(),this.resetInterfaceAutoHide(),this.globeManager.orbitParams.inHotspotMode){const a=e.deltaY<0;this.globeManager.zoom(a);return}const t=Date.now(),i=t-this.lastScrollTime;if(this.lastScrollTime=t,this.scrollAccumulator+=e.deltaY,i<50&&this.scrollTimerId)return;this.scrollTimerId&&clearTimeout(this.scrollTimerId);const o=Math.sign(this.scrollAccumulator),n=Math.min(Math.abs(this.scrollAccumulator)/100,2),s=this.globeManager.orbitParams.currentSpeed;o>0?(this.globeManager.orbitParams.currentSpeed=Math.max(this.globeManager.orbitParams.baseSpeed*.5,this.globeManager.orbitParams.currentSpeed*Math.pow(this.globeManager.orbitParams.decelerationFactor,n)),this.visualEffects&&Math.abs(s-this.globeManager.orbitParams.currentSpeed)>1e-4):(this.globeManager.orbitParams.currentSpeed=Math.min(this.globeManager.orbitParams.maxSpeed,this.globeManager.orbitParams.currentSpeed*Math.pow(this.globeManager.orbitParams.accelerationFactor,n)),this.visualEffects&&Math.abs(s-this.globeManager.orbitParams.currentSpeed)>1e-4),this.scrollAccumulator=0,this.scrollTimerId=setTimeout(()=>{c.to(this.globeManager.orbitParams,{currentSpeed:this.globeManager.orbitParams.baseSpeed,duration:3,ease:"power2.out",onComplete:()=>{this.visualEffects&&this.visualEffects.showNotification("Vitesse d'orbite normalisée","info",1e3)}}),this.scrollTimerId=null},3e3)}handleKeyDown(e){switch(this.showInterface(),this.resetInterfaceAutoHide(),e.key){case"Escape":this.globeManager.orbitParams.inHotspotMode&&(this.globeManager.exitHotspotModeExternal(),this.visualEffects&&(this.visualEffects.flashScreen("rgba(0, 0, 0, 0.4)"),this.visualEffects.showNotification("Retour à l'exploration globale","info",2e3)));break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":e.preventDefault(),this.globeManager.orbitParams.inHotspotMode&&e.key==="ArrowDown"?(this.globeManager.exitHotspotModeExternal(),this.visualEffects&&(this.visualEffects.flashScreen("rgba(0, 0, 0, 0.4)"),this.visualEffects.showNotification("Retour à l'exploration globale","info",2e3))):this.handleArrowNavigation(e.key);break;case"+":case"=":this.globeManager.zoom(!0);break;case"-":case"_":this.globeManager.zoom(!1);break;case"r":case"R":this.globeManager.resetView(),this.visualEffects&&(this.visualEffects.flashScreen("rgba(255, 255, 255, 0.2)"),this.visualEffects.showNotification("Vue réinitialisée","info",2e3));break;case"h":case"H":this.toggleInterface();break}}handleArrowNavigation(e){try{const t=this.globeManager.orbitParams.orbitAngle,i=this.globeManager.orbitParams.isOrbiting;switch(this.globeManager.orbitParams.isOrbiting=!1,e){case"ArrowLeft":this.globeManager.orbitParams.orbitAngle+=.05;break;case"ArrowRight":this.globeManager.orbitParams.orbitAngle-=.05;break;case"ArrowUp":if(!this.globeManager.orbitParams.inHotspotMode){const o=this.globeManager.orbitParams.inclination;this.globeManager.orbitParams.inclination=Math.min(o+.03,Math.PI/3)}break;case"ArrowDown":if(!this.globeManager.orbitParams.inHotspotMode){const o=this.globeManager.orbitParams.inclination;this.globeManager.orbitParams.inclination=Math.max(o-.03,.1)}break}typeof this.globeManager._updateCameraPositionManual=="function"&&this.globeManager._updateCameraPositionManual(),setTimeout(()=>{this.globeManager.orbitParams.isOrbiting=i},500)}catch(t){console.error("Erreur lors de la navigation par flèches:",t),this.globeManager&&this.globeManager.orbitParams&&(this.globeManager.orbitParams.orbitAngle=backupAngle,this.globeManager.orbitParams.isOrbiting=!0)}}startInterfaceAutoHide(){this.autoHideTimeout&&clearTimeout(this.autoHideTimeout),this.autoHideTimeout=setTimeout(()=>{this.hideInterface()},1e4)}resetInterfaceAutoHide(){this.showInterface(),this.startInterfaceAutoHide()}hideInterface(){if(!this.interfaceVisible)return;this.interfaceVisible=!1;const e=document.getElementById("ui-controls"),t=document.querySelectorAll(".satellite-hud, .coordinates-display"),i=document.querySelector(".satellite-crosshair");c.to(e,{opacity:0,y:20,duration:.5,ease:"power2.inOut"}),c.to([...t,i],{opacity:0,duration:.5,ease:"power2.inOut"}),setTimeout(()=>{this.interfaceVisible||(e.style.pointerEvents="none")},500)}showInterface(){if(this.interfaceVisible)return;this.interfaceVisible=!0;const e=document.getElementById("ui-controls"),t=document.querySelectorAll(".satellite-hud, .coordinates-display"),i=document.querySelector(".satellite-crosshair");e.style.pointerEvents="auto",c.to(e,{opacity:1,y:0,duration:.5,ease:"power2.out"}),c.to([...t,i],{opacity:1,duration:.5,ease:"power2.out"})}toggleInterface(){this.interfaceVisible?this.hideInterface():(this.showInterface(),this.startInterfaceAutoHide())}}class me{constructor(e){this.options=e,this.zoomInBtn=e.zoomInBtn,this.zoomOutBtn=e.zoomOutBtn,this.resetViewBtn=e.resetViewBtn,this.infoBtn=e.infoBtn,this.closeInfoBtn=e.closeInfoBtn,this.infoOverlay=e.infoOverlay,this.globeManager=e.globeManager,this.isInfoVisible=!1,this.buttons=[],this.notificationContainer=null,this.init()}init(){this.applyEnhancedStyles(),this.buttons=[this.zoomInBtn,this.zoomOutBtn,this.resetViewBtn,this.infoBtn],this.zoomInBtn.addEventListener("click",()=>{this.globeManager.zoom(!0),this.animateButtonClick(this.zoomInBtn)}),this.zoomOutBtn.addEventListener("click",()=>{this.globeManager.zoom(!1),this.animateButtonClick(this.zoomOutBtn)}),this.resetViewBtn.addEventListener("click",()=>{this.globeManager.resetView(),this.animateButtonClick(this.resetViewBtn)}),this.infoBtn.addEventListener("click",()=>{this.toggleInfoOverlay(),this.animateButtonClick(this.infoBtn)}),this.closeInfoBtn.addEventListener("click",()=>{this.hideInfoOverlay()}),this.createNotificationContainer(),this.animateButtonsIn()}applyEnhancedStyles(){const e=document.getElementById("ui-controls");e&&(e.style.cssText=`
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
`),(t?t.querySelectorAll("button"):[]).forEach(o=>{o.style.cssText=`
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
            `,o.addEventListener("mouseenter",()=>{c.to(o,{backgroundColor:"rgba(255, 204, 0, 0.9)",color:"#000000",borderColor:"#ffcc00",boxShadow:"0 2px 15px rgba(255, 204, 0, 0.5), 0 0 8px rgba(255, 204, 0, 0.7)",duration:.25})}),o.addEventListener("mouseleave",()=>{c.to(o,{backgroundColor:"rgba(0, 10, 30, 0.7)",color:"#ffcc00",borderColor:"rgba(255, 204, 0, 0.7)",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.3), 0 0 4px rgba(255, 204, 0, 0.4)",duration:.3})})}),this.infoBtn&&(this.infoBtn.style.cssText=`
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
            `,this.infoBtn.addEventListener("mouseenter",()=>{c.to(this.infoBtn,{backgroundColor:"rgba(255, 204, 0, 0.9)",color:"#000000",borderColor:"#ffcc00",boxShadow:"0 2px 15px rgba(255, 204, 0, 0.5), 0 0 8px rgba(255, 204, 0, 0.7)",duration:.3})}),this.infoBtn.addEventListener("mouseleave",()=>{c.to(this.infoBtn,{backgroundColor:"rgba(0, 10, 30, 0.7)",color:"#ffcc00",borderColor:"rgba(255, 204, 0, 0.7)",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.3), 0 0 4px rgba(255, 204, 0, 0.4)",duration:.3})})),this.infoOverlay){this.infoOverlay.style.cssText=`
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
            `;const o=this.infoOverlay.querySelector(".overlay-content");if(o){o.style.cssText=`
                    background: linear-gradient(to bottom, rgba(0, 40, 94, 0.9), rgba(0, 20, 47, 0.9));
                    padding: 40px;
                    border-radius: 10px;
                    max-width: 700px;
                    text-align: center;
                    position: relative;
                    border: 1px solid var(--nat-geo-yellow);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 204, 0, 0.3);
                `;const n=o.querySelector("h3");if(n&&(n.style.cssText=`
                        font-size: 2rem;
                        margin-bottom: 30px;
                        color: #ffcc00;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        font-family: 'Roboto Mono', monospace;
                        font-weight: 700;
                        text-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
                    `),o.querySelectorAll("p").forEach(a=>{a.style.cssText=`
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
                    `;const a=document.createElement("style");a.textContent=`
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
                    `,document.head.appendChild(a)}}}}createNotificationContainer(){this.notificationContainer=document.createElement("div"),this.notificationContainer.className="notifications-container",this.notificationContainer.style.cssText=`
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
        `,document.getElementById("main-container").appendChild(this.notificationContainer)}animateButtonsIn(){this.buttons.forEach(e=>{c.set(e,{opacity:0,y:20,scale:.8})}),this.buttons.forEach((e,t)=>{c.to(e,{opacity:1,y:0,scale:1,duration:.7,delay:1.5+t*.15,ease:"back.out(1.7)"})})}animateButtonClick(e){c.timeline().to(e,{scale:.85,duration:.15,ease:"power2.in"}).to(e,{scale:1,duration:.4,ease:"elastic.out(1.2, 0.5)"})}toggleInfoOverlay(){this.isInfoVisible?this.hideInfoOverlay():this.showInfoOverlay()}showInfoOverlay(){if(this.isInfoVisible)return;this.isInfoVisible=!0,this.infoOverlay.classList.add("visible"),c.to(this.infoOverlay,{opacity:1,duration:.4,ease:"power2.out",onStart:()=>{this.infoOverlay.style.pointerEvents="all"}});const e=this.infoOverlay.querySelector(".overlay-content");c.fromTo(e,{opacity:0,y:30,scale:.95},{opacity:1,y:0,scale:1,duration:.6,delay:.1,ease:"back.out(1.7)"}),e.querySelectorAll("h3, p, button").forEach((i,o)=>{c.fromTo(i,{opacity:0,y:20},{opacity:1,y:0,duration:.5,delay:.3+o*.1,ease:"power2.out"})})}hideInfoOverlay(){if(!this.isInfoVisible)return;this.isInfoVisible=!1;const e=this.infoOverlay.querySelector(".overlay-content");c.to(e,{opacity:0,y:30,scale:.95,duration:.4,ease:"power3.in"}),c.to(this.infoOverlay,{opacity:0,duration:.5,delay:.2,ease:"power2.in",onComplete:()=>{this.infoOverlay.classList.remove("visible"),this.infoOverlay.style.pointerEvents="none"}})}showNotification(e,t="info",i=3e3){const o=document.createElement("div");o.classList.add("notification",`notification-${t}`);let n="",s="#2196F3";switch(t){case"success":n="✓",s="#4CAF50";break;case"warning":n="!",s="#FF9800";break;case"error":n="✗",s="#F44336";break;default:n="i",s="#2196F3"}o.innerHTML=`
            <div class="notification-icon" style="background-color: ${s};">${n}</div>
            <div class="notification-message">${e}</div>
        `,o.style.cssText=`
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
            border-left: 3px solid ${s};
            backdrop-filter: blur(5px);
        `;const a=`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            color: white;
            font-weight: bold;
            flex-shrink: 0;
        `;o.querySelector(".notification-icon").style.cssText=a,o.querySelector(".notification-message").style.cssText=`
            flex: 1;
            line-height: 1.4;
        `,this.notificationContainer.appendChild(o),c.fromTo(o,{opacity:0,x:50},{opacity:1,x:0,duration:.4,ease:"power2.out"}),setTimeout(()=>{c.to(o,{opacity:0,x:50,duration:.4,ease:"power2.in",onComplete:()=>{o.remove()}})},i)}setUIVisibility(e){const t=e?1:0,i=e?0:20,o=e?"auto":"none",n=document.getElementById("ui-controls");n&&c.to(n,{opacity:t,y:i,duration:.4,ease:e?"power2.out":"power2.in",onComplete:()=>{n.style.pointerEvents=o}}),document.querySelectorAll(".satellite-hud, .coordinates-display").forEach(a=>{c.to(a,{opacity:t,duration:.4,ease:e?"power2.out":"power2.in"})})}showTooltip(e,t,i={}){const n={...{position:"top",duration:3e3,offset:10,className:""},...i},s=document.createElement("div");s.className=`tooltip ${n.className}`,s.textContent=t,s.style.cssText=`
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
        `,document.body.appendChild(s);const a=e.getBoundingClientRect();switch(n.position){case"top":s.style.bottom=`${window.innerHeight-a.top+n.offset}px`,s.style.left=`${a.left+a.width/2}px`,s.style.transform="translateX(-50%) scale(0.9)";break;case"bottom":s.style.top=`${a.bottom+n.offset}px`,s.style.left=`${a.left+a.width/2}px`,s.style.transform="translateX(-50%) scale(0.9)";break;case"left":s.style.top=`${a.top+a.height/2}px`,s.style.right=`${window.innerWidth-a.left+n.offset}px`,s.style.transform="translateY(-50%) scale(0.9)";break;case"right":s.style.top=`${a.top+a.height/2}px`,s.style.left=`${a.right+n.offset}px`,s.style.transform="translateY(-50%) scale(0.9)";break}return c.to(s,{opacity:1,scale:1,duration:.3,ease:"back.out(1.7)"}),setTimeout(()=>{c.to(s,{opacity:0,scale:.9,duration:.2,ease:"power2.in",onComplete:()=>{s.remove()}})},n.duration),{hide:()=>{c.to(s,{opacity:0,scale:.9,duration:.2,ease:"power2.in",onComplete:()=>{s.remove()}})}}}createMinimap(e,t){const i=document.createElement("div");i.className="minimap",i.style.cssText=`
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
        `;const o=document.createElement("div");o.style.cssText=`
            width: 100%;
            height: 100%;
            background-image: url('/public/images/map-outline.png');
            background-size: cover;
            background-position: center;
            opacity: 0.7;
        `,i.appendChild(o),[{id:"grande-barriere",x:150,y:70,name:"Grande Barrière"},{id:"abysses",x:50,y:60,name:"Abysses"},{id:"arctique",x:100,y:20,name:"Arctique"},{id:"plastique",x:80,y:50,name:"Pollution"},{id:"triangle-corail",x:130,y:60,name:"Triangle Corail"},{id:"requins",x:70,y:40,name:"Requins"}].forEach(r=>{const l=document.createElement("div");l.className="minimap-dot",l.dataset.id=r.id,l.title=r.name,l.style.cssText=`
                position: absolute;
                top: ${r.y}px;
                left: ${r.x}px;
                width: 6px;
                height: 6px;
                background-color: #ffcc00;
                border-radius: 50%;
                cursor: pointer;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 5px rgba(255, 204, 0, 0.7);
                transition: all 0.3s ease;
            `,l.addEventListener("mouseenter",()=>{c.to(l,{width:10,height:10,boxShadow:"0 0 10px rgba(255, 204, 0, 0.9)",duration:.3}),this.showTooltip(l,r.name,{position:"top",duration:2e3})}),l.addEventListener("mouseleave",()=>{c.to(l,{width:6,height:6,boxShadow:"0 0 5px rgba(255, 204, 0, 0.7)",duration:.3})}),l.addEventListener("click",()=>{t&&t(r.id)}),i.appendChild(l)});const s=document.createElement("div");s.className="minimap-toggle",s.innerHTML="−",s.style.cssText=`
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
        `;let a=!1;return s.addEventListener("click",()=>{a?(c.to(i,{height:100,duration:.3,ease:"power2.out"}),s.innerHTML="−"):(c.to(i,{height:30,duration:.3,ease:"power2.out"}),s.innerHTML="+"),a=!a}),i.appendChild(s),e.appendChild(i),c.fromTo(i,{y:50,opacity:0},{y:0,opacity:1,duration:.5,ease:"power2.out"}),{highlight:r=>{const l=i.querySelector(`.minimap-dot[data-id="${r}"]`);l&&c.to(l,{width:12,height:12,backgroundColor:"#ffffff",boxShadow:"0 0 15px rgba(255, 255, 255, 0.9)",duration:.5,repeat:3,yoyo:!0})},hide:()=>{c.to(i,{y:50,opacity:0,duration:.3,ease:"power2.in",onComplete:()=>{i.remove()}})},element:i}}}class fe{constructor(e){this.panel=e.panel,this.closeBtn=e.closeBtn,this.titleElement=e.titleElement,this.descriptionElement=e.descriptionElement,this.videoElement=e.videoElement,this.globeManager=e.globeManager,this.isVisible=!1,this.drawerToggle=null,this.drawer=null,this.drawerContent=null,this.isDrawerOpen=!1,this.panel&&this.closeBtn&&this.titleElement&&this.descriptionElement?this.init():(console.warn("ContentPanel: Éléments DOM manquants, panneau désactivé"),this.show=()=>{},this.hide=()=>{},this.update=()=>{})}init(){this.applyDesignSystem(),this.closeBtn&&this.closeBtn.addEventListener("click",()=>{this.hide(),this.globeManager.exitHotspotModeExternal()}),this.videoElement&&(this.videoElement.addEventListener("loadeddata",()=>{console.log("Vidéo chargée avec succès"),c.fromTo(this.videoElement,{opacity:0},{opacity:1,duration:.8,ease:"power2.out"})}),this.videoElement.addEventListener("error",()=>{console.error("Erreur lors du chargement de la vidéo"),this.videoElement.style.display="none";const e=document.createElement("img");e.src="/public/images/video-placeholder.jpg",e.alt="Vidéo non disponible",e.style.width="100%",e.style.borderRadius="3px";const t=this.videoElement.parentElement;t&&t.appendChild(e)})),this.createDrawerElements()}applyDesignSystem(){if(!this.panel){console.warn("ContentPanel.panel n'existe pas");return}this.panel.style.cssText=`
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
            `;const o=document.createElement("div");o.style.cssText=`
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background-color: #ffcc00;
            `,e.insertBefore(o,e.firstChild)}this.titleElement&&(this.titleElement.style.cssText=`
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
            `;const o=document.createElement("style");o.textContent=`
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
            `,document.head.appendChild(o)}const i=this.panel.querySelector("#video-container");if(i&&(i.style.cssText=`
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
            `;const o=document.createElement("style");o.textContent=`
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
            `,document.head.appendChild(o)}}createDrawerElements(){if(!this.panel)return;this.drawerToggle=document.createElement("div"),this.drawerToggle.className="drawer-toggle",this.drawerToggle.innerHTML='<span class="arrow up"></span>',this.drawerToggle.style.cssText=`
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
        `,this.drawer.appendChild(this.drawerContent),document.body.appendChild(this.drawer),this.drawerToggle.addEventListener("click",()=>{this.toggleDrawer()})}toggleDrawer(){this.isDrawerOpen?this.closeDrawer():this.openDrawer()}openDrawer(){if(this.isDrawerOpen||!this.drawer)return;this.isDrawerOpen=!0,this.drawer.style.display="block",c.to(this.drawer,{y:0,duration:.7,ease:"back.out(1.2)"});const e=this.drawerToggle.querySelector(".arrow");e&&(e.classList.remove("up"),e.classList.add("down")),this.drawerToggle&&c.to(this.drawerToggle,{bottom:"auto",top:-28,duration:.5}),this.panel&&c.to(this.panel,{scale:.95,opacity:.85,duration:.5,ease:"power2.out"})}closeDrawer(){if(!this.isDrawerOpen||!this.drawer)return;this.isDrawerOpen=!1,c.to(this.drawer,{y:"100%",duration:.5,ease:"power3.in",onComplete:()=>{this.drawer.style.display="none"}});const e=this.drawerToggle.querySelector(".arrow");e&&(e.classList.remove("down"),e.classList.add("up")),this.drawerToggle&&c.to(this.drawerToggle,{top:"auto",bottom:0,duration:.5}),this.panel&&c.to(this.panel,{scale:1,opacity:1,duration:.5,ease:"power2.out"})}update(e){if(!this.titleElement||!this.descriptionElement)return;this.titleElement.textContent=e.title||"Information";let t=e.description||"";if(e.coordinates&&(t=`
                <div class="coordinates">
                    <span class="coordinates-label">GPS:</span>
                    <span class="coordinates-value">${e.coordinates.lat.toFixed(4)}° N, ${e.coordinates.lng.toFixed(4)}° E</span>
                </div>
                ${t}
            `),this.descriptionElement.innerHTML=t,this.videoElement&&e.videoSrc){if(this.videoElement.style.display="block",this.videoElement.querySelector("source"))this.videoElement.querySelector("source").src=e.videoSrc;else{const i=document.createElement("source");i.src=e.videoSrc,i.type="video/mp4",this.videoElement.appendChild(i)}this.videoElement.load()}else this.videoElement&&(this.videoElement.style.display="none");if((e.detailedInfo||e.links)&&this.drawerContent){let i="";i+="<h3>INFORMATIONS COMPLÉMENTAIRES</h3>",e.detailedInfo&&(i+=`
                    <div class="detailed-info">
                        ${e.detailedInfo}
                    </div>
                `),e.links&&e.links.length>0&&(i+=`
                    <div class="external-links">
                        <h4>RESSOURCES SCIENTIFIQUES</h4>
                        <ul>
                `,e.links.forEach(o=>{i+=`<li><a href="${o.url}" target="_blank">${o.title}</a></li>`}),i+=`
                        </ul>
                    </div>
                `),this.drawerContent.innerHTML=i,this.drawerToggle&&(this.drawerToggle.style.display="flex")}else this.drawerToggle&&(this.drawerToggle.style.display="none")}show(){if(this.isVisible||!this.panel)return;this.isVisible=!0,this.panel.classList.remove("hidden"),this.panel.classList.add("visible"),this.closeDrawer(),c.fromTo(this.panel,{x:"100%",opacity:0,scale:.95},{x:"0%",opacity:1,scale:1,duration:.7,ease:"back.out(1.2)"});const e=document.getElementById("main-container");e&&c.to(e.querySelectorAll(":not(#content-panel)"),{filter:"blur(2px)",opacity:.8,duration:.5,ease:"power2.out"})}hide(){if(!this.isVisible||!this.panel)return;this.isVisible=!1,this.isDrawerOpen&&this.closeDrawer(),c.to(this.panel,{x:"100%",opacity:0,scale:.95,duration:.5,ease:"power3.in",onComplete:()=>{this.panel.classList.remove("visible"),this.panel.classList.add("hidden"),this.videoElement&&this.videoElement.pause()}});const e=document.getElementById("main-container");e&&c.to(e.querySelectorAll(":not(#content-panel)"),{filter:"blur(0px)",opacity:1,duration:.5,ease:"power2.out"})}}const G=[{id:"grande-barriere",title:"Grande Barrière de Corail",position:{lat:-18.2871,lng:147.6992},description:`
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
        `,evolutionData:[{year:1970,sharkPopulation:1},{year:1990,sharkPopulation:.8},{year:2e3,sharkPopulation:.68},{year:2010,sharkPopulation:.55},{year:2020,sharkPopulation:.44},{year:2025,sharkPopulation:.39,projected:!0}],sources:[{title:"État des populations de requins (IUCN Shark Specialist Group)",url:"https://www.iucnssg.org/"},{title:"Impact de la disparition des grands prédateurs marins (Shark Trust)",url:"https://www.sharktrust.org/"},{title:"Sanctuaires de requins et protection (PEW Charitable Trusts)",url:"https://www.pewtrusts.org/en/projects/global-shark-conservation"}]}];function ge(d){return G.find(e=>e.id===d)||null}class be{constructor(){this.globeManager=null,this.visualEffects=null,this.interaction=null,this.interfaceUI=null,this.contentPanel=null,this.isInitialized=!1,this.isExploring=!1,this.currentHotspot=null,this.explorationHistory=[],this.welcomeScreen=document.getElementById("welcome-screen"),this.mainContainer=document.getElementById("main-container"),this.loadingScreen=document.getElementById("loading-screen")}init(){if(console.log("Initialisation de l'application Mondes Immergés"),this.isInitialized)return;this.isInitialized=!0,this.createStarryBackground(),this.visualEffects=new ue({container:this.mainContainer}),this.globeManager=new pe({containerId:"globe-container",videoPath:"/public/videos/globe-video.mp4",skyTexturePath:"/public/images/night-sky.png"}),this.interaction=new he({globeManager:this.globeManager,visualEffects:this.visualEffects}),this.interfaceUI=new me({zoomInBtn:document.getElementById("zoom-in"),zoomOutBtn:document.getElementById("zoom-out"),resetViewBtn:document.getElementById("reset-view"),infoBtn:document.getElementById("info-button"),closeInfoBtn:document.getElementById("close-info"),infoOverlay:document.getElementById("info-overlay"),globeManager:this.globeManager});const e={panel:document.getElementById("content-panel"),closeBtn:document.getElementById("close-panel"),titleElement:document.getElementById("hotspot-title"),descriptionElement:document.getElementById("hotspot-description"),videoElement:document.getElementById("hotspot-video"),globeManager:this.globeManager};e.panel&&e.closeBtn&&e.titleElement&&e.descriptionElement?this.contentPanel=new fe(e):(console.warn("ContentPanel: Éléments DOM du panneau de contenu manquants, fonctionnalité désactivée"),this.contentPanel={show:()=>console.log("ContentPanel.show() appelé mais panneau désactivé"),hide:()=>console.log("ContentPanel.hide() appelé mais panneau désactivé"),update:()=>console.log("ContentPanel.update() appelé mais panneau désactivé")}),this.globeManager.setHotspotSelectCallback(this.handleHotspotSelect.bind(this)),this.globeManager.setHotspotExitCallback(this.handleHotspotExit.bind(this)),this.globeManager.animate(),this.globeManager.addHotspots(G),this.initSatelliteInterface(),this.setupEventListeners(),this.addNatGeoLogo(),console.log("Initialisation terminée avec succès")}setupEventListeners(){const e=document.getElementById("explore-btn");e&&e.addEventListener("click",()=>{this.startExploration()}),document.addEventListener("keydown",t=>{t.key===" "&&!this.isExploring&&this.startExploration(),t.key==="Escape"&&(this.currentHotspot?(this.globeManager.exitHotspotModeExternal(),this.currentHotspot=null):this.isExploring)}),window.addEventListener("resize",this.handleResize.bind(this))}startExploration(e=!1){this.isExploring||(this.welcomeScreen&&this.welcomeScreen.classList.add("hidden"),this.mainContainer&&this.mainContainer.classList.remove("hidden"),this.visualEffects.transitionIn(),e?(console.log("Séquence de démarrage fictive ignorée"),this.isExploring=!0):(setTimeout(()=>{this.startupSequence()},1e3),this.isExploring=!0))}returnToWelcomeScreen(){this.isExploring&&this.visualEffects.transitionOut(()=>{this.mainContainer&&this.mainContainer.classList.add("hidden"),this.welcomeScreen&&this.welcomeScreen.classList.remove("hidden"),this.isExploring=!1,this.currentHotspot=null,this.contentPanel&&this.contentPanel.hide&&this.contentPanel.hide(),this.globeManager&&this.globeManager.resetView()})}handleResize(){this.globeManager&&this.globeManager.renderer&&this.globeManager.onWindowResize()}createStarryBackground(){const e=document.createElement("div");e.className="starry-background",this.mainContainer.appendChild(e)}addNatGeoLogo(){const e=document.createElement("div");e.style.cssText=`
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
        `;const t=document.createElement("img");t.src=T("nat-geo-logo.png"),t.alt="National Geographic",t.style.cssText=`
            height: 40px;
            width: auto;
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
        `,e.appendChild(t),this.mainContainer.appendChild(e)}initSatelliteInterface(){const e=document.getElementById("coord-lat"),t=document.getElementById("coord-lng"),i=document.getElementById("zoom-level"),o=document.getElementById("orbit-status"),n=document.getElementById("altitude-value"),s=document.getElementById("current-date"),a=document.getElementById("current-time");setInterval(()=>{const r=new Date,l={day:"2-digit",month:"2-digit",year:"numeric"};s&&(s.textContent=r.toLocaleDateString("fr-FR",l));const p=String(r.getUTCHours()).padStart(2,"0"),u=String(r.getUTCMinutes()).padStart(2,"0"),m=String(r.getUTCSeconds()).padStart(2,"0");if(a&&(a.textContent=`${p}:${u}:${m}`),this.globeManager&&this.globeManager.camera){const h=this.globeManager.camera.position,E=Math.sqrt(h.x*h.x+h.z*h.z),w=Math.atan2(h.z,h.x)*(180/Math.PI),M=Math.atan2(h.y,E)*(180/Math.PI);e&&(e.textContent=Math.abs(M).toFixed(4)+(M>=0?"":"-")),t&&(t.textContent=Math.abs(w).toFixed(4)+(w>=0?"":"-"));const f=h.length();n&&(n.textContent=f.toFixed(3)),i&&this.globeManager.orbitParams&&(i.textContent=this.globeManager.orbitParams.zoomLevel.toFixed(1)),o&&this.globeManager.orbitParams&&(this.globeManager.orbitParams.inHotspotMode?(o.textContent="FIXÉE",o.style.color="#ffcc00"):this.globeManager.orbitParams.currentSpeed>this.globeManager.orbitParams.baseSpeed*1.5?(o.textContent="ACCÉLÉRÉE",o.style.color="#ff9900"):this.globeManager.orbitParams.currentSpeed<this.globeManager.orbitParams.baseSpeed?(o.textContent="RALENTIE",o.style.color="#66ccff"):(o.textContent="NORMALE",o.style.color="#ffffff"))}},100)}startupSequence(){const e=document.createElement("div");e.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(5px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 250;
        color: white;
        font-family: 'Roboto Mono', monospace;
        font-size: 12px;
        padding: 40px;
        box-sizing: border-box;
    `,this.visualEffects.createOrbitalLoaderEffect(()=>{this.finalizeStartup()},4);const t=document.createElement("div");t.style.cssText=`
            max-width: 800px;
            margin: 0 auto;
        `,e.appendChild(t),document.body.appendChild(e);const i=["Initialisation du système de navigation...","Chargement des modules cartographiques...","Calibration des capteurs océanographiques...","Établissement de la liaison satellite...","Chargement des données bathymétriques...","Analyse des courants marins...","Détection des points d'intérêt...","Optimisation de l'interface scientifique...","Calcul de l'orbite ellipsoïdale...","Système opérationnel. Bienvenue à bord."];let o=0;const n=setInterval(()=>{if(o<i.length){const s=document.createElement("div");s.className="startup-message",s.innerHTML=`<span style="color: #66ccff;">[SYSTÈME]</span> ${i[o]}`,s.style.cssText=`
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
                `,t.appendChild(s),setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},50),o++}else clearInterval(n),setTimeout(()=>{e.style.transition="opacity 1s ease",e.style.opacity="0",setTimeout(()=>{e.remove()},1e3)},1e3)},400)}finalizeStartup(){this.showSystemMessages(),this.visualEffects.addBackgroundParticles({count:30,container:this.mainContainer}),setTimeout(()=>{this.visualEffects.showNotification("Bienvenue dans l'exploration des Mondes Immergés","info",4e3)},1e3)}showSystemMessages(){}handleHotspotSelect(e){console.log(`Point d'intérêt sélectionné: ${e.title}`),this.currentHotspot=e,this.explorationHistory.push({id:e.id,title:e.title,timestamp:Date.now()}),this.visualEffects.highlightSelection(e.position),this.visualEffects.flashScreen("rgba(255, 204, 0, 0.2)");const t=document.querySelector(".coordinates-display");t&&(t.style.backgroundColor="rgba(255, 204, 0, 0.2)",t.style.borderColor="rgba(255, 204, 0, 0.8)");const i=ge(e.id),o=this.generateDetailedInfoHTML(i),n=i.sources||[{title:"Étude scientifique de référence (National Geographic)",url:"https://www.nationalgeographic.com/environment/oceans"},{title:"Base de données océanographiques (NOAA)",url:"https://www.noaa.gov/oceans-coasts"},{title:"Conservation marine (UNESCO)",url:"https://en.unesco.org/themes/ocean"}];this.contentPanel&&this.contentPanel.update?(this.contentPanel.update({title:e.title,description:e.description,videoSrc:e.videoSrc,coordinates:e.position,detailedInfo:o,links:n}),this.contentPanel.show()):(console.log("ContentPanel non disponible, affichage des informations dans la console:"),console.log("Titre:",e.title),console.log("Description:",e.description),console.log("Coordonnées:",e.position)),this.interfaceUI&&this.interfaceUI.setUIVisibility&&this.interfaceUI.setUIVisibility(!1),this.visualEffects.showNotification(`Exploration de: ${e.title}`,"info",3e3)}generateDetailedInfoHTML(e){if(!e||!e.scientificData)return"<p>Informations détaillées non disponibles pour cette zone.</p>";const t=e.scientificData;let i=`
            <div class="scientific-data">
                <strong>Profondeur moyenne:</strong> ${t.depth?typeof t.depth=="object"?`${t.depth.min}-${t.depth.max} m (moy. ${t.depth.avg} m)`:t.depth:"Non disponible"}<br>
                <strong>Température de l'eau:</strong> ${t.temperature?typeof t.temperature=="object"?`${t.temperature.min}-${t.temperature.max}°C (moy. ${t.temperature.avg}°C)`:t.temperature:"Non disponible"}<br>
                <strong>Biodiversité:</strong> ${t.biodiversity||"Non classifiée"}<br>
                <strong>Statut de conservation:</strong> ${t.conservationStatus||"Non déterminé"}<br>
        `;t.area&&(i+=`<strong>Superficie:</strong> ${t.area}<br>`),t.iceExtent&&(i+=`<strong>Étendue de glace:</strong> ${typeof t.iceExtent=="object"?`Hiver: ${t.iceExtent.winter}, Été: ${t.iceExtent.summer}`:t.iceExtent}<br>`),t.annualInput&&(i+=`<strong>Apport annuel:</strong> ${t.annualInput}<br>`),t.economicValue&&(i+=`<strong>Valeur économique:</strong> ${t.economicValue}<br>`),i+="</div>";let o="";e.detailedInfo&&(o=`
                <div class="detailed-text">
                    ${e.detailedInfo}
                </div>
            `);let n="";return e.evolutionData&&e.evolutionData.length>0&&(n=`
                <div class="data-visualization">
                    <h4>Évolution sur ${e.evolutionData[e.evolutionData.length-1].year-e.evolutionData[0].year} ans</h4>
                    <div class="chart-placeholder" style="width: 100%; height: 200px; background-color: rgba(0, 30, 60, 0.5); border-radius: 5px; display: flex; justify-content: center; align-items: center;">
                        <span>Graphique de tendance (à implémenter)</span>
                    </div>
                </div>
            `),`
            ${i}
            ${o}
            ${n}
        `}handleHotspotExit(){this.contentPanel&&this.contentPanel.hide&&this.contentPanel.hide();const e=document.querySelector(".coordinates-display");e&&(e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.borderColor="rgba(255, 204, 0, 0.3)"),this.interfaceUI&&this.interfaceUI.setUIVisibility&&this.interfaceUI.setUIVisibility(!0),this.visualEffects&&this.visualEffects.showNotification("Retour à l'exploration globale","info",3e3),this.currentHotspot=null}}const U=new be;function ye(){U.init()}function xe(){return U}function ve(){console.log("Application Mondes Immergés en cours de chargement...");const d=document.createElement("style");d.textContent=`
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
            cursor: none !important;
        }
    `,document.head.appendChild(d);const e=document.getElementById("welcome-screen");e&&(e.style.display="none",e.classList.add("hidden"));const t=document.getElementById("main-container");t&&(t.classList.add("hidden"),t.style.opacity="0");let i=0;const o=8,n=()=>{i++;const a=Math.round(i/o*100),r=document.querySelector(".progress-bar"),l=document.querySelector(".progress-text");r&&(r.style.width=`${a}%`),l&&(l.textContent=`${a}%`),i>=o&&Ee()};["Configuration système","Textures globe","Vidéos des zones","Données géographiques","Interfaces utilisateur","Modèles 3D","Données scientifiques","Effets visuels"].forEach((a,r)=>{const l=150+Math.random()*250;setTimeout(()=>{console.log(`Ressource chargée: ${a}`),n()},l*(r+1))}),we()}function we(){const d=document.getElementById("main-container");if(!d||d.querySelector(".starry-background"))return;const e=document.createElement("div");e.className="starry-background",e.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `,d.appendChild(e);for(let t=0;t<100;t++){const i=document.createElement("div");i.className="star";const o=Math.random()*100,n=Math.random()*100,s=Math.random()*2+1,a=Math.random()*.7+.3,r=Math.random()*5+3,l=Math.random()*3;i.style.cssText=`
            position: absolute;
            left: ${o}%;
            top: ${n}%;
            width: ${s}px;
            height: ${s}px;
            background-color: rgba(255, 255, 255, ${a});
            border-radius: 50%;
            animation: starTwinkle ${r}s ease-in-out ${l}s infinite;
            pointer-events: none;
        `,e.appendChild(i)}}function Ee(){console.log("Démarrage de l'application..."),ye();const d=xe();setTimeout(()=>{d?Me(d):console.error("Impossible de récupérer l'instance de l'application")},300)}function Me(d){const e=document.getElementById("loading-screen");e?(e.style.opacity="0",e.style.transform="scale(1.1)",setTimeout(()=>{e.classList.add("hidden");const t=document.getElementById("main-container");t&&(t.classList.remove("hidden"),t.style.opacity="1"),d.startupSequence?(d.startupSequence(),setTimeout(()=>{d.startExploration(!0)},5e3)):d.startExploration(!0)},500)):d.startExploration(!0)}function Ce(){const d=document.getElementById("loading-screen");if(!d||d.querySelector(".progress-container"))return;const e=d.querySelector(".spinner");e&&e.remove();try{re.register();const n=document.createElement("l-jelly");n.setAttribute("size","60"),n.setAttribute("speed","0.9"),n.setAttribute("color","#ffcc00"),n.style.cssText=`
            margin-bottom: 30px;
            display: block;
        `;const s=d.querySelector("p");s?d.insertBefore(n,s):d.appendChild(n)}catch{console.warn("Impossible de charger le spinner Jelly, utilisation du spinner CSS par défaut");const s=document.createElement("div");s.className="spinner";const a=d.querySelector("p");a?d.insertBefore(s,a):d.appendChild(s)}const t=document.createElement("div");t.className="progress-container";const i=document.createElement("div");i.className="progress-bar";const o=document.createElement("div");o.className="progress-text",o.textContent="0%",t.appendChild(i),t.appendChild(o),d.appendChild(t)}function Se(){console.log("Initialisation curseur personnalisé...");const d=document.querySelector(".cursor"),e=document.querySelector(".cursor-follower");if(!d||!e){console.log("Éléments curseur non trouvés");return}let t=0,i=0,o=0,n=0,s=0,a=0;document.addEventListener("mousemove",p=>{t=p.clientX,i=p.clientY});function r(){o=t,n=i,d.style.left=o+"px",d.style.top=n+"px",s+=(t-s)*.1,a+=(i-a)*.1,e.style.left=s+"px",e.style.top=a+"px",requestAnimationFrame(r)}document.querySelectorAll("button, a, [data-interactive]").forEach(p=>{p.addEventListener("mouseenter",()=>{d.classList.add("hover"),e.classList.add("hover")}),p.addEventListener("mouseleave",()=>{d.classList.remove("hover"),e.classList.remove("hover")})}),r(),console.log("Curseur personnalisé initialisé avec succès")}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM chargé - Initialisation de l'application"),Ce(),Se(),setTimeout(()=>{ve()},100)});window.addEventListener("error",d=>{console.error("Erreur globale:",d.error)});window.addEventListener("unhandledrejection",d=>{console.error("Promesse rejetée non gérée:",d.reason)});
