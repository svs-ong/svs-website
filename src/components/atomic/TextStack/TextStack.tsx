import { Stack, StackProps, TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";

interface TextStackProps {
  paragraphs: string[];
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
  gap?: StackProps["spacing"];
}

export const TextStack: React.FC<TextStackProps> = ({ paragraphs, variant, color, gap }) => {
  return (
    <Stack direction="column" spacing={gap}>
      {paragraphs.map((paragraph, id) => (
        <Typography key={id} variant={variant} color={color}>
          {paragraph}
        </Typography>
      ))}
    </Stack>
  );
};
