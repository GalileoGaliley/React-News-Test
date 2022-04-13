import React, {useState} from 'react';
import {Nav, Navbar, Row, NavDropdown, Container, Button, Col} from "react-bootstrap";
import Calendar from "./CalendarFolder/Calendar";
import FilterItem from "./filterItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../HTTP/NewsAPI";

const Filter = () => {
    const [light, setLight] = useState('light')

    const changeLight = ()=>{
        if (light == 'light'){
            setLight('dark');
        }else {
            setLight('light')
        }
    }


    return (
        <Row className={'filter'}>
            <Navbar variant={light} bg={light} expand="lg">
                <Row>
                    <Col md={3}>
                        <FilterItem component={<Calendar />} value={'from'} title={'Время от:'} />
                    </Col>


                </Row>
            </Navbar>

        </Row>

    );
};

export default Filter;