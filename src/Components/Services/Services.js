import React from 'react';
import { AiOutlineGlobal} from "react-icons/ai";
import {BsAirplaneEngines, BsGooglePlay} from "react-icons/bs";
import {MdOutlineClearAll} from "react-icons/md";

const Services = () => {

    const services = [
        {

            icon:<AiOutlineGlobal/>,
            title: 'Sed ut perspici',
            text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
        },

        {
            icon:<MdOutlineClearAll/> ,
            title: 'Lorem Ipsum',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
        },

        {
            icon:<BsAirplaneEngines/>,
            title: 'Magni Dolores',
            text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        },

        {
            icon:<BsGooglePlay/>,
            title: 'Nemo Enim',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
        }

    ]

    return (
        <div>
            <div className={"grid justify-center py-8"}>
                <h1 className={"text-3xl font-bold"}>About Us</h1>
                <hr className={"my-4 border-blue-800"}/>
            </div>
            <div className="col-12">
                <p className={"text-center mb-4"}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                    aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                    impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4"}>

                {
                    services.map((item, i) =>
                        <div className={"w-full bg-white my-4 shadow-lg py-8 px-5 rounded"}>
                            <div>
                                <p className={"text-3xl text-sky-400"}>{item.icon}</p>
                            </div>
                            <div className={"my-2"}>
                                <h4 className={"text-xl"}>{item.title}</h4>
                            </div>
                            <div>
                                <p className={"text-sm  leading-5 "}>{item.text}</p>
                            </div>
                        </div>
                    )

                }

            </div>


        </div>
    );
};

export default Services;