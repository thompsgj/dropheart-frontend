import React from 'react';
import {FaLocationDot} from "react-icons/fa6";
import {DataItem} from "@/hooks/useFetchItems";
import {useAuthStore, useModalStore} from "@/lib/store";
import {useItemUpdate} from '@/hooks/useItemUpdate'
import Loading from "@/component/loading";

type Props = {
    data: DataItem
}

function Index({data}: Props) {
    const {token} = useAuthStore()
    const {openModal} = useModalStore()
    const {mutate: updateItem, isLoading} = useItemUpdate()

    if (isLoading) return <div className={'loading_wrapper'}><Loading/></div>
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
                            <span> {data && new Date(data?.list_time)?.toISOString()?.substring(0, 10)?.split('-')?.join('.')}</span>
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
                        {token ? <p className={'location'}><span><FaLocationDot/></span>{data?.location_id}</p> :
                            <p className={'no-reg'}>Please log in first to get the address.
                            </p>}
                        <button onClick={() => {
                            if (!token) {
                                openModal('login')
                            } else {
                                updateItem({
                                    url: `https://dropheart-backend-z8c0.onrender.com/api/delete/${data?.item_id}/item`,
                                    method: 'DELETE'
                                })
                            }
                        }}>Picked
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;