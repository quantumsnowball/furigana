import {
  Paper,
  Typography
} from "@mui/material"
import parse from "html-react-parser"
import { ContentItem } from "../../../types/content"
import { RootState } from "../../../redux/store"
import { useSelector } from "react-redux"
import { WordMode } from "../../../types"


type RowProps = {
  wordMode: WordMode
  item: ContentItem
}

const Row = ({ wordMode, item: { source, furigana, romaji, english, chinese } }: RowProps) =>
  <Paper
    elevation={3}
    sx={{ p: 1, minHeight: 70 }}
  >
    <Typography
      variant='h5'
      sx={{ textAlign: 'left' }}
    >
      {parse([source, furigana, romaji][wordMode])}
    </Typography>
    <Typography
      variant='body2'
      sx={{ textAlign: 'right' }}
    >
      {english}
    </Typography>
    <Typography
      variant='body2'
      sx={{ textAlign: 'right' }}
    >
      {chinese}
    </Typography>
  </Paper>

const Rows = () => {
  const wordMode = useSelector((s: RootState) => s.layout.wordMode)
  const items = useSelector((s: RootState) => s.content.items)

  return (
    <>
      {items.map((item: ContentItem) => <Row key={item.uuid} {...{ wordMode, item }} />
      )}
    </>
  )
}

export default Rows
