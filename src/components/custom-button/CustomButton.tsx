import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
}

const CustomButton = ({ text, icon }: ButtonProps) => {
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
    >
      {text}
    </Button>
  );
};

export default CustomButton;
