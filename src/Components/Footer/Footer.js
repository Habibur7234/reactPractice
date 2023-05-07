import React, {useEffect, useState} from 'react';
import {AiFillFacebook, AiFillLinkedin, AiOutlineSkype, AiOutlineTwitter} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {

    const [post, setPost]=useState([])
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");


    useEffect(()=>{
            try{
                const getPost = async ()=>{
                    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
                        method:'GET',
                    })
                    const resData = await res.json()
                    setPost(resData)
                }
                getPost();

            }catch (e) {
                console.log(e)
            }

    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = {
            first_name : firstName,
            last_name: lastName,
            email: email
        }
        console.log(postData);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input onChange={(e) =>setFirstName(e.target.value)} type="text" name="first-name" id="first-name" autoComplete="given-name"
                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">Last &#9829; name</label>
                                <div className="mt-2">
                                    <input onChange={(e) =>setLastName(e.target.value)} type="text" name="last-name" id="last-name" autoComplete="family-name"
                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email
                                    address</label>
                                <div className="mt-2">
                                    <input onChange={(e) =>setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email"
                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                            className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                    </button>
                </div>
            </form>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4"}>
                <div>
                    <div id="content">
                        <div className="header"></div>
                        <div className="body">
                            <ul className="items">
                                {
                                    post?.map((item , i)=> <li key={i} className="item">{item.title}</li>

                                    )
                                }

                            </ul>
                        </div>
                    </div>

                </div>




                <div>
                    <h1 className={"text-2xl font-bold py-2 text-blue-900"}>ARSHA</h1>
                    <p className={"text-sm my-1"}>A108 Adam Street</p>
                    <p className={"text-sm my-1"}>ANew York, NY 535022</p>
                    <p className={"text-sm"}>United States</p>
                    <div className={"py-7"}>
                        <p className={"text-sm my-2"}><span className={"font-bold"}>Phone:</span> +1 5589 55488 55</p>
                        <p className={"text-sm"}><span className={"font-bold"}>Email:</span> info@example.com</p>
                    </div>
                </div>

                <div>
                    <h1 className={" font-bold py-2 text-blue-900"}>Useful Link</h1>
                    <p className={"text-sm my-1"}>
                        Web Design</p>
                    <p className={"text-sm my-1"}>Web Development</p>
                    <p className={"text-sm"}>Product Management</p>
                    <div className={"py-7"}>
                        <p className={"text-sm my-2"}><span className={"font-bold"}>Phone:</span> +1 5589 55488 55</p>
                        <p className={"text-sm"}><span className={"font-bold"}>Email:</span> info@example.com</p>
                    </div>
                </div>

                <div>
                    <h1 className={" font-bold py-2 text-blue-900"}>Our Services</h1>
                    <p className={"text-sm my-1"}>A108 Adam Street</p>
                    <p className={"text-sm my-1"}>ANew York, NY 535022</p>
                    <p className={"text-sm"}>United States</p>
                    <div className={"py-7"}>
                        <p className={"text-sm my-2"}><span className={"font-bold"}>Phone:</span> +1 5589 55488 55</p>
                        <p className={"text-sm"}><span className={"font-bold"}>Email:</span> info@example.com</p>
                    </div>
                </div>

                <div>
                    <h1 className={"font-bold py-2 text-blue-900"}>Our Social Networks</h1>

                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <div className={"grid grid-cols-5"}>

                        <div className={"text-sky-400 text-4xl rounded-full py-5"}>
                            <AiFillFacebook/>
                        </div>
                        <div className={"text-sky-400 text-4xl rounded-full py-5"}>
                            <AiOutlineTwitter/>
                        </div>
                        <div className={"text-sky-400 text-4xl rounded-full py-5"}>
                            <FiInstagram/>
                        </div>
                        <div className={"text-sky-400 text-4xl rounded-full py-5"}>
                            <AiOutlineSkype/>
                        </div>
                        <div className={"text-sky-400 text-4xl rounded-full py-5"}>
                            <AiFillLinkedin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Footer;