import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableHighlight, Alert, Dimensions, onChangeText, onPress } from 'react-native';
import react from "react"
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function LoginScreen() {
 
  return (
    
    <SafeAreaView style={styles.container}>
     <View style={styles.background}>
      <Text style={styles.paragraph}>
          Space Craft
      </Text>
     </View>
     <View style={styles.whitePart}>
        <TextInput
        style={styles.email}
        onChangeText={onChangeText}
        />
      
        <TextInput
        style={styles.password}
        onChangeText={onChangeText}
        />
    
     </View>
     <View style={styles.purpleBox}>
      <TouchableHighlight
        onPress={() => alert('You logged Into Space Craft!')}
      >
      <Text style={styles.purpleText}>
          Log In
      </Text>
      </TouchableHighlight>
     </View>
     <View style={styles.terms}>
        <Text style={styles.termsText}>
          Read Terms and Conditions
        </Text>
     </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph:{
    margin:24,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
      },
      background:{
        backgroundColor:'#6a5ae8',
        flex:1,
        borderColor:'grey',
        borderStyle:'solid',
        borderWidth:5,
        justifyContent:'center',
      },
      whitePart:{
        backgroundColor:'white',
        flex:3,
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:5,
        justifyContent:'center',
        alignItems:'center',
      },
      email:{
        borderRadius:5,
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:2,
        marginLeft:20,
        marginRight:20,
        marginTop:50,
        height:50,
        width:300,
      },
      password:{
        borderRadius:5,
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:2,
        marginLeft:20,
        marginRight:20,
        marginTop:50,
        width:300,
        height:50,
      },
      purpleBox:{
        backgroundColor:'#6a5ae8',
      },
      purpleText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
      },
      termsText:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:40,
      },
      
});
