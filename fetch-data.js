async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    dataContainer = document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        dataContainer.innerHTML = '';

        userList = document.createElement('ul');
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = user.name;
            userList.appendChild(userItem);
        });
        dataContainer.appendChild(userList);
    }
    catch (error) {
        console.error('Error fetching user data:', error);
         dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData);