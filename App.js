import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  Easing,
  SafeAreaView,
  ScrollView
} from "react-native";
import Slider from "@react-native-community/slider";
import LottieView from "lottie-react-native";
import loading from "./android/app/src/svg/196-material-wave-loading.json";
import Smile from "./android/app/src/svg/859-smiley-watch.json";
import circle from "./android/app/src/svg/222-trail-loading.json";
import wind from "./android/app/src/svg/14327-wind-gust.json";

const App: () => React$Node = () => {
  const [progress] = useState(new Animated.Value(1));

  const handleAnime = value => {
    const formatValue = value.toFixed(1);
    Animated.timing(progress, {
      toValue: 1 - formatValue,
      duration: 50,
      easing: Easing.linear,
      dalay: 0
    }).start();
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
            source={Smile}
          />
          <View>
            <Slider
              style={{
                width: 300,
                height: 40,
                backgroundColor: "#c4c2c2",
                marginTop: 10
              }}
              minimumValue={0}
              maximumValue={1}
              onValueChange={value => handleAnime(value)}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
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
