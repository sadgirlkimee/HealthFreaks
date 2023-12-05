import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import FitnessCards from "../../components/FitnessCards"

const HomeScreen = () => {
    return (
        <ImageBackground source={require('../../assets/BACKGROUND.png')} resizeMode='cover'>
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ backgroundColor: "purple", padding: 10, height: "22%", width: "100%" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>SELF-PACED WORKOUTS</Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                        <View>
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}> </Text>
                            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}> </Text>
                        </View>

                        <View>
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}> </Text>
                            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}> </Text>
                        </View>

                        <View>
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}> </Text>
                            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}> </Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ width: "90%", height: 199, marginTop: 20, marginBottom: 20, borderRadius: 20 }} source={{ uri: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/67419bb645130b3876f5bbdb5afd5000.jpg?imageView2/2/w/800/q/70" }} />
                    </View>
                    <FitnessCards />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default HomeScreen

const styles = StyleSheet.create({})