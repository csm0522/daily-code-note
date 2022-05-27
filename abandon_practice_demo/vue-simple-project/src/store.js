/**
 * Created by Chan on 16/8/23.
 * 用于储存和获取数据。
 */
//es6语法,localstorage的key值
const STORAGE_KEY = "thisvuejs" ;
export default{
  // 取出数据 es6
  get(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||"[]");
  },
  // 入库
  save:function(item){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(item));
  }

}



