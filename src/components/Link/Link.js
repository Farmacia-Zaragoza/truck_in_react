import React from 'react';
import { Grid } from 'semantic-ui-react';
import './Link.css';
import LinkItem from './LinkItem.js';

export default function Link() {
    return (
        <Grid columns="equal" style={{
            marginTop: '50px'
        }}>
            <Grid.Row>
                <Grid.Column className="link">
                    <LinkItem linkName="Other Link" position="top left" />
                </Grid.Column>
                <Grid.Column className="link">
                    <LinkItem linkName="Photocasa" position="top right"  />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
