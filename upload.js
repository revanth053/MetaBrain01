// API Configuration
const API_CONFIG = {
    BASE_URL: 'https://tvs-motors-api.eficensittest.com',
    ENDPOINTS: {
        UPLOAD: '/uploads/upload/',
        SUBMIT_FEEDBACK: '/uploads/submit-feedback/',
        FROST_TO_S3: '/uploads/frost_to_s3/'
    }
};

// File Upload Handler
async function handleFileUpload(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.UPLOAD}`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
}

// Submit Feedback Handler
async function submitFeedback(feedbackData) {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SUBMIT_FEEDBACK}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackData)
        });

        if (!response.ok) {
            throw new Error(`Feedback submission failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Feedback submission error:', error);
        throw error;
    }
}

// Frost to S3 Handler
async function uploadToS3(fileString) {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.FROST_TO_S3}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ file: fileString })
        });

        if (!response.ok) {
            throw new Error(`S3 upload failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('S3 upload error:', error);
        throw error;
    }
}

export { handleFileUpload, submitFeedback, uploadToS3 };