import { StyleSheet, Modal, TextInput, Button, SafeAreaView, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { AppConstant } from '../AppConstant';
import { useNavigation } from '@react-navigation/native';

const HeaderCom = ({  route, }) => {




    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [profileData, setProfileData] = useState({});

    // useEffect(() => {
    //     getProfileDetails();
    // }, []);

    const navigation = useNavigation(); // 👈 Get the navigation object

    const handleLogout = () => {
      navigation.navigate('LoginScreen'); // 👈 Navigate to LoginScreen
    };
  

    useEffect(() => {
        let timeout;

        if (isModalVisible) {
            // Automatically close the modal after 5 seconds
            timeout = setTimeout(() => {
                setIsModalVisible(false);
            }, 3000);
        }

        return () => {
            // Clear the timeout if the modal is closed before it expires
            clearTimeout(timeout);
        };
    }, [isModalVisible]);


    // const getProfileDetails = async () => {

    //     const storedObject = await AsyncStorage.getItem("logininfo");
    //     const logininfo = JSON.parse(storedObject)
    //     console.log("logininfo", logininfo)
    //     setProfileData(logininfo)
    // };


    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);

    };




    // const handleLogout = async () => {
    //     // Implement your logout logic here
    //     // Alert.alert("Logout Sucessfully !!")
    //     // await AsyncStorage.setItem('logininfo', JSON.stringify(null));
    //     navigation.navigate('LoginScreen')
    //     // Toast.show({
    //     //     type: 'success',
    //     //     // text1: resp.Message,
    //     //     text2: 'Logout Sucessfully ',
    //     //     autoHide: true,
    //     //     visibilityTime: 3500
    //     // })
    // };


    return (

        <View style={{ height: 70, backgroundColor: AppConstant.Appcolor, padding: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <View style={{ height: 45, flexDirection: "column",justifyContent:"flex-end" }}>

                <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Hello !</Text>
                {/* <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>name</Text> */}

            </View>

            <View style={{ height: 45, flexDirection: "column", justifyContent: "center" }}>



            </View>


            <TouchableOpacity onPress={handleLogout}>
                {/* <View
                    style={{
                        height: 40,
                        borderWidth: 2,
                        borderColor: "white",
                        shadowColor: '#000000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,

                        backgroundColor: "white",
                        borderRadius: 8,
                        marginTop: 3,
                        marginBottom: 3,
                        justifyContent: "center",
                        alignItems: "center"

                    }}


                > */}
                {/* <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Logout</Text> */}
                <Image source={require('../Images/logout.png')} style={{ height: '50', width: '50', }} />

             
            </TouchableOpacity>

            {/* <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="fade"
                onRequestClose={() => {
                    setIsModalVisible(false);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', marginVertical: "10%", marginRight: "10%" }}>

                    <View style={{ width: 200, height: 150, backgroundColor: "pink", justifyContent: "space-around", padding: 5, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 2, borderColor: "white" }}>

                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>name</Text>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>mobileno</Text>

                        <TouchableOpacity onPress={handleLogout}>
                            <View
                                style={{
                                    height: 40,
                                    borderWidth: 2,
                                    borderColor: "white",
                                    shadowColor: '#000000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                           
                                    backgroundColor: "white",
                                    borderRadius: 8,
                                    marginTop: 3,
                                    marginBottom: 3,
                                    justifyContent: "center",
                                    alignItems: "center"
                             
                                }}


                            >
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                
            </Modal> */}

        </View>

    )
}

export default HeaderCom

const styles = StyleSheet.create({})