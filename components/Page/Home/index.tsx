import { styled, } from "@mui/material";
import { Overflow, Stretch } from "../../styled/containers";
import { ToggleEditor } from "./Buttons";
import Rows from "./Rows";
import Editor from "./Editor";


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  return (
    <ContentDiv id='content-ctn'>
      <ToggleEditor />
      <Rows />
      <Editor />
    </ContentDiv>
  )
}

export default Home
