import React from 'react';
import {FaLocationDot} from "react-icons/fa6";

type Props = {
    data: {
        id: number;
        img: string;
        name: string;
        description: string;
        status: string;
        location: string;
        title: string;
        logo: string;
    } | {
        id: number;
        img: string;
        name: string;
        description: string;
        status: string;
        location: string;
        title?: undefined;
        logo?: undefined;
    } | undefined
}

function Index({data}: Props) {

    return (
        <div className={'detail_header'}>
            <div className={'detail_left'}>
                <div className={'detail_user'}>
                    <div className={'user_img'}>
                        <img src={data && data.logo}/>
                    </div>
                    <p><span>{data && data.title}</span> <span> 9 hours ago</span>
                    </p>
                </div>
                <div className={'item_detail'}>
                    <div className={'detail_status'}>
                        <button>Available</button>
                    </div>
                    <div className={'detail_desc'}>
                        <p>{data && data.name}</p>
                        <span>{data && data.description}</span>
                        <p className={'location'}><span><FaLocationDot/></span>경기 성남시 분당구 동판교로 257</p>
                        <button>Picked</button>
                    </div>
                </div>
            </div>
            <div className={'detail_right'}>
                <div className={'product_img'}>
                    <img src={data && data.img}/>
                </div>
            </div>
        </div>
    );
}

export default Index;