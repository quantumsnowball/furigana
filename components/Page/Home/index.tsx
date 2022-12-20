import { styled, TextField, Typography } from "@mui/material";
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
  const [source, setSource] = useState('日本の')
  const [furigana, setFurigana] = useState('')
  const [romaji, setRomaji] = useState('')

  const convert = (mode: string, to: string) =>
    async (txt: string) => await kuroshiro.convert(txt, { mode, to })

  return (
    <ContentDiv id='content-ctn'>
      <TextField
        fullWidth
        multiline
        label='Japanese'
        sx={{
          my: 2,
          p: 1,
        }}
        value={source}
        onChange={async e => {
          setSource(e.target.value)
          try {
            setFurigana(await convert('furigana', 'hiragana')(e.target.value))
            setRomaji(await convert('furigana', 'romaji')(e.target.value))
          } catch (err) {
            console.log(err)
          }
        }}
      >
      </TextField>

      <Typography
        variant='h5'
        sx={{ textAlign: 'left' }}
      >
        {parse(furigana)}
      </Typography>
      <Typography
        variant='h5'
        sx={{ textAlign: 'left' }}
      >
        {parse(romaji)}
      </Typography>
    </ContentDiv>
  )
}

export default Home
