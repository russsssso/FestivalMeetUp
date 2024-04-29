import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;
    
    render() {
        const url = window.location.pathname;
        console.log(url);
    return (
        <div>
            {
                url !== "/login-test" && 
            (
        <NavMenu />)
            }
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
