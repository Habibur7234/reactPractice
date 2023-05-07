import React from 'react';
import IndivisualSkill from "../IndivisualSkill/IndivisualSkill";

const Skill = () => {
    const allSkills = [
        {
            name:'HTML',
            percent:100
        },
        {
            name:'React',
            percent:50
        },
        {
            name:'Tailwind',
            percent:30
        },
        {
            name:'Javascript',
            percent:60
        },
        {
            name:'JQuery',
            percent:90
        }
    ]
    return (
        <div className={'grid grid-cols-12 py-16 gap-8'}>
            <div className="col-span-6">
                <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/skills.png" alt="" className="w-full"/>
            </div>
            <div className={'col-span-6'}>
                <div>
                    <h2 className={'text-3xl'}>Voluptatem dignissimos provident quasi corporis voluptates</h2>
                    <p style={{margin:'7px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        {
                            allSkills.map((skill,i)=><IndivisualSkill key={i} singleSkill={skill}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;