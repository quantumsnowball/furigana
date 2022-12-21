import { Typography } from "@mui/material"
import { Content } from "../../../types/content"


interface SummaryProps {
  content: Content
}

function Summary({ content: { title, items } }: SummaryProps) {
  return (
    <Typography
      variant='h4'
    >
      {title}
    </Typography>
  )

}
export default Summary
