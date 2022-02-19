import * as eva from '@eva-design/eva';
import { ApplicationProvider, BottomNavigation } from '@ui-kitten/components';
import { AppNavigator } from './components/Navigation';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator />
    </ApplicationProvider> 
  );
}

