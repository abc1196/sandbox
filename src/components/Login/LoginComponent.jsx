import React from 'react';
import './Login.scss';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
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
                <form noValidate onSubmit={props.login} >
                    <CardContent>
                        <Box display="flex" flexDirection="column">
                            <TextField id="standard-basic" label="Correo" type="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
                            <TextField id="standard-password-input" label="Contraseña" type="password" autoComplete="current-password" value={props.password} onChange={(e) => props.setPassword(e.target.value)}/>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" width="100%" flexDirection="column" alignItems="center">
                            <Button variant="contained" color="primary" disabled={props.loading} type="submit" fullWidth disableElevation >
                            {
                                props.loading ?
                                <Box display="flex" width="100%" flexDirection="column" alignItems="center">
                                    <CircularProgress size={24}/>
                                </Box>
                                :
                                'Iniciar sesión'
                            }
                            </Button>
                            <Box className="error" component="p" display="flex" width="100%" flexDirection="column" alignItems="center" mt={2}>
                                {
                                    props.error ?
                                    props.error
                                    :
                                    ''
                                }
                            </Box>
                            <Box component="p" mt={8}>
                                No tengo cuenta
                            </Box>
                            <Button color="primary" disabled={props.loading} component={Link} to={'/register'} fullWidth>
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