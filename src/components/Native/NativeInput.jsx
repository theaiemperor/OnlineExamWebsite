import { TextField } from "@mui/material";

export default function ({
  type = "text",
  label,
  name,
  autoComplete = true,
  required = false,
}) {
  return (
    <TextField
      margin="normal"
      required={required}
      fullWidth
      id={name}
      label={label || name}
      name={name}
      autoComplete={autoComplete ? name : ""}
      autoFocus
      type={type}
    />
  );
}
