const ethers = require('ethers');  
const crypto = require('crypto')
import React from 'react';
import {View,Text} from 'react-native';

export default function AddressGen({props}) {
    var privateKey = "0x"+props.params()
    var wallet = new ethers.Wallet(privateKey)
  return (
    <View>
        <Text>{wallet}</Text>
    </View>
  )
}
