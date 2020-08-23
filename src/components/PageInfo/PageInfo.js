import React, { Component } from 'react';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../utils/config.js';
import { Dimmer } from 'semantic-ui-react';
import PageInfoItem from './PageInfoItem.js';

class PageInfo extends Component {
    state = {
        page_info: {
            server: {
                name: 'Server',
                value: 'vbrqx'
            },
            load: {
                name: 'Load',
                value: '100ms'
            },
            env: {
                name: 'Env',
                value: 'Dev'
            },
            page_type: {
                name: 'Page Type',
                value: 'script'
            },
            cache: {
                name: 'Cache',
                value: 'nocache'
            },
            backend_language: {
                name: 'Backend Language',
                value: 'node.js'
            },
            frontend_language: {
                name: 'Frontend Language',
                value: 'React.js'
            },
            memory: {
                name: 'Memory',
                value: '37.99Mb'
            },
            tas: {
                name: 'Tas',
                value: '19.49Gb'
            },
            max: {
                name: 'Max',
                value: '31.32Gb'
            }
        }
    }



    render() {
        const renderItems = Object.keys(this.state.page_info).map((item, index) => <PageInfoItem key={index} item={this.state.page_info[item]} />)
        return (
            <div className="page_info_wrapper">
                <div className="page_info_inner">
                    <Dimmer active={this.props.active} onClickOutside={this.props.handleClose} page>

                    </Dimmer>
                    <div className="page_info_scroll_down"
                        onMouseEnter={() => verticalSlideDown(this.page_info_scroll)}
                        onMouseLeave={() => stopTabScroll(this.page_info_scroll)}
                    >
                        <i className="fas fa-angle-up"></i>
                    </div>
                    <div className="page_info_scroll" ref={node => this.page_info_scroll = node}>
                        {renderItems}
                    </div>
                    <div className="page_info_scroll_up"
                        onMouseEnter={() => verticalSlideUp(this.page_info_scroll)}
                        onMouseLeave={() => stopTabScroll(this.page_info_scroll)}
                    >
                        <i className="fas fa-angle-down"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageInfo;
