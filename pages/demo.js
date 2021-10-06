import Block from '../components/Block/Block';
import styles from '../styles/Demo.module.css'

const Demo = () => {
    return ( <>
        <h2 className='center'>Local Blockchain Demonstration</h2>
        <div className={styles.blockchain}>
            <Block/>
        </div>
    </> );
}
 
export default Demo;