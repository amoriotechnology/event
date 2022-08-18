try{window.performance.mark("async-jira-software-resource-invalidator-cache-wrapper.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-jira-software-resource-invalidator-cache-wrapper"],{B7yo:function(e,a,i){"use strict";i.d(a,"b",(function(){return r})),i.d(a,"a",(function(){return n}));var d=i("hJd6");const r=Object(i("LNb/").a)(i("GfYg").bb,Object(d.k)({type:i("MD6T").O,getKey:({match:e})=>e.params.boardId||"",getDataLoader:()=>Promise.all([i.e("vendor~748942c6"),i.e("vendor~31ecd969"),i.e("vendor~1f20a385"),i.e("async-nextgen-common")]).then(i.bind(null,"A2oj")),maxAge:36e5})),n=Object(i("LNb/").a)(i("GfYg").bb,Object(i("/ydu").b)({type:i("MD6T").Q,getQuery:({match:e},{tenantContext:a})=>({parameters:i("THb4").a,variables:{boardId:Object(i("fen4").a)({resourceOwner:"jira-software",cloudId:a.cloudId,resourceType:"board",resourceId:String(e.params.boardId)})},options:{fetchPolicy:"store-and-network"}})}))},"PzV+":function(e,a,i){"use strict";i.r(a)
;var d=i("q1tI"),r=i.n(d),n=(i("VcZd"),i("Ku+5")),t=i("hJd6");const o=({update:e,refresh:a,clear:i})=>({update:e,refresh:a,clear:i});var c=()=>{const e=Object(t.q)(i("/3Oa").b),a=Object(t.q)(i("B7yo").b),r=Object(t.q)(i("SLXC").a),n=Object(d.useRef)({});return Object(d.useEffect)((()=>{n.current={[i("C3hZ").b]:o(e),[i("C3hZ").a]:o(a),[i("C3hZ").e]:o(r)}}),[e,a,r]),[n]};const l=(e,a,d)=>{const r=Object(i("fen4").a)({resourceOwner:"jira-software",cloudId:a,resourceType:"board",resourceId:d});e.commitUpdate((e=>{const a=e.getRoot().getLinkedRecord("boardScope",{boardId:r});a&&a.invalidateRecord()}))};var s=e=>{const[a]=c(),r=Object(n.useRelayEnvironment)(),o=Object(i("EPof").a)(),[{match:s}]=Object(t.r)(),p=s.params.boardId||"";return Object(d.useEffect)((()=>{let d=!1;const n=i("b62n").b.filter((a=>a===e)).take(1).subscribe((()=>{Object.keys(a.current).filter((a=>a!==e)).forEach((e=>{a.current[e].clear()})),l(r,o,p),e in a.current&&(d=!0)}));return()=>{n.unsubscribe(),
d&&e in a.current&&(a.current[e].clear(),l(r,o,p))}}),[e,a,r,o,p]),[i("b62n").b]};i("fjAU");var p=e=>{const{createAnalyticsEvent:a}=Object(i("rZ/p").a)();return Object(d.useEffect)((()=>{const d=i("abwv").a.filter((a=>a===e)).subscribe((()=>{Object(i("SALc").f)(a({}),"resourcesCacheInvalidator updatedStaleData",{origin:e})}));return()=>{d.unsubscribe()}}),[a,e]),[i("abwv").a]},u=i("3tO9"),k=i.n(u),b=i("J2iB"),m=i.n(b);var R=()=>{const[e]=c();return Object(d.useEffect)((()=>{const a=i("2irV").a.filter((e=>!m()(e.origin))).subscribe((a=>{a.origin in e.current&&(m()(a.payload)?e.current[a.origin].clear():e.current[a.origin].update((e=>k()(k()(k()({},e),a.payload),{},{[i("C3hZ").d]:i("C3hZ").c}))))}));return()=>{a.unsubscribe()}}),[e]),[i("2irV").a]};const F=({origin:e})=>(s(e),R(),p(e),r.a.createElement(r.a.Fragment,null)),T=e=>r.a.createElement(i("Icg4").b,{id:"jira-software-resource-invalidator"},r.a.createElement(F,e));T.displayName="ResourcesCacheWrapperWithBoundary";a.default=T},
SLXC:function(e,a,i){"use strict";i.d(a,"a",(function(){return r}));var d=i("hJd6");const r=Object(d.k)({type:i("MD6T").jb,getKey:({match:e})=>e.params.boardId||"",getDataLoader:()=>Promise.all([i.e("vendor~748942c6"),i.e("vendor~31ecd969"),i.e("vendor~1f20a385"),i.e("async-resource-roadmap")]).then(i.bind(null,"obzL")),maxAge:36e5,isBrowserOnly:!0})},THb4:function(e,a,i){"use strict";const d=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"boardId"}],a=[{kind:"Variable",name:"boardId",variableName:"boardId"}],i=[{kind:"Literal",name:"state",value:["ACTIVE","FUTURE"]}],d={kind:"ScalarField",name:"id"},r={kind:"ScalarField",name:"name"},n={kind:"ScalarField",name:"goal"},t={kind:"ScalarField",name:"startDate"},o={kind:"ScalarField",name:"endDate"},c={kind:"ScalarField",name:"daysRemaining"},l={kind:"ScalarField",name:"key"},s={kind:"ScalarField",name:"summary"},p={kind:"ScalarField",name:"labels"},u={kind:"ScalarField",name:"iconUrl"},k={kind:"ScalarField",name:"category"
},b={kind:"ScalarField",name:"accountId"},m={kind:"ScalarField",name:"picture"},R={kind:"ScalarField",name:"flagged"},F={kind:"ScalarField",name:"done"},T={kind:"ScalarField",name:"parentId"},y={kind:"ScalarField",name:"storyPoints"},f={kind:"ScalarField",name:"value"},S={kind:"ScalarField",name:"valueAsText"},h={kind:"ScalarField",name:"dueDate"},O={kind:"ScalarField",name:"complete"},g={kind:"ScalarField",name:"total"},q={kind:"ScalarField",name:"fixVersionsIds"},H={kind:"ScalarField",name:"sprintState"},W={kind:"ScalarField",name:"boardIssueListKey"},L={kind:"ScalarField",name:"requestColumnMigration"},C={kind:"ScalarField",name:"rankCustomFieldId"},v={kind:"ScalarField",name:"color"},I={kind:"ScalarField",name:"permissions"},j={kind:"ScalarField",name:"hierarchyLevelType"},E={kind:"ScalarField",name:"hasRequiredFields"},U={kind:"ScalarField",name:"status"},w={concreteType:"CurrentEstimation",kind:"LinkedField",name:"current",plural:!1,selections:[{kind:"ScalarField",
name:"customFieldId"}]},P={kind:"ScalarField",name:"statisticFieldId"},M=[d,r,u],x={concreteType:"SoftwareCard",kind:"LinkedField",name:"cards",plural:!0,selections:[d,l,s,p,{concreteType:"CardType",kind:"LinkedField",name:"type",plural:!1,selections:M},{concreteType:"CardStatus",kind:"LinkedField",name:"status",plural:!1,selections:[d,r,k]},{kind:"LinkedField",name:"assignee",plural:!1,selections:[{kind:"ScalarField",name:"__typename"},b,r,m]},R,F,T,{concreteType:"Estimate",kind:"LinkedField",name:"estimate",plural:!1,selections:[y,{concreteType:"OriginalEstimate",kind:"LinkedField",name:"originalEstimate",plural:!1,selections:[f,S]}]},{concreteType:"CardPriority",kind:"LinkedField",name:"priority",plural:!1,selections:[r,u]},h,{concreteType:"ChildCardsMetadata",kind:"LinkedField",name:"childCardsMetadata",plural:!1,selections:[O,g]},q]};return{fragment:{argumentDefinitions:e,kind:"Fragment",name:"srcNextGenBacklogQuery",selections:[{kind:"RequiredField",field:{args:a,
concreteType:"BoardScope",kind:"LinkedField",name:"boardScope",plural:!1,selections:[{kind:"RequiredField",field:{args:i,concreteType:"Sprint",kind:"LinkedField",name:"sprints",plural:!0,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.sprints.id"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.sprints.name"},n,t,o,c,{kind:"RequiredField",field:{concreteType:"SoftwareCard",kind:"LinkedField",name:"cards",plural:!0,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.sprints.cards.id"},{kind:"RequiredField",field:l,action:"THROW",path:"boardScope.sprints.cards.key"},{kind:"RequiredField",field:s,action:"THROW",path:"boardScope.sprints.cards.summary"},{kind:"RequiredField",field:p,action:"THROW",path:"boardScope.sprints.cards.labels"},{kind:"RequiredField",field:{concreteType:"CardType",kind:"LinkedField",name:"type",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.sprints.cards.type.id"},{
kind:"RequiredField",field:r,action:"THROW",path:"boardScope.sprints.cards.type.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.sprints.cards.type.iconUrl"}]},action:"THROW",path:"boardScope.sprints.cards.type"},{kind:"RequiredField",field:{concreteType:"CardStatus",kind:"LinkedField",name:"status",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.sprints.cards.status.id"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.sprints.cards.status.name"},{kind:"RequiredField",field:k,action:"THROW",path:"boardScope.sprints.cards.status.category"}]},action:"THROW",path:"boardScope.sprints.cards.status"},{kind:"LinkedField",name:"assignee",plural:!1,selections:[{kind:"RequiredField",field:b,action:"THROW",path:"boardScope.sprints.cards.assignee.accountId"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.sprints.cards.assignee.name"},{kind:"RequiredField",field:m,action:"THROW",
path:"boardScope.sprints.cards.assignee.picture"}]},{kind:"RequiredField",field:R,action:"THROW",path:"boardScope.sprints.cards.flagged"},{kind:"RequiredField",field:F,action:"THROW",path:"boardScope.sprints.cards.done"},T,{concreteType:"Estimate",kind:"LinkedField",name:"estimate",plural:!1,selections:[y,{concreteType:"OriginalEstimate",kind:"LinkedField",name:"originalEstimate",plural:!1,selections:[{kind:"RequiredField",field:f,action:"THROW",path:"boardScope.sprints.cards.estimate.originalEstimate.value"},{kind:"RequiredField",field:S,action:"THROW",path:"boardScope.sprints.cards.estimate.originalEstimate.valueAsText"}]}]},{concreteType:"CardPriority",kind:"LinkedField",name:"priority",plural:!1,selections:[{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.sprints.cards.priority.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.sprints.cards.priority.iconUrl"}]},h,{concreteType:"ChildCardsMetadata",kind:"LinkedField",name:"childCardsMetadata",
plural:!1,selections:[{kind:"RequiredField",field:O,action:"THROW",path:"boardScope.sprints.cards.childCardsMetadata.complete"},{kind:"RequiredField",field:g,action:"THROW",path:"boardScope.sprints.cards.childCardsMetadata.total"}]},{kind:"RequiredField",field:q,action:"THROW",path:"boardScope.sprints.cards.fixVersionsIds"}]},action:"THROW",path:"boardScope.sprints.cards"},{kind:"RequiredField",field:H,action:"THROW",path:"boardScope.sprints.sprintState"}],storageKey:'sprints(state:["ACTIVE","FUTURE"])'},action:"THROW",path:"boardScope.sprints"},{kind:"RequiredField",field:{concreteType:"Backlog",kind:"LinkedField",name:"backlog",plural:!1,selections:[{kind:"RequiredField",field:W,action:"THROW",path:"boardScope.backlog.boardIssueListKey"},{kind:"RequiredField",field:L,action:"THROW",path:"boardScope.backlog.requestColumnMigration"},{kind:"RequiredField",field:{concreteType:"SoftwareCard",kind:"LinkedField",name:"cards",plural:!0,selections:[{kind:"RequiredField",field:d,
action:"THROW",path:"boardScope.backlog.cards.id"},{kind:"RequiredField",field:l,action:"THROW",path:"boardScope.backlog.cards.key"},{kind:"RequiredField",field:s,action:"THROW",path:"boardScope.backlog.cards.summary"},{kind:"RequiredField",field:p,action:"THROW",path:"boardScope.backlog.cards.labels"},{kind:"RequiredField",field:{concreteType:"CardType",kind:"LinkedField",name:"type",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.backlog.cards.type.id"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.backlog.cards.type.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.backlog.cards.type.iconUrl"}]},action:"THROW",path:"boardScope.backlog.cards.type"},{kind:"RequiredField",field:{concreteType:"CardStatus",kind:"LinkedField",name:"status",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.backlog.cards.status.id"},{kind:"RequiredField",field:r,action:"THROW",
path:"boardScope.backlog.cards.status.name"},{kind:"RequiredField",field:k,action:"THROW",path:"boardScope.backlog.cards.status.category"}]},action:"THROW",path:"boardScope.backlog.cards.status"},{kind:"LinkedField",name:"assignee",plural:!1,selections:[{kind:"RequiredField",field:b,action:"THROW",path:"boardScope.backlog.cards.assignee.accountId"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.backlog.cards.assignee.name"},{kind:"RequiredField",field:m,action:"THROW",path:"boardScope.backlog.cards.assignee.picture"}]},{kind:"RequiredField",field:R,action:"THROW",path:"boardScope.backlog.cards.flagged"},{kind:"RequiredField",field:F,action:"THROW",path:"boardScope.backlog.cards.done"},T,{concreteType:"Estimate",kind:"LinkedField",name:"estimate",plural:!1,selections:[y,{concreteType:"OriginalEstimate",kind:"LinkedField",name:"originalEstimate",plural:!1,selections:[{kind:"RequiredField",field:f,action:"THROW",
path:"boardScope.backlog.cards.estimate.originalEstimate.value"},{kind:"RequiredField",field:S,action:"THROW",path:"boardScope.backlog.cards.estimate.originalEstimate.valueAsText"}]}]},{concreteType:"CardPriority",kind:"LinkedField",name:"priority",plural:!1,selections:[{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.backlog.cards.priority.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.backlog.cards.priority.iconUrl"}]},h,{concreteType:"ChildCardsMetadata",kind:"LinkedField",name:"childCardsMetadata",plural:!1,selections:[{kind:"RequiredField",field:O,action:"THROW",path:"boardScope.backlog.cards.childCardsMetadata.complete"},{kind:"RequiredField",field:g,action:"THROW",path:"boardScope.backlog.cards.childCardsMetadata.total"}]},q]},action:"THROW",path:"boardScope.backlog.cards"}]},action:"THROW",path:"boardScope.backlog"},{kind:"RequiredField",field:{concreteType:"SoftwareBoard",kind:"LinkedField",name:"board",plural:!1,selections:[{
kind:"RequiredField",field:{concreteType:"SoftwareCard",kind:"LinkedField",name:"cards",plural:!0,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.board.cards.id"},{kind:"RequiredField",field:l,action:"THROW",path:"boardScope.board.cards.key"},{kind:"RequiredField",field:s,action:"THROW",path:"boardScope.board.cards.summary"},{kind:"RequiredField",field:p,action:"THROW",path:"boardScope.board.cards.labels"},{kind:"RequiredField",field:{concreteType:"CardType",kind:"LinkedField",name:"type",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.board.cards.type.id"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.board.cards.type.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.board.cards.type.iconUrl"}]},action:"THROW",path:"boardScope.board.cards.type"},{kind:"RequiredField",field:{concreteType:"CardStatus",kind:"LinkedField",name:"status",plural:!1,selections:[{kind:"RequiredField",field:d,
action:"THROW",path:"boardScope.board.cards.status.id"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.board.cards.status.name"},{kind:"RequiredField",field:k,action:"THROW",path:"boardScope.board.cards.status.category"}]},action:"THROW",path:"boardScope.board.cards.status"},{kind:"LinkedField",name:"assignee",plural:!1,selections:[{kind:"RequiredField",field:b,action:"THROW",path:"boardScope.board.cards.assignee.accountId"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.board.cards.assignee.name"},{kind:"RequiredField",field:m,action:"THROW",path:"boardScope.board.cards.assignee.picture"}]},{kind:"RequiredField",field:R,action:"THROW",path:"boardScope.board.cards.flagged"},{kind:"RequiredField",field:F,action:"THROW",path:"boardScope.board.cards.done"},T,{concreteType:"Estimate",kind:"LinkedField",name:"estimate",plural:!1,selections:[y,{concreteType:"OriginalEstimate",kind:"LinkedField",name:"originalEstimate",plural:!1,selections:[{kind:"RequiredField",
field:f,action:"THROW",path:"boardScope.board.cards.estimate.originalEstimate.value"},{kind:"RequiredField",field:S,action:"THROW",path:"boardScope.board.cards.estimate.originalEstimate.valueAsText"}]}]},{concreteType:"CardPriority",kind:"LinkedField",name:"priority",plural:!1,selections:[{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.board.cards.priority.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.board.cards.priority.iconUrl"}]},h,{concreteType:"ChildCardsMetadata",kind:"LinkedField",name:"childCardsMetadata",plural:!1,selections:[{kind:"RequiredField",field:O,action:"THROW",path:"boardScope.board.cards.childCardsMetadata.complete"},{kind:"RequiredField",field:g,action:"THROW",path:"boardScope.board.cards.childCardsMetadata.total"}]},q]},action:"THROW",path:"boardScope.board.cards"},{kind:"RequiredField",field:C,action:"THROW",path:"boardScope.board.rankCustomFieldId"}]},action:"THROW",path:"boardScope.board"},{kind:"RequiredField",field:{
concreteType:"CardParent",kind:"LinkedField",name:"cardParents",plural:!0,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.cardParents.id"},{kind:"RequiredField",field:l,action:"THROW",path:"boardScope.cardParents.key"},{kind:"RequiredField",field:s,action:"THROW",path:"boardScope.cardParents.summary"},{kind:"RequiredField",field:{concreteType:"CardType",kind:"LinkedField",name:"cardType",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.cardParents.cardType.id"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.cardParents.cardType.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.cardParents.cardType.iconUrl"}]},action:"THROW",path:"boardScope.cardParents.cardType"},v]},action:"THROW",path:"boardScope.cardParents"},{kind:"RequiredField",field:{concreteType:"CurrentUser",kind:"LinkedField",name:"currentUser",plural:!1,selections:[{kind:"RequiredField",field:I,action:"THROW",
path:"boardScope.currentUser.permissions"}]},action:"THROW",path:"boardScope.currentUser"},{kind:"RequiredField",field:{concreteType:"SoftwareProject",kind:"LinkedField",name:"projectLocation",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.projectLocation.id"},{kind:"RequiredField",field:l,action:"THROW",path:"boardScope.projectLocation.key"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.projectLocation.name"},{kind:"RequiredField",field:{concreteType:"CardType",kind:"LinkedField",name:"cardTypes",plural:!0,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"boardScope.projectLocation.cardTypes.id"},{kind:"RequiredField",field:r,action:"THROW",path:"boardScope.projectLocation.cardTypes.name"},{kind:"RequiredField",field:u,action:"THROW",path:"boardScope.projectLocation.cardTypes.iconUrl"},{kind:"RequiredField",field:j,action:"THROW",path:"boardScope.projectLocation.cardTypes.hierarchyLevelType"},{kind:"RequiredField",
field:E,action:"THROW",path:"boardScope.projectLocation.cardTypes.hasRequiredFields"}]},action:"THROW",path:"boardScope.projectLocation.cardTypes"}]},action:"THROW",path:"boardScope.projectLocation"},{kind:"RequiredField",field:{concreteType:"BoardFeature",kind:"LinkedField",name:"features",plural:!0,selections:[{kind:"RequiredField",field:l,action:"THROW",path:"boardScope.features.key"},{kind:"RequiredField",field:U,action:"THROW",path:"boardScope.features.status"}]},action:"THROW",path:"boardScope.features"},{kind:"RequiredField",field:{concreteType:"EstimationConfig",kind:"LinkedField",name:"estimation",plural:!1,selections:[{kind:"RequiredField",field:w,action:"THROW",path:"boardScope.estimation.current"},{kind:"RequiredField",field:{concreteType:"AvailableEstimations",kind:"LinkedField",name:"available",plural:!0,selections:[{kind:"RequiredField",field:P,action:"THROW",path:"boardScope.estimation.available.statisticFieldId"}]},action:"THROW",path:"boardScope.estimation.available"
}]},action:"THROW",path:"boardScope.estimation"}]},action:"THROW",path:"boardScope"}],type:"Query"},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"srcNextGenBacklogQuery",selections:[{args:a,concreteType:"BoardScope",kind:"LinkedField",name:"boardScope",plural:!1,selections:[{args:i,concreteType:"Sprint",kind:"LinkedField",name:"sprints",plural:!0,selections:[d,r,n,t,o,c,x,H],storageKey:'sprints(state:["ACTIVE","FUTURE"])'},{concreteType:"Backlog",kind:"LinkedField",name:"backlog",plural:!1,selections:[W,L,x]},{concreteType:"SoftwareBoard",kind:"LinkedField",name:"board",plural:!1,selections:[x,C,d]},{concreteType:"CardParent",kind:"LinkedField",name:"cardParents",plural:!0,selections:[d,l,s,{concreteType:"CardType",kind:"LinkedField",name:"cardType",plural:!1,selections:M},v]},{concreteType:"CurrentUser",kind:"LinkedField",name:"currentUser",plural:!1,selections:[I]},{concreteType:"SoftwareProject",kind:"LinkedField",name:"projectLocation",plural:!1,
selections:[d,l,r,{concreteType:"CardType",kind:"LinkedField",name:"cardTypes",plural:!0,selections:[d,r,u,j,E]}]},{concreteType:"BoardFeature",kind:"LinkedField",name:"features",plural:!0,selections:[l,U]},{concreteType:"EstimationConfig",kind:"LinkedField",name:"estimation",plural:!1,selections:[w,{concreteType:"AvailableEstimations",kind:"LinkedField",name:"available",plural:!0,selections:[P]}]},d]}]},params:{cacheID:"1ea213074ece0636deb99e25547b627b",id:null,metadata:{},name:"srcNextGenBacklogQuery",operationKind:"query",
text:"query srcNextGenBacklogQuery($boardId:ID!){boardScope(boardId:$boardId){sprints(state:[ACTIVE,FUTURE]){id,name,goal,startDate,endDate,daysRemaining,cards{id,key,summary,labels,type{id,name,iconUrl},status{id,name,category},assignee{__typename,accountId,name,picture},flagged,done,parentId,estimate{storyPoints,originalEstimate{value,valueAsText}},priority{name,iconUrl},dueDate,childCardsMetadata{complete,total},fixVersionsIds},sprintState},backlog{boardIssueListKey,requestColumnMigration,cards{id,key,summary,labels,type{id,name,iconUrl},status{id,name,category},assignee{__typename,accountId,name,picture},flagged,done,parentId,estimate{storyPoints,originalEstimate{value,valueAsText}},priority{name,iconUrl},dueDate,childCardsMetadata{complete,total},fixVersionsIds}},board{cards{id,key,summary,labels,type{id,name,iconUrl},status{id,name,category},assignee{__typename,accountId,name,picture},flagged,done,parentId,estimate{storyPoints,originalEstimate{value,valueAsText}},priority{name,iconUrl},dueDate,childCardsMetadata{complete,total},fixVersionsIds},rankCustomFieldId,id},cardParents{id,key,summary,cardType{id,name,iconUrl},color},currentUser{permissions},projectLocation{id,key,name,cardTypes{id,name,iconUrl,hierarchyLevelType,hasRequiredFields}},features{key,status},estimation{current{customFieldId},available{statisticFieldId}},id}}"
}}}();d.hash="71054c91825a2ac0b40a229471da6ae9",a.a=d}}]);try{window.__jsEvalStop("async-jira-software-resource-invalidator-cache-wrapper.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-jira-software-resource-invalidator-cache-wrapper.903a91af0f487e617802.8.js.map