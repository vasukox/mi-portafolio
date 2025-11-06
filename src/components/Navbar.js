
import React from 'react';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Sobre Mí
          </NavLink>
          <NavLink to="technologies" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Tecnologías
          </NavLink>
          <NavLink to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Experiencia
          </NavLink>
          <NavLink to="certifications" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Certificaciones
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Proyectos
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink href={process.env.PUBLIC_URL + '/Curriculum_CV.pdf'} download="Andres_Diaz_CV.pdf">
            <FiDownload style={{ marginRight: '8px' }} />
            Descargar CV
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
