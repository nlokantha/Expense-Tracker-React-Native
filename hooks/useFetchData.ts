// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { collection, query, QueryConstraint } from 'firebase/firestore'
// import { firestore } from '@/config/firebase'

// const useFetchData =<T>(
//     collectionName:string,
//     constraints:QueryConstraint[]=[]
// ) => {
//     const [data,setData] = useState<T[]>([])
//     const [loading,setLoading] = useState(true)
//     const [error,setError] = useState<string | null>(null)

//     useEffect(()=>{
//         if(!collectionName) return
//         const collectionRef = collection(firestore,collectionName)
//         const q = query(collectionRef,...constraints)
//     },[])
//   return (
//     // <View>
//     //   <Text>useFetchData</Text>
//     // </View>
//   )
// }

// export default useFetchData