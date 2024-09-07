import React from 'react';
import Header from '@/component/detail/index'
import {useRouter} from "next/router";
import {DATA} from "@/data";
import RelatedItems from '@/component/detail/relatedItems'
import {IoHomeSharp} from "react-icons/io5";

function DetailPage() {
    const router = useRouter()
    const itemId = router.query.query;
    const filter = DATA.find((item: { id: number }) => item.id === Number(itemId));
    console.log(filter, 'filter')
    return (
        <div className={'detail_page'}>
            <p className={'direction'}><IoHomeSharp className={'home_icon'}/> {'> '}<span
                onClick={() => router.push('/')}>Home</span> {' > '}Detail</p>
            <Header data={filter}/>
            <RelatedItems/>
        </div>
    )
}

export default DetailPage;