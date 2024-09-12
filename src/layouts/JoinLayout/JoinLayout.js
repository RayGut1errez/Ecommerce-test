import { Icon, Image } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import styles from "./JoinLayout.module.scss"

export function JoinLayout(props) {
    const { children } = props;
    const { user } = useAuth();
    const router = useRouter();

    if(user) router.push("/");

  return (
    <div className={styles.container}>

        <div className={styles.topBar}>
            <Link href="/">
            
              <Image src="/images/Marca2.png" alt="Joyeria Ek Logo"></Image>
            
            </Link>
               
            <Link href="/">
                <Icon name="close" />
            </Link>
        </div>

        <div className={styles.blockLeft}>{children}</div>

        <div className={styles.blockRight}></div> 
    </div>
  )
}
