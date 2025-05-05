import style from "./style.module.css";
import Image from "next/image";

export function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.imageContainer}>
                <Image src="/images/pin.jpg" alt="" fill></Image>
            </div>
        </div>
    );
}
