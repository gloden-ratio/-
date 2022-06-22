import {
  Skeleton,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  NavBar,
  NumberKeyboard,
  Icon,
  Search,
  Form,
  NoticeBar,
  PullRefresh,
  Grid,
  GridItem,
  Lazyload,
  Tab,
  Tabs,
  Image as VanImage,
  Sidebar,
  SidebarItem,
  List,
  Divider,
  Field,
  CellGroup,
} from "vant";

let plugins = [
  Swipe,
  Field,
  CellGroup,
  Skeleton,
  Divider,
  List,
  SwipeItem,
  Tabbar,
  TabbarItem,
  NavBar,
  NumberKeyboard,
  Icon,
  Search,
  Form,
  NoticeBar,
  PullRefresh,
  Grid,
  GridItem,
  Lazyload,
  Tab,
  Tabs,
  VanImage,
  Sidebar,
  SidebarItem,
];
 
export default function getapp(App){

    plugins.forEach((items)=>{
       
        return App.use(items,{ Lazyload:true})
    })
 }


