(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2545"],{"7ddf":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div style=\"cursor: pointer\">\n    <el-tag :type=\"type\" @click.native=\"handleClick\">{{ text }}</el-tag>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: Boolean,\n      require: true\n    }\n  },\n  computed: {\n    type () {\n      return this.value ? 'success' : 'danger'\n    },\n    text () {\n      return this.value ? '是' : '否'\n    }\n  },\n  methods: {\n    handleClick () {\n      this.$emit('input', !this.value)\n    }\n  }\n}\n<\/script>"}}]);