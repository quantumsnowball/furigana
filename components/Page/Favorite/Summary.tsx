import {
  Paper,
  Typography
} from "@mui/material"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { contentActions } from "../../../redux/slices/contentSlice"
import { Content } from "../../../types/content"


interface SummaryProps {
  content: Content
}

function Summary({ content }: SummaryProps) {
  const { title, items } = content
  const router = useRouter()
  const dispatch = useDispatch()
  const setContent = (c: Content) => dispatch(contentActions.setContent(c))

  return (
    <Paper
      elevation={1}
      sx={{
        display: 'flex',
        p: 1
      }}
      onClick={() => {
        setContent(content)
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
    </Paper>
  )

}
export default Summary
