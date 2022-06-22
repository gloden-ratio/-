import{ instance,mm} from "../quest";


function getTuaData(url){

    return mm({
        url:url.url,
        method:"get"
    })
};


 function getBoutique(url){
    return instance({
           url:url.url,
            method:url.method
    })
    
        
};

 function getSwiper (url){
    return  instance({
            url:url.url,
        method:url.method
    })
   
};



export { getBoutique,getSwiper,getTuaData}