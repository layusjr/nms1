import { Container, } from "@material-ui/core";
import { ReactDOM } from "react-dom";
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
    
});

const HomePage = () => {

return(
    <Container>
       <h1>Welcome User
           </h1>  
    </Container>
)


}
export default HomePage;
if(document.getElementById(`homepage`)){
    ReactDOM.render(<HomePage/>,document.getElementById('editblog'));
}