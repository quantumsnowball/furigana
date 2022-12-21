import {
  Paper,
  Typography
} from "@mui/material"
import { Content } from "../../../types/content"


interface SummaryProps {
  content: Content
}

function Summary({ content: { title, items } }: SummaryProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        display: 'flex',
        p: 1
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
