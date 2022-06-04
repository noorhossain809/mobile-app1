import {useState} from 'react'
import { 
  View, 
  SafeAreaView, 
  StatusBar, 
  Platform, 
  FlatList,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/Text';
import { PLANET_LIST } from '../data/Planet-List';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation } from '@react-navigation/native'

const PlanetItem = ({item}) => {
  const navigation = useNavigation();
  const {name, color} = item;
       return(
<Pressable style={styles.item} onPress={() => {
        navigation.navigate('details', {planet: item})
      }} >
        <View style={{flexDirection: 'row', alignItems:'center', }}>
        <View style={[styles.circle, {backgroundColor:color}]} />
        <Text preset="h4" style={styles.itemName}>{name}</Text>
        </View>
        <AntDesign name="right" size={18} color={colors.white} />
      </Pressable>
       )
}

export default function Home(){
const [list, setList] = useState(PLANET_LIST)
  const renderItem = ({item}) => {
    
    return(
      <PlanetItem item={item} />
    )
  }

  const searchFilter = (text) => {
         const filteredList = PLANET_LIST.filter((item) => {
           const itemName = item.name.toLowerCase();
           const userTyped = text.toLowerCase();

           return itemName.indexOf(userTyped) > -1
         })
        //  console.log('filteredList -->', filteredList);
        setList(filteredList)
  } 
   return (
      <SafeAreaView style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, backgroundColor: colors.black}}>
        <PlanetHeader />
        <TextInput placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.inputText}
        onChangeText={(text) => {searchFilter(text)}}
        />
        <FlatList 
        contentContainerStyle={styles.list}
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
        list:{
          padding: spacing[4]
        },
        item:{
          flexDirection: "row",
          alignItems: "center",
          padding: spacing[4],
          justifyContent: 'space-between'
        },
        itemName:{
          textTransform: "uppercase",
          marginLeft: spacing[4]
        },
        separator:{
           borderBottomColor: colors.white,
           borderWidth: 0.5
        },
        circle:{
          width: 20,
          height: 20,
          borderRadius: 10
        },
        inputText:{
          padding: spacing[4],
          color: colors.white,
          borderBottomColor: colors.white,
          borderBottomWidth: 1, 
          margin: spacing[5]
        }

})