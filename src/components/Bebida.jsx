import {Card,CardContent,CardMedia,Typography,Grid,Modal} from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
function Bebida({bebida}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Grid item xs={6} sm={3}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={bebida.strDrinkThumb}
                        alt={bebida.strDrink}
                        sx={{
                            backgroundPosition:'center',
                            maxheight:'180px'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {bebida.strDrink}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button 
                        size="small" 
                        color="primary"
                        sx={{
                            width:'100%',
                            marginBottom:'13px',
                            padding:'8px'
                        }}
                        variant="contained"
                        onClick={handleOpen}
                    >
                        VER RECETA
                    </Button>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Card
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        p: 4,
                      }}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={bebida.strDrinkThumb}
                            alt={bebida.strDrink}
                            sx={{
                                backgroundPosition:'center',
                                maxheight:'130px'
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {bebida.strDrink}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button 
                            size="small" 
                            color="primary"
                            sx={{
                                width:'100%',
                                marginBottom:'13px',
                                padding:'8px'
                            }}
                            variant="contained"
                        >
                            VER RECETA
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </Grid>
    );
}

export default Bebida;
