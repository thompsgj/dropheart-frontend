import React from 'react';
import RadioButton from "@/component/radioBtn";
import {IoHomeSharp} from "react-icons/io5";

export const LOCATIONS = [
    {
        name: 'Seoul',
        checked: true
    },
    {
        name: 'Busan',
        checked: false
    },
    {
        name: 'Jeonju',
        checked: false
    },
    {
        name: 'Dejon',
        checked: false
    },
    {
        name: 'New York',
        checked: false
    },
]

export const ITEMS_CATEG = ['Electronics', 'Furniture', 'Socks', "Men's Fashion", "Women's Fashion", 'Games&Hobbies']

function HomeItems() {
    return (
        <div className={'home_filter_container'}>
            <h1>Filter items</h1>
            <div className={'location_filter'}>
                <h3>By Location</h3>
                <div className={'location_type'}>
                    {
                        LOCATIONS.map((item: { checked: boolean, name: string }, index: number) => (
                            <div className={'location_names'} key={index}>
                                <div>
                                    <RadioButton
                                        checked={item.checked}
                                        value={item.name}
                                        label={item.name}
                                        onChange={() => {
                                        }}
                                        name={item.name}
                                        id={item.name}
                                    />
                                </div>
                                {/*<span>{item.name}</span>*/}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'Category_filter'}>
                <h3>By Category</h3>
                <div className={'category_type'}>
                    {
                        ITEMS_CATEG.map((item: string, index: number) => (
                            <div className={'filter_cat_names'} key={index}>
                                <div className={'cat_check'}>
                                    <RadioButton checked={item === 'Furniture'}
                                                 id={item}
                                                 name={item}
                                                 label={item}
                                                 onChange={() => {
                                                 }}
                                                 value={'test'}/>
                                </div>
                                {/*<span>{item}</span>*/}</div>))
                    }
                </div>
            </div>
        </div>
    );
}

export default HomeItems;