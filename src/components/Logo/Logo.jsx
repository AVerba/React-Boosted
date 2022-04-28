import {ReactComponent as LogoIcon} from "../../assets/icons/logo.svg";
import style from './Loogo.module.css'

export const Logo=()=>{
  return(
    <a className={style.logo} href="/">
      <LogoIcon/>
    </a>

  )
}
