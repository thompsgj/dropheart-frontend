import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {IoIosNotificationsOutline} from "react-icons/io";
import {useRouter} from "next/router";

type Props = {
    onOpen: () => void;
}

function Index({onOpen}: Props) {
    const router = useRouter();
    return (
        <div className={'nav_main'}>
            <div className={'nav_container'}>
                <div className={'nav_left'}>
                    <div className={'nav_logo'}><span onClick={() => router.push('/')}>Drop</span></div>
                    <form>
                        <div className={'nav_search'} onClick={onOpen}>
                            <input type={'text'} placeholder={'Search...'}/>
                            <BiSearchAlt2 className={'search_icon'}/>
                        </div>
                    </form>
                </div>
                <ul className={'nav_right'}>
                    <li>
                        <span className={'write'}></span>
                        Post
                    </li>
                    <li>
                        <IoIosNotificationsOutline className={'nav_notification'}/>
                    </li>
                    <li>
                        <button>Login</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Index;