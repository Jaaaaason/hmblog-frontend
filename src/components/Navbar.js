import React, { Component } from 'react'
import {
  Navbar,
  NavbarHeading,
  Alignment,
  NavbarGroup,
  NavbarDivider,
  Button
} from '@blueprintjs/core'

export default class AppNavbar extends Component {
  render() {
    return (
      <Navbar className={"bp3-navbar bp3-dark"}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>HMBlog</NavbarHeading>
          <NavbarDivider />
          <Button className="bp3-minimal" icon="home" text="主页" />
          <Button className="bp3-minimal" icon="box" text="分类" />
        </NavbarGroup>
      </Navbar>
    )
  }
}