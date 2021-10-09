import axios from "axios";

const URL = '/auth'

class Login {
    static store(data, then, error) {
        axios.post(URL, data)
        .then(({data}) => then(data))
        .catch(({response}) => error(response));
    }
}

export default Login;
