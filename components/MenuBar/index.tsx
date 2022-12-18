import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useState } from "react"
import MenuDrawer from "../MenuDrawer"
import { useDispatch } from "react-redux"
import { themeActions } from "../../redux/slices/themeSlice"


const MenuBar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <AppBar position={isMobile ? "fixed" : "static"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            Furigana
          </Typography>
          <IconButton onClick={() => dispatch(themeActions.toggleMode())}>
            {theme.palette.mode === 'light' ?
              <LightModeIcon sx={{ color: '#fff' }} /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuDrawer {...{ menuOpen, setMenuOpen }} />
    </>
  )
}

export default MenuBar
