
import './App.css';
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/mainPage";
import SettingPage from "./Pages/settingPage";
import Footer from "./Components/Footer";

function App  () {

    const store = useSelector((state)=> {
        return state
    })

  return (
    <Container fluid={true} style={{fontSize:`${store.setting.font}pt`}} className={`${store.setting.light}  p-0`}>
        <Header light={store.setting.light} />

        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/setting'} element={<SettingPage/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </Container>
  );
}

export default App;
