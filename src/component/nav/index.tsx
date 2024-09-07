import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {IoIosNotificationsOutline} from "react-icons/io";
import {useRouter} from "next/router";
import {ModalState} from '@/hooks/useModal'
import {useAuthStore} from "@/lib/store";

type Props = {
    onOpen: (st: keyof ModalState) => void;

}

function Index({onOpen}: Props) {
    const router = useRouter();
    const {token} = useAuthStore()

    const userClass = 'green-user'
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
                    <li onClick={() => onOpen('post')}>
                        <span className={'write'}></span>
                        Post
                    </li>
                    <li onClick={() => onOpen('notification')}>
                        <IoIosNotificationsOutline className={'nav_notification'}/>
                    </li>
                    <li>
                        {!token ? <button onClick={() => onOpen('login')}>Login</button> :
                            <p className={userClass}>A</p>}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Index;