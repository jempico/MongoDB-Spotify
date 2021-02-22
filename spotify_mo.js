conn = new Mongo();
db = conn.getDB("spotify_mo");

db.user.insertOne({
    "_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
    "type" : "free",
    "email" : "maya@gmail.com",
    "password" : "12345",
    "username" : "maya123",
    "personal data" : {
        "birthdate" : new Date("2016-05-18T16:00:00Z"),
        "genre" : "female",
        "country" : "Spain",
        "zipcode" : "08024"
    },
    "playlists created": [ObjectId("60341d005e8c46bbbd4f6f6e")],
    "followed" : {
        "artists" : [ObjectId("60341d43f06ebc8123e6e74b")],
        "user" : [ObjectId("60341d9dbd13d59964b0633e")]
    },
    "favs" : {
        "albums" : [ObjectId("60341d7861e5677b459d410c")],
        "songs" : [ObjectId("60341da85326de174943478e"), ObjectId("60341debf04c3ff8a2bf8087")],
        "playlists" : [ObjectId("60341e2660431e7ed6058058")]
    },
    "subscriptions" : [ObjectId("60341e61415fbf010cf5decd")]
})

db.user.createIndex( { "password": 1 }, { unique: true } )
db.user.createIndex( { "username": 1 }, { unique: true } )

db.subscription.insertOne({
    "_id" : ObjectId("60341e61415fbf010cf5decd"),
    "user_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
    "start" : new Date("2016-05-18T16:00:00Z"),
    "update" : new Date("2017-05-18T16:00:00Z"),
    "payment" : {
        "type" : "credit",
        "card" : {
            "number" : "1234567890",
            "month" : 12,
            "year" : 2022,
            "security code" : 12345
        }
    },
    "bills" : [
        {
            "_id" : ObjectId("60341e653a1b3b2e17586f6f"),
            "date" : new Date("2017-05-18T16:00:00Z"),
            "total price" : 16.50
        },
        {
            "_id" : ObjectId("60341e722250fa4737a9a9bb"),
            "date" : new Date("2017-06-18T16:00:00Z"),
            "total price" : 16.50
        }
    ]
})

db.subscription.createIndex( { "bills._id": 1 }, { unique: true } )


db.subscription.createIndex( { "subscription.bills._id": 1 }, { unique: true } )

db.playlist.insertMany([{
    "_id" : ObjectId("60341d005e8c46bbbd4f6f6e"),
    "user_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
    "status" : "active",
    "title" : "Best Playlist Ever",
    "songs" : 2,
    "creation date" : new Date("2017-06-18T16:00:00Z"),
    "added songs" : [
        {
            "user_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
            "song_id" : ObjectId("60341da85326de174943478e"),
            "date" : new Date("2017-06-18T16:10:00Z")
        },
        {
            "user_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
            "song_id" : ObjectId("60341debf04c3ff8a2bf8087"),
            "date" : new Date("2017-06-18T16:15:00Z")
        },        
    ]
},
{
    "_id" : ObjectId("60341e2660431e7ed6058058"),
    "user_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
    "status" : "deleted",
    "date of deletion": new Date("2017-12-18T16:00:00Z"),
    "title" : "Best Playlist Ever",
    "songs" : 2,
    "creation date" : new Date("2017-06-18T16:00:00Z"),
    "added songs" : [
        {
            "user_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
            "song_id" : ObjectId("60341e49ce887f5b382f9fd1"),
            "date" : new Date("2017-06-18T16:10:00Z")
        },
        {
            "user_id" : ObjectId("60341ccb7d67ef8aba0cc618"),
            "song_id" : ObjectId("60341e4e814ba35969228442"),
            "date" : new Date("2017-06-18T16:15:00Z")
        },        
    ]
}]
)

db.artist.insertOne({
    "_id" : ObjectId("60341d43f06ebc8123e6e74b"),
    "name" : "Best artist ever",
    "image" : "someURL.com",
    "albums" : [ObjectId("60341d7861e5677b459d410c")],
    "songs" : [ObjectId("60341da85326de174943478e"), ObjectId("60341debf04c3ff8a2bf8087")],
    "similar artists" : [ObjectId("60341e96c5b2a5523c77414f")]
})

db.album.insertOne({
    "_id" : ObjectId("60341d7861e5677b459d410c"),
    "release date" : new Date("2017-06-18T16:15:00Z"),
    "title" : "This album rocks",
    "artist" : "Best artist ever",
    "artist_id" : ObjectId("60341d43f06ebc8123e6e74b"),
    "image" : "someURL.com",
    "songs" : [ObjectId("60341da85326de174943478e"), ObjectId("60341debf04c3ff8a2bf8087")]
})

db.song.insertMany([{
    "_id" : ObjectId("60341da85326de174943478e"),
    "title" : "First Best Song ever",
    "length" : 249,
    "album_id" : ObjectId("60341d7861e5677b459d410c"),
    "reproductions" : 540
},
{
    "_id" : ObjectId("60341debf04c3ff8a2bf8087"),
    "title" : "Second Best Song ever",
    "length" : 231,
    "album_id" : ObjectId("60341d7861e5677b459d410c"),
    "reproductions" : 450
}]
)