# Avito-openapi-str-client

Implement request flow for Avito OpenApi in Short Term Rent

[Docs](https://developers.avito.ru/api-catalog/str/documentation#operation/putBookingsInfo)

# Usage
1. [Register app](https://developers.avito.ru/applications), get CLIENT_ID and CLIENT_SECRET, put in [credentials](src/credentials.ts)

2. Getting link for user authorization
   `STEP=LINK npm start`

3. Getting access token and refresh token from authorization code
   `STEP=TOKEN CODE=<code from redirect> npm start`

4. Refresh access token
   `STEP=REFRESH CODE=<refresh_token> npm start`

5. Get avito bookings info
   `STEP=GET_BOOKINGS TOKEN=<access_token> ITEM_ID=<your item id> USER_ID=<your seller id> npm start`

6. Set bookings info
   `STEP=PUSH_BOOKINGS TOKEN=<access_token> ITEM_ID=<your item id> USER_ID=<your seller id> npm start`

7. Set days params
   `STEP=SET_PARAMS TOKEN=<access_token> ITEM_ID=<your item id> USER_ID=<your seller id> npm start`