import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ProfileScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('@/assets/images/profile-screen.jpg')} />
            <TouchableOpacity activeOpacity={.5} style={styles.back} onPress={() => { router.navigate('/(tabs)') }}>
                <FontAwesome6 name="arrow-left-long" size={26} color="white" />
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={.9} style={styles.profileContainer}>
                    <Image source={require('@/assets/images/image.png')} style={styles.profile} />
                </TouchableOpacity>
                <View style={styles.text}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.lastseen}>Last login date : 17-06-2024 11:08 AM</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity activeOpacity={.3} style={styles.actionButton}>
                        <Feather name="user" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.actionText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} style={styles.actionButton}>
                        <Ionicons name="wallet-outline" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.actionText}>Saved Cards & Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} style={styles.actionButton}>
                        <Ionicons name="location-outline" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.actionText}>Saved Addresses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} style={styles.actionButton}>
                        <FontAwesome6 name="basket-shopping" size={22} color="black" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.actionText}>Your Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} style={styles.actionButton}>
                        <MaterialCommunityIcons name="truck-outline" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.actionText}>Track Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} style={styles.actionButton}>
                        <SimpleLineIcons name="present" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.actionText}>Wishlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.3} style={styles.actionButton}>
                        <MaterialIcons name="logout" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.actionText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 55,
    },
    image: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
        position: "absolute"
    },
    back: {
        top: 60,
        left: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 15,
        width: 50,
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
    },
    lastseen: {
        fontSize: 8,
        fontWeight: "200",
    },
    text: {
        alignItems: "center",
        justifyContent: "center"
    },
    profileContainer: {
        marginBottom: 20,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: "#000",
        borderWidth: 2,
    },
    actions: {
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 20,
    },
    actionButton: {
        flexDirection: "row",
        borderColor: "grey",
        borderTopWidth: 1,
        height: 55,
        width: "100%",
        padding: 15,
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    actionText: {
        fontSize: 16,
        fontWeight: "800",
        textAlign: "left"
    }
})