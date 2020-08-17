import React from 'react';
import { Header } from 'semantic-ui-react';
import { Popup, Button } from 'semantic-ui-react';

export default function LinkItem({ linkName, position }) {
    let link_padding = '';
    let link_font_size = '';
    if(window.innerWidth > 4000) {
        link_padding = '100px 170px';
        link_font_size = '100px';
    }
    if(window.innerWidth <= 4000 && window.innerWidth > 3000) {
        link_padding = '60px 100px';
        link_font_size = '50px';
    }
    if(window.innerWidth <= 3000 && window.innerWidth > 2000) {
        link_padding = '40px 70px';
        link_font_size = '40px';
    }
    if(window.innerWidth <= 2000 && window.innerWidth > 1400) {
        link_padding = '20px 40px';
        link_font_size = '30px';
    }
    if(window.innerWidth <= 1400) {
        link_padding = '10px 20px';
        link_font_size = '20px';
    }
    return (

        <div className="link_wrapper">
            <div className="popup_class">
                A very long line of text A very long line of text A very long line of text
            </div>
            <Button className="link_style" style={{
                transform: 'skewX(-15deg)',
                display: 'inline-block',
                padding: link_padding,
                border: '2px solid #2ec0f1',
                borderRadius: '7px',
                color: '#2b2b2b',
                backgroundColor: '#34ccff',
                textDecoration: 'none',
                fontSize: link_font_size
            }}>
                {linkName}
            </Button>
        </div>
        
        // <Popup
        //     trigger={}
        //     content='A very long line of text A very long line of text A very long line of text'
        //     on={'click'}
        //     position={position}
        //     className="popup_class"
        //     style={{
        //         background: '#183650',
        //         color: '#fff',
        //         border: 'none'
        //     }}
        //     basic
        // />
    )
}
