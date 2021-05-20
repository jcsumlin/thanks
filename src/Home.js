import React from 'react';
import {Button, ButtonGroup, Grid, Paper, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core"

import Confetti from "react-confetti";
import Crypto from "./Crypto/Crypto";
import Sponsors from "./Sponsors";
import './App.css'

library.add(fab)


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      config: {},
      width: 0,
      height: 0
    }
    this.getData = this.getData.bind(this);
  }

  getData() {
    let vm = this
    fetch('config.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let buttons = this.generateButtons(data)
        vm.setState({
            config: data,
            buttons: buttons
          }
        )
      })
  }

  generateButtons(data) {
    let buttons = [];
    Object.entries(data.buttons).map(([key, value]) => {
      return buttons.push(
        (<Button
          variant={'text'}
          href={value}
          startIcon={<FontAwesomeIcon icon={['fab', key]}/>}
        >
          {key}
        </Button>)
      )
    })
    return buttons
  }

  updateDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  };

  componentDidMount() {
    this.getData()
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div className={'centered-wrapper'}>
        <Paper elevation={3} className={'main'}>
          <Typography variant="h2" component="h1">{this.state.config.h1}</Typography>
          <Typography>
            {this.state.config.caption}
          </Typography>
          <div style={{margin: '15px 0'}}>
            <b>Want to support my work?</b>
            <ButtonGroup orientation={'vertical'} fullWidth style={{margin: '15px 0'}}>
              {this.state.buttons}
            </ButtonGroup>
            <Crypto data={this.state.config.crypto}/>
          </div>
          <Grid container>
            {this.state.config.sponsors ? <Sponsors sponsors={this.state.config.sponsors} text={this.state.config.sponsor_text}/> : null}
          </Grid>
        </Paper>
        <Confetti
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
