import React from 'react';

const Header = () => {
    return (
        <nav className="flex items-center justify-around max-container py-5">
            <div>
                <img src="/assets/hilink-logo.svg" width='100px' alt="Hilink Logo" />
            </div>
            <ul className="hidden h-full gap-12 lg:flex">
                <li><a href="/">Home</a></li>
                <li><a href="/how-it-works">How Hilink Works</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <div className="lg:flex items-center hidden ">
                <button className="flex items-center bg-black text-white gap-3 rounded-full border" type="button">
                    <img src="/assets/user.svg" width='30px' alt="User Icon" />
                    <span className="font-bold text-16 pr-3 whitespace-nowrap cursor-pointer">Login</span>
                </button>
            </div>

            <img src="/assets/menu.svg" className="inline-block cursor-pointer lg:hidden" alt="Menu Icon" />
        </nav>
    );
}

export default Header;
