import { BASE_URL } from "@/api/baseUrl";
import { loginSuccess } from "@/store/authSlice";
import { styles } from "@/style/loginStyle";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill in both email and password",
        text1Style: { color: "red" },
        text2Style: { color: "black" },
      });
      return;
    }

    setLoading(true); // Show loader

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({
          user: response.data,
          token: response.data.tokens.access.token,
        })
      );

      Toast.show({
        type: "success",
        text1: "Login Successful",
        text2: "You have successfully logged in.",
        text1Style: { color: "green" },
        text2Style: { color: "black" },
      });
      setTimeout(() => {

        router.push("/homeScreen");
      }, 500);
    } catch (error) {
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
    <>
    <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
      <View style={{ zIndex: 100, bottom: 0 }}>
        <Toast />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

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
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>{"Login"}</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signupScreen")}>
            <Text style={styles.loginLink}>Register</Text>
          </TouchableOpacity>
        </View>

        {loading && (
          <View style={styles.loaderOverlay}>
            <ActivityIndicator size="large" color="#7F265B" />
          </View>
        )}
      </View>
      </KeyboardAvoidingView>
    </>
  );
}


