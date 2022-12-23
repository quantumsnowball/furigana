import {
  AppBar,
  IconButton,
  Toolbar
} from "@mui/material"
import CodeIcon from '@mui/icons-material/Code'
import StarIcon from '@mui/icons-material/Star'
import TranslateIcon from '@mui/icons-material/Translate'
import { useRouter } from "next/router"
import ToolSection from "./ToolSection"
import { useDispatch } from "react-redux"
import { sharedActions } from "../../redux/slices/sharedSlice"


const BottomBar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const setEditorOpen =
    (open: boolean) => dispatch(sharedActions.setEditorOpen(open))

  return (
    <>
      <AppBar
        position="static"
      >
        <Toolbar>
          <IconButton
            disabled={router.pathname !== '/'}
            color="inherit"
            onClick={() => setEditorOpen(true)}
          >
            <CodeIcon />
          </IconButton>
          <ToolSection />
          <IconButton
            color="inherit"
            onClick={() => {
              router.push(router.pathname === '/favorite' ? '/' : '/favorite')
            }}>
            {router.pathname === '/' ?
              <StarIcon /> : <TranslateIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default BottomBar

