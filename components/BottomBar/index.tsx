import {
  AppBar,
  IconButton,
  Toolbar
} from "@mui/material"
import StarIcon from '@mui/icons-material/Star'
import EditIcon from '@mui/icons-material/Edit'
import { useRouter } from "next/router"


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
          <IconButton onClick={() => {
            router.push(router.pathname === '/favorite' ? '/' : '/favorite')
          }}>
            {router.pathname === '/' ?
              <StarIcon sx={{ color: '#fff' }} /> : <EditIcon sx={{ color: '#fff' }} />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default BottomBar

