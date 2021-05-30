import React from 'react';
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icons} from './assets/icons';

import {NativeModules} from 'react-native';

const {VoiceChangingModule} = NativeModules;

const App = () => {
  const audioTrackURL =
    'https://bublup-media-production.s3.amazonaws.com/14253646-e0c6-48c1-bb30-47320f7c2f82/file_uploads/dfe964da.mp3';

  const changeToAlein = () => {
    Platform.OS === 'android'
      ? VoiceChangingModule.changeVoiceToAlien(audioTrackURL)
      : VoiceChangingModule.changeVoiceToAlien();
  };

  const changeToChild = () => {
    Platform.OS === 'android'
      ? VoiceChangingModule.changeVoiceToChild(audioTrackURL)
      : VoiceChangingModule.changeVoiceToChild();
  };

  const changeToFast = () => {
    Platform.OS === 'android'
      ? VoiceChangingModule.speedUpVoice(audioTrackURL)
      : VoiceChangingModule.speedUpVoice();
  };

  const changeToSlow = () => {
    Platform.OS === 'android'
      ? VoiceChangingModule.slowDownVoice(audioTrackURL)
      : VoiceChangingModule.slowDownVoice();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#e4e5ea'} />
      <Text style={styles.title}>Voice Changer</Text>
      <Text style={styles.title}>Change Voice Effects</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => changeToAlein()}>
          <Image
            source={Icons.alien}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Alien</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToChild()}>
          <Image
            source={Icons.child}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Child</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToFast()}>
          <Image
            source={Icons.fast}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Fast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToSlow()}>
          <Image
            source={Icons.slow}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Slow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4e5ea',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginVertical: 25,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 50,
  },
  warningText: {
    color: 'red',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  spacing: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  icon: {
    height: 40,
    width: 40,
    marginBottom: 15,
  },
});

export default App;
