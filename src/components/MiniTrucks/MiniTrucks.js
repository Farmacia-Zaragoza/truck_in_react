import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';

class MiniTrucks extends Component {

    state = {
        miniTrucks: [
            'truck_model_001_blue_left',
            'truck_model_001_blue_right',
            'truck_model_001_green_left',
            'truck_model_001_green_right',
            'truck_model_001_orange_left',
            'truck_model_001_orange_right',
            'truck_model_001_red_left',
            'truck_model_001_red_right',
            'truck_model_002_blue_left',
            'truck_model_002_blue_right',
            'truck_model_002_darkblue_left',
            'truck_model_002_darkblue_right',
            'truck_model_002_darkblue_left',
            'truck_model_002_darkblue_right',
            'truck_model_002_pink_left',
            'truck_model_002_pink_right',
            'truck_model_003_green_left',
            'truck_model_003_green_right',
            'truck_model_003_white_left',
            'truck_model_003_white_right',
            'truck_model_004_blue_left',
            'truck_model_004_blue_right',
            'truck_model_004_green_left',
            'truck_model_004_green_right',
            'truck_model_004_orange_left',
            'truck_model_004_orange_right',
            'truck_model_004_red_left',
            'truck_model_004_red_right',
            'truck_model_005_orange_left',
            'truck_model_005_orange_right',
            'truck_model_005_red_left',
            'truck_model_005_red_right',
            'truck_model_005_violet_left',
            'truck_model_005_violet_right'
        ],
        trucksDomainName: 'http://truck.vbrqx.com/dev/img/trucks',
        trucksLightDomainName: 'http://truck.vbrqx.com/dev/img/trucks_light'
    }

    genRandomNumber = () => Math.floor(Math.random() * this.state.miniTrucks.length);

    renderTrucks = () => {
        const { trucksLightDomainName, miniTrucks } = this.state;
        let imageSize = 'small';
        if(window.innerWidth > 4000) {
            imageSize = 'big'
        }
        if(window.innerWidth <= 4000 && window.innerWidth > 2000) {
            imageSize = 'medium'
        }
        if(window.innerWidth <= 2000 && window.innerWidth > 1200) {
            imageSize = 'small'
        }
        return miniTrucks.map((_, index) => {
            const randomNumber = this.genRandomNumber();
            return(
                <Image
                    key={index}
                    src={`${trucksLightDomainName}/${miniTrucks[randomNumber]}.svg`}
                    as='a'
                    size={imageSize}
                    href='#'
                    target='_blank'
                    className={index%2 === 0 ? '' : 'float_right'}
                    onMouseOver={this.getTruckLightOnHover}
                    onMouseLeave={this.getTruckBackOnMouseOut}
                />
            )
        })
    }

    getTruckBackOnMouseOut = event => {
        const imageLink = event.target.src;
        if(imageLink) {
            const lightTruckLink = imageLink.replace('trucks', 'trucks_light');
            event.target.src=lightTruckLink;
        }
    }

    getTruckLightOnHover = event => {
        const imageLink = event.target.src;
        if(imageLink) {
            const lightTruckLink = imageLink.replace('trucks_light', 'trucks');
            event.target.src=lightTruckLink;
        }
    }

    render() {
        // console.log(this.miniTruckNode)
        return (
            <div className="mini_trucks_wrapper" style={{
                height: this.props.middlecolumn,
                overflow: "hidden"
            }}>
                { this.renderTrucks() }
            </div>
        )
    }
}

export default MiniTrucks;