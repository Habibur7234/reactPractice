import React from 'react';

const IndivisualSkill = (props) => {
    const {name,percent} = props.singleSkill
    return (
        <div className={'mb-4'}>
            <div className={'flex items-center justify-between'}>
                <span>{name}</span>
                <span>{percent}%</span>
            </div>
            <div className={'w-full bg-slate-100'}>
                <div style={{width:`${percent}%`}} className={'h-3 bg-sky-600 rounded'}></div>
            </div>
        </div>
    );
};

export default IndivisualSkill;