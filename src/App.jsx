import EmailSender from '../src/Components/EmailSender.jsx'
import toast, { Toaster } from 'react-hot-toast';
export default function App() {
  return (
    <>
    <Toaster position='top-right'/>
    <EmailSender/>
    </>
  )
}
