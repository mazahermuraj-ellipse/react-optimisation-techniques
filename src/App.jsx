import React, { Suspense } from 'react';
import { ChakraProvider, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import DebouncedSearch from './components/DebounceSearch';
import VirtualizedList from './components/VirtualizedList';
import FallbackComponent from './components/FallbackComponent';
import UseTransitionDemo from './components/UseTransitionHookDemo';
import Fragments from './components/Fragments';

const LazyComponent = React.lazy(() => import('./components/LazyComponent')); // dynamic import

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Optimization Demo</h1>
        </header>
        <main>
          <Tabs isLazy>
            <TabList>
              <Tab>Debounced Search</Tab>
              <Tab>Virtualized List</Tab>
              <Tab>Lazy Loaded Component</Tab>
              <Tab>useTransition Hook</Tab>
              <Tab>Fragments</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <DebouncedSearch />
              </TabPanel>
              <TabPanel>
                <VirtualizedList />
              </TabPanel>
              <TabPanel>
                <Suspense fallback={<FallbackComponent />}>
                  <LazyComponent />
                </Suspense>
              </TabPanel>
              <TabPanel>
                <UseTransitionDemo />
              </TabPanel>
              <TabPanel>
                <Fragments />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;