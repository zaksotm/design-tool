(this["webpackJsonpdesigner-tool"]=this["webpackJsonpdesigner-tool"]||[]).push([[0],{13:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";n.r(t);var a=n(7),l=n(2),r=n(3),i=n(5),c=n(4),o=n(6),s=n(0),u=n.n(s),h=n(1),m=n.n(h),p=(n(19),n(10)),d=n(11),g=n.n(d),b=n(12),f=n.n(b),v=n(32),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"my-5"},u.a.createElement("label",{htmlFor:"myRange1"},"Pixelation: ",this.props.value),u.a.createElement("input",{type:"range",min:"0",max:"30",className:"slider",id:"myRange1",onChange:this.props.onChange}))}}]),t}(u.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"my-5"},u.a.createElement("label",{htmlFor:"myRange2"},"Threshold: ",this.props.value),u.a.createElement("input",{type:"range",min:"0",max:"30",className:"slider",id:"myRange2",onChange:this.props.onChange}))}}]),t}(u.a.Component),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).handlePixelChange=function(e){n.setState({pixelValue:e.target.value})},n.handleThresholdChange=function(e){n.setState({thresholdValue:e.target.value})},n.state={pixelValue:0,thresholdValue:0,picture:null},n.onDrop=n.onDrop.bind(Object(a.a)(n)),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onDrop",value:function(e){this.setState({picture:e[e.length-1]}),console.log(e[e.length-1]),void 0!=e[e.length-1]&&(v=URL.createObjectURL(e[e.length-1]))}},{key:"renderPixelateSlider",value:function(){return u.a.createElement(j,{value:this.state.pixelValue,onChange:this.handlePixelChange})}},{key:"renderThresholdSlider",value:function(){return u.a.createElement(E,{value:this.state.thresholdValue,onChange:this.handleThresholdChange})}},{key:"threshImage",value:function(){}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(p.Pixelify,{src:v,centered:!0,pixelSize:this.state.pixelValue})),u.a.createElement("div",null,u.a.createElement(f.a,{withIcon:!0,buttonText:"Choose image",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880})),u.a.createElement("div",null,u.a.createElement("img",{src:v,alt:"temp"}),this.renderPixelateSlider(),this.renderThresholdSlider()))}}]),t}(u.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"app"},u.a.createElement("div",{className:"app-img"},u.a.createElement(y,null)),u.a.createElement("div",{className:"img-fields"},u.a.createElement("div",null,u.a.createElement(g.a,{image:"https://i.imgur.com/AD3MbBi.jpg",posterize:1}))))}}]),t}(u.a.Component);m.a.render(u.a.createElement(O,null),document.getElementById("root"))},19:function(e,t,n){},32:function(e,t,n){e.exports=n.p+"static/media/image-easy.8d4239f6.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.d36a8760.chunk.js.map