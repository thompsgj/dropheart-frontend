import React from 'react';
import Header from '@/component/detail/index'
import {useRouter} from "next/router";
import {DATA} from "@/data";

function DetailPage() {
    const router = useRouter()
    const itemId = router.query.query;
    const filter = DATA.find((item:any) =>item.id === Number(itemId));
    console.log(filter,'filter')
    return (
        <div className={'detail_page'}>
            <Header data={filter} />
        </div>
    )
}

export default DetailPage;