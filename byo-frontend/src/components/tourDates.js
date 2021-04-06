import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const TourDates = (props) => (
    <Segment inverted style={{
        width: '45%',
        opacity: '75%'
    }}>
        <List divided inverted relaxed>
            <List.Item >
                <List.Icon name='marker' />
                <List.Content >
                    <List.Header as='a'>{props.city}, {props.state}</List.Header>
                    <List.Header as='a'>{props.date} | {props.venue}}</List.Header>
                    <List.Description>{props.description}</List.Description>
                </List.Content>
            </List.Item>
        </List>
    </Segment>
)

export default TourDates