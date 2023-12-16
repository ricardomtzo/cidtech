import {TextField, InputAdornment, TextFieldProps } from "@mui/material";


export const TextFieldCustom = (props: TextFieldCustomProps & TextFieldProps) => {
    const { labelAdornment, variant, margin } = props;

    return (
        <TextField
            margin={margin ?? "normal"}
            InputProps={{
                startAdornment: (
                    labelAdornment && <InputAdornment position="start" style={{ width: 160, fontSize: 14 }}>
                        {labelAdornment}
                    </InputAdornment>
                ),
                style:{borderColor: 'red'}
            }}
            
            variant={variant ?? "standard"}
            {...props}
        />
    )
}

type TextFieldCustomProps = {
    label?: string
    labelAdornment?: string
    variant?: string,
    margin?: string
    noBorder?: boolean
}
