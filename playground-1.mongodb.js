
show databases

use ('jam')

const arrpeople = [
    {
        name: "Lays",
        lastname: "Arceles",
        salary: 0

    },
    {
        name: "Fernanda",
        lastname: "Fialho",
        salary: 2.1

    },
    {
        name: "Thais",
        lastname: "Schitz",
        salary: 2.1

    },
    {
        name: "Rebeca",
        lastname: "Ianz",
        salary: 2.1

    },
    {
        name: "Bruna",-
        lastname: "Bonk",
        salary: 2.1

    }
]

db.people.insertMany(arrpeople);
