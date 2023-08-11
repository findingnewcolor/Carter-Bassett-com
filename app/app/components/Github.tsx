type GithubData = {
    login: string,
    public_repos: number,
    followers: number,
}

type GithubRepo = {
    name: string,
    description: string,
    html_url: string
}

async function getGithubData(): Promise<GithubData> {
    const res = await fetch('https://api.github.com/users/NicholasHellmers')
    const data: GithubData = await res.json()
    return data
}

async function getGithubRepos(): Promise<GithubRepo[]> {
    const res = await fetch('https://api.github.com/users/NicholasHellmers/repos')
    const data: GithubRepo[] = await res.json()
    return data
}

export default async function Github() {
    const githubData: GithubData = await getGithubData()
    const githubRepos: GithubRepo[] = await getGithubRepos()
    return (
        <div className="lg:w-[50%] mx-auto">
            
            <div>
                <h3>GitHub summary:</h3>
                <p>Username: {githubData.login}</p>
                <p>Public Repos: {githubData.public_repos}</p>
                <p>Followers: {githubData.followers}</p>

                <h3>GitHub Repos:</h3>
                <ol className="grid grid-cols-2 gap-10 px-10 py-5">
                    {githubRepos.map((repo) => (
                        <li className="border" key={repo.name}>
                            <h4>{repo.name}</h4>
                            <p>{repo.description}</p>
                            <p>{repo.html_url}</p>
                        </li>
                    ))}
                </ol>
            </div>

        </div>
    )
}
