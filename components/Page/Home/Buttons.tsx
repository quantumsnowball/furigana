import {
  Button
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";


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

