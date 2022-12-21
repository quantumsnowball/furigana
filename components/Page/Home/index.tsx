import { styled, } from "@mui/material";
import { Overflow, Stretch } from "../../styled/containers";
import { FabToggleRomaji, ToggleEditor } from "./Buttons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Row from "./Row";
import { useState } from "react";
import Editor from "./Editor";


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  const furigana = useSelector((s: RootState) => s.content.furigana)
  const romaji = useSelector((s: RootState) => s.content.romaji)
  const romajiOn = useSelector((s: RootState) => s.layout.romajiOn)
  const [editorOpen, setEditorOpen] = useState(false)

  return (
    <ContentDiv id='content-ctn'>
      <ToggleEditor {...{ setEditorOpen }} />
      {romajiOn ?
        <Row entry={romaji} />
        :
        <Row entry={furigana} />
      }
      <Editor {...{ editorOpen, setEditorOpen }} />
      <FabToggleRomaji />
    </ContentDiv>
  )
}

export default Home
