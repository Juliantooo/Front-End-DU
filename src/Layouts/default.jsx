import React from "react"
import { Link } from "react-router-dom"
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Media,
  Row
} from "reactstrap"

import LogoDoscom from "../assets/logo-doscom.png"

const menus = [
  {
    icon: "home",
    title: "Home",
    url: "/"
  },
  {
    icon: "people",
    title: "Peserta",
    url: "peserta"
  },
  {
    icon: "people",
    title: "Admin",
    url: "admin"
  },
  {
    icon: "people",
    title: "Kelas",
    url: "kelas"
  }
]

const Default = props => {
  return (
    <Row style={{ margin: "auto 0" }}>
      <Col xs={3}>
        <ListGroup>
          <ListGroupItem>
            <Media>
              <Media left>
                <Media object src={LogoDoscom} width="100" />
              </Media>
              <Media body>
                <Media heading>Dashboard DU</Media>
                Ini dashboard doscom university
              </Media>
            </Media>
          </ListGroupItem>
          {menus.map(menu => (
            <ListGroupItem tag={Link} to={menu.url} action>
              {menu.title}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <Container>{props.children}</Container>
      </Col>
    </Row>
  )
}

export default Default
