import React, {createContext} from 'react';
import Hook from './RN_training/MTproject/context';
import MainNavg from './RN_training/MTproject/MainNavg';
export const User1 = createContext({
  mainData: [
    {name: 'Food', amount: 0},
    {name: 'Travel', amount: 0},
    {name: 'Movies', amount: 0},
    {name: 'Hospital', amount: 0},
    {EmpId: ''},
    {lastupdated: ''},
    {billingdetails: []},
  ],
  setMainData: (i: any) => null,
});

const App = () => {
  const {memo} = Hook();
  return (
    <User1.Provider value={memo}>
      <MainNavg />
    </User1.Provider>
  );
};
export default App;
