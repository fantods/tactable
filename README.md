# JSON Placeholder Typescript API with IoC

Using Typescript we'd like you to do the following:

- Create a class called ApiManager, it will have a TodoClient class injected via DI (Please use inversify js)
- The client will handle making a rest call to https://jsonplaceholder.typicode.com/todos
- The ApiManager class just has to implement an interface with one method `fetchData`
- There needs to be a jest unit test for the client that mocks the http call
- There needs to be an integration test which validates client is injected properly

## To Run:

```
npm install
npm start
```

## Testing:

```
npm test
```

