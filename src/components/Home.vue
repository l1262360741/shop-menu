<template>
    <el-container class="container">
        <el-header>
            <div>
                <img src="../assets/zishu.png" alt="">
                <span>点餐后台管理系统</span>
            </div>
            <el-button @click="logout" type="info">退出</el-button>
        </el-header>
        <el-container>
            <el-aside width="isCollapse ? '64px' : '200px'" class="aside_container">
                <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition=false router>
                    <div class="toggle-button" @click="toggleList">|||</div>
                    <el-menu-item index="/list">
                        <i class="el-icon-menu"></i>
                        <span slot="title">菜品列表</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">订单管理</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">数据统计</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="main_container">
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default{
        data(){
            return{
                isCollapse: false
            }
        },
        methods:{
            logout(){
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
            toggleList(){
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style lang="less" scoped> 
    .container{
        height: 100%;
        .el-header{
            background-color: #323744;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            > div{
                display: flex;
                align-items: center;
                color: #fff;
                img{
                    width: 50px;
                }
                span{
                    padding-left: 10px;
                }
            }
        }
        .aside_container{
            background-color: #323744;
        }
        .el-footer{
            background-color: #323744;

        }
        .toggle-button{
            display: flex;
            justify-content: center;
            cursor:pointer
        }
        .el-menu-item{
            padding: 0 50px !important;
        }
    }
</style>