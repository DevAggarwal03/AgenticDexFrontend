import { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';

interface Message {
    role: 'user' | 'bot';
    content: string;
}

const ChatPage = () => {
    const [activeChat, setActiveChat] = useState<'wallet' | 'pool'>('wallet');
    const [walletMessages, setWalletMessages] = useState<Message[]>([
        { role: 'bot', content: "Hi, I can help you manage your wallet!" }
    ]);
    const [poolMessages, setPoolMessages] = useState<Message[]>([
        { role: 'bot', content: "Hi, I can help you with liquidity pool operations!" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const messages = activeChat === 'wallet' ? walletMessages : poolMessages;
    const setMessages = activeChat === 'wallet' ? setWalletMessages : setPoolMessages;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        setMessages(prev => [...prev, { role: 'user', content: input }]);
        setIsLoading(true);

        try {
            const endpoint = activeChat === 'wallet' ? '/chat/wallet' : '/chat/pool';
            const response = await axios.post(`${import.meta.env.VITE_CHAT_BOT_URL}${endpoint}`, {
                message: input
            });

            console.log("response : ", activeChat === 'wallet' ? formatWalletResponse(response.data.response, 0) : response.data.response);
            setMessages(prev => [...prev, { role: 'bot', content: activeChat === 'wallet' ? response.data.response : response.data.response }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { role: 'bot', content: 'Error: Failed to get response' }]);
        } finally {
            setIsLoading(false);
            setInput('');
        }
    };

    // const formatWalletResponse = (response: any) => {


    //     // Extract JSON parts using regex
    //     const matches = response.match(/data: ({.*?})/g);

    //     if (matches) {
    //         matches.forEach((match: any) => {
    //             try {
    //                 // Remove "data: " prefix and parse JSON
    //                 const jsonStr = match.replace("data: ", "").trim();
    //                 const parsed = JSON.parse(jsonStr);

    //                 // Get content
    //                 let content = parsed.content;

    //                 // If content is another JSON, parse it
    //                 if (typeof content === "string" && content.startsWith('{') && content.endsWith('}')) {
    //                     content = JSON.parse(content);
    //                 }

    //                 // If content is an object, pretty print it
    //                 if (typeof content === "object") {
    //                     console.log(JSON.stringify(content, null, 2));
    //                 }
    //                 // If content is a string, format newlines
    //                 else if (typeof content === "string") {
    //                     const cleanedContent = content
    //                         .replace(/\\n/g, "\n")  // Convert escaped newlines
    //                         .replace(/  \* /g, "- ") // Fix bullet points
    //                         .trim();

    //                     console.log(cleanedContent);
    //                     return cleanedContent;
    //                 }
    //             } catch (error) {
    //                 console.error("Error parsing JSON:", error);
    //             }
    //         });
    //     }

    // }

    const formatWalletResponse = (response: any, index: number) => {
        let openingBracket = 0;
        let count = 0;
        let closingBracket = index;
        for(let i = 0; i < response.length; i++){
            if(response[i] === "{"){
                if(count === 0){
                    openingBracket = i;
                }
                count++;
            }
            if(response[i] === "}"){
                if(count === 0){
                    closingBracket = i;
                    if(response[i+1] === "{"){
                        formatWalletResponse(response, i+1)
                    }
                }
                count--;
            }
        }
        console.log(closingBracket, response[closingBracket+1]);
        return response.substring(openingBracket, closingBracket + 1);
    }

    return (
        <div className='flex flex-col h-screen bg-[#0f172a]'>
            <Navbar />

            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
                {/* Chat Type Selector */}
                <div className="p-4 border-b border-gray-800 flex space-x-4">
                    <button
                        onClick={() => setActiveChat('wallet')}
                        className={`px-4 py-2 rounded-lg ${activeChat === 'wallet'
                                ? 'bg-blue-600 text-white'
                                : 'bg-[#334155] text-gray-300'
                            }`}
                    >
                        Wallet Assistant
                    </button>
                    <button
                        onClick={() => setActiveChat('pool')}
                        className={`px-4 py-2 rounded-lg ${activeChat === 'pool'
                                ? 'bg-blue-600 text-white'
                                : 'bg-[#334155] text-gray-300'
                            }`}
                    >
                        Pool Assistant
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#1e293b]">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg p-4 ${message.role === 'user'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-[#334155] text-white'
                                    }`}
                            >
                                <pre className="whitespace-pre-wrap font-sans">
                                    {message.content}
                                </pre>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <div className="border-t border-gray-800 p-4 bg-[#1e293b]">
                    <form
                        onSubmit={sendMessage}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={`Ask the ${activeChat === 'wallet' ? 'Wallet' : 'Pool'} Assistant...`}
                                className="flex-1 bg-[#334155] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className={`px-6 py-2 rounded-lg font-semibold ${!isLoading && input.trim()
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-[#334155] text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {isLoading ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatPage; 