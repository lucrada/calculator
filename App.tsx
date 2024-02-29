/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [currentExpression, setCurrentExpression] = React.useState('');
  const [primary, setPrimary] = React.useState('');
  const [secondary, setSecondary] = React.useState('');

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
    if (primary === '') {
      return;
    }
    setSecondary(prev => prev + primary + ' ' + op + ' ');
    setCurrentExpression(prev => prev + primary + op);
    setPrimary('');
  };

  const numbers = (num) => {
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
      setPrimary(eval(updatedExpression));
      return updatedExpression;
    });
    setCurrentExpression('');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.display}>
        <View style={styles.display_secondary}><Text style={styles.display_secondary_text}>{secondary}</Text></View>
        <View style={styles.display_primary}><Text style={styles.display_primary_text}>{primary}</Text></View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity onPress={clear} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>C</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('%')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>%</Text></TouchableOpacity>
          <TouchableOpacity onPress={backspace} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>←</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('/')} style={styles.buttonOperator}><Text style={styles.buttonOperatorText}>&divide;</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('7')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('8')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('9')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('*')} style={styles.buttonOperator}><Text style={styles.buttonOperatorText}>x</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('4')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('5')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('6')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('-')} style={styles.buttonOperator}><Text style={styles.buttonOperatorText}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('1')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('2')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('3')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => operator('+')} style={styles.buttonOperator}><Text style={styles.buttonOperatorText}>+</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => numbers('00')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>00</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => numbers('0')} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={decimal} style={styles.buttonNormal}><Text style={styles.buttonNormalText}>.</Text></TouchableOpacity>
          <TouchableOpacity onPress={equals} style={styles.buttonEquals}><Text style={styles.buttonEqualsText}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  display: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#24273e',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  display_secondary: {
    width: '100%',
    paddingVertical: 15,
  },
  display_secondary_text: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
  },
  display_primary: {
    width: '100%',
    paddingVertical: 15,
  },
  display_primary_text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  buttons: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#151a30',
    paddingBottom: 30,
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonNormal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonNormalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonOperator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24273e',
    borderRadius: 10,
  },
  buttonOperatorText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonEquals: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#30da06',
  },
  buttonEqualsText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});
