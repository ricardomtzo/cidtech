"use client";
import * as React from 'react';
import { BreadcrumbsList, CardDefault, Col, HeaderEvent, P, RadioInput, Row, SelectInput, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { Breadcrumbs, Button, Divider, Switch } from '@mui/material';
import { ChevronRight, People, PeopleAlt, PeopleAltOutlined, Person, Person2Outlined, PersonOutline, SupervisedUserCircle } from '@mui/icons-material';


export default function PurchsesAsks({ }) {

    return (
        <Col container pb={spaceXXXL} >
            <Col container sx={{ alignItems: 'center' }}>
                <Col mt={spaceL} px={spaceXL} item>
                    <BreadcrumbsList list={breadcrumbsList} />
                    <HeaderEvent
                        title="Bieal do livro 2023"
                        day="9 ago 2023 à 11 ago 2023"
                        location="Rio de Janeiro - RJ" />

                    <P size='xlarge' bold my={spaceL}>Queremos saber mais sobre você</P>
                </Col>

                <Row container spacing={spaceL} xl={8} sx={{ alignItems: 'flex-start' }} item>
                    <Col xs={12} md={6} lg={8} xl={8} item>
                        <CardDefault>
                            <P bold size='large'>DADOS SEGMENTADOS</P>
                            <P size='small' bold mt={spaceXL}>Uma pergunta lorem ipsum dolor sit amet?</P>
                            <SelectInput label="Selecione" />

                            <P size='small' bold mt={spaceXL}>Uma pergunta lorem ipsum dolor sit amet?</P>
                            <RadioInput />

                            <P size='small' bold mt={spaceXL}>Uma pergunta lorem ipsum dolor sit amet?</P>
                            <RadioInput />

                            <P size='small' bold mt={spaceXL}>Uma pergunta lorem ipsum dolor sit amet?</P>
                            <TextFieldCustom label="Resposta" />
                        </CardDefault>
                    </Col>

                    <Col xs={12} md={4} lg={4} xl={4} item>
                        <CardDefault>
                            <P mb={spaceL} size='large' bold >Resumo da Compra</P>
                            <Divider />
                            <Row container
                                py={spaceL}
                                sx={{ justifyContent: 'space-between' }}>
                                <Col item>
                                    <Row>
                                        <P mr={spaceS} bold>2x</P>
                                        <P>Título do ingresso dolor sit</P>
                                    </Row>
                                    <Row mt={spaceS} sx={{ justifyContent: 'flex-start' }}>
                                        <PersonOutline sx={{ color: 'grey' }} />
                                        <P size='small' color={'grey'} ml={spaceS}>maria@mail.com</P>
                                    </Row>
                                    <Row mt={spaceS} sx={{ justifyContent: 'flex-start' }}>
                                        <PersonOutline sx={{ color: 'grey' }} />
                                        <P size='small' color={'grey'} ml={spaceS}>maria@mail.com</P>
                                    </Row>
                                </Col>
                                <Col item alignSelf={'start'}>
                                    <P>R$ 2.400,00 </P>
                                </Col>
                            </Row>
                            <Divider />

                            <Row container
                                py={spaceL}
                                sx={{ justifyContent: 'space-between' }}>
                                <Col item>
                                    <Row>
                                        <P mr={spaceS} bold>2x</P>
                                        <P>Título do ingresso dolor sit</P>
                                    </Row>
                                    <Row mt={spaceS} sx={{ justifyContent: 'flex-start' }}>
                                        <PersonOutline sx={{ color: 'grey' }} />
                                        <P size='small' color={'grey'} ml={spaceS}>maria@mail.com</P>
                                    </Row>
                                </Col>
                                <Col item>
                                    <P>R$ 1.800,00</P>
                                </Col>
                            </Row>
                            <Divider />

                            <P bold py={spaceL} size='large' textAlign={'right'}> Total: R$ 4.800,00</P>

                            <Button variant="contained">
                                AVANÇAR  <ChevronRight />
                            </Button>

                            <P bold color='#2196F3' size='small' center mt={spaceL}>VOLTAR</P>
                        </CardDefault>
                    </Col>

                </Row>
            </Col>
        </Col>
    );
};


const breadcrumbsList = [
    'Ingressos', 'Dados dos participantes', 'Queremos saber mais sobre você', 'Dados de Faturamento', 'Dados de Faturamento', 'Resumo do pedido #220830',
]

const { spaces: { spaceS, spaceL, spaceXXXL, spaceXL } } = theme;

const fields = [
    {

        label: 'Copiar informações',
        labelAdornment: '',
        placeholder: '',
        type: 'select',
        size: 12
    },
    {
        label: 'CPF',
        placeholder: '',
        type: 'text',
        size: 5
    },
    {
        label: 'Email',
        placeholder: '',
        type: 'text',
        size: 6
    },
    {
        label: 'Tratamento',
        placeholder: '',
        type: 'select',
        size: 3
    },
    {
        label: 'Nome',
        placeholder: '',
        type: 'text',
        size: 4
    },
    {
        label: 'Sobrenome',
        placeholder: '',
        type: 'text',
        size: 4
    },
    {
        label: 'Empresa',
        placeholder: '',
        type: 'text',
        size: 4
    },
    {
        label: 'Cargo',
        placeholder: '',
        type: 'text',
        size: 4,
        noBorder: true
    },
]

