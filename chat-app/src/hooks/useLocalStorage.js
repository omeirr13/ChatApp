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
        const existingItems = getItems();
        const updatedItems = [...existingItems, value];
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


    const deleteItem = () => {
        window.localStorage.removeItem(key);
    };
    return { getItems, setItems, setItem, getItem, deleteItem, setChatMessage, setFriendConnection }
}