import instance from "../quest";


export default function getSwiper(){

    return instance({
        url:'/v2/list',
        method:"GET",
    })
}


