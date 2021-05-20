import React, {Component} from 'react';
import Monero from "./Monero";
import Bitcoin from "./Bitcoin";
import Ethereum from "./Ethereum";

class Crypto extends Component {
  render() {
    let data = Object.assign({}, this.props.data)
    return (
      <>
        <Monero address={data.monero}/>
        <Bitcoin address={data.bitcoin}/>
        <Ethereum address={data.ethereum}/>
      </>
    );
  }
}

export default Crypto;
