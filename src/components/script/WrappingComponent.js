import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
export const withRouter = WrappedComponent => props => {
    const params = useParams()
    const navigate=useNavigate()
    return(
        <WrappedComponent
        {...props}
        params = {params} navigate={navigate}

        />
    )
}