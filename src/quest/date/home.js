import instance from "../quest";


export default function getSwiper(){

    return instance({
        url:'/swipe',
        method:"GET",
    })
}


