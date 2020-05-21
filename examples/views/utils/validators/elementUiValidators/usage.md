# Element-ui Validators

### Install
```javascript
import elementUiValidators from 'zzp-ui/packages/utils/validators/element-ui'
// merge element-ui validators to Vue.prototype.$validators
Vue.use(elementUiValidators) 
```

### Support
> $validators.required(`options`)

    options -> { `required`: true, `message`: '不允许为空', `trigger`: 'blur' }

> $validators.email(`options`)
    
    options -> { `type`: 'email', `message`: '邮箱格式不正确', `trigger`: 'blur' }

> $validators.mobile(`options`)

    options -> { `regex`: /^1\d{10}$/, `validator`: regexValidator, `message`: '格式错误', `trigger`: 'blur' }
    
> $validators.regex(`options`)

    options -> { `regex`, `validator`: regexValidator, `message`: '格式错误', `trigger`: 'blur' }

> $validators.minValue(`options`)

    options -> { `minValue`, validator: minValueValidator, message: '...', trigger: 'blur' }
    
> $validators.maxValue(`options`)
    
    options -> { `maxValue`, validator: maxValueValidator, message: '...', trigger: 'blur' }
    
### Demo
```vue
<template>
  <el-form :model="form" ref="formRef">
    <el-form-item prop="name" :rules="[$validators.required()]">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">立即创建</el-button>
      <el-button @click="$refs['formRef'].resetFields()">取消</el-button>
    </el-form-item>
  </el-form>
</template>

export default {
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs['formRef'].validate((valid) => {
        if (valid) {
        }
      })
    }
  }
}

```
