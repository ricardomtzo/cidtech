"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


import headerImage from "../../assets/images/bg_card.png"

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
                        <Typography gutterBottom variant="h5" component="div">
                            Bienal do livro 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            9 ago 2023 à 11 ago 2023
                        </Typography>
                        <Typography mb={4} variant="body2" color="text.secondary">
                            Guatapará - Ribeirão Preto / SP
                        </Typography>
                        <Typography mb={'16px'} variant="h6">
                            Para começar digite o seu e-mail
                        </Typography>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-helper">E-mail</InputLabel>
                            <Input
                                placeholder="Digite seu e-mail"
                                defaultValue=""
                                aria-describedby="component-helper-text"
                            />
                            <FormHelperText id="component-helper-text">
                                Some important helper text
                            </FormHelperText>
                        </FormControl>
                    </Stack>
                    <Stack padding={2}>
                        <Button fullWidth variant="contained">Avançar</Button>
                    </Stack>
                </CardContent>
                <CardActions>
                    
                </CardActions>
            </Card>
        </Stack>
    );
};

