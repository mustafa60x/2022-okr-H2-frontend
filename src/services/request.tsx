import { isEmpty } from "../utils/İndex"

function parseData(data) {
    const formData = new FormData()
    for(let [key, value] of Object.entries(data) as any) {
        formData.append(key, value)
    }
    return formData
}

function showErrorMessage(error) {
    let message = error.message || 'Bir hata oluştu!'
    if (error?.statusCode === 401) {
        message = "Giriş Hatası!"
    } else if(error?.statusCode === 500) {
        message = "Sunucu Hatası!"
    }

    alert(`${message}`)
}

function request(url, data = false, method = 'GET', type = 'FORM_DATA') {
    return new Promise(async (resolve, reject) => {
        try {
            const BASE_URL = import.meta.env.VITE_APP_API_URL + url

            // const token = window["accessToken"] ? window["accessToken"] : 'dummy_token'
            const token = !isEmpty(localStorage.getItem('accessToken')) ? JSON.parse(localStorage.getItem('accessToken')) : 'dummy_token'

            const headers = new Headers()
            headers.append('Content-type', 'application/json')
            headers.append('Authorization', 'Bearer ' + token)

            const options = {
                method,
                headers,

            } as any
        
            if (data && method === 'POST') {
                options.body = type === 'JSON' ? JSON.stringify(data) : parseData(data)
            }

            const response = await fetch(BASE_URL, options)
            const result = await response.json()

            if(response.ok) {
                
                resolve(result)
            } else {
                showErrorMessage(result)
                reject(result)
            }
        } catch (error: any) {
            showErrorMessage(error)
            reject(error)
        }
    })
}

export const post = (url, data) => request(url, data, 'POST')
export const postJSON = (url, data) => request(url, data, 'POST', 'JSON')
export const get = (url) => request(url)