import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import styles from './styles/AppStyle'

class TemperatureConverter extends Component {
  constructor() {
    super();
    this.state = {
      fahrenheit: '', // Armazena o valor Fahrenheit
      celsius: '',    // Armazena o valor Celsius
    };
  }

  // Função para converter Celsius para Fahrenheit
  convertToFahrenheit = () => {
    const { celsius } = this.state;
    // Fórmula de conversão
    const fahrenheit = ((celsius * 9/5) + 32).toFixed(6); // Limita a 6 casas decimais
    this.setState({ fahrenheit });
  };

  // Função para converter Fahrenheit para Celsius
  convertToCelsius = () => {
    const { fahrenheit } = this.state;
    // Fórmula de conversão
    const celsius = (((fahrenheit - 32) * 5/9)).toFixed(6); // Limita a 6 casas decimais
    this.setState({ celsius });
  };

  render() {
    return (
      <ImageBackground
        source={require('./img/background.jpeg')} // Substitua pelo caminho da sua imagem de fundo
        style={styles.container}
      >
        <Text style={styles.title}>Conversor de Temperatura</Text>
        
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Celsius"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ celsius: text })}
            value={this.state.celsius}
          />
          <TouchableOpacity style={styles.button} onPress={this.convertToFahrenheit}>
            <Text style={styles.buttonText}>Converter para Fahrenheit</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Fahrenheit"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ fahrenheit: text })}
            value={this.state.fahrenheit}
          />
          <TouchableOpacity style={styles.button} onPress={this.convertToCelsius}>
            <Text style={styles.buttonText}>Converter para Celsius</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}


export default TemperatureConverter;
