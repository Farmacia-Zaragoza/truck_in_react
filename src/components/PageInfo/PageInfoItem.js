import React, { Component, Fragment } from 'react';
import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../../utils/config.js';

class PageInfoItem extends Component {
    state = {
        showScroll: false
    }
    componentDidMount() {
        if(this.info_text_first.textContent.length >= 10) {
            this.setState({ showScroll: true })
        }
    }
    render() {
        const { item } = this.props;
        return (
            <div className="page_info_item">
                <div className={`page_info_before_hover ${this.state.showScroll && 'before_hover_active'}`}>
                    <ul>
                        <li className="info_text" ref={node => this.info_text_first = node}>{item.name}</li>
                        <li className="clone">:</li>
                        <li className="info_text">{item.value}</li>
                    </ul>
                </div>
                {
                    this.state.showScroll && <div className="page_info_after_hover">
                        <div className="page_info_scroll_right"
                            onMouseEnter={() => horizontalSlideleft(this.page_info_content_scroll)}
                            onMouseLeave={() => stopTabScroll(this.page_info_content_scroll)}
                        >
                            <i className="fas fa-angle-left"></i>
                        </div>
                        <div className="page_info_content_scroll" ref={node => this.page_info_content_scroll = node}>
                            <p>{item.name} {':'} {item.value}</p>
                        </div>
                        <div className="page_info_scroll_left"
                            onMouseEnter={() => horizontalSlideRight(this.page_info_content_scroll)}
                            onMouseLeave={() => stopTabScroll(this.page_info_content_scroll)}
                        >
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default PageInfoItem;
