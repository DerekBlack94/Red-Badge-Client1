import DeleteUserBike from './DeleteUserBike'

interface Props {
    token: string | null
}

const DeleteUserBikeDisplay = (props: Props) => {

    return (
            <div>
                <DeleteUserBike token={props.token}  />
            </div>
    )
}

export default DeleteUserBikeDisplay;