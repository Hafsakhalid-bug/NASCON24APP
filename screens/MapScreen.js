// import React, { useEffect, useState, useRef } from 'react';
// import { View, StyleSheet, PermissionsAndroid, TouchableOpacity, ToastAndroid } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';

// export default function Locate({ navigation }) {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [searchLocation, setSearchLocation] = useState(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Blood Nexus Location Permission',
//           message: 'This app requires access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         getCurrentLocation();
//       } else {
//         console.log('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({
//           latitude,
//           longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         });
//       },
//       error => {
//         console.log(error.code, error.message);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 10000,
//       },
//     );
//   };

//   const navigateToCurrentLocation = () => {
//     if (currentLocation) {
//       mapRef.current.animateToRegion(currentLocation);
//     }
//   };

//   const showToast = () => {
//     ToastAndroid.show('Current Location Pressed', ToastAndroid.SHORT);
//   };

//   return (
//     <View style={styles.container}>
//       <MapView ref={mapRef} style={styles.map} initialRegion={currentLocation}>
//         {currentLocation && (
//           <Marker
//             coordinate={currentLocation}
//             anchor={{ x: 0.5, y: 0.5 }}
//           >
//             <View style={styles.markerContainer} />
//           </Marker>
//         )}
//         {searchLocation && (
//           <Marker
//             coordinate={searchLocation}
//             title="Searched Location"
//             pinColor="red"
//           />
//         )}
//       </MapView>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={navigateToCurrentLocation}>
//         {/* Your button component */}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   button: {
//     position: 'absolute',
//     bottom: 16,
//     right: 16,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     elevation: 4,
//   },
// });

import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, PermissionsAndroid, ToastAndroid} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapScreen = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'WalletEise Location Permission',
          message: 'This app requires access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  //   const navigateToCurrentLocation = () => {
  //     if (currentLocation) {
  //       mapRef.current.animateToRegion(currentLocation);
  //     }
  //   };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: currentLocation ? currentLocation.latitude : 33.5651,
          longitude: currentLocation ? currentLocation.longitude : 73.0169,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title={'Your Location'}
            description={'You are here'}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
