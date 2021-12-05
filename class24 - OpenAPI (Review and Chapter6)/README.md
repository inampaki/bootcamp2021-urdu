# Chapter 6

## Listing 6.1 Where request body goes in OpenAPI
```
openapi: 3.0.0
# ...
paths:
    /reviews
        post:
            requestBody: # ...
```

## Listing 6.2 POST /reviews description
```
openapi: 3.0.0
info:
  version: v1
  title: FarmtStall API
servers:
- url: https://farmstall.ponelat.com/v1

paths:
  /reviews:
   get: #... left out for brevity
   post:
        description: Create a new review
        requestBody:
          description: A new review object
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                  rating:
                    type: integer
                    minimum: 1
                    maximum: 5
                  userId:
                    type: string
                    pattern: '^[0-9a-fA-F\-]{36}$'
                    nullable: true
        responses:
          '201':
            description: Successfully created a new Review
            content:
              application/json:
                schema:
                  type: object
                  properties:
                    message:
                      type: string
                      example: An awesome time for the whole family.
                    rating:
                      type: integer
                      minimum: 1
                      maximum: 5
                      example: 5
                    userId:
                      type: string
                      nullable: true
                      pattern: '[a-zA-Z-.0-9]{36}'
                    uuid:
                      type: string
                      pattern: '[a-zA-Z-.0-9]{36}'
  /reviews/{reviewId}:
    get:
      description: Get a single review
      parameters:
      - name: reviewId
        in: path
        required: true
        schema:
          type: string
          minLength: 36
          maxLength: 36
          pattern: '[a-zA-Z0-9-]+'
      responses:
        '200':
          description: A single review
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: An awesome time for the whole family.
                  rating:
                    type: integer
                    minimum: 1
                    maximum: 5
                    example: 5
                  userId:
                    minLength: 36
                    maxLength: 36
                    pattern: '^[a-zA-Z0-9-]+$'
                    nullable: true
                    example: f7f680a8-d111-421f-b6b3-493ebf905078
                  uuid:
                    minLength: 36
                    maxLength: 36
                    pattern: '^[a-zA-Z0-9-]+$'
                    example: f7f680a8-d111-421f-b6b3-493ebf905078
```

## Listing 6.5 Request body with schema
```
openapi: 3.0.0
info:
  version: v1
  title: FarmStall API
servers:
  - url: https://farmstall.ponelat.com/v1
paths:
  /reviews:
    # get: ...
    post:
        description: Create a new review
        requestBody:
          description: A new review object
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                  rating:
                    type: integer
                    minimum: 1
                    maximum: 5
                  userId:
                    type: string
                    pattern: '^[0-9a-fA-F\-]{36}$'
                    nullable: true
        responses:
          '201':
            description: Successfully created a new Review
            content:
              application/json:
                schema:
                  type: object
                  properties:
                    message:
                      type: string
                      example: An awesome time for the whole family.
                    rating:
                      type: integer
                      minimum: 1
                      maximum: 5
                    userId:
                      type: string
                      nullable: true
                      pattern: '[a-zA-Z-.0-9]{36}'
                    uuid:
                      type: string
                      pattern: '[a-zA-Z-.0-9]{36}'
```

## Listing 6.10 The GET /review/{reviewId} operation

```
paths:
    #...
    /reviews/{reviewId}:
    get:
        description: Get a single review object
        responses:
        '200':
            description: Review object
            content:
                application/json:
```