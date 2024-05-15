import { NavLink } from "react-router-dom"

export const Navbar = () => {

    return (
        <>
            <nav>

                <div>
                    <NavLink>
                        <h2>Ricky And Morty</h2>
                    </NavLink>
                </div>

                <div>
                    <NavLink>
                        <button>Episodes</button>
                    </NavLink>

                    <NavLink>
                        <button>Add Character</button>
                    </NavLink>
                </div>
            </nav>

        </>
    )
}
