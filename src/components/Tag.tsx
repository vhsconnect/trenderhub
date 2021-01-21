import * as React from 'react'
import * as styles from '../styles/stylesClasses'
const Tag = (props: { text: string })  => {
  return (
    <div>
      <p className={styles.tag}>{props.text}</p>
    </div>
  )
}
export default Tag
