import { StyleSheet, View, SafeAreaView, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import FitnessCards from './../components/FitnessCards.tsx';

const HomeScreen = () => {
    return (
        <ScrollView style={{marginTop: 50}}>
            <View style={{ backgroundColor: '#CD853F', padding: 10, height: 200, width: "100%" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>HOME WORKOUT</Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20
                    }}>

                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}>0</Text>
                        <Text style={{color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>WORKOUTS</Text>
                    </View>

                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}>0</Text>
                        <Text style={{color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>KCAL</Text>
                    </View>

                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}>0</Text>
                        <Text style={{color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>MINS</Text>
                        <View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <FitnessCards/>
        </View>
        </ScrollView>
    );
};

export default HomeScreen
const styles = StyleSheet.create({})