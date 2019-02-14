import React, { Component } from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Navbar extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() { 
        const { activeItem } = this.state
        return (
            <Menu size='large' color="grey" inverted secondary>
                <Menu.Item color="olive" inverted>
                <Icon name="dolly" />
                 <strong>Trench</strong>
                </Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} as={ Link } to="/home">
                    <Icon name="home" />
                    Home
                </Menu.Item>
                
                <Menu.Item name ="projects" active={activeItem === 'projects'} onClick={this.handleItemClick} as={ Link } to="/projects">
                <Icon name="folder outline" />
                Projects
                </Menu.Item>
     
               <Menu.Item>
                 <Button color="red">Sign Up</Button>
               </Menu.Item>
             </Menu.Menu>
           </Menu>
    );
    }

}

export default Navbar;