import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class ConferrenceList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roomList: [
                {
                    name: 'A Room',
                    userName: 'Arm',
                    CreateDate: "2015-03-25",
                    UpdateAt: "2015-03-25"
                },
                {
                    name: 'B Room',
                    userName: 'Ton',
                    CreateDate: "2015-03-25",
                    UpdateAt: "2015-03-25"
                },
                {
                    name: 'C Room',
                    userName: 'Kai',
                    CreateDate: "2015-03-25",
                    UpdateAt: "2015-03-25"
                },
                {
                    name: 'E Room',
                    userName: 'Mhoo',
                    CreateDate: "2015-03-25",
                    UpdateAt: "2015-03-25"
                },

            ]
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Room Conference Management</h1>
                    <Row>
                        <Col>
                            <Table className="mt-2" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Room Name</th>
                                        <th>Account Name</th>
                                        <th>Create At</th>
                                        <th>Updated At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.roomList.map((val, i) =>
                                            <tr key={i}>
                                                <td>{val.name}</td>
                                                <td>{val.userName}</td>
                                                <td>{val.CreateDate}</td>
                                                <td>{val.UpdateAt}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
