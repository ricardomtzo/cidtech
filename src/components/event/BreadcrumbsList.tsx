import { Breadcrumbs } from "@mui/material";
import { Col, P } from "..";
import { theme } from "@/const/theme";
import { NavigateNext } from "@mui/icons-material";

export const BreadcrumbsList = ({ list }: { list: string[] }) => {

    const breadcrumbs = list.map((item, i) =>
        <P key={item}
            color={i === list.length - 1 ? 'grey' : '#384C8C'} >
            {item}
        </P>)

    return (
        <Col spacing={2} mb={spaceXL}>
            <Breadcrumbs
                separator={<NavigateNext style={{ color: '#384C8C' }} fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Col>
    );
}

const { spaces: { spaceXL } } = theme
