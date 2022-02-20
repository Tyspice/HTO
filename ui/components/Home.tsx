import React, { useState } from "react";
import { ListData } from "../models/Interfaces";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";

type State = "off" | "circulate" | "heat";

const STATES = {
  off: "off",
  circulate: "circulate",
  heat: "heat",
};

const DUMMY_MAP = {
  [STATES.off]: "Off",
  [STATES.circulate]: "Circulating",
  [STATES.heat]: "Heating",
};

const listData = [
  { label: "State" },
  { label: "Time Remaining", value: "7 min" },
  { label: "Mode", value: "Manual" },
];

const Temperature = () => (
  <View>
    <Text style={styles.temperatureText}>
      {String(84) + String.fromCharCode(176)}
    </Text>
  </View>
);

const List = ({ state }: { state: string }) => (
  <View style={styles.listContainer}>
    {listData.map((item, index) => (
      <ListItem
        key={index}
        label={item.label}
        value={item.label === "State" ? DUMMY_MAP[state] : item.value}
      />
    ))}
    <Divider />
  </View>
);

const ListItem = ({ label, value }: ListData) => (
  <View>
    <View>
      <Divider />
    </View>
    <View style={styles.listItemContainer}>
      <View style={styles.listTextContainer}>
        <Text category={"h6"}>{label}</Text>
        <Text category={"h6"}>{value}</Text>
      </View>
    </View>
  </View>
);

const Buttons = ({
  state,
  setState,
}: {
  state: string;
  setState: Function;
}) => (
  <View style={styles.buttons}>
    <Button
      onPress={() => setState(STATES.off)}
      size={"giant"}
      appearance={state === STATES.off ? "filled" : "outline"}
      status={"control"}
    >
      Off
    </Button>
    <Button
      onPress={() => setState(STATES.circulate)}
      size={"giant"}
      appearance={state === STATES.circulate ? "filled" : "outline"}
      status={"primary"}
    >
      Circulate
    </Button>
    <Button
      onPress={() => setState(STATES.heat)}
      size={"giant"}
      appearance={state === STATES.heat ? "filled" : "outline"}
      status={"warning"}
    >
      Heat
    </Button>
  </View>
);

export const Home = () => {
  const [state, setState] = useState(STATES.off);

  return (
    <Layout style={styles.container}>
      <Temperature />
      <List state={state} />
      <Buttons state={state} setState={setState} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  listContainer: {
    width: "100%",
    padding: 20,
  },
  listItemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  listTextContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperatureText: {
    fontSize: 100,
  },
});
