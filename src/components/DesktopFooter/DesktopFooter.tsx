import { Box} from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Col, P, Row } from '..';
import { FacebookOutlined, Instagram } from '@mui/icons-material';
import { theme } from '@/const/theme';

const { spaces: { spaceXXXL, spaceXL, spaceXS } } = theme;
export const DesktopFooter = ({ logo, type }: { logo: string, type?: string }) => {
    let colors = {
        color: '#fff',
        backgroundColor: theme.palette.primary.default,
        backgroundColorDark: theme.palette.primary.defaultDark,
    }
    if(type == 'secondary') {
        colors = {
            color: '#88888C',
            backgroundColor: theme.palette.secondary.default,
            backgroundColorDark: theme.palette.secondary.defaultDark,
        }

    }

    return (
        <DesktopFooterStyled style={{backgroundColor: colors.backgroundColor}}>
            <Row container paddingX={'40px'}>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Logo src={logo} alt="Logo" />
                    <P variant='body2' color={colors.color}>Rua Fames gravida, 000 -  Eget tellus - Rio de Janeiro/RJ</P>
                    <P variant='body2' color={colors.color}>CEP: 00000-000 - Telefone: (00) 0000-0000</P>
                    <P variant='body2' color={colors.color}>CNPJ: 00.000.000/0000-00</P>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} textAlign='right'>
                    <P><FacebookOutlined style={{ color: colors.color}} /> . <Instagram style={{ color: colors.color}} /></P>
                    <P variant='body1' color={colors.color}>Novo pedido</P>
                    <P variant='body1' color={colors.color}>Meus pedidos</P>
                    <P variant='body1' color={colors.color}>Meus dados</P>
                    <P variant='body1' color={colors.color}>Credencial</P>

                </Col>
            </Row>
            <SectionFinal style={{backgroundColor: colors.backgroundColorDark}}>
                <Row container>
                    <Col xs={12} sm={4} md={4} lg={4} xl={6} mb={spaceXS}>
                        <P variant='body2' color={colors.color}>Todos os direitos reservados lorem ipdum dolor - 2023</P>
                    </Col>
                    <Col xs={6} sm={4} md={4} lg={4} xl={3} textAlign={'right'}>
                        <P variant='body2' fontWeight='700' color={colors.color}> Termos de uso</P>
                    </Col>
                    <Col xs={6} sm={4} md={4} lg={4} xl={2}>
                        <P variant='body2' fontWeight='700' textAlign={'right'} color={colors.color}>Politicas de privacidade</P>
                    </Col>
                </Row>
            </SectionFinal>
        </DesktopFooterStyled>
    );
};

const DesktopFooterStyled = styled(Stack)`
    background-color: ${({ theme }: { theme: any }) => theme.palette.primary?.default};
    height: 310px;
    padding-top: 40px;
`;

const Logo = styled("img")`
    height: 32px;
    object-fit: cover;
    width: 206px;
    margin-bottom: 24px;`;

const SectionFinal = styled(Box)`
    background-color: #061440;
    margin-top: 45px;
    padding: 24px 40px;
`;

