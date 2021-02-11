export const title = "Users";

export const columns = [
    {
        name: "ID",
        selector: "id",
        sortable: true
    },
    {
        name: "Name",
        selector: "name",
        sortable: true
    },
    {
        name: "Username",
        selector: "username",
        sortable: true
    },
    {
        name: "Email",
        selector: "email",
        sortable: true
    },
    {
        name: "Phonenumber",
        selector: "phone"
    },
    {
        name: "Street",
        selector: "address.street",
        sortable: true
    },
    {
        name: "Zipcode",
        selector: "address.zipcode",
        sortable: true
    },
    {
        name: "City",
        selector: "address.city",
        sortable: true
    }
];