import * as React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const pages = [
  { label: "Teachers" },
  { label: "Community" },
  { label: "Reviews" },
  { label: "About us", subItems: ["Team", "Contact"] },
];

const settings = ["Tiếng Việt", "English"];

export default function Header() {
  // Dropdown About us
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const auth = useSelector((state: RootState) => state.auth);
  const token = (auth as any).token;
  const name = auth.user?.user?.name;
  // Menu mobile
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Language
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [language, setLanguage] = React.useState("English");
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang);
    handleCloseUserMenu();
  };

  return (
    <div className="flex items-center justify-around  mx-auto sticky top-0 w-full z-50 bg-white shadow-md">
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: "black", boxShadow: 0 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <img
              src="https://commercial.static.antoree.com/assets/images/logo_withtagline.svg"
              alt="Logo của tôi"
              className="flex w-50 h-auto pe-8"
            />
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
              <IconButton size="large" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {pages.map((page, index) =>
                  page.subItems ? (
                    <Box key={index}>
                      <MenuItem onClick={handleOpenMenu}>
                        {page.label}
                        <ArrowDropDownIcon fontSize="small" />
                      </MenuItem>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                      >
                        {page.subItems.map((item, i) => (
                          <MenuItem key={i} onClick={handleCloseMenu}>
                            {item}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      {page.label}
                    </MenuItem>
                  )
                )}

                {/* Mobile thêm Sign in & Trial */}
                <MenuItem onClick={handleCloseNavMenu}>Sign in</MenuItem>
                <MenuItem disableRipple>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      backgroundColor: "#ff6700",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#e65c00" },
                    }}
                  >
                    Học thử MIỄN PHÍ ngay
                  </Button>
                </MenuItem>
              </Menu>
            </Box>

            {/* Menu desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 3,
                "& *": { fontWeight: 600 },
                "& *:hover": { color: "#16b53b" },
              }}
            >
              {pages.map((page, index) =>
                page.subItems ? (
                  <Box key={index}>
                    <Button
                      onClick={handleOpenMenu}
                      sx={{ color: "black", fontWeight: 500 }}
                      endIcon={<ArrowDropDownIcon />}
                    >
                      {page.label}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu}
                    >
                      {page.subItems.map((item, i) => (
                        <MenuItem key={i} onClick={handleCloseMenu}>
                          {item}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={index}
                    sx={{
                      color: page.label === "Teachers" ? "green" : "black",
                    }}
                  >
                    {page.label}
                  </Button>
                )
              )}
            </Box>

            {/* Bên phải (desktop) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#ff6700",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#e65c00" },
                }}
              >
                Học thử MIỄN PHÍ ngay
              </Button>
              <nav>
                {name != null ? (
                  <span className="text-xl font-semibold text-[#16b53b]">
                    {name || "Người dùng"}
                  </span>
                ) : (
                  <a
                    href="/login"
                    className="text-xl pt-1.5 font-semibold hover:text-[#16b53b]"
                  >
                    Đăng nhập
                  </a>
                )}
              </nav>
              {/* Language setting */}
              <Box>
                <IconButton onClick={handleOpenUserMenu}>
                  <img
                    src={
                      language === "English"
                        ? "https://flagcdn.com/us.svg"
                        : "https://flagcdn.com/vn.svg"
                    }
                    alt="flag"
                    style={{ width: "full", height: 17, borderRadius: "50%" }}
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleChangeLanguage(setting)}
                    >
                      {setting}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
