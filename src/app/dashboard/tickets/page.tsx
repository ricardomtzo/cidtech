"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Alert, Avatar, Box, CardActionArea, Divider, InputAdornment, ListItem, ListItemText, } from '@mui/material';
import TextField from '@mui/material/TextField';

import { Col, P, Row } from '@/components';
import { theme } from '@/const/theme';
import logo from '../../../assets/images/bg_card.png'
import { ArrowForward, CalendarMonth, ChevronRight, ClosedCaption, InfoRounded, LocationOnOutlined } from '@mui/icons-material';
import { TicketTable } from '@/components/tables/TableTickets';
import { FooterButtons } from '@/components/';

export default function Login({ }) {

    return (
        <Row container>
            <Alert
                style={{ position: 'absolute', top: 100, right: 80 }}
                onClose={() => { }}
                severity="info">
                <P vTitle>Olá, Maria da Silva!</P>
                <P fontSize={14}>Você tem pedidos pendentes. Acesse aqui</P>
            </Alert>

            <Col xs={12} md={2} lg={6} xl={6}>
                <EventImage src={logo.src} alt="logo" />
                <Col padding={spaceL}>
                    <P variant="h5" bold mt={spaceL}>Bienal do livro 2023</P>
                    <P variant="body2" mt={spaceL} ><CalendarMonth fontSize='small' color='primary' /> 9 ago 2023 à 11 ago 2023</P>
                    <P variant="body2" mt={spaceL} ><LocationOnOutlined fontSize='small' color='primary' /> Rio de Janeiro - RJ</P>
                    <Col padding={spaceL}>
                        <P variant="h5" bold mt={spaceXXXL}>Novo Pedido</P>
                        <P variant="body2" mt={spaceL}>Tem um código promocional?</P>
                        <Row container sx={{ justifyContent: 'flex-start' }}>
                            <Col xs={8} md={6} lg={6} xl={6} mr={spaceL} item>
                                <TextField
                                    focused
                                    margin='normal'
                                    label="Código promocional"
                                    placeholder="Digite um código válido"
                                    variant="standard"
                                />
                            </Col>
                            <Col item>
                                <Button variant='outlined'>
                                    VALIDAR
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Card>
                            <CardContent>
                                <Col padding={spaceL}>
                                    <P variant="h6" bold mb={spaceL}>Selecione o(s) ingresso(s) desejado(s)</P>
                                    <TicketTable />
                                </Col>
                            </CardContent>
                        </Card>
                        <FooterButtons
                            confirm={{
                                text: 'Avançar',
                                iconRight: <ChevronRight />
                            }}
                        />
                    </Col>
                </Col>

            </Col>

        </Row>
    );
};


const { spaces: { spaceL, spaceXXXL, spaceM, spaceS }, palette: { primary } } = theme;

const EventImage = ({ src, alt }: { src: string, alt: string }) => {

    return (
        <Col style={{ borderRadius: 10, height: 200 }}>
            <img
                height={200}
                src={src}
                alt={alt}
                style={{
                    borderRadius: 5,
                    objectFit: 'cover',
                }} />
        </Col>
    )
}