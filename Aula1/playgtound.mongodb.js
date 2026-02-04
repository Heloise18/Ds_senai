use('jam')

// db.people.find({name: /s/})


db.people.find({ name: /[^F][a$]/ })