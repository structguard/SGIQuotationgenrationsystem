
// com.sawkar
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, ImageBackground, StatusBar, NativeModules, PermissionsAndroid, Alert } from 'react-native';
// import SQLite from 'react-native-sqlite-storage'
// import { openDatabase, createProductTable, insertProduct } from '../Components/Database';
import HeaderCom from '../Components/HeaderCom';
// import swipimg from "../Images/9824604.png";
// import SwipeButton from 'rn-swipe-button';
import { useForm } from './FormContext';
import { AppConstant } from '../AppConstant';


const HomeScreen = ({ navigation, route }) => {

  const formatAmountWithCommas = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const { state, dispatch } = useForm();

  const handleInsertProduct = () => {


    const formData = {
      name: state.name,
      mobile: state.mobile,
      product: state.product,
      date: state.date,
      amount: state.amount,
      emi: state.emi,
      dueDate: state.dueDate,
      dueAmount: state.dueAmount,

    };
    // store data   form fields
    dispatch({ type: 'ADD_FORM', formData });

    var name = state.name
    var mobile = state.mobile
    var product = state.product
    var date = state.date
    var amount = state.amount
    var emi = state.emi
    var dueDate = state.dueDate
    var dueAmount = state.dueAmount

    const smsBody = `Hello ! ${name}

    Name: ${name}
    Product: ${product}
    Date: ${date}
    Amount: ${amount}
    EMI: ${emi}
    Due Date: ${dueDate}
    Due Amount: ${dueAmount}
    
    Thank you ! 🚀`;
    
    sendDirectSMS(mobile, smsBody);
    Alert.alert("SMS SEND SUCCESFULL")

  };

  // Dispatch an action to update the form data in the context
  // This will trigger a re-render in any component that subscribes to this context
  // and will have access to the updated form data

  // dispatch({ type: 'UPDATE_FIELD', field: 'name', value: state.name });
  // dispatch({ type: 'UPDATE_FIELD', field: 'mobile', value: state.mobile });
  // dispatch({ type: 'UPDATE_FIELD', field: 'product', value: state.product });
  // dispatch({ type: 'UPDATE_FIELD', field: 'date', value: state.date });

  // dispatch({ type: 'UPDATE_FIELD', field: 'amount', value: state.amount });
  // dispatch({ type: 'UPDATE_FIELD', field: 'emi', value: state.emi });
  // dispatch({ type: 'UPDATE_FIELD', field: 'dueDate', value: state.dueDate });
  // dispatch({ type: 'UPDATE_FIELD', field: 'dueAmount', value: state.dueAmount });
  // Reset the form after submitting if needed
  // dispatch({ type: 'RESET_FORM' });


  let DirectSms = NativeModules.DirectSms;

  const sendDirectSMS = async (mobile, body) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Send SMS App Sms Permission',
          message: 'Send SMS App needs access to your inbox so  you can send messages in background',
          buttonNegative: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        DirectSms.sendDirectSMS(mobile, body);
      } else {
        Alert.alert('SMS permission denied');
      }


    } catch (error) {
      console.log("An Error Occured", error)
      Alert.alert(error + "Page")
    }

  }



  const defaultStatusMessage = 'swipe status appears here';
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(
    defaultStatusMessage,
  );

  setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
  const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);
  const renderSubHeading = (heading) => (
    <Text style={styles.subHeading}>{heading}</Text>
  );




  return (
    <>
      <StatusBar animated={true} backgroundColor={AppConstant.Appcolor} />
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderCom />
        <View style={styles.container}>
          <ImageBackground source={require('../Images/9422795.png')} resizeMode="contain" opacity={0.7} style={{ flex: 1, }}>
            <ScrollView showsVerticalScrollIndicator={false} >

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>Name:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter Client Name'
                  keyboardType='default'
                  value={state.name}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'name', value })}
                />
              </View>

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>Mobile No:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter Client Mobile No'
                  keyboardType='phone-pad'
                  maxLength={10}

                  value={state.mobile}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'mobile', value })}
                />
              </View>

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>Product:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter Product Details'
                  value={state.product}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'product', value })}
                />
              </View>

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>Date:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter Date'
                  keyboardType='phone-pad'
                  value={state.date?.replace(  /(\d{2})(\d{2})(\d{4})/,(match, month, day, year) => `${month}/${day}/${year}`)}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'date', value })}
                />
              </View>

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>Amount:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter Amount'
                  keyboardType='phone-pad'
                  value={state.amount?.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'amount', value })}
                />
              </View>

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>EMI:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter EMI'
                  keyboardType='phone-pad'
                  value={state.emi?.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'emi', value })}
                />
              </View>

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>Due Date:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter Due Date'
                  keyboardType='phone-pad'
                  maxLength={8}
                  
                  value={state.dueDate?.replace(  /(\d{2})(\d{2})(\d{4})/,(match, month, day, year) => `${month}/${day}/${year}`)}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'dueDate', value })}
                />
              </View>

              <View style={styles.textinpview}>

                <Text style={styles.textinptext}>Due Amount:</Text>

                <TextInput
                  style={styles.textinp}
                  placeholder='Enter Due Amount'
                  keyboardType='phone-pad'
                  value={state.dueAmount?.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  onChangeText={(value) => dispatch({ type: 'UPDATE_FIELD', field: 'dueAmount', value })}
                />
              </View>

              {/* <SwipeButton
                containerStyles={{ height: 60, }}
                // onSwipeSuccess={handleInsertProduct}
                onSwipeSuccess={() =>
                  handleInsertProduct('Submitted successfully!')
                }
                railBackgroundColor={'white'}
                railFillBackgroundColor={'#99B080'}
                railFillBorderColor={'#99B080'}
                thumbIconBorderColor={'white'}
                // thumbIconImageSource={swipimg}
                thumbIconStyles={{ borderRadius: 50, padding: 15, backgroundColor: "red" }}
                // thumbIconWidth={50}
                resetAfterSuccessAnimDuration={80}
                shouldResetAfterSuccess={true}
                swipeSuccessThreshold={80}
                resetAfterSuccessAnimDelay={80}

              /> */}

              <Button onPress={handleInsertProduct} title='submit' />




            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: "30%"
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 16,
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff6f61',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textinpview: {
    flexDirection: "column",
    margin: 10,
    // justifyContent:"space-between"
    // padding:3


  },
  placeholderStyle: {
    fontSize: 20,
    color: "grey",
    // backgroundColor:"red"
  },
  textinptext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    borderBottomWidth: 4,
    borderBottomColor: AppConstant.Appcolor
  },
  textinp: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    width: 300,
    height: 60,
    borderWidth: 2,
    borderColor: "white",
    // borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "white",
    padding: 10,
    borderColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,


  },
});


export default HomeScreen;
