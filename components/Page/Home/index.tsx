import { Paper, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Overflow, Stretch } from "../../styled/containers";
import Kuroshiro from "kuroshiro"
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"
import parse from "html-react-parser"


const ContentDiv = styled(Overflow(Stretch('div')))`
`

const kuroshiro = new Kuroshiro();
(async () => await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "dict/" })))()

function Home() {
  const [source, setSource] = useState(['日本の'])
  const [furigana, setFurigana] = useState([''])
  const [romaji, setRomaji] = useState([''])

  const convert = (mode: string, to: string) =>
    async (txt: string) => await kuroshiro.convert(txt, { mode, to })

  return (
    <ContentDiv id='content-ctn'>
      <TextField
        fullWidth
        multiline
        label='Japanese'
        sx={{
          mt: 2,
          p: 1,
        }}
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
      >
      </TextField>
      <Paper
        elevation={1}
        sx={{ m: 1, p: 1 }}
      >
        {furigana.map(f =>
          <Paper
            elevation={3}
            sx={{ p: 1 }}
          >
            <Typography
              variant='h5'
              sx={{ textAlign: 'left' }}
            >
              {parse(f)}
            </Typography>
          </Paper>
        )}
      </Paper>
      <Paper
        elevation={1}
        sx={{ m: 1, p: 1 }}
      >
        {romaji.map(r =>
          <Paper
            elevation={3}
            sx={{ p: 1 }}
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
    </ContentDiv>
  )
}

export default Home
