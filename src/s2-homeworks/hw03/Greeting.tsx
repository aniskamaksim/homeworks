import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    onBlur: ()=>void // need to fix any
    onEnter: (e: any)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = error.length > 0 ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Current counter of users: '}
                <div className={s.usersTotal}>
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span></div>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    {/*<div id={'hw3-error'} className={s.error}>*/}
                    {/*    {error}*/}
                    {/*</div>*/}
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    add
                </button>
            </div>
            <div id={'hw3-error'} className={s.error}>
                {error}
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет&nbsp;<span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
