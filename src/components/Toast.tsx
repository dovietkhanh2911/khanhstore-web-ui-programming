export default function Toast({message,onClose}:{message:string;onClose:()=>void}){return <div className="toast" role="status">{message}<button onClick={onClose} aria-label="Đóng">×</button></div>}
