import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import AreaChart from './graph';
import ChartWrapper from './graphcontainer';


const CatalogGraph = () => {
    const [value, setValue] = useState('tab1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: "100%", maxWidth: "62.5rem", margin: "0 auto", backgroundColor: "#ffffff", padding: "3.75rem" }}>
            <Typography sx={{ fontSize: "4.375rem", lineHeight: "100%", fontWeight: "400", color: "#1A243A", textAlign: "left" }} variant="h1">63,179.71 <sup style={{ fontSize: "1.5rem", lineHeight: "100%", fontWeight: "400", color: "#BDBEBF", textAlign: "left", textTransform:"uppercase" }}>usd</sup></Typography>
            <Typography variant="h3" sx={{ fontSize: "1.125rem", lineHeight: "100%", fontWeight: "400", color: "#67BF6B", textAlign: "left", marginTop: ".625rem" }}>+ 2,161.42 (3.54%)</Typography>
            <Box sx={{
                width: '100%',
                marginTop:"2.5rem",
                ".MuiTabs-root": {
                    ".MuiTabs-scroller": {
                        ".MuiTabs-list": {
                            columnGap: '1.25rem',
                            ".MuiButtonBase-root": {
                                minWidth:"4.1875rem",
                                padding: "0",
                                fontFamily: "Manrope",
                                letterSpacing: "0",
                                textTransform: "capitalize",
                                color: "#6F7177",
                                "&.Mui-selected": {
                                    color: "#1A243A",
                                },
                            },
                        },
                        ".MuiTabs-indicator":{
                            height:".1875rem",
                            backgroundColor: '#4B40EE',
                        }
                    },
                },
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Summary" value="tab1" />
                    <Tab label="Chart" value="tab2" />
                    <Tab label="Statistics" value="tab3" />
                    <Tab label="Analysis" value="tab4" />
                    <Tab label="Settings" value="tab5" />
                </Tabs>
                <Box sx={{ padding:"3.75rem 0 0 0", minHeight:"16.9375rem", }}>
                {value === 'tab1' && <Typography>Summary</Typography>}
                    {value === 'tab2' &&  <ChartWrapper/>}
                    {value === 'tab3' && <Typography>Statistics</Typography>}
                    {value === 'tab4' && <Typography>Analysis</Typography>}
                    {value === 'tab5' && <Typography>Settings</Typography>}
                </Box>
            </Box>
        </Box>
    );
};

export default CatalogGraph;