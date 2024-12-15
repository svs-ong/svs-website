import { Stack, StackProps, TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";

interface TextStackProps { 
  paragraphs: string[];
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
  gap?: StackProps["spacing"];
}

/*
Ensures paragraph consistency.
Be sure to use this component for any paragraph.

* `TextStack` component renders a stack of paragraphs with consistent typography and spacing.
 * It ensures uniform styling for text content with optional customization of the variant, color, and spacing.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.paragraphs - An array of paragraphs to display. Each string in the array represents a paragraph.
 * @param {TypographyProps["variant"]} [props.variant] - The optional typography variant to apply to each paragraph (e.g., `body1`, `h1`).
 * @param {TypographyProps["color"]} [props.color] - The optional color of the text (e.g., `primary`, `textSecondary`).
 * @param {StackProps["spacing"]} [props.gap] - The optional spacing between the paragraphs, defined in the `Stack` component.
 *
 * @returns {React.ReactElement} The rendered stack of paragraphs, each wrapped in a `Typography` component with the specified styles.

 */

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
