"use strict";(self.webpackChunkclothes_shop=self.webpackChunkclothes_shop||[]).push([[752],{752:function(t,n,e){e.r(n),e.d(n,{default:function(){return P}});var r,c,i=e(165),o=e(861),a=e(885),s=e(44),u=e(791),d=e(982),l=e(168),m=e(88),p=m.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  width: 15vw;\n  justify-content: center;\n  align-items: center;\n\n  & img {\n    width: 120px;\n    display: block;\n    padding: 1rem;\n  }\n\n  & button {\n    color: ",";\n    background-color: ",";\n    border-radius: 5%;\n    border: 1px solid ",";\n    padding: 5px;\n  }\n  & button:hover {\n    background-color: ",";\n    color: ",";\n  }\n  & button:active {\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.colors.secondary}),(function(t){return t.theme.colors.active}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.active.primary}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.active.secondary})),f=e(866),h=e(184),v=function(t){var n=t.item,e=t.selectedProducts,r=t.setSelectedProducts,c=t.amountInCart,i=t.setAmountInCart;return(0,h.jsx)(p,{children:(0,h.jsxs)("div",{id:n.id,name:n.title,children:[(0,h.jsx)("img",{src:n.image,alt:n.description}),(0,h.jsx)("h4",{children:(0,f.Z)(n.title)}),(0,h.jsxs)("h5",{children:[n.price," $"]}),(0,h.jsx)("button",{onClick:function(t){var o=!1;e.length>0&&e.forEach((function(t){t.item.title===n.title&&(t.quantity+=1,o=!0,i(c+1))})),o||(r([].concat((0,d.Z)(e),[{item:n,quantity:1}])),i(c+1))},children:"Add to cart"})]},n.id)})},x=m.ZP.div(c||(c=(0,l.Z)(["\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 1rem 2rem;\n  animation: fadeIn ease 2s;\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @media (max-width: 750px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (max-width: 550px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]))),g=function(t){var n=t.items,e=t.selectedProducts,r=t.setSelectedProducts,c=t.totalPrice,i=t.setTotalPrice,o=t.amountInCart,a=t.setAmountInCart;return(0,h.jsx)(x,{children:n&&n.map((function(t){return(0,h.jsx)(v,{item:t,items:n,selectedProducts:e,setSelectedProducts:r,totalPrice:c,setTotalPrice:i,amountInCart:o,setAmountInCart:a},t.id)}))})},P=function(t){var n=t.selectedProducts,e=t.setSelectedProducts,r=t.amountInCart,c=t.setAmountInCart,d=t.totalPrice,l=(0,u.useState)([]),m=(0,a.Z)(l,2),p=m[0],f=m[1],v=function(){var t=(0,o.Z)((0,i.Z)().mark((function t(n){var e;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,s.ZP.get("https://fakestoreapi.com/products?limit=".concat(n)).then((function(t){t.data.forEach((function(t){var n=t.id,r=t.title,c=t.price,i=t.description,o=t.image;e.push({id:n,title:r,price:c,description:i,image:o,quantity:0})}))})).catch((function(t){return console.log("ERROR: invalid fetch url, error type: ",t)}));case 3:return t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,v(10);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(g,{items:p,selectedProducts:n,setSelectedProducts:e,setAmountInCart:c,amountInCart:r,totalPrice:d})})}}}]);
//# sourceMappingURL=752.04288868.chunk.js.map