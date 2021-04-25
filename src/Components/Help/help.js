import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Help.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExtensionIcon from "@material-ui/icons/Extension";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Appbar from "../Cart/Appbar";
import Footer from "../Cart/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      color: "white",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(10em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("lg")]: {
        width: "100%",
      },
    },
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
    color: "grey",
  },
}));

export default function Help() {
  const classes = useStyles();

  return (
    <div>
      <Appbar />
      <div className="background_img">
        <div className="heading_containt">
          <h1 className="help_header_txt">What do you need?</h1>
          <h5 className="help_header_txt">We are happy to help you.</h5>
          <div
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <div style={{ marginLeft: "2rem" }}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <div>
              <div className="help_icon_container">
                <AccountCircleIcon
                  style={{ color: "#007aff" }}
                  fontSize="large"
                />
                <h2>Account</h2>
                <p>Let’s try to fix your account issues.</p>
              </div>
              <div>
                <div className="help_links">
                  <h5>Find account number</h5>
                </div>
                <div className="help_links">
                  <h5>ATMs and ATM fees</h5>
                </div>
                <div className="help_links">
                  <h5>Business retirement services</h5>
                </div>
                <div className="help_links">
                  <h5>Planning for major life events</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <div className="help_icon_container">
                <MonetizationOnIcon
                  style={{ color: "#007aff" }}
                  fontSize="large"
                />
                <h2>Billing</h2>
                <p>Let’s try to fix your billing issues.</p>
              </div>
              <div>
                <div className="help_links">
                  <h5>Business online banking and services</h5>
                </div>
                <div className="help_links">
                  <h5>Business loans, lines & leasing</h5>
                </div>
                <div className="help_links">
                  <h5>Mortgage basics</h5>
                </div>
                <div className="help_links">
                  <h5>Credit cards</h5>
                </div>
              </div>
            </div>{" "}
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div>
              <div className="help_icon_container">
                <PeopleAltIcon style={{ color: "#007aff" }} fontSize="large" />
                <h2>Organizations</h2>
                <p>Let’s try to fix your organizational issues.</p>
              </div>
              <div>
                <div className="help_links">
                  <h5>Redeem rewards points</h5>
                </div>
                <div className="help_links">
                  <h5>Growing a business Last</h5>
                </div>
                <div className="help_links">
                  <h5>Accessible banking</h5>
                </div>
                <div className="help_links">
                  <h5>Mobile banking</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <div className="help_icon_container">
                <ExtensionIcon style={{ color: "#007aff" }} fontSize="large" />
                <h2>Customizing</h2>
                <p>Let’s try to fix your customizing issues.</p>
              </div>
              <div>
                <div className="help_links">
                  <h5>Planning for college</h5>
                </div>
                <div className="help_links">
                  <h5>Learn about credit</h5>
                </div>
                <div className="help_links">
                  <h5>Budgeting & saving</h5>
                </div>
                <div className="help_links">
                  <h5>Transferring funds</h5>
                </div>
              </div>
            </div>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="need_section">
              <div className="can_not_find_answer_container">
                <h2>Can't find the answer you need?</h2>
                <p>
                  Keep track of what's happening with your data, change
                  permissions, and run reports against your data anywhere in the
                  world. <br />
                  Keep track of what's happening with your data, change
                  permissions.
                </p>
              </div>
              <div className="need_section">
                <div
                  // style={{
                  //   display: " flex ",
                  //   flexWrap: " wrap ",
                  //   justifyContent: " center ",
                  //   alignItems: " center ",
                  //   padding: " 0rem 2rem ",
                  // }}
                  className="help_items"
                >
                  <div className="PEL_icons">
                    <PhoneAndroidOutlinedIcon fontSize="large" />
                    <span>
                      <strong>Phone</strong>
                      <br />
                      07518878965
                    </span>
                  </div>
                  <div className="PEL_icons">
                    <EmailOutlinedIcon fontSize="large" />
                    <span>
                      <strong>Email</strong>
                      <br />
                      xyz@gmial.com
                    </span>
                  </div>
                  <div className="PEL_icons">
                    <LocationOnOutlinedIcon fontSize="large" />
                    <span>
                      <strong>Location</strong>
                      <br />
                      Gwalior
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col sm={6}>
            <div>
              <Form className="help_form">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label> Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                  className="help_form_button"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
