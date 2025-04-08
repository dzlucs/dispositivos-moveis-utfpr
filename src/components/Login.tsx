import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  };

  return (
    <View style={{ padding: 60 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'green',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 8,
        }}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'orange',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 8,
        }}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
