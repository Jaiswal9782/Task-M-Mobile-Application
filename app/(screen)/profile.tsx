import { logout } from "@/store/authSlice";
import { styles } from "@/style/profileStyle";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");

  const initials = name ? name.substring(0, 2).toUpperCase() : "NA";

  const handleLogout = () => {
    
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(logout());
            router.push("/signupScreen");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          accessible
          accessibilityLabel="Back"
        >
          <Image
            source={require("@/assets/images/BackIcon.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.borderView}></View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.initialsContainer}>
            <Text style={styles.initialsText}>{initials}</Text>
          </View>
        </View>
        <Text style={[styles.inputView,{marginTop:'5%'}]}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={name}
          onChangeText={setName}
          accessible
          accessibilityLabel="Name Input"
          editable={false} 
          selectTextOnFocus={false}
        />
        <Text style={styles.inputView}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          accessible
          accessibilityLabel="Email Input"
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
      <View style={styles.logoutView}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        accessible
        accessibilityLabel="Logout Button"
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;