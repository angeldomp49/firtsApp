import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function App() {
  return (
    <View style={{ flex: 1,justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'yellow' }}>
      <View style={{ height: 50, width: 50, backgroundColor: 'red' }} ></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'green' }} ></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
