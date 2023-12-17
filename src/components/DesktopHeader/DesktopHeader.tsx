import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { MenuProfile, Row } from '..';


export const DesktopHeader = ({ logo }: { logo: string }) => {

    return (
        <DesktopHeaderStyled>
            <Row sx={{ justifyContent: 'space-between' }}>
                <Logo src={logo} alt="Logoo" />
                <MenuProfile />
            </Row>

        </DesktopHeaderStyled>
    );
};

const DesktopHeaderStyled = styled(Stack)`
    background-color: ${({ theme }: { theme: any }) => theme.palette.primary.default};
    height: 85px;
    margin-bottom: 10px;
`;

const Logo = styled("img")`
    height: 32px;
    object-fit: cover;
    width: 206px;
    margin-left: 80px;
    margin-top: 26px;
`;
