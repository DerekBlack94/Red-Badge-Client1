import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container, Button } from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '5em',
            display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                height: "100vh",
                backgroundColor: "green",
                paddingTop: '10em'
        }
    }),
);

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>Family Bike Chain</h1>
                <Button>Check Us Out</Button>
            </div>
        </Container>
    )
}

export default Home;