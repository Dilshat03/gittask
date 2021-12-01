import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import logo from './GitHub_Logo.png'
const MainPage = () => {
    const history = useHistory()
    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleCheck = () => {
        if (search.trim()) {
            history.push(`/${search}`)
        }
    }
    return (
        <div className='main-page'>
            <div className="w-full h-screen font-sans bg-cover bg-landscape">
                <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div className="w-full max-w-lg">
                        <div className='text-center'>
                            <img src={logo} alt="logo" width='300' height='200' />
                        </div>
                        <div className="leading-loose">
                            <div className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
                                <p className="mb-8 text-2xl font-light text-center text-black">
                                    Username
                                </p>
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text" id="login-with-bg-password"
                                               onChange={handleChange} onKeyPress={el=>{if(el.key==='Enter')handleCheck()}}
                                               className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                               placeholder="username"/>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button
                                            onClick={handleCheck}
                                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Найти
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;