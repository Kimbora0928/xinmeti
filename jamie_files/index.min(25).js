var images,html;function import$(t,e){var i,l={}.hasOwnProperty;for(i in e)l.call(e,i)&&(t[i]=e[i]);return t}!function(){var t,A=function(t){return t.stopPropagation(),t.preventDefault()},u={over:!1,start:function(e,i){var l=[["selectstart",A],["mousemove",function(t){return u.move(e,t,i)}],["mouseup",function(t){return setTimeout(function(){return u.over=!1},100),l.map(function(t){return document.removeEventListener(t[0],t[1])})}]];return l.map(function(t){return document.addEventListener(t[0],t[1])}),u.over=!0},move:function(t,e,i,l){if(null==l&&(l=!1),e.buttons||l)return t.setPos(i,e.clientX,e.clientY,!0),A(e)}},f=function(t,e){var i,l,o,n,s,r,a,c,d,h,p=this;if(null==e&&(e={}),"string"==typeof(t=null==t?null:t)&&(t=document.querySelector(t)),e=import$({className:"",context:"default",onColorChange:null,onPaletteChange:null,idx:0,palette:null,pinned:!1,exclusive:!1,inline:null},e),t)for(i in e)l=e[i],(l=t.getAttribute("data-"+i.toLowerCase()))&&(e[i]="onColorChange"===i||"onPaletteChange"===i?new Function("color",l):l);for(i in"random"===e.context&&(e.context="random-"+Math.random().toString(16)),e.idx=isNaN(+e.idx)?0:+ +e.idx,e.className=(e.className+" ldcolorpicker "+(e.inline?[]:"bubble")).split(" ").filter(function(t){return t}),r="string"==typeof(r=e.palette)?"["===(r=r.trim())[0]?{colors:JSON.parse(r).map(function(t){return ldcolor.hsl(t)})}:{colors:r.split(/[, ]/).map(function(t){return ldcolor.hsl(t.trim())})}:Array.isArray(r)?{colors:r.map(function(t){return ldcolor.hsl(t)})}:r,this.evtHandler={},this.dim={d1:{},d2:{}},(o=this).idx=e.idx,o.pinned=e.pinned,o.context=e.context,o.exclusive=e.exclusive,o.inline=e.inline,e.inline?(this.toggler=null,this.root=t):(this.toggler=t,this.root=document.createElement("div")),n=this.root,e.inline||((o=n.style).position="absolute",o.display="none"),n.classList.add.apply(this.root.classList,e.className),n.innerHTML=html,n.getColorPicker=function(){return p},n.addEventListener("click",A),this.elem=s={mask0:".ldcp-hue .ldcp-mask",ptr0:".ldcp-hue .ldcp-ptr-bar",panel0:".ldcp-hue img",mask1:".ldcp-alpha .ldcp-mask",ptr1:".ldcp-alpha .ldcp-ptr-bar",panel1:".ldcp-alpha .ldcp-alpha-img",mask2:".ldcp-2d .ldcp-mask",ptr2:".ldcp-2d .ldcp-ptr-circle",panel2:".ldcp-2d img",d2:".ldcp-2d",d1:".ldcp-1d",btnAdd:".ldcp-cbtn:nth-of-type(1)",btnDel:".ldcp-cbtn:nth-of-type(2)",caret:".ldcp-caret",editGroup:".ldcp-edit-group",colorNone:".ldcp-color-none",idx:".ldcp-idx",pal:".ldcp-palette"},["h","s","l","r","g","b","a","hex"].map(function(t){return s["in-"+t]=".ldcp-in-"+t}),s)l=s[i],s[i]=this.root.querySelector(l);for(this.elem.comment=document.createComment(" ldcolorpicker placeholder "),this.root.parentNode?this.root.parentNode.insertBefore(this.elem.comment,this.root):document.body.appendChild(this.elem.comment),!this.inline&&this.root.parentNode&&this.root.parentNode.removeChild(this.root),this.elem.btnAdd.addEventListener("click",function(t){return p.addColor()}),this.elem.btnDel.addEventListener("click",function(t){return p.delColor()}),this.elem.colorNone.addEventListener("click",function(t){return p.setAlpha(NaN)}),this.elem.pal.addEventListener("click",function(t){var t=t.target.classList.contains("ldcp-color")?t.target:t.target.parentNode,t=Array.from(p.elem.pal.querySelectorAll(".ldcp-color")).indexOf(t);if(0<=t)return p.setIdx(t)}),f.PalPool.bind(e.context,this,r),this.syncPalette(),this.toggler&&((r=this.toggler).getColorPicker=function(){return p},r.addEventListener("click",function(t){if(setTimeout(function(){return p.toggle()},0),!e.exclusive||"none"!==p.root.style.display)return A(t)}),r.addEventListener("keyup",function(t){var e=ldcolor.hsl(p.toggler.value);if(!isNaN(e.h))return p.setColor(e)}),r.value=ldcolor.web(this.getColor()),"INPUT"===this.toggler.nodeName&&r.setAttribute("autocomplete","off")),a=0,c=(o=["mask","ptr"]).length;a<c;++a)for(d=o[a],h=0;h<=2;++h)!function(t,e){(t=s[t+""+e]).addEventListener("mousedown",function(t){return u.start(p,e)}),t.addEventListener("click",function(t){return u.move(p,t,e,!0)})}(d,l=h);return e.onColorChange&&this.on("change",function(t){return e.onColorChange.apply(p.toggler,[t])}),e.onPaletteChange&&this.on("change-palette",function(t){return e.onPaletteChange.apply(p.toggler,[t])}),document.addEventListener("keydown",function(t){if(27===(t.which||t.keyCode)&&p.toggler&&!p.pinned)return p.toggle(!1)}),this.setIdx(this.idx),e.pinned&&this.toggle(!0),this.fire("inited"),this};(t={update:function(t,e){return t.bindPalette(this.prepare(e).palette)},populate:function(t){return this.prepare(t).users.map(function(t){return t.syncPalette()})},prepare:function(t){var e;return(e=this.hash[t])?e:this.hash[t]={users:[],palette:this.random()}},set:function(t,e){var i=this.prepare(t).palette;return i.name=e.name,i.colors=e.colors,this.populate(t)},get:function(t){return(t=this.hash[t])?t.palette:null},bind:function(t,e,i){if(this.prepare(t).users.push(e),this.update(e,t),null!=i)return this.set(t,i)},random:function(l){return null==l&&(l=5),{name:"Random",colors:function(){for(var t=[],e=0,i=l;e<i;++e)t.push({h:Math.floor(360*Math.random()),s:Math.random(),l:Math.random()});return t}()}}}).hash={default:{users:[],palette:t.random()}},f.PalPool=t,f.prototype=import$(Object.create(Object.prototype),{updateDimension:function(){var i=this;return["d1","d2"].map(function(t){var e=i.dim[t];return e.w=i.elem[t].offsetWidth,e.h=i.elem[t].offsetHeight,e})},setPos:function(t,e,i,l){var o,n,s,r,a,c,d,h,p,A;return null==l&&(l=!1),this.dim.d1.w||this.updateDimension(),"number"!=typeof t?(o=(A=ldcolor.hsl(t)).h,n=A.s,a=2*((r=(2*(s=A.l)+n*(1-Math.abs(2*s-1)))/2)-s)/r,isNaN(a)&&(a=n),e=this.dim.d2.w*a,c=this.dim.d2.h*(1-r),d=this.dim.d1.h*(o/360),this.elem.panel2.style.backgroundColor=ldcolor.web({h:o,s:1,l:.5}),this.setPos(2,e,c,!1),this.setPos(0,e,d,!1),void this.syncColorAt(this.idx)):(l&&(e=(A=[e-(h=this.root.getBoundingClientRect()).left-5,i-h.top-5])[0],i=A[1]),d=(A=this.dim[2===t?"d2":"d1"]).w,o=A.h,e=(A=0<e?e:0)<d?A:d,i=(A=0<i?i:0)<o?A:o,(h=this.elem["ptr"+t]).style.top=i+"px",this.elem["in-hex"].value="#000",2===t&&(h.style.left=e+"px"),l?1===t?this.setAlpha(1-((A=0<(p=(1.04*i-.02*o)/o)?p:0)<1?A:1)):(l=(A=[1.04*e-.02*d,1.04*i-.02*o])[0],i=A[1],l=(A=[(A=0<(p=l/d)?p:0)<1?A:1,(A=0<(p=i/o)?p:0)<1?A:1])[0],i=A[1],A=this.getColorAt(this.idx,"hsl"),r=2===t?1-i:(2*A.l+A.s*(1-Math.abs(2*A.l-1)))/2,a=2===t?l:2*(r-A.l)/r,o=0===t?360*i:A.h,n=0!==(s=r*(2-a)/2)&&1!==s?r*a/(1-Math.abs(2*s-1)):e/d,isNaN(n)&&(n=0),isNaN(s)&&(s=0),this.setColor({h:o,s:n,l:s,a:A.a})):void 0)},setIdx:function(t){var e,i,l=this.idx;return this.idx=t,i=this.elem.pal.childNodes[t+1],this.elem.idx.style.left=i.offsetLeft+i.offsetWidth/2+"px",this.idx!==l&&this.fire("change-idx",t,l),e=this.getColorAt(t,"hsl"),i=this.getColorAt(l,"hsl"),ldcolor.same(e,i)||this.fire("change",e,i),l=ldcolor.hsl(e),(i=this.toggler)&&(i.setAttribute("data-idx",t),i.value=ldcolor.web(e,4===(i.value||"").length)),this.setPos(l)},getIdx:function(){return this.idx},syncColorAt:function(t,e){var i;if((e=e||Array.from(this.elem.pal.querySelectorAll(".ldcp-color"))[t])&&(e=e.childNodes[0],i=ldcolor.hsl(this.palette.colors[t])))return e.style.backgroundColor=ldcolor.web(i),e.classList[isNaN(i.a)?"add":"remove"]("none")},syncPalette:function(){for(var t,e,i,l,o=this.elem.pal,n=o.querySelectorAll(".ldcp-color"),s=0,r=Math.max(n.length,this.palette.colors.length);s<r;++s)(t=s)>=n.length?((e=document.createElement("div")).classList.add("ldcp-color"),e.appendChild(document.createElement("div")),o.appendChild(e)):t>=this.palette.colors.length&&o.removeChild(o.childNodes[o.childNodes.length-1]),t<this.palette.colors.length&&this.syncColorAt(t,e);return this.idx>=this.palette.colors.length&&(this.idx=this.palette.colors.length-1),"undefined"!=typeof context&&null!==context&&context===this.context&&"undefined"!=typeof affectIdx&&null!==affectIdx&&"undefined"!=typeof direction&&null!==direction&&affectIdx<=this.idx&&(this.idx+=direction,this.idx=(i=0<(l=this.idx)?l:0)<(l=this.color.vals.length-1)?i:l,oldIdx!==this.idx&&this.fire("change-idx",this.idx)),this.setIdx(this.idx)},bindPalette:function(t){return this.palette=t},setPalette:function(t){var e=this.palette.colors[this.idx];if(this.palette.colors=JSON.parse(JSON.stringify(t.colors.map(function(t){return ldcolor.hsl(t)}))),(t=t.name)&&(this.palette.name=t),f.PalPool.set(this.context,this.palette),t=this.getColor(),!ldcolor.same(t,e))return this.fire("change",t,e)},getPalette:function(){return this.palette},setColor:function(t){var e=this.palette.colors[this.idx];return this.palette.colors[this.idx]=ldcolor.hsl(t),this.setPos(t),ldcolor.same(t,e)||this.fire("change",t,e),this.toggler&&(this.toggler.value=ldcolor.web(t,4===(this.toggler.value||"").length)),f.PalPool.populate(this.context)},getColor:function(t){return this.getColorAt(this.idx,t=null==t?"rgb":t)},getColorAt:function(t,e){return null==e&&(e="rgb"),t="object"==typeof(t=ldcolor[e](this.palette.colors[t]))?import$({},t):t},setAlpha:function(t){var e,i=this.getColorAt(this.idx);return this.palette.colors[this.idx].a=t,e=this.getColorAt(this.idx),i.a!==t&&this.fire("change",e,i),this.toggler&&(this.toggler.value=ldcolor.web(e,4===(this.toggler.value||"").length)),this.syncColorAt(this.idx)},getAlpha:function(){return this.getColorAt(this.idx,"rgb").a},setPin:function(t){if(this.pinned!==!!t&&this.fire("change-pin",t,this.pinned),this.pinned=!!t,this.pinned)return this.toggle(!0)},isPinned:function(){return this.pinned},addColor:function(){return this.palette.colors.splice(this.idx,0,ldcolor.rand()),this.syncPalette()},delColor:function(){return 1<this.palette.colors.length&&this.palette.colors.splice(this.idx,1),this.syncPalette()},toggle:function(t,e){var i,l,o,n,s,r,a,c,d,h,p=this;return this.pinned&&(t=!0),c=this.root.style.display,(null!=t&&!t||null==t&&"none"!==c)&&!this.inline?(this.root.style.display="none",this.inline||this.root.parentNode.removeChild(this.root),document.removeEventListener("click",this.docToggler),this.fire("toggle",!1)):(this.root.style.display="block",this.inline||this.elem.comment.parentNode.insertBefore(this.root,this.elem.comment),(e=this.toggler||e)&&(l="fixed"===window.getComputedStyle(this.root).position?(i=(d=[0,0])[0],d[1]):(i=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),h=e.getBoundingClientRect(),o=this.root.getBoundingClientRect(),n=(d=["bottom",h.left+i,h.top+l,h.left+h.width+i,h.top+h.height+l])[0],s=d[1],r=d[2],a=d[3],t=d[4],c={top:h.top-this.root.offsetHeight-10+l,left:h.left-this.root.offsetWidth-10+i,right:h.left+e.offsetWidth+10+i,bottom:h.top+h.height+10+l},d={on:[],off:[]},e={},"vertical"===(h=this.root.classList.contains("vertical")?"vertical":this.root.classList.contains("horizontal")?"horizontal":null)?n=c.bottom+o.height-l>window.innerHeight?(e.top=c.top+"px",d.on.push("top"),"top"):(e.top=c.bottom+"px",d.off.push("top"),"bottom"):"horizontal"===h?n=c.right+o.width-i>window.innerWidth?(e.left=c.left+"px",d.on.push("left"),d.off.push("right"),"left"):(e.left=c.right+"px",d.on.push("right"),d.off.push("left"),"right"):this.root.classList.contains("top")?e.top=c.top+"px":this.root.classList.contains("left")?e.left=c.left+"px":this.root.classList.contains("right")?e.left=c.right+"px":e.top=c.bottom+"px","bottom"!==n&&"top"!==n||(s+o.width-i>=window.innerWidth?(e.left=a-o.width+"px",d.on.push("right-align")):(e.left=s+"px",d.off.push("right-align"))),"right"!==n&&"left"!==n||(r+o.height-l>=window.innerHeight?(e.top=t-o.height+"px",d.on.push("bottom-align")):(e.top=r+"px",d.off.push("bottom-align"))),import$(this.root.style,e),d.on.map(function(t){return p.root.classList.toggle(t,!0)}),d.off.map(function(t){return p.root.classList.toggle(t,!1)})),document.addEventListener("click",(document.removeEventListener("click",p.docToggler),p.docToggler=function(){return u.over?u.over=!1:(document.removeEventListener("click",p.docToggler),p.toggle())})),this.updateDimension(),this.setIdx(this.idx),this.fire("toggle",!0))},on:function(t,e){var i;return((i=this.evtHandler)[t]||(i[t]=[])).push(e)},fire:function(t){for(var e,i,l,o,n=[],s=[],r=1,a=arguments.length;r<a;++r)s.push(arguments[r]);for(e=s,r=0,l=(i=this.evtHandler[t]||[]).length;r<l;++r)o=i[r],n.push(o.apply(this,e));return n},destroy:function(){return this.root.parentNode.removeChild(this.root),this.evtHandler={}}}),"undefined"!=typeof module&&null!==module?module.exports=f:window.ldcolorpicker=f}(),html="<div class='ldcp-panel'><div class='ldcp-v ldcp-g1'><div class='ldcp-h ldcp-g11 ldcp-2d'><div style='top:20px;left:20px' class='ldcp-ptr-circle'></div><img src='"+(images={hue:"data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wgARCADIABQDAREAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQYDBAUCB//aAAwDAQACEAMQAAAA85W/sMFjqaepBY9vX+GJPcV7lCTrczkAcXbrYGPJhAAAAzdXGEtmzYANyz4AM1jwTJDxVj9CT51ZvYtD5/ZMUGXx6wZc0QubWHpC0T19OwiYdzQsYk39XfSmGjy9oScut7sFkc2s7ok1uRlgsf/EACcQAAEDAgYCAQUAAAAAAAAAAAABAhMUFQMEBSFhYhBSEhEiMEFR/9oACAEBAAE/APDSz8Fn4G6PwWfqWbqJo/Us3BZ+omj9StK0rSZxO4nd+KMjIyIiIiIiIibA90JsH3QmwfdC+di+9hNd7l93X7y+9xmtq5NnFdmPqu/7K7Mf0wdSzLEXlT47qfEY3ZSm3UphmW2UoyjG5PgouCh4G5LjxsIVJUjcyTk43HJicbjeWn//xAAfEQEBAAEFAAMBAAAAAAAAAAAAFBMBAhESYQMQIDD/2gAIAQIBAT8A+6VKlSpUqVKlw4cOmjpo6afykSJEfiPxH4kSJGDROn8SJEiRIkYdjFtbvh2ffLu7u7IyMjKysv4qVKlSpUrWeq/x/8QAHhEBAAICAwEBAQAAAAAAAAAAABIUAhMRIGEBEDD/2gAIAQMBAT8A/bCwst7e3tra2rS0tN+Tfk35fykkkkkkkkl04cOOnOTnJ8+5IooqysrKvir4q+Kvir4q9NbW1NbWgggh0//Z",gradient:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFXZJREFUeNqcnVuT47aShAFSE+MXx26Ef75/2nnykx2+rO/XaaIWhalEfyiBPY7TERpJFEWRyazKrALIqWb2n/7431prK6W0/tr6a3+y/l6vr/589efm6/n7/pmW+Wv/rj+/+MOXx2ut+9KfX47j8PV9+RXb/IDv+fOHWP4S2/f3L/G72vZLa21sx19ju+P72nZ/fDjP8+p/4/t9nfG9x+Px0v+av/b9fPfu3dwn319f7v/0da5Yr71//96303766Sf74osvrq+//rp9//3343XtK/3UN/Q/H/EafwO0AEWgToACaO3wfAg07IxA8L14EShaJw7+A77rYH2I5fr+B4KL7Y/vOzgOTID8ohPoy/wzf+2/7d/HydMJuOJ7PJYB7t9//60TNoD8888/2x9//NF+//33qz/s559/vn788cf25Zdftkff2D995RIbt/5D8+wIOD2LccHOi0AGCJMF+OwFj4tM5UHHtl8IMIHXPoG9F/bz0omOfXMArIPoZHBajWjy9/31JEp/74iVzkp/tn/++af2zz3kyocPH44O5FjWn2sHrv7222/1hx9+qN988411BpavvvrKHh6xYF/xjVanWd9QLNLnh/+oVvPlenB9f/Y/fH7gYXEy+FmNfRjf82d91l/rew3Lxz713zm4ToBX9Vm813cHK/zZjyWAHPvjwPn7/uzx7q9rfxwdOHMQ//rrr9IZWPx9B+905vX3x7fffls6oO1hpnQ3ds7wKHFQBxhXy+vffB07rmUEpCCXljj7C+C+fQfA2YRtjAPmSdIjDrxpn/13BKaAdAACLAswLT5zUFqcqCNYN/bPn/vj9FUdtP5ozj4HsYdv+fXXX4uD1x/lu+++Kx3A+vnnn9vDERcOO2AigQO3CW5efzKEjCaL+Lk/xDgdUDyagNE2AmydHLF2guxRgxM3t+Hf84cfowM5clMHN3KbAzjei4UdrNLDtcTz6cB1ID3vOQMPB/GXX34pvlysfcSPlwg7CxXWzpg+igM2hYnCY9LxlW0VAFSAWMHWmkJSJ4vvSzDrFPgBwiWmIVxPhOgI5QDK4jsm8CJ8zwDMwXOWjVD29TpgA9AeptZD1AE0B6w//NlF10PX2TjWf0TOy+wSKBYMKJtwtby+8mWcgMkyERb5UaAKjMqQFJNCPCZLFaoBllhoISaDabHs+LjKwO2I3KYQHuIx/E1noduTvqxKNJx9vo6HsItHB+10AemP1tlnnYUObu0Waaj1QwfKEE7h2cgsrFfAogqxqcip+bWEZiZ3PSNnHpGX9bkJFC1juAtwASSw3E04MAp1B8uBcTIEkMMQOpgerr7cWef5z9fryx79/dXfV1/eAfQQbv29s9ctTfnss89eQxiAWVJfAWUI1UJAmMfCZiyMBIjKf8t3lRKYv5TDmMuCrVe8n+t7SJpQD7ACUAfGlAMjbP3zwVZfr+c2z28tlHfktxAUiYmzz0F2USnuAz2s+/qnr5cB5IE35jyGqtiSlpnYIrui7yKkD4DKPCg1ZQhPBsfyyUCGJ5gpsTiV54KRntNOz13+vQ7gYFuE6vCBvswVV9bFgXLr4kB14Ial8XD25ZEv/XfcMxtFhExpZGTKZ5mZmUnKjQSqwAcuKklRSSp6ALgZ0sGsJnsiJophsjFiXvg7z3lTcR2QCPWRE4OFDtoQlQBzgOi5L9jYQqFbrDOE5yGBCAArQqjIuwlcKPEuxJ9CGwKURaIgbK/IS2LrEUwi66b/UzgLfIWzP0JJlQtLAFYC2Ec/+FHfOuN8ua/vLAwAHcixTjDvFEMdUActFLs6mGHI2xMD6eF0wAFkzWKQwMv2RAdtOvBgoK9zgtlkmEJWyw5UERNUWBNfZyT1CF1VGSUYNiorXw9ez0F6CVHx0FUYl2DVWKacJ/YJRF8v9sVLwI8A+k73eK5hTOnnqLhlJy43KltzVQJrIhAL8xoeRi/H5QIJgmEBzhnAz/ANIbHIewPAYN0AV/lOLPSHq2185vXvi+c9Z1x/f7nFkRg5S6OOvlzKZ6ixJEMuy2q6CIlKMoA6ttVPyHydgNSyI4p85bQiL8dwpd+L/DaZGCwb+TIYdgpUBzJsiwm0ALEqhJ1locgOlv/goz9fkeucqcMLItxr7IOO9bETkWyab3NeXpaZl0WCoqCwTPXsBCmpbmNZps/84PH5MMXOPLHST0pUF+OEOcv8eENNGxj4cCvj4AUbq3KfftNzp38vSt8Rwt1MP6lw9oBZdUsWiLAzBEsHvoQ5vrsIAO2KwJGXdEZFS0o5T+BYMFi5Tgp8RGgZwtfFoAYrZV8GWx2UyH9TecNYy+IINO1bUeUSzF1EpObWVtSSlupVg2LPzkoK4YrtZYbVBGSBPZkiI0uiKgXMswjNMwA8lBsFUgAv32fR35uqGuB5KF9Q4UGIsDijHxhgzZJPyq72Wv87HxEGnrOUmwOTVtifUy7bFP41KzCqBp2A5TN8Lj9XZHxj/RGKcQIralvlNz4rFxbmO9/fsDWDPSEkRU1U5LZChZWVkeg4Wfy1TmJs+5oAioHIX5bEYmltsW5mHS1xUNWRxSOatQRYeVM2xeDrsnAcBC98npRajVCDgZZtUUgXCYfexzILVgqcEvmuRj4dbazwjqq5DW5jjLCgQWI01NMxa7lARieF1YOJqf4+WuqFHWQW//B6KslOtZ8cFLFPaitBQFvqjJxUpL5iXLBPnxWa5gBIJVmhQY4G6hVgCshLaUleFh33Vx8oEFPDM7eyaHkWxdZ6FA2KhGwSw515TXmQYcs8qDMfYBWE8SzxxKzIk9NMB5hOlkvL++tHKPFLWJ5LDIwQVojXUHn2G4/AbeRAQ0O1qsUPJj5VGRmI1FExigZYy7BkL88kVuzjATQ1B454XVIelF05AZZy4CnlxWd6f0RPsEQlIzZeypvhOf03LqWHiBh1zT8aaVmYVPPK8dfETGPOZLvqxjhrjGP24mInaKyztREoqixUaSiE5wmIZG9Q4AoACZylHNgkFMG6GfICL37jiv3SSdYQ7+j8LO2sVFksDVR4uSOGNp9a8Wwc6DVG61jtTCaiq7KIR7w/uR7a8QU5cQKF/HdyGUCKduHLNMvKgTLLYFuLlcfyaKI0RFr1sWbamAofYwAst66U3JfW/SZsGa6sQLI/rMgpFAtRdbIXZdrSMIjXE6wkJDVYN1jmyhkhq5ynCmaKR3g+ndwx7KBcK8cQ7bmRA9VMsF3NC/9nEArWywsDAd5Tzy8pcUHryTL78Hp2VALMCRANs0ouiMn0gGgilBCMF+U8lYkB2BMDFb4BusXUD1VC59JMuKl/FzvDnt5mIIger2y6zEurSsqG/LIAx+UAb2nRg5Vi3xEHWYJxFYBLJE6KiNJHkKkqdJkHq9rzH8exRwOj/717hNJNGxOdFJlmS2MaFcvEKkuKXDCWUbL6AkAZ4hohokVTRcVOLC8Ajb2/GarBIuXGoZRhqgty3RVhqpkIDWaajQvt9/FKSFMuPGRjlAMn+yIfTXedmgkT0FS9VCrwXa7TUCXYVsC+yjFdVhZSYaUcsirnPoA1XwerZu4TYLIpyrVOyjQsqmYwp6YcSw6M1sws1Wigme8IHMM6DxIJTM1FUT2sZTirBfnEELoFufGA1SnoMi/iEc8VzzWFZ4VN2YlHCyAfMPAVYjLZF1P8zv787sEzGl2EpyaqFJc2ZdNVsZQD53gHjbRCRFMykjrTwhzoOrMyke+jyMx2FUywlHi+9n0QYAJD4hHbr+2VejMS4jimf5VXVQhP40wjnVr4lhsK2Tzn4Ugd+C6kxSrEyGK0obSyMqoWOHhe6Qf9YCJUyVKxsCC/lWBWS5+JAA15TsZZ7sGCfb7s4VP5vB4cKKkFz9yn4cnUts8hzNbUEs4JOIFW0NGYjVIIBvPiSduSHg2Mu5LBnsISTJI9qXgcyH0XzXzkSk4hMZSpmqn2Ti19mWKDaBiarJY6yjTHhTYntatoa9g8LZshyYYQZ63caGFyBZKWCVA1Z68AaGlVYZZWDt8WQJ6aRIqZD2zjSUTOISKiu4sIR8zw2t4o2+4EpHKsN9W5B5i6lHBkpwBH/sqAcfpaQXenJaFhjdzUR+Q+odOjkcnJSrTqlvk6Dl7n12OqMFtVyIV218bKM1hTjttWI6xE0jIewAErZTl0CWqqTiqBgxpftEq7h/woGGcQRoJ3AljPga8AKgdydiq6MQo/y5UJK5fc82OXZRPOnMNnZFlSu4OmWQDG90uEIEFmnpMVmf4PlcoM5TQTrIGFEszGGbUSkaHCMdJOABfPt/N7qZyzNHhe0nuqbkEenLmLAiOwICYN6zO0p+FP4ZwZ1tQ0hllWaCtXHjDNB6owPWuSZ4u+qZd2Hxkoynv5FqFprC7QXSkb9i1TOzRZM0253YY4X6fcqJlV7Q0FLsp1mXkZ0A3jFMqGKkPdnwuzWh2wEyDOPB1R9BhGOgruMUi8KdssTTCqbEmx1EtTNea4slR+09Y6JETBkMZBpqiPF4CUh5XfEisVbjUJjRhoMNCz5mUqkCFHzhtVUvQJLoVzhPu7aaSRu54603c5j8OeXI+dagzE0L6w+mCZJxZWNB5y4jfUy1cy4BOw2C6rngOADd+o9EQbFdbkonnWdCFMlD/j/WOxMaRfmlFqUFxj98VfpxKvoo1V8uA5p3SkiZMzLGPdhwDC9mZLHQ3YymkfbInFaNpU2bROkaKiFm+ILr09OJEJ4AnIx0NjARg8f+rASJnVDMCseY4JL7Oz0GzlAPoyFkKRgUJfPGgw+4rKpFKl9R51LFloOwAxVHqgzl1UNw6sobZoEM0RwouNUdjqNYczObePYKZhTGMYx0TJlgz50jBNUz6uNAvhwJhxiwphqWWTQbfs9wQ0VL2BXRzM18LJMADFi49UI5dZidBI76awMYwxVpKrEUu+MTcYCi6MYVe6cBhTM0spTNiOWEWwZrpQaoGvq6mvZ1yWwDSM4Viap1gIHHoE08ZUtfU5msbrRmRPsqiArZxEfm0aCgWhvQDIabvMnxr5Qtu/YJ7NHBeGWhuSfmW7H9tRCF8xE4K5zxCuxsvDQljHxTzul+NHXkM4cqBtZt1P0DQkANXMg1AGEBvYwTGSA4W5mg8UEbLS0vzAA6lCDFTZVTgVBMs5LFE50sftZ3a11/zF0CWgx6xENBiTZ+SnioSlncyyZqguEzBTiNNM05CSzYUmmn1CdK8LZ+ZTYJIZbhCMlpmHE2NpqrFhFK6kcC5ZREJEX2th9QTz2Eca2rTcRAUrF9ZSdNLk8oMNWShvY+gGg2f+0mRKhhqu/a3Io5XXkCQRMloStqsQObYRDYWwqhCNmz8WG3PTjc7jvwTp6bMQGib/ki5rmAcmG4TLWg8kdA6u141aGvxpw3oUC0vmPmE4SVHpQbEPhiv4KR721I2RiGxYWNGVNlxss4Ru7sYkZV76i2kdhm6DkJ1xhLObEkn8imltDaaeuVP9PL1vmHZH9DhIxAuADDaNob4AqH7gUolgWHNnpEsCYmEf1ZiCkdphDTXrQQOOETtDIj+g3gUXJWYAKucZEiz29Dbhq23OsRhcoZXFg1ez6qQ8pg/kDK1UyhkmkjNvLVUK1ZmmGqNzPMP0g4XKxgNUHqQflOcpr3FbkjhZUvByA57l3iauCuVtCZZhjlj3jDGR13YWGFhSWJJlJiDRmc7t/5LaYOWNQfk8eYkgLR5MnlBsgVDpSs2GkC0MyTfAK0lZtW2NeeQhIubFY1FhGOnd1UlLhZGAzULxBFYaAphhkaZJ1GRmS85DDEttR9UI95HbIH6ZjbzwMeW4I4UuQ5ghPrsxFSHMq9VLmhuThWa5/4HyyN3VSymsC2YsHCrc2VfUAH8e9Cco0fA0NACokgUiU7Mg0L4kUA0nxBKA2q/21M5KIby0s9KYcMksvRGauvOViZ0s6ZQjWz5opIOn/AWQmJNtk7eyMT6WDnL6PLHvdSdfS7mtCi9dmB2QGxEpySduc14CgmFnaQymMmwTIhzoLqnYzyxbwha5Nec1XixumwvIC1pbFddCn1sfSADT9XM1h3R+fsvu5HLP3Tw9ISsbWJCCyyxqtiWqo1Mz2FK62LEsr7tlXSISe4RjTHi29JkD000ndpe6Wr5+blM3U8m1fsuszAeyaY1ZSiNPlH3r9caClJ1Ybb7TNjgcEJmyiAhDeKfAm5tR2J3q7pi52RaX5fGH7ffTsuOOTalyIGAlpYV86xY+8zZXhdcLpkpk+EDbAJin9ZY8Y39zI4p/c+DLCWGLCL7vjqFLMk+D+pZSzCdZWfI1bSl00/E/ARg58KCILJTdgcl8lAFO903Iy5/aYgmgltbdhuEu7NP2d4BvnxMZLI392KbayiA+q3Au23bXBbMnuGNrUt08+L5r3Ja7nJq3mfLvHUqWfq/l30cUtMxA2jSClm5ttYRwySGcTfVdews/nNlnVM2dCU/VTbsJ/4p717w59Epm3Zwc25zEepPjyNK6udmafOAxW/rneS6jc/wiLqjZ3h4qnandDucJmpZO0rG5hHY3/tI4Hp1r73zzslyS4RjqxuyzlCsYfaubHHhMADklNuerHfvS2bN0D4VdJZNvTJa72HPaCEq6mu5P03DPrV3Xx3bCp+2kjnpJb+zm1n5nun6abHytRPLcu92NJ1Tj7uZMs2uba+D02m6AzZfUHpuJTMfmwMumoigbcVgapRswbFNx2Qa8fK/EVxHxMPYQ3gG4O8hPKfWGuSV1c0rawad08caJ2HpMhlcWk93+7WxM3hYja7OdQyE8Z3beAcUcyHC7uZPlNuxvwH4CNSX0skkRdo/BctOgtz7PYOc7dNa0XsXznBczcyBD+MaqbK9g3xls5LSSftjSVJGn+3Clu8U13ToAuWy5o2a6RYuBxHesJ7gnb0v6FhPTvRMrheTBabM3A0v0hnWT00q64ezi+6AG9S4t3Nxe4EBeXaYas+TC5blbJacN2kTH8Ymw3kURgayP1BDdKei88eKNytruzr5ph46bHLRt0uYJTCk9ZIbke3j9q99+I4SfwhnKeyQr8xFAWZmU97Y5cXOLqLpRrYIb19adGORcSvak7+Sc9hTCN9vId2CyvL870N/Ih+cmpOuDs+Nv/urb7F7Y+HRnS5jm+pZKa0cZthuA6qZ+5f2vj1R+2qZy+hRoOzHarf+RganWfdOq4Mxvw/FmXKXyJhaf2O96kyLqxvRmQJ6UGnmx3rDwU+Dd3WN7vvepHY/dfWBuj3ANjfIvzuRTyJKlCPXd+tvf/9RvZzIkZ7BtmPyXf5893r9//6P/txGfSqa7g/3ETtgnGJ2X2b88IW+J0Zatyiv4bz6Wm4//W7SSf/XH//2/AAMAJIxzucIDLtAAAAAASUVORK5CYII=",opacity:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAACACAYAAAAClekiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1ZJREFUeNrcWVuO3EAIBNz5zxXmP/c/Qc4x85VbRCKezXrUxlSBxytFir+86x6a5lEFtN7v928i4vL30fAut9vNt/fp2+sZ0+LtxxYWW3g/CEALNoE6aSBRkwEWzD9m/9cR1J/PauDcFjWw2Wjg3dH3EXbKrK3sW/SCJO6UsInNAtXdv4MdP94fj4dn8bEJGcC/2Xnno7yM/BSwhLNp8jf00Ag7VFoc3kfyQ2Fnjv/fjoCSif0NQ1kTg6GjCQplSeIj+y5j9fMi+PEVD2IOzEJ8oLMRO+wMu+WCsmgk9jCWjQ6icbdmZDAFQjhdwwQIc1+GB9WTuxEIOLgLbfTEgx9s2zVOqDZnjiBdGzCrlwIQhUGhg7BRJ6w9wwMBoasJtekADGTMdfP6rhccEKw+8YB6YcUDlqmSpXNmB8SVjnjBEztkG9gACy3Rwq5mI4zEpYg+ZbRXpTMsrpgXKlTaM9Pq54UhzlQfZMCyY2cjiQQjdHwew5vsfPg+ws6l36OBvzQOBGjCYkPHm8Y7aFAZTFAVs+EBSt25X3CUzpdhfUncZB04e8eNmjUcS8NwkOKrAqPCA9hweNEn2BxISxZhXU9seJAlj0/9Aiy8uuwsjFgW4gGtkiwT0Nl5hwf6JibsvCCNztVRv7AQPKB5UDFTKzojHkiCB1JpYCdKfJqN8g42omzULkLP5MrO6oiAUBx00aktAKJ2FkjeRKcXHiib1Kxxwqo2vWKDEpUZRpziBRpcUQM9Ua0oqpEMUF0GcYdc0GKmlNZICyi0EdHuYT3pF3YaJHhwqtguxwLMC8qQKhZZXd+nyWSktCmpLh7BCKCk2cnGQF7EhV1FpA9hz/nBTwYgU31wuv3XznSnU+qyIQwdA3U6eMumeR12gul8KRK/bAhzTkDAg0M+BDxISxzrzMzYSPQf2wDwYoetD6GsZKEwetds2Er6BNgzoYsYk/ya5IUHv4DKbJ646xf0RAy03OiNnkEydo4XUw4AV9lcmV1KpLxRRSIbwEhmRJY4yhrPynBQ8PisAxVVYqA+OFBb5gUlJe7unslIIJVXSOyeqWq6WuzMRgNlNmpRbAoahSGiVVQrdwbRmuCBb/cLv9mshODBKVCFhDuaIKKVBm8/l0jlPxHwR4ABAF3bekgydK22AAAAAElFTkSuQmCC"}).gradient+"'><div class='ldcp-mask'></div></div><div class='ldcp-h ldcp-g12 ldcp-1d ldcp-hue'><div class='ldcp-ptr-bar'></div><img src='"+images.hue+"'><div class='ldcp-mask'></div></div><div class='ldcp-h ldcp-g13 ldcp-1d ldcp-alpha'><div class='ldcp-ptr-bar'></div><div class='ldcp-alpha-img' style='background-image:url("+images.opacity+")'></div><div class='ldcp-mask'></div></div></div><div class='ldcp-v ldcp-g2'><div class='ldcp-colors ldcp-h ldcp-g21'><div class='ldcp-palette'><small class='ldcp-idx'></small></div><small class='ldcp-sep'></small><div class='ldcp-color-none'></div><span class='ldcp-cbtn ldcp-btn-add'>+</span><span class='ldcp-cbtn ldcp-btn-remove'>-</span></div></div>\n<div class='ldcp-v ldcp-g3'><div class='ldcp-h ldcp-g31'>\n<div class='ldcp-edit-group'><span>R</span><input class='ldcp-in-r' value='255'><span>G</span><input class='ldcp-in-g' value='255'><span>B</span><input class='ldcp-in-b' value='255'></div>\n<div class='ldcp-edit-group' style='display:none'><span>H</span><input class='ldcp-in-h' value='255'><span>S</span><input class='ldcp-in-s' value='255'><span>L</span><input class='ldcp-in-l' value='255'></div>\n<div class='ldcp-edit-group ldcp-edit-hex' style='display:none'><span>HEX</span><input class='ldcp-in-hex' value='#000000'></div>\n<span>A</span><input value='255' class='ldcp-in-a'>\n<span class='ldcp-caret'>RGBA &#x25be;</span></div></div></div><div class='ldcp-chooser'><button/><button/><button/></div>";
