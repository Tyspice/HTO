import React from 'react';
import { Text, Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This Is The Home Screen</Text>
    </Layout>
  );
};