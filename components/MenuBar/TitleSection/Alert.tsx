import { Alert, Button, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { favoriteActions } from "../../../redux/slices/favoriteSlice";
import { RootState } from "../../../redux/store";
import { Content } from "../../../types/content";
import {
  CONSENT_ALERT_DURATION,
  ERROR_ALERT_DURATION,
  SUCCESS_ALERT_DURATION
} from "../../../constants/layout";
import { sharedActions } from "../../../redux/slices/sharedSlice";


export function SuccessAlert() {
  const dispatch = useDispatch()
  const [alert, hideAlert] = [
    useSelector((s: RootState) => s.shared.successAlert),
    () => dispatch(sharedActions.hideSuccessAlert())
  ]

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={SUCCESS_ALERT_DURATION}
      open={alert.open}
      onClose={hideAlert}
      sx={{ mt: 8 }}

    >
      <Alert
        sx={{ py: 2, width: '100%' }}
        onClick={hideAlert}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  )
}

export function OverwriteAlert() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.title)
  const items = useSelector((s: RootState) => s.content.items)
  const replaceFavorite = (c: Content) => dispatch(favoriteActions.setItem(c))
  const [overwriteAlertOpen, setOverwriteAlertOpen] = [
    useSelector((s: RootState) => s.shared.overwriteAlertOpen),
    (open: boolean) => dispatch(sharedActions.setOverwriteAlertOpen(open))
  ]

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={CONSENT_ALERT_DURATION}
      open={overwriteAlertOpen}
      onClose={() => setOverwriteAlertOpen(false)}
      sx={{ mt: 8 }}
    >
      <Alert
        color='warning'
        sx={{ py: 2, width: '100%' }}
        onClick={() => setOverwriteAlertOpen(false)}
        action={
          <Button
            size='small'
            color='warning'
            variant='outlined'
            onClick={e => {
              replaceFavorite({ title, items })
              setOverwriteAlertOpen(false)
              e.stopPropagation()
              dispatch(sharedActions.showSuccessAlert(`Worksheet saved to '${title}' successfully.`))
            }}
          >
            Overwrite
          </Button>
        }
      >
        Worksheet {"'"}{title}{"'"} already exists!
      </Alert>
    </Snackbar>
  )
}

interface ErrorAlertProps {
  text: string
}

export function ErrorAlert({ text }: ErrorAlertProps) {
  const dispatch = useDispatch()
  const [open, setOpen] = [
    useSelector((s: RootState) => s.shared.titleErrorAlertOpen),
    (open: boolean) => dispatch(sharedActions.setTitleErrorAlertOpen(open))
  ]
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={ERROR_ALERT_DURATION}
      sx={{ mt: 8 }}
    >
      <Alert
        color='error'
        variant='filled'
        sx={{ py: 2, width: '100%' }}
        onClick={() => setOpen(false)}
      >
        {text}
      </Alert>
    </Snackbar>
  )
}
