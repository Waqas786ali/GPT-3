import { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri/index.esm"
import logo from "../../assets/logo.svg"


const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#wgpt3'>What is GPT3</a></p>
      <p><a href='#possibility'> Open Al</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
    </>
  );
}

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='text-white gpt3__navbar flex  justify-between items-center py-8 p-8 sm:px-16 md:px-24 '>
      <div className='gpt3__navbar-links flex  flex-1 justify-start items-center'>
        <div className='gpt3__navbar-links_logo mr-8 '>
          <img className='w-[62.56px] h-[16.02px] ' src={logo} alt='logo' />
        </div>
        <div className=' hidden lg:flex flex-row gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign hidden sm:flex justify-end items-center'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu ml-4 flex lg:hidden relative '>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container flex justify-end items-end flex-col text-end bg-[var(--color-footer)] p-8 absolute top-[20px] sm:top-[40px] right-0 mt-2 min-w-[210px] rounded-[5px]  scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-meun_container-links-singn block sm:hidden'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar