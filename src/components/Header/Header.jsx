import {Logo} from '../Logo'
import {Container} from "../Container";
import style from './Header.module.css'

export const Header=()=>{

  return (
    <header className={style.header}>
      <Container className={style.headerContainer}>
        <Logo/>
      </Container>
    </header>

  )
}
