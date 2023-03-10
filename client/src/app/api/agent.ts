import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { delayRequest, getValidationError } from './helpers'
import { CatalogRoutes, ErrorRoutes, CartRoutes } from './routes/routes';

axios.defaults.baseURL = 'http://localhost:5000/api/'
axios.defaults.withCredentials = true

axios.interceptors.response.use(async serverResponse => {
   await delayRequest()
   
   return serverResponse
}, (error: AxiosError) => {
   
   const { data, status } = error.response!
   
   // Display error message to user
    switch (status) {
      case 400: 
         getValidationError(data)
         toast.info(data.title)
         break
      case 401:
         toast.warn(data.title)
         break
       case 500:
         //  navigate('/server/server-error', {
         //     state: { error: data }
         //  })
         toast.error(data.title)
         break
      default:
         break
   }

   // Caught error execptions in the console
   return Promise.reject(error.response)
})

const agent = {
   CartRoutes,
   CatalogRoutes,
   ErrorRoutes
}

export default agent;