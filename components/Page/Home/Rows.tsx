import {
  Paper,
  Typography
} from "@mui/material"
import parse from "html-react-parser"
import { ContentItem } from "../../../types/content"
import { RootState } from "../../../redux/store"
import { useSelector } from "react-redux"


type RowProps = {
  romajiOn: boolean
  item: ContentItem
}

const Row = ({ romajiOn, item: { furigana, romaji, english, chinese } }: RowProps) =>
  <Paper
    elevation={3}
    sx={{ p: 1, minHeight: 70 }}
  >
    <Typography
      variant='h5'
      sx={{ textAlign: 'left' }}
    >
      {parse(romajiOn ? furigana : romaji)}
    </Typography>
    <Typography
      variant='body1'
      sx={{ textAlign: 'right' }}
    >
      {english}
    </Typography>
    <Typography
      variant='body1'
      sx={{ textAlign: 'right' }}
    >
      {chinese}
    </Typography>
  </Paper>

const Rows = () => {
  const romajiOn = useSelector((s: RootState) => s.layout.romajiOn)
  const items = useSelector((s: RootState) => s.content.items)

  return (
    <Paper
      elevation={1}
      sx={{ m: 1, p: 1 }}
    >
      {items.map((item: ContentItem) => <Row key={item.uuid} {...{ romajiOn, item }} />
      )}
    </Paper>
  )
}

export default Rows
