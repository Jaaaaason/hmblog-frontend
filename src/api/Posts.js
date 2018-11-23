import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import Emoji from '../components/Emoji'
import Moment from 'react-moment'

const ulStyle = {
  ul: {
    listStyleType: 'none',
    paddingLeft: '1rem'
  },
  li: {
    fontSize: '16pt',
    a: {
      color: '#f5f8fa'
    },
    date: {
      fontSize: '12pt',
      color: '#CED9E0'
    }
  }
}

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_POSTS_URL)
      .then(res => res.json())
      .then(
        (posts) => {
          this.setState({
            isLoaded: true,
            posts: posts
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return (
        <Row justify="center" style={{ height: '10rem' }} align="center">
          <div style={{ textAlign: "center", color: "#f5f8fa" }}>
            <span className="bp3-icon-large bp3-icon-error"></span>
            <br />
            <h4>{error.message}</h4>
          </div>
        </Row>
      );
    } else if (!isLoaded) {
      return (
        <Row justify="center" style={{ height: '10rem' }} align="center">
          <Col xs={6} md={6}>
            <div className={"bp3-progress-bar"}>
              <div className="bp3-progress-meter"></div>
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <ul style={ulStyle.ul}>
          {posts.map(post => (
            <li key={post.id} style={ulStyle.li}>
              <Emoji symbol="🍺" label="beer" />&nbsp;
              <span style={ulStyle.li.date}>
                <Moment format="MM/DD/YYYY">
                  {post.created_at}
                </Moment>
              </span>&nbsp;
              <a style={ulStyle.li.a}>{post.title}</a>
            </li>
          ))}
        </ul>
      );
    }
  }
}