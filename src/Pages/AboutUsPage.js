import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";

const AboutUsPage = () => {
    return (
        <YMaps>
            <div>
                Легко найти!
                <Map width={`${100}%`} height={`${500}px`} defaultState={{ center: [	44.6906, 37.7915], zoom: 17 }}>

                        <Placemark geometry={[	44.6906, 37.7915]} />
                    </Map>

            </div>
        </YMaps>
    );
};

export default AboutUsPage;