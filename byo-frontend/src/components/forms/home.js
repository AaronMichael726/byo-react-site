import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useState } from 'react'
import Home from '../home'

function HomeForm({ form }) {

    console.log(form)

    // Values Stored in state
    const [firstName, setFirstName] = useState("Aaron")
    const [lastName, setLastName] = useState("Hernandez")
    const [type, setType] = useState("Stand Up Comedian")
    const [display, setDisplay] = useState(true)
    const [buttonText, setButtonText] = useState("See your website text!")

    function handleFirstName(e){
        setFirstName(e.target.value)
        console.log(firstName)
    }
    function handleLastName(e){
        setLastName(e.target.value)
        console.log(lastName)
    }
    function handleType(e){
        setType(e.target.value)
        console.log(type)
    }

    function handleSubmit() {
        display ? setDisplay(false) : setDisplay(true)
        display ? setButtonText("See your website!") : setButtonText("Personalize!")
        console.log(display)
    }


    console.log(display)

    return(

        display ?
        <>
            <Home 
                firstName={firstName}
                lastName={lastName}
                type={type}
            />

            <footer>
                <Button type='submit' fluid onClick={handleSubmit} style={{
                    width: '50%',
                    opacity: '35%'
                }

                }>{buttonText}</Button>
            </footer>
        </>
        :
            <>
                <Form style={{
                    width: '50%'
                }}>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' onChange={handleFirstName} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' onChange={handleLastName} />
                    </Form.Field>
                    <Form.Field>
                        <label>Artist Type</label>
                        <input placeholder='ex. Stand Up Comedian' onChange={handleType}/>
                    </Form.Field>
                </Form>

                <footer>
                <Button type='submit' fluid onClick={handleSubmit} style={{
                    width: '50%'
                }}>{buttonText}</Button>
                </footer>
            </>
    )
}

export default HomeForm