import { styled, TextField } from "@mui/material";
import { useState } from "react";
import { Overflow, Stretch } from "../../styled/containers";


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  const [text, setText] = useState('Furigana')

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
        value={text}
        onChange={e => setText(e.target.value)}
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
        value={text}
      >

      </TextField>
    </ContentDiv>
  )
}

export default Home
