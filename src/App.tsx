
import { Provider } from 'react-redux';
import { config } from '@tamagui/config/v3'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import {  PortalProvider } from 'tamagui';

import { store } from './services/redux/store';
import Navigation from './presentation/navigation';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

const App = (): any => {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
       <TamaguiProvider config={tamaguiConfig}>
          <PortalProvider>
            <QueryClientProvider client={queryClient}>
                <Navigation />
            </QueryClientProvider>
          </PortalProvider>
      </TamaguiProvider>
    </Provider>
  );
};

export default App
