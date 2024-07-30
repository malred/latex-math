import {Fragment, useState} from 'react'


export const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            {/*<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">*/}
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
                {/*<div className={'text-2xl font-semibold'}>*/}
                <div>
                    <a href="https://github.com/malred">
                        <img className={'rounded-full w-10 h-10'} src="/logo.png" alt="logo malred"/>
                    </a>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-2xl font-semibold'}>
                    <a href="https://github.com/malred">
                        Malred
                    </a>
                </div>
                {/*</div>*/}
                {/*<div className="flex lg:flex-1">*/}
                {/*    <a href="#" className="-m-1.5 p-1.5">*/}
                {/*        <span className="sr-only text-black">Malred</span>*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<div className="flex lg:hidden">*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"*/}
                {/*        onClick={() => setMobileMenuOpen(true)}*/}
                {/*    >*/}
                {/*        <span className="sr-only">Open main menu</span>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </nav>
        </header>
    )
}
