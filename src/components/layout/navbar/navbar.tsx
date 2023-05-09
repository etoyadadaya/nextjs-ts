import React from 'react';

export const Navbar = () => {
    return (
        <div className="flex font-athiti justify-between border-2 border-black border-l-0 border-r-0">
            <div className="flex border-2">
                <button className="text-black p-6 text-3xl hover:underline">HOME</button>
                <button className="text-black px-6 text-3xl hover:underline">WOMEN</button>
                <button className="text-black px-6 text-3xl hover:underline">MEN</button>
                <button className="text-black px-6 text-3xl hover:underline">BLOG</button>
                <button className="text-black px-6 text-3xl hover:underline">FAQ</button>
            </div>
            <div className="flex">
                <button className="text-black px-6 text-3xl border-l-2 hover:opacity-90">SIGN-UP</button>
                <button className="text-black px-6 text-3xl border-l-2 bg-green hover:opacity-90">LOGIN</button>
                <button className="text-black px-16 text-3xl border-l-2 bg-brand hover:opacity-90">CART</button>
            </div>
        </div>
    );
};
