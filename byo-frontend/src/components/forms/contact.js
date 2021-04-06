import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import { useState } from 'react'
import Contact from '../contact'

function ContactForm() {

    // Values Stored in state
    const [areaCode, setAreaCode] = useState('XXX')
    const [second, setSecond] = useState('XXX')
    const [last, setLast] = useState('XXXX')
    const [email, setEmail] = useState('aaron@comedian.com')
    const [display, setDisplay] = useState(true)
    const [buttonText, setButtonText] = useState("See your website text!")

    function handleArea(e) {
        setAreaCode(e.target.value)
        console.log(areaCode)
    }
    function handleSecond(e) {
        setSecond(e.target.value)
        console.log(second)
    }
    function handleLast(e) {
        setLast(e.target.value)
        console.log(last)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
        console.log(last)
    }

    function handleSubmit() {
        display ? setDisplay(false) : setDisplay(true)
        display ? setButtonText("See your website!") : setButtonText("Personalize!")
        console.log(display)
    }


    console.log(display)

    return (

        display ?
            <>
                <Contact
                    areaCode={areaCode}
                    second={second}
                    last={last}
                    email={email}
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
                <Form>
                    <Form.Group inline style={{
                        width: '50%'
                    }}>
                        <Form.Field>
                            <Input placeholder='(xxx)' onChange={handleArea} />
                        </Form.Field>
                        <Form.Field>
                            <Input placeholder='xxx' onChange={handleSecond} />
                        </Form.Field>
                        <Form.Field>
                            <Input placeholder='xxxx' onChange={handleLast} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field style={{
                        width: '50%'
                    }}>
                        <Input placeholder='email' onChange={handleEmail} />
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

export default ContactForm