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


const BottomBar = () => {
  const router = useRouter()

  return (
    <>
      <AppBar
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
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

