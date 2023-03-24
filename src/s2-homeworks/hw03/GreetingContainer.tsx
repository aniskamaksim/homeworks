import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import user from "../hw08/User";


type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string)=>void, setName: (name: string)=>void, addUserCallback: (name: string)=>void) => {
   if (name.trim().length === 0) {
       setError('Ошибка! Введите имя!')
   } else {
       addUserCallback(name)
        setName('')

   }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string)=>void) => { // если имя пустое - показать ошибку
    if (name.trim().length === 0) {
        setError('Ошибка! Введите имя!')
    } else {
        setError('')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => {
        if (e.key === 'Enter') {
            addUser()
        }
}
        // если нажата кнопка Enter - добавить

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        // const trimmedName = e.currentTarget.value
        if (e.currentTarget.value) {
            setName(e.currentTarget.value)
            setError('')
            // error && setError('')
        } else {
            setName('')
            //name && setName('')
            setError('please fill the name field')
            // error && setError('please fill the name field')
        }
         // need to fix
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    // console.log(typeof totalUsers)

    // const lastUserNameFunction = () => {
    //     const lastElInArray = users[users.length - 1]
    //     if (users.length === 0) {
    //         return 'name will be here'
    //     } else {
    //         return lastElInArray
    //     }
    // }

    const lastUserName = users.length > 0 ? users[users.length - 1].name : 'Anonymous'
    // console.log('u', users)
    // console.log('user', users[users.length - 1])
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
