// Message API functions
const API_BASE_URL = 'https://tvs-motors-api.eficensittest.com'; // Replace with your actual API base URL

// Get all messages
async function getAllMessages() {
    try {
        const response = await fetch(`${API_BASE_URL}/message/messages/`);
        if (!response.ok) throw new Error('Failed to fetch messages');
        return await response.json();
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
}

// Get message by ID
async function getMessageById(messageId) {
    try {
        const response = await fetch(`${API_BASE_URL}/message/get_message/${messageId}`);
        if (!response.ok) throw new Error(`Failed to fetch message with ID ${messageId}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching message with ID ${messageId}:`, error);
        throw error;
    }
}

// Get messages by Chat ID
async function getMessagesByChatId(chatId) {
    try {
        const response = await fetch(`${API_BASE_URL}/message/get_message_by_chat_id/${chatId}`);
        if (!response.ok) throw new Error(`Failed to fetch messages for chat ID ${chatId}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching messages for chat ID ${chatId}:`, error);
        throw error;
    }
}

// Create Message
async function createMessage(messageData) {
    try {
        const response = await fetch(`${API_BASE_URL}/message/create_message/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData)
        });
        if (!response.ok) throw new Error('Failed to create message');
        return await response.json();
    } catch (error) {
        console.error('Error creating message:', error);
        throw error;
    }
}

// Update User (Based on provided endpoint, potentially misnamed) - Assuming it's for message-related user info or a typo
async function updateUserMessageInfo(userId, updateData) {
     console.warn("Using endpoint PUT /message/users/{user_id} - Assuming this updates user info related to messages or was a typo for updating a message.");
    try {
        const response = await fetch(`${API_BASE_URL}/message/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData)
        });
        if (!response.ok) throw new Error(`Failed to update user ${userId} message info`);
        return await response.json();
    } catch (error) {
        console.error(`Error updating user ${userId} message info:`, error);
        throw error;
    }
}

// Delete Message
async function deleteMessage(messageId) {
    try {
        const response = await fetch(`${API_BASE_URL}/message/delete_message/${messageId}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error(`Failed to delete message with ID ${messageId}`);
        return await response.json();
    } catch (error) {
        console.error(`Error deleting message with ID ${messageId}:`, error);
        throw error;
    }
}

export {
    getAllMessages,
    getMessageById,
    getMessagesByChatId,
    createMessage,
    updateUserMessageInfo, // Potentially misnamed based on endpoint
    deleteMessage
}; 