import Link from "next/link";

export default function ReceipeCard({recipe}) {
    return (
        <div className = "bg-white border border-grey-200 rounded-[25px p-8 shadow-md hover:shadow-1g ">
            <h2 className="text-[#229799] text-x1 font-semibold mb-3">
            RED SAUCE PASTA
            </h2>
            <p className="text-[#424242] mb-4">{recipe.description}</p>
            <Link className="bg-[#48cfcb] hover:bg-[#4BCFCB] text-white font-semibold py-2 px-6 rounded" href={''}>
            View Recipe
            </Link>
        </div>
    )
}