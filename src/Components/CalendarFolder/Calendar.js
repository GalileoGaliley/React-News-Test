import React, {useEffect} from 'react';

const Calendar = ({func, value}) => {
    const week = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС',];
    let newDate = new Date();
    let arrW = [1,2,3,4,5];
    let arrD = [null,null,null,1,2,3,4];
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let day = newDate.getDate();
    let dayInWeek = newDate.getDay();
    useEffect(()=>{func()},[])
    function daysInMonth (month, year) {
        return new Date(year, month+1, 0).getDate();
    }
    let start = ()=>{
        let dayArr = [];
        let i;
        let j;
        let weeks = Math.floor(day / 7);

        if (weeks >= 1){
            j = dayInWeek;
            i = day - (weeks * 7);
            for (let r = 0; r < i; r++){
                if (j < 0){
                    j = 6;
                }
                j -= 1;
            }
            for (let i = 0; i < j; i++ ){
                dayArr.push(null)
            }
            for (let i = 1; i <= daysInMonth(month, year); i++ ){
                dayArr.push(i)
            }
            dayArr = [];

            let dec = j;
            let inc = 1;
            for (let i = 0; i < 5; i++){
                let a = [];

                for (let k = 0;k < 7; k++){
                    if (dec > 0){
                        a.push({num: null, dayClass:'noThis'});
                        dec--;
                    }else if (inc <= daysInMonth(month,year)) {
                        let objDay = {num: inc, dayClass:'noThis', date: new Date(year, month, inc+1).toISOString()}
                        if (day == inc){
                            objDay.dayClass = 'dayNow';
                        }
                        a.push(objDay);
                        inc++;
                    }
                }
                dayArr.push(a);
            }
            return dayArr
        }

    }

    return (
        <table className="calendar">
            <thead>
                <tr>
                    {week.map((name)=>
                        <td className={'text-center'} key={name} >{name}</td>
                    )}
                </tr>
            </thead>
            <tbody>
                {start().map((item)=><tr className={'week'}>{item.map((item, index)=><td key={index} onClick={()=>{func(item.date)}} className={`dayInWeek ${item.dayClass}`}>{item.num}</td>)}</tr>)}
            </tbody>
        </table>
    );
};

export default Calendar;