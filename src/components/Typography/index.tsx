import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from '@mui/material/styles';


export const PStyled = styled(Typography)`
    color: #030E33;
    fontSize: 14px !important;
    fontFamily: Roboto;
    fontWeight: '400';
    lineHeight: 21;
    wordWrap: 'break-word';
`;

type PProps = {
    color?: string;
    vTitle?: boolean;
    bold?: boolean;
    center?: boolean;
    size?: string;
    children: React.ReactNode;
}

const sizes: any = {
    xlarge: '24px',
    large: '20px',
    medium: '16px',
    small: '14px',
    xsmall: '12px',
}

const titleStyle = {
    color: '#292929',
    fontSize: '16px !important',
    fontWeight: '600',
}
export const P = ({ children, color, vTitle, bold, center, size, ...props }: PProps & TypographyProps) => {

    let totalStyles: any = {
        
    };

    if(size) {
        totalStyles.fontSize = sizes[size];
    }
    if(center) {
        totalStyles.textAlign = 'center';
    }
    if(color) {
        totalStyles.color = color;
    }
    if(vTitle) {
        totalStyles = {
            ...totalStyles,
            ...titleStyle
        };
    }
    if(bold) {
        totalStyles = {
            ...totalStyles,
            fontWeight: 700
        };
    }

    return (
        <PStyled
            style={ totalStyles }  {...props}>
            {children}
        </PStyled>
    );
}