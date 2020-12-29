---
id: data
title: Data v4.0.0
sidebar_label: Data
---
## Overview


## Cells

### Entries

Returns all entries for a given entry type

#### Request

```http
GET {{baseUrl}}/api/rest/v4/data/entrydata/{{entryTypeId}}/entries
Authorization: {{auth}}

```

#### Response


### History

Returns entries modified or deleted since the DataTime value provided. Accepts valid iso8601 DateTime formats

#### Request

```http
GET {{baseUrl}}/api/rest/v4/data/entrydata/{{entryTypeId}}/entries/history
    ?modifiedSince={{$datetime iso8601 -6 M}}
Authorization: {{auth}}

```

#### Response


### Filter

Returns an array of EntryIds for filtered Entries. DateTime filters have a resolutions of nearest day.

#### Request

#### Response


### Get

Returns field meta data for the provided entries and fields

#### Request

#### Response


### Get Historical Data

Returns entry field values at the DateTime specified. Deleted entries only returns the value at the time of deletion. Calculated fields only returns current value.

#### Request

#### Response


### POST

Creates new entries. New entries should have a invalid EntryId. Recommendation is to start at -1 and decrement for each new entry in a batch. Take a maximum batch size of 10000 items.

#### Request

#### Response


### PUT

Updates existing entries. Entries should have a valid EntryId. Take a maximum batch size of 10000 items.

#### Request

#### Response

### DELETE

Deletes entries

#### Request

#### Response

## Rows

### GET

Gets entries and their field meta data

#### Request

#### Response

### POST

Creates new entries. New entries should have a invalid EntryId. Recommendation is to start at -1 and decrement for each new entry in a batch.

#### Request

#### Response

### PATCH

Updates existing entries. Entries should have a valid EntryId.

#### Request

#### Response

## Views

### GET

Gets views

#### Request

#### Response

### POST

Gets view data

#### Request

#### Response
