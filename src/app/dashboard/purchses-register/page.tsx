"use client";
import React, { useState } from 'react';
import { AlertDefault, BreadcrumbsList, CardDefault, Col, HeaderEvent, P, Row, SelectInput, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { Breadcrumbs, Button, Divider, Switch } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { TimerSharp } from '@mui/icons-material';
import PurchsesResume from './resume';
import PurchsesAsks from './asks';
import PurchsesInvoicing from './invoicing';


export default function PurchsesRegister({ }) {

    const [step, setStep] = useState(1);

    return (
        <Col container pb={spaceXXXL} >
            <Col container sx={{ alignItems: 'center' }}>
                <Col mt={spaceL} px={spaceXL} item>
                    <BreadcrumbsList list={breadcrumbsList} />
                    <HeaderEvent
                        title="Bieal do livro 2023"
                        day="9 ago 2023 à 11 ago 2023"
                        location="Rio de Janeiro - RJ" />

                    <P size='xlarge' bold my={spaceL}>{stepTitles[step - 1]}</P>
                </Col>

                {step === 1 && <Row container spacing={spaceL} xl={8} sx={{ alignItems: 'flex-start' }} item>
                    <Col xs={12} md={6} lg={8} xl={8} item>
                        <CardDefault>
                            <Col xl={12} item>
                                <P bold size='large'>Ingresso 1: Título do ingresso</P>
                                <P mt={spaceL}>Este ingresso é meu <Switch defaultChecked /></P>
                            </Col>
                            <Row container sx={{ justifyContent: 'space-between' }}>
                                {fields.map((field, i) => (
                                    <Col key={'tkF' + i} lg={field?.size} xl={field?.size} item>
                                        {field?.type === 'select' ?
                                            <SelectInput label={field?.label} placeholder='Selecione' />
                                            :
                                            <Col>
                                                <TextFieldCustom
                                                    label={field?.label}
                                                    labelAdornment={field?.labelAdornment || ''}
                                                    type={field?.type} /></Col>}
                                    </Col>
                                ))}
                                <Col sx={{ justifyContent: 'center' }} item>
                                    <P size='small' mt={spaceXL}>
                                        <span
                                            style={{
                                                width: 11,
                                                height: 11,
                                                backgroundColor: 'green',
                                                border: '4px  solid green',
                                                borderRadius: 50,
                                                fontSize: 6,
                                                color: 'green',
                                            }} > aa</span> Completo </P>
                                </Col>
                            </Row>
                        </CardDefault>

                        <CardDefault containerProps={{ mt: spaceXL }}>
                            <Col xl={12} item>
                                <P bold size='large'>Ingresso 2: Título do ingresso</P>
                                <P mt={spaceL}>Este ingresso é meu <Switch defaultChecked /></P>
                            </Col>
                            <Row container sx={{ justifyContent: 'space-between' }}>
                                {fields.map((field, i) => (
                                    <Col key={'tkF' + i} lg={field?.size} xl={field?.size} item>
                                        {field?.type === 'select' ?
                                            <SelectInput label={field?.label} placeholder='Selecione' />
                                            :
                                            <Col>
                                                <TextFieldCustom
                                                    label={field?.label}
                                                    labelAdornment={field?.labelAdornment || ''}
                                                    type={field?.type} /></Col>}
                                    </Col>
                                ))}
                                <Col sx={{ justifyContent: 'center' }} item>
                                    <P size='small' mt={spaceXL}>
                                        <span
                                            style={{
                                                width: 11,
                                                height: 11,
                                                backgroundColor: 'yellow',
                                                border: '4px  solid yellow',
                                                borderRadius: 50,
                                                fontSize: 6,
                                                color: 'yellow',
                                            }} > aa</span> Incompleto

                                    </P>
                                </Col>
                            </Row>
                        </CardDefault>

                    </Col>


                    <Col xs={12} md={4} lg={4} xl={4} item>
                        <AlertDefault
                            severity="info"
                            icon={<TimerSharp />}
                            title='12m 37s'
                            subtitle='Finalize sua compra antes do término do tempo indicado' />
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
                                    <P size='small' color={'grey'}>Detalhes da opção nibh id duis</P>
                                </Col>
                                <Col item>
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
                                    <P size='small' color={'grey'}>Detalhes da opção nibh id duis</P>
                                </Col>
                                <Col item>
                                    <P>R$ 2.400,00 </P>
                                </Col>
                            </Row>
                            <Divider />

                            <P bold py={spaceL} size='large' textAlign={'right'}> Total: R$ 4.800,00</P>

                            <Button
                                variant="contained"
                                onClick={() => setStep(2)}>
                                AVANÇAR
                            </Button>

                            <P bold color='#2196F3' size='small' center mt={spaceL}>VOLTAR</P>
                        </CardDefault>
                    </Col>

                </Row>}
                {step === 2 && <PurchsesAsks nextStep={setStep} />}

                {step === 3 && <PurchsesResume nextStep={setStep} />}
                
                {step === 4 && <PurchsesInvoicing nextStep={setStep} />}


            </Col>
        </Col>
    );
};


const breadcrumbsList = [
    'Ingressos', 'Dados dos participantes', 'Queremos saber mais sobre você', 'Dados de Faturamento', 'Dados de Faturamento', 'Resumo do pedido #220830',
]

const { spaces: { spaceS, spaceL, spaceXXXL, spaceXL } } = theme;

const stepTitles = [
    "Preencha o(s) dado(s) do(s) participante(s)",
    "Queremos saber mais sobre você",
    "Resumo da sua compra",
    "Preencha os dados de faturamento"
]

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

