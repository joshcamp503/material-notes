// HOOKS
import { useNavigate, useLocation } from 'react-router-dom'

// COMPONENTS
import Box from "@mui/material/Box"
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectOutlined from '@mui/icons-material/SubjectOutlined'
import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined'


const drawerWidth = 240

const classes = {
  page: {
    background: '#f9f9f9',
    width: '100%'
  },

  drawer: {
    width: drawerWidth,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },

  root: {
    display: 'flex',
  },

  active: {
    background: '#f4f4f4'
  },
}

const Layout = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    },
  ]

  return (
    <Box sx={classes.root}>
      {/* APP BAR */}

      {/* SIDE DRAWER */}
      <Drawer
        sx={classes.drawer}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography variant="h5">
            Material Notes
          </Typography>
        </Box>

        {/* LIST / LINKS */}
        <List>
          {menuItems.map(item => (
            <ListItem 
              button 
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

      <Box sx={classes.page} >
        {children}
      </Box>

    </Box>
  )
}
export default Layout