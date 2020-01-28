import React from 'react';
import './Register.scss';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { ReactComponent as PeewahLogo } from '../../assets/peewah.svg';
import TextField from '@material-ui/core/TextField';

const RegisterComponent = () => {
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
                            <TextField id="standard-basic" label="Nombre" type="text"/>
                            <TextField id="standard-basic" label="Apellido" type="text"/>
                            <TextField id="standard-basic" label="Correo" type="email"/>
                            <TextField id="standard-password-input" label="Contraseña" type="password" autoComplete="current-password"/>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" width="100%" flexDirection="column" alignItems="center">
                            <Button variant="contained" color="primary" fullWidth disableElevation>
                                Registrarse
                            </Button>
                            <Box component="p" mt={8}>
                                Ya tengo cuenta
                            </Box>
                            <Button color="primary" fullWidth component={Link} to={'/'} >
                                Iniciar sesión
                            </Button>
                        </Box>
                    </CardActions>
                </form>
            </Card>
        </Grid>
    </Grid>
  );
}

export default RegisterComponent;