import { toast } from "react-toastify"

export const flashMessage = (type, message) => {
    toast.dismiss()
    if(type === 'info'){
        toast.info(message)
    }
    if(type === 'success'){
        toast.success(message)
    }
    if(type === 'error'){
        toast.error(message)
    }
    if(type === 'loading'){
        toast.loading(message)
    }
    if(type === 'warning'){
        toast.warning(message)
    }
    if(type === 'warn'){
        toast.warn(message)
    }
} 