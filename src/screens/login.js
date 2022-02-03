import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Alert from "react-native-awesome-alerts";
import { Card, Button, Icon,Input, ThemeConsumer } from 'react-native-elements';
import {RValue} from "../utils/normalize";

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:"",
            password:"",
            showAlert: false,
            alertMessage:""
        };
    }
    componentDidMount =() =>{
    }
    showAlert = () => {
        this.setState({
          showAlert: true,
        });
      };
    
      hideAlert = () => {
        this.setState({
          showAlert: false,
        });
      };
    render (){
        return(
        <View style={styles.container}>
          <Card containerStyle={styles.cardStyle}>
            <Card.Title>INICIAR SESIÓN</Card.Title>
            <Card.Divider />
            <View style={{justifyContent:"center", alignItems:'Center'}}>
                <Input
                placeholder="Usuario"
                style={styles.inputStyle}
                value={this.state.user}
                onChangeText={value => this.setState({ user: value })}
                keyboardType="text"
                />
                <Input
                    placeholder='Contraseña'
                    style={styles.inputStyle}
                    value={this.state.password}
                    onChangeText={value => this.setState({ password: value })}
                    keyboardType="password"
                    secureTextEntry
                /> 
                <Button
                    title="Iniciar Sesion"
                    loading={false}
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                    backgroundColor: 'rgba(78, 116, 289, 1)',
                    borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                    }}
                    onPress={() => {
                        if(this.state.user == ""){
                            this.setState({
                                showAlert:true,
                                alertMessage:"Usuario Vacio"
                            })
                        }else if(this.state.user != "admin"){ 
                            this.setState({
                                showAlert:true,
                                alertMessage:"Usuario Incorrecto"
                            });                                   
                        }else if(this.state.password == ""){
                            this.setState({
                                showAlert:true,
                                alertMessage:"Contraseña Vacia"
                            });                              
                        }else if(this.state.password != "admin"){
                            this.setState({
                                showAlert:true,
                                alertMessage:"Contraseña Incorrecta"
                            }); 
                        }else{
                            this.props.navigation.navigate("PrincipalScreen");
                        }

                    }}
                /> 
                        

            </View>

          </Card>        
          <Alert
            show={this.state.showAlert}
            message={this.state.alertMessage}
            closeOnTouchOutside={true}
            showConfirmButton={true}
            onConfirmPressed={() => {
                this.hideAlert();       
            }}
            confirmText="Aceptar"
            confirmButtonColor="rgba(78, 116, 289, 1)"
            />   
        </View>            
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E70EF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardStyle:{
        width:RValue(400),
        borderRadius:RValue(8)
    }, 
    inputStyle:{
        borderTopEndRadius:RValue(8),
        borderTopStartRadius:RValue(8),
        borderWidth:RValue(1),
        borderColor:"#686a72",
    }
  });