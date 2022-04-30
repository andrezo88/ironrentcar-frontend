import axios from "axios";

class Api {
    constructor() {
        this.apiConnection = axios.create({
            baseURL: "https://ironrentcar-backend.herokuapp.com/"
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
        try {
            const { data } = await this.apiConnection.post("/auth/login", loginInfo)
            localStorage.setItem("token", data.token)
            localStorage.setItem("loginInfo", JSON.stringify(data.user))
            return data;
        } catch (error) {
            throw error.response
        }
    }

    signup = async (signupInfo) => {
        try {
            const { data } = await this.apiConnection.post("/auth/signup", signupInfo)
            return data;
        } catch (error) {
            throw error.response;
        }
    }

    getProfile = () => {
        const userInfo = localStorage.getItem("loginInfo")
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        const error = new Error();
        error.response = { data: { msg: "User Info not found!" } }
        throw error.response;
    }

    getRentbyUser = async () => {
        try {
            const { data } = await this.apiConnection.get("/rent")
            return data;
        } catch (error) {
            throw error.response;
        }
    }

    getAllVehicles = async () => {
        try {
            const { data } = await this.apiConnection("/group-vehicles")
            return data;
        } catch (error) {
            throw error.response;
        }
    }
}

export default new Api();