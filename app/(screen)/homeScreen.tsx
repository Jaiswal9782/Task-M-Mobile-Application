import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/authSlice";
import { router } from "expo-router";
import axios from "axios";
import { BASE_URL } from "@/api/baseUrl";
import Toast from "react-native-toast-message";
import { SwipeListView } from "react-native-swipe-list-view";
import { styles } from "@/style/homeScreenStyle";
import { Alert } from "react-native";

export default function HomeScreen() {
  const swipeListViewRef = useRef(null);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [taskStatus, setTaskStatus] = useState("Completed");

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to delete?",
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

  const fetchTask = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      setTasks(response.data.tasks);
      setLoading(false);
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

  useEffect(() => {
    fetchTask();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTask().then(() => {
      setRefreshing(false);
    });
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return { backgroundColor: "#ffeeeb" };
      case "In Progress":
        return { backgroundColor: "#fff5eb" };
      case "Completed":
        return { backgroundColor: "#e1fdff" };
      default:
        return { backgroundColor: "#f0f0f0" };
    }
  };

  const getStatusTextStyle = (status) => {
    switch (status) {
      case "Pending":
        return { color: "#f74d2e" };
      case "In Progress":
        return { color: "#f7891b" };
      case "Completed":
        return { color: "#148259" };
      default:
        return { color: "#f0f0f0" };
    }
  };

  const handleTask = (data) => {
    router.push({
      pathname: "/taskDetail",
      params: data,
    });
  };

  const handleAdd = () => {
    router.push("/taskScreen");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleDelete = async (item) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/tasks/${item.id}`, {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      });
      Toast.show({
        type: "success",
        text1: "Successfully deleted",
        text2: "Task deleted successfully",
        text1Style: { color: "green" },
        text2Style: { color: "black" },
      });
      fetchTask();
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

  const handleEdit = async (item,rowMap) => {
    try {
      const updateResponse = await axios.put(
        `${BASE_URL}/tasks/${item.id}`,
        {
          taskName: item.taskName,
          taskDescription: item.taskDescription,
          userId: item.userId,
          taskStatus: taskStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );

      Toast.show({
        type: "success",
        text1: "Successfully Updated",
        text2: "Task updated successfully",
        text1Style: { color: "green" },
        text2Style: { color: "black" },
      });
      
      fetchTask();
      if (rowMap[item.id]) {
        rowMap[item.id].closeRow(); // Close the row before deleting
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
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleTask(item)}
        style={[styles.taskItem, getStatusStyle(item.taskStatus)]}
      >
        <View style={styles.taskContent}>
          <Text style={styles.taskName}>{item.taskName}</Text>
          <Text style={styles.taskDescription}>{item.taskDescription}</Text>
          <Text
            style={[
              styles.taskDescription,
              { marginTop: "2%" },
              getStatusTextStyle(item.taskStatus),
            ]}
          >
            {item.taskStatus}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHiddenItem = ({ item },rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        onPress={() => handleDelete(item)}
        style={styles.deleteButton}
      >
        <Image
          source={require("@/assets/images/bin.png")}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
      {item.taskStatus !== "Completed" && (
        <TouchableOpacity
          onPress={() => {
            setTaskStatus("Completed"), handleEdit(item,rowMap);
          }}
          style={styles.completeButton}
        >
          <Image
            source={require("@/assets/images/check.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
  return (
    <View style={styles.safeAreaView}>
      <View style={{ zIndex: 100 }}>
        <Toast />
      </View>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#7F265B" />
        </View>
      )}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleProfile()}>
          <Image
            source={require("@/assets/images/profile.png")}
            style={styles.ProfileIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Image
            source={require("@/assets/images/logout.png")}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.borderView}></View>

      <View style={styles.container}>
        <SwipeListView
        ref={swipeListViewRef}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No Data Found</Text>
            </View>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          rightOpenValue={-100}
          disableRightSwipe={true}
        />
        <View style={styles.addView}>
          <TouchableOpacity onPress={() => handleAdd()}>
            <Image
              source={require("@/assets/images/plus.png")}
              style={styles.plusImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
