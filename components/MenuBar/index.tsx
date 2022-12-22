import {
  AppBar,
  IconButton,
  Toolbar
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import MenuDrawer from "./MenuDrawer"
import { useDispatch, useSelector } from "react-redux"
import TitleSection from "./TitleSection"
import { RootState } from "../../redux/store"
import { sharedActions } from "../../redux/slices/sharedSlice"


const MenuButton = () => {
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = [
    useSelector((s: RootState) => s.shared.menuOpen),
    (open: boolean) => dispatch(sharedActions.setMenuOpen(open))
  ]
  return (
    <IconButton
      color="inherit"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <MenuIcon />
    </IconButton>
  )
}

const MenuBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <MenuButton />
          <TitleSection />
        </Toolbar>
      </AppBar>
      <MenuDrawer />
    </>
  )
}

export default MenuBar
