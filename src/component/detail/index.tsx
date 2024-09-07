import React from 'react';

type Props = {
    data: any
}

function Index({data}: Props) {

    return (
        <div className={'detail_header'}>
            <div className={'detail_left'}>
                <div className={'detail_user'}>
                    <div className={'user_img'}>
                        <img src={data.logo}/>
                    </div>
                    <p>{data.title}</p>
                </div>
                <div className={'item_detail'}>
                    <div className={'detail_status'}>
                        <button>Available</button>
                        <p>Posted 2024.12.01</p>
                    </div>
                    <div className={'detail_desc'}>
                        <p>{data.name}</p>
                        <span>{data.description}</span>
                        <button>Picked</button>
                    </div>
                </div>
            </div>
            <div className={'detail_right'}>
                <div className={'product_img'}>
                    <img src={data.img}/>
                </div>
            </div>
        </div>
    );
}

export default Index;