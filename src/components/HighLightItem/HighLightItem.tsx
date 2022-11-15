import { Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  children: JSX.Element;
  title: string;
};

const testId = `highlight-item`

export default function HighLightItem(props: Props) {
  const { children, title } = props;
  return (
    <>
      <Box className="highlightItem wheater-box-shadow" data-testid={testId}>
        <Typography variant="h6" className="title">{title}</Typography>
        {children}
      </Box>
    </>
  );
}
