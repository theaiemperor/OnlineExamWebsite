import { TextField } from "@mui/material";

export default function (props) {
  return (
    <TextField
      margin="normal"
      fullWidth
      id={props.name}
      label={props.label || props.name}
      autoComplete={props.autoComplete ? props.name : ""}
      autoFocus
      {...props}
    />
  );
}
