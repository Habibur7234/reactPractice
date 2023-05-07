import React from 'react';

const Cerosole = () => {

    const cerosoleItem = [

        {
            image: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-4.png',
        },


        {
            image: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-1.png',
        },

        {
            image: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-4.png',
        },
        {
            image: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-2.png',
        },

        {
            image: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-5.png',
        },
        {
            image: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-6.png',
        }


    ]

    return (
        <div className={"py-4 bg-amber-50 h-24 flex items-center"}>

            <div className={"flex items-center flex-wrap justify-between   container"}>
                {
                    cerosoleItem?.map((item, i)=> <div key={i}>
                        <img className={" w-24"} src={item.image} alt={""}/>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Cerosole;