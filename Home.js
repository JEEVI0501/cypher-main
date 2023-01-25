import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, Button } from 'react-native';

export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
          <Text style={styles.mainTxt}>Get the world's first non- custodial cypher card</Text>
          <Text style={styles.inTxt}>Explore all the Web3 in one place</Text>
          <View style={styles.contents}>
          <View style={styles.opts}>
            <Image style={styles.tinylogo} source={require('./assets/swap.png')} />
            <Text style={styles.optTxt}>Swap to get instant USD</Text>
          </View>
          <View style={styles.opts}>
            <Image style={styles.tinylogo} source={require('./assets/buy.png')} />
            <Text style={styles.optTxt}>Buy at an affordable price</Text>
          </View>
          <View style={styles.opts}>
            <Image style={styles.tinylogo} source={require('./assets/chain.png')} />
            <Text style={styles.optTxt}>9 chains Supported- more coming soon!</Text>
          </View>
          <View style={styles.opts}>
            <Image style={styles.tinylogo} source={require('./assets/browser.png')} />
            <Text style={styles.optTxt}>Accepted all over the world</Text>
          </View>
          </View>

          <View style = {styles.button}>
                <Button color="#dece3c" title = 'CREATE NEW WALLET' onPress={()=>navigation.navigate('AddressGen')} />
          </View>
          <View style = {styles.button}>
                <Button   title = 'IMPORT EXISTING WALLET' />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding:40,
    },
    opts:{
      marginTop:20,
      flexDirection:'row',
      alignItems:'center'      
    },
    tinylogo:{
      width: 50,
      height:50,
    },
    button:{
      marginTop:20,
      marginHorizontal:150,
      borderRadius:6,
    },
    mainTxt:{
      fontSize: 35,
    },
    contents:{
      marginTop:30,
      marginRight:140,
    },
    inTxt:{
      fontSize:20,
      marginTop:20,
    },
    optTxt:{
      fontSize:22,
      padding:20,
    }
  });