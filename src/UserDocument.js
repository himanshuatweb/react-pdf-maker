import React from "react";

import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";

import logo from './assets/logo.png';

Font.register({ family: 'Helvetica', fontStyle: 'normal', fontWeight: 'normal'});

const styles = StyleSheet.create({
    page:{
        backgroundColor:"#B1AFC1",
        fontFamily:"Helvetica"
    },
    logo:{
        width:"100px",
        height:"100px",
        margin:"50px auto",
    },
    img:{
        width:"100%"
    },
    name:{
        textAlign:"center",
        fontWeight:"400",
        margin:"30px 0"
    },
    singleDetail:{
        margin:"0 auto",
        width:"400px",
        border:"3px solid #000", 
    },
    singleCol:{
        fontSize:"12px",
        padding:"10px",
    }
})

const UserDocument = ({data}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} >
        <View style={styles.logo}>
           <Image source={logo} style={styles.img} />
        </View>

        <View>
          <Text style={styles.name} > {data.name} Full Details </Text>
        </View>

        <View style={styles.singleDetail} >
            
                <Text style={[styles.singleCol,{backgroundColor:"#FAF7FF"} ]}>ID : {data.id} </Text>
                <Text style={[styles.singleCol,{backgroundColor:"#ccc"} ]} >Name : {data.name} </Text>
                <Text style={[styles.singleCol,{backgroundColor:"#FAF7FF"} ]} >username : {data.username} </Text>
                <Text style={[styles.singleCol,{backgroundColor:"#ccc"} ]} >Phone : {data.phone} </Text>
                <Text style={[styles.singleCol,{backgroundColor:"#FAF7FF"} ]} >Website : {data.website} </Text>
                <Text style={[styles.singleCol,{backgroundColor:"#ccc"} ]} >Full Address : Street - {data.address.street}, City - {data.address.city}, Zipcode - {data.address.zipcode} </Text>
        
            
            </View>
      </Page>
    </Document>
  );
};

export default UserDocument;
