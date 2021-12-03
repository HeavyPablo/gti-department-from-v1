import axios from "axios";

const URL = '/department-rent'

var headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('user-token')
};

class DepartmentSend {
    static store(data, then, error) {
        axios.post(URL, data, {headers: headers})
            .then(({data}) => then(data))
            .catch(({response}) => error(response));
    }
}

export default DepartmentSend;
