"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


import headerImage from "../../assets/images/bg_card.png"
import { HeaderEvent, P } from '@/components';

export default function Login({ }) {

    return (
        <Stack alignItems={"center"}>
            <Card sx={{ maxWidth: 525, width: 520, marginBottom: 10 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={headerImage.src}
                    title="green iguana"
                />
                <CardContent>
                    <Stack padding={4}>
                        <HeaderEvent
                            title="Bienal do livro 2023 "
                            day='9 ago 2023 a 11 ago 2023'
                            location='Guatapará - Ribeirão Preto / SP' />
                        <P bold mt={4} mb={3}>
                            Para começar digite o seu e-mail
                        </P>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-helper">E-mail</InputLabel>
                            <Input
                                placeholder="Digite seu e-mail"
                                defaultValue=""
                                aria-describedby="component-helper-text"
                            />
                            <FormHelperText id="component-helper-text">
                                
                            </FormHelperText>
                        </FormControl>
                        <Link href="/forgot-password" fontSize={14} mt={2} underline="none">Esqueci a senha</Link>
                    </Stack>
                    <Stack padding={2}>
                        <Button fullWidth href="/register_client"  variant="contained">Avançar</Button>
                    </Stack>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
        </Stack>
    );
};

