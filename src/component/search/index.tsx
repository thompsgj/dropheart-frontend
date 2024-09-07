import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";

const LIST = [
    {
        name: 'Socks'
    },
    {
        name: 'jeans'
    },
    {
        name: 'Laptop'
    },
    {
        name: 'Used Clothes'
    }
]

type Props = {
    onClose: () => void;
}

function Index({onClose}: Props) {
    return (
        <div className={'search_wrapper'} onClick={onClose}>
            <div className={'search_container'} onClick={(e) => e.stopPropagation()}>
                <form>
                    <div className={'search_component'}>
                        <input type={'text'} placeholder={'Search Item ....'}/>
                        <span><BiSearchAlt2/></span>
                    </div>
                </form>
                <div className={'searched_list'}>
                    {
                        LIST.map((item: { name:string}, index: number) => {
                            return (
                                <li key={index}>{item.name}</li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Index;