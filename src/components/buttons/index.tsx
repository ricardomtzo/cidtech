import { theme } from "@/const/theme";
import { Add, Remove } from "@mui/icons-material";
import { Button, styled, ButtonProps } from "@mui/material";

const ButtonStyles = styled(Button)`
    border-radius: 100px;
    min-height: 40px;
    min-width: 40px;
    padding: 0;
    margin-right: 24px;
    `;
type ButtonStyledProps = {
    action?: string
    children?: React.ReactNode
}

export const ButtonAddRemove = ({ action, ...props }: ButtonStyledProps & ButtonProps) => {
    return (
        <ButtonStyles 
        variant={action === "add" ? "contained" : "outlined"}
        style={{
            backgroundColor: action == "add" ? theme.palette.primary.default: '#fff',
            borderColor: theme.palette.primary.default,
        }}
        {...props}>
            {action === "add" ? 
            <Add fontSize="small" /> : <Remove style={{ color: theme.palette.primary.default }} fontSize="small"/>}
        </ButtonStyles>
    )
}