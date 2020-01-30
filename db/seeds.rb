# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

titles = [
    "The Hobbit",
    "The Fellowship of the Ring",
    "The Two Towers",
    "The Return of the King",
    "The Silmarilion",
    "The Call of Cthulu",
    "The Shadow over Innsmouth",
    "The Dunwich Horror",
    "The Metamorphosis",
    "The Trial",
    "Fingersmith",
    "Kitchen",
    "Mathematical Principles of Natural Philosophy",
    "Elements",
    "The Hitchhiker's Guide to the Galaxy"
]

authors = [
    "J.R.R. Tolkien",
    "J.R.R. Tolkien",
    "J.R.R. Tolkien",
    "J.R.R. Tolkien",
    "J.R.R. Tolkien",
    "H.P. Lovecraft",
    "H.P. Lovecraft",
    "H.P. Lovecraft",
    "Franz Kafka",
    "Franz Kafka",
    "Sarah Waters",
    "Banana Yoshimoto",
    "Isaac Newton",
    "Euclid",
    "Douglas Adams"
]

genres = [
    "Fantasy",
    "Fantasy",
    "Fantasy",
    "Fantasy",
    "Fantasy",
    "Cosmic Horror",
    "Cosmic Horror",
    "Cosmic Horror",
    "Absurdist",
    "Absurdist",
    "Realistic Fiction",
    "Realistic Fiction",
    "Mathematics",
    "Mathematics",
    "Science Fiction"
]

(0..14).to_a.each {|i| Book.create(title: titles[i], author: authors[i], genre: genres[i])}