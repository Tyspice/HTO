import React from 'react';
import { Button, Divider, Layout, Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';

interface ListData {
    label: string;
    value: string;
};

const listData = [
    { label: 'State', value: 'Heating' },
    { label: 'Time Remaining', value: '7 min' },
    { label: 'Mode', value: 'Manual' },
];

const Temperature = () => (
    <View>
        <Text style={ styles.temperatureText }>{ String(84) + String.fromCharCode(176) }</Text>
    </View>
);

const List = () => (
    <View style={styles.listContainer}>
        { listData.map( (item, index) => <ListItem key={ index } label={ item.label } value={ item.value }/> ) }
        <Divider />
    </View>
);

const ListItem = ({ label, value }: ListData) => (
    <View>
        <View>
            <Divider />
        </View>
        <View style={ styles.listItemContainer }>
            <View style={ styles.listTextContainer }>
                <Text category={ 'h6' }>{ label }</Text> 
                <Text category={ 'h6' }>{ value }</Text> 
            </View>
        </View>
    </View>
);

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
        <Temperature />
        <List />
        <Buttons />
    </Layout>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    listContainer: {
        width: '100%',
        padding: 20,
    },
    listItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTextContainer: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    temperatureText: {
        fontSize: 100
    },
});