import { Alert, AlertProps } from "@mui/material"
import { P } from ".."
import { theme } from "@/const/theme"

export const AlertDefault = (props: AlertDefaultProps & AlertProps) => {

    const { title, subtitle, top } = props

    var totalStyle = {
        
    }   
    
    return (
        <Alert
            sx={{
                marginBottom: spaceXL,
                borderRadius: 2,
                boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.05);',
                totalStyle
            }}
            style={ top ? { position: 'absolute', top: 100, right: 80 } : {}}
            {...props}>
            <P bold>{title}</P>
            <P size='small'>{subtitle}</P>
        </Alert>
    )
}

const { spaces: { spaceXL } } = theme

type AlertDefaultProps = {
    top?: boolean
    title?: string
    subtitle?: string
}