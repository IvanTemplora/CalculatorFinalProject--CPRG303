import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleNumPress = (num) => {
    if (operator == ''){
      setNum1(num);
      setCalculation(num1 + num1.toString());
    } else {
      setNum2(num);
      setCalculation(num1 + operator + num2 + num.toString());
    }
  }

  const handleOperator = (op) => {
    if (num1){
      setOperator(op);
      setCalculation(num1 + op);
    }
  }

  const handleResult = () => {
    let res;
    switch (operator){
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = Number(num1) / Number(num2);
        break;
    }
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation(num1 + operator + num2 + '=' + res.toString());
  }

  const handleClear = () => {
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation('');
  }

  return (
    <View>
      <View>
        <Text>{num1} {operator} {num2} {operator && num2 ? '=' : ''} </Text>
        <Text>{result}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => handleNumPress(7)}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumPress(8)}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumPress(9)}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperator('/')}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => handleNumPress(4)}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumPress(5)}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumPress(6)}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperator('*')}>
          <Text>*</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => handleNumPress(1)}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumPress(2)}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumPress(3)}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperator('-')}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={handleClear}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumPress(0)}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleResult}>
          <Text>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperator('+')}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

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
