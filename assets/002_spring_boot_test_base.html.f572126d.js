import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as i,a as s,b as e,d as o,e as p}from"./app.de8ea558.js";const l={},c={href:"https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot-starters/spring-boot-starter-test/build.gradle",target:"_blank",rel:"noopener noreferrer"},d=o("gradle depedency"),b=p(`<div class="language-grovvy ext-grovvy line-numbers-mode"><pre class="language-grovvy"><code>dependencies {
	api(project(&quot;:spring-boot-project:spring-boot-starters:spring-boot-starter&quot;))
	api(project(&quot;:spring-boot-project:spring-boot-test&quot;))
	api(project(&quot;:spring-boot-project:spring-boot-test-autoconfigure&quot;))
	api(&quot;com.jayway.jsonpath:json-path&quot;)
	api(&quot;jakarta.xml.bind:jakarta.xml.bind-api&quot;)
	api(&quot;org.assertj:assertj-core&quot;)
	api(&quot;org.hamcrest:hamcrest&quot;)
	api(&quot;org.junit.jupiter:junit-jupiter&quot;)
	api(&quot;org.mockito:mockito-core&quot;)
	api(&quot;org.mockito:mockito-junit-jupiter&quot;)
	api(&quot;org.skyscreamer:jsonassert&quot;)
	api(&quot;org.springframework:spring-core&quot;)
	api(&quot;org.springframework:spring-test&quot;)
	api(&quot;org.xmlunit:xmlunit-core&quot;) {
		exclude group: &quot;javax.xml.bind&quot;, module: &quot;jaxb-api&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-boot-\u6D4B\u8BD5\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#spring-boot-\u6D4B\u8BD5\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> Spring boot \u6D4B\u8BD5\u9879\u76EE\u7ED3\u6784</h3><p>\u5982\u679C\u628A\u6574\u4E2A spring boot \u6D4B\u8BD5\u76F8\u5173\u7684\u9879\u76EE\u634B\u4E00\u4E0B\u4F1A\u6709\u8FD9\u4E48\u591A\uFF1A</p><ol><li><strong>[4-spring-boot-test]</strong> &amp;&amp; <strong>[5-spring-boot-test-autoconfigure]</strong><ol><li>spring-boot-test \u5305\u542B\u6838\u5FC3\u7684\u6D4B\u8BD5\u6269\u5C55</li><li>spring-boot-test-autoconfigure \u6D4B\u8BD5\u91CC\u9762\u652F\u6301 auto-configuration</li></ol></li><li>[9-10] spring \u81EA\u5DF1\u6846\u67B6\u7684\u5192\u70DF\u6D4B\u8BD5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
+---spring-boot-project
<span class="token operator">|</span>   +---spring-boot-parent
<span class="token operator">|</span>   +---spring-boot-starters
<span class="token operator">|</span>   <span class="token operator">|</span>   +---spring-boot-starter        <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   +---spring-boot-starter-parent <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   +---spring-boot-starter-test   <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> 
<span class="token operator">|</span>   +---spring-boot-test               <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> 
<span class="token operator">|</span>   +---spring-boot-test-autoconfigure <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token operator">|</span>   +---spring-boot-tools              <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token operator">|</span>       <span class="token punctuation">\\</span>---spring-boot-test-support   <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span>
+---spring-boot-system-tests           <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span>
<span class="token operator">|</span>   +---spring-boot-deployment-tests
<span class="token operator">|</span>   <span class="token punctuation">\\</span>---spring-boot-image-tests
+---spring-boot-tests                  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span>
<span class="token operator">|</span>   +---spring-boot-deployment-tests  
<span class="token operator">|</span>   +---spring-boot-integration-tests 
<span class="token operator">|</span>   <span class="token operator">|</span>   +---spring-boot-configuration-processor-tests
<span class="token operator">|</span>   <span class="token operator">|</span>   +---spring-boot-launch-script-tests
<span class="token operator">|</span>   <span class="token operator">|</span>   +---spring-boot-loader-tests
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token punctuation">\\</span>---spring-boot-server-tests
<span class="token operator">|</span>   <span class="token punctuation">\\</span>---spring-boot-smoke-tests        <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
<span class="token operator">|</span>       +---spring-boot-smoke-test-actuator
<span class="token operator">|</span>       +---spring-boot-smoke-test-actuator-custom-security
<span class="token operator">|</span>       +---spring-boot-smoke-test-actuator-log4j2
<span class="token operator">|</span>       +---spring-boot-smoke-test-actuator-noweb
<span class="token operator">|</span>       +---spring-boot-smoke-test-actuator-ui
<span class="token operator">|</span>       +---spring-boot-smoke-test-amqp
<span class="token operator">|</span>       +---spring-boot-smoke-test-animated-banner
<span class="token operator">|</span>       +---spring-boot-smoke-test-ant
<span class="token operator">|</span>       +---spring-boot-smoke-test-aop
<span class="token operator">|</span>       +---spring-boot-smoke-test-batch
<span class="token operator">|</span>       +---spring-boot-smoke-test-bootstrap-registry
<span class="token operator">|</span>       +---spring-boot-smoke-test-cache
<span class="token operator">|</span>       +---spring-boot-smoke-test-data-jdbc
<span class="token operator">|</span>       +---spring-boot-smoke-test-data-jpa
<span class="token operator">|</span>       +---spring-boot-smoke-test-data-ldap
<span class="token operator">|</span>       +---spring-boot-smoke-test-data-r2dbc
<span class="token operator">|</span>       +---spring-boot-smoke-test-data-r2dbc-flyway
<span class="token operator">|</span>       +---spring-boot-smoke-test-data-r2dbc-liquibase
<span class="token operator">|</span>       +---spring-boot-smoke-test-data-rest
<span class="token operator">|</span>       +---spring-boot-smoke-test-devtools
<span class="token operator">|</span>       +---spring-boot-smoke-test-flyway
<span class="token operator">|</span>       +---spring-boot-smoke-test-hateoas
<span class="token operator">|</span>       +---spring-boot-smoke-test-integration
<span class="token operator">|</span>       +---spring-boot-smoke-test-jetty
<span class="token operator">|</span>       +---spring-boot-smoke-test-jetty-jsp
<span class="token operator">|</span>       +---spring-boot-smoke-test-jetty-ssl
<span class="token operator">|</span>       +---spring-boot-smoke-test-jpa
<span class="token operator">|</span>       +---spring-boot-smoke-test-junit-vintage
<span class="token operator">|</span>       +---spring-boot-smoke-test-kafka
<span class="token operator">|</span>       +---spring-boot-smoke-test-liquibase
<span class="token operator">|</span>       +---spring-boot-smoke-test-logback
<span class="token operator">|</span>       +---spring-boot-smoke-test-oauth2-client
<span class="token operator">|</span>       +---spring-boot-smoke-test-oauth2-resource-server
<span class="token operator">|</span>       +---spring-boot-smoke-test-parent-context
<span class="token operator">|</span>       +---spring-boot-smoke-test-profile
<span class="token operator">|</span>       +---spring-boot-smoke-test-property-validation
<span class="token operator">|</span>       +---spring-boot-smoke-test-quartz
<span class="token operator">|</span>       +---spring-boot-smoke-test-reactive-oauth2-client
<span class="token operator">|</span>       +---spring-boot-smoke-test-reactive-oauth2-resource-server
<span class="token operator">|</span>       +---spring-boot-smoke-test-rsocket
<span class="token operator">|</span>       +---spring-boot-smoke-test-saml2-service-provider
<span class="token operator">|</span>       +---spring-boot-smoke-test-secure
<span class="token operator">|</span>       +---spring-boot-smoke-test-secure-webflux
<span class="token operator">|</span>       +---spring-boot-smoke-test-servlet
<span class="token operator">|</span>       +---spring-boot-smoke-test-session-hazelcast
<span class="token operator">|</span>       +---spring-boot-smoke-test-session-jdbc
<span class="token operator">|</span>       +---spring-boot-smoke-test-session-mongo
<span class="token operator">|</span>       +---spring-boot-smoke-test-session-redis
<span class="token operator">|</span>       +---spring-boot-smoke-test-session-webflux-mongo
<span class="token operator">|</span>       +---spring-boot-smoke-test-session-webflux-redis
<span class="token operator">|</span>       +---spring-boot-smoke-test-test-nomockito
<span class="token operator">|</span>       +---spring-boot-smoke-test-testng
<span class="token operator">|</span>       +---spring-boot-smoke-test-tomcat
<span class="token operator">|</span>       +---spring-boot-smoke-test-tomcat-jsp
<span class="token operator">|</span>       +---spring-boot-smoke-test-tomcat-multi-connectors
<span class="token operator">|</span>       +---spring-boot-smoke-test-tomcat-ssl
<span class="token operator">|</span>       +---spring-boot-smoke-test-traditional
<span class="token operator">|</span>       +---spring-boot-smoke-test-undertow
<span class="token operator">|</span>       +---spring-boot-smoke-test-undertow-ssl
<span class="token operator">|</span>       +---spring-boot-smoke-test-war
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-application-type
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-freemarker
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-groovy-templates
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-jsp
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-method-security
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-mustache
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-secure
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-secure-custom
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-secure-jdbc
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-static
<span class="token operator">|</span>       +---spring-boot-smoke-test-web-thymeleaf
<span class="token operator">|</span>       +---spring-boot-smoke-test-webflux
<span class="token operator">|</span>       +---spring-boot-smoke-test-webflux-coroutines
<span class="token operator">|</span>       +---spring-boot-smoke-test-webservices
<span class="token operator">|</span>       +---spring-boot-smoke-test-websocket-jetty
<span class="token operator">|</span>       +---spring-boot-smoke-test-websocket-tomcat
<span class="token operator">|</span>       +---spring-boot-smoke-test-websocket-undertow
<span class="token operator">|</span>       <span class="token punctuation">\\</span>---spring-boot-smoke-test-xml


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,6),u={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.dependency-versions.coordinates",target:"_blank",rel:"noopener noreferrer"},m=o("Spring Boot \u7248\u672C"),v={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#features.testing",target:"_blank",rel:"noopener noreferrer"},k=o("Spring Boot Testing"),g={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/testing.html",target:"_blank",rel:"noopener noreferrer"},h=o("Spring Testing"),_={href:"https://github.com/spring-projects/spring-framework/",target:"_blank",rel:"noopener noreferrer"},f=o("Spring \u6E90\u7801"),j={href:"https://github.com/spring-projects/spring-boot/",target:"_blank",rel:"noopener noreferrer"},q=o("Spring Boot \u6E90\u7801");function w(x,y){const n=a("ExternalLinkIcon");return r(),i("div",null,[s("p",null,[s("a",c,[d,e(n)])]),b,s("ol",null,[s("li",null,[s("a",u,[m,e(n)])]),s("li",null,[s("a",v,[k,e(n)])]),s("li",null,[s("a",g,[h,e(n)])]),s("li",null,[s("a",_,[f,e(n)])]),s("li",null,[s("a",j,[q,e(n)])])])])}var N=t(l,[["render",w],["__file","002_spring_boot_test_base.html.vue"]]);export{N as default};
