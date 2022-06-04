import React from 'react';
import {  Text as RNText, StyleSheet } from 'react-native';
import { presets } from './text.preset';

export default function Text({children, preset ='default', style }){
    const textStyle = StyleSheet.compose(presets[preset], style)
   return (
      <RNText style={textStyle}>
        {children}
      </RNText>
    );

}





// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default function Text(){
//    return (
//       <View>
//         <Text> Text </Text>
//       </View>
//     );

// }
