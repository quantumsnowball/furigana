import {
  Paper,
  styled,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Overflow, Stretch } from "../../styled/containers";
import Kuroshiro from "kuroshiro"
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"
import parse from "html-react-parser"
import { FabToggleRomaji } from "./Buttons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


const ContentDiv = styled(Overflow(Stretch('div')))`
`

const kuroshiro = new Kuroshiro();
(async () => await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "dict/" })))()

function Home() {
  const [source, setSource] = useState([''])
  const [furigana, setFurigana] = useState([''])
  const [romaji, setRomaji] = useState([''])
  const romajiOn = useSelector((s: RootState) => s.layout.romajiOn)

  const convert = (mode: string, to: string) =>
    async (txt: string) => await kuroshiro.convert(txt, { mode, to })


  const Row = ({ entry }: { entry: string[] }) =>
    <Paper
      elevation={1}
      sx={{ m: 1, p: 1 }}
    >
      {entry.map((r: string) =>
        <Paper
          elevation={3}
          sx={{ p: 1, height: 70 }}
        >
          <Typography
            variant='h5'
            sx={{ textAlign: 'left' }}
          >
            {parse(r)}
          </Typography>
        </Paper>
      )}
    </Paper>

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
