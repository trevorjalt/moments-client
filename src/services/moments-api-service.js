import config from '../config'
import TokenService from './token-service'


const MomentsApiService = {
    getProfilePicture() {
        return fetch(`${config.API_ENDPOINT}/profile-picture/download`, {
            method: "GET",
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },

    postProfilePicture(file) {
        return fetch(`${config.API_ENDPOINT}/profile-picture/upload`, {
            method: "POST",
            body: new FormData(file),
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res
            )
    },

    updateProfilePicture(file, update) {
        return fetch(`${config.API_ENDPOINT}/profile-picture/upload/${update}`, {
            method: 'PATCH',
            body: new FormData(file),
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : null
            )
    },

    getPostPhoto() {
        return fetch(`${config.API_ENDPOINT}/post-photo/download`, {
            method: "GET",
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },

    postPostPhoto(file) {
        return fetch(`${config.API_ENDPOINT}/post-photo/upload`, {
            method: "POST",
            body: new FormData(file),
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res
            )
    },
}

export default MomentsApiService