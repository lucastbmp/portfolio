import './navbar.style.css';

export default function Navbar() {
   return (
      <header className='navbar'>
         <div className='navbar-container'>
            <div className='logo'>Lucas Tobias</div>
            <nav className='nav-link'>
               <a href='home'>Início</a> 
               <a href='about'>Sobre</a> 
               <a href='projects'>Projetos</a> 
               <a href='abilities'>Habilidades</a> 
               <a href='contact'>Contato</a> 
            </nav>
         </div>
      </header>
   );
}
