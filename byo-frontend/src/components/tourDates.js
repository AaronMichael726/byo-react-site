import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const ListExampleDescription = () => (
    <Segment inverted style={{
        width: '45%',
        opacity: '75%'
    }}>
        <List divided inverted relaxed>
            <List.Item >
                <List.Icon name='marker' />
                <List.Content >
                    <List.Header as='a'>Denver, CO</List.Header>
                    <List.Header as='a'>July 3 | Comedy Works</List.Header>
                    <List.Description>Featuring for Brandt Tobler</List.Description>
                </List.Content>
            </List.Item>
            <List.Item >
                <List.Icon name='marker' />
                <List.Content >
                    <List.Header as='a'>Denver, CO</List.Header>
                    <List.Header as='a'>Comedy Works</List.Header>
                    <List.Description>Featuring for Brandt Tobler</List.Description>
                </List.Content>
            </List.Item>
            <List.Item >
                <List.Icon name='marker' />
                <List.Content >
                    <List.Header as='a'>Denver, CO</List.Header>
                    <List.Header as='a'>Comedy Works</List.Header>
                    <List.Description>Featuring for Brandt Tobler</List.Description>
                </List.Content>
            </List.Item>
        </List>
    </Segment>
)

export default ListExampleDescription