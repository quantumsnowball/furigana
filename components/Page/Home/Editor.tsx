import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../../../redux/slices/contentSlice"
import { RootState } from "../../../redux/store"
import Kuroshiro from "kuroshiro"
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"


const kuroshiro = new Kuroshiro();
(async () => await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "dict/" })))()

interface EditorProps {
  editorOpen: boolean,
  setEditorOpen: Dispatch<SetStateAction<boolean>>
}

function Editor({ editorOpen, setEditorOpen }: EditorProps) {
  const dispatch = useDispatch()
  const [source, setSource] = [
    useSelector((s: RootState) => s.content.source),
    (s: string[]) => dispatch(contentActions.setSource(s))
  ]
  const setFurigana =
    (s: string[]) => dispatch(contentActions.setFurigana(s))

  const setRomaji =
    (s: string[]) => dispatch(contentActions.setRomaji(s))

  const [sourceText, setSourceText] = useState(source.join('\n'))

  const convert = (mode: string, to: string) =>
    async (txt: string) => await kuroshiro.convert(txt, { mode, to })

  const onClear = () => setSourceText('')
  const onCancel = () => {
    setEditorOpen(false)
    setSourceText(source.join('\n'))
  }
  const onConfirm = async () => {
    const vals = sourceText.split('\n')
    setSource(vals)
    try {
      setFurigana(await Promise.all(vals.map(
        async (txt: string) => await convert('furigana', 'hiragana')(txt))))
      setRomaji(await Promise.all(vals.map(
        async (txt: string) => await convert('furigana', 'romaji')(txt))))
      setEditorOpen(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Dialog
      fullScreen
      open={editorOpen}
      onClose={onCancel}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Source Text
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter Japanese text.
        </DialogContentText>
        <TextField
          fullWidth
          multiline
          variant='filled'
          value={sourceText}
          onChange={e => setSourceText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClear} color='error'>
          Clear
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Editor
