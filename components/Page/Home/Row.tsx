import {
  Paper,
  Typography
} from "@mui/material"
import { v4 } from "uuid"
import parse from "html-react-parser"


const Row = ({ entry }: { entry: string[] }) =>
  <Paper
    elevation={1}
    sx={{ m: 1, p: 1 }}
  >
    {entry.map((r: string) =>
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
