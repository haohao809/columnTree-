import LabelTree from './LabelTree.vue'
console.log(LabelTree);
const tree = {
	install : function(Vue) {
		Vue.component('LabelTree',LabelTree)
	}	
}
//global 情况下 自动安装
	if(typeof window !== 'undefined' && window.Vue) {
		window.Vue.use(tree)
	}
export default tree