import { Alert, Button, Snackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DEFAULT_CONTENT } from "../../../../constants/content";
import { contentActions } from "../../../../redux/slices/contentSlice";
import { favoriteActions } from "../../../../redux/slices/favoriteSlice";
import { RootState } from "../../../../redux/store";
import { Content } from "../../../../types/content";
import {
  CONSENT_ALERT_DURATION,
  ERROR_ALERT_DURATION,
  SUCCESS_ALERT_DURATION
} from "../../../../constants/layout";


interface SavedAlertProps {
  savedAlertOpen: boolean
  setSavedAlertOpen: Dispatch<SetStateAction<boolean>>
}

export function SavedAlert({ savedAlertOpen, setSavedAlertOpen }: SavedAlertProps) {
  const title = useSelector((s: RootState) => s.content.title)

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={SUCCESS_ALERT_DURATION}
      open={savedAlertOpen}
      onClose={() => setSavedAlertOpen(false)}
      sx={{ mt: 8 }}

    >
      <Alert
        sx={{ py: 2, width: '100%' }}
        onClick={() => setSavedAlertOpen(false)}
      >
        Worksheet saved as {"'"}{title}{"'"} successfully.
      </Alert>
    </Snackbar>
  )
}

interface ResetAlertProps {
  resetAlertOpen: boolean
  setResetAlertOpen: Dispatch<SetStateAction<boolean>>
}

export function ResetAlert({
  resetAlertOpen,
  setResetAlertOpen,
}: ResetAlertProps) {
  const dispatch = useDispatch()
  const setContent = (c: Content) => dispatch(contentActions.setContent(c))

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={CONSENT_ALERT_DURATION}
      open={resetAlertOpen}
      onClose={() => setResetAlertOpen(false)}
      sx={{ mt: 8 }}
    >
      <Alert
        color='warning'
        sx={{ py: 2, width: '100%' }}
        onClick={() => setResetAlertOpen(false)}
        action={
          <Button
            size='small'
            color='warning'
            variant='outlined'
            onClick={e => {
              setContent(DEFAULT_CONTENT)
              setResetAlertOpen(false)
              e.stopPropagation()
            }}
          >
            Reset
          </Button>
        }
      >
        Are your sure to reset the worksheet?
      </Alert>
    </Snackbar>
  )
}

interface OverwriteAlertProps {
  overwriteAlertOpen: boolean
  setOverwriteAlertOpen: Dispatch<SetStateAction<boolean>>
  setSavedAlertOpen: Dispatch<SetStateAction<boolean>>
}

export function OverwriteAlert({
  overwriteAlertOpen,
  setOverwriteAlertOpen,
  setSavedAlertOpen
}: OverwriteAlertProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.title)
  const items = useSelector((s: RootState) => s.content.items)
  const replaceFavorite = (c: Content) => dispatch(favoriteActions.setItem(c))

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
              setSavedAlertOpen(true)
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
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function ErrorAlert({ text, open, setOpen }: ErrorAlertProps) {
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
