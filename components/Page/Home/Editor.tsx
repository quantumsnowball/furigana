import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../../../redux/slices/contentSlice"
import { v4 } from 'uuid'
import Kuroshiro from "kuroshiro"
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"
import {
  FuriganaItem,
  RomajiItem,
  SourceItem,
} from "../../../types/content"
import { RootState } from "../../../redux/store"


const kuroshiro = new Kuroshiro();
(async () => await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "dict/" })))()

interface EditorProps {
  editorOpen: boolean,
  setEditorOpen: Dispatch<SetStateAction<boolean>>
}

function Editor({ editorOpen, setEditorOpen }: EditorProps) {
  const dispatch = useDispatch()
  const items = useSelector((s: RootState) => s.content.items)
  const addContent = (uuid: string) => dispatch(contentActions.addContent({ uuid }))
  const clearContent = () => dispatch(contentActions.clearContent())
  const setSource = (s: SourceItem) => dispatch(contentActions.setSource(s))
  const setFurigana = (s: FuriganaItem) => dispatch(contentActions.setFurigana(s))
  const setRomaji = (s: RomajiItem) => dispatch(contentActions.setRomaji(s))
  const [sourceText, setSourceText] = useState(items.map(m => m.source).join('\n'))

  const convert = (mode: string, to: string) =>
    async (txt: string) => await kuroshiro.convert(txt, { mode, to })

  const onClear = () => setSourceText('')
  const onCancel = () => {
    setEditorOpen(false)
    setSourceText(items.map(m => m.source).join('\n'))
  }
  const onConfirm = async () => {
    clearContent()
    const vals = sourceText.split('\n')
    try {
      for (let i = 0; i < vals.length; i++) {
        addContent(v4())
        console.log('added new content')
        let source = vals[i]
        setSource({ i, val: source })
        setFurigana({ i, val: await convert('furigana', 'hiragana')(source) })
        setRomaji({ i, val: await convert('furigana', 'romaji')(source) })
        setEditorOpen(false)
      }
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
          CONFIRM
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Editor
