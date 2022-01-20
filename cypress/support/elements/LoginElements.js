class loginElements{
    inputUser = () => {return '#email'}
    inputPassword = () => {return '#passwd'}
    clickBtnLogin = () => {return '#SubmitLogin > span'}
    messageErrorLogin = () => {return '#center_column > :nth-child(2)'}
    verifyMessageError = () => {return 'contain', 'Invalid password.'}
    home = () => {return '.logo'}
}

export default loginElements