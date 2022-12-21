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
  entry: FuriganaItems | RomajiItems
}

const Row = ({ entry }: RowProps) =>
  <Paper
    elevation={1}
    sx={{ m: 1, p: 1 }}
  >
    {entry.map((r: FuriganaItem | RomajiItem) =>
      <Paper
        key={v4()}
        elevation={3}
        sx={{ p: 1, height: 70 }}
      >
        <Typography
          variant='h5'
          sx={{ textAlign: 'left' }}
        >
          {parse(r)}
        </Typography>
      </Paper>
    )}
  </Paper>

export default Row
