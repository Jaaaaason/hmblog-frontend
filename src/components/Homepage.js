import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import AppNavbar from './Navbar'
import Posts from '../api/Posts'
import { Divider } from '@blueprintjs/core';

const contentStyle = {
  marginTop: '2rem'
}

const postsTagStyle = {
  root: {
    width: 'fit-content'
  },
  h2: {
    color: '#f5f8fa'
  },
  divider: {
    backgroundColor: '#f5f8fa'
  }
}

export default class Homepage extends Component {
  render() {
    return (
      <Container fluid>
        <Row justify="center" debug>
          <Col xs={12} md={8}>
            <AppNavbar />

            <div style={contentStyle}>
              <Row style={postsTagStyle.root}>
                <Col>
                  <h2 className={"bp3-heading "} style={postsTagStyle.h2}>
                    Posts
                  </h2>
                  <Divider style={postsTagStyle.divider} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Posts />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}