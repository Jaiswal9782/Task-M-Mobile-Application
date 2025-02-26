import { BASE_URL } from "@/api/baseUrl";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "@/style/signupScreenStyle";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill in all fields",
        text1Style: { color: "red" },
        text2Style: { color: "black" },
      });
      return;
    }

    setLoading(true);

    try {      
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        name,
        email,
        password,
      });

      Toast.show({
        type: "success",
        text1: "Registration Successful",
        text2: "You have successfully registered.",
        text1Style: { color: "green" },
        text2Style: { color: "black" },
      });
      setTimeout(() => {
        router.push("/login");
      }, 500);
    } catch (error) {
      console.log('errorerror',error);
      const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message
      : error instanceof Error
      ? error.message
      : "Something went wrong";

      Toast.show({
        type: "error",
        text1: "Error",
        text2: errorMessage,
        text1Style: { color: "red" },
        text2Style: { color: "black" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
    <View style={styles.container}>
      <Toast />

      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#888"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputBox1}>
        <TextInput
          style={[styles.input, { width: 280 }]}
          placeholder="Password"
          onChangeText={setPassword}
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={{ paddingHorizontal: 5, paddingVertical: 5 }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={
              showPassword
                ? require("@/assets/images/eye-line.png")
                : require("@/assets/images/eye-off-line.png")
            }
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>{"Sign Up"}</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color="#7F265B" />
        </View>
      )}
    </View>
    </KeyboardAvoidingView>
  );
}


