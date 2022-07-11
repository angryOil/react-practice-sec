import styles from "../styles/CssModule.module.scss";
import classNames from "classnames/bind";

const CSSModule = () => {
    console.log(styles)
    const cx = classNames.bind(styles);
    return (
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        // <div className={[styles.wrapper ,styles.inverted].join(" ")}>
        <div className={cx('wrapper' ,'inverted')}>
            안녕하세요 저는 <span className='something'>CSS Module~!</span>
        </div>
    );
};

export default CSSModule;