import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileService } from "../../services/profileService";

const initialState = {
  profiles: [],
  profile: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.profiles = [];
      state.profile = {};
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getProfiles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfiles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profiles = action.payload;
    });
    builder.addCase(getProfiles.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(createProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(createProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(deleteProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(deleteProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const { reset } = profileSlice.actions;

export const profileSelector = (state) => state.profile;

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (id, { rejectWithValue }) => {
    try {
      const res = await profileService.getProfile(id);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await profileService.updateProfile(userData.id, userData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfiles = createAsyncThunk(
  "profile/getProfiles",
  async (_, { rejectWithValue }) => {
    try {
      return profileService.getProfiles();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProfile = createAsyncThunk(
  "profile/createProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await profileService.createProfile(userData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProfile = createAsyncThunk(
  "profile/deleteProfile",
  async (id, { rejectWithValue }) => {
    try {
      const res = await profileService.deleteProfile(id);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default profileSlice.reducer;
