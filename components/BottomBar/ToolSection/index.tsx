import { Box } from "@mui/system"
import { useRouter } from "next/router"
import Toolbar from "./Toolbar"

function ToolSection() {
  const router = useRouter()

  return router.pathname === '/' ?
    <Toolbar />
    :
    <Box sx={{ flex: 1 }} > </Box>
}

export default ToolSection
