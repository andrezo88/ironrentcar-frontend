import axios from "axios";

class Api {
    constructor() {
        this.apiConnection = axios.create({
            /* baseURL: "https://ironrentcar-backend.herokuapp.com/" */
            baseURL: "http://localhost:5001"
        })

        this.apiConnection.interceptors.request.use((config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers = {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
            return config
        }, (error) => {
            console.log(error)
        })

        this.apiConnection.interceptors.request.use((response) => response,
            (error) => {
                if (error.response.status === 401) {
                    localStorage.removeItem("token");
                }
                throw error
            })
    }

    login = async (loginInfo) => {
        console.log(loginInfo)
        try {
            const { data } = await this.apiConnection.post("/auth/login", loginInfo)
            localStorage.setItem("token", data.token)
            localStorage.setItem('loginInfo', JSON.stringify(data.user))
            return data;
        } catch (error) {
            throw error.response
        }
    }

    signup = async (signupInfo) => {
        console.log(signupInfo)
        try {
            const { data } = await this.apiConnection.post("/auth/signup", signupInfo)
            return data;
        } catch (error) {
            throw error.response;
        }
    }


}

export default new Api();