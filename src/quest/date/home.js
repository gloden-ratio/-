import instance from "../quest";



 function getBoutique(url){
    return instance({
           url:url.url,
            method:url.method
    })
    
        
}

 function getSwiper (url){
    return  instance({
            url:url.url,
        method:url.method
    })
   
};



export { getBoutique,getSwiper}