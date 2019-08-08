    import React, { Component } from "react";
    import Bootstrap from "react-bootstrap";
    import Table from 'react-bootstrap/Table'

    export default class PricePage extends Component {
      constructor(props) {
        super(props);
        
      }


      render() {
        return (
          <div className="PricePage">
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã vật tư</th>
                  <th>Tên vật tư</th>
                  <th>Đơn vị tính</th>
                  <th>Đơn giá</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ON21</td>
                  <td>Ống nước d21</td>
                  <td>mét</td>
                  <td>7000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ON27</td>
                  <td>Ống nước d27</td>
                  <td>mét</td>
                  <td>14000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>KDO</td>
                  <td>Keo dán ống</td>
                  <td>chai</td>
                  <td>8000</td>
                </tr>
              </tbody>
            </Table>

            
          </div>
        );
      }
    }