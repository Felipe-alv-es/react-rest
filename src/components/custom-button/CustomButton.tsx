import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: "32px",
        paddingX: "32px",
        fontSize: "16px",
        background: "#464646",
      }}
      endIcon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
