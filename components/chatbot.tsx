"use client"

import Chatbot from '@chatbuild/widget'
import "@chatbuild/widget/dist/index.css"

const ChatbotComponent = () => {
return (
<Chatbot apiKey={process.env.NEXT_PUBLIC_CHATBOT_API_KEY!} />
)}

export default ChatbotComponent