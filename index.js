import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  NativeModules,
  staticAssetURL
} from 'react-360';
const {VideoModule} = NativeModules;

export default class react_360 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0
    }
  }

  getDate = () => {
    const d = new Date();
    const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    this.setState({date: time});
  }

  componentDidMount() {
    setInterval(this.getDate, 1000);

    VideoModule.createPlayer('myplayer');

    VideoModule.play('myplayer', {
      source: {url: '/static_assets/Best VR 360 Video.webm'}

    })

    Environment.setBackgroundVideo('myplayer');

  }
  

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton
            /> 
          <Text style={styles.greeting}>
            {`${this.state.date}`}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('react_360', () => react_360);
