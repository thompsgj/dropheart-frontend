import React from 'react';
import {FaLocationDot} from "react-icons/fa6";
import {MdOutlineEventAvailable} from "react-icons/md";
import {useRouter} from "next/router";
import {DataItem} from '@/hooks/useFetchItems'
import Loading from "@/component/loading";

type Props = {
    onOpenSetting: () => void;
    data: DataItem[];
    loading: boolean
}

function HomeFilter({onOpenSetting, data, loading}: Props) {
    const router = useRouter()
    return (
        <div className={'home_items_container'}>
            <h1> Donated Items List ({data?.length ?? 0})</h1>
            <div className={'mobile_filter'}>
                <div className={'mob_filter_left'}><span onClick={onOpenSetting}></span><span>Filter(2)</span></div>
                <div className={'selected_filters'}>
                    <span>Seoul, South Korea</span>
                    <span>Socks</span>
                </div>
            </div>
            <div className={'Donated_items_container'}>
                {loading ? <Loading/> :
                    data && data.map((item, index: number) => {
                        return (
                            <div className={'items_card'} key={index}
                                 onClick={() => router.push(`/item/@${item.item_name}?query=${item.item_id}`)}>
                                <div className={'items_img'}>
                                    <img src={item.image_path} alt={item.item_name}/>
                                </div>
                                <div className={'items_desc'}>
                                    <span className={'items_status'}><MdOutlineEventAvailable
                                        className={'available'}/>{item.status}</span>
                                    <span>{item.item_name}</span>
                                    <div className={'address'}><span><FaLocationDot/></span>{item.location_id}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomeFilter;