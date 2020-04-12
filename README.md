# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

## Mutation Examples

```
mutation {
  addSong(title: "Cold Night") {
    id
  }
}

```

## Query Examples

```
query {
  songs {
    id
    title
    lyrics {
      id
      content
    }
  }
}

```


## Query Variables Example

```
mutation AddSong($title: String) {
	addSong(title: $title) {
    title
    id
  }
}

```

## Cold Cache vs Warm Cache in Apollo

* `Cold Cache` - The session didn't already load a certain piece of data so it is forced to fetch it from the server.
* `Warm Cache` - The session did already load a certain piece of data, so it returns what is in the cache (this can cause bugs if you just updated the information)
