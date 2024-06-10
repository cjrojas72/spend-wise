import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { UserButton } from '@clerk/clerk-react';
import { SignOutButton } from '@clerk/clerk-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 1024px)');

    console.log(isMobile);

    const toggleDrawer = (open) => (event) => {
        if (
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
        setOpen(open);
      };

    if(isMobile){
        return(
            <>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}>
                        <MenuIcon />
                 </IconButton>
                 <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                    <div style={{ width: 250 }} className='flex flex-col'>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        style={{ alignSelf: 'flex-end', marginRight: '5px', marginBottom: '10px', }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <List>
                    <ListItem className='hover:bg-slate-300'>
                        <Link to="/dashboard" >Dashboard</Link>
                    </ListItem>
                    <ListItem className='hover:bg-slate-300'>
                        <Link to="/dashboard/budgets">Budgets</Link>
                    </ListItem>
                    <ListItem className='hover:bg-slate-300'>
                        <Link to="/dashboard/expenses">Expenses</Link>
                    </ListItem>
                    <ListItem className='flex justify-center mt-10' >
                        <div>
                            <SignOutButton>
                                <Button variant="contained" id="header-sign-out" style={{width: '200px', color:'var(--ui-color)'}}>Sign out</Button>
                            </SignOutButton >
                        </div>
                        
                    </ListItem>
                    </List>
                    </div>
                </Drawer>

            </>
        )
    }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Button variant='outlinded' color='#fafafa'><Link to="/dashboard" >Dashboard</Link></Button>
        <Button variant='outlinded' color='#fafafa'><Link to="/dashboard/budgets">Budgets</Link></Button>
        <Button variant='outlinded' color='#fafafa'><Link to="/dashboard/expenses">Expenses</Link></Button>
        <div className='ml-5'>
            <UserButton showName="true"/>
        </div>
        <div className='ml-5'>
            <SignOutButton>
                <Button variant="outlined" id="header-sign-out">Sign out</Button>
            </SignOutButton >
        </div>
      </Box>
    </>
  );
}
