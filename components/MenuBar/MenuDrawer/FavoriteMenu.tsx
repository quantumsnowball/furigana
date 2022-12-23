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
  const favoriteItems = useSelector((s: RootState) => s.favorite.items)
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
            onClick={async () => {
              const [fileHandle] = await window.showOpenFilePicker()
              const file = await fileHandle.getFile()
              const content = await file.text()
              const obj = JSON.parse(content)
              console.log(obj)
              console.log(typeof obj)
            }}
            level={1}
          />
          <MenuButton
            icon={<DownloadIcon />}
            text='Export'
            onClick={async () => {
              const fileHandle = await window.showSaveFilePicker({ suggestedName: 'favorite-items.json' });
              const file = await fileHandle.createWritable()
              await file.write(JSON.stringify(favoriteItems))
              await file.close()
            }}
            level={1}
          />
        </List>
      </Collapse>
    </>
  )
}

export default FavoriteMenu



