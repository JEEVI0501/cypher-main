 const bip39 = require('bip39');
import React from 'react';
import {StyleSheet,View,Text,Image,Button} from 'react-native';
import { FlatList } from 'react-native-web';
// import bip39 from 'react-native-bip39';

// generateMnemonic = async () => {
//   try {
//     return await bip39.generateMnemonic(256)
//   } catch(e) {
//     return false
//   }
// }

export default function seedPhase() {

    const mnemonic = bip39.generateMnemonic()
    console.log(mnemonic)
    var mnemonicArray = mnemonic.split(' ')
    console.log(mnemonicArray)
  return (
    <View>
        <Text style={styles.topCont}>Your Seed Phase makes it easy to back up and restore your account</Text>
        <Text style={styles.midCont}>WARNING: Never disclose your Scret Recovery Phase. Anyone with this phase can take your assets forever</Text>
        <View>
            <Image style={styles.eyelogo} source={require('./assets/hide.png')} />
        </View>
        <View style={styles.mnegen}>
            {mnemonicArray.map((arr)=>
                <View style={styles.seedCont}>
                    <Text>{arr}</Text>
                </View>
            )}
        </View>
         <View style = {styles.button}>
                <Button title = 'comfirm' onPress={()=>navigation.navigate('AddressGen',{mnemonic})}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topCont:{
        margin:20,
        justifyContent:'center',
        fontSize:20,
        textAlign:'center'
    },
    midCont:{
        margin:20,
        justifyContent:'center',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
    },
    eyelogo:{
        width:30,
        height:30,
        right:0,
        margin:20,
    },
    seedCont:{
        marginTop:20,
        borderColor:'black',
        borderWidth:1,
        display: 'inline-block'
    },
    mnegen:{
        flex: 1,
    },
    button:{
      marginTop:20,
      marginHorizontal:150,
      borderRadius:6,
    },
})
