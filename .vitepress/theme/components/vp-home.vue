<script></script>

<template>
  <f-main>
    <f-text align="center" bold block :size="25">
      前端新手项目指北系列文章
    </f-text>

    <f-text align="center" style="margin-top: 20px;">
      <f-button round type="primary" class="start" href="/ProjectConstructionBlog/docs/01.html">
        📔 查看文档
      </f-button>
      <f-button round href="https://github.com/SmallTeddy/ProjectConstructionHub" target="_blank" style="margin-left: 20px;">
        🧸 Github
      </f-button>
    </f-text>

    <f-divider margin="40px" color="#eef" />

    <f-text bold block>指北目录</f-text>
    <f-link href="/ProjectConstructionBlog/docs/01.html">第一章 技术栈简介(开篇)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/02.html">第二章 环境部署(Node等环境安装)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/03.html">第三章 项目创建(Vite项目初始化)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/04.html">第四章 认识项目目录(项目整体介绍)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/05.html">第五章 Element-Plus组件库安装和使用(Element-Plus基础配置)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/06.html">第六章 样式格式化(Sass配置)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/07.html">第七章 路由配置(vue-router深入解读)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/08.html">第八章 Layout组件(Element-Plus的使用)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/09.html">第九章 登录开发(Pinia的使用和数据持久化)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/10.html">第十章 请求配置(Axios请求和响应拦截)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/11.html">第十一章 基础界面开发 (组件封装和使用)</f-link>
    <f-link href="/ProjectConstructionBlog/docs/12.html">第十二章 常用工具函数 (Utils配置)</f-link>
  </f-main>
</template>

<style scoped>
.f-main {
  max-width: 620px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 40px;
  padding-bottom: 0;
}

.f-button-default {
  margin-left: 10px;
}

.f-text,
.f-link {
  display: block;
  line-height: 40px;
}
</style>

