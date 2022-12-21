import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import StarIcon from '@mui/icons-material/Star'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from "react"
import MenuDrawer from "./MenuDrawer"
import { useDispatch } from "react-redux"
import { themeActions } from "../../redux/slices/themeSlice"
import TitleSection from "./TitleSection"
import { useRouter } from 'next/router'


const MenuBar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <AppBar position="static">
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
          <TitleSection />
          <IconButton onClick={() => {
            router.push(router.pathname === '/favorite' ? '/' : '/favorite')
          }}>
            {router.pathname === '/' ?
              <StarIcon sx={{ color: '#fff' }} /> : <EditIcon sx={{ color: '#fff' }} />}
          </IconButton>
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
