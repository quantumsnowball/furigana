import {
  Paper,
  styled,
  TextField,
} from "@mui/material";
import { Overflow, Stretch } from "../../styled/containers";
import Kuroshiro from "kuroshiro"
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"
import { FabToggleRomaji } from "./Buttons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { contentActions } from "../../../redux/slices/contentSlice";
import Row from "./Row";


const ContentDiv = styled(Overflow(Stretch('div')))`
`

const kuroshiro = new Kuroshiro();
(async () => await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "dict/" })))()

function Home() {
  const dispatch = useDispatch()
  const [source, setSource] = [
    useSelector((s: RootState) => s.content.source),
    (s: string[]) => dispatch(contentActions.setSource(s))
  ]
  const [furigana, setFurigana] = [
    useSelector((s: RootState) => s.content.furigana),
    (s: string[]) => dispatch(contentActions.setFurigana(s))
  ]
  const [romaji, setRomaji] = [
    useSelector((s: RootState) => s.content.romaji),
    (s: string[]) => dispatch(contentActions.setRomaji(s))
  ]
  const romajiOn = useSelector((s: RootState) => s.layout.romajiOn)

  const convert = (mode: string, to: string) =>
    async (txt: string) => await kuroshiro.convert(txt, { mode, to })


  return (
    <ContentDiv id='content-ctn'>
      <Paper
        elevation={1}
        sx={{ p: 1 }}
      >
        <TextField
          fullWidth
          multiline
          label='Japanese'
          value={source.join('\n')}
          onChange={async e => {
            const vals = e.target.value.split('\n')
            setSource(vals)
            try {
              setFurigana(await Promise.all(vals.map(
                async (txt: string) => await convert('furigana', 'hiragana')(txt))))
              setRomaji(await Promise.all(vals.map(
                async (txt: string) => await convert('furigana', 'romaji')(txt))))
            } catch (err) {
              console.log(err)
            }
          }}
        />
      </Paper>
      {romajiOn ?
        <Row entry={romaji} />
        :
        <Row entry={furigana} />
      }
      <FabToggleRomaji />
    </ContentDiv>
  )
}

export default Home
