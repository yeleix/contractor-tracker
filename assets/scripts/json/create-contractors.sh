#!/bin/bash


curl "http://localhost:4741/contractors" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "contractor": {
        "first_name": "'"${FIRST_NAME}"'",
        "last_name": "'"${LAST_NAME}"'",
        "born_on": "'"${BORN_ON}"'",
        "gender": "'"${GENDER}"'",
        "hire_date": "'"${HIRE_DATE}"'"
      }
    }'

echo
