import {
    Swipe, SwipeItem,Tabbar, TabbarItem, NavBar,NumberKeyboard,
    Icon, Search, Form, NoticeBar,PullRefresh,Grid, GridItem,
    Lazyload,Tab,Tabs,Image as VanImage, 
  } from "vant";
  
  let plugins = [
    Swipe, SwipeItem,Tabbar, TabbarItem, NavBar,NumberKeyboard,
    Icon, Search, Form,NoticeBar,PullRefresh,Grid, GridItem,Lazyload,
    Tab,Tabs,VanImage, 
];
 
export default function getapp(App){

    plugins.forEach((items)=>{
       
        return App.use(items,{ Lazyload:true})
    })
 }


