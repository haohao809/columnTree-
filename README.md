main.js入口文件引入
import LabelTree from 'plugin'
Vue.use(LabelTree);

组件中使用

<LabelTree :data="data"></LabelTree>

data请求接口返回的数据

样式类似
this.data = [
				{
					id: 100,
					name: "STB",
					children: [
						{
							id:344047,
							name: "电影",
							children:[{
							 id: 34050,
								name: "题材",
							}

							]
						},{
							id: 600,
							name: "电视剧",
							children:[{
								id: 601,
								name: "热播"	,	
							}				
							]
						}
					
					]
				},
				{
					id: 831,
					name: "PC端",
					children:[
						{
							id: 2701,
							name: "电视剧",
							children:[{
								id: 2702,
								name: "同步追剧",
							}
							]
						},{
							id: 2759,
							name: "综艺",
							children:[{
								id: 71915,
								name: "脱口秀"		
							}					
							]
						}
					
					]
					
				},
				{
					id: 3508,
					name: "移动端",
					children:[
						{
							id: 3070,
							name: "电影",
							children:[{
								id: 3071,
								name: "热播",
							}
							]
						},{
							id: 3202,
							name: "体育",
							children:[{
								id: 3203,
								name: "最新赛事"		
							}					
							]
						}
					
					]
					
				}
			
			];


# plugin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
