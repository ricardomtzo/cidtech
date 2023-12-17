import { theme } from "@/const/theme"
import { Col, P, Row } from ".."
import { CalendarTodayOutlined, LocationOnOutlined } from "@mui/icons-material"

export const HeaderEvent = ({ title, day, location }: { title: string, day: string, location: string }) => {
    return (
        <Col>
            <P size='xxlarge' bold mb={spaceM}>{title}</P>
            <Row sx={{ justifyContent: 'flex-start' }}>
                <P mr={spaceS} mt={0.5}><CalendarTodayOutlined fontSize='small' /></P>
                <P>{day}</P>
            </Row>
            <Row sx={{ justifyContent: 'flex-start' }} >
                <P mr={spaceS} mt={0.5}><LocationOnOutlined fontSize='small' /></P>
                <P>{location}</P>
            </Row>

        </Col>
    )
}

const { spaces: { spaceS, spaceM } } = theme
