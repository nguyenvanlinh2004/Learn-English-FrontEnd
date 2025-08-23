import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

import bg from "../../assets/images/signin.png"; // ảnh minh họa (giống bên trái)
import logo from "../../assets/images/logo.png"; // logo app
import qr from "../../assets/images/qr.png"; // QR download

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Bên trái */}
      <div className="hidden md:flex flex-col justify-center items-center bg-[#eafaf1] ">
        <img src={bg} alt="illustration" className="w-full mb-6 -mt-72" />
        <div className="text-center">
          <div className="grid grid-cols-2 gap-5">
            <div className="grid justify-items-end gap-2 mb-4 end-0 flex-row">
              <p className="font-medium text-gray-700 mb-2">
                Download Mama app
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Follow your learning effectively with MAMA App
              </p>
              <div className="flex ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="google play"
                  className="h-10 mr-4"
                />
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="app store"
                  className="h-10"
                />
              </div>
            </div>
            <div className="grid justify-items-start gap-2 mb-4 end-0 flex-row">
              <img src={qr} alt="qr code" className="w-30" />
              <p className=" text-xs text-gray-500 mt-2">Scan to download</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bên phải */}
      <div className="flex flex-col justify-center items-center px-8">
        <img src={logo} alt="logo" className="w-100 -mt-20" />

        <div className="w-full max-w-sm flex flex-col gap-y-6">
          <h1 className="text-2xl font-semibold">Login</h1>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {showPassword ? (
                    <VisibilityIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#22c55e",
              textTransform: "none",
              fontSize: 16,
              fontWeight: 500,
              py: 1.2,
              "&:hover": { backgroundColor: "#16a34a" },
            }}
          >
            Login
          </Button>

          <a href="#" className="text-sm text-green-600 underline text-center">
            Forgot password
          </a>

          <div className="flex justify-center gap-4 text-sm text-green-600 mt-4">
            <a href="#">Help Center</a>
            <span>|</span>
            <a href="#">Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
