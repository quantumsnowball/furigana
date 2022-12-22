import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuDrawer from "./MenuDrawer"
import { useDispatch, useSelector } from "react-redux"
import { themeActions } from "../../redux/slices/themeSlice"
import TitleSection from "./TitleSection"
import { RootState } from "../../redux/store"
import { sharedActions } from "../../redux/slices/sharedSlice"


const MenuBar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const [menuOpen, setMenuOpen] = [
    useSelector((s: RootState) => s.shared.menuOpen),
    (open: boolean) => dispatch(sharedActions.setMenuOpen(open))
  ]

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
          <TitleSection />
          <IconButton
            color='inherit'
            onClick={() => dispatch(themeActions.toggleMode())}>
            {theme.palette.mode === 'light' ?
              <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuDrawer />
    </>
  )
}

export default MenuBar
