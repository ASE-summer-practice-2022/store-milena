import React, { Component, useState, ChangeEvent } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "@styles/Style.scss";
import {storeNames} from "@stores/Enum";
import {inject, observer} from "mobx-react";

const SignIn = inject(storeNames.AppStoreName)(observer((props: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await props.AppStore.login(email, password);
        await props.AppStore.authentication();
    }

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className="customBox" sx={{ marginTop: 8}}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Box component="form" onSubmit={(e: any) => login(e)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email-адресс"
                            name="email"
                            value={email}
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={password}
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомнить"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                       Забыли пароль?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Нет аккаунта? Регистрация"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}));

export default SignIn;