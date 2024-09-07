import React, {ReactNode, useState} from 'react';
import Nav from "@/component/nav";
import MobileNav from "@/component/nav/mobileNav";

function Index({children}: { children: ReactNode }) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={'layout'}>
            <Nav/>
            <main>{children}</main>
            <MobileNav show={open} onOpen={() => setOpen(!open)}/>
        </div>
    );
}

export default Index;