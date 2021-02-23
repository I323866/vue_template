<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="600px"
    @close="close"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <!-- <el-form-item label="标题" prop="title">
        <el-input v-model.trim="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model.trim="form.author" autocomplete="off"></el-input>
      </el-form-item> -->
      <el-form-item label="通报人">
        <el-input v-model.trim="form.title"  autocomplete="off" />
      </el-form-item>
      <el-form-item label="影响运行的天气情况">
        <el-input v-model.trim="form.author" type="textarea" />
      </el-form-item>
      <el-form-item label="气象服务情况">
        <el-input v-model.trim="form.pageviews" type="textarea" />
      </el-form-item>
      <el-form-item label="重要气象技术装备运行情况">
        <el-input v-model.trim="form.desc3" type="textarea" />
      </el-form-item>
      <el-form-item label="其他">
        <el-input v-model.trim="form.desc4" type="textarea" />
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model.trim="defaultDate" type="date" style="width: 100%" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { doEdit } from "@/api/table";

export default {
  name: "TableEdit",
  data() {
    return {
      form: {
        name: "",
        desc1: "",
        desc2: "",
        desc3: "",
        desc4: "",
      },
      rules: {
        title: [{ required: true, trigger: "blur", message: "请输入标题" }],
        author: [{ required: true, trigger: "blur", message: "请输入作者" }],
      },
      title: "",
      dialogFormVisible: false,
      defaultDate: new Date()
    };
  },
  created() {},
  methods: {
    showEdit(row) {
      if (!row) {
        this.title = "添加";
      } else {
        this.title = "编辑";
        this.form = Object.assign({}, row);
      }
      this.dialogFormVisible = true;
    },
    close() {
      this.$refs["form"].resetFields();
      this.form = this.$options.data().form;
      this.dialogFormVisible = false;
      this.$emit("fetch-data");
    },
    save() {
      this.$refs["form"].validate(async (valid) => {
        if (valid) {
          const { msg } = await doEdit(this.form);
          this.$baseMessage(msg, "success");
          this.$refs["form"].resetFields();
          this.dialogFormVisible = false;
          this.$emit("fetch-data");
          this.form = this.$options.data().form;
        } else {
          return false;
        }
      });
    },
  },
};
</script>
