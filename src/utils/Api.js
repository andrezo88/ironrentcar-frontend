import axios from "axios";

class Api {
    constructor() {
        this.rentCarData = axios.create({
            baseUrl: "https://ironrentcar-backend.herokuapp.com/"
        })

        this.rentCarData.interceptors.request.use((config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers = {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                };
            }
            return config
        }, (error) => {
            console.log(error)
        })

        this.rentCarData.interceptors.request.use((response) => response,
            (error) => {
                if (error.response.status === 401) {
                    localStorage.removeItem("token");
                }
                throw error
            })
    }

    Login = async (loginInfo) => {
        try {
            const { data } = await this.rentCarData.post("/auth/login", loginInfo)
            localStorage.setItem("token", data.token)
            return { data }
        } catch (error) {
            throw error.response
        }
    }
}

export default new Api(); 