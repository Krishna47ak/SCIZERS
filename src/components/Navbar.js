import {
    Navbar,
    Typography,
    Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavbarHeader = ({ value, onChange }) => {
    return (
        <Navbar
            variant="gradient"
            color="blue-gray"
            className="mx-auto max-w-full from-blue-gray-900 to-blue-gray-800 p-4 rounded-sm"
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    SCIZERS
                </Typography>
                <div className="mr-3">
                    <Input
                        type="search"
                        color="white"
                        label="Search - Profile..."
                        value={value}
                        onChange={e => onChange(e.target.value)}
                    />
                </div>
            </div>
        </Navbar>
    )
}

export default NavbarHeader