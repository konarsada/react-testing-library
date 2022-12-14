const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Sada",
                    last: "Konar"
                },
                picture: {
                    large: "https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo="
                },
                login: {
                    username: "Sadabrata"
                }
            },
            {
                name: {
                    first: "Robin",
                    last: "Konar"
                },
                picture: {
                    large: "https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo="
                },
                login: {
                    username: "RobinTheRott"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}