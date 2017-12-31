import React, { Component } from 'react';
import { WebView, Share, Clipboard, Linking } from 'react-native'
import { Icon } from 'react-native-elements';
import { Toast } from 'native-base';

import { ActionSheet } from 'nextlvl-lib'

writeToClipboard = async (text) => {
  await Clipboard.setString(text);
  Toast.show({
    text: 'URL Kopiert',
    position: 'top',
    type: 'success',
    duration: 2000
  })
}

export default class WebSurfer extends Component {



  static navigationOptions = ({ navigation }) => ({
      headerRight: <ActionSheet
        options={['Kopier URL', 'Del', 'Åpne i nettleser']}
        cancelText='Avbryt'
        onPress={(index) =>{
          switch (index) {
            case 0:
              writeToClipboard(navigation.state.params.url)
              break;
            case 1:
              Share.share({url: navigation.state.params.url })
              break;
            case 2:
              Linking.openURL(navigation.state.params.url)
              break;

          }
        }}
        style={{ marginRight: 15 }}
      >
        <Icon type="entypo" name="dots-three-horizontal" size={20} color={'rgb(0, 122, 255)'} />
      </ActionSheet>
    });



  render() {
      return (
        <WebView
        source={{uri: this.props.navigation.state.params.url}}
        />
      );
  }
}
