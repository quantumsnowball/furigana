import {
  Paper,
  Typography
} from "@mui/material"
import { v4 } from "uuid"
import parse from "html-react-parser"
import {
  FuriganaItem,
  FuriganaItems,
  RomajiItem,
  RomajiItems
} from "../../../types/content"


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

type RowsProps = {
  items: FuriganaItems | RomajiItems
}

const Rows = ({ items }: RowsProps) =>
  <Paper
    elevation={1}
    sx={{ m: 1, p: 1 }}
  >
    {items.map((r: FuriganaItem | RomajiItem) => <Row {...{ item: r }} />
    )}
  </Paper>

export default Rows
