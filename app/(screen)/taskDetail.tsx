import { BASE_URL } from "@/api/baseUrl";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { styles } from "@/style/taskDetailStyle";

const TaskDetail = () => {
  const params = useLocalSearchParams();
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const [taskDetail, setTaskDetail] = useState(null);

  const handleEdit = () => {
    router.push({
      pathname: "/taskScreen",
      params: params,
    });
  };
  
  const fetchTasksDetail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/tasks/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
        },
      });
      setTaskDetail(response.data);
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasksDetail();
  }, []);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/tasks/${params.id}`, {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        router.push("/homeScreen");
      }
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
      setIsLoading(false);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backView}
          onPress={() => router.back()}
        >
          <Image
            source={require("@/assets/images/BackIcon.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Task Details</Text>
        <TouchableOpacity onPress={() => handleEdit()}>
          <Image
            source={require("@/assets/images/edit-text.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.borderView}></View>
      <View style={styles.container}>
        <View style={{ zIndex: 100, bottom: 30 }}>
          <Toast />
        </View>
        <View style={styles.card}>
          {taskDetail ? (
            <>
              <View style={[styles.section, styles.iconContainer]}>
                <View>
                  <Text style={styles.label}>Title:</Text>
                  <Text style={styles.value}>{taskDetail.taskName}</Text>
                </View>
                {/* <TouchableOpacity onPress={() => handleDelete()}>
                  <Image
                    source={require("@/assets/images/bin.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity> */}
              </View>
              <View style={styles.section}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.value}>{taskDetail.taskDescription}</Text>
              </View>
              <View>
                <Text style={styles.label}>Status:</Text>
                <Text
                  style={[
                    styles.value,
                    {
                      color:
                        taskDetail.taskStatus === "In Progress"
                          ? "red"
                          : taskDetail.taskStatus === "Completed"
                          ? "green"
                          : "orange",
                    },
                  ]}
                >
                  {taskDetail.taskStatus}
                </Text>
              </View>
            </>
          ) : (
            <ActivityIndicator size="large" color="#7F265B" />
          )}
        </View>
      </View>
    </>
  );
};

export default TaskDetail;
