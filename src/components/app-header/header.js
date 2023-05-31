
import { useState } from 'react'
import "./Header.scss"
import arrow from '../../content/arrow-down.svg'




const Header = () => {

	const showMenu = () => {
		document.getElementById("dropdown").classList.toggle("show");
		document.getElementById("dropdown-btn").classList.toggle("turn");
	
	}
    return (

        <div className="header">
         <h1 className="header_text">Awesome Kanban Board</h1>
         <div className="header_profile">
            <div className="header_profile_avatar">
                
            </div>
            <div className="profile_content_wrapper">
                <button onClick={showMenu} id="dropdown-btn" className="drop_btn">
					<img className='drop_btn_arrow' src={arrow}/>
                </button>

                <div className="dropdown_menu" id="dropdown">
                    <p className ="dropdown_menu_link">Profile</p>
                    <p className="dropdown_menu_link">Log Out</p>
                    
                </div>
            </div>
           

         </div>

        </div>

    );
}

export default Header;