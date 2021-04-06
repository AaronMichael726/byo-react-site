import { findByLabelText } from '@testing-library/dom'
import React from 'react'
import { Image, Grid, Header } from 'semantic-ui-react'
import phoneIcon from '../images/phone3.png'
import emailIcon from '../images/emailIcon.png'

const Contact = ({ areaCode, second, last, email}) => (

    <>
        <Grid>
            <Grid.Column width={2}>
                <Image circular src={phoneIcon} />
            </Grid.Column>
            <Grid.Column width={4} style={{
                margin: '35px 0px 0px'
            }}>
                <Header size='huge'>({areaCode}) {second}-{last}</Header>
            </Grid.Column>
        </Grid>

        <Grid>
            <Grid.Column width={2}>
                <Image circular src={emailIcon} />
            </Grid.Column>
            <Grid.Column width={4} style={{
                margin: '35px 0px 0px'
            }}>
                <Header size='huge'>{email}</Header>
            </Grid.Column>
        </Grid>
    </>
)

export default Contact