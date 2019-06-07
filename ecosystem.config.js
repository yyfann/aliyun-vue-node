module.exports = {
  apps : [{
    // 项目名称
    name: 'vue-node',
    // 项目入口文件
    script: 'src/index.js',
    // 项目需要的环境变量
    env: {
      // 允许在命令行传入环境变量
      COMMON_VARIABLE: "true" 
    },
    // pm2 deploy ecosystem.json production setup 时传入production参数, 
    // 就相当于将 env_production里面的node参数传入命令行, 可以看做参数的一层封装
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user: 'root', // 服务器用户名
      host: '39.96.181.105',  // 服务器ip
      repo: 'git@github.com:yyfann/aliyun-vue-node.git', // github仓库地址
      ref  : 'origin/master', // github仓库分支
      path : '/root/www/production', // 存放在服务器的项目目录
      // 部署项目之后执行的操作
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};