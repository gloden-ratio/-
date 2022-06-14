

function remSize(){
//获取设备的宽度
var facilityWidth = document.documentElement.clientWidth||window.innerWidth
    if(facilityWidth>=750){
        facilityWidth=750;
    }
    if(facilityWidth<=320){
        facilityWidth=320;

    }
    // 基数设置为 1rem=100px;
    document.documentElement.style.fontSize=(facilityWidth/7.5)+"px";
    
    //设置body 字体；
    document.querySelector('body').style.fontSize=0.3+"rem"

}
window.onload=function(){

    remSize()
}
//窗口变化 时调用
window.onresize= function(){
remSize();


}