import axios from "axios";
import { useEffect, useState } from "react";

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const { data } = await axios.get("/api/chats");
            setChats(data);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <h1 key={chat._id}>{chat.chatName}</h1>
            ))}
        </div>
    );
}

export default ChatPage;
