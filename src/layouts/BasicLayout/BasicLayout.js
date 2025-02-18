import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { TopBar } from "@/components/layout";
import styles from "./BasicLayout.module.scss";

export function BasicLayout(props) {
    const { 
        children, 
        isOpenSearch = false, 
        isContainer = false, 
        relative = false 
        } = props;
  return (
    <>
    {/* TODO: TopBar */}
    <TopBar isOpenSearch={isOpenSearch}/>

    <Container fluid>
        <div className={classNames ({[styles.relative]:relative})}>
        {isContainer ? <Container>{children}</Container> : children}
        </div>
    </Container>

    {/* TODO: Footer */}

    </>
  );
}
