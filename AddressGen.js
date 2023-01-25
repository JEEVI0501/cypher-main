import React from 'react';
import {View,Text} from 'react-native';
var ethers = require('ethers');  
var crypto = require('crypto')
export default function AddressGen({props}) {
    var privateKey = "0x"+props.params()
    var wallet = new ethers.Wallet(privateKey)
  return (
    <View>
        <Text>{wallet}</Text>
    </View>
  )
}
