import { styled, TextField } from "@mui/material";
import { Overflow, Stretch } from "../../styled/containers";


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  return (
    <ContentDiv id='content-ctn'>
      <TextField
        fullWidth
        multiline
        sx={{
          p: 1,
        }}
      >

      </TextField>
    </ContentDiv>
  )
}

export default Home
