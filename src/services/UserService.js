import Api from '../utils/Api';

class UserService {
    static signIn = async (email, password) => {
        try {
            const response = await Api.put(`signIn/${email}/${password}`);
            if (!response.error) {
                return response;
            } else {
                throw response.error;
            } 
        } catch (error) {
            throw error;
        } 
    }
}

export default UserService;