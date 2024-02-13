import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
} from "@material-tailwind/react";

const ProfileCard = ({ img = "https://picsum.photos/200/300", data }) => {
    return (
        <Card style={{ backgroundColor: data?.hair_color }} className="bg-gray-400 border border-gray-800 w-full md:flex-row overflow-hidden">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 md:w-2/5 shrink-0 rounded-b-none md:rounded-r-none"
            >
                <img
                    src={img}
                    alt="Profile image not found"
                    className="h-full w-full object-cover hover:scale-110 duration-500"
                />
            </CardHeader>
            <CardBody className="flex flex-col justify-center" >
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    {data?.name}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Hair color: {data?.hair_color}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Skin color: {data?.skin_color}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Vehicle count: {data?.vehicles?.length}
                </Typography>
                <Chip className="text-center w-fit px-5" value={data?.gender} />
            </CardBody>
        </Card>
    )
}

export default ProfileCard