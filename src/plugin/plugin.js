import {
    Swipe, SwipeItem,Tabbar, TabbarItem, NavBar,NumberKeyboard,
    Icon, Search, Form, NoticeBar,PullRefresh,Grid, GridItem,
    Lazyload,
  } from "vant";
  
  let plugins = [
    Swipe, SwipeItem,Tabbar, TabbarItem, NavBar,NumberKeyboard,
    Icon, Search, Form,NoticeBar,PullRefresh,Grid, GridItem,Lazyload,
    
];
 
export default function getapp(App){

    plugins.forEach((items)=>{

        return App.use(items)
    })
 }


