"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


import headerImage from "../../assets/images/bg_card.png"
import { Col, P, Row } from '@/components';
import { theme } from '@/const/theme';

const { spaces: { spaceL, spaceXXXL } } = theme;
export default function Register({ }) {

    return (
        <Col mt={spaceXXXL}>
            <Col width={'70%'} margin={'0 auto'}>
                <Card>
                    <Col
                        height={150}
                        width={'100%'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        style={{ backgroundColor: theme.palette.primary.default, height: 84 }} >
                        <P variant="h6">Alterar Senha</P>
                    </Col>
                    <CardContent>
                        <Col container padding={spaceL}>
                            <P variant="h6" vTitle mb={spaceL}>DADOS DE ACESSO</P>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="component-helper">E-mail</InputLabel>
                                <Input
                                    placeholder="Digite seu e-mail"
                                    defaultValue="teste@teste.com"
                                    aria-describedby="component-helper-text"
                                />
                                <FormHelperText id="component-helper-text">

                                </FormHelperText>
                            </FormControl>

                            <Row container mt={spaceL} sx={{ justifyContent: 'space-between' }}>
                                <Col xs={12} md={5} lg={5} xl={5}>
                                    <FormControl variant="standard">
                                        <InputLabel htmlFor="component-helper">Nova senha</InputLabel>
                                        <Input
                                            placeholder="Nova senha"
                                            defaultValue=""
                                            aria-describedby="component-helper-text"
                                        />
                                        <FormHelperText id="component-helper-text">

                                        </FormHelperText>
                                    </FormControl>
                                </Col>
                                <Col xs={12} md={5} lg={5} xl={5}>
                                    <FormControl variant="standard">
                                        <InputLabel htmlFor="component-helper">Confirme a nova senha</InputLabel>
                                        <Input
                                            placeholder="Confirme a nova senha"
                                            defaultValue=""
                                            aria-describedby="component-helper-text"
                                        />
                                        <FormHelperText id="component-helper-text">

                                        </FormHelperText>
                                    </FormControl>
                                </Col>
                            </Row>

                        </Col>

                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>

                <Stack marginY={2} mb={12} width={100} alignSelf={'flex-end'}>
                    <Button variant="contained">Salvar</Button>
                </Stack>
            </Col>

        </Col>
    );
};

