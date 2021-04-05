import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='tour dates'
                    active={activeItem === 'tour dates'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                />
                
            </Menu>
        )
    }
}