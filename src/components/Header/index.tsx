import {Aside, Container, Location} from "./styles.ts";
import {Link} from "react-router-dom";
import {MapPin, ShoppingCart} from "phosphor-react";

export function Header() {
    return (
        <Container>
            <Link to="/">
                <img src="/logo.svg" alt="Coffee Delivery"/>
            </Link>
            <Aside>
                <Location><MapPin size={22} weight="fill"/> <span>Goiania, GO</span></Location>
                <Link to="/cart" aria-disabled={true} ><ShoppingCart size={22} weight="fill"/><span>3</span></Link>
            </Aside>
        </Container>
    )
}