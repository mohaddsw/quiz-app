(function(t){function e(e){for(var s,r,c=e[0],u=e[1],a=e[2],_=0,l=[];_<c.length;_++)r=c[_],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);h&&h(e);while(l.length)l.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,c=1;c<o.length;c++){var u=o[c];0!==n[u]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/quizapp/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var h=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"004a":function(t,e,o){"use strict";o("5e52")},"034f":function(t,e,o){"use strict";o("85ec")},"144a":function(t,e,o){"use strict";o("98fd")},"1e64":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s,n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Startquiz")],1)},r=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quiz-app"},[o("button",{staticClass:"startQuiz",on:{click:t.start_quiz}},[t._v("Start Quiz")]),o("review",{staticClass:"revew",on:{"show-review-emit":function(e){return t.change_review(e)}}})],1)},u=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.show_review?o("div",{staticClass:"review"},[o("section",[t._m(0),t._m(1),o("footer",[o("div",{staticClass:"buttons"},[o("button",{staticClass:"exite",on:{click:t.exite}},[t._v("Exit")]),o("button",{staticClass:"continue",on:{click:t.continue_Questions}},[t._v("continue")])])])])]):t._e(),o("questions")],1)},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("span",[t._v("Quiz App Review")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",[o("p",[t._v("1. Lorem ipsum dolor sit amet consec.")]),o("p",[t._v("2. Lorem ipsum dolor sit amet consec.")]),o("p",[t._v("3. Lorem ipsum dolor sit amet consec.")]),o("p",[t._v("4. Lorem ipsum dolor sit amet consec.")])])}],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.questions.slice(t.a,t.b),(function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:t.show_questions_box,expression:"show_questions_box"}],key:e.number,staticClass:"quizQuestions"},[o("section",[o("header",[o("span",{staticClass:"questions"},[t._v(" Question "+t._s(e.number)+" : "+t._s(e.question))])]),o("article",t._l(e.options,(function(e,s){return o("div",{key:s,ref:"correctItem",refInFor:!0,staticClass:"options",on:{click:function(o){return t.answer_question(e,s)}}},[o("p",[t._v(t._s(++s)+" : "+t._s(e.option)+".")])])})),0),o("footer",[o("div",{staticClass:"quiz-num"},[o("span",[t._v(t._s(e.number))]),o("span",[t._v("of")]),o("span",[t._v(t._s(t.questions.length))])]),o("div",{staticClass:"next_question_buttons"},[o("button",{class:t.disableButton?"disableButton":"enableButton",on:{click:t.nextQuestionButton}},[t._v(" Next ")])])])])])})),o("score",{attrs:{score:t.scoreNum,qustionLength:t.questions.length}})],2)},l=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show_score,expression:"show_score"}],staticClass:"score"},[o("section",[t._m(0),o("article",[o("p",[t._v(" You're Score is "+t._s(t.score)+" of "+t._s(t.qustionLength)+".")])]),o("footer",[o("div",{staticClass:"buttons"},[o("button",{staticClass:"replay",on:{click:t.replay}},[t._v("Replay")]),o("button",{staticClass:"end",on:{click:t.end}},[t._v("End")])])])])])])},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("span",[t._v("You're Score!")])])}],p={data:function(){return{show_score:!1,show_qouestions_box:!1}},props:["score","qustionLength"],methods:{replay:function(){this.show_score=!1,this.$store.dispatch("set_show_score_box",this.show_score),this.show_qouestions_box=!0,this.$store.dispatch("set_show_questions_box",this.show_qouestions_box)},end:function(){this.show_score=!1,this.$store.dispatch("set_show_score_box",this.show_score)}},computed:{showScore:function(){return this.$store.getters["get_shoew_score_box"]()}},watch:{showScore:function(t){this.show_score=t}}},v=p,d=(o("004a"),o("2877")),b=Object(d["a"])(v,w,f,!1,null,"77089cac",null),m=b.exports,x={components:{score:m},data:function(){return{show_questions_box:null,questions:[{number:1,question:"Where is Billie Eilish from?",options:[{option:"Iran"},{option:"London "},{option:"Los Angeles",correct:!0},{option:"England"}]},{number:2,question:"How many days does it take for the Earth to orbit the Sun?",options:[{option:"360"},{option:"364"},{option:"366"},{option:"365",correct:!0}]},{number:3,question:"How many keys does a classic piano have?",options:[{option:"88",correct:!0},{option:"80"},{option:"87"},{option:"89"}]},{number:4,question:"When was Netflix founded: 1997, 2001, 2009, 2015?",options:[{option:"1995"},{option:"1997",correct:!0},{option:"1990"},{option:"1996"}]}],a:0,b:1,correctItem:null,allowSelect:!0,disableButton:!0,questionNumber:0,show_score:!1,scoreNum:0}},watch:{showScore:function(t){t||Object.assign(this.$data,this.$options.data())},showQuestionsBox:function(t,e){t!=e&&(this.show_questions_box=t)}},methods:{answer_question:function(t,e){if(this.allowSelect){this.disableButton=!1;var o=this.$refs.correctItem[e-1];t.correct?(o.classList.add("answer_correct"),++this.scoreNum):o.classList.add("answer_flase")}this.allowSelect=!1},nextQuestionButton:function(){this.disableButton||(this.questionNumber<this.questions.length-1?(this.allowSelect=!0,this.disableButton=!0,this.questions.length-1!==this.a&&(this.a++,this.b++),++this.questionNumber):this.questionNumber===this.questions.length-1&&(this.show_score=!0,this.$store.dispatch("set_show_score_box",this.show_score),this.show_questions_box=!1,this.$store.dispatch("set_show_questions_box",this.show_questions_box)))}},computed:{showQuestionsBox:function(){return this.$store.getters["get_shoew_questions_box"]()},showScore:function(){return this.$store.getters["get_shoew_score_box"]()}}},q=x,g=(o("144a"),Object(d["a"])(q,_,l,!1,null,null,null)),y=g.exports,O={components:{questions:y},data:function(){return{show_review:!1,show_questions_box:!1}},computed:{showReview:function(){return this.$store.getters["get_show_review"]()}},methods:{exite:function(){this.show_review=!1,this.$store.dispatch("set_show_review",this.show_review)},continue_Questions:function(){this.show_review=!1,this.$store.dispatch("set_show_review",this.show_review),this.show_questions_box=!0,this.$store.dispatch("set_show_questions_box",this.show_questions_box)}},watch:{showReview:function(t){this.show_review=t}}},S=O,$=(o("d855"),Object(d["a"])(S,a,h,!1,null,"310fba1a",null)),j=$.exports,C={components:{review:j},data:function(){return{show_review:!1}},computed:{showReview:function(){return this.$store.getters["get_show_review"]()}},methods:{start_quiz:function(){this.$store.dispatch("set_show_review",!0),!1===this.show_review&&(this.show_review=!0)},change_review:function(t){this.show_review=t}},watch:{showReview:function(t){console.log(t,"showReview"),this.show_review=t}}},E=C,k=(o("a093"),Object(d["a"])(E,c,u,!1,null,"0ea75c70",null)),B=k.exports,N={name:"App",components:{Startquiz:B}},Q=N,z=(o("034f"),Object(d["a"])(Q,i,r,!1,null,null,null)),L=z.exports,R=o("ade3"),I=o("2f62"),P="SHOW_REVIEW",W="SHOW_QUESTIONS_BOX",H="SHOW_SCORE_BOX";n["a"].use(I["a"]);var M=new I["a"].Store({state:{show_review:!1,show_questions_box:!1,show_score_box:!1},getters:{get_show_review:function(t){return function(){return t.show_review}},get_shoew_questions_box:function(t){return function(){return t.show_questions_box}},get_shoew_score_box:function(t){return function(){return t.show_score_box}}},mutations:(s={},Object(R["a"])(s,P,(function(t,e){t.show_review=e})),Object(R["a"])(s,W,(function(t,e){t.show_questions_box=e})),Object(R["a"])(s,H,(function(t,e){t.show_score_box=e})),s),actions:{set_show_review:function(t,e){var o=t.commit;o(P,e)},set_show_questions_box:function(t,e){var o=t.commit;o(W,e)},set_show_score_box:function(t,e){var o=t.commit;o(H,e)}}});n["a"].config.productionTip=!1,new n["a"]({store:M,render:function(t){return t(L)}}).$mount("#app")},"5e52":function(t,e,o){},"85ec":function(t,e,o){},"91a4":function(t,e,o){},"98fd":function(t,e,o){},a093:function(t,e,o){"use strict";o("91a4")},d855:function(t,e,o){"use strict";o("1e64")}});
//# sourceMappingURL=app.9bfefa40.js.map