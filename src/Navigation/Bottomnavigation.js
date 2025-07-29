
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Customerscreen from '../Screens/Customerscreen';
import Calculator from '../Screens/Calculator';
import { AppConstant } from '../AppConstant';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const tabIcons = {
        'Home': require('../Images/10276177.png'),
        'Client': require('../Images/10688957.png'),
        'Calculator': require('../Images/12455331.png'),
    };

    const animatedValue = useRef(new Animated.Value(0)).current;

    const handleAnimation = (toValue) => {
        Animated.spring(animatedValue, {
            toValue,
            useNativeDriver: true,
        }).start();
    };


    return (
       
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel || options.title || route.name;
                const isFocused = state.index === index;

                const rotate = isFocused
                    ? animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                    })
                    : '0deg';

                const scale = animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: isFocused ? [1, 1.2] : [1, 1],
                });

                const bounce = animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                });

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                        handleAnimation(1);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.tabItem, isFocused && styles.tabItemFocused]}
                        onPress={onPress}
                        onPressIn={() => handleAnimation(0)}
                        onPressOut={() => handleAnimation(1)}
                    >
                        <Animated.View
                            style={[
                                styles.tabIconContainer,
                                {
                                    transform: [
                                        { scale },
                                        { rotate },
                                        { translateY: bounce },
                                    ],
                                },
                            ]}
                        >
                            <Image source={tabIcons[label]} style={styles.tabIcon} />
                        </Animated.View>
                        <Text style={[styles.tabLabel, isFocused && styles.tabLabelFocused]}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: AppConstant.Appcolor,
        height: 80,
        padding: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 20,
      
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppConstant.Appcolor,
    },
    tabItemFocused: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        elevation: 4,
    },
    tabLabel: {
        color: 'lightgrey',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 4,
    },
    tabLabelFocused: {
        color: '#99B080',
        // color: 'black',
    },
    tabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon: {
        width: 25,
        height: 25,
        margin:5
    },
});

const Tab = createBottomTabNavigator();

const Bottomnavigation = () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ tabBarStyle: { backgroundColor: '#3f714e', height: 80 } }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Client" component={Customerscreen} options={{ headerShown: false }} />
            <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Bottomnavigation;
