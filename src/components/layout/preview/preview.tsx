import React from 'react';
import Image from "next/image";
import Circle from "../../../../public/Vector.png"

export const Preview = () => {
    return (
        <div className="flex h-full">
            <div className="flex flex-col w-8/12 gap-20 h-full text-black p-24 pr-0">
                <div className="flex w-full h-1/12">
                    <button className="relative border-2 rounded-xl p-1.5 bg-green box-shadow-btn">
                        <text className="px-4 text-sm">NEW COLLECTION</text>
                        <Image className="absolute -bottom-2.5 left-3 circle-scale" src={Circle} alt=""/>
                    </button>
                </div>
                <div className="flex flex-col gap-10 w-full h-4/6">
                    <div className="flex flex-col gap-5">
                        <div>
                            <text className="text-7xl">
                                Discover the new <br/> 123* collection
                            </text>
                        </div>
                        <div>
                            <text className="text-xl font-extralight">
                                123* believes that every little bit helps. That’s why this collection was made with strict <br/>
                                material guidelines, including the Circle Vee, which leverages 123* outsole, constructed from <br/>
                                regeneratively grown natural rubber, sourced from farms using agricultural practices that are <br/>
                                designed to promote diversity, enhance water cycles, improve soil health, and sequester <br/>
                                carbon from the atmosphere.
                            </text>
                        </div>
                    </div>
                    <button className="flex items-center justify-between px-4 border-2 rounded-xl p-1.5 bg-brand box-shadow-btn w-52">
                        <text className="p-2">SHOP NOW</text>
                        <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.543447 6.68174C0.543447 6.92177 0.624779 7.12284 0.787437 7.28493C0.949532 7.44759 1.15059 7.52892 1.39063 7.52892L19.3297 7.52892L15.1997 11.6589C15.0303 11.8284 14.9455 12.0297 14.9455 12.263C14.9455 12.4957 15.0303 12.6967 15.1997 12.8662C15.3691 13.0356 15.5668 13.1203 15.7927 13.1203C16.0186 13.1203 16.2163 13.0356 16.3857 12.8662L21.9771 7.27476C22.0619 7.19004 22.122 7.09827 22.1576 6.99943C22.1926 6.90059 22.2101 6.79469 22.2101 6.68174C22.2101 6.56878 22.1926 6.45921 22.1576 6.35303C22.122 6.24742 22.0619 6.15931 21.9771 6.08871L16.3857 0.497312C16.2163 0.327875 16.0186 0.243156 15.7927 0.243156C15.5668 0.243156 15.3691 0.327875 15.1997 0.497312C15.0303 0.666748 14.9455 0.868094 14.9455 1.10135C14.9455 1.33404 15.0303 1.53511 15.1997 1.70454L19.3297 5.83455L1.39063 5.83455C1.15059 5.83455 0.949532 5.9156 0.787437 6.0777C0.624779 6.24036 0.543447 6.4417 0.543447 6.68174Z" fill="black"/>
                        </svg>
                    </button>
                </div>
                <div className="flex w-full gap-10 h-1/6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center bg-market w-10 h-10 box-shadow-btn">
                                <svg width="24" height="24" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0747 0.221832H3.03766C1.71358 0.221832 0.642286 1.30517 0.642286 2.62924L0.630249 21.8885L9.05617 18.2774L17.4821 21.8885V2.62924C17.4821 1.30517 16.3988 0.221832 15.0747 0.221832ZM15.0747 18.2774L9.05617 15.6533L3.03766 18.2774V2.62924H15.0747V18.2774Z" fill="black"/>
                                </svg>
                            </div>
                            <text className="text-5xl">40K+</text>
                        </div>
                        <text className="text-xl font-extralight">
                            Active users using the premium<br/>
                            version of the application worldwide.
                        </text>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center bg-market w-10 h-10 box-shadow-btn">
                                <svg width="28" height="28" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.667 0.813232H7.44479V3.22064H14.667V0.813232ZM9.85219 16.4614H12.2596V9.23916H9.85219V16.4614ZM19.5179 8.5049L21.2272 6.79564C20.7096 6.18175 20.1439 5.60397 19.53 5.09842L17.8207 6.80768C15.9036 5.26492 13.5167 4.42397 11.0559 4.42434C5.07349 4.42434 0.222565 9.27527 0.222565 15.2577C0.222565 21.2401 5.06145 26.091 11.0559 26.091C13.0953 26.0921 15.0936 25.5171 16.8206 24.4323C18.5476 23.3474 19.933 21.7968 20.8173 19.959C21.7015 18.1213 22.0487 16.0711 21.8189 14.0446C21.589 12.0182 20.7914 10.0979 19.5179 8.5049ZM11.0559 23.6836C6.39756 23.6836 2.62997 19.916 2.62997 15.2577C2.62997 10.5993 6.39756 6.83175 11.0559 6.83175C15.7142 6.83175 19.4818 10.5993 19.4818 15.2577C19.4818 19.916 15.7142 23.6836 11.0559 23.6836Z" fill="black"/>
                                </svg>
                            </div>
                            <text className="text-5xl">80K+</text>
                        </div>
                        <text className="text-xl font-extralight">
                            Additional features to improve<br/>
                            travel experience - better solutions.
                        </text>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full w-4/12 text-black bg-market">
                <div className="h-2/3 bg-brand"></div>
                <div className="h-1/3">
                    {/*TODO WORK SHOULD BE DONE*/}
                </div>
            </div>
        </div>
    );
};
