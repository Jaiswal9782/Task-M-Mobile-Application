# 🚀 Task-M Mobile Application (Expo React Native Project)

This is a **React Native project built with Expo**, designed for cross-platform mobile development. Follow the setup instructions below to get started.

---

## 📌 Features
- 📱 Cross-platform support (iOS, Android, Web)
- ⚡ Fast refresh for efficient development
- 🔗 Easy sharing with Expo Go
- 🔧 Simplified build process with EAS

---

## 📜 Prerequisites
Ensure you have the following installed before setting up the project:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Git (for version control, optional)
- [Expo Go](https://expo.dev/client) (for testing on mobile)

---

## 🛠 Setup Instructions

### **1. Clone the Repository**
```
git clone https://github.com/Jaiswal9782/Task-M-Mobile-Application.git
```
```
cd Task-M-Mobile-Application
```

##  Install Dependencies
```
npm install
```
 or
 ```
yarn install
```

## Start the Development Serve
```
npx expo start
```
 or
 ```
yarn expo start
```


## 📦 Project Structure

expo-project
  ├── /assets       # Images and static files
  ├── /components   # Reusable components
  ├── /screens      # App screens
  ├── App.js        # Main entry file
  ├── package.json  # Dependencies and scripts
  ├── app.json      # Expo configuration
  └── README.md     # Project documentation


# 📱 Building & Sharing the App
 1. Android APK (Development)
```
eas build -p android --profile development
```

iOS Build (Requires macOS & Apple Developer Account)
```
eas build -p ios
```

## Share the Expo Project
```
expo publish

