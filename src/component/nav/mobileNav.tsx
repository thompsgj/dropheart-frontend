import React from 'react';
import { IoAdd } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";

type Props = {
    show: boolean;
    onOpen: () => void;
};

function MobileNav({ show, onOpen }: Props) {
    return (
        <div className={`mobile_nav`}>
            <div className={`mobile_nav_con ${show ? "show" : "hide"}`}>
                <span className={'write'}></span>
                <span><BiSearchAlt2 /></span>
            </div>
            <span className={'ioAdd'} onClick={onOpen}><IoAdd /></span>
        </div>
    );
}

export default MobileNav;

