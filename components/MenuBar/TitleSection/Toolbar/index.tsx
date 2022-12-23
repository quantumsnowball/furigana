import {
  Box,
  Typography,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { sharedActions } from "../../../../redux/slices/sharedSlice"


export function Toolbar() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.title)
  const [setEditOpen] = [
    (open: boolean) => dispatch(sharedActions.setEditTitleOpen(open))
  ]

  return (

    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          component="span"
          sx={{ cursor: 'pointer' }}
          onClick={() => setEditOpen(true)}
        >
          {title}
        </Typography>
      </Box>
    </>
  )
}
