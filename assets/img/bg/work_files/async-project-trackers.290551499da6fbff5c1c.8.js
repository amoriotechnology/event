try{window.performance.mark("async-project-trackers.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-project-trackers"],{ksLH:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));const r=()=>{const t=Object(c("QwAD").c)();return t&&t.isAnonymous}},xPZf:function(t,e,c){"use strict";c.r(e),c.d(e,"Trackers",(function(){return a}));var r=c("q1tI");const n=t=>"service_desk"===t?"serviceDesk":t;var s=c("3tO9"),o=c.n(s);const a=()=>((()=>{const{data:t}=Object(c("0szj").a)(),{createAnalyticsEvent:e}=Object(c("rZ/p").a)(),s=null==t?void 0:t.id,o=null==t?void 0:t.type,a=null==t?void 0:t.isSimplified;Object(r.useEffect)((()=>{if(null==s||null==o)return;const t=e({});Object(c("SALc").b)(t,"projectContainer entered",{projectId:s,projectType:n(o),nextGenProject:a})}),[e,s,o,a])})(),(()=>{const t=Object(c("ksLH").a)(),{data:e}=Object(c("0szj").a)(),n=null==e?void 0:e.key;Object(r.useEffect)((()=>{
t||null==n||fetch(`/rest/api/latest/project/${encodeURIComponent(n)}/tracking/recent`,o()(o()({},c("drMZ").a),{},{method:"PUT"})).then((t=>{if(t.ok)return t;throw new Error(`Server didn't accept "${n}", status code: ${t.status}`)})).catch((t=>{c("Ltg2").a.safeErrorWithoutCustomerData("project-layout.use-recent-project-tracker","There was a problem saving recent visited project",t)}))}),["",t,n])})(),null);e.default=a}}]);try{window.__jsEvalStop("async-project-trackers.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-project-trackers.290551499da6fbff5c1c.8.js.map