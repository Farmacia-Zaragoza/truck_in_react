import React, { Component, Fragment } from 'react';
import PageInfo from './PageInfo.js';
import PageInfoIcon from './PageInfoIcon.js';

export default class PageInfoWrapper extends Component {
    state = {
        active: false
    }

    handleOpen = () => this.setState({ active: true });
    handleClose = () => this.setState({ active: false });

    render() {
        return (
            <Fragment>
                <PageInfoIcon  
                    handleOpen={this.handleOpen}
                />
                {this.state.active && <PageInfo 
                    active={this.state.active} 
                    handleClose={this.handleClose}
                />}
            </Fragment>
        )
    }
}
