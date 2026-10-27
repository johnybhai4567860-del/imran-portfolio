import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeProvider';

const navItems = [
  { name: 'Home', linkTo: 'home' },
  { name: 'About', linkTo: 'about' },
  { name: 'Skills', linkTo: 'skills' },
  { name: 'Experience', linkTo: 'experience' },
  { name: 'Projects', linkTo: 'projects' },
  { name: 'Contact', linkTo: 'contact' }
];

function NavLink({ children, linkTo, onClick, activeSection }) {
  const handleClick = (e) => {
    e.preventDefault();
    const elem = document.getElementById(linkTo);
    if (elem) {
      const navHeight = 64;
      const elemPosition = elem.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: elemPosition,
        behavior: 'smooth'
      });
    }
    if (onClick) onClick();
  };

  const isActive = activeSection === linkTo;

  return (
    <a
      href={`#${linkTo}`}
      onClick={handleClick}
      className={`font-mono text-xs uppercase tracking-wider font-extrabold px-3 py-1.5 border-2 transition-all duration-150 select-none cursor-pointer rounded-none block text-center ${
        isActive
          ? '!bg-foreground !text-background !border-foreground !shadow-[2px_2px_0px_0px_var(--foreground)]'
          : 'border-transparent hover:border-foreground hover:bg-foreground/5'
      }`}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 flex px-6 md:px-16 h-16 bg-background text-foreground justify-between items-center border-b-4 border-foreground z-50 transition-colors duration-300">
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-mono font-black text-2xl border-3 border-foreground bg-card text-foreground px-3 py-0.5 shadow-[3px_3px_0px_0px_var(--foreground)] tracking-tighter select-none cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
      >
        I_
      </div>

      <div className="flex items-center gap-6">
        <ul className="hidden lg:flex space-x-2 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink linkTo={item.linkTo} activeSection={activeSection}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="hover:cursor-pointer border-2 border-foreground bg-card p-1.5 shadow-[2px_2px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-foreground size-9 flex items-center justify-center rounded-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-background border-b-4 border-foreground flex flex-col items-stretch py-4 px-6 gap-2 z-10 transition-all duration-300 shadow-[0_4px_0px_0px_var(--foreground)] lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              linkTo={item.linkTo}
              activeSection={activeSection}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
