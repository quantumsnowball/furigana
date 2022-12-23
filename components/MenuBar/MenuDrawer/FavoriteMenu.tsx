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
import { fileOpen, fileSave } from 'browser-fs-access';
import { formatedDate, formatedTime } from '../../../utils'
import { sharedActions } from '../../../redux/slices/sharedSlice'


function FavoriteMenu() {
  const dispatch = useDispatch()
  const menuDataExpanded = useSelector((s: RootState) => s.layout.menuDataExpanded)
  const [favoriteItems, setFavoriteItems] = [
    useSelector((s: RootState) => s.favorite.items),
    (items: FavoriteItems) => dispatch(favoriteActions.setItems(items))
  ]
  const showSuccessAlert =
    (m: string) => dispatch(sharedActions.showSuccessAlert(m))
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
                const items: FavoriteItems = JSON.parse(await blob.text())
                setFavoriteItems(items)
                router.push('/favorite')
                showSuccessAlert(`Successfully imported ${Object.keys(items).length} favorite items.`)
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
                const dt = new Date()
                const tag = `${formatedDate(dt)}-${formatedTime(dt)}`
                const blob = new Blob([JSON.stringify(favoriteItems, null, 2)], {
                  type: "application/json"
                })
                await fileSave(blob, {
                  fileName: `${tag}-favorite-items.json`,
                  extensions: ['.json',]
                })
                showSuccessAlert(`Successfully exported ${Object.keys(favoriteItems).length} favorite items.`)
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



