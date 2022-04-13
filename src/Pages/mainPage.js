import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import NewCard from "../Components/NewCard";
import {fetchNews} from "../HTTP/NewsAPI";
import Preloader from "../Components/Preloader";

const MainPage = () => {
    const [req, setReq] = useState(true)
    const dispatcher = useDispatch();
    const store = useSelector((state)=> {
        return state
    })
    useEffect(()=>{
        document.addEventListener('scroll', scrolling)
        return ()=> document.removeEventListener('scroll',scrolling)
    },[])
    useEffect(()=>{
        if (req){
            let criteriaObj = store.criteria;
            criteriaObj.pageSize = store.setting.pageSize
            console.log(criteriaObj)
            fetchNews(criteriaObj).then((data)=>{
                dispatcher({type: 'FETCH_NEWS', payload: data.articles});
                dispatcher({type: 'CHANGE_CRITERIA'});

                setReq(false)
            })
        }

    }, [req])
    const scrolling = (e)=>{
        let scrollHeight = e.target.documentElement.scrollHeight;
        let scrollTop = e.target.documentElement.scrollTop;
        let innerHeight = window.innerHeight
        if (scrollHeight - (innerHeight + scrollTop) < 200) {
            setReq(true)
        }

    }
    return (
        <>
            {store.news.news.length?store.news.news.map((item, index)=>{
                return <NewCard key={item.publishedAt} New={item} />
            }):<Preloader />}

        </>
    );
};

export default MainPage;