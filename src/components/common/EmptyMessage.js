import React from 'react';
import { Message } from 'semantic-ui-react';

const EmptyMessage = (props) => {

    const { visible, removeMessage } = props;


    if(visible) {
        return (
            <Message onDismiss={removeMessage}>
            <Message.Header>No projects!</Message.Header>
            <p>
                We noticed that you don't have any projects. Click the <strong>Create Project</strong> button
                to get started.
            </p>
          </Message>
        );
    } else {
        return null;
    }

   


}

export {EmptyMessage};