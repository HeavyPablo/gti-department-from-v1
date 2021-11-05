import axios from "axios";

const URL = '/department-active'

var headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('user-token')
};

class DepartmentActive {
    static update(element, data, then, error) {
        axios.put(URL + '/' + element, data, {headers: headers})
            .then(({data}) => then(data))
            .catch(({response}) => error(response));
    }
}

export default DepartmentActive;