import React, { useEffect, useState } from 'react';

const PostDataComponent = () => {
    const [headers, setHeaders] = useState(null);

    useEffect(() => {
        const postData = async () => {
            try {
                const response = await fetch('https://chimpu.xyz/api/post.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ phonenumber: 'your_phone_number_here' })
                });

                const headersObj = Object.fromEntries(response.headers);
                setHeaders(headersObj);
                console.log(headersObj);
            } catch (error) {
                console.error('Error posting data:', error);
            }
        };

        postData();
    }, []);

    return (
        <div>
            <div>Check console for headers</div>

            <h2>OR</h2>
            
            {headers && (
                <div>
                    <h2>Headers Received:</h2>
                    <pre>{JSON.stringify(headers, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PostDataComponent;
