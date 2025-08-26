import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface CustomInputProps extends Omit<TextFieldProps, "variant"> {
  name: string;
  type?: string;
  label?: string;
  variant?: "filled" | "outlined" | "standard";
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  label = "",
  name,
  variant = "outlined",
  ...rest
}) => {
  return (
    <TextField
      type={type}
      label={label}
      name={name}
      variant={variant}
      fullWidth
      sx={{
        m: 2,
        "& .MuiInputBase-root": {
          height: 48,
          borderRadius: 2,
        },
      }}
      {...rest}
    />
  );
};

export default CustomInput;
