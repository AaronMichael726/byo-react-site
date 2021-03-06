import '../App.css';
import sample from '../images/mountain.jpeg'
import { Menu, Container, Button } from 'semantic-ui-react'
// import HomeForm from './forms/home'
// import TourForm from './forms/tourDates'
// import ContactForm from './forms/contact'
// import Home from './home'
import HomeForm from './professional/forms/home'

import { useState } from 'react'

function ProfessionalMain() {

    let bodyText = <HomeForm />
    const [activeItem, setActiveItem] = useState("home")  

    // const handleItemClick = (e, { name }) => {
    //     setActiveItem(name)
    // }

    // if (activeItem === "home"){
    //     bodyText = <HomeForm />
    // } else if (activeItem === "services"){
    //     bodyText = <TourForm />
    // } else if (activeItem === "contact"){
    //     bodyText = <ContactForm />
    // }


    return (
        <>
        <Container center
            style={{
                backgroundImage: `url(${sample})`,
                height: '100vh',
                width: '100%',
                backgroundRepeat: 'no-repeat',
            }}>

            <Menu secondary style={{
                fontSize: '18px'
            }}>
                <Menu.Item 
                    name='home'
                    active={activeItem === 'home'}
                    // onClick={handleItemClick}
                    />
                <Menu.Item
                    name='services'
                    active={activeItem === 'services'}
                    // onClick={handleItemClick}
                />
                <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    // onClick={handleItemClick}
                />
            </Menu>

            {bodyText}
        </Container>
        </>

    )
}

export default ProfessionalMain;

