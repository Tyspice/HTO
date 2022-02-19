import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';

const Buttons = () => (
    <View style={styles.buttons}>
        <Button size={ 'giant' } appearance={ 'outline' } status={ 'control' }>Off</Button>
        <Button size={ 'giant' } appearance={ 'outline' } status={ 'primary' }>Circulate</Button>
        <Button size={ 'giant' } appearance={ 'outline' } status={ 'warning' }>Heat</Button>
    </View>
);

export const Home = () => {

  return (
    <Layout style={styles.container}>
        <Buttons />
    </Layout>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});