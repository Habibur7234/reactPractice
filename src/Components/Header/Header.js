import React from 'react';

const Header = () => {
    const navItems = ["Home","About","Portfolio","Team","Services","Dropdown","Contact","Get started"]
    return (
        <div className={'grid grid-cols-12 gap-0 items-center py-4'}>
            <div className="col-span-4">
                <h3 className={'text-2xl font-black'}>Arsha</h3>
            </div>
            <div className="col-span-8">
                <div>
                    <ul className={'grid grid-cols-8 gap-2'}>
                        {
                            navItems?.map((item,i)=><li key={i}>
                                <span className={`${i===(navItems?.length-1) && 'border-2 border-blue-400 rounded-full p-1'}`}>{item}</span>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;