<template>
    <el-card class="box-card">
        <el-row :gutter="20">
            <el-col :span="10">
                <el-input placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary">添加菜品</el-button>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
export default{
    data(){
        return{
            queryInfo:{
                pageNum: 1,
                pageSize: 30,
                // categoryId:'',
                // name:''
            },
            orderlist:[],
            total:0
        }
    },
    created(){
        this.getList()
    },
    methods:{
        async getList(){
            const {data:res} = await this.$http.get('/food/list',{
                params:this.queryInfo
                })
            console.log(res)
            if(res.meta.status !== 200) return this.$message.error('获取失败')
            this.orderlist = res.data.list
            this.total = res.data.total
        }
    }
}
</script>