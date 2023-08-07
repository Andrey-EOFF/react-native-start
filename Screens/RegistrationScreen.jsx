import React from "react";
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import backgroundImage from "../Images/BgImage.jpg";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const RegisterScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={customStyles.container}>
        <Image source={backgroundImage} style={customStyles.backgroundImage} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={customStyles.keyboardAvoidingContainer}
        >
          <View style={customStyles.formContainer}>
            <Image style={customStyles.profileImage} />
            <AntDesignIcon style={customStyles.icon} name="pluscircleo" />
            <Text style={customStyles.headerTitle}>Реєстрація</Text>

            <View style={customStyles.inputContainer}>
              <TextInput
                style={[customStyles.input, customStyles.focus]}
                placeholder="Логін"
              />
              <TextInput
                style={[customStyles.input, customStyles.focus]}
                placeholder="Адреса електронної пошти"
              />
              <TextInput
                style={[
                  customStyles.input,
                  customStyles.lastChildInput,
                  customStyles.focus,
                ]}
                placeholder="Пароль"
                secureTextEntry={true}
              />

              <Pressable style={customStyles.showPasswordButton}>
                <Text style={customStyles.inputText}>Показати</Text>
              </Pressable>
            </View>

            <TouchableOpacity style={customStyles.button}>
              <Text style={customStyles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>

            <View style={customStyles.loginLinkContainer}>
              <Text style={customStyles.loginLinkText}>Вже є акаунт?</Text>
              <TouchableOpacity>
                <Text style={customStyles.loginLink}>Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    zIndex: -1,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    width: "100%",
    height: "68%",
    marginTop: "auto",
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  profileImage: {
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    top: 21,
    right: 125,
    color: "#FF6C00",
    fontSize: 25,
  },
  headerTitle: {
    marginTop: -27,
    marginBottom: 33,
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  lastChildInput: {
    marginBottom: 43,
  },
  inputContainer: {
    position: "relative",
  },
  inputText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: "400",
  },
  focus: {
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  showPasswordButton: {
    position: "absolute",
    right: 5,
    bottom: 5,
    top: 100,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#FF6C00",
    width: 343,
    alignItems: "center",
    padding: 16,
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLinkContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  loginLinkText: {
    color: "#1B4371",
  },
  loginLink: {
    marginLeft: 3,
    textDecorationLine: "underline",
    color: "#1B4371",
  },
});

export default RegisterScreen;
