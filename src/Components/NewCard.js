import React from 'react';
import {Col, Row} from "react-bootstrap";

const NewCard = ({New}) => {
    let date = new Date(New.publishedAt);

    return (

            <div className={'w-100 d-flex justify-content-center'}>
                <a href={New.url} className={'linkToSource mt-5 w-100'}>
                    <Row className={'newCard m-auto'}>

                        {New.urlToImage?
                            <Col md={3} className={'newCardImage'}>
                                <img src={New.urlToImage}/>
                            </Col>
                            :
                            <></>
                        }

                        <Col md={9} className={'newCardText'}>
                            <h5 className={'newCardTitle'}>
                                {New.title}

                            </h5>
                            <div  className={'newCardDescription mb-5'}>
                                {New.description}
                            </div>
                            <div className={'publishedAt'}>
                                Опубликовано: {date.toISOString().substring(0, 10)}
                            </div>
                        </Col>

                    </Row>
                </a>
            </div>

    );
};

export default NewCard;