<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="220px">
      <el-form-item label="通报人">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="影响运行的天气情况">
        <el-input v-model="form.desc1" type="textarea" />
      </el-form-item>
      <el-form-item label="气象服务情况">
        <el-input v-model="form.desc2" type="textarea" />
      </el-form-item>
      <el-form-item label="重要气象技术装备运行情况">
        <el-input v-model="form.desc3" type="textarea" />
      </el-form-item>
      <el-form-item label="其他">
        <el-input v-model="form.desc4" type="textarea" />
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model="defaultDate" type="date" style="width: 100%" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新建</el-button>
        <!-- <el-button @click="resetForm('form')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        desc1: "",
        desc2: "",
        desc3: "",
        desc4: "",
      },
      defaultDate: new Date()
    };
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
    },
    resetForm(formName) {
      console.log("123")
      this.$refs[formName].resetFields()
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

