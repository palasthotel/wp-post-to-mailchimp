import {dispatch} from '@wordpress/data'

export const showNotice = (message) => {
    dispatch('core/notices').createNotice(message)
}

export const showWarning = (message) => {
    dispatch('core/notices').createWarningNotice(message)
}

export const showError = (message) => {
    dispatch('core/notices').createErrorNotice(message)
}