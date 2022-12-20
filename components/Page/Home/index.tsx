import { styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Overflow, Stretch } from "../../styled/containers";
import Kuroshiro from "kuroshiro"
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"
import parse from "html-react-parser"


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  const [source, setSource] = useState('日本の')
  const [furigana, setFurigana] = useState('')
  const [romaji, setRomaji] = useState('')
  const kuroshiro = new Kuroshiro()

  useEffect(() => {
    const init = async () => {
      await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "dict/" }))
    }
    init()
  }, [])

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
            const converted_furigana = await kuroshiro.convert(e.target.value, {
              mode: "furigana", to: "hiragana"
            })
            const converted_romaji = await kuroshiro.convert(e.target.value, {
              mode: "furigana", to: "romaji"
            })
            setFurigana(converted_furigana)
            setRomaji(converted_romaji)
          } catch (err) {
            console.log(err)
          }
        }}
      >
      </TextField>

      <Typography
        variant='h3'
      >
        {parse(furigana)}
      </Typography>
      <Typography
        variant='h3'
      >
        {parse(romaji)}
      </Typography>
    </ContentDiv>
  )
}

export default Home
