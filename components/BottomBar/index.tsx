import {
  AppBar,
  IconButton,
  Toolbar
} from "@mui/material"
import StarIcon from '@mui/icons-material/Star'
import EditIcon from '@mui/icons-material/Edit'
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
            <EditIcon />
          </IconButton>
          <ToolSection />
          <IconButton
            color="inherit"
            onClick={() => {
              router.push(router.pathname === '/favorite' ? '/' : '/favorite')
            }}>
            {router.pathname === '/' ?
              <StarIcon /> : <EditIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default BottomBar

