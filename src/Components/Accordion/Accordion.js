import React, {useState} from 'react';
import {TfiAngleDown, TfiAngleUp} from "react-icons/tfi";

const Accordion = (props) => {
    const [toggle,setToggle] = useState(false)
    const {title,text} = props.item
    const {serial} = props.serial

    return (
        <div className={'bg-white p-6 rounded shadow-sm mb-4'}>
            <div onClick={()=>setToggle(!toggle)} className={'flex items-center justify-between cursor-pointer'}>
                <h3 className={'text-sky-400'}><span className={'mr-2'}>0{(+serial)+1}</span>{title}</h3>
                {
                    toggle ===true ? <TfiAngleUp/> : <TfiAngleDown/>
                }
            </div>
            {
                toggle && <div>
                    <p>{text}</p>
                </div>
            }
        </div>
    );
};

export default Accordion;