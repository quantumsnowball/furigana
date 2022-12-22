import {
  Box,
  IconButton,
  Typography,
} from "@mui/material"
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import EditDialog from "./EditDialog"
import { ErrorAlert, OverwriteAlert, ResetAlert, SavedAlert } from "./Alert"
import { sharedActions } from "../../../../redux/slices/sharedSlice"


export function Toolbar() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.title)
  const [setEditOpen] = [
    (open: boolean) => dispatch(sharedActions.setEditTitleOpen(open))
  ]
  const [setResetAlertOpen] = [
    (open: boolean) => dispatch(sharedActions.setResetAlertOpen(open))
  ]

  const ResetButton = () =>
    <IconButton
      sx={{ color: '#ccc' }}
      aria-label='Reset WorkSpace'
      onClick={() => setResetAlertOpen(true)}
    >
      <RestartAltIcon />
    </IconButton>

  return (

    <>
      <Box sx={{ flexGrow: 1 }}>
        <ResetButton />
        <Typography
          component="span"
          sx={{ cursor: 'pointer' }}
          onClick={() => setEditOpen(true)}
        >
          {title}
        </Typography>
      </Box>
      <EditDialog />
      <SavedAlert />
      <ResetAlert />
      <OverwriteAlert />
      <ErrorAlert
        text='Please enter a title before saving.'
      />
    </>
  )
}
