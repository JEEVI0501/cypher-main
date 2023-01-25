//const ethers = require('ethers');  
//const crypto = require('crypto')

import React,{useState} from 'react';
import {View,Text} from 'react-native';

export default function AddressGen({props}) {
    //var privateKey = "0x";
    //var wallet = new ethers.Wallet(privateKey);
    const [addressData,setaddressData] = useState()
    // addressData = ethWallet.fromMasterSeed(props.param);
  return (
    <View>
        <Text>addressData</Text>
    </View>
  )
}
