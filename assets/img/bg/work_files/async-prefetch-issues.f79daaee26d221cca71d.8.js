try{window.performance.mark("async-prefetch-issues.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-prefetch-issues"],{"5/tQ":function(e,t,n){"use strict";var s=n("q1tI"),r=n.n(s);class i extends s.Component{constructor(e){super(e),this.fetchIssues(e.issueIds,e.issueKeys)}componentDidUpdate({issueIds:e,issueKeys:t}){const{issueIds:n,issueKeys:s}=this.props;if(e!==n){const t=n.filter((t=>{const n=Number(t)<0;return!e.includes(t)&&!n}));this.fetchIssues(t)}s&&t&&t!==s&&this.fetchIssues([],s)}fetchIssues(e,t){e.length>0&&this.props.dataProvider.loadIssuesById(e.map((e=>String(e)))),t&&t.length>0&&this.props.dataProvider.loadIssues(t)}render(){return null}}i.displayName="Prefetch";const a=Object(n("c9Q9").a)(i);class o extends s.Component{render(){return r.a.createElement(a,this.props)}}o.displayName="PrefetchClientOnly";t.a=o},"8qHA":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){
return c}));var s=n("cr+I"),r=n.n(s);const i=Object(n("n8RE").a)((e=>{const t=r.a.parseUrl(e).query;return t[n("NQLF").b.COMMENTS]?{permalinkType:n("NQLF").a,permalinkId:t[n("NQLF").b.COMMENTS]}:t[n("NQLF").b.WORKLOG]?{permalinkType:n("NQLF").c,permalinkId:t[n("NQLF").b.WORKLOG]}:null})),a=()=>i(window.location.search),o=e=>{const{permalinkId:t,permalinkType:n}=a()||{},s=n===e&&null!=t;return{hasPermalink:s,permalinkId:s?t:""}},c=(e,t)=>{const s=window.location.pathname;let r=`?${t}=${e}`;if(/\/jira\/software\/c\/projects\/[^/]*\/boards\/.*/.test(s)||/\/jira\/people\/.*\/boards\/.*/.test(s)||"/secure/RapidBoard.jspa"===s||s.startsWith("/jira/software/projects/")&&"boards"===s.split("/")[5]||s.startsWith("/jira/servicedesk/projects/")&&"queues"===s.split("/")[5]){const s=new URL(window.location.href);s.searchParams.delete(t===n("NQLF").b.WORKLOG?n("NQLF").b.COMMENTS:n("NQLF").b.WORKLOG),s.searchParams.set(t,e),r=s.search}return r}},DNo0:function(e,t,n){"use strict"
;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));class s extends Error{}const r=(e,t)=>{if(t.errors){const s=t.errors[0],r=new(n("aDTl").d)(s.message),i={eventNameSuffix:n("X8m8").g,type:n("hmTa").h,app:n("hmTa").d,event:r};throw n("ZXUb").a.safeErrorWithoutCustomerData(e,"getGraphQlData: Error present in GraphQL response",new(n("hmTa").a)(i)),r}return t.data},i="Response is either not present or has no data.",a=e=>{if(!e||!Object.prototype.hasOwnProperty.call(e,"data"))throw new s(i);if(null===e.data)throw new s(i);return e}},NQLF:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i}));const s="Comments",r="Worklog",i={COMMENTS:"focusedCommentId",WORKLOG:"focusedWorklogId"}},NXcj:function(e,t,n){"use strict";n.r(t);var s=n("/MKj"),r=n("peh1");const i=(e,t)=>{const s=(e=>{const t=[];return Object.keys(e).forEach((s=>{t.push({swimlane:s,amount:Object(n("d/M9").F)(e[s]).flat().length})})),
t.sort(((e,t)=>e.amount<=t.amount?-1:1))})(e);let r=t,i=s.length;return s.map((({swimlane:e,amount:t})=>{const n=Math.min(t,Math.ceil(r/i));return i-=1,r-=n,{key:e,amount:n}}))},a=(e,t)=>{const n=[];return Object.keys(e).map((t=>[t,e[t]])).forEach((([e,s])=>{const r=t.filter((t=>t.key===e))[0].amount,i=s.slice(0,r);n.push(...i)})),n},o=Object(r.createSelector)([n("tzVO").a,n("7R9e").S,n("7R9e").l],((e,t,s)=>{if(e!==n("YAjm").a.id){const e=[],n=i(t,100);return Object.keys(t).map((e=>[e,t[e]])).forEach((([t,s])=>{const r=n.filter((e=>e.key===t))[0].amount,o=i(s,r),c=a(s,o);e.push(c)})),e.flat()}const r=i(s,100);return a(s,r)}));t.default=Object(s.connect)((e=>({issueIds:Object(n("r8Qx").z)()?o(e).map((e=>Object(n("d/M9").o)(`${e}`))):Object(n("J9U5").c)(e).map((e=>Object(n("d/M9").o)(`${e}`)))})),{})(n("5/tQ").a)},X8m8:function(e,t,n){"use strict";n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),
n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return h}));const s="_issue-app-modal-dialog-wrapper",r="issue-app-modal-ak-dropdown-portal",i="issue-app-modal-editor-dropdown-portal",a="issue-editor-end",o="issue-editor-start",c="issue.error",u="jira-issue-header",d="jira-issue-header-actions",l=2,h="issue.error.agg"},c9Q9:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("pVnL"),r=n.n(s),i=n("QILm"),a=n.n(i),o=n("q1tI"),c=n.n(o);const u=Object(o.createContext)(n("oFVb").a),d=["dataProvider"],l=e=>t=>{const{dataProvider:n}=t,s=a()(t,d);return c.a.createElement(u.Consumer,null,(t=>c.a.createElement(e,r()({},s,{dataProvider:n||t()}))))}},cTFb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const s=(e,t,s,r)=>{s instanceof TypeError&&Object(n("aDTl").f)(s)?((e,t,s)=>{Object(n("q2+m").a)({error:s,attributes:{
message:t},meta:{id:e,packageName:"jiraIssueView"}})})(e,t,s):r&&n("ZXUb").a.safeErrorWithoutCustomerData(e,t,r)}},hmTa:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"j",(function(){return r})),n.d(t,"i",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return h})),n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return b}));const s="fetch",r="update",i="js",a=Object.freeze({fetch:s,update:r,js:i}),o="media",c="issue",u=Object.freeze({media:o,issue:c}),d="data-provider",l="issue",h="issue-field",m=Object.freeze({dataProvider:d,issue:l,issueField:h}),p=Object.freeze(n("0nuc").a),f="issue.error",y=e=>Object(n("JtdM").a)(...Object.values(e));class b extends Error{constructor(e){e.event&&e.event instanceof Error?(super(e.event.message),this.type=void 0,this.category=void 0,this.app=void 0,this.analyticsSource=void 0,
this.eventNameSuffix=void 0,this.stack=e.event.stack):(super(),this.type=void 0,this.category=void 0,this.app=void 0,this.analyticsSource=void 0,this.eventNameSuffix=void 0,e.event&&Object.assign(this,e.event)),this.name="AnalyticError",this.type=y(a)(e.type),this.eventNameSuffix=e.eventNameSuffix,this.category=e.category&&y(u)(e.category),this.analyticsSource=e.analyticsSource&&y(p)(e.analyticsSource),this.app=e.app&&y(m)(e.app)}}},oFVb:function(t,n,s){"use strict";s.d(n,"a",(function(){return b}));var r=s("4c1C"),i=(s("ZiWu"),s("4XzM"),s("fjAU"),s("S7rW"),s("3tO9")),a=s.n(i);class o{constructor({key:e}){this.key=void 0,this.id=void 0,this.fields=void 0,this.meta=void 0,this.layout=void 0,this.issueSections=void 0,this.remoteLinks=void 0,this.myPreferences=void 0,this.commentsData=void 0,this.attachmentsData=void 0,this.workflow=void 0,this.activitySortOrder=void 0,this.key=e,this.fields=new Map}withLayout(e){return this.layout=e,this}withIssueSections(e){return this.issueSections=e,
this}withMeta(e){return this.meta=e,this}withId(e){return this.id=e,this}withFields(e){return e.forEach(this.withField,this),this}withField(e){return e&&this.fields.set(String(e.key),e),this}withRemoteLinks(e){return this.remoteLinks=e,this}withPreferences(e){return this.myPreferences=e,this}withComments(e){return this.commentsData=e,this}withWorkflow(e){return this.workflow=e,this}withActivitySortOrder(e){return this.activitySortOrder=e,this}build(){const e=null!==this.meta&&void 0!==this.meta?this.meta:{dataSource:"unknown",newIssueViewLockedIn:!1,fetchTime:new Date},t=null!==this.layout&&void 0!==this.layout?this.layout:{contextPrimary:[],contextSecondary:[],content:[],contentRequest:void 0},n=null!==this.remoteLinks&&void 0!==this.remoteLinks?this.remoteLinks:{confluencePages:{linkedPages:{pageCount:0},mentionedPages:{pageCount:0}},webLinks:{linkCount:0},remoteLinkedIssues:[]},s=null!==this.issueSections&&void 0!==this.issueSections?this.issueSections:{
templateKey:"PrimarySecondaryContextSections",contentSection:{items:[]},primaryContextSection:{items:[]},secondaryContextSection:{items:[]}},r=null!==this.myPreferences&&void 0!==this.myPreferences?this.myPreferences:{};let i={},o={totalCount:0,startIndex:0,comments:{}};null!==this.commentsData&&void 0!==this.commentsData&&(o={totalCount:this.commentsData.totalCount,startIndex:this.commentsData.startIndex,comments:this.commentsData.comments},i=this.commentsData.users);const c=null!==this.workflow&&void 0!==this.workflow?this.workflow:void 0,u=this.activitySortOrder;return a()({key:this.key,fields:this.fields,meta:e,layout:t,remoteLinks:n,issueSections:s,myPreferences:r,comments:o,users:i,workflow:c,activitySortOrder:u},null!==this.id&&void 0!==this.id?{id:this.id}:void 0)}}s("neMA"),s("Drjo"),s("OA6I");const c={key:"FETCH_ISSUE_EXPRESS",prefix:"ISSUE_DETAILS"
},u=()=>`\n    pageCount\n    ${(()=>`\n    pages {\n        ... on ConfluencePage {\n            id\n            globalId\n            href\n            title\n            type\n            lastUpdatedContext {\n                ${(()=>"\n    user {\n        key\n        accountId\n        emailAddress\n        avatarUrl\n        displayName\n        active\n    }\n")()}\n            }\n        }\n        ... on FailedRemoteLink {\n            id\n            error\n            link {\n                id\n                globalId\n                href\n            }\n            repairLink { href }\n        }\n    }\n`)()}\n`,d=()=>"_remote_data",l=()=>`\n    query issueViewRemoteDataQuery($issueKey: String!) {\n        bentoViewIssue${d()}: viewIssue(issueKey: $issueKey) {\n            ${(()=>`\n    issueId\n    remoteLinks {\n       isLinkingEnabled\n       confluencePages {\n            linkedPages {\n                ${u()}\n            }\n            mentionedPages {\n                ${u()}\n            }\n        }\n        ${(()=>'\n    webLinks(allowThirdParties: true, orderBy: "-id") {\n        linkCount\n        links {\n            id\n            href\n            linkText\n            iconUrl\n            summary\n            resolved\n            relationship\n            applicationName\n            applicationType\n        }\n    }\n')()}\n        ${(()=>`\n    remoteLinkedIssues {\n        preview {\n            ${(()=>"\n    id\n    issueId\n    globalId\n    href\n    applicationType\n    applicationName\n    relationship\n    title\n")()}\n        }\n        details {\n            ${(()=>`\n    ... on AssociatedIssueWrapper {\n        associatedIssue {\n            ${(()=>"\n    issueId\n    issueKey {\n        stringValue\n    }\n    summary {\n        textValue\n    }\n    status {\n        statusCategoryId\n        name\n        statusId\n    }\n    priority {\n        iconUrl\n        name\n    }\n    issueType {\n        iconUrl\n        name\n    }\n    assignee {\n        userValue\n        {\n            displayName\n            avatarUrl\n        }\n    }\n")()}\n        }\n    }\n    ... on FailedRemoteIssue {\n        error\n        repairLink { href }\n    }\n`)()}\n        }\n    }\n`)()}\n    }\n`)()}\n        }\n    }\n`,h=(e,t)=>Object(s("c0Rh").a)((e=>`${e}/rest/gira/1/`)(e),((e,t)=>({
method:"POST",body:JSON.stringify({query:e,variables:t}),perf:c}))(l(),{issueKey:t})).map((e=>Object(s("DNo0").b)("issue.data-provider.source.issue-express.graphql",e))).map((e=>e[`bentoViewIssue${d()}`])),m=(e,t)=>{if(!e)return null;const n=t||(e=>{const t=(e.fields||[]).find((e=>"IssueKeyField"===e.__typename));if(!t)throw new Error("Issue key field missing in graphql response");return Object(s("d/M9").q)(t.stringValue)})(e),r=new Date,{issueId:i,remoteLinks:a}=e;return(({key:e})=>new o({key:e}))({key:n}).withMeta({newIssueViewLockedIn:!!e.meta&&e.meta.newIssueViewLockedIn,dataSource:"issueExpress",fetchTime:r}).withId(i).withRemoteLinks(a).build()},p=()=>{try{return Object(s("d/M9").d)(Object(s("y9+o").h)().baseUrl)}catch(e){return Object(s("d/M9").d)("")}},f=(e={})=>{const t=((e={})=>{const t={expiryThresholdSeconds:3600,maxSize:100,baseUrl:Object.prototype.hasOwnProperty.call(e,"baseUrl")?e.baseUrl:p(),ssrCachedIssue:null};return Object.assign({},t,e)
})(e),n=Object(s("d/M9").d)(t.baseUrl);return{clearCache:()=>{},loadIssues:()=>{},loadIssuesById:()=>{},getIssue:()=>{},getIssue$:()=>r.Observable.empty(),getIssueRemoteData$:e=>((e,t)=>h(e,t).map((e=>m(e,t))).filter(Boolean).catch((e=>(Object(s("cTFb").a)("issue.data-provider.source.issue-express","fetchIssueRemoteData: Failed to fetch issue remote data from gira",e,new(s("hmTa").a)({eventNameSuffix:s("X8m8").g,type:s("hmTa").h,app:s("hmTa").d,event:e})),r.Observable.empty()))))(n,Object(s("d/M9").q)(e)),refreshIssue$:()=>(()=>r.Observable.empty())(),updateIssue:()=>{},getMetrics:()=>({cacheSize:0,cacheStaleCount:0,cacheAvailableCapacity:0,cacheHit:!1,staleCacheHit:!1}),insertSerializedIssue:()=>{}}};let y;const b=()=>(null==y&&(y=f()),y)}}]);try{window.__jsEvalStop("async-prefetch-issues.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-prefetch-issues.f79daaee26d221cca71d.8.js.map