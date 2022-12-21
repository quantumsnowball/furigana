import { Box, Typography } from "@mui/material";
import { APP_NAME, VERSION } from "../../../constants";


export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        component="span"
        sx={{ cursor: 'pointer' }}
      >
        {APP_NAME}, v{VERSION}
      </Typography>
    </Box>
  )
}
