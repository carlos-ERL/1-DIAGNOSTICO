
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Icon,Input } from 'react-native-elements';
import {RValue} from "../utils/normalize";
import { DataTable } from 'react-native-paper';

export default class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            factorial:"",
            datos:[],
            showTable:false    
        };
    }
    componentDidMount =() =>{
    }
    esPar =(value)=>{
        if(value%2==0){
           return true;
        }else{
            return false;
        }
    }
    calcularFactorial = () => {
       
        /*
            datos:[
                {iteration:1,expresion:"1*1",value:1},
                {iteration:2,expresion:"1*1*2",value:2}
            ],        
        */
        console.log(dato);
    }
    render (){
        return(
        <View style={styles.container}>
          <Card containerStyle={styles.cardStyle}>
            <Card.Divider />
            <View style={{justifyContent:"center", alignItems:'Center'}}>
                <Input
                placeholder="Factorial a calcular"
                style={styles.inputStyle}
                value={this.state.factorial}
                onChangeText={value =>{
                    console.log(value);
                    this.setState({ factorial: value })
                }}
                keyboardType="numeric"
                />
                <Button
                    title="Calcular"
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
                        this.setState({
                            showTable:true
                        },()=>{
                            var data = [];
                            var object ={};                            
                            var resultado = 1; 
                            for(var i=1; i<=this.state.factorial; i++) {
                                object.iteration = resultado;
                                object.expresion =  resultado *= i + ""; 
                                object.value = resultado *= i;
                                data.push(object);
                            }  
                            this.setState({
                                datos: data
                            });                        
                        });
                    }}
                /> 
                {this.state.showTable  && (
                    <DataTable>
                    <DataTable.Header>
                        <DataTable.Title style={styles.headerStyle}> <Text style={{color:"#fff"}}>Iteración</Text></DataTable.Title>
                        <DataTable.Title style={styles.headerStyle}><Text style={{color:"#fff"}}>Expresión</Text></DataTable.Title>
                        <DataTable.Title style={styles.headerStyle}><Text style={{color:"#fff"}}>Valor</Text></DataTable.Title>
                    </DataTable.Header>
                    {this.state.datos.map((item, i) => {
              return (
                <View key={i} >
                  <DataTable.Row style={this.esPar(item.iteration) ? styles.rowGray : styles.rowWhite}>
                        <DataTable.Cell style={styles.col1}>{item.iteration}</DataTable.Cell>
                        <DataTable.Cell style={styles.col2}>{item.expresion}</DataTable.Cell>
                        <DataTable.Cell style={styles.col3}>{item.value}</DataTable.Cell>
                    </DataTable.Row>                  
                </View>
              );
            })}
                    </DataTable> 
                )}
                      
            </View>

          </Card>        
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
      },
      headerStyle:{
        backgroundColor:"#000",
      textAlign:"center",
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:"#fff",
      borderWidth:1,
    },
    rowGray:{
        backgroundColor:"#797676",
        marginLeft:RValue(15),
        marginRight:RValue(15),
    },
    rowWhite:{
        backgroundColor:"#fff",
        marginLeft:RValue(15),
        marginRight:RValue(15),
    },
    col1:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    col2:{
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    col3:{
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
  });