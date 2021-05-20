import React, {Component} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsors: {},
      text: ""
    }
  }

  componentDidMount() {
    this.setState({sponsors: this.props.sponsors, text: this.props.text})
  }

  render() {
    return (
      <div style={{marginTop: '2em'}}>
        <Typography variant={'p'}>{this.state.text}</Typography>
        <div style={{marginTop: '2em', fontSize: '1.25em'}}>
          {Object.entries(this.state.sponsors).map(([key, value], i) => {
            return (
              <Grid item xs={12}>
                {value.includes('github.com') ? <FontAwesomeIcon icon={['fab', 'github']} size={'lg'}/> : '🎉'}
                <a href={value} style={{marginLeft: '1em', textDecoration: 'none'}}>{key}</a>
              </Grid>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Sponsors;
