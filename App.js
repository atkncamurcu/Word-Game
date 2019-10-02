import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import WordInput from "./src/components/WordInput/index";
import WordExplain from "./src/components/WordExplain/index";
import Keyboard from "./src/components/Keyboard/index";

class App extends Component {
  state = {
    data: [
      {
        word: "AĞIRLAŞMAK",
        explain: "Ağır duruma gelmek"
      },
      {
        word: "ALINGANLIK",
        explain: "Alıngan olma durumu"
      },
      {
        word: "ANAHTARLIK",
        explain:
          "Anahtarların kaybolmasını önlemek ve kolayca kullanılmasını sağlamak için takıldığı halka"
      },
      {
        word: "BAĞIŞIKLIK",
        explain: "Muafiyet"
      },
      {
        word: "BANKACILIK",
        explain: "Banka işlemleri yapma işi"
      },
      {
        word: "ÇORBACILIK",
        explain: "Çorba pişirip satma işi"
      },
      {
        word: "DENİZANASI",
        explain:
          "Sölenterlerden, yassı bir diske benzeyen, saydam, serbestçe yüzebilen deniz hayvanı"
      },
      {
        word: "DOLANDIRMA",
        explain: "Dolandırmak işi"
      },
      {
        word: "DUYARLILIK",
        explain: "Duyarlı olma durumu"
      },
      {
        word: "HATIRLATMA",
        explain: "Anımsatma"
      }
    ],
    rowNumber: 0
  };

  rowNumber = row => {
    this.setState({ rowNumber: row });
  };

  render() {
    return (
      <View style={styles.container}>
        <WordInput data={this.state.data} getRowNumber={this.rowNumber} />
        <WordExplain data={this.state.data} row={this.state.rowNumber} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default App;
