import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import NavbarHeader from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import { Spinner } from "@material-tailwind/react"
import Pagination from "../components/Pagination"


const Home = () => {
    const { profiles, loading } = useSelector(state => state?.profiles)
    const [searchText, setSearchtext] = useState("")
    const [searchData, setSearchData] = useState(profiles)

    return (
        <div className='bg-black text-white min-h-screen' >
            <NavbarHeader value={searchText} onChange={setSearchtext} />
            {loading ? (
                <div className="flex h-[85vh] justify-center items-center" >
                    <Spinner className="h-20 w-20" color="blue" />
                </div>
            ) :
                <div className="p-10 md:p-16">
                    <div className="grid lg:grid-cols-2 gap-y-7 lg:gap-7" >
                        {searchData?.map((profile) => (
                            <ProfileCard key={profile?.name} data={profile} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-10" >
                        <Pagination />
                    </div>
                </div>
            }
        </div>
    )
}

export default Home