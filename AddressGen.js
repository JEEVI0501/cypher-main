//const ethers = require('ethers');  
//const crypto = require('crypto')
const bip39 = require('bip39');
import React,{useState} from 'react';
import { useEffect } from 'react';
import {View,Text} from 'react-native';

export default function AddressGen({props}) {
    const [addressData,setaddressData] = useState();
    useEffect(() => {
        addressData = ethWallet.fromMasterSeed(props.param);
        setaddressData(addressData);

    }, []);
    
    // 
  return (
    <View>
        <Text>{addressData}</Text>
    </View>
  )
}
