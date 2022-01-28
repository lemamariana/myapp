import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'
import './ItemList.scss'

export const ItemList = ({items}) => {

    return (
        <Container className="itembck">
            <h2>Productos</h2>
            <hr/>
            <Row className="justify-content-md-center m-0 p-0">
               {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}