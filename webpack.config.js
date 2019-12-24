const path=require('path')
module.exports={
    entry:"./src/app.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    watch:true,
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    }
}