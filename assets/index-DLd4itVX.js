import{r as v,d as i,h as _,e as s,t as l,u as o,j as k,k as g,v as y,F as S,l as b,b as d,m as T,i as O,p as x}from"./index-CjoZJptU.js";import{_ as F,H as N,F as C}from"./footer-DgKZHoh7.js";const c="user-todos",E=()=>v({list:JSON.parse(localStorage.getItem(c))||[],addTodo(t){this.list.push(t),localStorage.setItem(c,JSON.stringify(this.list))},removeTodo(t){this.list.splice(t,1),localStorage.setItem(c,JSON.stringify(this.list))},toggleTodo(t){this.list=this.list.map((e,r)=>r===t?{...e,done:!e.done}:e),localStorage.setItem(c,JSON.stringify(this.list))},reset(){this.list=[],localStorage.setItem(c,JSON.stringify(this.list))}}),I=t=>t?"":"Este campo é obrigatório.",J=t=>e=>e.length>=t?"":`Este campo deve ter pelo menos ${t} caracteres.`,V=(t,...e)=>{for(const r of e){const u=r(t);if(u)return u}return""},m=v({name:""}),p=v({}),j=async(t,e)=>{switch(t){case"name":p.name=V(e,I,J(3));break}},w=()=>Object.values(p).some(t=>t),D=()=>{Object.assign(m,{name:""})},B={class:"todos"},L=["placeholder","hasError","errors"],M={class:"add-todo",type:"submit"},U={key:0},$=["onClick","onUpdate:modelValue"],H=["onClick"],q={key:1},K={__name:"index",setup(t){const e=E(),r=O("useLocaleStore"),u=async()=>{await j("name",m.name),w()||(e.addTodo({...m,done:!1}),D())};return x("useTodosStore",e),(Y,a)=>(d(),i(S,null,[_(N),s("main",null,[s("div",B,[s("h2",null,l(o(r).translate("todos.title")),1),s("form",{onSubmit:k(u,["prevent"]),class:"todos__form"},[g(s("input",{id:"name",name:"name",type:"text",placeholder:o(r).translate("todos.form.placeholder"),"onUpdate:modelValue":a[0]||(a[0]=n=>o(m).name=n),hasError:!!o(p).name,errors:o(p)},null,8,L),[[y,o(m).name]]),s("button",M,l(o(r).translate("todos.form.add")),1)],32),o(e).list.length?(d(),i("ul",U,[(d(!0),i(S,null,b(o(e).list,(n,h)=>(d(),i("li",{key:h},[g(s("input",{type:"checkbox",onClick:f=>o(e).toggleTodo(h),"onUpdate:modelValue":f=>n.done=f},null,8,$),[[T,n.done]]),s("span",null,l(n.name),1),s("button",{class:"remove-todo",onClick:f=>o(e).removeTodo(h)},l(o(r).translate("todos.actions.remove")),9,H)]))),128))])):(d(),i("p",q,l(o(r).translate("todos.list.empty")),1))]),a[2]||(a[2]=s("div",{class:"separator"},null,-1)),s("code",null,[s("pre",null,l(o(e)),1)]),s("ul",null,[s("li",null,[s("a",{href:"#",onClick:a[1]||(a[1]=(...n)=>o(e).reset&&o(e).reset(...n))},l(o(r).translate("todos.reset")),1)])]),a[3]||(a[3]=s("div",{class:"separator"},null,-1))]),_(C)],64))}},G=F(K,[["__scopeId","data-v-8dc6a5a8"]]);export{G as default};