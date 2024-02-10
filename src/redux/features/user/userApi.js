import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const initialState = {
  name: "",
  email: "",
  isLoading: "",
  isError: "",
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name, image }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });

    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

export const googleUserLogin = createAsyncThunk(
  "userSlice/googleUserLogin",
  async () => {
    const data = await signInWithPopup(auth, googleProvider);
    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

const userSlice = createSlice({
  name: "userSlic",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.email = "";
        state.name = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.email = payload.email;
        state.name = payload.name;
      })
      .addCase(createUser.rejected, (state, { payload, action }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        (state.email = ""), (state.name = "");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.name = "";
        state.email = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.name = payload.name;
        state.email = payload.email;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.name = "";
        state.email = "";
      })
      .addCase(googleUserLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.name = "";
        state.email = "";
      })
      .addCase(googleUserLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.name = payload.name;
        state.email = payload.email;
      })
      .addCase(googleUserLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.name = "";
        state.email = "";
      });
  },
});


export const {setUser, toggleLoading, logout} = userSlice.actions;

export default userSlice.reducer;
