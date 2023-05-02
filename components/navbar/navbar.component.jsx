import React from 'react';
import { PrimaryButton, SecondaryButton } from '../button/button.styles';
import { NavbarContainer, LogoDiv, NavbarDiv } from './navbar.styles';
import Link from 'next/link';

const menuLinks = [
  {
    name: "What We Do"
  }
]

const Navbar = () => {
  return (
    <NavbarDiv>

      <NavbarContainer>
        <LogoDiv>
          <Link href="/">
            <img src='/logo.svg' />
          </Link>
        </LogoDiv>

          <PrimaryButton href="/" >Get Started</PrimaryButton>
        
      </NavbarContainer>
    </NavbarDiv>
  )
}

export default Navbar