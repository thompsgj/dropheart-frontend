import React from 'react';
import RadioButton from "@/component/radioBtn";
import {ITEMS_CATEG, LOCATIONS} from "@/component/home/homeItems";

type Props = {
    onClose: () => void;
}

function Index({onClose}: Props) {
    return (
        <div className={'filter_setting'}>
            <div className={'setting_wrapper'}>
                <h1>Filter items</h1>
                <div className={'setting_location'}>
                    <h3>By Location</h3>
                    <div className={'setting_location_type'}>
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
                <div className={'setting_category_filter'}>
                    <h3>By Category</h3>
                    <div className={'setting_category_type'}>
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
                                </div>))
                        }
                    </div>
                </div>

            </div>
            <div className={'filter_btn'}>
                <button onClick={onClose}>cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}

export default Index;