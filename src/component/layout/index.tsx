import React, {ReactNode, useState} from 'react';
import Nav from "@/component/nav";
import MobileNav from "@/component/nav/mobileNav";
import Search from "@/component/search";

function Index({children}: { children: ReactNode }) {
    const [open, setOpen] = useState<boolean>(false)
    const [showSearch, setShowSearch] = useState<boolean>(true)

    return (
        <div className={'layout'}>
            <Nav onOpen={() => setShowSearch(true)} />
            <main>{children}</main>
            <MobileNav show={open} onOpen={() => setOpen(!open)}/>
            {showSearch && <Search onClose={()=>setShowSearch(false)} />}
        </div>
    );
}

export default Index;