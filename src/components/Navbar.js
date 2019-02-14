import React, { Component } from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Navbar extends Component {

    state = { activeItem: 'dashboard' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() { 
        const { activeItem } = this.state
        return (
            <Menu size='huge' color="violet" inverted secondary>
                <Menu.Item color="olive">
                <Icon name="dolly" />
                 <strong>Trench</strong>
                </Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item name="dashboard" active={activeItem === 'dashboard'} onClick={this.handleItemClick} as={ Link } to="/">
                    <Icon name="dashboard" />
                    Dashboard
                </Menu.Item>
                
                <Menu.Item name ="projects" active={activeItem === 'projects'} onClick={this.handleItemClick} as={ Link } to="/projects">
                <Icon name="folder outline" />
                Projects
                </Menu.Item>
     
               <Menu.Item>
                 <Button color="blue">Sign Up</Button>
               </Menu.Item>
             </Menu.Menu>
           </Menu>
    );
    }

}

export default Navbar;