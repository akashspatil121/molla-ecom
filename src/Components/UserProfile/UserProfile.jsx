import React from "react";

import "./UserProfile.css"


import {Row, Col, Card,  Image, ListGroup } from "react-bootstrap";

import Header from "../Home/Header";

import Footer from "../Home/Footer"


export default function UserProfile() {

  return (

    <>

    <div className="user_profile_container">

        <Header/>
    
        <Row >

          <Col>
            <div className="profile_header">

              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI75pAjlZIB-WsV_RwjU_yYcy4SlpYNmuqA&usqp=CAU"
                roundedCircle
                width="90px"
              />

              <div className="profile_header_txt">
                <h6>Jhone Wick</h6>
                <h6>xyz@gmail.com</h6>
              </div>

            </div>

          </Col>

        </Row>

        <Row>

            <Col>

            <Card className="profile_side_panel">
                
                <Card.Header className="profile_seide_panel_heading">Account Setting</Card.Header>
                
                <ListGroup variant="">
                <ListGroup.Item className="profile_side_panel_option">Profile Information</ListGroup.Item>
                <ListGroup.Item className="profile_side_panel_option">Address Inoformation</ListGroup.Item>
                <ListGroup.Item className="profile_side_panel_option">Noitfication</ListGroup.Item>
                <ListGroup.Item className="profile_side_panel_option">Order</ListGroup.Item>
                </ListGroup>

                <Card.Header className="profile_seide_panel_heading"> Payment Setting</Card.Header>
                
                <ListGroup variant="flush">
                <ListGroup.Item className="profile_side_panel_option">Wallet </ListGroup.Item>
                <ListGroup.Item className="profile_side_panel_option">Pay later </ListGroup.Item>
                <ListGroup.Item className="profile_side_panel_option">Save Cards</ListGroup.Item>
                </ListGroup>

                <Card.Header className="profile_seide_panel_heading">My Stuff</Card.Header>
                
                <ListGroup variant="flush">
                <ListGroup.Item className="profile_side_panel_option">My Rewards</ListGroup.Item>
                <ListGroup.Item className="profile_side_panel_option">My Wishlist </ListGroup.Item>
                </ListGroup>

            </Card>

            </Col>

        </Row>
         
        
    </div>

    <Footer/>

    </>

  );
}
