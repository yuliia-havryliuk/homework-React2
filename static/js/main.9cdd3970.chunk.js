(this["webpackJsonptemplate-app"]=this["webpackJsonptemplate-app"]||[]).push([[0],[,,,,function(t,e,n){t.exports={container:"TodoList_container__e3qUV",item:"TodoList_item__1V6bh",btn:"TodoList_btn__1y1P-",icon:"TodoList_icon__2qulW"}},,,,,,function(t,e,n){t.exports={title:"TodoApp_title___nNVs"}},,function(t,e,n){t.exports={container:"Layout_container__1nNA4"}},function(t,e,n){t.exports={form:"TodoEditor_form__1P1zB",btn:"TodoEditor_btn__1_lrZ"}},function(t,e,n){t.exports={button:"IconButton_button__3n-zF"}},,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),i=n(11),s=n.n(i),r=(n(23),n(24),n(12)),d=n.n(r),l=function(t){var e=t.children;return Object(o.jsx)("div",{className:d.a.container,children:e})},u=n(15),b=n(3),h=n(5),j=n(6),m=n(2),p=n(8),f=n(7),O=n(10),g=n.n(O),x=n(27),v=n(4),_=n.n(v),C=n(16),k=function(t){var e=t.todos,n=t.onDeleteTodo,a=t.toggleCompleted;return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{className:_.a.container,children:e.map((function(t){var e=t.id,c=t.text,i=t.completed;return Object(o.jsxs)("li",{className:_.a.item,children:[Object(o.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return a(e)}}),Object(o.jsx)("p",{children:c}),Object(o.jsx)("button",{type:"button",className:_.a.btn,onClick:function(){return n(e)},children:Object(o.jsx)(C.a,{className:_.a.icon})})]},e)}))})})},S=n(13),T=n.n(S),y=n(17),N=n(14),F=n.n(N),L=function(t){var e=t.children,n=void 0===e?null:e,a=t.onClick,c=void 0===a?null:a,i=t.title,s=void 0===i?null:i,r=Object(y.a)(t,["children","onClick","title"]);return Object(o.jsx)("button",Object(b.a)(Object(b.a)({type:"button",className:F.a.button,onClick:c,title:s},r),{},{children:n}))},I=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).handelChange=function(e){t.setState({message:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.message),t.setState({message:""})},t.state={message:""},t.handelChange=t.handelChange.bind(Object(m.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(m.a)(t)),t}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:T.a.form,onSubmit:this.handleSubmit,children:[Object(o.jsx)("textarea",{value:this.state.message,onChange:this.handelChange,placeholder:"Add task here",children:" "}),Object(o.jsx)(L,{type:"submit",onClick:this.addTask,children:"Add Task"})]})})}}]),n}(a.Component),A=function(t){var e=t.value,n=t.onChange;return Object(o.jsxs)("label",{htmlFor:"",children:["\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0439:",Object(o.jsx)("input",{type:"text",name:"",id:"",value:e,onChange:n})]})},D=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.toggleCompleted=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{completed:!t.completed}):t}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.addTask=function(e){var n={id:Object(x.a)(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[n].concat(Object(u.a)(e))}}))},t.state={todos:[],filter:""},t.deleteTodo=t.deleteTodo.bind(Object(m.a)(t)),t.changeFilter=t.changeFilter.bind(Object(m.a)(t)),t.addTask=t.addTask.bind(Object(m.a)(t)),t.changeFilter=t.changeFilter.bind(Object(m.a)(t)),t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("todos")&&this.setState({todos:JSON.parse(localStorage.getItem("todos"))})}},{key:"componentDidUpdate",value:function(t,e){this.state.todos!==e.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var t=this,e=this.state.todos.reduce((function(t,e){return e.completed?t+1:t}),0),n=this.state.todos.filter((function(e){return e.text.toLowerCase().includes(t.state.filter.toLowerCase())}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:g.a.title,children:"Todo App"}),Object(o.jsxs)("div",{className:g.a.todosInfo,children:[Object(o.jsxs)("p",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0447: ",this.state.todos.length]}),Object(o.jsxs)("p",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0438\u0445 \u0437\u0430\u0434\u0430\u0447: ",e]})]}),Object(o.jsx)(A,{value:this.state.filter,onChange:this.changeFilter}),Object(o.jsx)(I,{onSubmit:this.addTask}),Object(o.jsx)(k,{todos:n,onDeleteTodo:this.deleteTodo,toggleCompleted:this.toggleCompleted})]})}}]),n}(a.Component);var w=function(){return Object(o.jsx)(l,{children:Object(o.jsx)(D,{})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.9cdd3970.chunk.js.map