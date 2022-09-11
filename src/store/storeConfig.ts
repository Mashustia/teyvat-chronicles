export const a = 1
// import { useLocalStore } from 'mobx-react'
// import {CharactersStore} from './modules/characters/characters';
// import {createContext, FC, PropsWithChildren, useContext} from 'react'; // 6.x or mobx-react-lite@1.4.0
//
// const storeContext = createContext<CharactersStore | null>(null)
//
// export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
//   const store = useLocalStore(CharactersStore)
//   return <storeContext.Provider value={store}>{children}</storeContext.Provider>
// }
//
// export const useStore = () => {
//   const store = useContext(storeContext)
//   if (!store) {
//     // this is especially useful in TypeScript so you don't need to be checking for null all the time
//     throw new Error('useStore must be used within a StoreProvider.')
//   }
//   return store
// }
