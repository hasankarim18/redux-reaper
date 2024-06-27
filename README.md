# # What is redux?

- Redux is a predictable state container for javascript applications
  - redux can be use with any js frame work or libraries
- redux, react এর সাথে সবচেয়ে বেশি পপুলার বলে `react-redux` wrapper library তারা বানায় দিছে । `react-redux` is a wrapper

## # Key words

`1. Predictable` state container

- `Single source of truth`
  - আমরা একটা global state maintain করব যার ভিতেরে সকল global state গুলা থাকবে ।
- `Immutable behaviour`

  - আগের state copy করে রাখা লাগতেছিল আমাদের `useReducer`--> এর --> reducer fucntion এর ভিতর
  - কিন্তু `redux` বিহাইন্ড দ্যা সিন `immer` নামক function ব্যাবহার করে automatically `immutibility` maintain করে ।
  - আগে state আপডেট নিজেদেরই immutabiliy মেইনটেইন করি করতে হত
  - `immer` কাজ টাকে সহজ করে দেয় এবং অটােমিটিক্যালি সেটা বিহাইন্ড দ্যা সিন হতে থাকে

- `Usage of pure functions`
  - reducer এ স্টেট আপডেটের সময় যে function লিখতে হবে তা অবশ্যই পিওর হতে হবে । এবং কোন সাইড ইফেক্ট ট্রিগার করা যাবেনা ।
- `Object as a Action`

  - dispatch({type:"addTodo", payload: {id:123}})

- `Unidirectional flow`
  - predictable unidirectional flow
  - সাধারনত react app এর সকল কমপোনেন্ট redux store এর subscirbe করে থাকে, generally `redux store` টপ লেভেলে থাকে এবং টপ লেভেল থেকে সকল কমপোনেন্টে state পাস করতে সমস্যা হয়না ।
  -

`2. Centralize` state container

- পুরো state টা কোন centralize জায়গায় থাকবে এবং যে সকল component এই state ব্যাবহার করবে তারা redux store এ subscribe করে থাকবে

`3. DEebugable`

- redux dev tool

`4. Independent UI Framework`

`5. Middleware Support`

---

# # Inner workings of Redux

### # redux terminology

- Action
- Dispatch
- payload
- reducer
- store

#### # `Action` taken by user. Each action has a corresponding `reducer` function

- যখন কোন user state releted কোন একটা জায়গায় ইন্টারেকশন করবে, হয় চেন্জ করবে অথবা অন্য কিছু ।
  - যেমন কোন বাটন এ চাপ দিতে পারে, ফর্ম ইনপুট দিতে পারে সার্চ করতে পারে ।
- প্রত্যেক একশান এর জন্য নিদৃষ্ট (correponsing) reudcer function থাকবে যা `redux store` এর ভিতর `state` কে আপডেট করবে ।

#### # `Dispatch` means to send something . Sending the action object to the store. Dispatching an action triggers the corresponding reducer to update the state.

- সোজা কথায় কোন কিছু পাঠানো । একটা object পাঠানো হয় এখানে বলে দেয়া হয় `reducer` এর কোন `function` কে trigger করতে হবে এবং প্রয়োজনে সাথে `payload` এর পাধ্যমে ডাটা পাঠানো যায় ।

```
dispatch({type:"add", payload:12})
```

- `Action` is mainly `plain object`

- type দ্বারা বোঝানো হয় কোন `reducer` এর ভিতর কোন ফাংশান কে কল করতে হবে । যা `switch` or `if else` দিয়ে ঠিক করা হয় ।

#### # `Payload` - Optional `data` tha is attached to and `action`. It carries any additional information that needs to be sent along with the action to `update the state`

#### # `Reducer` -- A pure function. Always give same out put for same input .

#### # `Store`: The store holds the state of the application. The store is responsible for

- Dispatching action
- maintaining the state
- notify subscribers about the state changes

- `redux` এর `state` এর সাথে আরা সরাসরি যোগযোগ করবনা । আমরা `reducer` এর মাধ্যমে `redux state` update করব,
- `redux state` update হয়ে গেলে তা `redux store` এ চলে যাবে ।

- এবং component সমূহ যেহেতু `redux store` এর সাথে subscirbe অর্থাৎ কানেকটেড থাকে তাই `store` সবাইকে জানিয়ে দিবে `new update is available`,
- এখন যে `perticular state` আপডেট হয়েছে এবং সেটি যে `component` এ ব্যাবহৃত হয়েছে ডাকে আমরা `corresponding component` বলছি সে `re-render` করবে এবং সাথে সাথে `ui` তে দেখা যাবে ।

- শুধু মাত্র `corosponding component` যে বা যারা ওই `state` এর সাথে রিলেটেড তারাই `re-render` করবে এবং আপডেট সো করবে ।

- অন্য যেসব `component`, redux store এ subscribe করে আছে কিন্তু সেই `particular state` এর সাথে রিলেটেড নয় তারা `re-render` করবেনা ।

#### এই জন্য ‍`store` কে বলা হয় `single source of truth`

<div>
  <img src="./src/assets/redux-unidirectional-view.png" width="400px" >
</div>

#### `redux` is unidirectional, in the above picture we see

- From `View` which is your monitor, user take `action`
- This `action` will process then it will go to the `state`
- Then `state` will update the `view`

<div>
  <img src="./src/assets/redux-uni-flow.gif" width="600">
</div>

- User is takes action in ui, either click a button or put value in input field, it is called dispatching an action
- Action object is dispatched by `dispatch` function
  `dispatch({type:actionType,payload:10 })`

- then it goes to reducer, reducer will decide what need to be done by this action and which function need to be triggred for this perticular action.

- this reducer function updates the state and take
- action.type -- which decide what function needs to be triggered now.
- Old state from store
- new payload from action.payload
- calculate the outcome and update the state immutabily
- send the new state to the store == store.
- corresponding ui gets updated
