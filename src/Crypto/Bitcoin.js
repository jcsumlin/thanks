import React, {Component} from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Modal from '@material-ui/core/Modal';
import './crypto.css'

class Bitcoin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({open: true})
  }

  closeModal() {
    this.setState({open: false})

  }

  render() {
    if (this.props.address !== false && this.props.address !== "") {
      return (
        <div>
          <Button
            onClick={this.openModal}
            startIcon={<FontAwesomeIcon icon={['fab', 'bitcoin']}/>}
          >
            Bitcoin
          </Button>
          <Modal
            open={this.state.open}
            onClose={this.closeModal}
            aria-labelledby="bitcoin-modal"
          >
            <Paper elevation={3} className={'modal'}>
              <Typography variant="h3" component="h2">Bitcoin</Typography>
              <img
                src={"https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&color=1&prefix=on&address=" + this.props.address}
                height="300" width="300" alt="Bitcoin QR Code"/>
              <Typography href={'bitcoin:' + this.props.address} noWrap component={"a"}>{this.props.address}</Typography>
            </Paper>
          </Modal>
        </div>
      );
    }
    return null;
  }
}

export default Bitcoin;
