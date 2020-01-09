import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  Easing,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import LottieView from "lottie-react-native";
import loading from "./android/app/src/svg/196-material-wave-loading.json";
import joia from "./android/app/src/svg/thumb-up.json";

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
      <View style={styles.container}>
        {/* <Text>Hello</Text> */}
        
          <LottieView style={{margin: 20}} progress={progress} source={loading} />
        
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "red"
  },
  container: {
    alignItems: 'center',
    backgroundColor: "white",
    height: 400,
    width: 300
  }
});

export default App;
