import React from "react";
import { Setting } from "../models/Interfaces";
import { StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Divider, List, ListItem, Input } from "@ui-kitten/components";

const ServerInput = () => {
  return <Input placeholder="<ip>" />;
};

const AuthInput = () => {
  return <Input placeholder="<token>" />;
};

const settings: Setting[] = [
  {
    title: "Server IP",
    input: ServerInput,
  },
  {
    title: "Auth Token",
    input: AuthInput,
  },
];

const renderItem = ({ item }: { item: Setting }) => (
  <ListItem title={item.title} accessoryRight={item.input} />
);

const SettingsList = () => (
  <View style={styles.settingsListContainer}>
    <List
      style={styles.settingsList}
      ItemSeparatorComponent={Divider}
      data={settings}
      renderItem={renderItem}
    />
  </View>
);

const Title = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>SETTINGS</Text>
  </View>
);

export const Settings = () => (
  <Layout style={styles.container}>
    <Title />
    <SettingsList />
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  settingsListContainer: {
    borderColor: "black",
    borderWidth: 0.5,
    width: "90%",
  },
  settingsList: {
    maxHeight: 200,
  },
  title: {
    fontSize: 20,
  },
  titleContainer: {
    marginTop: 25,
    padding: 50,
  },
});
