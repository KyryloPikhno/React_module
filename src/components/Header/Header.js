import css from './header.module.css'

import {NavLink, useNavigate} from "react-router-dom";



const Header = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className={css.header}>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
            <div>
                <button onClick={()=>navigate(-1)}>Prev</button>
                <button onClick={()=>navigate(1)}>Next</button>
            </div>
        </div>
    );
};

export {Header};