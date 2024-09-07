// components/Index.tsx
import React, {ReactNode} from 'react';
import {useModalStore} from '@/lib/store';
import Nav from "@/component/nav";
import MobileNav from "@/component/nav/mobileNav";
import Search from "@/component/search";
import LoginModal from "@/component/login";
import SignUpModal from "@/component/login/signUp";
import PostModal from "@/component/post";
import NotificationModal from "@/component/notification";

function Index({children}: { children: ReactNode }) {
    const {login, signUp, post, notification, search, mobileNav, openModal, closeModal} = useModalStore();

    return (
        <div className={'layout'}>
            <Nav onOpen={openModal}/>
            <main>{children}</main>
            <MobileNav show={mobileNav} onOpen={() => openModal('mobileNav')} openModal={openModal}/>

            {search && <Search onClose={() => closeModal('search')}/>}

            {login && (
                <LoginModal onClose={() => closeModal('login')} onOpen={() => openModal('signUp')}/>
            )}

            {signUp && (
                <SignUpModal onClose={() => closeModal('signUp')} onOpen={() => openModal('login')}/>
            )}

            {post && (
                <PostModal onClose={() => closeModal('post')}/>
            )}

            {notification && (
                <NotificationModal notifications={[]} onClose={() => closeModal('notification')}/>
            )}
        </div>
    );
}

export default Index;

