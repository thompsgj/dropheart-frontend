import HomeFilter from "@/component/home/homeFilter";
import HomeItems from "@/component/home/homeItems";
import {IoHomeSharp} from "react-icons/io5";
import Filter from '@/component/filter/index'
import React, {useEffect, useState} from "react";
import {useFetchItems} from "@/hooks/useFetchItems";


const MAP: { [name: string]: string } = {
    'Electronics': 'ELECTRONICS',
    'Books': 'BOOKS',
    'Games': 'GAMES',
    "Arts": 'ARTS',
    "Women's Fashion": 'WOMEN_FASHION',
    "Men's Fashion": 'MEN_FASHION',
    'ALL':'ALL',
    'Toiletries':'TOILETRIES'
}


export default function Home() {
    const [openSetting, setOpenSetting] = useState<boolean>(false)
    const [filterDat, setFilterData] = useState([])
    const {data, isLoading} = useFetchItems('GET_ITEMS', `https://dropheart-backend-z8c0.onrender.com/api/items`)
    const [selectedLocation, setSelectedLocation] = useState<string>('ALL');
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [Loading,setLoading] = useState(false)
    const handleCategory = (category: string) => {
        setSelectedCategory(category);
    };
    const handleChange = (name: string) => {
        setSelectedLocation(name);
    };
    useEffect(() => {
        if (selectedCategory && selectedLocation) {
            setLoading(true)
            const filteredData = data?.filter((item:{location_id:string,item_type:string}) =>
                item.item_type === MAP[selectedCategory] && item.location_id === selectedLocation
            );
            setFilterData(filteredData);
            setLoading(false)
        }
        if(selectedCategory === 'ALL' ||  selectedLocation === 'ALL'){
            setLoading(true)
            setFilterData(data)
        }
        setLoading(false)
    }, [selectedCategory, selectedLocation, data]);

    // hydration warning 제거
    const [ready, setReady] = useState<boolean>(false);
    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) {
        return <></>;
    }



    return (
        <div className={'home'}>
            {/*<h1>Filter donated items</h1>*/}
            <p className={'direction'}><IoHomeSharp className={'home_icon'}/> {'> '}Home</p>
            <div className={'inner_container'}>
                <HomeFilter  onOpenSetting={() => setOpenSetting(true)} data={filterDat} loading={isLoading || Loading}/>
                <HomeItems selectedCategory={selectedCategory} selectedLocation={selectedLocation}
                           handleCateg={handleCategory} handleChange={handleChange}/>
            </div>
            {openSetting && <Filter onClose={() => setOpenSetting(false)}/>}
        </div>
    );
}
