import React from 'react';
import {FaLocationDot} from "react-icons/fa6";
import {DataItem} from "@/hooks/useFetchItems";

type Props = {
    data: DataItem
}

function Index({data}: Props) {

    return (
        <div className={'detail_header'}>
            <div className={'detail_right'}>
                <div className={'product_img'}>
                    <img src={data && data.image_path}/>
                </div>
            </div>
            <div className={'detail_left'}>
                <div className={'detail_inner'}>
                    <div className={'detail_user'}>
                        <div className={'user_img'}>
                            <img src={data && data.image_path}/>
                        </div>
                        <p><span>Alex Muller</span>
                            <span> { data && new Date(data?.list_time)?.toISOString()?.substring(0, 10)?.split('-')?.join('.')}</span>
                        </p>
                    </div>
                    <div className={'detail_status'}>
                        <button>{data?.status}</button>
                    </div>
                </div>
                <div className={'item_detail'}>

                    <div className={'detail_desc'}>
                        <p>{data && data.item_name}</p>
                        <span>{data && data.item_description}</span>
                        <p className={'location'}><span><FaLocationDot/></span>{data?.location_id}</p>
                        <button>Picked</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;