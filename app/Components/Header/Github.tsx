'use client'

import React, { useState, useEffect } from 'react'

export default function Github() {
    
    const user: string = 'NicholasHellmers'

    interface GithubData {
        login: string,
        public_repos: number,
        followers: number,
    }

    interface GithubRepo {
        name: string,
        description: string,
        html_url: string
    }

    const [githubData, setGithubData] = useState<GithubData>()
    const [githubRepos, setGithubRepos] = useState<GithubRepo[]>()

    useEffect(() => {
        const fetchGithubData = async () => {
            const res = await fetch('https://api.github.com/users/' + user)
            const data = await res.json()
            setGithubData(data)
            console.log(data)
        }
        const fetchGithubRepos = async () => {
            const res = await fetch('https://api.github.com/users/' + user + '/repos')
            const data = await res.json()
            setGithubRepos(data)
            console.log(data)
        }
        fetchGithubData()
        fetchGithubRepos()
    }, [])

  return (
    <div>
        
        <div>
            <h3>Here's my GitHub summary</h3>
            {
                githubData ? ( 
                    <div>
                        <div className='flex gap-6'>
                            <p>Username: {githubData.login}</p>
                            <p>Public Repos: {githubData.public_repos}</p>
                            <p>Followers: {githubData.followers}</p>
                        </div>

                        {
                            githubRepos ? (
                                <div>
                                    <p>Here are my public repos:</p>
                                    <ul className='grid grid-cols-4 gap-6'>
                                        { githubRepos.map((repo) => (
                                            <a href={repo.html_url} target="_blank" className='border-2 border-white h-48'>
                                            <li key={repo.name}>
                                                <h3>{repo.name}</h3>
                                                <p>{repo.description}</p>
                                            </li>
                                            </a>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )
                        }
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>

    </div>
  )
}
