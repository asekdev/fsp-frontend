import React, { Component } from 'react';
import { Container, Header, Grid, Button, Icon } from 'semantic-ui-react';
import { EmptyMessage } from './common';


class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            visible: true
        }
    }

    hideMessage = () => {
        console.log("hitting here")
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <Container>
                <EmptyMessage visible={this.state.visible} removeMessage={this.hideMessage}/>
                <Header as="h1" content="Dashboard" icon="dashboard"/>
                <Grid columns={1}>
                <Grid.Column textAlign="left">
                   <Button color="blue">
                   <Icon name="plus"/>
                    Create Project
                   </Button>
                </Grid.Column>
                </Grid>
            </Container>
        )   
    }
}

export default Dashboard;