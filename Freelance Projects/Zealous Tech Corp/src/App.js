import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
const App = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'none',md:'flex'}}}>
                <LocalLibraryIcon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1,display:{xs:'none',md:'flex'}}}>Noorul Ashfaq</Typography>
            <Box sx={{display:{xs:'none',md:'flex'}}}>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Services</Button>
                <Button color='inherit'>Team</Button>
            </Box>
            <Box sx={{display:{xs:'flex',md:'none'}}}>
                <IconButton size='large' edge='start' color='inherit'>
                  <MenuIcon/>
                </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default App
