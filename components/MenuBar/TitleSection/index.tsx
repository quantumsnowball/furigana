import { useRouter } from "next/router"
import { Header } from "./Header"
import { Toolbar } from "./Toolbar"
import EditDialog from "./Toolbar/EditDialog"
import { ErrorAlert, LoadedAlert, OverwriteAlert, SavedAlert } from "./Alert"

function TitleSection() {
  const router = useRouter()

  return (
    <>
      {router.pathname === '/' ?
        <Toolbar /> : <Header />}
      <EditDialog />
      <LoadedAlert />
      <SavedAlert />
      <OverwriteAlert />
      <ErrorAlert
        text='Please enter a title before saving.'
      />
    </>
  )
}

export default TitleSection

