import React, { Component } from 'react'
import { Menu, Image, Header } from 'semantic-ui-react';

class MackHeader extends Component {

    state = {
        domain: 'http://truck.vbrqx.com/dev/img/',
        leftLogo: 'brqx_logo_transporteslucasrivera_2017_transparent',
        rightLogo: 'brqx_logo_transporteslucasrivera_2017_transparent_rotated'
    }

    render() {
        const { domain, leftLogo, rightLogo } = this.state;
        let image_size = '';
        if(window.innerWidth < 3000) {
            image_size = 'medium'
        }
        if(window.innerWidth >= 3000 && window.innerWidth < 4000) {
            image_size = 'large'
        }
        if(window.innerWidth >= 4000) {
            image_size = 'huge'
        }
        return (
            <Menu fluid widths={3} style={{ border: 'none', boxShadow: 'none'}}>
                <Menu.Item>
                    <Image
                        src={`${domain}/logos/${leftLogo}.svg`}
                        as='a'
                        size={image_size}
                        href='#'
                    />
                </Menu.Item>
                <Menu.Item>
                    <Header as="p" style={{ fontSize: '1.7vw' }}>交通卢卡斯·里弗拉</Header>
                </Menu.Item>
                <Menu.Item>
                    <Image
                        src={`${domain}/logos/${rightLogo}.svg`}
                        as='a'
                        size={image_size}
                        href='#'
                    />
                </Menu.Item>
            </Menu>
        )
    }
}

export default  MackHeader;