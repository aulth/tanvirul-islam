import React, { useState, useEffect } from 'react'
import ReleaseUpload from './ReleaseUpload'
import ReleaseItem from './ReleaseItem'
const Release = () => {
    const [releases, setReleases] = useState([]);
    const fetchReleases = async () => {
        const res = await fetch("/api/admin/release/get", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json()
        if (json.success) {
            setReleases(json.release)
        }
    }
    useEffect(() => {
        fetchReleases();
    }, [])
    return (
        <>
            <ReleaseUpload fetchReleases={fetchReleases} />
            {
                releases && releases.length > 0 &&
                releases.map((release, index) => {
                    return <ReleaseItem fetchReleases={fetchReleases} key={index} data={release} />
                })
            }
        </>
    )
}

export default Release