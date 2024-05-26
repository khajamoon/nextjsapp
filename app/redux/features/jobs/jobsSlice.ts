import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "@/app/configurations/api";
import { App } from "@/app/configurations/api/config";
/*Initial State of the Application/*/
const initialState: any = {
  clients: null,
  
};

/*Define an impletentation function for Components Interaction*/

/*GetClients*/
export const getClients = createAsyncThunk(
  "api/users",
  async (data: any, thunkAPI) => {
    // data = {"dateFrom":"2024-02-09T18:30:00.000Z","jobType":"all"}
    let url = encodeURI(App.services.clients);
    return API.get(url, null, null, null);
  }
);
/*Slice Of the Jobs*/
export const jobs = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      /*GetClientStateUpdate*/
      .addCase(getClients.pending, (state) => {
        state.clientsLoading = false;
      })
      .addCase(getClients.fulfilled, (state, action: any) => {
        state.clientsLoading = true;
        console.log(action.payload.data);
        state.clients = action.payload.data || null;
      })
      .addCase(getClients.rejected, (state, action) => {
        state.clientsLoading = false;
        throw new Error(action?.error.message);
      })
    },
});

// export const { addJob, updateSettings,refreshEmptyTabData } = jobs.actions;
export default jobs.reducer;
