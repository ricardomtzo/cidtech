"use client";
import * as React from 'react';

import { CardDefault, Col, P, Row, TablePurchses, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { Breadcrumbs, Button, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CalendarTodayOutlined, LocationOnOutlined } from '@mui/icons-material';


export default function PurchsesDetails({ }) {

    return (
        <Col container pb={spaceXXXL} sx={{ alignItems: 'center' }}>
            <Col mt={spaceL} xs={12} md={6} lg={6} xl={6} >
                <BreadcrumbsList list={breadcrumbsList} />
                <HeaderEvent
                    title="Bieal do livro 2023"
                    day="9 ago 2023 à 11 ago 2023"
                    location="Rio de Janeiro - RJ" />

                <P fontWeight={600} fontSize={24} my={spaceXXL}>Resumo do pedido #220830</P>
            </Col>

            <Row container spacing={spaceL} sx={{ alignItems: 'flex-start' }}>
                <Col xs={12} md={6} lg={6} xl={6} item>
                    <CardDefault>
                        {fields.map((field, i) => (
                            <Col>
                                {field?.title && <P bold mt={spaceXL}>{field.title}</P>}
                                <TextFieldCustom {...field} />
                            </Col>
                        ))}
                    </CardDefault>

                    <Col>
                        <TicketsList />
                    </Col>

                </Col>


                <Col xs={12} md={4} lg={4} xl={4} item>
                    <CardDefault>
                        <P fontWeight={600} fontSize={20} >Faturamento</P>
                        <P fontSize={14}>Forma de pagamento: Cartão de crédito final 0892</P>
                        <Divider />
                        {paymentTaxs.map((field, i) => (
                            <Row container my={spaceM} sx={{ justifyContent: 'space-between' }}>
                                <P>{field.title}</P>
                                <P>{field.value}</P>
                            </Row>
                        ))}
                        <Divider />

                        <Row container mt={spaceM} sx={{ justifyContent: 'flex-end' }}>
                            <Col mr={7} item>
                                <P size='medium' color={'grey'}>Subtotal</P>
                                <P bold size={'xlarge'}>Total</P>
                            </Col>
                            <Col item>
                                <P size='medium' textAlign={'right'} color={'grey'}>R$ 4.200,00</P>
                                <P bold size={'xlarge'}>R$ 4.208,23</P>
                            </Col>
                        </Row>
                        <Button variant="contained" sx={{ width: '100%', mt: spaceL }}>VOLTAR</Button>
                    </CardDefault>
                </Col>

            </Row>

        </Col>
    );
};

const TicketsList = () => {

    return (
        <Col mt={spaceL}>
            <CardDefault>
                <P bold>INSCRITOS</P>
                {tickets.map((field, i) => (
                    <Col>
                        {field?.title && <P mt={spaceL} bold size='small'>{field.title}</P>}
                        {field?.subtitle && <P size='small' color={'grey'}>{field.subtitle}</P>}
                        <Divider />
                        {field.data.map((input, i) => (
                            <TextFieldCustom {...input} />
                        ))}
                    </Col>
                ))}
            </CardDefault>
        </Col>
    )
}

const HeaderEvent = ({ title, day, location }: { title: string, day: string, location: string }) => {
    return (
        <Col>
            <P fontWeight={600} fontSize={24} mb={spaceM}>{title}</P>
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

function BreadcrumbsList({ list }: { list: string[] }) {

    const breadcrumbs = list.map((item, i) =>
        <P key={item}
            color={i === list.length - 1 ? 'grey' : '#384C8C'} >
            {item}
        </P>)

    return (
        <Col spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon style={{ color: '#384C8C' }} fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Col>
    );
}

const Divider = () => {
    return (
        <Col style={{ width: '100%', height: 1, backgroundColor: '#E5E5E5', marginTop: 20 }} />
    )
}


const breadcrumbsList = [
    'Ingressos', 'Dados dos participantes', 'Queremos saber mais sobre você', 'Resumo do pedido #220830',
]

const { spaces: { spaceM, spaceS, spaceL, spaceXXL, spaceXXXL, spaceXL } } = theme;

const fields = [
    {
        title: 'RESPONSÁVEL  PELA INSCRIÇÃO',
        labelAdornment: 'Nome completo',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Empresa',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Email',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Endereço',
        placeholder: '',
        type: 'text',
        noBorder: true
    },
]

const tickets = [
    {
        title: 'Ingresso 1',
        subtitle: 'Título do ingresso lorem ipsum dolor',
        data: [
            {
                labelAdornment: 'Nome',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Empresa',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Email',
                placeholder: '',
                type: 'text',
            },

        ]
    },
    {
        title: 'Ingresso 3',
        subtitle: 'Título do ingresso lorem ipsum dolor',
        data: [
            {
                labelAdornment: 'Nome',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Empresa',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Email',
                placeholder: '',
                type: 'text',
            },

        ]
    },
    {
        title: 'Ingresso 3',
        subtitle: 'Título do ingresso lorem ipsum dolor',
        data: [
            {
                labelAdornment: 'Nome',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Empresa',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Email',
                placeholder: '',
                type: 'text',
            },

        ]
    },

]

const paymentTaxs = [
    {
        title: 'ISS',
        value: 'R$ 0,32',
    },
    {
        title: 'IR',
        value: 'R$ 4,51',
    },
    {
        title: 'PIS',
        value: 'R$ 2,17',
    },
    {
        title: 'Cofis',
        value: 'R$ 0,32',
    },
    {
        title: 'CSLL',
        value: 'R$ 0,32',
    },
]
