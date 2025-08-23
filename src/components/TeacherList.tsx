import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Avatar,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

type Teacher = {
  id: number;
  name: string;
  country: string;
  flag: string;
  rating: number;
  reviews: number;
  avatar: string;
  Reviewer: string;
  latestReview: string;
  available: boolean;
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Huong Nguyen Thanh",
    country: "Vietnam",
    flag: "🇻🇳",
    rating: 5.0,
    reviews: 54,
    avatar: "https://i.pravatar.cc/200",
    Reviewer: "Nguyễn Thi Thu Hương",
    latestReview: "Bé thích học với cô",
    available: true,
  },
  {
    id: 2,
    name: "Thị Hiển Trần",
    country: "Vietnam",
    flag: "🇻🇳",
    rating: 5.0,
    reviews: 137,
    avatar: "https://i.pravatar.cc/201",
    Reviewer: "Trần Ngọc Diệp",
    latestReview: "Cô dạy nhiệt tình, rất có tâm với học sinh",
    available: false,
  },
];

export default function TeacherList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {teachers.map((t) => (
        <Card
          key={t.id}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "stretch",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "12px",
          }}
        >
          {/* Avatar + Available */}
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              sx={{ width: "full", height: "100%", objectFit: "cover" }}
              image={t.avatar}
              alt={t.name}
            />
            {t.available && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "green",
                  color: "white",
                  textAlign: "center",
                  py: 0.5,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Available
              </Box>
            )}
          </Box>

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={700}>
              {t.name}
            </Typography>
            <Typography color="green" fontSize={14} fontWeight={600}>
              ({t.rating.toFixed(2)} ) ({t.reviews}) nhận xét
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", mt: 0.5 }}
            >
              {t.country} <span style={{ marginLeft: 6 }}>{t.flag}</span>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 1,
              }}
            >
              <Avatar sx={{ width: 30, height: 30 }} />
              <div>
                <Typography
                  sx={{ fontWeight: 700 }}
                  variant="body2"
                  color="text.secondary"
                >
                  {t.Reviewer}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.latestReview}
                </Typography>
              </div>
            </Box>
          </CardContent>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              pr: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginTop:3,
                marginBottom: "15px",
                bgcolor: "#16b53b",
                px: 1,
                "&:hover": { bgcolor: "#139e34" },
              }}
            >
              Xem chi tiết
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
