import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { colors } from "../styles/colors";

import ImgTurismo from '../../src/assets/PNG/Turismo1.png';
import TriangleIcon from '../assets/SVG/Triangle.svg';
import PlantIcon from '../assets/SVG/Plant.svg';
import BoxIcon from '../assets/SVG/Box.svg';

const ModalCommunities = ({ visible, titulo,subtitle,imageCommunities, exitModal, textLocation, textActivities, textCuriosities }) => {

    const image = { uri: `${imageCommunities}` };
    return (

        <View style={styles.centeredView}>
            <Modal

                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={exitModal}>
                                <Text style={{ fontSize: 24, marginRight: 18, fontWeight: 'bold', marginTop: 18, color: colors.neutralDarker }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginRight: 25, marginLeft: 25 }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: colors.neutralDarker, marginBottom: 8 }}>{titulo}</Text>
                        </View>
                        <ScrollView
                            
                        >
                            <View style={{ marginRight: 32, marginLeft: 32 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: colors.neutralDark, fontSize: 12, fontWeight: '400', fontStyle: 'normal' }}>{subtitle}</Text>
                                    <Image source={image} style={{ width: '100%', height: 200, marginTop: 32, marginBottom: 32, borderRadius: 20, resizeMode: 'cover' }} />
                                </View>
                                <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <TriangleIcon width="18.57" height="18.57" />
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: colors.neutralDarker, marginLeft: 12 }}>Localização</Text>
                                </View>
                                <Text style={{ marginTop: 16, marginBottom: 24, marginLeft: 32 }}>{textLocation}</Text>

                                <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <PlantIcon width="18.57" height="18.57" />
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: colors.neutralDarker, marginLeft: 12 }}>Principais atividades</Text>
                                </View>
                                <Text style={{ marginTop: 16, marginBottom: 24, marginLeft: 32 }}>{textActivities}</Text>

                                <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <BoxIcon width="18.57" height="18.57" />
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: colors.neutralDarker, marginLeft: 12 }}>Curiosidades</Text>
                                </View>
                                <Text style={{ marginTop: 16, marginBottom: 24, marginLeft: 32 }}>{textCuriosities}</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal >
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: '85%',
        height: 561,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default ModalCommunities;