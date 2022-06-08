import * as React from 'react'
import { LogBox } from 'react-native'
import { Index } from './app/Index'
import { Provider } from "react-redux";
import STORE from './app/store/store';

export default function App() {

    LogBox.ignoreLogs([
        "Non-serializable values were found in the navigation state"
    ])

    return <Provider store={STORE}><Index /></Provider>
}

