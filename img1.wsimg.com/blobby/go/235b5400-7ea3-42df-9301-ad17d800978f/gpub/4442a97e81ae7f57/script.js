window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme10"]=window.wsb["Theme10"]||window.radpack("@widget/LAYOUT/bs-layout10-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function({adEndpoint:e,isPublish:t,containerId:a}){const o=/<script[^>]*>([\s\S]*)<\/script>/;let r,l,n;function i(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function s(e){if(n=document.getElementById(a),!n)return;r=document.createElement("div"),r.style.cssText="transition:all 0.5s;width:100%;min-height: 0px;",n.prepend(r),l=document.createElement("div"),l.setAttribute("data-freemium-ad",!0),l.style.cssText="transition:all 0.5s;overflow:hidden;width:100%;z-index:10000;position:fixed;left:0;transform:translateY(-100px);",l.innerHTML=(e||"").replace(o,""),n.prepend(l);const s=`${l.offsetHeight}px`;if(window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=s),r.style.minHeight=s,l.style.transform="translateY(0px)"})),t){const t=o.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else l.addEventListener("click",i,{useCapture:!0})}function c(){const a=t&&sessionStorage.getItem(e)||"";a?s(a):window.fetch(e).then((e=>e.ok&&e.text())).then((t=>{t&&(sessionStorage.setItem(e,t),s(t))})).catch((()=>{}))}return"complete"===document.readyState?c():window.addEventListener("load",c),function(){!t&&l.removeEventListener("click",i,{useCapture:!0}),n&&(n.removeChild(r),n.removeChild(l))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-41074\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"renderMode\":\"PUBLISH\",\"fonts\":[\"abril-fatface\",\"droid-sans\",\"\"],\"colors\":[\"#FFFFFF\"],\"fontScale\":\"medium\",\"locale\":\"en-IN\",\"language\":\"en\",\"internalLinks\":{\"14da07a7-8cfd-4b52-b835-3bba4ebb4d69\":{\"pageId\":\"dc40e7ba-557f-4d66-8027-fd019b76b1a2\",\"widgetId\":null,\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"0c9b586a-8651-44bf-84af-d7d6afc69447\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"0c9b586a-8651-44bf-84af-d7d6afc69447\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"4306ec0e-ae44-4261-8876-78401b1d92d1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"4306ec0e-ae44-4261-8876-78401b1d92d1\",\"name\":\"Blog\",\"href\":\"/blog\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"8914d585-ac52-4836-ace9-c03de194549f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8914d585-ac52-4836-ace9-c03de194549f\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"dc40e7ba-557f-4d66-8027-fd019b76b1a2\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"dc40e7ba-557f-4d66-8027-fd019b76b1a2\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"fonts\":{\"primary\":{\"id\":\"abril-fatface\",\"description\":\"\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":1,\"primary\":{\"id\":\"abril-fatface\",\"name\":\"Abril Fatface\",\"url\":\"//fonts.googleapis.com/css?family=Abril+Fatface:400&display=swap\",\"family\":\"'Abril Fatface', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"2px\"}},\"alternate\":{\"id\":\"droid-sans\",\"name\":\"Droid Sans\",\"url\":\"//fonts.googleapis.com/css?family=Droid+Sans:300,400,700,800&display=swap\",\"family\":\"'Droid Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"alternate\":{\"family\":\"Arial, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}}]},\"alternate\":{\"id\":\"droid-sans\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":3,\"alternate\":{\"id\":\"droid-sans\",\"name\":\"Droid Sans\",\"url\":\"//fonts.googleapis.com/css?family=Droid+Sans:300,400,700,800&display=swap\",\"family\":\"'Droid Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"alternate\":{\"family\":\"Arial, sans-serif\"}}}]}},\"colors\":[{\"id\":\"#FFFFFF\",\"meta\":{\"primary\":\"rgb(255, 255, 255)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}]},\"theme\":\"Theme10\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-41072-navId-mobile\",\"uniqueId\":\"n-41072\",\"style\":{\"color\":\"highContrast\",\"marginLeft\":\"0\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"34a710b4-ef4e-4706-a0a8-b39cef1d36da\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-IN\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"34a710b4-ef4e-4706-a0a8-b39cef1d36da\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Section\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"]=function({containerId:e,targetId:t,fontSizes:a,maxLines:o,prioritizeDefault:r}){if("undefined"==typeof document)return;const l=document.getElementById(e),n=document.getElementById(t);function i(e){return function(e){const t=parseInt(c(e,"padding-left")||0,10),a=parseInt(c(e,"padding-right")||0,10);return e.scrollWidth+t+a}(e)<=l.clientWidth&&function(e){const t=e.offsetHeight,a=parseInt(c(e,"line-height"),10)||1;return Math.floor(t/a)}(e)<=o}function s(){if(!l||!n)return;if(n.hasAttribute("data-font-scaled"))return void function(){n.removeAttribute("data-last-size");const e=document.querySelector(`#${t}-style`);e&&e.parentNode.removeChild(e)}();const o=Array.prototype.slice.call(l.querySelectorAll(`[data-scaler-id="scaler-${e}"]`)).sort(((e,t)=>a.indexOf(e.getAttribute("data-size"))-a.indexOf(t.getAttribute("data-size"))));if(l.clientWidth&&o.length){const e=l.style.width||"";l.style.width="100%",o.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${l.clientWidth}px`}));const a=function(e){return e.find(i)||e[e.length-1]}(o);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(o),l.style.width=e;const s=c(a,"font-size"),g=n.getAttribute("data-last-size");if(s&&s!==g){if(r){const e=c(n,"font-size");if(parseInt(s,10)>=parseInt(e,10))return}n.setAttribute("data-last-size",s);let e=document.querySelector(`#${t}-style`);e||(e=document.createElement("style"),e.id=`${t}-style`,document.head.appendChild(e)),e.textContent=`#${n.id} { font-size: ${s} !important; }`}}}function c(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}if(s(),window.ResizeObserver&&l){new ResizeObserver((()=>{window.requestAnimationFrame(s)})).observe(l)}else window.addEventListener("resize",s)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-41080\",\"targetId\":\"logo-text-41081\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-41085\",\"targetId\":\"logo-text-41086\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-41088\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-41083\",\"widgetId\":\"34a710b4-ef4e-4706-a0a8-b39cef1d36da\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-IN\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"34a710b4-ef4e-4706-a0a8-b39cef1d36da\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Nav\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function({containerId:e,navId:t,logoImageId:a,inlineUtilitiesMenu:n}){let l,i,o,r,c,s,g;const p=document.getElementById(t);function d(){if(i||!p||!w(p))return;o=Array.from(p.children),o.forEach(b),n&&(r=o.pop(),h(r)),c=o.pop();const e=c.querySelector("ul");s=e?Array.from(e.children):[],p.style.whiteSpace="normal",g=w(p.parentElement,"floor"),p.style.whiteSpace="nowrap",window.requestAnimationFrame(u)}function u(){const e=o.map((e=>w(e)));const t=r?w(r):0,a=g-t;if(I(e)>a){const t=w(c);for(let n=I(e);n+t>a;n-=e.pop());const n=e.length;m(o,0,n,h),m(s,0,n,v),m(o,n,o.length,v),m(s,n,o.length,h),h(c)}else o.forEach(h),v(c);window.dispatchEvent(new Event("NavItemsResized"))}function y(){window.innerWidth<1024||(window.clearTimeout(l),l=window.setTimeout(d,50))}function m(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function b(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function v(e){e.style.display="none",e.classList.remove("visible")}function h(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function I(e){return e.reduce(((e,t)=>e+t),0)}function w(e,t="ceil"){return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(y(),window.ResizeObserver){const t=new window.ResizeObserver(y);return[document.getElementById(e),document.getElementById(a)].forEach((e=>e&&t.observe(e))),()=>{i=!0,t.disconnect()}}return window.addEventListener("resize",y,{passive:!0}),()=>{i=!0,window.removeEventListener("resize",y,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-41087\",\"logoImageId\":\"logo-41082\",\"containerId\":\"navBarId-41083\"}"));
window.wsb["StickyNav"]=function({uniqueId:e,logoHeight:t,hasAnimation:o,anchorId:a}){let n,r,i,c,s=window.innerWidth<768,l=0;const d=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return i=t.getPropertyValue("box-shadow"),c=t.getPropertyValue("margin-top"),e},g={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(e),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:d(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(a)},u=()=>{const{stickyNav:e,stickyNavParent:t}=g;t.style.height=`${e.offsetHeight}px`};new IntersectionObserver((e=>e.forEach((({isIntersecting:e})=>window.requestAnimationFrame((()=>(e=>{var a;if(r===e)return;const{stickyNav:n,logo:d,i18nBar:p,freemiumAd:y,stickyNavParent:h}=g;g.freemiumAd=y||document.querySelector("[data-freemium-ad]"),l=l||(null===(a=g.freemiumAd)||void 0===a?void 0:a.offsetHeight),e&&h&&!h.style.height&&u(),p&&(p.style.display=e?"none":"flex"),d&&(d.style.cssText=e?`max-height:${s?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${s?80:t}px;box-shadow:${i};margin-top:${c};`,"HEADER_LOGO_OVERHANG_CONTAINER"===d.parentNode.getAttribute("data-aid")&&(d.parentNode.style.height=e?"auto":"1em")),n.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${l||0}px;`:"",o&&(e?n.classList.add("sticky-animate","x-c-bg"):n.classList.remove("sticky-animate","x-c-bg")),r=e})(!e))))))).observe(g.anchor);const p=/#[^\\?]*/;function y(e){const t=(e.target.href.match(p)[0]||[]).slice(1),o=document.getElementById(t);o&&h(o)}function h(e){const t=g.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>p.test(e.href))).forEach((e=>e.addEventListener("click",y))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&h(e)}window.addEventListener("resize",(()=>{clearTimeout(n),n=setTimeout((()=>{s=window.innerWidth<768,g.logo=d(),u()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav41075\",\"anchorId\":\"header_stickynav-anchor41076\",\"logoHeight\":80,\"hasAnimation\":true}"));
window.wsb["Parallax"]=function({uniqueId:e,speed:o=-1,oversizeSpeed:t,isBackground:n=!0,hamburgerId:r,noTransform:s,excludedBreakpoints:a=[]}){function i(){return window.innerWidth<768?"xs":window.innerWidth<1024?"sm":window.innerWidth<1280?"md":"lg"}let p,d,c,l,g,u,y,b,m=i(),w=m;function h(e){return!a.includes(e)}function f(e,o,t){return Array.from(document.querySelectorAll(e)).find((e=>e.contains(o)))||t}function x(){if(h(m)){if(p=document.getElementById(e),d=document.getElementById(r),c=f(".widget-header",p,document.body),l=f(".viewport, #render-container, .scaler-content",p,window),l.addEventListener("scroll",T,{passive:!0}),l.addEventListener("resize",P,{passive:!0}),g=l===window?document.body:l,p&&l&&g){const e=l===window?window.innerHeight:g.getBoundingClientRect().bottom;u=e<p.getBoundingClientRect().bottom}T()}}function P(){v(),window.requestAnimationFrame(x)}function v(){l&&(l.removeEventListener("scroll",T,{passive:!0}),l.removeEventListener("resize",P,{passive:!0}))}function T(){if(!p)return;if(d&&0!==d.offsetHeight)return;const{top:e,height:r}=g.getBoundingClientRect(),a=c.getBoundingClientRect(),i=l===window?0:e,m=a.top-i,w=a.bottom-i,h=a.height,f=m>=0,x=w<0,P=f||x;if(P&&(y||b))return;y=f,b=x;const v=n||!u?o:"number"==typeof t?t:Math.abs(o),T=(P?0:m)*(1-1/Math.max(Math.abs(v),.1))*(v<0?-1:1);if(s?(p.style.position="relative",p.style.top=`${T.toFixed(2)}px`):p.style.transform=T?`translate3d(0, ${T.toFixed(2)}px, 0)`:"none",!n){const e=Math.min(r,h),o=2,t=P?1:Math.max(Math.min(w/e*o,1),0);p.style.opacity=t.toFixed(2)}}a.length&&window.addEventListener("resize",(function(){w=m,m=i(),!h(w)&&h(m)?x():h(w)&&!h(m)&&v()}),{passive:!0}),window.requestAnimationFrame(x)};
window.wsb["Parallax"](JSON.parse("{\"isBackground\":false,\"speed\":-1.9,\"oversizeSpeed\":1.9,\"uniqueId\":\"header_parallax41100\",\"excludedBreakpoints\":[]}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-41101\",\"targetId\":\"dynamic-tagline-41102\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb["AccordionScript"]=function({id:e}){const t=document.getElementById(e),a=t.querySelectorAll(".accordion-question");let o=!1;function r(e){"true"===e.getAttribute("aria-expanded")&&o?e.setAttribute("aria-expanded","false"):e.setAttribute("aria-expanded","true"),o=!1}function l(){const e=t.querySelector(window.location.hash);if(e){r(e.querySelector(".accordion-question"))}}function n(e){o=!0,r(e.currentTarget)}return a.forEach((e=>{e.addEventListener("click",n)})),window.addEventListener("popstate",l),window.location.hash&&l(),()=>{a.forEach((e=>{e.removeEventListener("click",n)})),window.removeEventListener("popstate",l)}};
window.wsb["AccordionScript"](JSON.parse("{\"id\":\"e111ca6e-0dbf-4ee3-89c8-c3c28859f15941103\"}"));
Core.utils.renderBootstrap({elId:'bs-3',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"upgradeable\":false,\"preset\":\"messaging1\",\"order\":0,\"id\":\"2920d1c2-2a25-4f09-a012-9c4161833fc7\",\"env\":\"production\",\"isMobile\":null,\"websiteId\":\"235b5400-7ea3-42df-9301-ad17d800978f\",\"accountId\":\"910bba03-2065-11ec-823e-3417ebe72601\",\"isReseller\":false,\"domainName\":\"research.godaddysites.com\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"businessName\":\"Research\",\"reamazeBrandId\":null,\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"cookieBannerEnabled\":true,\"notificationPreference\":\"EMAIL\",\"formEmail\":\"vmohit.india@gmail.com\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"reamazePosition\":\"bottom-right\",\"reamazeThemeColor\":\"#FFFFFF\",\"reamazePromptEnabled\":true,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"reamazeDismissCarousel\":false,\"widgetId\":\"2920d1c2-2a25-4f09-a012-9c4161833fc7\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-IN\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"2920d1c2-2a25-4f09-a012-9c4161833fc7\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/MESSAGING/bs-Component"});
window.wsb["CookieBannerScript"]=function({id:e,acceptCookie:t,dismissCookie:o}){let a,n,i;function l(e,t=60){const o=new Date;o.setTime(o.getTime()+864e5*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function r(e){return document.cookie.includes(e)}function s(){n&&n.removeEventListener("click",c),i&&i.removeEventListener("click",p),a.style.display="none"}function c(e){e.preventDefault(),g(),l(o),l(t),s()}function p(e){var a;e.preventDefault(),l(o),r(t)&&(a=t,document.cookie=`${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),s()}function g(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}r(t)?g():r(o)||setTimeout((()=>{a=document.getElementById(`${e}-banner`),n=document.getElementById(`${e}-accept`),i=document.getElementById(`${e}-decline`),n&&n.addEventListener("click",c),i&&i.addEventListener("click",p),a.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"cbf11f34-6a04-43e5-a0e0-a0ff717b0c06\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-41071').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":true,"wam_site_homepageFirstWidgetType":"INTRODUCTION","wam_site_homepageFirstWidgetPreset":"introduction1","wam_site_businessCategory":"educationalconsultant","wam_site_theme":"layout10","wam_site_fontPack":"abril-fatface","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"freemiumV1","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);