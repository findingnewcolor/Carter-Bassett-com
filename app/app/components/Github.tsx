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
        <div className="lg:w-[50%] mx-auto py-5 leading-loose">
            
            <div className="grid col-span-1 justify-center">
                <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                    <a href="https://github.com/NicholasHellmers" target="_blank"><p>User: {githubData.login}</p></a>
                    <p>Public Repos: {githubData.public_repos}</p>
                    <p>Followers: {githubData.followers}</p>
                </div>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-5">
                    {/* Limit the github repos to load 4 at a time */}
                    {githubRepos.slice(0, 4).map((repo: GithubRepo) => (
                        <li className="border rounded-md p-4 h-32" key={repo.name}>
                            <h4><a href={repo.html_url} target="_blank">{repo.name}</a></h4>
                            <p className="overflow-ellipsis overflow-hidden">{repo.description}</p>
                        </li>
                    ))}
                </ol>
            </div>

        </div>
    )
}
