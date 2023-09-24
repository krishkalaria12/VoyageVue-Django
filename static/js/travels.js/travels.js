const btn = document.getElementById("submitButton")
const inputValue = document.getElementById("fromCity").value
const ToValue = document.getElementById("cityInput").value
const adults = document.getElementById("adults").value

btn.addEventListener("click" , showFlights)

async function Geolocation() {
    async function fetchGeocodingData(city) {
        const apiKey = 'fBgrAqgdm7qdNqzztAtcEw==ot2fLHnh3p2n0xPF';
        const url = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} ! Try Again Doing it ! `);
            }

            const result = await response.json();
            if (result.length > 0) {
                const obj = result[0]; // Assuming you want the first result
                const lang = obj.latitude;
                const long = obj.longitude;

                return { lang, long }; // Return an object with lang and long properties
            } else {
                console.log(`No data found for ${city}`);
                return null; // Return null if no data is found
            }
        } catch (error) {
            console.error('Error:', error);
            return null; // Return null in case of an error
        }
    }

    const city = 'chennai';
    
    const locationData = await fetchGeocodingData(city);

    // Call the function to fetch nearby hotels and pass the location data
    await fetchNearbyHotels(locationData);
}

// Define the fetchNearbyHotels function to accept location data as a parameter
async function fetchNearbyHotels(locationData) {
    const apiKey = '11a7860b2amsh68a28c242adfc74p1c138bjsn1803642ffd51';
    const host = 'priceline-com.p.rapidapi.com';
    const latitude = locationData.lang; // Use latitude from location data
    const longitude = locationData.long; // Use longitude from location data
    console.log(latitude);
    console.log(longitude);
    const radius = 1000;
    const url = `https://${host}/hotels/city/nearby/${latitude}/${longitude}?radius=${radius}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': host,
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the Geolocation function to start the process
Geolocation();




// function showFlights() {
//     async function Flights() {
//         const url = `https://priceline-com.p.rapidapi.com/cars/location/search?q=${inputValue}`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '11a7860b2amsh68a28c242adfc74p1c138bjsn1803642ffd51',
//                 'X-RapidAPI-Host': 'priceline-com.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.text();
//             console.log(result);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     Flights()
// }

// async function searchAirport(query) {
//     const apiKey = "11a7860b2amsh68a28c242adfc74p1c138bjsn1803642ffd51";
//     const host = "tripadvisor16.p.rapidapi.com";
//     const url = `https://${host}/api/v1/flights/searchAirport?query=${query}`;

//     const options = {
//         method: "GET",
//         headers: {
//         "X-RapidAPI-Key": apiKey,
//         "X-RapidAPI-Host": host,
//         },
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Usage
// const query = "mumbai";
// searchAirport(query);
