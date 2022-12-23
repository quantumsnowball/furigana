import {
  IconButton,
  Paper,
  Typography
} from "@mui/material"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { contentActions } from "../../../redux/slices/contentSlice"
import { Content } from "../../../types/content"
import ClearIcon from '@mui/icons-material/Clear'
import { favoriteActions } from "../../../redux/slices/favoriteSlice"
import { sharedActions } from "../../../redux/slices/sharedSlice"


interface SummaryProps {
  content: Content
}

function Summary({ content }: SummaryProps) {
  const { title, items } = content
  const router = useRouter()
  const dispatch = useDispatch()
  const setContent = (c: Content) => dispatch(contentActions.setContent(c))
  const removeItem = (title: string) => dispatch(favoriteActions.removeItem(title))

  return (
    <Paper
      elevation={1}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        p: 1
      }}
      onClick={() => {
        setContent(content)
        dispatch(sharedActions.setLoadedAlertOpen(true))
        router.push('/')
      }}
    >
      <Typography
        variant='h5'
        sx={{
          flex: 1,
          textAlign: 'left'
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        sx={{
          textAlign: 'right'
        }}
      >
        {items.length}
      </Typography>
      <IconButton
        color='error'
        onClick={e => {
          removeItem(content.title)
          e.stopPropagation()
        }}
      >
        <ClearIcon />
      </IconButton>
    </Paper>
  )

}
export default Summary
