import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
//import {CustomTextInput} from 'react-native-custom-keyboard';

const COLUMNSIZE = 10;

class WordInput extends Component {
  inputs = [];

  inputCheck(target, key) {
    let column = target % COLUMNSIZE;
    let row = Math.floor(target / COLUMNSIZE);
    let isKeyBackspace = key == "Backspace";
    let isBack = isKeyBackspace && column != 0;
    let checkingValue = "";
    key = key.toUpperCase();
    
    this.props.getRowNumber(row);

    this.inputs[row * COLUMNSIZE + column].setNativeProps({
      text: isKeyBackspace ? "" : key
    });
    this.inputs[row * COLUMNSIZE + column].value = isKeyBackspace ? "" : key;

    if (column < COLUMNSIZE - 1) {
      this.inputs[
        row * COLUMNSIZE + column + (isBack ? -1 : !isKeyBackspace)
      ].focus();
    } else {
      //let checkingValue = "";
      for (let i = 0; i < COLUMNSIZE; i++) {
        checkingValue += this.inputs[row * COLUMNSIZE + i].value;
      }

      if (this.props.data[row].word === checkingValue) {
        for (let i = 0; i < COLUMNSIZE; i++) {
          //this.inputs[row*COLUMNSIZE+i].disable = false;
        }
        this.inputs[row * COLUMNSIZE + COLUMNSIZE].focus();
      } else {
        for (let i = 0; i < COLUMNSIZE; i++) {
          this.inputs[row * COLUMNSIZE + i].value = "";
          this.inputs[row * COLUMNSIZE + i].clear();
        }
        this.inputs[row * COLUMNSIZE].focus();
      }
    }
  }

  render() {
    return this.props.data.map((object, index) => (
      <View style={styles.inputContainer}>
        <View style={styles.inputContainer}>
          {object.word.split("").map((CharacterData, subIndex) => (

             /* <CustomTextInput
              customKeyboardType="wordkeyboard"
              autoCorrect={false}
              style={styles.placeInput}
              key={index * COLUMNSIZE + subIndex}
              maxLength={1}
              onKeyPress={({ nativeEvent }) =>
                this.inputCheck.call(
                  this,
                  index * COLUMNSIZE + subIndex,
                  nativeEvent.key
                )
              }
              ref={c => (this.inputs[index * COLUMNSIZE + subIndex] = c)}
              />*/

            <TextInput
              autoCorrect={false}
              style={styles.placeInput}
              key={index * COLUMNSIZE + subIndex}
              maxLength={1}
              onKeyPress={({ nativeEvent }) =>
                this.inputCheck.call(
                  this,
                  index * COLUMNSIZE + subIndex,
                  nativeEvent.key
                )
              }
              ref={c => (this.inputs[index * COLUMNSIZE + subIndex] = c)}
            />
          ))}
        </View>
      </View>
    ));
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline"
  },
  placeInput: {
    width: "10%",
    marginTop: 1,
    marginRight: 1,
    height: 35,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center"
  }
});

export default WordInput;
