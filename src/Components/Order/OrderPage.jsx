import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  DropdownButton,
  Dropdown,
  Card,
  Image,
} from "react-bootstrap";
import "./Order.css";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Divider from "@material-ui/core/Divider";
import CachedIcon from "@material-ui/icons/Cached";

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
    border: "1px solid grey",

    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      color: "white",
      border: "1px solid grey",
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

export default function OrderPage() {
  const classes = useStyles();

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            {" "}
            <div className="">
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link
                  color="inherit"
                  href="/"
                  //    onClick={handleClick}
                >
                  Your Account
                </Link>

                <Typography color="textPrimary">Orders </Typography>
              </Breadcrumbs>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Your Orders</h2>
          </Col>
          <Col>
            <div
              style={{
                width: "80%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
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
              <Button variant="secondary">Search Order</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ display: "flex" }}>
              <h6>23 Order Placed in </h6>
              <DropdownButton
                variant="outline-secondary"
                title="Last Order"
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">Last 3 Months</Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item href="#">Last 6 Months</Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item href="#">Last 1 Year</Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <div style={{ display: "flex" }}>
                  <div>
                    <h6>
                      ORDER PLACED <br />
                      March 25 2021
                    </h6>
                  </div>

                  <div>
                    <h6>
                      Total <br />
                      2100 Rs
                    </h6>
                  </div>

                  <div>
                    <h6>
                      Shipped to <br />
                      Jhon dow
                    </h6>
                  </div>
                  <div>
                    <h6>
                      Order Id #5544879623 <br />
                      <a>Inovice </a>
                    </h6>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>Deliverd May 1 2021</Card.Title>
                <div style={{ display: "flex" }}>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqDOqy0d1wz5Nnu6466k2-G-UdeuHIHih4cw&usqp=CAU"
                    rounded
                  />
                  <div style={{ display: "block" }}>
                    <h6>
                      {" "}
                      I Phone 11 128Gb ROM 6Gb RAM Red Color <br />
                      Fast Charging 1yr Warrenty
                    </h6>
                    <h6>Sold by - Steave</h6>
                    <h6>Return eligible through May 15 2021</h6>
                    <Button variant="warning">
                      Update Cart <CachedIcon />
                    </Button>
                    <Button variant="light">View Item</Button>
                  </div>
                </div>
                <div style={{ display: "block" }}>
                  <Button variant="light">Track Package</Button>
                  <Button variant="light">Return or Replace</Button>
                  <Button variant="light">View Item</Button>
                  <Button variant="light">Write a Review</Button>
                  <Button variant="light">Leave a Feedback</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
