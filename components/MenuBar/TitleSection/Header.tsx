import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { pathToName } from "../../../utils";


export function Header() {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        component="span"
        sx={{ cursor: 'pointer' }}
      >
        {pathToName(router.pathname)}
      </Typography>
    </Box>
  )
}
