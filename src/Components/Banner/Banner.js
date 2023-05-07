import React from 'react';
import {BsPlayCircle} from "react-icons/bs";

const Banner = () => {
    return (
        <div className={'grid grid-cols-12 items-center py-8'}>
            <div className="col-span-6">
                <div>
                    <h1 className={'text-5xl font-bold'}>Better Solutions For Your Business</h1>
                    <p className={'text-2xl my-8'}>We are team of talented designers making websites with Bootstrap</p>
                    <div className={'flex items-center'}>
                        <button className={'bg-sky-500 rounded-full px-4 py-2 text-white shadow-sm mr-6'}>Get started</button>
                        <button className={'flex items-center'}><BsPlayCircle className={'mr-2'} size={30}/>Get started</button>
                    </div>
                </div>
            </div>
            <div className="col-span-6">
                <div>
                    <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt="" className="w-full"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;