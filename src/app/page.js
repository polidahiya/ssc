import Link from "next/link";

async function page() {
  const linkClass = `
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    text-white w-full text-center py-4 rounded-lg 
    shadow-lg transition-transform transform hover:scale-105 
    hover:shadow-2xl duration-300 ease-in-out
  `;

  const containerClass = `
    flex flex-col items-center max-w-4xl mx-auto mt-12
  `;

  return (
    <div className={containerClass}>
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-900">
        Explore Topics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        <Link className={linkClass} href="constititutionofindia">Articles</Link>
        <Link className={linkClass} href="dams">Dams</Link>
        <Link className={linkClass} href="dances">Dances</Link>
        <Link className={linkClass} href="studies">Studies</Link>
        <Link className={linkClass} href="state_foundation_date">States Foundation Dates</Link>
        <Link className={linkClass} href="Sports_field_info">Sports Field Info</Link>
        <Link className={linkClass} href="sea_ports">Sea Ports</Link>
        <Link className={linkClass} href="sanctuaries">Sanctuaries</Link>
        <Link className={linkClass} href="river_systems">River Systems</Link>
        <Link className={linkClass} href="festivals">Festivals</Link>
        <Link className={linkClass} href="exportimport">Exports and Imports</Link>
        <Link className={linkClass} href="freshwaterlakes">Fresh Water Lakes</Link>
        <Link className={linkClass} href="governors">Governors</Link>
        <Link className={linkClass} href="highestpeaks">Highest Peaks</Link>
        <Link className={linkClass} href="verbs">Verbs</Link>
        <Link className={linkClass} href="importantpersons">Important Persons</Link>
        <Link className={linkClass} href="localsports">Local Sports</Link>
        <Link className={linkClass} href="mines">Mines</Link>
        <Link className={linkClass} href="ministers">Ministers</Link>
        <Link className={linkClass} href="nameofcellsinorgans">Name of Cells in Organs</Link>
        <Link className={linkClass} href="nationalhighways">National Highways</Link>
        <Link className={linkClass} href="physicsunits">Physics Units</Link>
        <Link className={linkClass} href="words_use_in_sprots">Sports Words</Link>
        <Link className={linkClass} href="pardhanmantriyojnas">Pradhan Mantri Yojnas</Link>
        <Link className={linkClass} href="studiesofdiffthings">Studies of Different Things</Link>
        <Link className={linkClass} href="adjectives">Adjectives</Link>
        <Link className={linkClass} href="adverbs">Adverbs</Link>
        <Link className={linkClass} href="antonyms">Antonyms</Link>
        <Link className={linkClass} href="nouns">Nouns</Link>
        <Link className={linkClass} href="synonyms">Synonyms</Link>
        <Link className={linkClass} href="sportswords">Sports Words</Link>
      </div>
    </div>
  );
}

export default page;
