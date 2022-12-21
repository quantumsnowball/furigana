import {
  Button,
  Fab
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WORD_MODE_TAGS } from "../../../constants";
import { layoutActions } from "../../../redux/slices/layoutSlice";
import { RootState } from "../../../redux/store";


interface ToogleEditorProps {
  setEditorOpen: Dispatch<SetStateAction<boolean>>
}

export function ToggleEditor({ setEditorOpen }: ToogleEditorProps) {
  return (
    <Button
      onClick={() => setEditorOpen(true)}
    >
      Edit
    </Button>
  )
}

export function FabToggleRomaji() {
  const dispatch = useDispatch()
  const [wordMode, toggleWordMode] = [
    useSelector((s: RootState) => s.layout.wordMode),
    () => dispatch(layoutActions.toggleWordMode())
  ]

  return (
    <Fab
      color='primary'
      sx={{
        position: 'absolute',
        bottom: 25,
        right: 25
      }}
      onClick={toggleWordMode}
    >
      {WORD_MODE_TAGS[wordMode]}
    </Fab>
  )
}
