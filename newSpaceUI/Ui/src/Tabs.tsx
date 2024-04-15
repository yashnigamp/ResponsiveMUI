import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Option1Component1 = () => {
  return (
    <div>
      <p>Customer Impact</p>
      <p>
        <span>High </span>
        <span style={{ float: "right" }}>24.2K</span>
      </p>
    </div>
  );
};
const Option1Component2 = () => {
  return (
    <div>
      <p>Last Ticket</p>
      <p>
        <span>2hr ago </span>
        {/* <span style={{float: "right"}}>24.2K</span> */}
      </p>
    </div>
  );
};
const HorizontalScrollableCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const options = [
    <Option1Component1 />,
    <Option1Component2 />,
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];

  return (
    isMobile && (
      <>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: "16px", margin: 1, padding: 1, fontWeight: "bold" }}
        >
          Site 1 Details
        </Typography>
        <Grid
          padding={0}
          margin={1}
          container
          spacing={2}
          sx={{
            overflowX: "auto",
            display: "flex",
            flexWrap: "nowrap",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            width: "100%",
          }}
        >
          {options.map((option, index) => (
            <Grid
              key={index}
              item
              xs={isMobile ? 6 : 3}
              sx={{
                flexShrink: 0,
                backgroundColor: "background.paper",
                borderRadius: 2,
                padding: 2,
                boxShadow: 1,
                cursor: "pointer",
                width: isMobile ? "50%" : "auto",
                margin: 1,
              }}
            >
              {option}
            </Grid>
          ))}
        </Grid>
      </>
    )
  );
};

export default HorizontalScrollableCards;
