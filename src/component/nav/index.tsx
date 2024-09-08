import React, {useEffect, useState} from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {IoIosNotificationsOutline} from "react-icons/io";
import {useRouter} from "next/router";
import {ModalState} from '@/hooks/useModal'
import {useAuthStore, useModalStore} from "@/lib/store";

type Props = {
    onOpen: (st: keyof ModalState) => void;

}

function Index({onOpen}: Props) {
    const router = useRouter();
    const {token} = useAuthStore()
    const {openModal} = useModalStore()

    const userClass = 'green-user'
    // hydration warning 제거
    const [ready, setReady] = useState<boolean>(false);
    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) {
        return <></>;
    }
    return (
        <div className={'nav_main'} style={{position: 'sticky'}}>
            <div className={'nav_container'}>
                <div className={'nav_left'}>
                    <div className={'nav_logo'} onClick={() => router.push('/')}><span><img
                        src={'/assets/logo.png'}/></span><span>Drop</span></div>
                    <form>
                        <div className={'nav_search'} onClick={() => onOpen('search')}>
                            <input type={'text'} placeholder={'Search...'} readOnly={true}/>
                            <BiSearchAlt2 className={'search_icon'}/>
                        </div>
                    </form>
                </div>
                <ul className={'nav_right'}>
                    <li onClick={() => {
                        if (token) {
                            onOpen('post')
                        } else {
                            openModal('login')
                        }
                    }}>
                        <span className={'write'}></span>
                        Post
                    </li>
                    {token && <li onClick={() => onOpen('notification')}>
                        <IoIosNotificationsOutline className={'nav_notification'}/>
                    </li>}
                    <li className={'login_li'}>
                        {!token ? <button onClick={() => onOpen('login')}>Login</button> :
                            <p className={userClass}>A</p>}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Index;