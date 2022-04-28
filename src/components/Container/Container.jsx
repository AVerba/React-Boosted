import style from './Container.module.css'

export const Container = ({children, className}) =>{
const classList=`container ${className}`
  return(
    <div className={classList}>{children}</div>
  )
}
