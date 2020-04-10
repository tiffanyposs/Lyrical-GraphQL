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
