import { Grid, Stack } from "@mui/material";
import MIContainer from "@mui/material/Container";
import { styled } from '@mui/material/styles';

export const Container = ({ children }: { children: React.ReactNode }) => {

    return (
        <ContainerStyled maxWidth={false} >
            {children}
        </ContainerStyled>
    );
}

const ContainerStyled = styled(MIContainer)`
    padding: 0 !important;
    background-color: #F7F8F9;
`;

export const Row = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Col = styled(Grid)`
    display: flex;
    flex-direction: column;
`;
