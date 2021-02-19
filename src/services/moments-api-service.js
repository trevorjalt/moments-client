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

    getUserPostPhoto() {
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
                    : res.json()
            )
    },

    getUserCaption() {
        return fetch (`${config.API_ENDPOINT}/post-caption`, {
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

    getUserFollowers() {
        return fetch (`${config.API_ENDPOINT}/connection/followers`, {
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

    getUserFollowing() {
        return fetch (`${config.API_ENDPOINT}/connection/following`, {
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

    getUserFeed() {
        return fetch (`${config.API_ENDPOINT}/feed`, {
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

    getRequestedUserCaptions(id) {
        return fetch (`${config.API_ENDPOINT}/post-caption/${id}`, {
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

    getRequestedUserPostPhotos(id) {
        return fetch (`${config.API_ENDPOINT}/post-photo/download/${id}`, {
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

    getRequestedUserProfilePicture(id) {
        return fetch (`${config.API_ENDPOINT}/profile-picture/download/${id}`, {
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

    getUserCounts() {
        return fetch(`${config.API_ENDPOINT}/count`, {
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
}

export default MomentsApiService
