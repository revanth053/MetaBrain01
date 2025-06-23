// Chat API functions
const API_BASE_URL = 'https://tvs-motors-api.eficensittest.com'; // Replace with your actual API base URL

// Get all chats
async function getAllChats() {
    try {
        const response = await fetch(`${API_BASE_URL}/chat/chats/`);
        if (!response.ok) throw new Error('Failed to fetch chats');
        return await response.json();
    } catch (error) {
        console.error('Error fetching chats:', error);
        throw error;
    }
}

// Get chat by ID
async function getChatById(chatId) {
    try {
        const response = await fetch(`${API_BASE_URL}/chat/get_chat/${chatId}`);
        if (!response.ok) throw new Error('Failed to fetch chat');
        return await response.json();
    } catch (error) {
        console.error('Error fetching chat:', error);
        throw error;
    }
}

// Get chats by user ID
async function getChatsByUserId(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/chat/get_chat_by_user_id/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch user chats');
        return await response.json();
    } catch (error) {
        console.error('Error fetching user chats:', error);
        throw error;
    }
}

// Create new chat
async function createChat(chatData) {
    try {
        const response = await fetch(`${API_BASE_URL}/chat/create_chat/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(chatData)
        });
        if (!response.ok) throw new Error('Failed to create chat');
        return await response.json();
    } catch (error) {
        console.error('Error creating chat:', error);
        throw error;
    }
}

// Update chat
async function updateChat(chatId, chatData) {
    try {
        const response = await fetch(`${API_BASE_URL}/chat/update_chat/${chatId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(chatData)
        });
        if (!response.ok) throw new Error('Failed to update chat');
        return await response.json();
    } catch (error) {
        console.error('Error updating chat:', error);
        throw error;
    }
}

// Delete chat
async function deleteChat(chatId) {
    try {
        const response = await fetch(`${API_BASE_URL}/chat/delete_chat/${chatId}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete chat');
        return await response.json();
    } catch (error) {
        console.error('Error deleting chat:', error);
        throw error;
    }
}

export {
    getAllChats,
    getChatById,
    getChatsByUserId,
    createChat,
    updateChat,
    deleteChat
}; 