import React from "react";
import banner from "../assets/images/banner.jpg";
import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Banner = () => {
  return (
    <div
      className="h-[300px] w-full bg-cover bg-center relative flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Tiêu đề */}
      <div className="relative z-10 text-center text-white px-4 md:mt-0 mt-50">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase leading-snug">
          Tìm giáo viên Tiếng Anh tốt nhất
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed ">
          Tìm giáo viên Tiếng Anh tốt nhất trên toàn cầu
        </p>
      </div>

      {/* Search Box */}
      <Box
        sx={{
          widht:"full",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          padding: "50px 60px",
          position: "relative",
          top: "80px",
          width: "90%",
          maxWidth: "1100px", 
          margin: "0 auto",
          borderRadius: "0px",
          display: "flex",
          flexWrap: "wrap", 
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Ô search */}
        <TextField
          placeholder="Bạn muốn học gì?"
          variant="outlined"
          size="small"
          sx={{ flex: 1, backgroundColor: "white", minWidth: "200px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Dropdown Thời gian */}
        <Select
          defaultValue=""
          displayEmpty
          size="small"
          sx={{ minWidth: 120, flex: 1 }}
        >
          <MenuItem value="">
            <em>Thời gian</em>
          </MenuItem>
          <MenuItem value="sáng">Buổi sáng</MenuItem>
          <MenuItem value="chiều">Buổi chiều</MenuItem>
          <MenuItem value="tối">Buổi tối</MenuItem>
        </Select>

        <Select
          defaultValue=""
          displayEmpty
          size="small"
          sx={{ minWidth: 120, flex: 1 }}
        >
          <MenuItem value="">
            <em>Thẻ</em>
          </MenuItem>
          <MenuItem value="1">Giao tiếp</MenuItem>
          <MenuItem value="2">IELTS</MenuItem>
          <MenuItem value="3">Phỏng vấn</MenuItem>
        </Select>

        <Select
          defaultValue=""
          displayEmpty
          size="small"
          sx={{ minWidth: 120, flex: 1 }}
        >
          <MenuItem value="">
            <em>Khác</em>
          </MenuItem>
          <MenuItem value="vn">Người Việt</MenuItem>
          <MenuItem value="us">Người Mỹ</MenuItem>
        </Select>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#16b53b",
            px: 3,
            fontWeight: 600,
            whiteSpace: "nowrap",
            flexShrink: 0, 
            "&:hover": { backgroundColor: "#139e34" },
          }}
        >
          Tìm giáo viên
        </Button>
      </Box>
    </div>
  );
};

export default Banner;
