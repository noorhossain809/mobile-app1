import { View,SafeAreaView,Platform, StatusBar,ScrollView,StyleSheet,Pressable,Linking } from 'react-native';
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/Text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import {EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg} from '../svg'

const PlanetSection = ({title, value}) => {
  return (
      <View style={styles.planetSection}>
           <Text preset="h4">{title}</Text>
           <Text preset="h3">{value}</Text>
      </View>
  )
}

export default function Details({route}){
  const planet = route.params.planet;
  console.log('planet -->', planet)
  const {name, description,rotationTime,revolutionTime,radius,avgTemp,wikiLink} = planet;
  const renderImage = (name) => {
    switch (name){
      case 'mercury':
      return <MercurySvg />;
      case 'venus':
      return <VenusSvg />;
      case 'earth':
      return <EarthSvg />;
      case 'mars':
      return <MarsSvg />;
      case 'jupiter':
      return <JupiterSvg />;
      case 'saturn':
      return <SaturnSvg />;
      case 'uranus':
      return <UranusSvg />;
      case 'neptune':
      return <NeptuneSvg />
    }
  }

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  }
   return (
       <SafeAreaView style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, backgroundColor: colors.black}}>
      <PlanetHeader backBtn={true} />
        <ScrollView>
             <View style={styles.imageView}>{renderImage(name)}</View>
             <View style={styles.detailsView}>
               <Text preset="h1" style={styles.name}>{name}</Text>
             <Text preset="h4"style={styles.description}>{description}</Text>
             
             </View>
            <Pressable onPress={onPressLink} style={styles.source}>
               <Text>Source:</Text>
               <Text  preset="h4" style={styles.wikipedia}>Wikipedia</Text>
            </Pressable>

            <PlanetSection title="ROTATION TIME" value={rotationTime} />
            <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
            <PlanetSection title="RADIUS" value={radius} />
            <PlanetSection title="AVERAGE TEMP" value={avgTemp} />
        </ScrollView>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  imageView:{
    marginTop: spacing[6],
     padding: spacing[5],
     alignItems: 'center',
     justifyContent: 'center',
     
  },
  detailsView:{
     marginTop: spacing[5],
     marginHorizontal: spacing[8],
     alignItems: 'center'
  },
  name:{
   textTransform: 'uppercase'
  },
  description:{
      lineHeight: 24,
      textAlign: 'center',
      marginTop: spacing[5]
  },
  source:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[5],
    justifyContent: 'center',
    marginBottom: spacing[5]

  },
  wikipedia:{
    textDecorationColor: colors.white,
    textDecorationLine: 'underline',
    marginLeft: spacing[1]
   
  },
  planetSection:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1, 
    borderColor: colors.grey,
    marginHorizontal: spacing[4],
    marginBottom: spacing[4]
    
  }

})