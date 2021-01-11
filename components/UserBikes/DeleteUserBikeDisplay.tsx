import DeleteUserBike from './DeleteUserBike'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '4em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '50vh',
            
        }
    }),
);

interface Props {
    token: string | null
}

const DeleteUserBikeDisplay = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} >
            <div>
                {/* <DeleteUserBike token={props.token}  /> */}
            </div>
        </Container>
    )
}

export default DeleteUserBikeDisplay;