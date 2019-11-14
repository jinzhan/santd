(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{746:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ("<p>Santd 是基于 Ant Design 使用 San 实现的 UI 框架</p><h3 id=\\"安装\\"><span>安装</span><a href=\\"#安装\\" class=\\"anchor\\">#</a></h3><p>指定内部源，使用 npm 安装</p><pre><code class=\\"language-bash\\">$ npm install santd</code></pre>\\n<h3 id=\\"使用\\"><span>使用</span><a href=\\"#使用\\" class=\\"anchor\\">#</a></h3><pre><code class=\\"language-html\\">&lt;script&gt;\\n    import {Button} from &#39;santd&#39;;\\n    export default {\\n        components: {\\n            &#39;s-button&#39;: Button\\n        },\\n        template: `\\n        &lt;div&gt;\\n            &lt;s-button type=&quot;default&quot;&gt;Default&lt;/s-button&gt;\\n        &lt;/div&gt;\\n    `\\n    };\\n&lt;/script&gt;</code></pre>\\n<h3 id=\\"按需加载\\"><span>按需加载</span><a href=\\"#按需加载\\" class=\\"anchor\\">#</a></h3><p>如果使用了 babel，可以使用<a href=\\"https://github.com/ant-design/babel-plugin-import\\">babel-plugin-import</a>来进行按需加载，使用这个插件后，可以写成</p><pre><code class=\\"language-javascript\\">import {Button} from &#39;santd&#39;;</code></pre>\\n<p>仅加载 Button 组件以及样式\\nwebpack loader 配置如下</p><pre><code class=\\"language-javascript\\">{\\n    loader: &quot;babel-loader&quot;,\\n    options: {\\n        plugins: [[&#39;import&#39;, {\\n            libraryName: &#39;@baidu/santd&#39;,\\n            style: &#39;css&#39;\\n        }]]\\n    }\\n}</code></pre>\\n<p>未使用 babel，可以通过以下写法加载指定组件以及样式</p><pre><code class=\\"language-javascript\\">import Button from &#39;santd/lib/button&#39;;\\nimport &#39;santd/lib/button/style/css&#39;;</code></pre>\\n");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZG9jcy9xdWlja3N0YXJ0Lm1kPzQ1YTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8cD5TYW50ZCDmmK/ln7rkuo4gQW50IERlc2lnbiDkvb/nlKggU2FuIOWunueOsOeahCBVSSDmoYbmnrY8L3A+PGgzIGlkPVxcXCLlronoo4VcXFwiPjxzcGFuPuWuieijhTwvc3Bhbj48YSBocmVmPVxcXCIj5a6J6KOFXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIj4jPC9hPjwvaDM+PHA+5oyH5a6a5YaF6YOo5rqQ77yM5L2/55SoIG5wbSDlronoo4U8L3A+PHByZT48Y29kZSBjbGFzcz1cXFwibGFuZ3VhZ2UtYmFzaFxcXCI+JCBucG0gaW5zdGFsbCBzYW50ZDwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcIuS9v+eUqFxcXCI+PHNwYW4+5L2/55SoPC9zcGFuPjxhIGhyZWY9XFxcIiPkvb/nlKhcXFwiIGNsYXNzPVxcXCJhbmNob3JcXFwiPiM8L2E+PC9oMz48cHJlPjxjb2RlIGNsYXNzPVxcXCJsYW5ndWFnZS1odG1sXFxcIj4mbHQ7c2NyaXB0Jmd0O1xcbiAgICBpbXBvcnQge0J1dHRvbn0gZnJvbSAmIzM5O3NhbnRkJiMzOTs7XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICAgICAmIzM5O3MtYnV0dG9uJiMzOTs6IEJ1dHRvblxcbiAgICAgICAgfSxcXG4gICAgICAgIHRlbXBsYXRlOiBgXFxuICAgICAgICAmbHQ7ZGl2Jmd0O1xcbiAgICAgICAgICAgICZsdDtzLWJ1dHRvbiB0eXBlPSZxdW90O2RlZmF1bHQmcXVvdDsmZ3Q7RGVmYXVsdCZsdDsvcy1idXR0b24mZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgYFxcbiAgICB9O1xcbiZsdDsvc2NyaXB0Jmd0OzwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcIuaMiemcgOWKoOi9vVxcXCI+PHNwYW4+5oyJ6ZyA5Yqg6L29PC9zcGFuPjxhIGhyZWY9XFxcIiPmjInpnIDliqDovb1cXFwiIGNsYXNzPVxcXCJhbmNob3JcXFwiPiM8L2E+PC9oMz48cD7lpoLmnpzkvb/nlKjkuoYgYmFiZWzvvIzlj6/ku6Xkvb/nlKg8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9iYWJlbC1wbHVnaW4taW1wb3J0XFxcIj5iYWJlbC1wbHVnaW4taW1wb3J0PC9hPuadpei/m+ihjOaMiemcgOWKoOi9ve+8jOS9v+eUqOi/meS4quaPkuS7tuWQju+8jOWPr+S7peWGmeaIkDwvcD48cHJlPjxjb2RlIGNsYXNzPVxcXCJsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5pbXBvcnQge0J1dHRvbn0gZnJvbSAmIzM5O3NhbnRkJiMzOTs7PC9jb2RlPjwvcHJlPlxcbjxwPuS7heWKoOi9vSBCdXR0b24g57uE5Lu25Lul5Y+K5qC35byPXFxud2VicGFjayBsb2FkZXIg6YWN572u5aaC5LiLPC9wPjxwcmU+PGNvZGUgY2xhc3M9XFxcImxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPntcXG4gICAgbG9hZGVyOiAmcXVvdDtiYWJlbC1sb2FkZXImcXVvdDssXFxuICAgIG9wdGlvbnM6IHtcXG4gICAgICAgIHBsdWdpbnM6IFtbJiMzOTtpbXBvcnQmIzM5Oywge1xcbiAgICAgICAgICAgIGxpYnJhcnlOYW1lOiAmIzM5O0BiYWlkdS9zYW50ZCYjMzk7LFxcbiAgICAgICAgICAgIHN0eWxlOiAmIzM5O2NzcyYjMzk7XFxuICAgICAgICB9XV1cXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+XFxuPHA+5pyq5L2/55SoIGJhYmVs77yM5Y+v5Lul6YCa6L+H5Lul5LiL5YaZ5rOV5Yqg6L295oyH5a6a57uE5Lu25Lul5Y+K5qC35byPPC9wPjxwcmU+PGNvZGUgY2xhc3M9XFxcImxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPmltcG9ydCBCdXR0b24gZnJvbSAmIzM5O3NhbnRkL2xpYi9idXR0b24mIzM5OztcXG5pbXBvcnQgJiMzOTtzYW50ZC9saWIvYnV0dG9uL3N0eWxlL2NzcyYjMzk7OzwvY29kZT48L3ByZT5cXG5cIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///746\n')}}]);