import React, {useEffect, useState} from 'react';
import Header from '@/component/detail/index'
import {useRouter} from "next/router";
import RelatedItems from '@/component/detail/relatedItems'
import {IoHomeSharp} from "react-icons/io5";
import {useDetailData} from '@/hooks/useDetailData'
import Loading from "@/component/loading";
import {useFetchItems} from "@/hooks/useFetchItems";

function DetailPage() {
    const router = useRouter()
    const itemId = router.query.query;
    const {
        data,
        isLoading
    } = useDetailData([(itemId as string), 'Detail_Data'], `https://dropheart-backend-z8c0.onrender.com/api/retrieve/${itemId}/item`)
    const {
        data: related,
        isLoading: loading
    } = useFetchItems('GET_ITEMS', ' https://dropheart-backend-z8c0.onrender.com/api/items')

    // hydration warning 제거
    const [ready, setReady] = useState<boolean>(false);
    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) {
        return <></>;
    }
    return (
        <div className={'detail_page'}>
            <p className={'direction'}><IoHomeSharp className={'home_icon'}/> {'> '}<span
                onClick={() => router.push('/')}>Home</span> {' > '}{data && data?.item_name}</p>
            {isLoading || loading ? <Loading/> : <><Header data={data}/>
                <RelatedItems data={related}/></>}
        </div>
    )
}

export default DetailPage;