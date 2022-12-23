import { List, Collapse } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import EastIcon from '@mui/icons-material/East'
import WestIcon from '@mui/icons-material/West'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../redux/slices/layoutSlice'
import { MenuButtonGrouper, MenuButton } from './common'
import { FavoriteItems } from '../../../types/favorite'
import { favoriteActions } from '../../../redux/slices/favoriteSlice'
import { useRouter } from "next/router"
import {
  fileOpen,
  directoryOpen,
  fileSave,
  supported,
} from 'browser-fs-access';


function FavoriteMenu() {
  const dispatch = useDispatch()
  const menuDataExpanded = useSelector((s: RootState) => s.layout.menuDataExpanded)
  const [favoriteItems, setFavoriteItems] = [
    useSelector((s: RootState) => s.favorite.items),
    (items: FavoriteItems) => dispatch(favoriteActions.setItems(items))
  ]
  const router = useRouter()

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
            icon={<EastIcon />}
            text='Import'
            onClick={async () => {
              try {
                const blob = await fileOpen({
                  description: 'JSON files',
                  mimeTypes: ['application/json',],
                  extensions: ['.json',],
                  multiple: false
                })
                const items = JSON.parse(await blob.text())
                setFavoriteItems(items)
                router.push('/favorite')
                alert('Successfully imported favorite items.')
              } catch (err) {
                console.log(err)
              }
            }}
            level={1}
          />
          <MenuButton
            icon={<WestIcon />}
            text='Export'
            onClick={async () => {
              try {
                const fileHandle = await window.showSaveFilePicker({ suggestedName: 'favorite-items.json' });
                const file = await fileHandle.createWritable()
                await file.write(JSON.stringify(favoriteItems, null, 2))
                await file.close()
                alert('Successfully exported favorite items.')
              } catch (err) {
                console.log(err)
              }
            }}
            level={1}
          />
        </List>
      </Collapse>
    </>
  )
}

export default FavoriteMenu



