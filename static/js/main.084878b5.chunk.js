(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(5),i=c.n(s),r=(c(13),c(3)),o=c(6),l=c.n(o),b=c(0);function u(e){var t=e.title,c=e.children;return Object(b.jsxs)("section",{className:l.a.feedback,children:[Object(b.jsx)("h2",{className:"feedback__title",children:t}),c]})}var d=c(7),j=c.n(d),f=c(8),h=c.n(f);function O(e){var t=e.options,c=e.onLeaveFeedback;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)("button",{type:"button",name:e,className:h.a.button,onClick:c,children:e},j.a.generate())}))})}function m(e){var t=e.good,c=e.bad,a=e.neutral,n=e.total,s=e.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"statistic__title",children:"Statistics"}),Object(b.jsxs)("ul",{className:"statistic__item",children:[Object(b.jsxs)("li",{className:"statistic__item",children:["Good: ",t]}),Object(b.jsxs)("li",{className:"statistic__item",children:["Neutral: ",a]}),Object(b.jsxs)("li",{className:"statistic__item",children:["Bad: ",c]}),Object(b.jsxs)("li",{className:"statistic__item",children:["Total: ",n]}),Object(b.jsxs)("li",{className:"statistic__item",children:["Positive feedback: ",s,"%"]})]})]})}function _(e){var t=e.message;return Object(b.jsx)("p",{children:t})}c(23);function x(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),i=Object(r.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(0),j=Object(r.a)(d,2),f=j[0],h=j[1];console.log(f);var x=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return t.reduce((function(e,t){return e+t}))}(c,f,o);return Object(b.jsxs)(u,{title:"Please leave feedback",children:[Object(b.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:function(e){var t=function(e){return e+1};switch(e.target.name){case"good":n(t);break;case"neutral":l(t);break;case"bad":h(t)}}}),x>0?Object(b.jsx)(m,{good:c,neutral:o,bad:f,total:x,positivePercentage:function(e,t){return 0!==t?Math.round(e/t*100):0}(c,x)}):Object(b.jsx)(_,{message:"No feedback given"})]})}i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},6:function(e,t,c){e.exports={feedback:"Section_feedback__n1WNK"}},8:function(e,t,c){e.exports={button:"FeedbackOptions_button__2Kc06"}}},[[24,1,2]]]);
//# sourceMappingURL=main.084878b5.chunk.js.map