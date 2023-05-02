import React from 'react';
import { LayoutContainer } from './layout.styles';
import Navbar from "../navbar/navbar.component"

const Layout = ({children}) => {
  return (
    <LayoutContainer>
        {/* <h2>Layout Rendered</h2> */}
        <Navbar />
        {children}
    </LayoutContainer>
  )
}

export default Layout