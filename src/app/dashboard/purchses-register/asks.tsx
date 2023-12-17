"use client";
import * as React from 'react';
import { CardDefault, Col, P, RadioInput, Row, SelectInput, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { Button, Divider } from '@mui/material';
import { ChevronRight, PersonOutline } from '@mui/icons-material';


export default function PurchsesAsks({nextStep }: { nextStep: React.Dispatch<React.SetStateAction<number>> }) {

    return (
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

                    <Button
                        variant="contained"
                        onClick={() => nextStep((nextStep: number) => nextStep + 1)}>
                        AVANÇAR  <ChevronRight />
                    </Button>

                    <P bold color='#2196F3' size='small' center mt={spaceL} onClick={() => nextStep((nextStep: number) => nextStep - 1)} >VOLTAR</P>
                </CardDefault>
            </Col>

        </Row>
    );
};

const { spaces: { spaceS, spaceL, spaceXXXL, spaceXL } } = theme;
