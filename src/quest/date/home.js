import instance from "../quest";


export default function getSwiper(url){
   
    return instance({
        url:url.url,
        method:url.method
    })
   
}


