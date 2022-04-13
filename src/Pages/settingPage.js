import React, {useEffect, useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";

const SettingPage = () => {
    const localSetting = JSON.parse(localStorage.getItem("settings"));
    let initialState;
    if (localSetting){
        initialState = {
            light: localSetting.light,
            font: localSetting.font,
            pageSize: localSetting.pageSize
        }
    }else {
        initialState = {
            light: 'light',
            font: 12,
            pageSize: 20
        }
    }
    const dispatcher = useDispatch();
    const [fontSize, setFontSize] = useState(initialState.font);
    const [lightState, setLightState] = useState(initialState.light)
    const [pageSize, setPageSize] = useState(initialState.pageSize);


    useEffect(()=>{
        dispatcher({type: 'CHANGE_SETTING', payload: {light: lightState, font: fontSize, pageSize: pageSize}})
        let JSONSettings = JSON.stringify({light: lightState, font: fontSize, pageSize: pageSize})
        localStorage.setItem("settings", JSONSettings)
    }, [fontSize, lightState, pageSize])
    return (
        <Container fluid={true} className={'settingPage'}>
            <Row>
                <Col md={12}>
                    <div className={'mt-5 text-center d-flex justify-content-center align-items-center flex-column'}>
                        <div>
                            Размер шрифта:
                        </div>
                        <div>
                            <Form.Control value={fontSize} onChange={(event)=>{setFontSize(event.target.value)}} type={'number'} className={'w-auto search'}/>
                        </div>
                    </div>
                    <hr/>
                    <div className={'mt-5 text-center d-flex justify-content-center align-items-center flex-column'}>
                        <div>
                            Выберите тему:
                        </div>
                        <div className={'d-flex flex-row'}>
                            <div className={'me-4'}>Светлая тема</div>
                                <Form.Check
                                    onChange={(e)=>{
                                        console.log(e.target.checked)
                                        if (lightState == 'dark'){
                                            setLightState('light');
                                        }else{
                                            setLightState('dark');
                                        }
                                    }}
                                    checked={localSetting.light == "light"?false:true}
                                    type="switch"
                                    id="custom-switch"

                                />
                            <div className={'ms-4 '}>Темная тема</div>
                        </div>

                    </div>
                    <hr/>
                    <div className={'mt-5 text-center d-flex justify-content-center align-items-center flex-column'}>
                        <div>
                            Выберите колличество новостей на странице:
                        </div>
                        <div>
                            <Form.Control value={pageSize} onChange={(event)=>{setPageSize(event.target.value)}} type={'number'} min={'20'} max={'30'} inputmode={"numeric"}  className={'w-auto search'}/>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default SettingPage;