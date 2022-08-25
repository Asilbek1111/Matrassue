import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Matras from "../Mattrasses/Matras";
import Matras2 from "../Mattrass2/Matras2";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "0 31%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabs1"
        >
          <Tab label="Model A" {...a11yProps(0)} />
          <Tab label="Model B" {...a11yProps(1)} />
          <Tab label="Model C" {...a11yProps(2)} />
          <Tab label="Model D" {...a11yProps(3)} />
          <Tab label="Model E" {...a11yProps(4)} />
          <Tab label="Model F" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Matras />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Matras2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Matras />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Matras2 />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Matras />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Matras2 />
      </TabPanel>
    </Box>
  );
}
