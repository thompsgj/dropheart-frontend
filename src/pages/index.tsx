import HomeFilter from "@/component/home/homeFilter";
import HomeItems from "@/component/home/homeItems";
import {IoHomeSharp} from "react-icons/io5";
import Filter from '@/component/filter/index'
import React, {useState} from "react";
import {useFetchItems} from "@/hooks/useFetchItems";

export default function Home() {
    const [openSetting,setOpenSetting] = useState<boolean>(false)
    const {data,isLoading} = useFetchItems('GET_ITEMS',' https://dropheart-backend-z8c0.onrender.com/api/items')
    return (
        <div className={'home'}>
            {/*<h1>Filter donated items</h1>*/}
            <p className={'direction'}><IoHomeSharp className={'home_icon'}/> {'> '}Home</p>
            <div className={'inner_container'}>
                <HomeFilter onOpenSetting={()=>setOpenSetting(true)} data={data} loading={isLoading}/>
                <HomeItems/>
            </div>
            {openSetting && <Filter onClose={()=>setOpenSetting(false)} />}
        </div>
    );
}
