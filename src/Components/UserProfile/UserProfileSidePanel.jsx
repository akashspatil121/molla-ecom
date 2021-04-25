import React from "react";

import "./UserProfileSidePanel.css"


import {Row, Col, Card,  Image, ListGroup } from "react-bootstrap";

import Header from "../Home/Header";


export default function UserProfileSidePanel() {

  return (

    <div className="user_profile_container">

        <section>

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



        </section>
      
    </div>
  );
}
