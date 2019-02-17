import React, { Component } from 'react';
import { Container, Header, Grid, Button, Icon } from 'semantic-ui-react';
import { EmptyMessage, ProjectCard } from './common';

const data = {
    title: "Social App",
    subject: "Tech",
    description: "Project dedicated to tech aroasdfasdfasdf asdfasdf asdf asdfas dfasund the world "
}

const data2 = {
    title: "Social App",
    subject: "Tech",
    description: "Project dedicated"
}

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
                <Grid columns={2} style={{marginTop: 30}}>
                <Grid.Column textAlign="left">
                <Header as="h1" color="grey" content="Dashboard" icon="dashboard" />
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <Button color="blue" size="small">
                        <Icon name="plus"/>
                            Create Project
                        </Button>
                    </Grid.Column>
                </Grid>
                <Header as="h3" color="grey" content="Your Projects" icon="grey folder" />
                <Grid columns={4}>
              
                    <Grid.Column textAlign="left">
                       <ProjectCard project_data={data}/>
                    </Grid.Column>
                    <Grid.Column textAlign="left">
                       <ProjectCard project_data={data2}/>
                    </Grid.Column>
                    <Grid.Column textAlign="left">
                       <ProjectCard project_data={data}/>
                    </Grid.Column>
                    <Grid.Column textAlign="left">
                       <ProjectCard project_data={data2}/>
                    </Grid.Column>
                    <Grid.Column textAlign="left">
                       <ProjectCard project_data={data}/>
                    </Grid.Column>
                    <Grid.Column textAlign="left">
                       <ProjectCard project_data={data2}/>
                    </Grid.Column>
                
                  
                </Grid>
            </Container>
        )   
    }
}

export default Dashboard;