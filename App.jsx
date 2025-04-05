// import React from 'react'
// import Product from './components/Product'
// import Person from './components/Person'
// import New from './components/New'
// import New1 from './components/New1'

// const App = () => {
//   // const personDetails = {
//   //   name: 'Rama',
//   //   age: 20,
//   //   role: 'student'
//   // }
//   return (
//     <>
//       <div>
//         {/* <Product product='S24 Ultra' price={150000} brand='Samsung' camera = '64mp' />
//         <Product product='iPhone 16' price={160000} brand='Apple' />
//         <Product product='OnePlus 13' price={50000} brand='OnePlus' /> */}
//       </div>
      
//       <div>
//         {/* <Person name = 'Rama' age = {19} role = 'CEO' hobbies = 'Cooking'/>
//         <Person name = 'Siva' age = {18} role = 'CTO' hobbies = 'Eating'/>
//         <Person name = 'Sai' age = {20} role = 'CFO'hobbies = 'Drinking'/> */}
//       </div>

//       <div>
//         {/* <Person name = 'Rama' age = {19} pancard = {false} /> */}
//       </div>

//       <div>
//         <New1/>
//       </div>

//       <div>
//         {/* <New/> */}
//       </div>
//     </>
//   )
// }

// export default App

import React from 'react'
import Movies from './components/Movie/Movies'
import { movies } from './components/Movie/data'

const App = () => {
  return (
    <div>
      <Movies/>
    </div>
  )
}

export default App