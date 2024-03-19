import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {color} from '../../../Theme';
import {useSelector} from 'react-redux';

const AppLoader = ({}) => {
  const {loading} = useSelector(state => state.AppReducer);

  return (
    <>
      {loading && (
        <View style={styles.loaderContainer}>
          <View style={styles.container}>
            <ActivityIndicator
              animating={loading}
              color={color.primary}
              size="large"
              style={styles.activityIndicator}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  loaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {AppLoader};
