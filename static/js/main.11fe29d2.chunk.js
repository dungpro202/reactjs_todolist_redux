(this.webpackJsonptodolists=this.webpackJsonptodolists||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(7),c=n.n(a),r=(n(18),n(19),n(4)),i=n(3),o=n(5),l=n(2),u="LIST_ALL",d="SAVE_TASK",j="TOGGLE_FORM",b="CLOSE_FORM",m="OPEN_FORM",f="UPDATE_STATUS_TASK",h="DELETE_TASK",O="EDIT_TASK",x="FILTER_TABLE",p="SEARCH",g="SORT",v=function(){return{type:m}},N=function(){return{type:b}},y=function(t){return{type:O,task:t}},T=n(0);var k=Object(l.b)((function(t){return{isDisplayForm:t.isDisplayForm,itemEditing:t.itemEditing}}),(function(t,e){return{onSaveTask:function(e){t(function(t){return{type:d,task:t}}(e))},onCloseForm:function(){t(N())}}}))((function(t){var e=Object(s.useState)({id:"",name:"",status:!1}),n=Object(o.a)(e,2),a=n[0],c=n[1];Object(s.useEffect)((function(){t.itemEditing&&null!==t.itemEditing.id?c({id:t.itemEditing.id,name:t.itemEditing.name,status:t.itemEditing.status}):console.log("123")}),[t.itemEditing]);var l=function(){t.onCloseForm()},u=function(t){var e=t.target,n=e.name,s=e.value;"status"===n&&(s="true"===e.value),c(Object(i.a)(Object(i.a)({},a),{},Object(r.a)({},n,s)))},d=function(){console.log("onClear"),c({name:"",status:""})};return t.isDisplayForm?Object(T.jsxs)("div",{className:"panel panel-warning",children:[Object(T.jsx)("div",{className:"panel-heading",children:Object(T.jsxs)("h3",{className:"panel-title",children:[Object(T.jsx)("span",{className:"fas fa-times-circle text-right",onClick:l}),a.id?"C\u1eadp Nh\u1eadt C\xf4ng Vi\u1ec7c":"Th\xeam C\xf4ng Vi\u1ec7c"]})}),Object(T.jsx)("div",{className:"panel-body",children:Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onSaveTask(a),d(),l()},children:[Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{children:"T\xean :"}),Object(T.jsx)("input",{type:"text",className:"form-control",name:"name",value:a.name,onChange:u})]}),Object(T.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i :"}),Object(T.jsxs)("select",{className:"form-control",required:"required",name:"status",value:a.status,onChange:u,children:[Object(T.jsx)("option",{value:!0,children:"K\xedch Ho\u1ea1t"}),Object(T.jsx)("option",{value:!1,children:"\u1ea8n"})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)("button",{type:"submit",className:"btn btn-warning",children:"L\u01b0u L\u1ea1i"}),"\xa0",Object(T.jsx)("button",{type:"button",className:"btn btn-danger",onClick:d,children:"H\u1ee7y B\u1ecf"})]})]})})]}):""}));var S=Object(l.b)((function(t){return{}}),(function(t,e){return{onSearch:function(e){t(function(t){return{type:p,keyword:t}}(e))}}}))((function(t){var e=Object(s.useState)(""),n=Object(o.a)(e,2),a=n[0],c=n[1];return Object(T.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(T.jsxs)("div",{className:"input-group",children:[Object(T.jsx)("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",name:"keyword",value:a,onChange:function(t){var e=t.target.value;c(e)}}),Object(T.jsx)("span",{className:"input-group-btn",children:Object(T.jsxs)("button",{className:"btn btn-primary",type:"button",onClick:function(){t.onSearch(a)},children:[Object(T.jsx)("span",{className:"fa fa-search mr-5"}),"T\xecm"]})})]})})}));var E=Object(l.b)((function(t){return{sort:t.sort}}),(function(t,e){return{onSort:function(e){t(function(t){return{type:g,sort:t}}(e))}}}))((function(t){var e=function(e,n){t.onSort({by:e,value:n})};return Object(T.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(T.jsxs)("div",{className:"dropdown",children:[Object(T.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:["S\u1eafp X\u1ebfp ",Object(T.jsx)("span",{className:"fa fa-sort ml-5"})]}),Object(T.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",children:[Object(T.jsx)("li",{onClick:function(){return e("name",1)},children:Object(T.jsx)("a",{href:"/#",role:"button",className:"name"===t.sort.by&1===t.sort.value?"sort_selected":"",children:Object(T.jsx)("span",{className:"fa fa-sort-alpha-asc pr-5",children:"T\xean A-Z"})})}),Object(T.jsx)("li",{onClick:function(){return e("name",-1)},children:Object(T.jsx)("a",{href:"/#",role:"button",className:"name"===t.sort.by&-1===t.sort.value?"sort_selected":"",children:Object(T.jsx)("span",{className:"fa fa-sort-alpha-asc pr-5",children:"T\xean Z-A"})})}),Object(T.jsx)("li",{role:"separator",className:"divider"}),Object(T.jsx)("li",{onClick:function(){return e("status",1)},children:Object(T.jsx)("a",{href:"/#",role:"button",className:"status"===t.sort.by&1===t.sort.value?"sort_selected":"",children:"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t"})}),Object(T.jsx)("li",{onClick:function(){return e("status",-1)},children:Object(T.jsx)("a",{href:"/#",role:"button",className:"status"===t.sort.by&-1===t.sort.value?"sort_selected":"",children:"Tr\u1ea1ng Th\xe1i \u1ea8n"})})]})]})})}));var C=function(t){return Object(T.jsxs)("div",{className:"row mt-15",children:[Object(T.jsx)(S,{}),Object(T.jsx)(E,{})]})};var w=Object(l.b)((function(t){return{}}),(function(t,e){return{onUpdateStatus:function(e){t(function(t){return{type:f,id:t}}(e))},onDeleteTask:function(e){t(function(t){return{type:h,id:t}}(e))},onCloseForm:function(){t(N())},onOpenForm:function(){t(v())},onEditTask:function(e){t(y(e))}}}))((function(t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:t.index+1}),Object(T.jsx)("td",{children:t.task.name}),Object(T.jsx)("td",{className:"text-center",children:Object(T.jsx)("span",{className:!0===t.task.status?"label label-success":"label label-danger",onClick:function(){t.onUpdateStatus(t.task.id)},children:!0===t.task.status?"K\xedch Ho\u1ea1t":"\u1ea8n"})}),Object(T.jsxs)("td",{className:"text-center",children:[Object(T.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:function(){t.onOpenForm(),t.onEditTask(t.task)},children:[Object(T.jsx)("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda"]}),"\xa0",Object(T.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:function(){t.onDeleteTask(t.task.id),t.onCloseForm()},children:[Object(T.jsx)("span",{className:"fa fa-trash mr-5"}),"X\xf3a"]})]})]})}));var F=Object(l.b)((function(t){return{tasks:t.tasks,filterTable:t.filterTable,keyword:t.search,sort:t.sort}}),(function(t,e){return{onFilterTable:function(e){t(function(t){return{type:x,filter:t}}(e))}}}))((function(t){var e=Object(s.useState)({filterName:"",filterStatus:-1}),n=Object(o.a)(e,2),a=n[0],c=n[1],l=function(e){var n=e.target,s=n.name,o=n.value,l={name:"filterName"===s?o:a.filterName,status:"filterStatus"===s?o:a.filterStatus};t.onFilterTable(l),c(Object(i.a)(Object(i.a)({},a),{},Object(r.a)({},s,o)))},u=t.tasks;t.filterTable.name&&(u=u.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.filterTable.name.toLowerCase())}))),u=(u=u.filter((function(e){return-1===t.filterTable.status?e:e.status===t.filterTable.status===1}))).filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.keyword)})),"name"===t.sort.by?u.sort((function(e,n){return e.name>n.name?t.sort.value:e.name<n.name?-t.sort.value:0})):u.sort((function(e,n){return e.status>n.status?-t.sort.value:e.status<n.status?t.sort.value:0}));var d=u.map((function(t,e){return Object(T.jsx)(w,{index:e,task:t},t.id)}));return Object(T.jsxs)("table",{className:"table table-bordered table-hover mt-15",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{className:"text-center",children:"STT"}),Object(T.jsx)("th",{className:"text-center",children:"T\xean"}),Object(T.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng Th\xe1i"}),Object(T.jsx)("th",{className:"text-center",children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(T.jsxs)("tbody",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{}),Object(T.jsx)("td",{children:Object(T.jsx)("input",{type:"text",className:"form-control",name:"filterName",value:a.filterName,onChange:l})}),Object(T.jsx)("td",{children:Object(T.jsxs)("select",{className:"form-control",name:"filterStatus",value:a.filterStatus,onChange:l,children:[Object(T.jsx)("option",{value:"-1",children:"T\u1ea5t C\u1ea3"}),Object(T.jsx)("option",{value:"0",children:"\u1ea8n"}),Object(T.jsx)("option",{value:"1",children:"K\xedch Ho\u1ea1t"})]})}),Object(T.jsx)("td",{})]}),d]})]})}));var _=Object(l.b)((function(t){return{isDisplayForm:t.isDisplayForm,itemEditing:t.itemEditing}}),(function(t,e){return{onToggleForm:function(){t({type:j})},onClearTask:function(e){t(y(e))},onOpenForm:function(){t(v())}}}))((function(t){var e=t.isDisplayForm;return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"}),Object(T.jsx)("hr",{})]}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:!0===e?"col-xs-4 col-sm-4 col-md-4 col-lg-4":"",children:Object(T.jsx)(k,{})}),Object(T.jsxs)("div",{className:!0===e?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(T.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:function(){t.itemEditing&&""!==t.itemEditing.id||t.onToggleForm(),t.onClearTask({id:"",name:"",status:!1})},children:[Object(T.jsx)("span",{className:"fa fa-plus mr-5"}),"Th\xeam C\xf4ng Vi\u1ec7c"]}),"\xa0",Object(T.jsx)(C,{}),Object(T.jsx)("div",{className:"row mt-15",children:Object(T.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(T.jsx)(F,{})})})]})]})]})})),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),s(t),a(t),c(t),r(t)}))},L=n(9),A=n(10),I=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},K=function(){return I()+I()+"-"+I()+"-"+I()+"-"+I()+"-"+I()+I()+I()},R=function(t,e){var n=-1;return t.forEach((function(t,s){t.id===e&&(n=s)})),n},H=JSON.parse(localStorage.getItem("tasks")),M=H||[],V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0,n="",s=-1;switch(e.type){case u:return t;case d:var a={id:e.task.id,name:e.task.name,status:"true"===e.task.status||!0===e.task.status};return a.id?t[s=R(t,a.id)]=a:(a.id=K(),t.push(a)),localStorage.setItem("tasks",JSON.stringify(t)),Object(A.a)(t);case f:return n=e.id,t[s=R(t,n)]=Object(i.a)(Object(i.a)({},t[s]),{},{status:!t[s].status}),localStorage.setItem("tasks",JSON.stringify(t)),Object(A.a)(t);case h:return n=e.id,s=R(t,n),t.splice(s,1),localStorage.setItem("tasks",JSON.stringify(t)),Object(A.a)(t);default:return t}},J=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return!t;case m:return t=!0;case b:return t=!1;default:return t}},U={id:"",name:"",status:!1},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return e.task;default:return t}},B={name:"",status:-1},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return console.log(e),{name:e.filter.name,status:parseInt(e.filter.status,10)};default:return t}},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return console.log(t),console.log(e),e.keyword;default:return t}},G={by:"name",value:1},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return console.log(e),{by:e.sort.by,value:e.sort.value};default:return t}},Q=Object(L.a)({tasks:V,isDisplayForm:J,itemEditing:X,filterTable:P,search:q,sort:Z}),z=Object(L.b)(Q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(T.jsx)(l.a,{store:z,children:Object(T.jsx)(_,{})}),document.getElementById("root")),D()}},[[25,1,2]]]);
//# sourceMappingURL=main.11fe29d2.chunk.js.map