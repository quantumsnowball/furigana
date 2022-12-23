import { List, Collapse } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import UploadIcon from '@mui/icons-material/Upload'
import DownloadIcon from '@mui/icons-material/Download'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../redux/slices/layoutSlice'
import { MenuButtonGrouper, MenuButton } from './common'
import { FavoriteItems } from '../../../types/favorite'
import { favoriteActions } from '../../../redux/slices/favoriteSlice'


function FavoriteMenu() {
  const dispatch = useDispatch()
  const menuDataExpanded = useSelector((s: RootState) => s.layout.menuDataExpanded)
  const [favoriteItems, setFavoriteItems] = [
    useSelector((s: RootState) => s.favorite.items),
    (items: FavoriteItems) => dispatch(favoriteActions.setItems(items))
  ]

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
              const [fileHandle] = await window.showOpenFilePicker({
                types: [
                  {
                    description: 'JSON',
                    accept: {
                      'json/*': ['.json',]
                    }
                  }
                ],
                multiple: false
              })
              const file = await fileHandle.getFile()
              const content = await file.text()
              const items = JSON.parse(content)
              setFavoriteItems(items)
            }}
            level={1}
          />
          <MenuButton
            icon={<DownloadIcon />}
            text='Export'
            onClick={async () => {
              const fileHandle = await window.showSaveFilePicker({ suggestedName: 'favorite-items.json' });
              const file = await fileHandle.createWritable()
              await file.write(JSON.stringify(favoriteItems, null, 2))
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



