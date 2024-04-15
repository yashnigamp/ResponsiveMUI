import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { Autocomplete, Box, Checkbox, Grid, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MixedBarChart from "./Chart1";
import { StackedBarChart } from "./Charts";
import KeyMetrics from "./KeyMetrics";
import Navbar from "./Navbar";
import HorizontalScrollableTabs from "./Tabs";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1em",
  color: "black",
  margin: "1em",
  gap: "1em",
}));

const dataOptions = [
  { title: "Bar" },
  { title: "Trends" },
  { title: "Snapshot" },
];

function App() {
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

  return (
    <>
      <Navbar />

      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={8}>
            <Item>
              <div>
                <p>Market Comparison Snapshot</p>
                <p>20th Feb - 20 Mar, 2024</p>
              </div>
              <hr />
              <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
                <Autocomplete
                  multiple
                  sx={{ width: 300, mr: "auto", height: 1 }}
                  id="tags-standard"
                  options={dataOptions}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[dataOptions[0], dataOptions[2]]}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField {...params} label="" placeholder="..." />
                  )}
                />

                <ButtonGroup
                  aria-label="outlined primary button group"
                  size="sm"
                  sx={{ height: 2 }}
                >
                  <Button>D</Button>
                  <Button>M</Button>
                  <Button>3M</Button>
                </ButtonGroup>
                <CalendarMonthOutlinedIcon />
                <SettingsOutlinedIcon />
              </div>
              <div className="chart-container">
                <StackedBarChart />
                <MixedBarChart />
              </div>
              <Grid container spacing={2} mt={1}>
                <Grid xs={12} sm={6}>
                  {" "}
                  <HorizontalScrollableTabs />
                </Grid>
                <Grid xs={12} sm={6}>
                  {" "}
                  <KeyMetrics />
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
