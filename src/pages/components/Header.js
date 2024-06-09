import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/auth"
import { CreateAccount, LogOut } from "../../buttons"
import logo from "../../images/cropped-nordlund_logo.png";
import { navbar } from "../../data/data"



export default function Header() {
  const [links] = useState(navbar)
  const { user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="p-5 flex items-center justify-between xl:max-w-7xl lg:mx-auto 2xl:px-0">
        {/* Add the logo image here */}
        <img src={logo} alt="Nordlund Boat Co Logo" className="logo"/>

        <nav className="navbar">
          <ul>
            {links.map(({id, title, url}) => (
                <React.Fragment key={id}>
                  <li key={id} className="list-item">
                    <Link to={url} className="text-base text-slate-700">
                      {title}
                    </Link>
                  </li>
                </React.Fragment>
            ))}

            <li>{user ? <LogOut/> : <CreateAccount/>}</li>
          </ul>
        </nav>


        <div className="lg:hidden">
          <button
              onClick={handleClick}
              className="text-sm uppercase transition-all duration-500 text-slate-700"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}
