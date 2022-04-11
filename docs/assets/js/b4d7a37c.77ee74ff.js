"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9563],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5759:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"introduction",title:"Introduction",slug:"data-driven-testing.html"},l=void 0,c={unversionedId:"framework/datatesting/introduction",id:"framework/datatesting/introduction",isDocsHomePage:!1,title:"Introduction",description:"Before data-driven-testing can be used, you need to add the module kotest-framework-datatest to your build.",source:"@site/docs/framework/datatesting/data_driven_testing.md",sourceDirName:"framework/datatesting",slug:"/framework/datatesting/data-driven-testing.html",permalink:"/docs/framework/datatesting/data-driven-testing.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/datatesting/data_driven_testing.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"data-driven-testing.html"},sidebar:"framework",previous:{title:"Exceptions",permalink:"/docs/framework/exceptions.html"},next:{title:"Data Test Names",permalink:"/docs/framework/datatesting/custom-test-names.html"}},p=[{value:"Getting Started",id:"getting-started",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Required Module")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before data-driven-testing can be used, you need to add the module ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest-framework-datatest")," to your build."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section covers the new and improved data driven testing support that was released with Kotest 4.6.0.\nTo view the documentation for the previous data test support, ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/datatesting/data_driven_testing_4.2.0"},"click here")))),(0,i.kt)("p",null,"When writing tests that are logic based, one or two specific code paths that work through particular scenarios make\nsense. Other times we have tests that are more example based, and it would be helpful to test many combinations of\nparameters."),(0,i.kt)("p",null,"In these situations, ",(0,i.kt)("strong",{parentName:"p"},"data driven testing")," (also called table driven testing) is an easy technique to avoid tedious\nboilerplate."),(0,i.kt)("p",null,"Kotest has first class support for data driven testing built into the framework.\nThis means Kotest will automatically generate test case entries, based on input values provided by you."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Let's consider writing tests for a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pythagorean_triple"},"pythagorean triple")," function that\nreturns true if the input values are valid triples (",(0,i.kt)("em",{parentName:"p"},"a squared + b squared = c squared"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun isPythagTriple(a: Int, b: Int, c: Int): Boolean = a * a + b * b == c * c\n")),(0,i.kt)("p",null,"Since we need more than one element per row (we need 3), we start by defining a data class that will hold a single ",(0,i.kt)("em",{parentName:"p"},"\nrow")," of values (in our case, the two inputs, and the expected result)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class PythagTriple(val a: Int, val b: Int, val c: Int)\n")),(0,i.kt)("p",null,"We will create tests by using instances of this data class, passing them into the ",(0,i.kt)("inlineCode",{parentName:"p"},"withData")," function, which also\naccepts a lambda that performs the test logic for that given ",(0,i.kt)("em",{parentName:"p"},"row"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FunSpec({\n  context("Pythag triples tests") {\n    withData(\n      PythagTriple(3, 4, 5),\n      PythagTriple(6, 8, 10),\n      PythagTriple(8, 15, 17),\n      PythagTriple(7, 24, 25)\n    ) { (a, b, c) ->\n      isPythagTriple(a, b, c) shouldBe true\n    }\n  }\n})\n')),(0,i.kt)("p",null,"Notice that because we are using data classes, the input row can be destructured into the member properties.\nWhen this is executed, we will have 4 test cases in our input, one for each input row."),(0,i.kt)("p",null,"Kotest will automatically generate a test case for each input row, as if you had manually written a separate test case\nfor each."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data test example output",src:a(5120).Z})),(0,i.kt)("p",null,"The test names are generated from the data classes themselves but can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/datatesting/custom-test-names.html"},"customized"),"."),(0,i.kt)("p",null,"If there is an error for any particular input row, then the test will fail and Kotest will output the values that\nfailed. For example, if we change the previous example to include the row ",(0,i.kt)("inlineCode",{parentName:"p"},"PythagTriple(5, 4, 3)"),"\nthen that test will be marked as a failure."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data test example output",src:a(1391).Z})),(0,i.kt)("p",null,"The error message will contain the error and the input row details:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Test failed for (a, 5), (b, 4), (c, 3) expected:<9> but was:<41>")),(0,i.kt)("p",null,"In that previous example, we wrapped the ",(0,i.kt)("inlineCode",{parentName:"p"},"withData")," call in a parent test, so we have more context when the test results appear.\nThe syntax varies depending on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html"},"spec style")," used - here we used ",(0,i.kt)("em",{parentName:"p"},"fun spec")," which uses context blocks for containers.\nIn fact, data tests can be nested inside any number of containers."),(0,i.kt)("p",null,"But this is optional, you can define data tests at the root level as well."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTests : FunSpec({\n  withData(\n    PythagTriple(3, 4, 5),\n    PythagTriple(6, 8, 10),\n    PythagTriple(8, 15, 17),\n    PythagTriple(7, 24, 25)\n  ) { (a, b, c) ->\n    isPythagTriple(a, b, c) shouldBe true\n  }\n})\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Data tests can only be defined at the root or in container scopes. They cannot be defined inside leaf scopes."))))}u.isMDXComponent=!0},5120:function(e,t,a){t.Z=a.p+"assets/images/datatest1-55f0023d0e24fd14ff7081a3746e32ef.png"},1391:function(e,t,a){t.Z=a.p+"assets/images/datatest2-caababc9c261775d74c2c236cbf23686.png"}}]);