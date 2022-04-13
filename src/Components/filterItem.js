import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const FilterItem = ({component, title}) => {
    const [ display, setDisplay] = useState('d-none')
    return (
        <div className={'filterItem'} onClick={()=>{if (display == 'd-none'){setDisplay('d-block')}else {setDisplay('d-none')}}}>
            <div >{title}</div>
            <div className={`filterItemDropdown ${display}`}>
                {component}
            </div>
        </div>


    );
};

export default FilterItem;