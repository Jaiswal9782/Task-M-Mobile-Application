import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";
import { router, useLocalSearchParams } from "expo-router";
import { BASE_URL } from "@/api/baseUrl";
import Toast from "react-native-toast-message";
import { styles } from "@/style/taskScreenStyle";

const TaskScreen = () => {
  const params = useLocalSearchParams();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [title, setTitle] = useState(params.taskName || "");
  const [description, setDescription] = useState(params.taskDescription || "");
  const [taskStatus, setTaskStatus] = useState(params.taskStatus || "Pending");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleCreateTask = async () => {
    if (!title.trim() || !description.trim()) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter both title and description",
        text1Style: { color: "red" },
        text2Style: { color: "black" },
      });
      return;
    }
    try {
      setLoading(true);
      if (params.id) {
        const updateResponse = await axios.put(
          `${BASE_URL}/tasks/${params.id}`,
          {
            taskName: title,
            taskDescription: description,
            userId: user?.id,
            taskStatus,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "*/*",
            },
          }
        );
      } else {
        const response = await axios.post(
          `${BASE_URL}/tasks`,
          {
            taskName: title,
            taskDescription: description,
            userId: user?.id,
            taskStatus,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "*/*",
            },
          }
        );
        setTitle("");
        setDescription("");
        setTaskStatus("Pending");
      }

      router.push("/homeScreen");
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
    <TouchableWithoutFeedback onPress={() => setDropdownOpen(false)}>
      <View style={styles.safeArea}>
        <View style={{ zIndex: 200,}}>
          <Toast />
        </View>

        <View style={styles.header}>
          <TouchableOpacity style={styles.backview} onPress={() => router.back()}>
            <Image
              source={require("@/assets/images/BackIcon.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{params.id ? "Update Task" :"Create Task"}</Text>
        </View>
              <View style={styles.borderView}></View>
        
        <View style={styles.container}>
          <Text style={styles.inputView}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.inputView}>Description</Text>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter task description"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          {/* Custom Dropdown */}
          <Text style={styles.inputView}>Status</Text>

          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setDropdownOpen(!dropdownOpen)}
            >
              <Text style={styles.dropdownButtonText}>{taskStatus}</Text>
              <Image
                source={require("@/assets/images/down-arrow.png")}
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>

            {dropdownOpen && (
              <View style={styles.dropdownList}>
                {["Pending", "In Progress", "Completed"].map((status) => (
                  <TouchableOpacity
                    key={status}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setTaskStatus(status);
                      setDropdownOpen(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{status}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleCreateTask}
            disabled={loading}
          >
            <Text style={styles.buttonText}>{params.id ? "Update Task" : "Create Task"}</Text>
          </TouchableOpacity>
        </View>

        {loading && (
          <View style={styles.loaderOverlay}>
            <ActivityIndicator size="large" color="#7F265B" />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};



export default TaskScreen;
