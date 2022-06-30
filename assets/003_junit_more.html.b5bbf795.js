import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as p,a as n,b as e,e as t,d as s}from"./app.de8ea558.js";const l={},u=t(`<p>\u5982\u679C\u5927\u5BB6\u4F7F\u7528\u8FC7testNG:</p><blockquote><p>TestNG\u662FJava\u4E2D\u7684\u4E00\u4E2A\u6D4B\u8BD5\u6846\u67B6\uFF0C \u7C7B\u4F3C\u4E8EJUnit \u548CNUnit, \u529F\u80FD\u90FD\u5DEE\u4E0D\u591A\uFF0C \u53EA\u662F\u529F\u80FD\u66F4\u52A0\u5F3A\u5927\uFF0C\u4F7F\u7528\u4E5F\u66F4\u65B9\u4FBF\u3002</p></blockquote><p>\u4E00\u5B9A\u4F1A\u88AB testNG(Next Generation\u7684\u9996\u5B57\u6BCD) \u91CC\u9762\u7684\u4E00\u4E9B\u7279\u5F81\u5438\u5F15\uFF0C \u6BD4\u5982\u53C2\u6570\u5316\uFF0C \u5F53\u521D\u4E5F\u662F\u975E\u5E38\u5438\u5F15\u7B14\u8005\uFF0C \u73B0\u5728Junit5\u4E2D\u5DF2\u7ECF\u90FD\u6709\u4E86\uFF01</p><p>\u4E0D\u5F97\u4E0D\u8BF4 testNG\uFF0C \u91CC\u9762\u6709\u5F88\u591A\u7684\u8BBE\u8BA1\uFF0C \u5728\u65B0\u4E00\u4EE3\u7684 Junit5 \u90FD\u4F5C\u4E86\u53C2\u8003\uFF0C \u7B14\u8005\u8BA4\u4E3A\uFF0C\u5728\u5F00\u53D1\u4EBA\u5458\u8FD9\u91CCJunit \u4F7F\u7528\u6BD4\u8F83\u5E7F\u6CDB\uFF0C \u5728\u6D4B\u8BD5\u5F00\u53D1\u4EBA\u5458\u4E2D testNG \u4F7F\u7528\u6BD4\u8F83\u591A\u3002</p><p>\u7B2C\u4E00\u6B21\u63A5\u89E6 testNG \u786E\u5B9E\u4E5F\u662F\u56E2\u961F\u4E2D QA \u7EC4\u5728\u7528\u8FD9\u4E2A\uFF0C\u5165\u5751\u7684\u3002</p><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>\u8981\u4F7F\u7528 JUnit 5 \u8FDB\u884C\u53C2\u6570\u5316\u6D4B\u8BD5\uFF0C\u9664\u4E86 junit-jupiter-engine \u57FA\u7840\u4F9D\u8D56\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u53E6\u4E2A\u6A21\u5757\u4F9D\u8D56\uFF1A<code>junit-jupiter-params</code>\uFF0C\u5176\u4E3B\u8981\u5C31\u662F\u63D0\u4F9B\u4E86\u7F16\u5199\u53C2\u6570\u5316\u6D4B\u8BD5 API\u3002</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>
<span class="token function">testImplementation</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.junit.jupiter:junit-jupiter-params&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        because <span class="token string">&#39;junit params&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=s("\u4F8B\u5B50\uFF1A "),d={href:"https://gitee.com/dearxuecom/better_test/blob/master/001_junit_basic/src/test/java/com/dearxue/tester/ParameterizedUnitTest.java",target:"_blank",rel:"noopener noreferrer"},v=s("ParameterizedUnitTest"),m=t(`<h3 id="\u57FA\u672C\u6570\u636E\u6E90\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6570\u636E\u6E90\u6D4B\u8BD5" aria-hidden="true">#</a> \u57FA\u672C\u6570\u636E\u6E90\u6D4B\u8BD5</h3><p>\u57FA\u672C\u6570\u636E\u6E90\u6D4B\u8BD5\uFF1A <code>@ValueSource</code></p><p><code>@ValueSource</code> \u662F JUnit 5 \u63D0\u4F9B\u7684\u6700\u7B80\u5355\u7684\u6570\u636E\u53C2\u6570\u6E90\uFF0C\u652F\u6301 Java \u7684\u516B\u5927\u57FA\u672C\u7C7B\u578B\u548C\u5B57\u7B26\u4E32\uFF0CClass\uFF0C\u4F7F\u7528\u65F6\u8D4B\u503C\u7ED9\u6CE8\u89E3\u4E0A\u5BF9\u5E94\u7C7B\u578B\u5C5E\u6027\uFF0C\u4EE5\u6570\u7EC4\u65B9\u5F0F\u4F20\u9012\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@ParameterizedTest</span>
  <span class="token annotation punctuation">@ValueSource</span><span class="token punctuation">(</span>ints <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">void</span> <span class="token function">testNumberShouldBeEven</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> num <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@ParameterizedTest</span>
<span class="token annotation punctuation">@ValueSource</span><span class="token punctuation">(</span>strings <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Effective Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Code Complete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Clean Code&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">testPrintTitle</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@ParameterizedTest</code> \u4F5C\u4E3A\u53C2\u6570\u5316\u6D4B\u8BD5\u7684\u5FC5\u8981\u6CE8\u89E3\uFF0C\u66FF\u4EE3\u4E86 <code>@Test</code> \u6CE8\u89E3\u3002\u4EFB\u4F55\u4E00\u4E2A\u53C2\u6570\u5316\u6D4B\u8BD5\u65B9\u6CD5\u90FD\u9700\u8981\u6807\u8BB0\u4E0A\u8BE5\u6CE8\u89E3\u3002</p><h3 id="csv-\u6570\u636E\u6E90\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#csv-\u6570\u636E\u6E90\u6D4B\u8BD5" aria-hidden="true">#</a> CSV \u6570\u636E\u6E90\u6D4B\u8BD5</h3><p>\u901A\u8FC7 <code>@CsvSource</code> \u53EF\u4EE5\u6CE8\u5165\u6307\u5B9A CSV \u683C\u5F0F (comma-separated-values) \u7684\u4E00\u7EC4\u6570\u636E\uFF0C\u7528\u6BCF\u4E2A\u9017\u53F7\u5206\u9694\u7684\u503C\u6765\u5339\u914D\u4E00\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u5BF9\u5E94\u7684\u53C2\u6570\uFF0C\u4E0B\u9762\u662F\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@ParameterizedTest</span>
<span class="token annotation punctuation">@CsvSource</span><span class="token punctuation">(</span>
      delimiter <span class="token operator">=</span> <span class="token char">&#39;,&#39;</span><span class="token punctuation">,</span>
      value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;1,One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2,Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3,Three&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">testDataFromCsv</span><span class="token punctuation">(</span><span class="token keyword">long</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u5F97\u5230\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
id: <span class="token number">1</span>, name: One
id: <span class="token number">2</span>, name: Two
id: <span class="token number">3</span>, name: Three

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JUnit \u8FD8\u63D0\u4F9B\u4E86\u8BFB\u53D6\u5916\u90E8 CSV \u683C\u5F0F\u6587\u4EF6\u6570\u636E\u7684\u65B9\u5F0F\u4F5C\u4E3A\u6570\u636E\u6E90\u7684\u5B9E\u73B0\uFF0C\u6211\u4EEC\u53EA\u8981\u7528 @CsvFileSource \u6307\u5B9A\u8D44\u6E90\u6587\u4EF6\u8DEF\u5F84\u5373\u53EF\uFF0C\u4F7F\u7528\u8D77\u6765\u8DDF @CsvSource \u4E00\u6837\u7B80\u5355\u3002</p><p><code>@CsvFileSource</code> \u6307\u5B9A\u7684\u8D44\u6E90\u6587\u4EF6\u8DEF\u5F84\u65F6\u8981\u4EE5 <code>/</code> \u5F00\u59CB\uFF0C\u5BFB\u627E\u5F53\u524D\u6D4B\u8BD5\u8D44\u6E90\u76EE\u5F55\u4E0B\u6587\u4EF6</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@ParameterizedTest</span>
<span class="token annotation punctuation">@CsvFileSource</span><span class="token punctuation">(</span>resources <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;/data.csv&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">testDataFromCsvFile</span><span class="token punctuation">(</span><span class="token keyword">long</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
\u251C\u2500java
\u2502  \u2514\u2500com
\u2502      \u2514\u2500dearxue
\u2502          \u2514\u2500tester
\u2502                  ParameterizedUnitTest.java
\u2502
\u2514\u2500resources
        data.csv

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),k=s("JUnit \u8FD8\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E09\u79CD\u6570\u636E\u6E90\u53C2\u8003 "),b={href:"https://gitee.com/dearxuecom/better_test/blob/master/001_junit_basic/src/test/java/com/dearxue/tester/ParameterizedUnitTest.java",target:"_blank",rel:"noopener noreferrer"},g=s("ParameterizedUnitTest"),h=s("\uFF1A"),_=t(`<ol><li>@EnumSource\uFF1A\u5141\u8BB8\u6211\u4EEC\u901A\u8FC7\u53C2\u6570\u503C\uFF0C\u7ED9\u6307\u5B9A Enum \u679A\u4E3E\u7C7B\u578B\u4F20\u5165\uFF0C\u6784\u9020\u51FA\u679A\u4E3E\u7C7B\u578B\u4E2D\u7279\u5B9A\u7684\u503C\u3002</li><li>@MethodSource\uFF1A\u6307\u5B9A\u4E00\u4E2A\u8FD4\u56DE\u7684 Stream / Array / \u53EF\u8FED\u4EE3\u5BF9\u8C61 \u7684\u65B9\u6CD5\u4F5C\u4E3A\u6570\u636E\u6E90\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\u8BE5\u65B9\u6CD5\u5FC5\u987B\u662F\u9759\u6001\u7684\uFF0C\u5E76\u4E14\u4E0D\u80FD\u63A5\u53D7\u4EFB\u4F55\u53C2\u6570\u3002</li><li>@ArgumentSource\uFF1A\u901A\u8FC7\u5B9E\u73B0 ArgumentsProvider \u63A5\u53E3\u7684\u53C2\u6570\u7C7B\u6765\u4F5C\u4E3A\u6570\u636E\u6E90\uFF0C\u91CD\u5199\u5B83\u7684 provideArguments \u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE\u81EA\u5B9A\u4E49\u7C7B\u578B\u7684 <code>Stream&lt;Arguments&gt;</code> \uFF0C\u4F5C\u4E3A\u6D4B\u8BD5\u65B9\u6CD5\u6240\u9700\u8981\u7684\u6570\u636E\u4F7F\u7528\u3002</li></ol><h2 id="\u5957\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5957\u4EF6" aria-hidden="true">#</a> \u5957\u4EF6</h2><p>\u5957\u4EF6 suite \u662F\u4E2A\u4EC0\u4E48\uFF1F \u542C\u8D77\u6765\u50CF\u4E2A\u5957\u9910\uFF0C \u6CA1\u9519\u4ED6\u5C31\u662F\u4E2A\u5957\u9910\u3002</p><p>\u6D4B\u8BD5\u5957\u4EF6\u5176\u5B9E\u5C31\u662FJUnit5\u5141\u8BB8\u6211\u4EEC\u8FD0\u884C\u591A\u4E2A\u5305\u6216\u8005\u7C7B\u4E2D\u7684\u6D4B\u8BD5\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u5206\u7EC4\u6D4B\u8BD5\u3002JUnit5\u4E2D\u4F7F\u7528@Suite\u6CE8\u89E3\u6765\u58F0\u660E\u6D4B\u8BD5\u5957\u4EF6, BTW \u8FD9\u4E2A\u6982\u5FF5\u5728testNG \u4E5F\u65E9\u5C31\u6709\u4E86\u3002</p><p>\u5728\u5F00\u59CB\u5206\u7EC4\u6D4B\u8BD5\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u4E86\u89E3\u51E0\u4E2A\u6CE8\u89E3\uFF1A</p><ol><li>@Tag\uFF1A\u6D4B\u8BD5\u7C7B\u548C\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7\u6B64\u6CE8\u89E3\u8FDB\u884C\u6807\u8BB0\u3002\u8FD9\u4E9B\u6807\u7B7E\u4EE5\u540E\u53EF\u7528\u4E8E\u8FC7\u6EE4\u6D4B\u8BD5\u53D1\u73B0\u548C\u6267\u884C\u3002</li><li>@Disabled\uFF1A\u6574\u4E2A\u6D4B\u8BD5\u7C7B\u6216\u5355\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7\u6B64\u6CE8\u89E3\u7981\u6B62\u6D4B\u8BD5\u3002</li></ol><p>\u8FD8\u6709\u66F4\u591A\u7684\u8FD9\u51E0\u4E2A\uFF1A</p><ol><li>@RunWith(JUnitPlatform.class) \u6267\u884C\u5957\u4EF6</li><li><strong>@SelectPackages</strong>({&quot;packageA&quot;,&quot;packageB&quot;})\u521B\u5EFA\u6D4B\u8BD5\u5957\u4EF6</li><li><strong>@SelectClasses</strong>({a.class,b.class,c.class}) \u521B\u5EFA\u6D4B\u8BD5\u5957\u4EF6</li><li><strong>@IncludePackages</strong>(&quot;PackageName&quot;) \u8FC7\u6EE4\u9700\u8981\u6267\u884C\u7684\u6D4B\u8BD5\u5305</li><li>@ExcludePackages(&quot;PackageName&quot;) \u8FC7\u6EE4\u6389\u4E0D\u9700\u8981\u6267\u884C\u7684\u6D4B\u8BD5\u5305</li><li>@IncludeClassNamePatterns \u8FC7\u6EE4\u9700\u8981\u6267\u884C\u7684\u6D4B\u8BD5\u7C7B</li><li>@ExcludeClassNamePatterns \u8FC7\u6EE4\u4E0D\u9700\u8981\u6267\u884C\u7684\u6D4B\u8BD5\u7C7B</li><li>@IncludeTags(&quot;sit&quot;) \u8FC7\u6EE4\u9700\u8981\u6267\u884C\u7684\u6D4B\u8BD5\u65B9\u6CD5</li><li>@ExcludeTags(&quot;prod&quot;) \u8FC7\u6EE4\u4E0D\u9700\u8981\u6267\u884C\u7684\u6D4B\u8BD5\u65B9\u6CD5</li></ol><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token comment">//suite we need</span>
testImplementation <span class="token string">&#39;org.junit.platform:junit-platform-suite:1.8.2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),f=s("\u4F8B\u5B50\u5728 "),j={href:"https://gitee.com/dearxuecom/better_test/tree/master/001_junit_basic/src/test/java/com/dearxue/tester/suite",target:"_blank",rel:"noopener noreferrer"},q=s("Junit test suite"),S=s(" \u5305\u542B\uFF1A"),T=t(`<ol><li>AssertTest</li><li>LifeCycleTests</li><li>SuiteTests</li></ol><p>\u53EF\u4EE5\u901A\u8FC7\uFF0C \u5305\u3001\u7C7B \u9009\u62E9\u65B9\u5F0F\u805A\u5408\u6210 suite, \u4E5F\u901A\u8FC7 tag \u8FDB\u884C\u9009\u62E9\u6267\u884C\uFF0C \u8FD9\u4E2A\u6709\u70B9\u7C7B\u4F3C spring \u91CC\u9762 component scan, profile \u8BBE\u7F6E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token comment">// \u5C06LifeCycleTests\u548CAssertTest\u8FD9\u4E24\u4E2A\u7C7B\u5408\u5E76\u5728\u4E00\u4E2A\u5206\u7EC4\u4E2D\u8FDB\u884C\u6D4B\u8BD5</span>
<span class="token annotation punctuation">@SelectClasses</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LifeCycleTests</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">AssertTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C06\u591A\u4E2A\u5305\u5408\u5E76\u4E00\u4E2A\u7EC4\u4E2D\u6D4B\u8BD5</span>
<span class="token comment">// @SelectPackages({&quot;com.dearxue.tester.suite&quot;})</span>
<span class="token comment">// \u8FD9\u4E2A\u6CE8\u89E3\u4EE3\u8868\u53EA\u6D4B\u8BD5\u542B\u6709DEV\u6807\u7B7E\u7684\u6D4B\u8BD5\u7C7B\u6216\u8005\u65B9\u6CD5</span>
<span class="token annotation punctuation">@IncludeTags</span><span class="token punctuation">(</span><span class="token string">&quot;PROD&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Suite</span>
<span class="token annotation punctuation">@SuiteDisplayName</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5\u5957\u4EF6\uFF0C\u5206\u7EC4\u6D4B\u8BD5&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuiteTests</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>
   <span class="token code-section">*     <span class="token line"><span class="token code language-java">useJUnitPlatform <span class="token punctuation">{</span></span></span>
   *         <span class="token line"><span class="token code language-java"><span class="token comment">// includeTags &#39;fast&#39;</span></span></span>
   *         <span class="token line"><span class="token code language-java"><span class="token comment">// excludeTags &#39;slow&#39;</span></span></span>
   *     <span class="token line"><span class="token code language-java"><span class="token punctuation">}</span></span></span>
   *
   *</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
   */</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,4),x={href:"https://www.javatpoint.com/testng-tutorial",target:"_blank",rel:"noopener noreferrer"},y=s("testNG"),C={href:"https://howtodoinjava.com/junit5/junit5-test-suites-examples/",target:"_blank",rel:"noopener noreferrer"},P=s("JUnit 5 Test Suites");function N(w,J){const a=o("ExternalLinkIcon");return c(),p("div",null,[u,n("p",null,[r,n("a",d,[v,e(a)])]),m,n("p",null,[k,n("a",b,[g,e(a)]),h]),_,n("p",null,[f,n("a",j,[q,e(a)]),S]),T,n("ol",null,[n("li",null,[n("a",x,[y,e(a)])]),n("li",null,[n("a",C,[P,e(a)])])])])}var E=i(l,[["render",N],["__file","003_junit_more.html.vue"]]);export{E as default};
