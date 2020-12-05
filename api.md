## Server API

### Get listing reviews

- GET: `/api/listings/:listing_id/reviews`

**Path Parameters:**

- `id` listing id

**Success Status Code:** `200`

**Returns:** JSON

```json
{
  "reviews": [
    {
      "id": "Number",
      "review": {
        "text": "String",
        "date": "String"
      },
      "user": {
        "username": "String",
        "first_name": "String",
        "last_name": "String",
        "avatar_url": "String"
      },
      "ratings": {
        "cleanliness": "Number",
        "communication": "Number",
        "check_in": "Number",
        "accuracy": "Number",
        "location": "Number",
        "value": "Number"
      }
    }
  ]
}
```

Used to retrieve a single **listing** by its id number.

Given a listing id, this call will return an array of reviews associated with the listing, including supplemental user information.

### Create review

- POST `/api/listings/:listing_id/reviews`

**Path Parameters:**

- `id` listing id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
{
  "username": "String",
  "listing_id": "Number",
  "review": {
    "text": "String"
  },
  "ratings": {
    "cleanliness": "Number",
    "communication": "Number",
    "check_in": "Number",
    "accuracy": "Number",
    "location": "Number",
    "value": "Number"
  }
}
```

Used to add a review to an existing listing.

Given a listing id, and the content of a review in the request body, this path will add a new review with the specified content, to a particular listing.

### Update a review

- PUT `/api/listings/:listing_id/reviews/:review_id`

**Path Parameters**

- `listing_id` listing id
- `review_id` review id

**Success Status Code:** `204`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated)

```json
{
  "id": "Number",
  "review": {
    "text": "String"
  },
  "ratings": {
    "cleanliness": "Number",
    "communication": "Number",
    "check_in": "Number",
    "accuracy": "Number",
    "location": "Number",
    "value": "Number"
  }
}
```

Used to update a **review** for a particular listing.

Given a specific review, this route will update said review with information as included in the request body.

### Delete a review

- DELETE `/api/listings/:listing_id/reviews/:review_id`

**Path Parameters:**

- `listing_id` listing id
- `review_id` review id

**Success Status Code:** `204`

Used to delete a **review** for a particular listing.

Given a specific listing and review, this will delete the review in question.
