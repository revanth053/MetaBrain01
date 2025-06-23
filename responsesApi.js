// Responses API functions
const API_BASE_URL = 'https://tvs-motors-api.eficensittest.com';

// Get all responses
async function getAllResponses() {
    try {
        const response = await fetch(`${API_BASE_URL}/responses/responses/`);
        if (!response.ok) throw new Error('Failed to fetch responses');
        return await response.json();
    } catch (error) {
        console.error('Error fetching responses:', error);
        throw error;
    }
}

// Create response
async function createResponse(responseData) {
    try {
        const response = await fetch(`${API_BASE_URL}/responses/create_response/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(responseData)
        });
        if (!response.ok) throw new Error('Failed to create response');
        return await response.json();
    } catch (error) {
        console.error('Error creating response:', error);
        throw error;
    }
}

// Get all feedbacks
async function getAllFeedbacks() {
    try {
        const response = await fetch(`${API_BASE_URL}/responses/feedbacks/`);
        if (!response.ok) throw new Error('Failed to fetch feedbacks');
        return await response.json();
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        throw error;
    }
}

// Create feedback
async function createFeedback(feedbackData) {
    try {
        const response = await fetch(`${API_BASE_URL}/responses/create_feedback/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedbackData)
        });
        if (!response.ok) throw new Error('Failed to create feedback');
        return await response.json();
    } catch (error) {
        console.error('Error creating feedback:', error);
        throw error;
    }
}

// Clear data
async function clearData() {
    try {
        const response = await fetch(`${API_BASE_URL}/responses/clear_data/`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to clear data');
        return await response.json();
    } catch (error) {
        console.error('Error clearing data:', error);
        throw error;
    }
}

// React to response
async function reactToResponse(responseId, reaction) {
    try {
        const response = await fetch(`${API_BASE_URL}/responses/react`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ response_id: responseId, reaction })
        });
        if (!response.ok) throw new Error('Failed to react to response');
        return await response.json();
    } catch (error) {
        console.error('Error reacting to response:', error);
        throw error;
    }
}

export {
    getAllResponses,
    createResponse,
    getAllFeedbacks,
    createFeedback,
    clearData,
    reactToResponse
}; 