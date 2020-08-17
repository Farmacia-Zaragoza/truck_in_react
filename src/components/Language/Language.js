import React, { Component } from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { horizontalSlideleft, horizontalSlideRight, stopTabScroll } from '../../utils/config.js';
import './Language.css';
import GetImage from './GetImage.js';

class Language extends Component {

    state = {
        flags: [
            'brqx_flag_bangladesh_2016_320_200',
            'brqx_flag_china_2016_320_200',
            'brqx_flag_england_2016_320_200',
            'brqx_flag_france_2016_320_200',
            'brqx_flag_germany_2016_320_200',
            'brqx_flag_india_2016_320_200',
            'brqx_flag_italy_2016_320_200',
            'brqx_flag_japan_2016_320_200',
            'brqx_flag_portugal_2016_320_200',
            'brqx_flag_rusia_2016_320_200',
            'brqx_flag_spain_2016_320_200',
            'brqx_flag_ukraine_2016_320_200'
        ],
        domain: 'http://truck.vbrqx.com/dev/img'
    }

    renderLanguageFlags = () => (
        this.state.flags.map((flag, index) => (
            <GetImage
                key={index}
                domain={this.state.domain} 
                flag={flag} 
                index={index} 
                lengthOfFlags={this.state.flags.length-1}
            />
        ))
    )
    
    render() {
        let iconSize = 'big';
        if(window.innerWidth <= 8000 && window.innerWidth > 3000 ) {
            iconSize = 'massive';
        }
        if(window.innerWidth <= 3000 && window.innerWidth > 1300 ) {
            iconSize = 'huge';
        }
        if(window.innerWidth <= 1300) {
            iconSize = 'big';
        }
        return (
            <div className="language_wrapper">
                <div className="handleLeft"
                    onMouseEnter={() => horizontalSlideleft(this.language_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.language_inner_scroll)}
                >
                    <Icon name='chevron circle left' size={iconSize} />
                </div>
                <div className="language_inner_scroll" ref={node => this.language_inner_scroll = node}>
                    {this.renderLanguageFlags()}
                </div>
                <div className="handleRight"
                    onMouseEnter={() => horizontalSlideRight(this.language_inner_scroll)}
                    onMouseLeave={() => stopTabScroll(this.language_inner_scroll)}
                >
                    <Icon name='chevron circle right' size={iconSize} />
                </div>
            </div>
        )
    }
}

export default Language;