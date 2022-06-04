import { View, StyleSheet,Pressable} from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './text/Text';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanetHeader({backBtn, title="THE PLANETS"}){
  const navigation = useNavigation();
   return (
      <View style={styles.container}>
          {backBtn && (
            <Pressable 
            style={{marginRight: spacing[4]}}
            onPress={() => { navigation.goBack()
            }}>
              <AntDesign name="left" size={24} color="white" />
            </Pressable>
          )}
        <Text preset="h1">{title}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
         padding: spacing[2],
         borderBottomWidth:0.3,
         borderBottomColor: colors.white,
         flexDirection: "row",
         alignItems: "center"
    }
})