import React from "react";
import { Grid, Segment, Button, Header } from "semantic-ui-react";
import "./index.css";
const ProjectColumn = props => {
  const { colour, data, title } = props;

  return (
    <Grid.Column className="task-column-container">
      <Segment.Group>
        <Segment padded color={colour}>
          <Grid columns={16}>
            <Grid.Column width={10} className="column-header">
            <Header>
              <h3 className="column-header">{title}</h3>
            </Header>
            </Grid.Column>
            <Grid.Column width={6}>
            <Button size="tiny" content="10 tasks" floated="right" />
            </Grid.Column>
          </Grid>
          
         
        </Segment>
        <Segment.Group className="task-column">
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={16}>
              <Grid.Column width={10}>
                <p>this is just a testst to see if it wraps</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button icon="pencil" floated="right" />
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
      </Segment.Group>
    </Grid.Column>
  );
};

export { ProjectColumn };
