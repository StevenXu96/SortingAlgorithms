(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),l=a(4),i=a(5),o=a(1),u=a(8),c=a(7),h=(a(11),[]),m=[],g=function e(t,a,n){if(a<n){var r=function(e,t,a){var n=e[a];m.push([a]);for(var r=t-1,s=t;s<=a-1;s++)if(e[s]<n){r++;var l=e[r];m.push([r,e[s]]),e[r]=e[s],m.push([s,l]),e[s]=l}var i=e[r+1];return m.push([r+1,e[a]]),e[r+1]=e[a],m.push([a,i]),e[a]=i,r+1}(t,a,n);e(t,a,r-1),e(t,r+1,n)}if(0===a&&n===t.length-1){var s=m.slice();return s.push(["Now you may generate a new array!",0,0]),m.length=0,s}return m};var p=[],f=[],v=[];function y(e,t,a){var n=a,r=2*a+1,s=2*a+2;if(r<t&&e[r]>e[n]&&(n=r),s<t&&e[s]>e[n]&&(n=s),n!==a){var l=e[a];v.push([a,e[n]]),v.push([n,l]),e[a]=e[n],e[n]=l,y(e,t,n)}}var d=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={speed:5,max_speed:11,array:[],color:null,pivot:null,message:"",size:0,height:100,darkMode:!1,sorting:!1},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;"darkMode"===n?this.setState((function(e){return{darkMode:!e.darkMode}})):this.setState(Object(s.a)({},n,a))}},{key:"resetArray",value:function(){if(this.state.sorting)window.location.reload(!0);else{for(var e=[],t=0;t<this.state.size;t++)e.push((a=5,n=this.state.height,Math.floor(Math.random()*(n-a+1)+a)));this.setState({array:e,color:null,pivot:null,message:""})}var a,n}},{key:"executeInstruction",value:function(e,t){var a=this,n=this.state.max_speed-this.state.speed;setTimeout((function(){var t=a.state.array.slice();t[e[0]]=e[1],a.setState({array:t,color:e[0]})}),n*t)}},{key:"mergeSort",value:function(){var e=this;if(0===this.state.array.length)alert('Please adjust the size, then click "Generate New Array".');else{this.setState({color:null,pivot:null,sorting:!0,message:"Merge Sort has a time complexity of n*log(n)"});for(var t=this.state.max_speed-this.state.speed,a=function e(t,a,n){if(a===n)return h.push([a,t[a]]),[t,[t[a]],h];for(var r=Math.floor((n-a)/2+a),s=e(t,a,r)[1],l=e(t,r+1,n)[1],i=[],o=0,u=0;o<s.length&&u<l.length;)s[o]<l[u]?(i.push(s[o]),h.push([o+a+u,s[o]]),o++):(i.push(l[u]),h.push([u+o+a,l[u]]),u++);if(o===s.length)for(;u<l.length;)i.push(l[u]),h.push([u+o+a,l[u]]),u++;else for(;o<s.length;)i.push(s[o]),h.push([o+a+u,s[o]]),o++;if(i.length===t.length){var c=h.slice();return c.push(["Now you may generate a new array!",0,0]),h.length=0,[t,i,c]}return[t,i,h]}(this.state.array,0,this.state.array.length-1)[2],n=function(n){var r=a[n];3===r.length?setTimeout((function(){e.setState({message:r[0],sorting:!1})}),n*t):e.executeInstruction(r,n)},r=0;r<a.length;r++)n(r)}}},{key:"quickSort",value:function(){var e=this;if(0===this.state.array.length)alert('Please adjust the size, then click "Generate New Array".');else{this.setState({color:null,pivot:null,sorting:!0,message:"Quick Sort has a time complexity of n*log(n)"});for(var t=this.state.max_speed-this.state.speed,a=this.state.array.slice(),n=g(a,0,a.length-1),r=function(a){var r=n[a];1===r.length?setTimeout((function(){e.setState({pivot:r[0]})}),t*a):3===r.length?setTimeout((function(){e.setState({message:r[0],sorting:!1})}),a*t):e.executeInstruction(r,a)},s=0;s<n.length;s++)r(s)}}},{key:"bubbleSort",value:function(){var e=this;if(0===this.state.array.length)alert('Please adjust the size, then click "Generate New Array".');else{this.setState({color:null,pivot:null,sorting:!0,message:'Bubble Sort has a time complexity of n^2. I suggest you just click "Reset"...'});for(var t=this.state.max_speed-this.state.speed,a=function(e){for(var t=e.slice(),a=0;a<t.length;a++)for(var n=0;n<t.length-a-1;n++)if(t[n]>t[n+1]){var r=t[n];p.push([n,t[n+1]]),p.push([n+1,r]),t[n]=t[n+1],t[n+1]=r}else p.push([n,t[n]]);var s=p.slice();return s.push(["Now you may generate a new array!",0,0]),p.length=0,s}(this.state.array),n=function(n){var r=a[n];3===r.length?setTimeout((function(){e.setState({message:r[0],sorting:!1})}),t*n):e.executeInstruction(r,n)},r=0;r<a.length;r++)n(r)}}},{key:"insertionSort",value:function(){var e=this;if(0===this.state.array.length)alert('Please adjust the size, then click "Generate New Array".');else{this.setState({color:null,pivot:null,sorting:!0,message:'Insertion Sort has a time complexity of n^2. I suggest you just click "Reset"...'});for(var t=this.state.max_speed-this.state.speed,a=function(e){for(var t=e.slice(),a=1;a<t.length;a++){var n=t[a];f.push([a]);for(var r=0;r<a;r++){if(!(t[r]<=n)){for(var s=a-1;s>=r;s--){var l=t[s+1];f.push([s,l]),f.push([s+1,t[s]]),t[s+1]=t[s],t[s]=l}break}f.push([r,t[r]])}}var i=f.slice();return i.push(["Now you may generate a new array!",0,0]),f.length=0,i}(this.state.array),n=function(n){var r=a[n];2===r.length?e.executeInstruction(r,n):3===r.length?setTimeout((function(){e.setState({message:r[0],sorting:!1})}),n*t):setTimeout((function(){e.setState({pivot:r[0]})}),t*n)},r=0;r<=a.length-1;r++)n(r)}}},{key:"heapSort",value:function(){var e=this;if(0===this.state.array.length)alert('Please adjust the size, then click "Generate New Array".');else{this.setState({color:null,pivot:null,sorting:!0,message:"Heap Sort has a time complexity of n*log(n)"});for(var t=this.state.max_speed-this.state.speed,a=function(e){for(var t=e.slice(),a=e.length,n=Math.floor(a/2-1);n>=0;n--)y(t,a,n);for(var r=a-1;r>0;r--){var s=t[0];v.push([0,t[r]]),v.push([r,s]),t[0]=t[r],t[r]=s,y(t,r,0)}var l=v.slice();return v.length=0,l.push(["Now you may generate a new array!",0,0]),l}(this.state.array),n=function(n){var r=a[n];3===r.length?setTimeout((function(){e.setState({message:r[0],sorting:!1})}),t*n):e.executeInstruction(r,n)},r=0;r<a.length;r++)n(r)}}},{key:"checkColor",value:function(e){return e===this.state.pivot?"yellow":e===this.state.color?"red":this.state.darkMode?"blue":"gray"}},{key:"popup",value:function(){alert('To check out another algorithm, wait until sorting is complete or click "Reset"')}},{key:"render",value:function(){var e=this;return document.getElementById("body").style.backgroundColor=this.state.darkMode?"black":"whitesmoke",r.a.createElement("div",{className:"everything"},r.a.createElement("header",{className:"top-header",style:{color:this.state.darkMode?"white":"black"}},"Sorting Algorithm Visualization"),r.a.createElement("div",{className:"array-container"},r.a.createElement("nav",{className:"NavBar"},r.a.createElement("ul",{className:"Nav",style:{color:this.state.darkMode?"white":"black"}},r.a.createElement("li",null,r.a.createElement("label",null,"Dark Mode "),r.a.createElement("input",{type:"checkbox",value:this.state.darkMode,onChange:this.handleChange,className:"darkMode",name:"darkMode"}),r.a.createElement("label",{htmlFor:"darkMode"})),r.a.createElement("li",null,r.a.createElement("h4",null,"1. Customize Array")),r.a.createElement("li",null,r.a.createElement("div",{className:"sliders"},r.a.createElement("label",null,"Speed"),r.a.createElement("input",{type:"range",min:"1",max:"10",value:this.state.speed,onChange:this.handleChange,name:"speed",style:{marginLeft:"5px"}}),r.a.createElement("br",null),r.a.createElement("label",null,"Size"),r.a.createElement("input",{type:"range",min:"50",max:"280",value:this.state.size,onChange:this.handleChange,name:"size",style:{marginLeft:"22px"}}),r.a.createElement("br",null),r.a.createElement("label",null,"Height"),r.a.createElement("input",{type:"range",min:"5",max:"480",value:this.state.height,onChange:this.handleChange,name:"height",style:{marginLeft:"1px"}}))),r.a.createElement("br",null),r.a.createElement("li",null,r.a.createElement("button",{className:"generate",onClick:function(){return e.resetArray()}},this.state.sorting?"Reset":"Generate New Array")),r.a.createElement("li",null,r.a.createElement("h4",null,"2. Pick an Algorithm")),r.a.createElement("li",null,r.a.createElement("button",{className:"merge-sort",onClick:function(){return e.state.sorting?e.popup():e.mergeSort()}},"Merge Sort")),r.a.createElement("li",null,r.a.createElement("button",{className:"quick-sort",onClick:function(){return e.state.sorting?e.popup():e.quickSort()}},"Quick Sort")),r.a.createElement("li",null,r.a.createElement("button",{className:"bubble-sort",onClick:function(){return e.state.sorting?e.popup():e.bubbleSort()}},"Bubble Sort")),r.a.createElement("li",null,r.a.createElement("button",{className:"insertion-sort",onClick:function(){return e.state.sorting?e.popup():e.insertionSort()}},"Insertion Sort")),r.a.createElement("li",null,r.a.createElement("button",{className:"heap-sort",onClick:function(){return e.state.sorting?e.popup():e.heapSort()}},"Heap Sort")))),r.a.createElement("div",{className:"arraybar-container"},this.state.array.map((function(t,a){return r.a.createElement("div",{className:"array-bar",key:a,style:{height:"".concat(t,"px"),backgroundColor:e.checkColor(a)}})}))),r.a.createElement("br",null),r.a.createElement("h2",{className:"message",style:{color:this.state.darkMode?"gray":"black"}},this.state.message)))}}]),a}(r.a.Component);function k(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null))}var b=a(6);a.n(b).a.render(r.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.5ff134a8.chunk.js.map