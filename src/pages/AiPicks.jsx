import { useState } from "react";
import AlbumCard from "../components/AlbumCard.jsx";
import { useCollection } from "../context/CollectionContext.jsx";
import { getRecommendations } from "../services/ai.js";
import { searchAlbums } from "../services/itunes.js";

const MIN_ALBUMS = 3;

export default function AiPicks({ openAlbum }) {
    const { albums } = useCollection();
    const [picks, setPicks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const saved = Object.values(albums);
    const ratedCount = saved.filter((album) => album.rating > 0).length;

    const ask = async () => {
        setLoading(true);
        setError("");
        try {
            const taste = [...saved]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 40)
                .map((album) => ({
                    title: album.name,
                    artist: album.artist,
                    rating: album.rating,
                    status: album.status,
                }));
            const { albums: suggestions } = await getRecommendations(taste);
            const found = await Promise.all(
                suggestions.map(async (suggestion) => {
                    const [match] = await searchAlbums(
                        `${suggestion.title} ${suggestion.artist}`
                    );
                    return match ? { album: match, reason: suggestion.reason } : null;
                })
            );

            const seen = new Set();
            setPicks(
                found.filter((pick) => {
                    if (
                        !pick ||
                        albums[pick.album.collectionId] ||
                        seen.has(pick.album.collectionId)
                    ) {
                        return false;
                    }
                    seen.add(pick.album.collectionId);
                    return true;
                })
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="page">
            <h2 className="page-title">Recommendations</h2>
            {saved.length < MIN_ALBUMS ? (
                <p className="notice">
                    Save at least {MIN_ALBUMS} albums to your collection so there's a
                    listening pattern to learn from. You have {saved.length}.
                </p>
            ) : (
                <>
                    <p className="notice">
                        Based on the {saved.length} albums in your collection
                        {ratedCount > 0 ? `, ${ratedCount} of them rated` : ""}.
                        {ratedCount === 0 &&
                            " Add star ratings on the album pages for better results."}
                    </p>
                    <div className="search">
                        <button
                            className="primary"
                            onClick={ask}
                            disabled={loading}
                        >
                            {loading
                                ? "Analyzing your taste…"
                                : picks
                                  ? "Get new picks"
                                  : "Get recommendations"}
                        </button>
                    </div>
                </>
            )}
            {error && <p className="notice error">{error}</p>}
            {picks?.length === 0 && (
                <p className="notice">
                    No new matching albums found. Try again for a different set.
                </p>
            )}
            <div className="grid">
                {picks?.map(({ album, reason }) => (
                    <AlbumCard
                        key={album.collectionId}
                        title={album.collectionName}
                        artist={album.artistName}
                        art={album.artworkUrl100}
                        meta={reason}
                        onOpen={() => openAlbum(album.collectionId)}
                    />
                ))}
            </div>
        </section>
    );
}
