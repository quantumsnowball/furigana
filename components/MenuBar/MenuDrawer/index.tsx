import { Box, Divider, SwipeableDrawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { APP_NAME } from '../../../constants'
import { sharedActions } from '../../../redux/slices/sharedSlice'
import { RootState } from '../../../redux/store'
import AboutMenu from './AboutMenu'
import { MenuTitle } from './common'
import FavoriteMenu from './FavoriteMenu'
import SettingsMenu from './SettingsMenu'
import ThemeMenu from './ThemeMenu'


function MenuDrawer() {
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = [
    useSelector((s: RootState) => s.shared.menuOpen),
    (open: boolean) => dispatch(sharedActions.setMenuOpen(open))
  ]

  return (
    <SwipeableDrawer
      anchor="left"
      open={menuOpen}
      onOpen={() => setMenuOpen(true)}
      onClose={() => setMenuOpen(false)}
    >
      <Box
        sx={{
          width: 250
        }}
        role="presentation"
        onClick={() => setMenuOpen(false)}
        onKeyDown={() => setMenuOpen(false)}
      >
        <MenuTitle title={APP_NAME} />
        <Divider />
        <ThemeMenu />
        <Divider />
        <FavoriteMenu />
        <Divider />
        <SettingsMenu />
        <Divider />
        <AboutMenu />
      </Box>
    </SwipeableDrawer>
  )
}

export default MenuDrawer

