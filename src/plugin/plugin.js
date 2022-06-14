import {
    Swipe, SwipeItem,Tabbar, TabbarItem, NavBar,NumberKeyboard,
    Icon, Search, Form, NoticeBar,PullRefresh,
  } from "vant";
  
  let plugins = [
    Swipe, SwipeItem,Tabbar, TabbarItem, NavBar,NumberKeyboard,
    Icon, Search, Form,NoticeBar,PullRefresh,
];
 
export default function getapp(App){

    plugins.forEach((items)=>{

        return App.use(items)
    })
 }


