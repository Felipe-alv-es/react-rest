import { Button, useTheme } from "@mui/material";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
}

export const CustomButton = ({
  text,
  icon,
  onClick,
  ariaLabel,
}: ButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[700]
      : theme.palette.grey[800];

  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: 32,
        px: 4,
        py: 1.5,
        fontSize: "16px",
        backgroundColor: backgroundColor,
        color: theme.palette.getContrastText(backgroundColor),
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[600]
              : theme.palette.grey[900],
        },
        "&:focus-visible": {
          outline: `3px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
      }}
      endIcon={icon}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      {text}
    </Button>
  );
};
