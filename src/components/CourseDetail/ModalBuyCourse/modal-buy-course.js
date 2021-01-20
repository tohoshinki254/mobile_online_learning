import React, { useContext, useState } from 'react';
import { StyleSheet, Text, ScrollView, Modal, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const ModalBuyCourse = ({ info, visible, onCloseModal, onCancel }) => {
    const authContext = useContext(AuthenticationContext);
    const { theme, language } = useContext(SettingCommonContext);

    const [momoCheck, setMomoCheck] = useState(true);

    const onHandleCloseModal = () => {
        onCloseModal();
    }

    const onHandleCancel = () => {
        onCancel();
    }

    return (
        <Modal
            animationType="slide"
            visible={visible}
            presentationStyle="formSheet"
        >
            {info !== null ? 
            <ScrollView style={{ height: '100%', backgroundColor: theme ? '#212121' : '#f3f3f3' }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.modalStyle}>
                    <Text style={styles.textHead(theme)}>{language ? 'Buy Course' : 'Mua khóa học'}</Text>
                    <View style={styles.box}> 
                        <Text style={styles.textTitle(theme)}>{language ? 'Course Information' : 'Thông tin khóa học'}</Text>
                        <View style={styles.infoCourse}>
                            <Image source={{ uri: info.imageUrl }} style={styles.imgStyle} />
                            <View style={styles.textBox}>
                                <Text style={{ fontSize: 18, color: theme ? 'lightgray' : '#616161' }}>{info.title}</Text>
                                <View>
                                    <Text style={styles.textStyle}>{language ? 'Instructor:' : 'Giảng viên:'}</Text>
                                    <Text style={{ color: '#FF5252', fontWeight: 'bold' }}>
                                        {info.instructor.name}
                                    </Text>
                                </View>
                                <Text style={{ color: '#FF5252', fontWeight: 'bold' }}>
                                    {info.price > 0 ? `${info.price} VND` : "Miễn phí"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.textTitle(theme)}>{language ? 'User Information' : 'Thông tin người dùng'}</Text>
                        <View style={styles.infoItem}>
                            <Icon name="user-o" size={16} color="#2196F3" />
                            <Text style={{ color: theme ? 'lightgray' : '#616161', }}>  {authContext.state.userInfo?.name}</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Icon name="envelope-o" size={16} color="#2196F3" />
                            <Text style={{ color: theme ? 'lightgray' : '#616161', }}>  {authContext.state.userInfo?.email}</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Icon name="phone" size={16} color="#2196F3" />
                            <Text style={{ color: theme ? 'lightgray' : '#616161', }}>  {authContext.state.userInfo?.phone}</Text>
                        </View>
                    </View>
                    
                    {info.price > 0 ?
                    <View style={styles.box}>
                        <Text style={styles.textTitle(theme)}>{language ? 'Payment Methods' : 'Phương thức thanh toán'}</Text>
                        <View style={{...styles.infoItem, alignItems: "center"}}>
                            <Checkbox 
                                status={momoCheck ? "checked" : "unchecked"}
                                onPress={() => {
                                }}
                                color="#FF5252"
                                uncheckedColor="#212121"
                            />
                            <Image source={require('../../../../assets/momo.png')} style={{width: 30, height: 30}}/>
                            <Text style={{ color: theme ? 'lightgray' : '#616161', fontWeight: '500', marginLeft: 5 }}>{language ? "MoMo e-wallet" : "Ví điện tử MoMo"}</Text>
                        </View>
                    </View>
                    : null}

                    <View style={styles.btnBox}>
                        <TouchableOpacity
                            onPress={() => {
                                onHandleCloseModal();
                            }}
                            style={styles.btnStyle(2)}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Đăng ký</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                onHandleCancel();
                            }}
                            style={styles.btnStyle(1)}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Huỷ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            : null}
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
        padding: 20,
        position: "relative",
        alignItems: "center",
        marginTop: 30
    },
    textHead: (theme) => {
        return {
            marginTop: 10,
            marginBottom: 30,
            fontSize: 20,
            fontWeight: "bold",
            color: theme ? 'lightgray' : '#FF5252',
            textTransform: "uppercase",
        }
    },
    imgStyle: {
        width: "45%",
        height: 150,
    },
    infoCourse: {
        width: "100%",
        flexDirection: "row",
    },
    textStyle: {
        fontStyle: "italic",
        color: "#757575",
        fontSize: 16,
    },
    textTitle: (theme) => {
        return {
            marginBottom: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: theme ? 'lightgray' : '#616161'
        }
        
    },
    textBox: {
        width: "52%",
        marginTop: 10,
        marginLeft: 10,
        justifyContent: "space-around",
    },
    box: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
        width: '100%'
    },
    infoItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    btnStyle: (x) => {
        return {
          width: 150,
          height: 40,
          borderWidth: 1,
          borderColor: x === 1 ? "#FF5252" : "#2196F3",
          backgroundColor: x === 1 ? "#FF5252" : "#2196F3",
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }
    },
    btnBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default ModalBuyCourse;