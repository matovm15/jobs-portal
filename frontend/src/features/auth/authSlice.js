import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
    builder.addCase(loginCompany.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginCompany.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
    builder.addCase(registerCompany.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(registerCompany.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
  },
});

export const loginUser = createAsyncThunk("auth/loginUser", async (payload, thunkAPI) => {
  try {
    return await authService.loginUser(payload);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const loginCompany = createAsyncThunk("auth/loginCompany", async (payload, thunkAPI) => {
  try {
    return await authService.loginCompany(payload);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const registerCompany = createAsyncThunk(
  "auth/registerCompany",
  async (payload, thunkAPI) => {
    try {
      return await authService.registerCompany(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const registerUser = createAsyncThunk("auth/registerUser", async (payload, thunkAPI) => {
  try {
    return await authService.registerUser(payload);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const { reset } = authSlice.actions;
export const authSelector = (state) => state.auth;

export default authSlice.reducer;
