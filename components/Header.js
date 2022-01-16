import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { BadgeCheckIcon , CollectionIcon , HomeIcon , LightningBoltIcon, SearchIcon , UserIcon } from '@heroicons/react/solid'
export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between m-5 items-center">
         <div className="flex flex-group justify-evenly max-w-2xl">
            <HeaderItem title="Home" Icon={HomeIcon} />
            <HeaderItem title="Trending" Icon={LightningBoltIcon} />
            <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
            <HeaderItem title="Collections" Icon={CollectionIcon} />
            <HeaderItem title="Search" Icon={SearchIcon} />
            <HeaderItem title="Users" Icon={UserIcon} />
         </div>
             <Image
             className="object-contain"
             width={200}
             height={100}
             src="https://links.papareact.com/ua6"
             />
        </header>
    )
}
