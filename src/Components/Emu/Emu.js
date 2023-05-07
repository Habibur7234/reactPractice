import React from 'react';
import Accordion from "../Accordion/Accordion";

const Emu = () => {
    const accordions = [
        {
            title:'Non consectetur a erat nam at lectus urna duis?',
            text:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
        },
        {
            title:'Non consectetur a erat nam at lectus urna duis?',
            text:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
        },
        {
            title:'Non consectetur a erat nam at lectus urna duis?',
            text:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
        }
    ]
    return (
        <div>

            <div className={'grid grid-cols-12 items-center'}>
                <div className="col-span-6">
                    <div>
                        <h2 className={'text-3xl'}>Eum ipsam laborum deleniti <span className={'font-bold'}>velit pariatur architecto aut nihil</span></h2>
                        <p className={'my-6'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                    </div>
                    {
                        accordions.map((item,i)=><Accordion key={i} serial={{serial:i}} item={item}/>)
                    }
                </div>
                <div className="col-span-6">
                    <div>
                        <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/why-us.png" alt="" className={`w-full transition-all duration-300`}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emu;