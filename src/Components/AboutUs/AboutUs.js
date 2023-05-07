import React from 'react';

const AboutUs = () => {

    let liText = [

        {
            text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        },
        {
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit',
        },
        {
            text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        },

    ]


    return (

        <div className={"bg-white bg-white"}>
            <div className={"grid justify-center my-4"}>
                <h1 className={"text-3xl font-bold"}>About Us</h1>
                <hr className={"my-4 border-blue-800"}/>
            </div>


            <div className={"container grid grid-cols-12"}>

                <div className={"col-span-6 my-4"}>
                    <p className={"my-4 leading-7"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    {
                        liText?.map((items, i) =>
                            <li className={"leading-10"} key={i}>{items.text}</li>
                        )
                    }
                </div>
                <div className={"col-span-6 my-4"}>
                    <p className={"my-4 leading-7"}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.</p>

                    <button className={"py-2 px-7 bg-white border-blue-400 border-2 hover:bg-blue-700 hover:border-transparent hover:text-white transition-all"}>Learn More</button>

                </div>


            </div>


        </div>
    );
};

export default AboutUs;