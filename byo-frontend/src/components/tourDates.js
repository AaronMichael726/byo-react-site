import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const TourDates = ({ city, state, date, venue, description }) => (
    <Segment inverted style={{
        width: '45%',
        opacity: '75%'
    }}>
        <List divided inverted relaxed>
            <List.Item >
                <List.Icon name='marker' />
                <List.Content >
                    <List.Header as='a'>{city}, {state}</List.Header>
                    <List.Header as='a'>{date} | {venue}}</List.Header>
                    <List.Description>{description}</List.Description>
                </List.Content>
            </List.Item>
        </List>
    </Segment>
)

export default TourDates