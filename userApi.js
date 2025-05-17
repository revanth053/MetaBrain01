// Base URL for the API
const API_BASE_URL = 'https://tvs-motors-api.eficensittest.com';

// API endpoints
const API_ENDPOINTS = {
    getAllUsers: '/users/users/',
    getUser: '/users/get_user/',
    createUser: '/users/create_user/',
    updateUser: '/users/update_user/',
    deleteUser: '/users/delete_user/'
};

// Get all users
async function getAllUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.getAllUsers}`);
        if (!response.ok) {
            throw { response };
        }
        const data = await response.json();
        console.log('All users response:', data);
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Get user by email
async function getUserByEmail(email) {
    try {
        console.log('Searching for user with email:', email);
        
        // First get all users
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.getAllUsers}`);
        
        if (!response.ok) {
            console.error('API response not OK:', response.status);
            throw { response };
        }

        const users = await response.json();
        console.log('All users:', users);
        
        // Filter users by email
        const user = users.find(u => {
            console.log('Comparing:', u.email, 'with', email);
            return u.email === email;
        });
        
        console.log('Found user:', user);

        if (!user) {
            console.log('No user found with email:', email);
            throw { response: { status: 404 } };
        }

        return user;
    } catch (error) {
        console.error('Error in getUserByEmail:', error);
        throw error;
    }
}

// Create new user
async function createUser(userData) {
    try {
        console.log('Creating user with data:', userData);
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.createUser}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            console.error('Create user response not OK:', response.status);
            throw { response };
        }

        const data = await response.json();
        console.log('Created user response:', data);
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Update user
async function updateUser(email, userId, userData) {
    try {
        console.log('Updating user:', email, 'with data:', userData);
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.updateUser}${email}?user_id=${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            console.error('Update user response not OK:', response.status);
            throw { response };
        }

        const data = await response.json();
        console.log('Updated user response:', data);
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

// Delete user
async function deleteUser(email, userId) {
    try {
        console.log('Deleting user:', email);
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.deleteUser}${email}?user_id=${userId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            console.error('Delete user response not OK:', response.status);
            throw { response };
        }

        const data = await response.json();
        console.log('Deleted user response:', data);
        return data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

// Export the functions
export {
    getAllUsers,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}; 