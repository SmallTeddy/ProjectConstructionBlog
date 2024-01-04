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
    <f-text bold block>第一章 技术栈简介(开篇)</f-text>
    <f-text block>第二章 环境部署(Node等环境安装)</f-text>
    <f-text block>第三章 项目创建(Vite项目初始化)</f-text>
    <f-text bold block>第四章 认识项目目录(项目整体介绍)</f-text>
    <f-text>第五章 Element-Plus组件库安装和使用(Element-Plus基础配置)</f-text>
    <f-text>第六章 样式格式化(Sass配置)</f-text>
    <f-text>第七章 路由配置(vue-router深入解读)</f-text>
    <f-text>第八章 Layout组件(Element-Plus的使用)</f-text>
    <f-text>第九章 登录开发(Pinia的使用和数据持久化)</f-text>
    <f-text>第十章 请求配置(Axios请求和响应拦截)</f-text>
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

.f-text {
  display: block;
  line-height: 40px;
}
</style>

