import { Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { layoutActions } from "../../../redux/slices/layoutSlice";
import { RootState } from "../../../redux/store";


export function FabToggleRomaji() {
  const dispatch = useDispatch()
  const [romajiOn, toggleRomajiOn] = [
    useSelector((s: RootState) => s.layout.romajiOn),
    () => dispatch(layoutActions.toggleRomajiOn())
  ]

  return (
    <Fab
      color='primary'
      sx={{
        position: 'absolute',
        bottom: 25,
        right: 25
      }}
      onClick={toggleRomajiOn}
    >
      {romajiOn ? 'A' : 'あ'}
    </Fab>
  )
}
