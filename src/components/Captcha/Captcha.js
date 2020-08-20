import React, { Component } from 'react';
import { Button, Dimmer, Form, Image, Input } from 'semantic-ui-react';
import './Captcha.css';

class Captcha extends Component {
    state = {
        active: false,
        value: '',
        possibleCharacter: 'abcdefghkmnpqrstuvwxyz123456789',
        defaults: {
            selector: '#captcha',
            text: null,
            randomText: true,
            randomColors: true,
            width: 244,
            height: 163,
            color1: null,
            color2: null,
            font: 'normal 40px "Comic Sans MS", cursive, sans-serif',
            onSuccess: () => {
                // redirectPage();
                console.log('success')
            },
            onFailure: () => {
                console.log('wrong')
            }
        },
        isMatch: null,
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.createCaptha();
            this.captcha();
        })
    }

    handleOpen = () => {
        this.setState({ active: true });
    }
    handleClose = () => this.setState({ active: false })
    handleChange = (e) => this.setState({ value: e.target.value });

    handleSubmit = (e) => {
      e.preventDefault();
      const { value, defaults } = this.state;
      if(value === defaults.text) {
          defaults.onSuccess();
          this.setState({ isMatch: true });
      }else {
        defaults.onFailure();
        this.setState({ isMatch: false });
      }
      
    }

    createCaptha = () => {
		// create canvas 
		var canvas = document.createElement('canvas');
			canvas.setAttribute('width', 244);
			canvas.setAttribute('height', 163);
			canvas.id = 'canvas_id';
		var capchaEle = document.getElementById('captcha');
		//capchaEle.insertAdjacentHTML('afterbegin','<div>'+canvas+'</div>' );
		if(capchaEle) {
            capchaEle.children[0].appendChild(canvas);
        }
		//console.log(capchaEle);
    }
    
    captcha = () => {
        const { defaults } = this.state;
		//generate random text, color, curve
		if(defaults.text === null || defaults.text === '') {
            defaults.randomText = true;
            this.setState({  defaults });
		}
		if(defaults.randomText) {
			this.generateRandomText();
		}
		if(defaults.randomColors) {
			defaults.color1 = this.generateRandomColor();
            defaults.color2 = this.generateRandomColor();
            this.setState({  defaults });
		}

		var canvas_id = document.getElementById('canvas_id');
        //console.log(canvas_id);
        if(canvas_id) {
            let context = canvas_id.getContext('2d');
            //console.log(context);
            var gradient1 = context.createLinearGradient(0, 0, defaults.width, 0);
            //console.log(gradient1);
            gradient1.addColorStop(0, defaults.color1);
            gradient1.addColorStop(1, defaults.color2);

            context.fillStyle = gradient1;
            context.fillRect(0, 0, defaults.width, defaults.height);

            context.fillStyle = "rgba(255,255,255,0.65)";
            context.fillRect(0, 0, defaults.width, defaults.height);

            var gradient2 = context.createLinearGradient(0, 0, defaults.width, 0);
            gradient2.addColorStop(0, defaults.color1);
            gradient2.addColorStop(1, defaults.color2);

            context.font = defaults.font;
            context.fillStyle = gradient2;

            context.setTransform((Math.random()/10)+0.9,
                0.1 - (Math.random()/5),
                0.1 - (Math.random()/5),
                (Math.random()/10)+0.9,
                (Math.random()*20)+10,
                100);
            context.fillText(defaults.text, 0, 0);
            context.setTransform(1, 0, 0, 1, 0, 0);
            var numRandomCurves = Math.floor((Math.random() * 3) + 5);
            for (var i = 0; i < numRandomCurves; i++) {
                this.drawRandomCurve();
            }
        }
		
    }
    
    //generateRandomText
    generateRandomText = () => {
        const { defaults, possibleCharacter } = this.state;
        defaults.text = '';
        var length = 5; // Math.floor((Math.random()*3)+6)
        for(var i=0; i<length; i++) {
            var num = Math.random()* possibleCharacter.length;
            defaults.text += possibleCharacter.charAt(num);
        }
        console.log(defaults.text);
        this.setState({  defaults });
    }
    //generateRandomColor
    generateRandomColor = () => {
        var rgbNum = Math.floor((Math.random()*255));
        var rgbaColor = 'rgb('+rgbNum+','+rgbNum+','+rgbNum+')';
        return rgbaColor;
    }

    //drawRandomCurve
    drawRandomCurve = () => {
        const { defaults } = this.state;
        var canvas_id = document.getElementById('canvas_id');
        var ctx = canvas_id.getContext('2d');	
        var gradient1 = ctx.createLinearGradient(0, 0, defaults.width, 0);
        gradient1.addColorStop(0, Math.random() < 0.5 ? defaults.color1 : defaults.color2);
        gradient1.addColorStop(1, Math.random() < 0.5 ? defaults.color1 : defaults.color2);
        ctx.lineWidth = Math.floor((Math.random() * 4) + 2);
        ctx.strokeStyle = gradient1;
        ctx.beginPath();
        ctx.moveTo(Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)));
        ctx.bezierCurveTo(Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)),
            Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)),
            Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)));
        ctx.stroke();
    }
  
    // refresh
    handleRefresh = () => {
        this.captcha();
    }

    render() {
      const { active, value, defaults, isMatch } = this.state;
        console.log(isMatch)
      return (
        <div>
          <Button className="captcha_button" style={{ 
                background: '#34ccff',
                position: 'fixed',
                right: 10,
                bottom: 10,
                zIndex: 99999
            }}>
              <Image 
                rounded
                src="http://truck.vbrqx.com/dev/img/symbols/message_icon.svg"
                onMouseEnter={this.handleOpen}
              />
          </Button>
  
          <Dimmer active={active} onClickOutside={this.handleClose} page>

          </Dimmer>
            {/* captcha  | chat section */}
            <div className="captcha_chat" style={{
                opacity: active ? 1 : 0,
                visibility: active ? 'visible': 'hidden'
            }}>
                <div className="captcha_container">
                    <div className="media_left">
                        <img src="http://truck.vbrqx.com/dev/img/captcha/truck_cartoon.svg" alt="truck_cartoon" />
                    </div>
                    <div className="media_body">
                        <p className="security">Securty Check:</p>
                        <p className="why_captcha">Just in case you are a robot</p>
                    </div>
                    <div id="captcha">
                        <div>
                            {/* <canvas width="244" height="163" /> */}
                        </div>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Field>
                            <Input 
                                placeholder='Type here..'
                                value={value}
                                onChange={this.handleChange}
                                style={{ width: 150 }}
                                className="captcha_input"
                            />
                        </Form.Field>
                        <Form.Button as="span" className="captcha_btn" onClick={this.handleSubmit}>
                            <Image 
                                src="http://truck.vbrqx.com/dev/img/captcha/enter_icon.svg"
                                style={{ width: 25 }}
                            />
                        </Form.Button>
                        <Form.Button as="span" className="captcha_btn refresh" onClick={this.handleRefresh}>
                            <Image 
                                src="http://truck.vbrqx.com/dev/img/captcha/refresh_icon.svg"
                                style={{ width: 25 }}
                            />
                        </Form.Button>
                    </Form.Group>
                    </Form>
                    {isMatch === false && <p style={{ color: 'red' }}>Wrong!, please try again.</p>}
                    {isMatch === true && <p className="redirecting info">Redirecting... Hold on</p>}
                    {/* <p className="captcha_loading info">Loading... Hold on</p> */}
                </div>
            </div>
        {/* captcha_chat ends here */}
        </div>
      )
    }
}

export default Captcha;
