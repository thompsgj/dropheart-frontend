import React, {useState} from 'react';
import RadioButton from "@/component/radioBtn";

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
    const [selectedLocation, setSelectedLocation] = useState<string | null>('Seoul');
    const [selectedCategory, setSelectedCategory] = useState<string | null>('Socks');

    const handleCategory = (category: string) => {
        setSelectedCategory(category);
    };
    const handleChange = (name: string) => {
        setSelectedLocation(name);
    };
    return (
        <div className={'home_filter_container'}>
            <h1>Filter items</h1>
            <div className={'location_filter'}>
                <h3>By Location</h3>
                <div className={'location_type'}>
                    {LOCATIONS.map((item, index) => (
                        <div className="location_names" key={index}>
                            <RadioButton
                                checked={item.name === selectedLocation}
                                value={item.name}
                                label={item.name}
                                onChange={() => handleChange(item.name)}
                                name="location" // Ensure all radio buttons share the same name
                                id={item.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={'Category_filter'}>
                <h3>By Category</h3>
                <div className={'category_type'}>
                    {ITEMS_CATEG.map((item, index) => (
                        <div className="filter_cat_names" key={index}>
                            <div className="cat_check">
                                <RadioButton
                                    checked={item === selectedCategory}
                                    id={item}
                                    name="category"
                                    label={item}
                                    onChange={() => handleCategory(item)}
                                    value={item}
                                />
                            </div>
                            {/* Uncomment the line below to display category name */}
                            {/*<span>{item}</span>*/}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeItems;