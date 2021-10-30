import axios from "axios";

const URL = '/department-equipment'

var headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('user-token')
};

class DepartmentEquipment {
    static update(element, data, then, error) {
        axios.put(URL + '/' + element, data, {headers: headers})
            .then(({data}) => then(data))
            .catch(({response}) => error(response));
    }
}

export default DepartmentEquipment;