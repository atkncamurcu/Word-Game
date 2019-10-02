/*import React, { Component } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { register, insertText } from "react-native-custom-keyboard";

class Keyboard extends Component {
  onPress_Q = () => {
    insertText(this.props.tag, "Q");
  };
  onPress_W = () => {
    insertText(this.props.tag, "W");
  };
  onPress_E = () => {
    insertText(this.props.tag, "E");
  };
  onPress_R = () => {
    insertText(this.props.tag, "R");
  };
  onPress_T = () => {
    insertText(this.props.tag, "T");
  };
  onPress_Y = () => {
    insertText(this.props.tag, "Y");
  };
  onPress_U = () => {
    insertText(this.props.tag, "U");
  };
  onPress_I = () => {
    insertText(this.props.tag, "I");
  };
  onPress_O = () => {
    insertText(this.props.tag, "O");
  };
  onPress_P = () => {
    insertText(this.props.tag, "P");
  };
  onPress_Ğ = () => {
    insertText(this.props.tag, "Ğ");
  };
  onPress_Ü = () => {
    insertText(this.props.tag, "Ü");
  };
  onPress_A = () => {
    insertText(this.props.tag, "A");
  };
  onPress_S = () => {
    insertText(this.props.tag, "S");
  };
  onPress_D = () => {
    insertText(this.props.tag, "D");
  };
  onPress_F = () => {
    insertText(this.props.tag, "F");
  };
  onPress_G = () => {
    insertText(this.props.tag, "G");
  };
  onPress_H = () => {
    insertText(this.props.tag, "H");
  };
  onPress_J = () => {
    insertText(this.props.tag, "J");
  };
  onPress_K = () => {
    insertText(this.props.tag, "K");
  };
  onPress_L = () => {
    insertText(this.props.tag, "L");
  };
  onPress_Ş = () => {
    insertText(this.props.tag, "Ş");
  };
  onPress_İ = () => {
    insertText(this.props.tag, "İ");
  };
  onPress_Z = () => {
    insertText(this.props.tag, "Z");
  };
  onPress_X = () => {
    insertText(this.props.tag, "X");
  };
  onPress_C = () => {
    insertText(this.props.tag, "C");
  };
  onPress_V = () => {
    insertText(this.props.tag, "V");
  };
  onPress_B = () => {
    insertText(this.props.tag, "B");
  };
  onPress_N = () => {
    insertText(this.props.tag, "N");
  };
  onPress_M = () => {
    insertText(this.props.tag, "M");
  };
  onPress_Ö = () => {
    insertText(this.props.tag, "Ö");
  };
  onPress_Ç = () => {
    insertText(this.props.tag, "Ç");
  };

  render() {
    return (
      <View style={{flexDirection:'column'}}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Q}>
              <Text style={styles.buttonLabel}>Q</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_W}>
              <Text style={styles.buttonLabel}>W</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_E}>
              <Text style={styles.buttonLabel}>E</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_R}>
              <Text style={styles.buttonLabel}>R</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_T}>
              <Text style={styles.buttonLabel}>T</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Y}>
              <Text style={styles.buttonLabel}>Y</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_U}>
              <Text style={styles.buttonLabel}>U</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_I}>
              <Text style={styles.buttonLabel}>I</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_O}>
              <Text style={styles.buttonLabel}>O</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_P}>
              <Text style={styles.buttonLabel}>P</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Ğ}>
              <Text style={styles.buttonLabel}>Ğ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Ü}>
              <Text style={styles.buttonLabel}>Ü</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_A}>
              <Text style={styles.buttonLabel}>A</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_S}>
              <Text style={styles.buttonLabel}>S</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_D}>
              <Text style={styles.buttonLabel}>D</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_F}>
              <Text style={styles.buttonLabel}>F</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_G}>
              <Text style={styles.buttonLabel}>G</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_H}>
              <Text style={styles.buttonLabel}>H</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_J}>
              <Text style={styles.buttonLabel}>J</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_K}>
              <Text style={styles.buttonLabel}>K</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_L}>
              <Text style={styles.buttonLabel}>L</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Ş}>
              <Text style={styles.buttonLabel}>Ş</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={thisonPress_İ}>
              <Text style={styles.buttonLabel}>İ</Text>
            </TouchableOpacity>
          </View>    
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Z}>
              <Text style={styles.buttonLabel}>Z</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_X}>
              <Text style={styles.buttonLabel}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_C}>
              <Text style={styles.buttonLabel}>C</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_V}>
              <Text style={styles.buttonLabel}>V</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_B}>
              <Text style={styles.buttonLabel}>B</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_N}>
              <Text style={styles.buttonLabel}>N</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_M}>
              <Text style={styles.buttonLabel}>M</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Ö}>
              <Text style={styles.buttonLabel}>Ö</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress_Ç}>
              <Text style={styles.buttonLabel}>Ç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

register("wordkeyboard", () => Keyboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "grey",
    width: 270,
    fontSize: 19,
  },
  buttonLabel: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 20,
  },
  button: {
    width: "33.333333333%",
  },
});

export default Keyboard;
*/