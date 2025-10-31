import { Paper, InputBase, Typography, useTheme } from "@mui/material";
import { getFormStyle, getInputStyle } from "./FormInput.styles";

interface FormInputProps {
  name: string;
  placeholder: string;
  setName: (value: string) => void;
  error?: string;
}

export const FormInput = ({
  name,
  setName,
  error,
  placeholder,
}: FormInputProps) => {
  const theme = useTheme();

  return (
    <Paper
      component="form"
      sx={getFormStyle(theme)}
      elevation={0}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        sx={getInputStyle(theme)}
        placeholder={placeholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && (
        <Typography variant="caption" color="error" sx={{ marginLeft: "8px" }}>
          {error}
        </Typography>
      )}
    </Paper>
  );
};
