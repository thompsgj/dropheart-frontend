import React from 'react';
import {DATA} from "@/data";
import {FaLocationDot} from "react-icons/fa6";
import {MdOutlineEventAvailable} from "react-icons/md";
import {useRouter} from "next/router";

type Props = {
    onOpenSetting: () => void
}

function HomeFilter({onOpenSetting}: Props) {
    const router = useRouter()
    return (
        <div className={'home_items_container'}>

            <h1> Donated Items List (21)</h1>
            <div className={'mobile_filter'}>
                <div className={'mob_filter_left'}><span onClick={onOpenSetting}></span><span>Filter(2)</span></div>
                <div className={'selected_filters'}>
                    <span>Seoul, South Korea</span>
                    <span>Socks</span>
                </div>
            </div>
            <div className={'Donated_items_container'}>
                {
                    DATA.map((item, index: number) => {
                        return (
                            <div className={'items_card'} key={index} onClick={()=>router.push(`/item/@${item.name}?query=${item.id}`)}>
                                <div className={'items_img'}>
                                    <img src={item.img} alt={item.name}/>
                                </div>
                                <div className={'items_desc'}>
                                    <span className={'items_status'}><MdOutlineEventAvailable
                                        className={'available'}/>{item.status}</span>
                                    <span>{item.name}</span>
                                    <div className={'address'}><span><FaLocationDot/></span>{item.location}</div>
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