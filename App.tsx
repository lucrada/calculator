/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, View, Alert, Image } from 'react-native';
import lightTheme from './styles/LightTheme';
import darkTheme from './styles/DarkTheme';

export default function App() {
  const [currentExpression, setCurrentExpression] = React.useState('');
  const [primary, setPrimary] = React.useState('');
  const [secondary, setSecondary] = React.useState('');
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  const [styles, setStyles] = React.useState(darkTheme);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    setStyles(isDarkTheme ? darkTheme : lightTheme);
  };

  const clear = () => {
    setPrimary('');
    setSecondary('');
    setCurrentExpression('');
  };

  const backspace = () => {
    setPrimary(prev => prev.slice(0, -1));
  };

  const decimal = () => {
    if (primary.indexOf('.') !== -1) {
      return;
    }
    setPrimary(prev => prev + '.');
  };

  const operator = (op) => {
    if (primary === '' && secondary === '') {
      if (op === '+' || op === '-') {
        setPrimary(op);
      }
      return;
    }
    if (primary === '+' || primary === '-' || primary === '') {
      return;
    }
    setSecondary(prev => prev + primary + ' ' + op + ' ');
    setCurrentExpression(prev => prev + primary + op);
    setPrimary('');
  };

  const numbers = (num) => {
    if (primary === '' && num === '00') {
      num = '0';
    }
    setPrimary(prev => prev + num);
  };

  const equals = () => {
    if (primary === '') {
      setCurrentExpression(prev => prev + '0');
    } else {
      setCurrentExpression(prev => prev + primary);
    }
    setPrimary('');
    setSecondary('');
    setCurrentExpression(updatedExpression => {
      // eslint-disable-next-line no-eval
      let evaluated_string = eval(updatedExpression).toString();
      if (evaluated_string === 'Infinity') {
        Alert.alert('Warning', 'Division by zero');
        setPrimary('');
      } else {
        setPrimary(evaluated_string);
      }
      return updatedExpression;
    });
    setCurrentExpression('');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.display}>
        <TouchableOpacity onPress={changeTheme} style={styles.changeThemeButton}><Image style={styles.themeIcon} source={require('./assets/theme.png')} /></TouchableOpacity>
        <View style={styles.display_secondary}><Text style={styles.display_secondary_text}>{secondary}</Text></View>
        <View style={styles.display_primary}><Text style={styles.display_primary_text}>{primary}</Text></View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity onPress={clear} style={{ ...styles.buttonNormal, ...styles.btn, ...styles.clearButton }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>C</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('%')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonOperatorText, ...styles.btnText }}>%</Text></TouchableOpacity>
          <TouchableOpacity onPress={backspace} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>←</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('/')} style={{ ...styles.buttonOperator, ...styles.btn }}><Text style={{ ...styles.buttonOperatorText, ...styles.btnText }}>&divide;</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('7')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('8')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('9')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('*')} style={{ ...styles.buttonOperator, ...styles.btn }}><Text style={{ ...styles.buttonOperatorText, ...styles.btnText }}>x</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('4')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('5')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('6')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('-')} style={{ ...styles.buttonOperator, ...styles.btn }}><Text style={{ ...styles.buttonOperatorText, ...styles.btnText }}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('1')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('2')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('3')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('+')} style={{ ...styles.buttonOperator, ...styles.btn }}><Text style={{ ...styles.buttonOperatorText, ...styles.btnText }}>+</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('00')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>00</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('0')} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={decimal} style={{ ...styles.buttonNormal, ...styles.btn }}><Text style={{ ...styles.buttonNormalText, ...styles.btnText }}>.</Text></TouchableOpacity>
          <TouchableOpacity onPress={equals} style={{ ...styles.buttonEquals, ...styles.btn }}><Text style={{ ...styles.buttonEqualsText, ...styles.btnText }}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
