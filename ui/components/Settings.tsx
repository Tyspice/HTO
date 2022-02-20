import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export const Settings = () => (
  <Layout style={styles.container}>
    <Text>This Is The Settings Screen</Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
