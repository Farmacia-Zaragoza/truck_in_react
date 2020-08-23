import React from 'react';
import './App.css';
import { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

// components
import Header from './components/Header/Header.js';
import MiniTrucks from './components/MiniTrucks/MiniTrucks.js';
import FlexSlider from './components/Slider/Slider.js';
import Language from './components/Language/Language.js';
import Link from './components/Link/Link.js';
import Captcha from './components/Captcha/Captcha';
import PageInfoWrapper from './components/PageInfo/PageInfoWrapper.js';

class App extends Component {
  state = {
    middlecolumn: 0
  }
  componentDidMount() {
    window.addEventListener('resize', () => window.location.reload());
    window.addEventListener('load', () => {
        this.getMiidleColumnHeight();
    });
  }

  getMiidleColumnHeight = () => {
      const middlecolumn  = document.querySelector('body');
      if(middlecolumn) {
        this.setState({ middlecolumn: middlecolumn.clientHeight+300 });
      }
  }


  render() {
    return(
      <Container fluid>
        <PageInfoWrapper />
        <Captcha />
        <Grid columns="equal">
            {window.innerWidth > 767 && <Grid.Column>
                <MiniTrucks middlecolumn={this.state.middlecolumn} />
            </Grid.Column>}
            <Grid.Column width={window.innerWidth > 767 ? 8 : 16} className="middlecolumn">
                <Header />
                <Language />
                <FlexSlider />
                <Link />
            </Grid.Column>
            {window.innerWidth > 767 && <Grid.Column>
                <MiniTrucks middlecolumn={this.state.middlecolumn} />
            </Grid.Column>}
        </Grid>
      </Container>
    );
  }
}

export default App;
