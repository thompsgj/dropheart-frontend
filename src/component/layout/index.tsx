// pages/index.tsx
import React, { ReactNode } from 'react';
import Nav from '@/component/nav';
import MobileNav from '@/component/nav/mobileNav';
import Search from '@/component/search';
import LoginModal from '@/component/login';
import SignUpModal from '@/component/login/signUp';
import PostModal from '@/component/post';
import NotificationModal from '@/component/notification';
import {useModal} from '@/hooks/useModal'
function Index({ children }: { children: ReactNode }) {
    const { state, openModal, closeModal, toggleModal } =useModal()

    return (
        <div className="layout">
            <Nav onOpen={openModal} />
            <main>{children}</main>
            <MobileNav show={state.mobileNav} onOpen={() => toggleModal('mobileNav')} />
            {state.search && <Search onClose={() => closeModal('search')} />}
            {state.login && (
                <LoginModal
                    onClose={() => closeModal('login')}
                    onOpen={() => openModal('signUp')}
                />
            )}
            {state.signUp && <SignUpModal onClose={() => closeModal('signUp')} onOpen={() => openModal('login')} />}
            {state.post && <PostModal onClose={() => closeModal('post')} />}
            {state.notification && <NotificationModal notifications={[]} onClose={() => closeModal('notification')} />}
        </div>
    );
}

export default Index;
