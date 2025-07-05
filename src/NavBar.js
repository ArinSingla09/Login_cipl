import React, { useState } from "react";
import {Box,Button,InputBase,Toolbar,Typography,useMediaQuery, Drawer,List,Divider,ListItem,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import InfoIcon from '@mui/icons-material/Info';
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: "Home", icon: <HomeFilledIcon fontSize="smaller" /> },
  { label: "About", icon: <InfoIcon fontSize="smaller" /> },
  { label: "Orders & Circulars", icon: <AssignmentOutlinedIcon fontSize="smaller" /> },
  { label: "Acts", icon: <ImportContactsTwoToneIcon fontSize="smaller" /> },
  { label: "Complaint/Report", icon: <PersonOutlineOutlinedIcon fontSize="smaller" /> },
  { label: "National Conference/Media", icon: <VideocamOutlinedIcon fontSize="smaller" /> },
  { label: "Contact", icon: <LocalPhoneOutlinedIcon fontSize="smaller" /> },
  { label: "Analytics", icon: <AutoAwesomeMosaicOutlinedIcon fontSize="smaller" /> },
  { label: "Login", icon: <LoginOutlinedIcon fontSize="smaller" /> }
];


const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile=useMediaQuery('(max-width: 1000px)')
  const isActive = (index) => {
    setActiveIndex(index);
  }; 
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
      <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{display: 'flex',mx:0.5,px:1,alignItems: "center",backgroundColor: index === activeIndex ? "rgba(255,255,255,0.2)" : "transparent",'&:hover':{backgroundColor:"rgba(255,255,255,0.2)"}}} onClick={() => isActive(index)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{fontSize:'10px'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
  
  
  return (
    <div style={{width: "100%",height:"2.5rem",backgroundColor: "#DE6C33",display:'flex',justifyContent:"space-between",alignItems:"center",overflowX:"hidden"}}>
      {!isMobile && (
        <Toolbar variant={'10%'} sx={{ display: "flex",justifyContent:"space-between",alignItems:"center" }}>
          {navItems.map((item, index) => (
            <Button key={item.label} sx={{display: 'flex',mx:0.5,px:1,alignItems: "center",backgroundColor: index === activeIndex ? "rgba(255,255,255,0.2)" : "transparent",color: "white",'&:hover':{backgroundColor:"rgba(255,255,255,0.2)"}}} onClick={() => isActive(index)}> 
              {item.icon} 
              <Typography px={0.5} fontSize={'9px'}> {item.label} </Typography>
            </Button>
          ))}
        </Toolbar>
      )}

      {isMobile &&(
        <div>
          <Button onClick={toggleDrawer(true)}><MenuIcon color="black" /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
        </div>
      )}

      <Box sx={{display: 'flex',alignItems: 'center',backgroundColor: 'white',borderRadius: 4,mx: 2,px: 1,height: 30}}>
            <InputBase placeholder="Search" sx={{ fontSize: '0.8rem', px: 1, width: '100%' }} />
            <SearchIcon fontSize="smaller" />
          </Box>
    </div>
  );
};

export default NavBar;