try{window.performance.mark("async-nextgen-common.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-nextgen-common"],{"1bCh":function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return i}));var r=t("q1tI"),a=t.n(r);const o={software:"hasSoftwareAccess",servicedesk:"hasServiceDeskAccess"},s=(n,e)=>Boolean(n.appPermissions&&n.appPermissions[o[e]]),i=({children:n,type:e})=>a.a.createElement(t("QwAD").b,null,(({tenantContext:t})=>{const r=s(t,e);return n({result:r})}));i.displayName="LicenseCheck"},"2eYa":function(n,e,t){"use strict";t.d(e,"f",(function(){return o})),t.d(e,"g",(function(){return s})),t.d(e,"l",(function(){return c})),t.d(e,"m",(function(){return u})),t.d(e,"j",(function(){return l})),t.d(e,"k",(function(){return f})),t.d(e,"h",(function(){return b})),t.d(e,"i",(function(){return g})),t.d(e,"n",(function(){return y})),t.d(e,"o",(function(){return h})),t.d(e,"b",(function(){return O})),t.d(e,"c",(function(){
return j})),t.d(e,"d",(function(){return w})),t.d(e,"e",(function(){return _})),t.d(e,"r",(function(){return k})),t.d(e,"s",(function(){return N})),t.d(e,"a",(function(){return S})),t.d(e,"p",(function(){return v})),t.d(e,"q",(function(){return C}));const r="software.next-gen.boards",a=`${r}.column.create`,o={analyticKey:a,slo:4e3},s=t("RGCN").a.concurrent.interaction({key:a,histogram:{result:"100_500_1000_2000_3000_4000_5000_6000"}}),i=`${r}.column.rename`,c={analyticKey:i,slo:4e3},u=t("RGCN").a.concurrent.interaction({key:i,histogram:{result:"100_500_1000_2000_3000_4000_5000_6000"}}),d=`${r}.column.rank`,l={analyticKey:d,slo:2e3},f=t("RGCN").a.concurrent.interaction({key:d,histogram:{result:"100_500_1000_2000_3000_4000_5000_6000"}}),m=`${r}.column.delete`,b={analyticKey:m,slo:4e3},g=t("RGCN").a.concurrent.interaction({key:m,histogram:{result:"100_500_1000_2000_3000_4000_5000_6000"}}),p=`${r}.column.set-limit`,y={analyticKey:p,slo:2e3},h=t("RGCN").a.interaction({key:p,histogram:{
result:"100_500_1000_2000_3000_4000_5000_6000"}}),O={analyticKey:`${r}.boardscope.critical`,slo:1e3},j={analyticKey:`${r}.boardscope.non-critical`,slo:1500},w={analyticKey:`${r}.card.create`,slo:1e3},_={analyticKey:`${r}.card.flag`,slo:1e3},k={analyticKey:`${r}.load.extension`,slo:1e3},N={analyticKey:`${r}.set.user.swimlane`,slo:1e3},S={analyticKey:`${r}.board.rename`,slo:1e3},v=t("RGCN").a.interaction({key:"jsw-complete-sprint-modal"}),C={analyticKey:`${r}.board.migration.dismiss`,slo:1e3}},"2irV":function(n,e,t){"use strict";var r=t("8yf6");e.a=new r.Subject},"69ZS":function(n,e,t){"use strict";t.d(e,"b",(function(){return o}));var r=t("4c1C");t("neMA"),t("OA6I");const a=(n,e)=>{const a=(new Date).valueOf();return Object(t("BQGg").a)(n,t("Zses").a,Object(t("Zses").b)(),{boardId:e}).flatMap((n=>{const e=(new Date).valueOf();return t("ZXUb").a.safeInfoWithoutCustomerData(`rest.swag.${t("Zses").a}.success`,"",{time:e-a}),t("2irV").a.next({origin:t("C3hZ").a,payload:n}),
r.Observable.of(n)}))},o=(n,e)=>a(n,e).toPromise().then((n=>n));e.a=a},A2oj:function(n,e,t){"use strict";t.r(e),t.d(e,"getEarlyPreload",(function(){return r})),t.d(e,"fetchData",(function(){return a}));const r=()=>{if(window.__JSW_BACKLOG_DATA_PROMISE__){const n=window.__JSW_BACKLOG_DATA_PROMISE__;return window.__JSW_BACKLOG_DATA_PROMISE__=null,n.then((n=>{if(n.errors&&n.errors.length||!n.data.boardScope)throw new(t("NXoh").a)({graphQLErrors:n.errors,errorMessage:"Backlog early fetch failed"});return n.data}))}return null},a=(n,e)=>{const a=r();if(null!=a)return a;return Object(t("69ZS").b)(n,e)};e.default=async({match:n},{tenantContext:e})=>{const{baseUrl:r}=e,o=n.params.boardId||"";try{if(Object(t("FbcP").f)(t("xYXa").j),!Object(t("GfYg").ab)())return await Object(t("69ZS").a)(r,o).toPromise().then((n=>(Object(t("FbcP").f)(t("xYXa").i),n)));const n=await a(r,o);return Object(t("FbcP").f)(t("xYXa").i),n}catch(s){throw Object(t("AfAr").a)({
component:"spa.view.routes.next-gen.backlog.getData",message:"An error was thrown while prefetching backlog data",name:"ResourceError"},s)}}},AfAr:function(n,e,t){"use strict";function r({name:n,message:e,component:r},a){this.name=n,this.message=e,a&&(this.name=a.name?a.name:n,this.message=a.message?a.message:e,a.stack&&(this.stack=a.stack)),t("Ltg2").a.safeErrorWithoutCustomerData(r,e,a)}t.d(e,"a",(function(){return a})),r.prototype=Object.create(Error.prototype),r.prototype.constructor=r;const a=({name:n="UnknownError",message:e="",component:a=""},o)=>o?(t("Ltg2").a.safeErrorWithoutCustomerData(a,e,o),o):new r({name:n,message:e,component:a},o)},BQGg:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));t("4c1C");const r=(n,e,r,a,o)=>Object(t("Q/Xf").a)("query",n,e,r,a,o)},C3hZ:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return a})),t.d(e,"e",(function(){return o})),t.d(e,"f",(function(){return s})),t.d(e,"c",(function(){return i})),
t.d(e,"d",(function(){return c}));const r="BOARD",a="BACKLOG",o="ROADMAPS",s="UNKNOWN",i="RESOURCES_CACHE_UPDATER_SOURCE",c="resourcesCacheSource"},DOLc:function(n,e,t){"use strict";t.r(e),t.d(e,"getEarlyPreload",(function(){return a})),t.d(e,"fetchData",(function(){return o}));const r=(n,e)=>Object(t("bBir").a)(n,e).toPromise().then((n=>(Object(t("FbcP").f)(t("xYXa").i),n))),a=()=>{if(window.__JSW_BOARD_DATA_PROMISE__){const n=window.__JSW_BOARD_DATA_PROMISE__;return window.__JSW_BOARD_DATA_PROMISE__=null,n.then((n=>{if(n.errors&&n.errors.length||!n.data.boardScope)throw new(t("NXoh").a)({graphQLErrors:n.errors,errorMessage:"Board critical early fetch failed"});return n.data.boardScope}))}return null},o=(n,e)=>{if(!Object(t("GfYg").ab)())return r(n,e||"");const o=a();return null!=o?o:r(n,e||"")};e.default=async({match:n},{tenantContext:e})=>{if(!Object(t("orzF").b)(e)||!n.params.boardId)throw Object(t("AfAr").a)({component:"spa.view.routes.next-gen.software-boards-data.getData",
message:"Current user is not authenticated",name:"AuthenticationError"});if(!Object(t("1bCh").b)(e,"software"))throw Object(t("AfAr").a)({component:"spa.view.routes.next-gen.software-boards-data.getData",message:"License check failed",name:"AuthenticationError"});const{baseUrl:r}=e;try{Object(t("FbcP").f)(t("xYXa").j);const e=await o(r,n.params.boardId);return Object(t("FbcP").f)(t("xYXa").i),e}catch(a){throw Object(t("AfAr").a)({component:"spa.view.routes.next-gen.software-boards.getData",message:"An error was thrown while prefetching board data",name:"ResourceError"},a)}}},GWB9:function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return o}));
/*!
 * ATTENTION
 *
 * This module is used on both the main board app and its vendorless early-script entry.
 *
 * Because of this, it can't have dependencies. Feature-flagging logic should be done outside this
 * module and values should be passed in. For now changes must happen on both calls.
 */
const r="SoftwareBoardScopeCriticalData",a="columnStatus {\n            status {\n                id\n                name\n                category\n            }\n            transitions {\n                id\n                name\n                status {\n                    id\n                }\n                originStatus { id }\n                cardType { id }\n                isGlobal\n                isInitial\n                hasConditions\n            }\n        }",o=(n=!1)=>`query ${r} ($boardId: ID!) {\n            boardScope(boardId: $boardId) {\n                userSwimlaneStrategy\n                board {\n                    name\n                    swimlaneStrategy\n                    hasClearedIssues\n                    rankCustomFieldId\n                    assignees {\n                        accountId\n                        displayName\n                        avatarUrl\n                    }\n                    columns {\n                        id\n                        name\n                        maxIssueCount\n                        status {\n                            id\n                            name\n                        }\n                        ${a}\n                        isDone\n                        isInitial\n                        cards {\n                            id\n                            flagged\n                            done\n                            parentId\n                            estimate {\n                                storyPoints\n                                originalEstimate {\n                                    value\n                                    valueAsText\n                                }\n                            }\n                            issue {\n                                id\n                                key\n                                summary\n                                labels\n                                assignee {\n                                    accountId\n                                }\n                                type { id, name, iconUrl }\n                                status { id }\n                            }\n                            priority {\n                                name\n                                iconUrl\n                            }\n                            dueDate\n                            childIssuesMetadata { complete, total }\n                        }\n                    }\n                    issueTypes {\n                        id\n                        name\n                        iconUrl\n                        hierarchyLevelType\n                    }\n                    inlineIssueCreate { enabled }\n                    issueChildren {\n                id\n                flagged\n                done\n                parentId\n                estimate {\n                    storyPoints\n                    originalEstimate {\n                        value\n                        valueAsText\n                    }\n                }\n                issue {\n                    id\n                    key\n                    summary\n                    labels\n                    assignee {\n                        accountId\n                        displayName\n                        avatarUrl\n                    }\n                    type { id, name, iconUrl }\n                    status { id }\n                }\n                priority {\n                    name\n                    iconUrl\n                }\n                dueDate\n            }\n                    cards { id }\n                    \n        editConfig {\n            inlineColumnEdit {\n                enabled\n            }\n            inlineIssueCreate {\n                enabled\n            }\n        }\n    \n                }\n                sprints(state: [ACTIVE]) {\n                    id\n                    name\n                    goal\n                    startDate\n                    endDate\n                    daysRemaining\n                    ${n?"cards { id }":""}\n                }\n                features { key, status, toggle, category }\n                projectLocation {\n                    id\n                    key\n                    name\n                    isSimplifiedProject\n                    issueTypes {\n                        id\n                        name\n                        iconUrl\n                        hierarchyLevelType\n                    }\n                }\n                issueParents {\n                    id\n                    key\n                    summary\n                    issue {\n                        status {\n                            id\n                            name\n                            category\n                        }\n                    }\n                    issueType {\n                        id\n                        name\n                        iconUrl\n                    }\n                    color\n                }\n                currentUser { permissions }\n                estimation {\n                    current {\n                        customFieldId\n                    }\n                }\n            }\n        }`
},HOTK:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return s})),t.d(e,"d",(function(){return i})),t.d(e,"e",(function(){return c})),t.d(e,"f",(function(){return u})),t.d(e,"g",(function(){return d})),t.d(e,"c",(function(){return l}));const r=(n,e,r)=>{const{message:a,path:o,queryName:s,statusCode:i,errorType:c,errorName:u,hash:d}=r,l={message:a||"",path:JSON.stringify(o||[]),statusCode:String(i||"[unknown]"),queryName:s,errorType:c?String(c):"",errorName:u?String(u):"",hash:d};return t("ZXUb").a.safeErrorWithoutCustomerData(n,e,l)},a="[errors in SWAG response]",o=(n,e,t,o)=>r("apollo.swag.error.graphql","[GraphQL error]",{message:a,path:n,statusCode:e,queryName:t,errorType:o}),s=(n,e,t)=>{r("apollo.swag.error.network","[Network error]",{message:`[Network error]: ${n}`,statusCode:e,queryName:t})},i=(n,e,t,o)=>{r("rest.swag.error.graphql","[GraphQL error]",{message:a,path:n,statusCode:e,queryName:t,errorType:o})},c=(n,e,t,a,o)=>{
r("rest.swag.error.network","[Network error]",{message:`[Network error]: ${n}`,statusCode:e,queryName:t,errorName:a,hash:o})},u=(n,e)=>{r("rest.swag.error.parsing","[Parsing error]",{message:`[Parsing error]: ${n}`,queryName:e})},d=({queryName:n,statusCode:e,isRetrySuccessful:r,retryStatusCode:a})=>t("ZXUb").a.safeErrorWithoutCustomerData("rest.swag.retry","[Retry]",{queryName:n,statusCode:e||"",isRetrySuccessful:String(r),retryStatusCode:a||""}),l=({queryName:n,statusCode:e})=>t("ZXUb").a.safeErrorWithoutCustomerData("apollo.swag.retry","[Retry]",{queryName:n,statusCode:e})},HuSD:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));const r=n=>`${t("GGN9").n}${n}`},NXoh:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));class r extends Error{constructor({graphQLErrors:n,networkError:e,errorMessage:t,traceId:r=""}){super(t),this.graphQLErrors=[],this.networkError=null,this.traceId="",this.graphQLErrors=n||[],this.networkError=e||null,this.message=t||(n=>{let e=""
;return Array.isArray(n.graphQLErrors)&&0!==n.graphQLErrors.length&&n.graphQLErrors.forEach((n=>{const t=n?n.message:"Error message not found.";e+=`GraphQL error: ${t}\n`})),n.networkError&&(e+=`Network error: ${n.networkError.message}\n`),e=e.replace(/\n$/,""),e})(this),this.name=this.constructor.name,this.traceId=r,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(this.message).stack}skipSentry(){return null!=this.networkError||this.graphQLErrors.length>0}}},PtqM:function(n,e,t){var r=t("NykK"),a=t("ExA7"),o=t("YO3V");n.exports=function(n){if(!a(n))return!1;var e=r(n);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof n.message&&"string"==typeof n.name&&!o(n)}},"Q/Xf":function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));t("neMA"),t("Drjo"),t("jmrH"),t("92bn"),t("S7rW"),t("OA6I");var r=t("mwIZ"),a=t.n(r),o=t("PtqM"),s=t.n(o),i=t("p46w"),c=t.n(i),u=t("4c1C"),d=t("EcEN"),l=t.n(d)
;const f=".time",m=(n,e)=>{Object(t("/h0V").a)().then((t=>{const r=t.getInstance();if(!r)return;let a="unknown";if(null!==e){const n=String(e);"0"===n||"429"===n?a=n:n.match(/^[12345][0-9]{2}$/)&&(a=`${n[0]}xx`)}r.sendOperationalEvent({action:"fetch",actionSubject:"swag operation",attributes:{key:n,statusCode:e,statusCodeFamily:a},source:"swagOperation"})}))},b=(n,e,r,a,o)=>{if(void 0!==n){if(m(n,r),void 0!==e){const e=!0;Object(t("/NXs").b)().cancel({key:n+f,concurrentId:a},e)}o&&o.cancel()}},g=({baseUrl:n,operationName:e,query:r,variables:a,action:o,headersProcessor:s})=>{let i={};const u=c.a.get("atlassian.xsrf.token");return"mutation"===o&&(u||t("Ltg2").a.safeErrorWithoutCustomerData("board.xsrf-token.load.failure","XSRF Token failed to load"),i={"atl-xsrf-token":u}),Object(t("c0Rh").a)((()=>Object(t("0zaF").a)("jsw.perf.jfe-swag-tenant-based-routing",!1))()?`${n}/jsw2/graphql?operation=${e}`:`${n}/jsw/graphql?operation=${e}`,{method:"POST",body:JSON.stringify({operationName:e,
query:r,variables:a}),headers:i,headersProcessor:s})},p=(n,e,r,o,i,c)=>{const{analyticKey:d,slo:p,useBm3Interaction:y,concurrentMetricDefinition:h}=c||{};let O="";const j=n=>{O=n.get(t("wVOT").b)||""},w=Object(t("/NXs").b)(),_=l.a.v4();let k=null;return d&&y&&(k=t("RGCN").a.interaction({key:d,histogram:{result:"1000_2000_3000_4000_5000_6000"}})),u.Observable.defer((()=>(void 0!==d&&void 0!==p&&void 0===h&&w.markStartOfInteraction({key:d+f,concurrentId:_}),k&&k.start(),void 0!==h&&h(_).start(),g({baseUrl:e,operationName:r,query:o,variables:i,action:n,headersProcessor:j})))).catch((s=>{const c=a()(s,["statusCode"],null);return[502,503,504].includes(Number(c))&&"query"===n?g({baseUrl:e,operationName:r,query:o,variables:i,action:n,headersProcessor:j}).do((()=>{Object(t("HOTK").g)({queryName:r,statusCode:c,isRetrySuccessful:!0,retryStatusCode:null})}),(n=>{const e=a()(n,["statusCode"],null);Object(t("HOTK").g)({queryName:r,statusCode:c,isRetrySuccessful:!1,retryStatusCode:e})
})):u.Observable.throw(s)})).catch((n=>{const e=s()(n)?n.message:`[unknown error] = ${JSON.stringify(n)}`,o=a()(n,["statusCode"],null),i=a()(n,["name"],null),c=new(t("NXoh").a)({networkError:n,traceId:O}),l=Object(t("0QLB").a)(c);return Object(t("HOTK").e)(e,o,r,i,l),b(d,p,o,_,k),u.Observable.throw(c)})).flatMap((n=>{n&&n.data||Object(t("HOTK").f)("empty response.data",r);try{if(n.errors){const e=n.errors.map((n=>{const{path:e,message:o}=n,s=a()(n,["extensions","statusCode"],null),i=a()(n,["extensions","errorType"],void 0),c=a()(n,["extensions","userMessage"],void 0);return Object(t("HOTK").d)(e,s,r,i),b(d,p,s,_,k),{message:o,path:e,extensions:{statusCode:s?Number(s):null,errorType:i,userMessage:c}}}));return u.Observable.throw(new(t("NXoh").a)({graphQLErrors:e,traceId:O}))}}catch(o){const n=s()(o)?o.message:`[unknown error] = ${JSON.stringify(o)}`;throw Object(t("HOTK").f)(n,r),b(d,p,"unknown",_,k),o}var e;void 0!==d&&(m(d,null!==(e=n.statusCode)&&void 0!==e?e:"200"),
void 0!==p&&void 0===h&&w.markTimeToFinishTask({key:d+f,concurrentId:_,sloSuccessThreshold:p}),k&&k.stop(),void 0!==h&&h(_).stop());return u.Observable.of(n.data)}))}},RTFV:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t("q1tI"),a=t.n(r),o=t("hJd6");const s=({to:n})=>a.a.createElement("script",{dangerouslySetInnerHTML:{__html:`window.location.assign("${n}")`}});s.displayName="InlineRedirect",s.displayName="InlineRedirect";const i=()=>{const[{location:{pathname:n,search:e}}]=Object(o.r)(),t=`/login.jsp?os_destination=${encodeURIComponent(n+e)}`;return a.a.createElement(o.b,{to:t})}},Zses:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return a}));
/*!
 * ATTENTION
 *
 * This module is used on both the main backlog app and its vendorless early-script entry.
 *
 * Because of this, it can't have dependencies. Feature-flagging logic should be done outside this
 * module and values should be passed in. For now changes must happen on both calls.
 */
const r="BacklogDataQuery",a=()=>`\n    query ${r} ($boardId: ID!) {\n        jira {\n            timeTrackingOptions {\n                workingHoursPerDay\n                workingDaysPerWeek\n                defaultUnit\n                timeFormat\n            }\n        }\n        boardScope(boardId: $boardId) {\n            sprints(state:[ACTIVE, FUTURE]) {\n                id\n                name\n                goal\n                startDate\n                endDate\n                daysRemaining\n                cards {\n                    id\n                    issue {\n                        id\n                        key\n                        summary\n                        labels\n                        type {\n                            id\n                            name\n                            iconUrl\n                        }\n                        status {\n                            id\n                            name\n                            category\n                        }\n                        assignee {\n                            accountId\n                            displayName\n                            avatarUrl\n                        }\n                    }\n                    flagged\n                    done\n                    parentId\n                    estimate {\n                        storyPoints\n                        originalEstimate {\n                            value\n                            valueAsText\n                        }\n                    }\n                    priority {\n                        name\n                        iconUrl\n                    }\n                    dueDate\n                    childIssuesMetadata {\n                        complete\n                        total\n                    }\n                    fixVersions\n                }\n                sprintState\n            }\n            backlog {\n                boardIssueListKey\n                requestColumnMigration\n                cards {\n                    id\n                    issue {\n                        id\n                        key\n                        summary\n                        labels\n                        type {\n                            id\n                            name\n                            iconUrl\n                        }\n                        status {\n                            id\n                            name\n                            category\n                        }\n                        assignee {\n                            accountId\n                            displayName\n                            avatarUrl\n                        }\n                    }\n                    flagged\n                    done\n                    parentId\n                    estimate {\n                        storyPoints\n                        originalEstimate {\n                            value\n                            valueAsText\n                        }\n                    }\n                    priority {\n                        name\n                        iconUrl\n                    }\n                    dueDate\n                    childIssuesMetadata {\n                        complete\n                        total\n                    }\n                    fixVersions\n                }\n            }\n            board {\n                cards {\n                    id\n                    issue {\n                        id\n                        key\n                        summary\n                        labels\n                        type {\n                            id\n                            name\n                            iconUrl\n                        }\n                        status {\n                            id\n                            name\n                            category\n                        }\n                        assignee {\n                            accountId\n                            displayName\n                            avatarUrl\n                        }\n                    }\n                    flagged\n                    done\n                    parentId\n                    estimate {\n                        storyPoints\n                        originalEstimate {\n                            value\n                            valueAsText\n                        }\n                    }\n                    priority {\n                        name\n                        iconUrl\n                    }\n                    dueDate\n                    childIssuesMetadata {\n                        complete\n                        total\n                    }\n                    fixVersions\n                }\n                rankCustomFieldId\n                issueParents {\n                    id\n                    key\n                    summary\n                    issueType {\n                        id\n                        name\n                        iconUrl\n                    }\n                    color\n                }\n            }\n            currentUser {\n                permissions\n            }\n            projectLocation {\n                id\n                key\n                name\n                issueTypes {\n                    id\n                    name\n                    iconUrl\n                    hierarchyLevelType\n                    hasRequiredFields\n                } \n                features {\n                    key\n                    status\n                }\n            }\n            features {\n                key\n                status\n            }\n            estimation {\n                current {\n                    customFieldId\n                }\n                available {\n                    statisticFieldId\n                }\n            }\n        }\n    }\n`
},bBir:function(n,e,t){"use strict";var r=t("4c1C");t("neMA"),t("OA6I");const a=n=>r.Observable.of(n.boardScope);e.a=(n,e)=>Object(t("BQGg").a)(n,t("GWB9").c,Object(t("GWB9").b)(Object(t("r8Qx").x)()),{boardId:e},t("2eYa").b).flatMap(a)},c0Rh:function(n,e,t){"use strict";var r=t("QILm"),a=t.n(r),o=t("RPZL"),s=t("4c1C");t("neMA"),t("OA6I"),t("S7rW");const i=["perf","headersProcessor"];e.a=function(n,e={}){const{perf:r,headersProcessor:c}=e,u=a()(e,i);let d;const l=!!r;if(l){const e=`REST${(n=>{const e=n.replace(/\//g,"_");return e.substr(0,e.indexOf("?")>-1?e.indexOf("?"):e.length)})(n)}`;d=r&&`${null!=r.prefix&&""!==r.prefix?`${r.prefix}_`:""}${r.key}`||e,Object(t("FbcP").f)(`BEGIN_${d}`)}return s.Observable.of(n).mergeMap((()=>fetch(n,Object(o.merge)(Object(o.merge)(t("drMZ").a,u),Object(t("eiUu").b)())))).mergeMap((n=>{if(l&&Object(t("FbcP").f)(`END_${d}`),!n.ok){const{status:e}=n;return n.text().then((r=>{const a=n.headers.get(t("wVOT").b)
;throw null!=a&&""!==a?new(t("aDTl").e)(e,r,a):new(t("aDTl").e)(e,r)}))}return"function"==typeof c&&c(n.headers),204===n.status?s.Observable.of(null):n.json()}))}},orzF:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return s}));var r=t("q1tI"),a=t.n(r);const o=n=>Boolean(n.atlassianAccountId),s=({children:n})=>a.a.createElement(t("QwAD").b,null,(({tenantContext:e})=>o(e)?n:a.a.createElement(t("RTFV").a,null)));s.displayName="AuthenticationCheck"},r8Qx:function(n,e,t){"use strict";t.d(e,"n",(function(){return r})),t.d(e,"t",(function(){return a})),t.d(e,"d",(function(){return o})),t.d(e,"c",(function(){return s})),t.d(e,"p",(function(){return i})),t.d(e,"u",(function(){return c})),t.d(e,"o",(function(){return u})),t.d(e,"z",(function(){return d})),t.d(e,"B",(function(){return l})),t.d(e,"f",(function(){return f})),t.d(e,"j",(function(){return m})),t.d(e,"e",(function(){return b})),t.d(e,"a",(function(){return g})),t.d(e,"b",(function(){return p})),
t.d(e,"l",(function(){return y})),t.d(e,"k",(function(){return h})),t.d(e,"v",(function(){return O})),t.d(e,"F",(function(){return j})),t.d(e,"r",(function(){return w})),t.d(e,"m",(function(){return _})),t.d(e,"y",(function(){return k})),t.d(e,"g",(function(){return N})),t.d(e,"i",(function(){return S})),t.d(e,"D",(function(){return v})),t.d(e,"x",(function(){return C})),t.d(e,"A",(function(){return E})),t.d(e,"C",(function(){return I})),t.d(e,"s",(function(){return x})),t.d(e,"E",(function(){return D})),t.d(e,"w",(function(){return A})),t.d(e,"q",(function(){return T})),t.d(e,"h",(function(){return F}))
;const r=()=>Object(t("0zaF").b)("jsw.killswitch.dev-status-on-cards",!1),a=()=>Object(t("0zaF").b)("jsw.totoro-enable.listening.to.new.jirt.board.cache.event",!1),o=()=>Object(t("0zaF").b)("jsw.nextgen.board.polling.interval",6e4),s=()=>Object(t("0zaF").b)("jsw.nextgen.board.jirt.debounce.interval",500),i=()=>Object(t("0zaF").a)("jsw.agility.board.iccOpenWhenBoardEmpty",!1),c=()=>Object(t("0zaF").a)("jsw.totoro-refactor.to.loosely.lazy",!1),u=()=>Object(t("0zaF").a)("fe.platform.error.tracking.enabled",!1),d=()=>Object(t("0zaF").a)("jsw-agile-board-prefetch-issue-data-by-column-limit",!1),l=()=>Object(t("0zaF").a)("jsw.perf.jfe-swag-tenant-based-routing",!1),f=()=>Object(t("0zaF").a)("jsw.perf.board-card-move-mutation-integration",!1),m=()=>Object(t("0zaF").a)("jsw.perf.custom-filters-core-tmp",!1),b=()=>Object(t("0zaF").b)("jsw.perf.custom-filters-core-tmp.debounce-time",500),g=()=>Object(t("0zaF").b)("jsw.nextgen.custom-filters.refiltering-debounce-interval-ms",500),p=()=>Object(t("0zaF").a)("jsw.agility.custom.filter.feature.discovery",!1),y=()=>Object(t("0zaF").a)("jsw.perf.custom-filters.throttle.enable",!1),h=()=>Object(t("0zaF").a)("jsw.tmp.custom-filters.onboarding-conflict.fix",!1),O=()=>Object(t("0zaF").a)("automation.menu.manual-rule.enabled",!1),j=()=>Object(t("0zaF").a)("jsw.pollinator.tenants",!1),w=(n=!1)=>Object(t("G9hk").a)().getVariantValue("jsw.onboarding.experiment.kanban.onboarding",{
default:t("xNJn").c,oneOf:[t("xNJn").c,t("xNJn").a,t("xNJn").b],shouldTrackExposureEvent:n})===t("xNJn").b,_=()=>Object(t("0zaF").a)("jira-date-fns-migration-software_0mmo1",!1),k=(n=!1)=>Object(t("G9hk").a)().getVariantValue("jsw.onboarding.experiment.planning.basics.onboarding",{default:t("xNJn").c,oneOf:[t("xNJn").c,t("xNJn").a,t("xNJn").b],shouldTrackExposureEvent:n
})===t("xNJn").b,N=()=>Object(t("0zaF").a)("jira-bottom-right-corner-controller_8kq25",!1),S=()=>Object(t("0zaF").a)("fusion-isotopes-code-insights-on-the-board-hover-on-icons-on-tmp-boards_nqq7r",!1),v=()=>Object(t("0zaF").a)("jsw.perf.skip-board-and-backlog-ssr",!1),C=()=>Object(t("0zaF").a)("jsw.perf.catbus.parallel-sprints.core",!1),E=()=>Object(t("0zaF").a)("jsw.tmp.enable-required-fields",!1),I=()=>Object(t("0zaF").a)("jsw.roadmap.shared-filter-utilities-board",!1),x=()=>Object(t("0zaF").a)("jira.insights.key-moments-experiment",!1),D=()=>Object(t("0zaF").a)("jira.insights.support-sprint-switcher-on-tmp",!1),A=()=>Object(t("0zaF").a)("issue.details.modal-dialog-bump",!1),T=()=>Object(t("0zaF").a)("jira.insights.insights-open-guard-panel-from-render",!1),F=()=>Object(t("0zaF").a)("jira.insights.close-insights-panel-on-click-issue",!1)},xYXa:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"i",(function(){return a})),t.d(e,"j",(function(){return o})),
t.d(e,"f",(function(){return s})),t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return c})),t.d(e,"h",(function(){return u})),t.d(e,"g",(function(){return d})),t.d(e,"e",(function(){return l})),t.d(e,"d",(function(){return f}));const r=Object(t("HuSD").a)(t("GGN9").a),a=Object(t("HuSD").a)(t("GGN9").j),o=Object(t("HuSD").a)(t("GGN9").k),s=(Object(t("HuSD").a)(t("GGN9").b),Object(t("HuSD").a)(t("GGN9").g)),i=Object(t("HuSD").a)(t("GGN9").d),c=Object(t("HuSD").a)(t("GGN9").c),u=Object(t("HuSD").a)(t("GGN9").i),d=Object(t("HuSD").a)(t("GGN9").h),l=Object(t("HuSD").a)(t("GGN9").f),f=Object(t("HuSD").a)(t("GGN9").e)}}]);try{window.__jsEvalStop("async-nextgen-common.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-nextgen-common.5a38a132c8c295f81030.8.js.map