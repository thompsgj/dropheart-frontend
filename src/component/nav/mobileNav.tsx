import React from 'react';
import {IoAdd} from "react-icons/io5";
import {BiSearchAlt2} from "react-icons/bi";
import {ModalState} from "@/hooks/useModal";

type Props = {
    show: boolean;
    onOpen: () => void;
    openModal: (st: keyof ModalState) => void;
};

function MobileNav({show, onOpen, openModal}: Props) {
    return (
        <div className={`mobile_nav`}>
            <div className={`mobile_nav_con ${show ? "show" : "hide"}`}>
                <span className={'write'} onClick={() => {
                    openModal('post')
                    onOpen()
                }}></span>
                <span onClick={() => {
                    openModal('search')
                    onOpen()
                }}><BiSearchAlt2/></span>
            </div>
            <span className={'ioAdd'} onClick={onOpen}><IoAdd/></span>
        </div>
    );
}

export default MobileNav;

