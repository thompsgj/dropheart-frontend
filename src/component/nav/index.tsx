import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {IoIosNotificationsOutline} from "react-icons/io";


function Index() {
    return (
        <div className={'nav_main'}>
            <div className={'nav_container'}>
                <div className={'nav_left'}>
                    <div className={'nav_logo'}><span>Drop</span></div>
                    <form>
                        <div className={'nav_search'}>
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