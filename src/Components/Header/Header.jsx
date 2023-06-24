import './Header.scss'
import Logo from '../../../public/Logo.png'
import { NavLink, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const Header = () => {

    const [toggler, setToggler] = useState(false);

    const handleToggler = () =>{
        setToggler(!toggler);
    }
  return (
    <div className='header'>
        <div className='header-top'>
            <div className='container'>
                <div className='header-top--main'>
                    <div className='sale'>
                        <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h5>
                    </div>
                    <select name="" id="">
                        <option value="en">English</option>
                        <option value="uz">O'zbek</option>
                        <option value="ru">Русский</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='header-bottom'>
            <div className='container'>
                <div className='nav'>
                    <img src={Logo} alt="Exclusive" className='nav-logo'/>
                    <ul className={`d-none d-md-flex nav-menu`}>
                        <li className='nav-menu--item'>
                            <NavLink to="/"  className='nav-menu--link'>Home</NavLink>
                        </li>
                        <li className='nav-menu--item'>
                            <NavLink to='/contact' className='nav-menu--link'>Contact</NavLink>
                        </li>
                        <li className='nav-menu--item'>
                            <NavLink to='/about' className='nav-menu--link'>About</NavLink>
                        </li>
                        <li className='nav-menu--item'>
                            <NavLink to='sign-up' className='nav-menu--link'>Sign up</NavLink>
                        </li>
                    </ul>
                    <div className='nav-cart'>
                        <div className='nav-cart--search'>
                            <input type="search" name="" id="" placeholder='What are looking for?'/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search"/>
                        </div>  
                        <div className='nav-cart--icons'>
                            <FontAwesomeIcon icon={faHeart} className='heart'/>
                            <FontAwesomeIcon icon={faCartShopping}  className="cartShopping"/>
                        </div>
                    </div>
                    <div className={`d-flex d-md-none ${!toggler ? `nav-toggler`:`nav-toggler2`}`} onClick={()=>{handleToggler()}}>
                        <span className='nav-toggler--span'></span>
                        <span className='nav-toggler--span'></span>
                        <span className='nav-toggler--span'></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`d-block d-md-none ${!toggler ? `header--menu2`:`header--menu`}`}>
            <ul className='header__menu'>
                <li className='header__menu--item'>
                    <NavLink to="/"  className='header__menu--link'>Home</NavLink>
                </li>
                <li className='header__menu--item'>
                    <NavLink to='/contact' className='header__menu--link'>Contact</NavLink>
                </li>
                <li className='header__menu--item'>
                    <NavLink to='/about' className='header__menu--link'>About</NavLink>
                </li>
                <li className='header__menu--item'>
                    <NavLink to='sign-up' className='header__menu--link'>Sign up</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;