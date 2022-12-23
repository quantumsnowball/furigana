import {
  AppBar,
  IconButton,
  Toolbar
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import MenuDrawer from "./MenuDrawer"
import SaveAsIcon from '@mui/icons-material/SaveAs'
import { useDispatch, useSelector } from "react-redux"
import TitleSection from "./TitleSection"
import { RootState } from "../../redux/store"
import { sharedActions } from "../../redux/slices/sharedSlice"
import { Content } from "../../types/content"
import { favoriteActions } from "../../redux/slices/favoriteSlice"


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

const SaveAsButton = () => {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.title)
  const items = useSelector((s: RootState) => s.content.items)
  const [favorites, addFavorite] = [
    useSelector((s: RootState) => s.favorite.items),
    (c: Content) => dispatch(favoriteActions.setItem(c))
  ]
  const setOverwriteAlertOpen =
    (open: boolean) => dispatch(sharedActions.setOverwriteAlertOpen(open))

  const setTitleErrorAlertOpen =
    (open: boolean) => dispatch(sharedActions.setTitleErrorAlertOpen(open))

  return (
    <IconButton
      sx={{ color: '#ccc' }}
      aria-label='Save As Favorite'
      onClick={() => {
        if (title.length === 0) {
          setTitleErrorAlertOpen(true)
          return
        }
        if (title in favorites) {
          setOverwriteAlertOpen(true)
          return
        }
        addFavorite({ title, items })
        dispatch(sharedActions.showSuccessAlert(`Worksheet saved as '${title}' successfully.`))
      }}
    >
      <SaveAsIcon />
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
          <SaveAsButton />
        </Toolbar>
      </AppBar>
      <MenuDrawer />
    </>
  )
}

export default MenuBar
