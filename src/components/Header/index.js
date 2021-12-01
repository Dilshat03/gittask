import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Header = () => {
    const [user, setUser] = useState({})
    const {id} = useParams()

    // const filterRepos = repos.filter(item => item.name.toLowerCase().includes(repos))

    useEffect(() => {
        axios(`https://api.github.com/users/${id}`)
            .then(({data}) => setUser(data))
    }, [id])

    return (

        <header className='header'>
            <div className="container">
                <div className="header-wrapper">

                           <Link to='/' className='left-side'>
                               <img src={user.avatar_url}  className='img-login' alt='img-logo'/>
                               <p>{user.login}</p>
                           </Link>


                </div>
            </div>
        </header>

    );
};

export default Header;