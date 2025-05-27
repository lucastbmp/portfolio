import { useState } from 'react';
import './navbar.style.css';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
   const [open, setOpen] = useState(false);
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      document.body.classList.toggle('dark');
      setDarkMode(!darkMode);
   };

   return (
      <>
         <div className={`{sidebard ${open ? 'open' : ''}`}>
            <div className='theme-toggle' onClick={toggleDarkMode}>
               {darkMode ? <Sun className='icon-sun' size={30} /> : <Moon className='icon-moon' size={30} />}
            </div>
            <nav className='nav-links'>
               <div className='nav-item'>
                  <span className='number'>01</span>
                  <span className='label'>Início</span>
               </div>
               <div className='nav-item'>
                  <span className='number'>02</span>
                  <span className='label'>Sobre</span>
               </div>
               <div className='nav-item'>
                  <span className='number'>03</span>
                  <span className='label'>Projetos</span>
               </div>
               <div className='nav-item'>
                  <span className='number'>04</span>
                  <span className='label'>Habilidades</span>
               </div>
               <div className='nav-item'>
                  <span className='number'>05</span>
                  <span className='label'>Contato</span>
               </div>
            </nav>
         </div>

         <button className='hamburger' onClick={() => setOpen(!open)}>
            <div className='bar'></div>
            <div className='bar'></div>
         </button>
      </>
  );
}
