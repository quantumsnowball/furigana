import { styled, } from "@mui/material";
import { Overflow, Stretch } from "../../styled/containers";
import { FabToggleRomaji, ToggleEditor } from "./Buttons";
import Rows from "./Rows";
import { useState } from "react";
import Editor from "./Editor";


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  const [editorOpen, setEditorOpen] = useState(false)

  return (
    <ContentDiv id='content-ctn'>
      <ToggleEditor {...{ setEditorOpen }} />
      <Rows />
      <Editor {...{ editorOpen, setEditorOpen }} />
      <FabToggleRomaji />
    </ContentDiv>
  )
}

export default Home
