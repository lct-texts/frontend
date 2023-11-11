import axios from 'axios';
import { ORIGIN, token } from '../../convig';


export const conversation = async (id: number) => {
    var res = await axios.get(
        ORIGIN+'conversations/'+id.toString(), 
        {
            headers: {
                Authorization: 'Token ' + token,
                'Content-Type': 'application/json'
            }
        }
    );
    return res.data;
}
