try{window.performance.mark("async-software-onboarding-navigation-apps-nudge.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-software-onboarding-navigation-apps-nudge"],{"6jho":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("q1tI");const c={fetchQuickstartStatus:Object(n("rDXM").a)((async({atlassianAccountId:t})=>{if(!t)return n("NS6o").t.NONE;try{var e;const o=await Object(n("KMsT").b)(Object(n("d/M9").d)(""),t,n("NS6o").O),c=null!=o&&null!==(e=o.enrolledExperiences)&&void 0!==e&&e.CHECKLIST?o.enrolledExperiences.CHECKLIST:n("NS6o").t.NONE;return Object(n("8qSl").d)(c),c}catch(o){if(void 0!==(null==o?void 0:o.statusCode)&&Object(n("8qSl").d)(o.statusCode),404===(null==o?void 0:o.statusCode))return n("NS6o").t.NOT_STARTED;if(401===(null==o?void 0:o.statusCode))return n("NS6o").t.NONE;Object(n("8qSl").a)(o,"getUserProperty")}return null}))},r=Object(n("0b8M").a)({initialState:{isFetching:!1,wasFetched:!1,fetchedOnce:!1},
actions:c,name:"jsw-onboarding-quickstart-experience-status"}),a=Object(n("dq9g").b)(r),i=t=>{const[{data:e}]=Object(n("IbsU").b)(),c=Object(n("QwAD").c)(),[{isReady:r}]=Object(n("MZOi").c)(),[{canCreateProject:i,isFetching:s,hasFetchedOnce:u},{fetchCreateProjectPermission:d}]=Object(n("R/WS").a)(),[{value:b,isFetching:l,wasFetched:p},{fetchQuickstartStatus:f}]=a();if(Object(o.useEffect)((()=>{if(Object(n("b9w1").l)())return;const{atlassianAccountId:t}=c;!r||l||p||f({atlassianAccountId:t})}),[f,l,r,c,p]),Object(o.useEffect)((()=>{Object(n("b9w1").k)()||!r||s||u||d(Object(n("d/M9").d)(""))}),[r,s,u,d,c]),(null==t?void 0:t.projectType)!==n("JXwD").m&&(null==t?void 0:t.projectType)!==n("JXwD").a)return!1;if(Object(n("xJlU").e)())return!1;const g=e&&e.scope&&e.scope.type,h="project"===(null==e?void 0:e.contextType)&&(null==t?void 0:t.projectType)===n("JXwD").a,j=!!Object(n("b9w1").l)()||(b===n("NS6o").t.NOT_STARTED||b===n("NS6o").t.STARTED)
;return h||(Object(n("b9w1").k)()||i)&&Boolean(g)&&r&&j}},"8qSl":function(t,e,n){"use strict";n.d(e,"j",(function(){return r})),n.d(e,"m",(function(){return a})),n.d(e,"k",(function(){return i})),n.d(e,"i",(function(){return s})),n.d(e,"l",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return b})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return g})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return j}));var o=n("3tO9"),c=n.n(o);const r=(t,e)=>{t.update({action:"closed",actionSubject:"button"}),Object(n("SALc").h)(t,"button closed",n("NS6o").b,e)},a=(t,e,o)=>{"button"===o?Object(n("SALc").h)(t,"button clicked","dismissQuickstartButton",e):"checklist"===o&&Object(n("SALc").h)(t,"button clicked","dismissQuickstart",e)},i=(t,e)=>{const o=t({});Object(n("SALc").h)(o,"button dismissed",n("NS6o").b,e)},s=t=>{Object(n("SALc").h)(t,"button clicked","backButton")
},u=(t,e)=>{const o=t({});Object(n("SALc").f)(o,"experience completed",n("NS6o").b,c()({},e))},d=(t,e)=>{const o=t({});Object(n("SALc").f)(o,"checklistItem completed",Object(n("hzH6").a)(e),{taskId:e})},b=(t,e)=>{Object(n("q2+m").a)({error:t,meta:{id:"quickstartApiError",packageName:"jiraSoftwareOnboardingQuickstart",teamName:"jlove-makkuro"},attributes:{error:t.message,endpointSource:e}})},l=(t,e)=>{const o=t({});Object(n("SALc").b)(o,"nuxOnboardingQuickstart openRightSidebar",n("NS6o").b,c()({},e))},p=(t,e)=>{const o=t({});Object(n("SALc").b)(o,"nuxOnboardingQuickstart minimiseRightSidebar",n("NS6o").b,c()({},e))},f=(t,e)=>{const o=t({});Object(n("SALc").b)(o,"nuxOnboardingQuickstart closeRightSidebar",n("NS6o").b,c()({},e))},g=t=>{Object(n("/h0V").a)().then((e=>{e.sendEvent({type:n("2V2x").f,payload:{source:"Quickstart",action:"fetched",actionSubject:"getRemoteOnboardingState",actionSubjectId:n("NS6o").b,attributes:{status:t}}})}))},h=()=>{Object(n("/h0V").a)().then((t=>{
t.sendEvent({type:n("2V2x").f,payload:{source:"Quickstart",action:"migrated",actionSubject:"userWithoutCreateProjectPermissions",actionSubjectId:n("NS6o").b}})}))},j=()=>{Object(n("/h0V").a)().then((t=>{t.sendEvent({type:n("2V2x").f,payload:{source:"Quickstart",action:"migrated",actionSubject:"userWithGrowthNuxStatus",actionSubjectId:n("NS6o").b}})}))}},CH3S:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return f}));var o=n("vOnD");const c=o.css``,r=c,a=o.css`& > span{display:inline;}${n("w+eG").a}{& > div::before{box-shadow:none;}}`,i=o.css`${({isInsideMenu:t})=>t?r:a}`,s=c,u=o.css`display:flex;align-items:center;`,d=o.css`${({isInsideMenu:t})=>t?s:u}`,b=o.default.div.withConfig({componentId:"sc-1ghml2v-0"
})`${({isHidden:t})=>t?i:d}`,l=o.css`${n("w+eG").a}{padding-left:6px;padding-right:12px;margin-top:3px;position:sticky;top:3px;& > div{padding-left:0;padding-right:0;}}`,p=o.css`${n("w+eG").a}{height:100%;& > div{height:100%;}& > div::before{transition:none;}}`,f=o.default.div.withConfig({componentId:"sc-1ghml2v-1"})`${({isHidden:t})=>t?p:l}`},J8UC:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=()=>{const[{hasOpened:t}]=Object(n("ongS").a)(),{data:e}=Object(n("42YJ").b)(),o=Object(n("6jho").a)(e);return Object(n("NxiG").a)()?t:o}},NxiG:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));const o=()=>((t,e=!0)=>Object(n("G9hk").a)().getVariantValue(t,{default:n("xNJn").c,oneOf:[n("xNJn").c,n("xNJn").a,n("xNJn").b],shouldTrackExposureEvent:e})===n("xNJn").b)("jsw.onboarding.experiment.planning.basics.onboarding",!1),c=()=>Object(n("0zaF").a)("jsw.onboarding.rollout.kuro-1613",!1)},"PZZ+":function(t,e,n){"use strict"
;n.d(e,"a",(function(){return d}));var o=n("QILm"),c=n.n(o),r=n("q1tI"),a=n.n(r),i=n("6xe2");const s=["children"],u=Object(i.g)((()=>n.e("async-software-quickstart-nudge").then(n.bind(null,"64Oh")).then((t=>t.QuickstartNudge))),{ssr:!1,moduleId:"./src/packages/software/onboarding-nudges/src/common/ui/quickstart-nudge/main.tsx"}),d=t=>{let{children:e=null}=t,o=c()(t,s);return a.a.createElement(n("fr1q").a,{id:"quickstartNudge",fallback:e,attributes:{nudgeId:o.nudgeId}},a.a.createElement(i.a,{fallback:e},a.a.createElement(u,o,e)))};d.displayName="QuickstartNudge"},b9w1:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"n",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"g",(function(){return b})),n.d(e,"j",(function(){return l})),n.d(e,"l",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"b",(function(){return g})),n.d(e,"i",(function(){
return h})),n.d(e,"e",(function(){return j})),n.d(e,"m",(function(){return O}));const o="experiment",c="not-enrolled",r="jsw.onboarding.experiment.plan.onboarding",a=(t,e=!0)=>Object(n("G9hk").a)().getVariantValue(t,{default:c,oneOf:[c,"control",o],shouldTrackExposureEvent:e
})===o,i=()=>Object(n("0zaF").a)("jira-bottom-right-corner-controller_8kq25",!1),s=()=>a("jsw.onboarding.experiment.scrum.onboarding",!1),u=()=>a("jsw.onboarding.experiment.kanban.onboarding",!1),d=()=>Object(n("0zaF").a)("jsw.onboarding.rollout.kuro-1190",!1),b=()=>Object(n("0zaF").a)("jsw.onboarding.quickstart.kuro-1045",!1),l=(t=!1)=>a("jsw.onboarding.experiment.planning.basics.onboarding",t),p=()=>Object(n("0zaF").a)("jsw.onboarding.rollout.kuro-1472",!1),f=()=>Object(n("0zaF").a)("jsw.onboarding.rollout.kuro-1473",!1),g=()=>Object(n("0zaF").a)("jsw.onboarding.quickstart.kuro-1646",!1)&&Object(n("dkq5").a)(),h=()=>Object(n("0zaF").a)("jsw.onboarding.rollout.kuro-1613",!1),j=()=>Object(n("0zaF").a)("jsw.onboarding.quickstart.customize.site.name",!1),O=()=>Object(n("0zaF").a)("jwm.qs-optimization",!1)},dkq5:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=()=>{const t=Object(n("vlh1").a)("ajs-user-locale")
;return!!t&&"string"==typeof t&&-1!==t.toLowerCase().indexOf("en",0)}},hzH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return u}));var o=n("u6S6"),c=n.n(o);const r=t=>null===t?"":c()(t.split(".").pop()),a=t=>`${r(t)}Cta`,i=t=>`${r(t)}ShowMe`,s=t=>`${r(t)}Link`,u=(t,e)=>t&&null!==e?t.indexOf(e)+1:-1},ongS:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const o={setHasOpened:()=>({getState:t,setState:e})=>{const{hasOpened:n}=t();!0!==n&&e({hasOpened:!0})}},c=Object(n("0b8M").a)({initialState:{hasOpened:!1},actions:o,name:"jsw-onboarding-quickstart-has-opened"}),r=Object(n("dq9g").b)(c)},r9Wb:function(t,e,n){"use strict";n.r(e),n.d(e,"NavigationAppsNavItemWrapperNudge",(function(){return a}));var o=n("q1tI"),c=n.n(o),r=Object(n("uKP8").a)({content:{id:"software-onboarding-nudges--next.navigation-apps.content",
defaultMessage:"Search for the tools you currently use, or discover something new.",description:"Nudge content that will show up to new users when users click on capture integrations checklist item in quickstart. This Nudge guides the user to learn more about marketplace apps."}});const a=({children:t,nudgeId:e,isInsideMenu:o})=>{const{formatMessage:a}=Object(n("6JHv").a)();return Object(n("J8UC").a)()?c.a.createElement(n("PZZ+").a,{nudgeId:e,itemNames:[n("NS6o").h,n("NS6o").m,n("NS6o").F],ContainerComponent:n("CH3S").b,nudgeSpotlightCardProps:{content:a(r.content),width:320},isInsideMenu:o},t):t};a.displayName="NavigationAppsNavItemWrapperNudge"},rDXM:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>e=>async({getState:n,setState:o})=>{const{isFetching:c,wasFetched:r,fetchedOnce:a}=n();if(c)return;if(r)return;o({isFetching:!0});const i=await t(e);o(null!==i?{value:i,isFetching:!1,wasFetched:!0,fetchedOnce:!0}:{isFetching:!1,wasFetched:a,fetchedOnce:!0})}},
"w+eG":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("vOnD");const c=`var(--ds-border-accent-purple, ${n("5kDX").a.P75})`,r=o.keyframes`0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}`,a=o.css`animation:${r} 3000ms ${"cubic-bezier(0.55, 0.055, 0.675, 0.19)"} infinite;`,i=o.css`content:'';position:absolute;top:0;left:0;width:100%;height:100%;`,s=o.default.span.withConfig({componentId:"sc-1f9ncqa-0"})`display:block;> *{position:relative;&::before{${i} border-radius:${({pulseBorderRadius:t=n("7w+A").borderRadius})=>t}px;box-shadow:${({pulseColor:t=c})=>`0 0 0 3px ${t}`};opacity:${t=>t.hasPulse?1:0};transition:opacity 0.1s ease-in-out;pointer-events:none;}&::after{${i} border-radius:${({pulseBorderRadius:t=n("7w+A").borderRadius})=>t}px;box-shadow:${({pulseColor:t=c,pulseShadowColor:e="var(--ds-border-accent-purple, rgba(101, 84, 192, 1))"})=>`0 0 0 3px ${t} , 0 0 11px ${e}`};opacity:0;pointer-events:none;${t=>t.hasPulse&&a}}}`}}]);try{
window.__jsEvalStop("async-software-onboarding-navigation-apps-nudge.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-software-onboarding-navigation-apps-nudge.553c9d62869d0d766fa4.8.js.map