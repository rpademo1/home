    import React, { Component } from "react";
    import Form from 'react-bootstrap/Form';
    import Button from 'react-bootstrap/Button';
    import Bootstrap from "react-bootstrap";
    import {CopyToClipboard} from 'react-copy-to-clipboard';
    import "./Welcome.css";

    export default class WelcomePage extends Component {
      constructor(props) {
        super(props);
        this.state = {
          random:0,
          open: 'none'
        }
        
      }

      handleSubmit = event => {
        event.preventDefault();
        const min = 10000;
        const max = 99999;
        const rand = min + Math.random() * (max - min);
        const round = Math.round(rand);
        this.setState({ random: "SVT"+round, open: 'inline' });
      }

      render() {
        var random = this.state.random;
        var open = this.state.open;
        var style = {display:open};
        var stylea = {display:'none'};
        return (
          <div className="WelcomePage">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name" bsSize="large">
              <Form.Control type="text" placeholder="Họ và tên chủ hộ"/>
              </Form.Group>
              <Form.Group controlId="address" bsSize="large">
                <Form.Control placeholder="Địa chỉ" type="text" />
              </Form.Group>
              <Form.Group controlId="Số nhân khẩu" bsSize="large">
                <Form.Control placeholder="Số nhân khẩu" type="number" />
              </Form.Group>
              <Button
                block
                bsSize="large"
                type="submit"
              >
                Submit
              </Button>
              <br/>
              <div style={style}>
                <Form.Label>Mã số khách hàng: </Form.Label>
                <Form.Control plaintext readOnly value={random} />
              </div>
              
            </Form>

            <div className="copy" style={stylea}>
            <CopyToClipboard text={this.state.random}>
              <button>Copy</button>
            </CopyToClipboard>
            </div>
          </div>
        );
      }
    }