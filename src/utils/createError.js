import { NOTIFICATION_TYPES } from './../constants/constants';

export const createRequestError = (error, errorCreateFunction) => {
  if (error.response) {
    errorCreateFunction({
      type: NOTIFICATION_TYPES.ERROR,
      message: `${error.response.status}: ${error.response.data.message}`
    })
  } else {
    errorCreateFunction({
      type: NOTIFICATION_TYPES.ERROR,
      message: error.message
    })
  }
}