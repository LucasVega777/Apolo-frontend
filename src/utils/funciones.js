import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";


const notifyError = (res) => {
    toast.error(res, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
  
const notifySuccess = (text) => {
    toast.success(text, {
        position: "top-right",
        autoClose: 3000,
        hidePrcoogressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
  });
}

const notifyWarning = (text) => {
    toast.warning(text, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
  
const notifyInfo = (text) => {
    toast.info(text, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


export { notifyError, notifyInfo, notifySuccess, notifyWarning }