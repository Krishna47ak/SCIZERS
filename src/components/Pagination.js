import { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "../store/actions/profiles";

export default function Pagination() {
    const { next, previous } = useSelector(state => state?.profiles)

    const [active, setActive] = useState(1);
    const dispatch = useDispatch()

    const nextPage = () => {
        if (next) {
            dispatch(paginate(next))
        }
    };

    const prevPage = () => {
        if (previous) {
            dispatch(paginate(previous))
        }
    };

    return (
        <div className="flex items-center gap-8">
            <IconButton
                size="sm"
                variant="outlined"
                color="white"
                onClick={prevPage}
                disabled={previous === null}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal text-white">
                Page <strong className="text-white">{next.slice(-1) - 1}</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                color="white"
                onClick={nextPage}
                disabled={next === null}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}