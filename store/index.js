import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./features/taskSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});
