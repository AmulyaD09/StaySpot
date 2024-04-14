import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from './Colors';
import { useNavigation } from '@react-navigation/native'; 

const AppScreen = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Login'); 
      };
  return (
    <View>
      <Image source = {require("./../assets/images/start.jpg")}
      style={styles.loginImage}
      />
      <View style={styles.subContainer}>
      
      <Text style={{ fontSize: 21, color: Colors.WHITE,marginTop:20}}>
         Book your spot with ease on <Text style={{fontWeight: 'bold'}}>Stay Spot </Text> 
        </Text>
        
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
        <Image source = {require("./../assets/images/footer.png")} 
      style={styles.footerImage}
      />
        
    </View>
    </View>
    
  )
}
export default AppScreen;


 
const styles = StyleSheet.create({
  loginImage:{
    width:490,
    height:520
  },
  subContainer:{
    width:'100%',
    height:'60%',
    backgroundColor:Colors.PRIMARY,
    paddingTop:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignItems: 'center',
   
  },
  
  loginButton: {
    backgroundColor: Colors.SECONDARY,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 9,
    marginTop: 25,
    
    
  },
  buttonText: {
    fontSize: 18,
    color: Colors.WHITE,
    fontWeight: 'bold'
  },
  footerImage:{
    width:600,
    height:170,
    marginTop:20
  }
});
