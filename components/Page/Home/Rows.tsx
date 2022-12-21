import {
  Paper,
  Typography
} from "@mui/material"
import { v4 } from "uuid"
import parse from "html-react-parser"
import {
  FuriganaItem,
  RomajiItem,
} from "../../../types/content"
import { RootState } from "../../../redux/store"
import { useSelector } from "react-redux"


type RowProps = {
  item: FuriganaItem | RomajiItem
}

const Row = ({ item }: RowProps) =>
  <Paper
    key={v4()}
    elevation={3}
    sx={{ p: 1, height: 70 }}
  >
    <Typography
      variant='h5'
      sx={{ textAlign: 'left' }}
    >
      {parse(item)}
    </Typography>
  </Paper>

const Rows = () => {
  const furigana = useSelector((s: RootState) => s.content.furigana)
  const romaji = useSelector((s: RootState) => s.content.romaji)
  const romajiOn = useSelector((s: RootState) => s.layout.romajiOn)
  const items = romajiOn ? romaji : furigana

  return (
    <Paper
      elevation={1}
      sx={{ m: 1, p: 1 }}
    >
      {items.map((item: FuriganaItem | RomajiItem) => <Row {...{ item }} />
      )}
    </Paper>
  )
}

export default Rows
