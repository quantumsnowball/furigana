import { List, Collapse } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import UploadIcon from '@mui/icons-material/Upload'
import DownloadIcon from '@mui/icons-material/Download'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../redux/slices/layoutSlice'
import { MenuButtonGrouper, MenuButton } from './common'


function FavoriteMenu() {
  const menuDataExpanded = useSelector((s: RootState) => s.layout.menuDataExpanded)
  const dispatch = useDispatch()

  return (
    <>
      <MenuButtonGrouper
        icon={<StarIcon />}
        text='Favorite'
        open={menuDataExpanded}
        toggle={() => dispatch(layoutActions.toggleMenuDataExpanded())}
      />
      <Collapse in={menuDataExpanded} timeout="auto" unmountOnExit>
        <List>
          <MenuButton
            icon={<UploadIcon />}
            text='Import'
            onClick={e => {
              alert('import')
            }}
            level={1}
          />
          <MenuButton
            icon={<DownloadIcon />}
            text='Export'
            onClick={e => {
              alert('export')
            }}
            level={1}
          />
        </List>
      </Collapse>
    </>
  )
}

export default FavoriteMenu



