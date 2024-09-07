import React from 'react';
import {MdOutlineEventAvailable} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";
import {useRouter} from "next/router";
import {DataItem} from "@/hooks/useFetchItems";

type Props = {
    data: DataItem[];
}

function RelatedItems({data}: Props) {
    const router = useRouter();
    return (
        <div className={'related_main'}>
            <h1>Related items</h1>
            <div className={'related_item_container'}>
                {
                    data.slice(0, 8).map((item, index) => {
                        return (
                            <div className={'related_items_cards'} key={index}
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

export default RelatedItems;