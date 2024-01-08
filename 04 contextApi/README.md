# Why Context Api?

### let take example:
- `Username is present in <Card username='zain'/> which is the child of <App />`

- `We want to user username in <Dashboard /> -> <Right /> -> <TopComp /> -> <Card />`

> `For this we can move usrename from all previous parent component to show it in child component <Card /> in dashboard`

>**Prop Drilling:** 
>
>![adasd](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.dark.png&w=1920&q=75)

- This is create mess because we are using same props in many component which have no need of it. They Only take this to pass to next component.

# Context API

`To solve the above problem context api provide a solution`

- `It create a separate storage which can be accessed by all of component if any component need data they can take it from there`

- learn more: [passing-data-deeply-with-context]( https://react.dev/learn/passing-data-deeply-with-context)


## Steps
1. Step 1: Create Context and export it