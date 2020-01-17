import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  Easing,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import LottieView from "lottie-react-native";
import loading from "./android/app/src/svg/196-material-wave-loading.json";
import joia from "./android/app/src/svg/thumb-up.json";
import circle from "./android/app/src/svg/222-trail-loading.json";
import wind from "./android/app/src/svg/14327-wind-gust.json";

const App: () => React$Node = () => {
  const [progress] = useState(new Animated.Value(0));

  const handleAnime = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 700,
      easing: Easing.linear,
      dalay: 0
    }).start();

    setTimeout(() => {
      Animated.timing(progress, {
        toValue: 0,
        duration: 0,
        easing: Easing.bounce,
        dalay: 1
      }).start();
    }, 1000);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.container}>
          <LottieView
            style={{ margin: 20 }}
            autoPlay={true}
            loop={true}
            source={circle}
          />
        </View>
        <View style={styles.container}>
          <LottieView
            style={{ margin: 20 }}
            autoPlay={true}
            loop={true}
            source={wind}
          />
        </View>
        <View style={styles.container}>
          <LottieView
            style={{ margin: 20 }}
            autoPlay={true}
            loop={true}
            source={loading}
          />
        </View>
        <View style={styles.container}>
          <LottieView
            style={{ margin: 20 }}
            progress={progress}
            source={loading}
          />
          <View>
            <TouchableOpacity onPress={() => handleAnime()}>
              <View
                style={{
                  backgroundColor: "grey",
                  margin: 10,
                  width: 60,
                  height: 60,
                  borderRadius: 10
                }}
              >
                <LottieView progress={progress} source={joia} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#EFF2F4",
    borderRadius: 8,
    margin: 8,
    height: 300,
    width: 300
  }
});

export default App;
