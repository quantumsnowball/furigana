import { IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import { WORD_MODE_TAGS } from "../../../constants"
import { layoutActions } from "../../../redux/slices/layoutSlice"
import { RootState } from "../../../redux/store"


function Toolbar() {
  const dispatch = useDispatch()
  const [wordMode, toggleWordMode] = [
    useSelector((s: RootState) => s.layout.wordMode),
    () => dispatch(layoutActions.toggleWordMode())
  ]

  return (
    <Box
      sx={{ flex: 1 }}
    >
      <IconButton
        color='inherit'
        onClick={toggleWordMode}
      >
        {WORD_MODE_TAGS[wordMode]}
      </IconButton>
    </Box>
  )
}
export default Toolbar
