import './App.css';
import sample from './images/rando-comedian.jpeg'
import { Header, Menu, Container } from 'semantic-ui-react'
import Home from './components/home'
import TourDates from './components/tourDates'
import Contact from './components/contact'
import HomeForm from './components/forms/home' 

import { useState } from 'react'

function App() {

    let bodyText = <Home />
    const [activeItem, setActiveItem] = useState("home")  
    const [form, setForm] = useState(false)  


    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }

    const changeForm = () => {
        form ? setForm(false) : setForm(true)
    }

    if (activeItem === "home"){
        bodyText = <HomeForm />
    } else if (activeItem === "tour dates"){
        bodyText = <TourDates />
    } else if (activeItem === "contact"){
        bodyText = <Contact />
    }


    return (
        <Container center
            style={{
                backgroundImage: `url(${sample})`,
                height: '100vh',
                width: '100%',
                backgroundRepeat: 'no-repeat',
            }}>

            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='tour dates'
                    active={activeItem === 'tour dates'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={handleItemClick}
                />
            </Menu>

            {bodyText}
        </Container>

    )
}

export default App;

