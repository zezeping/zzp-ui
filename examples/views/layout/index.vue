<template>
  <usage-with-demo :usage="usage">
    <div>
      <h5>基础用法</h5>
      <zzp-row class="row">
        <zzp-col class="col" span="8">span:8</zzp-col>
        <zzp-col class="col" span="8">span:8</zzp-col>
        <zzp-col class="col" span="8">span:8</zzp-col>
      </zzp-row>
      <hr>
      <zzp-row class="row">
        <zzp-col class="col" span="4">span: 4</zzp-col>
        <zzp-col class="col" span="10" offset="4">offset: 4, span: 10</zzp-col>
      </zzp-row>
      <hr>
      <zzp-row class="row">
        <zzp-col class="col" offset="12" span="12">offset: 12, span: 12</zzp-col>
      </zzp-row>
      <hr>
      <h5>在列元素之间增加间距 (gutter="20")</h5>
      <zzp-row class="row" gutter="20">
        <zzp-col class="col" span="8">span: 8</zzp-col>
        <zzp-col class="col" span="8">span: 8</zzp-col>
        <zzp-col class="col" span="8">span: 8</zzp-col>
      </zzp-row>
      <hr>
      <h5>Flex 布局</h5>
      <h6>-- 左对齐 --></h6>
      <zzp-row class="row" flex>
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
      </zzp-row>

      <h6>-- 居中 --></h6>
      <zzp-row class="row" flex justify="center">
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
      </zzp-row>
      <h6>-- 右对齐 --></h6>
      <zzp-row class="row" flex justify="end">
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
      </zzp-row>
      <h6>-- 两端对齐 --></h6>
      <zzp-row class="row" flex justify="space-between">
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
      </zzp-row>
      <h6>-- 每个元素的两侧间隔相等 --></h6>
      <zzp-row class="row" flex justify="space-around">
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
        <zzp-col class="col" span="6">span: 6</zzp-col>
      </zzp-row>
    </div>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    font-size: 12px;
    line-height: 2.5;
    text-align: center;
    .col {
      background-clip: content-box;
    }
    .col:nth-child(odd) {
      background-color: #1b9fea;
    }
    .col:nth-child(even) {
      background-color: #4fbff0;
    }
  }
</style>
