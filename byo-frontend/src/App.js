import './App.css';
import { Button } from 'semantic-ui-react'
import ArtistMain from './components/artistMain'


import { useState } from 'react'

function App() {  
    const [form, setForm] = useState(true)  
    const [button, setButton] = useState("Click to See Professional Site Template")

    const changeForm = () => {
        form ? setForm(false) : setForm(true)
        form ? setButton("Click to See Professional Site Template")
            : setButton("Click to See Artist Site Template") 

    }

    return (
        form ?
        <>
            <Button fluid onClick={changeForm}> {button} </Button>
            <ArtistMain />
        </>
        :
        <>
            <h1>Professional Site Template</h1>
        </>

    )
}

export default App;

