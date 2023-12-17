"use client";
import * as React from 'react';
import { AlertDefault, CardDefault, Col, P, Row, SelectInput, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { Button, Divider } from '@mui/material';
import { PersonOutline, TimerSharp } from '@mui/icons-material';


export default function PurchsesInvoicing({ nextStep }: { nextStep: React.Dispatch<React.SetStateAction<number>> }) {

    return (
        <Row container spacing={spaceL} xl={8} sx={{ alignItems: 'flex-start' }} item>
            <Col xs={12} md={6} lg={8} xl={8} item>
                <CardDefault>
                    <P bold mb={spaceL}>1 . DADOS DE FATURAMENTO</P>
                    <Row container spacing={2}>
                        <Col xl={6} item>
                            <SelectInput label="Tipo de empresa (se CNPJ)" />
                        </Col>
                        <Col xl={6} item>
                            <SelectInput label="Escolha a forma de pagamento" />
                        </Col>
                        <Col xl={12} item>
                            <TextFieldCustom label="CPF ou CNPJ" />
                        </Col>
                    </Row>
                </CardDefault>

                <CardDefault containerProps={{ mt: spaceXL }}>
                    <P bold mb={spaceL}>2. FORMA DE PAGAMENTO</P>
                    <SelectInput label="Escolha a forma de pagamento" />
                </CardDefault>

                <CardDefault containerProps={{ mt: spaceXL }}>
                    <P bold mb={spaceL}>3 . PREENCHA OS DADOS DE PAGAMENTO</P>
                    <Row container spacing={2}>
                        <Col xl={12} item>
                            <TextFieldCustom label="Número do cartão" />
                        </Col>
                        <Col xl={12} item>
                            <TextFieldCustom label="Nome do títular" />
                        </Col>
                        <Col xl={6} item>
                            <TextFieldCustom label="Válidade" />
                        </Col>
                        <Col xl={6} item>
                            <TextFieldCustom label="CVV" />
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

                    <Button
                        variant="contained"
                        onClick={() => nextStep((nextStep: number) => nextStep + 1)}>
                        Concluir compra
                    </Button>

                    <P bold color='#2196F3' size='small' center mt={spaceL} onClick={() => nextStep((nextStep: number) => nextStep - 1)} >VOLTAR</P>
                </CardDefault>
            </Col>

        </Row>
    );
};

const { spaces: { spaceS, spaceL, spaceXXXL, spaceXL } } = theme;
