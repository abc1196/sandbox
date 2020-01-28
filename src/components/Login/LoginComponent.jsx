import React from 'react';
import './Login.scss';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { ReactComponent as PeewahLogo } from '../../assets/peewah.svg';
import TextField from '@material-ui/core/TextField';

const LoginComponent = (props) => {
  return (
    <Grid
    container
    spacing={0}
    direction="row"
    justify="center"
    alignItems="center"
    style={{ minHeight: "100vh" }}
    >        
        <Grid item xs={10} sm={6} md={3} >
            <PeewahLogo />
            <Card>
                <form noValidate autoComplete="off">
                    <CardContent>
                        <Box display="flex" flexDirection="column">
                            <TextField id="standard-basic" label="Correo" type="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
                            <TextField id="standard-password-input" label="Contraseña" type="password" autoComplete="current-password" value={props.password} onChange={(e) => props.setPassword(e.target.value)}/>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" width="100%" flexDirection="column" alignItems="center">
                            <Button variant="contained" color="primary" fullWidth disableElevation onClick={(e) => props.login(e)}>
                                Iniciar sesión
                            </Button>
                            <Box component="p" mt={8}>
                                No tengo cuenta
                            </Box>
                            <Button color="primary" fullWidth component={Link} to={'/register'} >
                                Hacer registro
                            </Button>
                        </Box>
                    </CardActions>
                </form>
            </Card>
        </Grid>
    </Grid>
  );
}

export default LoginComponent;