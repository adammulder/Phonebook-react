let token = '5ae20d8e845dddd42014b1d11bd51add3a9d221f0405d360'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://adaptable-useful-key.glitch.me/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://adaptable-useful-key.glitch.me/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://adaptable-useful-key.glitch.me/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://adaptable-useful-key.glitch.me/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
// export const server_calls = {
//     get: async () => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
//         {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//             },
//         });

//         if (!response.ok){
//             throw new Error('Failed to fetch data from the server')
//         }

//         return await response.json()
//     },

//     create: async (data: any = {}) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
//         {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'access-control-allow-origin':	'*',
//             },
//             body: JSON.stringify(data)
//         })

//         if (!response.ok) {
//             throw new Error('Failed to create new data on the server')
//         }

//         return await response.json()
//     },

//     update: async (id:string, data: any = {}) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`,
//         {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//             },
//             body: JSON.stringify(data)
//         })

//         if (!response.ok){
//             throw new Error('Failed to update data on server')
//         }

//         return await response.json()
//     },

//     delete: async (id:string) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`,
//         {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })

//         if (!response.ok){
//             throw new Error('Failed to delete data on server')
//         }

//         return;
//     },
// }
