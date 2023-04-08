import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    getAllActivitiesData: {},
};

const activitySlice = createSlice({
    name: 'activitySlice',
    initialState,
    reducers: {
        getAllActivities: (state, action) => {
            state.getAllActivitiesData = action.payload;
        }
    }
});

export const activityActions = activitySlice.actions;
export default activitySlice.reducer;