import axios from 'axios';
import { ORIGIN, token } from '../../convig';


export const conversations = async (page: number) => {
    var response = await axios.get(ORIGIN+'conversations' + '?limit=10&offset='+(page*10).toString(), {'headers': {
        Authorization: 'Token ' + token,
        "Content-Type": 'application/json'
    }});
    return {
        records: response.data.results.map((e: any) => {
            return {
                ...e,
                'message': e.message_set[0].message,
                'can_promote': e.can_promote ? 'Да': 'Нет'
            }
        }),
        total: response.data.count
    }
}

export const updateConversations = async (id: string, theme: string, sentiment: string) => {
    var response = await axios.get(
        ORIGIN + 'conversations/update-state/' + id,
        {
            headers: {
                'Authorization': 'Token ' + token
            }
        }
    )
    return response.data;
}