import { Button } from "@mui/material";
import { Row } from "..";

type FooterButtonsProps = {
    confirm?: {
        text: string
        iconRight?: React.ReactNode
        onClick?: () => void
    }
    cancel?: {
        text: string
    }
}
export const FooterButtons = ({ confirm, cancel, }: FooterButtonsProps) => {
    const iconRight = confirm?.iconRight;
    return (
        <Row container marginY={2} mb={12} sx={{ justifyContent: 'flex-end' }}>
            {cancel?.text && <Button style={{ marginRight: 12 }} variant="outlined">CANCELAR</Button>}
            {confirm?.text && 
            <Button 
            variant="contained"
            onClick={confirm?.onClick}>{confirm.text} {iconRight}</Button>}
        </Row>
    )
}