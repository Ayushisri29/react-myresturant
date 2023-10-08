import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.instagram.com/direct/inbox/"><InstagramIcon /></a>
          <a href="https://twitter.com/AyushiSriv48465"><TwitterIcon /></a>
          <a href="https://github.com/Ayushisri29"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/ayushi-srivastava-992aaa21b/"><LinkedIn/></a>
         
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
