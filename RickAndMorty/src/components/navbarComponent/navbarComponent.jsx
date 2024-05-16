import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
import './navbarComponent.css'

export const NavbarComponent = () => {

    return (
        <>
            <nav className="navbar__content">

                <div>
                    <NavLink to = 'personList'>
                        <h2 className="navbar__content__titlte">Ricky And Morty</h2>
                    </NavLink>
                </div>

                <div className="navbar__content__buttons">
                    <NavLink to = 'episodes'>
                        <button className="navbar__content__button">Episodes</button>
                    </NavLink>

                    <NavLink to = 'formCharacter'>
                        <button className="navbar__content__button">Add Character</button>
                    </NavLink>
                </div>
            </nav>

            <Outlet/>

        </>
    )
}
