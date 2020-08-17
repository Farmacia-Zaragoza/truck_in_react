import React from 'react';
import { Image } from 'semantic-ui-react';

export default function GetImage({ domain, flag, index, lengthOfFlags }) {
    let imageSize = 'small';
    if(window.innerWidth > 4000) {
        imageSize = "large"
    }
    if(window.innerWidth <= 4000 && window.innerWidth > 3000) {
        imageSize = "medium"
    }
    if(window.innerWidth <= 3000 && window.innerWidth > 1300) {
        imageSize = "small"
    }
    if(window.innerWidth <= 1300 ) {
        imageSize = "tiny"
    }
    return (
        <Image
            as="a"
            href="#"
            src={`${domain}/flags/${flag}.svg`}
            title="Tolpit dummy text"
            style={{
                marginRight: lengthOfFlags === index ? '0px' : '10px'
            }}
            size={imageSize}
        />
    )
}
