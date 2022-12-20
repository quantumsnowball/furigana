import { styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Overflow, Stretch } from "../../styled/containers";
import Kuroshiro from "kuroshiro"
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji"


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  const [source, setSource] = useState('Furigana')
  const [furigana, setFurigana] = useState('Furigana')
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
            const converted = await kuroshiro.convert(e.target.value, {
              mode: "furigana", to: "hiragana"
            })
            setFurigana(converted)
          } catch (err) {
            console.log(err)
          }
        }}
      >

      </TextField>
      <TextField
        fullWidth
        multiline
        label='Furigana, Romaji, Translation'
        sx={{
          my: 2,
          p: 1,
        }}
        value={furigana}
      >

      </TextField>
      <ruby>
        {furigana}
      </ruby>
    </ContentDiv>
  )
}

export default Home
