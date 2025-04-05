export const feedData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/pet/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();

        // console.log('API Response:', jsonData);

        return jsonData?.data || jsonData || [];
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
};
export const feedDataSingle = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/pet/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();

        console.log('API Response:', jsonData);

        return jsonData?.data || jsonData || [];
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
};
