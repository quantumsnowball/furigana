import {
  Button
} from "@mui/material";
import { useDispatch } from "react-redux";
import { sharedActions } from "../../../redux/slices/sharedSlice";


export function ToggleEditor() {
  const dispatch = useDispatch()
  const setEditorOpen =
    (open: boolean) => dispatch(sharedActions.setEditorOpen(open))


  return (
    <Button
      onClick={() => setEditorOpen(true)}
    >
      Edit
    </Button>
  )
}

