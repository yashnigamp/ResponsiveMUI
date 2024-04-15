import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ThreeColumnLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    isMobile && (
      <Box sx={{ margin: 1, padding: 1 }}>
        <Box>
          <Typography variant="h6" fontWeight="bold" mb={1} fontSize={16}>
            Key Metrics
          </Typography>
          <Divider />
        </Box>
        <Grid container spacing={4} mt={2}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mb={1}
              fontSize={12}
            >
              SIP DC%
            </Typography>
            <Typography variant="body1" fontSize={11}>
              1.90
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mb={1}
              fontSize={12}
            >
              SIP DC%
            </Typography>
            <Typography variant="body1" fontSize={11}>
              1.90
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mb={1}
              fontSize={12}
            >
              SIP DC%
            </Typography>
            <Typography variant="body1" fontSize={11}>
              1.90
            </Typography>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button
            variant="text"
            color="primary"
            endIcon={
              <IconButton color="inherit">
                <KeyboardArrowDownIcon />
              </IconButton>
            }
            size="small"
          >
            View More
          </Button>
        </Box>
      </Box>
    )
  );
};

export default ThreeColumnLayout;
