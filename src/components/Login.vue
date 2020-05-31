<template>
    <div class="login_container">
        <div class="login_box">
            <!-- //头像 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 表单 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="50px" class="login_form">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                     <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            loginForm:{
                username:'admin',
                password:'123'
            },
            loginFormRules:{
                username:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        resetLoginForm(){
            // console.log(this)
            this.$refs.loginFormRef.resetFields()
        },
        login(){
            // this.$refs.loginFormRef.validate(async (valid)=>{
            //     // console.log(valid)
            //     if(!valid) return;
            //     const {data:res} = await this.$http.post('tag/add', this.loginForm)
            //     if(res.meta.status !== 200) return this.$message.error('账号或密码错误')
            //     this.$message.success('登录成功')
            // })
            this.$message.success('登录成功')
            // window.sessionStorage.setItem('token',res.data.token)
            this.$router.push('/home')
        }
    }
}

</script>
<style lang="less" scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .login_box{
            width: 450px;
            height: 300px;
            background-color: #fff;
            border-radius: 3px;
            position: relative;
            .avatar_box{
                height: 130px;
                width: 130px;
                border: 1px solid #eee;
                border-radius: 50%;
                padding: 10px;
                box-shadow: 0 0 10px #ddd;
                background-color: #fff;
                position: absolute;
                left: 50%;
                transform: translate(-50%,-50%);
                img{
                    height: 100%;
                    border-radius: 50%;
                    background-color: #eee;
                }
            }
            .login_form{
                position: absolute;
                bottom: 10px;
                width: 100%;
                padding: 0 20px;
                box-sizing: border-box;
            }
        }
    }
    .btns{
                display: flex;
                justify-content: center;
            }
</style>