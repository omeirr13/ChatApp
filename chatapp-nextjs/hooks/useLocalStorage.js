'use client'
export const useLocalStorage = (key) => {
    const getItem = () => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    };

    const setItem = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    const getItems = () => {
        const items = window.localStorage.getItem(key);
        if (items) {
            return JSON.parse(items);
        } else {
            return [];
        }
    };
    const setItems = (value) => {
        const existingItems = getItems(); // Retrieve current items from localStorage

        // Check if the value already exists
        if (!existingItems.includes(value)) {
            // Add the new item only if it does not already exist
            const updatedItems = [...existingItems, value];
            window.localStorage.setItem(key, JSON.stringify(updatedItems));
        }
    };
    const removeItem = (value) => {
        const existingItems = getItems();
        const updatedItems = existingItems.filter(item => item !== value);
        window.localStorage.setItem(key, JSON.stringify(updatedItems));
    };
    const setChatMessage = (email1, email2, value) => {
        const [firstEmail, secondEmail] = email1 < email2 ? [email1, email2] : [email2, email1];

        const innerKey = `${firstEmail}-${secondEmail}`;

        const existingItems = JSON.parse(localStorage.getItem(key)) || {};
        const items = existingItems[innerKey] || [];
        const updatedItems = [...items, value];

        localStorage.setItem(key, JSON.stringify({ ...existingItems, [innerKey]: updatedItems }));
    };

    const setFriendConnection = (email1, email2, message, timestamp, messageCount) => {
        console.log(messageCount);
        let existingItems = JSON.parse(localStorage.getItem(key)) || {};

        if (existingItems[email1] && existingItems[email1][email2]) {
            existingItems[email1][email2] = [message, timestamp, messageCount];
        } else {
            let items1 = existingItems[email1] || {};
            items1[email2] = [message, timestamp, messageCount];
            existingItems[email1] = items1;
        }

        if (existingItems[email2] && existingItems[email2][email1]) {
            existingItems[email2][email1] = [message, timestamp, messageCount];
        } else {
            let items2 = existingItems[email2] || {};
            items2[email1] = [message, timestamp, messageCount];
            existingItems[email2] = items2;
        }

        localStorage.setItem(key, JSON.stringify(existingItems));
    };

    const setPendingRequestList = (email, newRequest) => {
        console.log('in local');
        let existingItems = JSON.parse(localStorage.getItem(key)) || {};

        let items = existingItems[email] || [];

        if (!items.includes(newRequest)) {
            items = [...items, newRequest];
            localStorage.setItem(key, JSON.stringify({ ...existingItems, [email]: items }));

            console.log('Updated pending requests:', items);
        } else {
            console.log('Request already exists in pending requests:', newRequest);
        }
    };

    const removePendingRequest = (email, requestToRemove) => {
        let existingItems = JSON.parse(localStorage.getItem(key)) || {};
        let items = existingItems[email] || [];
        const updatedItems = items.filter(request => request !== requestToRemove);
        existingItems[email] = updatedItems;
        localStorage.setItem(key, JSON.stringify(existingItems));
    };


    const deleteItem = () => {
        window.localStorage.removeItem(key);
    };

    const setEmailToUsernameMapping = (email, username) => {
        // Retrieve existing mappings from localStorage
        const existingMappingsString = localStorage.getItem('emailToUsernameMapping');

        // Parse existing mappings from localStorage or initialize an empty object
        const existingMappings = existingMappingsString ? JSON.parse(existingMappingsString) : {};

        // Update the mappings with the new email and username
        existingMappings[email] = username;

        // Store the updated mappings back into localStorage
        localStorage.setItem('emailToUsernameMapping', JSON.stringify(existingMappings));
    };
    return { getItems, setItems, setItem, getItem, deleteItem, setChatMessage, setFriendConnection, setPendingRequestList, removePendingRequest, removeItem, setEmailToUsernameMapping }
}   