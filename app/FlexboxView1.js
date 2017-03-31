// @flow

import React, {Component} from "react";
import {StatusBar, Text, View} from "react-native";

import {flexboxview1_style} from "../styles/Styles";

class FlexboxView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {longText: "haven't made fetch call yet"};
  }
  
  componentWillMount() {
    console.log(`FlexbovView1 component will mount`);
    this.getLongText();
  }
  
  render() {
    let msg1: string = "Flexbox View";
    let msg2: string = "Details Text";
    
    return (
      <View style={flexboxview1_style.container}>
        <StatusBar hidden={true} translucent={true} animated={true}
                   barStyle={'light-content'} backgroundColor={'#1273de'}/>
        <Text style={flexboxview1_style.text1}>{msg1}</Text>
        <Text style={flexboxview1_style.text2}>{msg2}</Text>
        <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
        <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
        <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
        <Text style={flexboxview1_style.text3}>{this.state.longText}</Text>
      </View>
    );
  }
  
  getLongText() {
    this.setState({longText: "about to load uri"});
    let numLines: number = 1;
    let uri: string = `https://baconipsum.com/api/?type=meat-and-filler&paras=${numLines}&format=text`;
    
    fetch(uri)
      .then((resp) => {
        resp.text()
            .then((data) => {
              this.setState({longText: data})
            })
      })
      .catch((err) => {
        console.log(`problem getting data from ${uri}, error: ${err}`)
      });
  }
  
}// end FlexBoxView1

export {FlexboxView1};