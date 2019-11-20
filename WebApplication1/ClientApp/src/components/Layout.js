import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { FootMenu } from './FootMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container className="no-padding" fluid={true}>
            {this.props.children}
        </Container>
        <FootMenu />
      </div>
    );
  }
}
