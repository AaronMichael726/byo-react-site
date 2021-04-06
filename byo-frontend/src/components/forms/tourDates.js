import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useState } from 'react'
import TourDates from '../tourDates'

function TourForm() {

    const [tourDates, setTourDates] = useState([{
        city: "Sample",
        state: "CO",
        date: "12/03/2021",
        venue: "Comedy Works",
        description: "Featuring for Derrick Stroupe"
    }])
    const [display, setDisplay] = useState(true)
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [date, setDate] = useState("")
    const [venue, setVenue] = useState("")
    const [description, setDescription] = useState("")
    const [buttonText, setButtonText] = useState("See your website text!")

    const hCity = (e) => setCity(e.target.value)
    const hState = (e) => setState(e.target.value)
    const hDate = (e) => setDate(e.target.value)
    const hVenue = (e) => setVenue(e.target.value)
    const hDescription = (e) => setDescription(e.target.value)

    const hSubmit = () => {

        setTourDates([
            ...tourDates,
            {
                city: city,
                state: state,
                date: date,
                venue: venue,
                description: description
            }
        ])
        

        console.log(tourDates)

        display ? setDisplay(false) : setDisplay(true)
        display ? setButtonText("See your website!") : setButtonText("Personalize!")
    }

    const hSubmitTwo = () => {

            setTourDates([
                ...tourDates,
                {
                    city: city,
                    state: state,
                    date: date,
                    venue: venue,
                    description: description 
                }
            ])

        document.getElementById('reset-form').reset()
    }

    return (
        display ?
            <>
                
                { tourDates.map(({city, state, date, venue, description}) => 
                    
                
                    <TourDates
                        city={city}
                        state={state}
                        date={date}
                        venue={venue}
                        description={description}
                    />
                )
                }

                < footer >
                    <Button type='submit' fluid onClick={hSubmit} style={{
                        width: '50%',
                        opacity: '35%'
                    }

                    }>{buttonText}</Button>
                </footer >
            </>
        :
        <>
            <Form id="reset-form">
                <Form.Group>
                    <Form.Input placeholder="City" width={6} onChange={hCity} />
                    <Form.Input placeholder="State" width={2} onChange={hState} />
                </Form.Group>
                <Form.Group>
                    <Form.Input placeholder="Date MO/DA/YEAR" width={4} onChange={hDate} />
                    <Form.Input placeholder="Venue" width={4} onChange={hVenue} />
                </Form.Group>
                <Form.Group>
                    <Form.Input placeholder="Description" width={8} onChange={hDescription} />
                </Form.Group>
            </Form>

            <footer>
                <Button type='submit' fluid onClick={hSubmit} style={{
                    width: '50%'
                }}>{buttonText}</Button>
                <Button type='submit' fluid onClick={hSubmitTwo} style={{
                    width: '50%'
                }}>Add Another Tour Date</Button>
            </footer>
        </>
    )
}

export default TourForm