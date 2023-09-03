import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
    return (
        <div>
        <Toaster position="top-center" toastOptions={{
            duration: 4000,
            style: {
                background: '#363636',
                color: '#fff',
            }
        }} />
        </div>
    )
}

export default ToastProvider;
