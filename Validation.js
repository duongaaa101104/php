import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function SignIn() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^0[0-9]{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleChange = (text) => {
    setPhone(text);
    if (text.length === 10 && validatePhone(text)) {
      setError('');
    } else if (text.length < 10) {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
    }
  };

  const handleSubmit = () => {
    if (!validatePhone(phone)) {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
    } else {
      setError('');
      alert('Đăng nhập thành công!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
      </Text>
      <TextInput
        placeholder="Nhập số điện thoại"
        value={phone}
        onChangeText={handleChange}
        keyboardType="phone-pad"
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
