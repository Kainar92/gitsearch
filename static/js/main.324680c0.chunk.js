(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(91)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),l=a(16),o=a(13),i=a(2),u=a.n(i),m=a(7),p=a(8),h=a(9),g=a(11),d=a(10),f=a(12),v=a(33),E=function(e,t,a,n,r){var s=JSON.parse(localStorage.getItem("pageUsersList"))||{};s["".concat(e,"-").concat(t,"-").concat(a,"-").concat(n)]=r,localStorage.setItem("pageUsersList",JSON.stringify(s)),localStorage.setItem("totalUsersCount",JSON.stringify(n)),localStorage.setItem("currentPage",JSON.stringify(a))},S=a.n(v).a.create({baseURL:"https://api.github.com",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer 4606f831260142f7e60cbf3a022c9c03f7c08752"},params:{per_page:10}}),N=function(){var e=Object(m.a)(u.a.mark(function e(t,a,n){var r,s,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/search/users?&q=location:".concat(a,"+language:").concat(t,"&page=").concat(n));case 2:return r=e.sent,e.next=5,r.data.total_count;case 5:return s=e.sent,e.next=8,Promise.all(r.data.items.map(function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get(t.url).then(function(e){return e.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 8:return c=e.sent,E(t,a,n,s,c),e.abrupt("return",{usersList:c,totalUsersCount:s});case 11:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),b=(a(64),function(){return r.a.createElement("div",{className:"wellcome"},r.a.createElement("h1",{className:"wellcome-header"},"Disover developers from all over the world!"))}),C=(a(65),function(e){var t=e.type;return r.a.createElement("div",{className:"centered"===t?"user-profile-style":"user-list-style"},r.a.createElement("div",{className:"spinner-loader spinner-border text-primary",role:"status"}))}),y=(a(66),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){"skill"===e.target.name?a.props.onSkillChange(e.target.value):a.props.onLocationChange(e.target.value)},a.handleEnterPress=function(e){13===(e.keyCode||e.which)&&a.props.onSearchSubmit()},a.skillInputRef=r.a.createRef(),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.skillInputRef.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.skill,a=e.location,n=e.onSearchSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-header"},r.a.createElement("h1",null,"Github Search")),r.a.createElement("div",{className:"ui form"},r.a.createElement("div",{className:"ui field"},r.a.createElement("input",{className:"search-input",type:"text",value:t,name:"skill",placeholder:"skill",ref:this.skillInputRef,onChange:this.handleInputChange,onKeyPress:this.handleEnterPress}),r.a.createElement("input",{className:"search-input",type:"text",value:a,name:"location",placeholder:"location",onChange:this.handleInputChange,onKeyPress:this.handleEnterPress}),r.a.createElement("input",{className:"search-button right floated ui primary button",type:"submit",value:"Search",onClick:n,disabled:!t||!a}))))}}]),t}(n.Component)),k=a(34),O=a.n(k),w=(a(71),function(e){var t=e.currentPage,a=e.totalUsersCount,n=e.onPageChange;return r.a.createElement("div",{className:a?"results":"results-off"},r.a.createElement("span",{className:"user-total"},"Results: ",a),r.a.createElement("div",{className:"pagination-list"},r.a.createElement(O.a,{activePage:t,totalItemsCount:a,pageRangeDisplayed:5,onChange:n,itemClass:"page-item",innerClass:"pagination pagination-md justify-content-center",linkClass:"page-link"})))}),j=(a(72),function(e){var t=e.skill,a=e.location,n=e.currentPage,s=e.totalUsersCount,c=e.onSkillChange,l=e.onLocationChange,o=e.onPageChange,i=e.onSearchSubmit;return r.a.createElement("div",{className:"search-segment"},r.a.createElement(y,{skill:t,location:a,onSkillChange:c,onLocationChange:l,onSearchSubmit:i}),r.a.createElement(w,{currentPage:n,totalUsersCount:s,onPageChange:o}))}),L=(a(73),function(e){var t=e.user,a=t.avatar_url,n=t.name,s=t.login,c=t.email,l=t.company,o=t.location;return r.a.createElement("div",{className:"user-item"},r.a.createElement("div",{className:"user-avatar"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{className:"user-header"},r.a.createElement("h2",null,n||"No name")),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large id card icon"}),r.a.createElement("p",null,s)),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large envelope outline icon"}),r.a.createElement("p",null,c||"No email")),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large building icon"}),r.a.createElement("p",null,l||"No company")),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large location arrow icon"}),r.a.createElement("p",null,o||"No location"))))}),P=(a(74),function(e){var t=e.usersList;return e.totalUsersCount?r.a.createElement("div",{className:"user-list"},t.map(function(e){var t=e.id;return r.a.createElement(l.b,{key:t,to:{pathname:"user/".concat(t),state:{userId:t}},style:{textDecoration:"none",color:"black"}},r.a.createElement(L,{user:e}))})):null}),x=a(37),I=a.n(x),U=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleScroll=I()(function(){localStorage.setItem("scrollPosition",JSON.stringify(window.pageYOffset))},200),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return null}}]),t}(n.Component),J=(a(89),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={usersList:[],totalUsersCount:0,isLoading:!1,skill:"",location:"",currentPage:1},a.handleSkillChange=function(e){a.setState({skill:e}),localStorage.setItem("skill",e)},a.handleLocationChange=function(e){a.setState({location:e}),localStorage.setItem("location",e)},a.handlePageChange=function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentPage:t});case 2:localStorage.setItem("currentPage",JSON.stringify(a.state.currentPage)),a.fetchData();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSearchSubmit=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentPage:1});case 2:a.fetchData();case 3:case"end":return e.stop()}},e)})),a.fetchData=Object(m.a)(u.a.mark(function e(){var t,n,r,s,c,l,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state,n=t.skill,r=t.location,s=t.currentPage,c=t.totalUsersCount,l=localStorage.getItem("pageUsersList"),o="".concat(n,"-").concat(r,"-").concat(s,"-").concat(c),l&&JSON.parse(l)[o]?(i=JSON.parse(localStorage.pageUsersList),a.setState({usersList:i[o],totalUsersCount:JSON.parse(localStorage.totalUsersCount)})):(a.setState({isLoading:!0}),N(n,r,s).then(function(e){a.setState({usersList:e.usersList,totalUsersCount:e.totalUsersCount,isLoading:!1})}));case 4:case"end":return e.stop()}},e)})),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;"true"!==sessionStorage.getItem("isMountedFirstTime")?this.setState({skill:localStorage.skill,location:localStorage.location,currentPage:JSON.parse(localStorage.currentPage),totalUsersCount:JSON.parse(localStorage.totalUsersCount)},function(){e.fetchData().then(function(){localStorage.scrollPosition&&window.scrollTo(0,JSON.parse(localStorage.scrollPosition))})}):sessionStorage.setItem("isMountedFirstTime","false")}},{key:"render",value:function(){var e=this.state,t=e.totalUsersCount,a=e.isLoading,n=e.usersList;return r.a.createElement("div",{className:"main-wrapper"},t||a?r.a.createElement(U,null):r.a.createElement(b,null),a?r.a.createElement(C,null):r.a.createElement(P,{usersList:n,totalUsersCount:t}),r.a.createElement(j,Object.assign({},this.state,{onSkillChange:this.handleSkillChange,onLocationChange:this.handleLocationChange,onPageChange:this.handlePageChange,onSearchSubmit:this.handleSearchSubmit})))}}]),t}(n.Component)),D=(a(90),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={user:[],isLoading:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.props.location.state.userId,e.next=4,S.get("user/".concat(t));case 4:a=e.sent,n=a.data,this.setState({user:n,isLoading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.user,n=a.avatar_url,s=a.name,c=a.login,l=a.email,o=a.company,i=a.location;return r.a.createElement("div",{className:"ui container user-profile"},r.a.createElement("div",{className:"user-item profile-item"},t?r.a.createElement(C,{type:"centered"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"user-avatar"},r.a.createElement("img",{className:"ui image large",src:n,alt:""})),r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{className:"user-header"},r.a.createElement("h2",null,s||"No name")),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large id card icon"}),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large envelope outline icon"}),r.a.createElement("p",null,l||"No email")),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large building icon"}),r.a.createElement("p",null,o||"No company")),r.a.createElement("div",{className:"user-subtext"},r.a.createElement("i",{className:"large location arrow icon"}),r.a.createElement("p",null,i||"No location")),r.a.createElement("hr",null)))))}}]),t}(n.Component)),M=function(){return r.a.createElement(l.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:J,exact:!0}),r.a.createElement(o.a,{path:"/user/:id",component:D})))};sessionStorage.getItem("isMountedFirstTime")||sessionStorage.setItem("isMountedFirstTime","true"),c.a.render(r.a.createElement(M,null),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.324680c0.chunk.js.map